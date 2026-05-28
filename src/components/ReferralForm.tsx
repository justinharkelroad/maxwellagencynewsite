import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ReferralFormProps {
  staffName: string;
  onSuccess?: () => void;
}

const empty = {
  referrer_name: "",
  referrer_email: "",
  referee_name: "",
  referee_phone: "",
  referee_email: "",
  note: "",
};

const API_URL = import.meta.env.VITE_LEAD_CAPTURE_API_URL as string;
const SITE_ID = import.meta.env.VITE_SITE_ID as string;

const ReferralForm = ({ staffName, onSuccess }: ReferralFormProps) => {
  const { toast } = useToast();
  const [data, setData] = useState(empty);
  const [hp, setHp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sessionTokenRef = useRef<string | null>(null);

  const update = <K extends keyof typeof empty>(k: K, v: (typeof empty)[K]) =>
    setData((p) => ({ ...p, [k]: v }));

  const callSave = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/hosted-site-lead-save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteId: SITE_ID,
          sessionToken: sessionTokenRef.current ?? undefined,
          honeypot: hp || undefined,
          fields: {
            name: data.referee_name.trim() || undefined,
            email: data.referee_email.trim() || undefined,
            phone: data.referee_phone.trim() || undefined,
            insurance_type: "Referral",
            message: [
              `Referred by ${data.referrer_name.trim() || "(unspecified)"}`,
              data.referrer_email.trim()
                ? `Referrer email: ${data.referrer_email.trim()}`
                : null,
              `Routed to: ${staffName}`,
              data.note.trim() ? `Note: ${data.note.trim()}` : null,
            ]
              .filter(Boolean)
              .join("\n"),
          },
        }),
      });
      const body = (await res.json().catch(() => ({}))) as {
        session_token?: string;
        message?: string;
      };
      if (!res.ok) return body;
      if (body.session_token) sessionTokenRef.current = body.session_token;
      return body;
    } catch {
      return null;
    }
  }, [data, hp, staffName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (hp) {
      toast({
        title: "Referral submitted!",
        description: `We&rsquo;ll reach out to ${data.referee_name || "your friend"} within 24 hours.`,
      });
      return;
    }

    if (!data.referrer_name.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }
    if (!data.referee_name.trim()) {
      toast({
        title: "Please enter the name of the person you&rsquo;re referring",
        variant: "destructive",
      });
      return;
    }
    if (!data.referee_phone.trim() && !data.referee_email.trim()) {
      toast({
        title: "We need at least a phone or email to reach them",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const save = await callSave();
      if (!save?.session_token || !sessionTokenRef.current) {
        throw new Error(save?.message || "Could not save referral.");
      }

      const submitRes = await fetch(`${API_URL}/hosted-site-lead-submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteId: SITE_ID,
          sessionToken: sessionTokenRef.current,
        }),
      });

      if (!submitRes.ok) {
        const err = await submitRes
          .json()
          .catch(() => ({ message: "Submission failed." }));
        throw new Error(err.message || "Submission failed.");
      }

      toast({
        title: "Referral submitted!",
        description: `Thanks for the intro. We&rsquo;ll reach out to ${data.referee_name} within 24 hours.`,
      });
      setData(empty);
      sessionTokenRef.current = null;
      onSuccess?.();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us at (254) 294-3311.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
          />
        </label>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-bold uppercase tracking-wide text-popover-foreground/70">
          About you
        </h3>
      </div>

      <div>
        <label className="text-sm font-medium text-popover-foreground mb-1 block">
          Your name *
        </label>
        <Input
          value={data.referrer_name}
          onChange={(e) => update("referrer_name", e.target.value)}
          placeholder="Your full name"
          maxLength={255}
          autoComplete="name"
          className="bg-popover text-popover-foreground border-border"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-popover-foreground mb-1 block">
          Your email <span className="text-popover-foreground/50 font-normal">(so we can thank you)</span>
        </label>
        <Input
          type="email"
          value={data.referrer_email}
          onChange={(e) => update("referrer_email", e.target.value)}
          placeholder="you@email.com"
          maxLength={255}
          autoComplete="email"
          className="bg-popover text-popover-foreground border-border"
        />
      </div>

      <div className="pt-2 space-y-1">
        <h3 className="text-sm font-bold uppercase tracking-wide text-popover-foreground/70">
          Who you&rsquo;re referring
        </h3>
      </div>

      <div>
        <label className="text-sm font-medium text-popover-foreground mb-1 block">
          Their name *
        </label>
        <Input
          value={data.referee_name}
          onChange={(e) => update("referee_name", e.target.value)}
          placeholder="Their full name"
          maxLength={255}
          className="bg-popover text-popover-foreground border-border"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-popover-foreground mb-1 block">
          Their phone <span className="text-popover-foreground/50 font-normal">(phone or email required)</span>
        </label>
        <Input
          type="tel"
          value={data.referee_phone}
          onChange={(e) => update("referee_phone", e.target.value)}
          placeholder="(254) 555-0123"
          maxLength={50}
          className="bg-popover text-popover-foreground border-border"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-popover-foreground mb-1 block">
          Their email
        </label>
        <Input
          type="email"
          value={data.referee_email}
          onChange={(e) => update("referee_email", e.target.value)}
          placeholder="friend@email.com"
          maxLength={255}
          className="bg-popover text-popover-foreground border-border"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-popover-foreground mb-1 block">
          Anything we should know? <span className="text-popover-foreground/50 font-normal">(optional)</span>
        </label>
        <Textarea
          value={data.note}
          onChange={(e) => update("note", e.target.value)}
          placeholder="What kind of coverage are they looking for?"
          rows={3}
          maxLength={2000}
          className="bg-popover text-popover-foreground border-border"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : `Send referral to ${staffName}`}
      </Button>

      <p className="text-xs text-center text-popover-foreground/70 leading-relaxed">
        We&rsquo;ll let you know when they&rsquo;re a client. We never sell info.
      </p>
    </form>
  );
};

export default ReferralForm;
