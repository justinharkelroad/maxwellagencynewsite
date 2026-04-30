import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface QuoteFormProps {
  onSuccess?: () => void;
  initialInsuranceType?: string;
}

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  insurance_type: "",
  message: "",
};

const API_URL = import.meta.env.VITE_LEAD_CAPTURE_API_URL as string;
const SITE_ID = import.meta.env.VITE_SITE_ID as string;

interface SaveResponse {
  session_token?: string;
  updated_at?: string;
  error?: string;
  message?: string;
}

const QuoteForm = ({ onSuccess, initialInsuranceType }: QuoteFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    ...emptyForm,
    insurance_type: initialInsuranceType ?? "",
  });
  const [hp, setHp] = useState("");

  const sessionTokenRef = useRef<string | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (initialInsuranceType) {
      setFormData((prev) => ({ ...prev, insurance_type: initialInsuranceType }));
    }
  }, [initialInsuranceType]);

  const callSave = useCallback(
    async (data: typeof formData): Promise<SaveResponse | null> => {
      const hasData =
        data.name.trim() || data.email.trim() || data.phone.trim();
      if (!hasData) return null;

      try {
        const res = await fetch(`${API_URL}/hosted-site-lead-save`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            siteId: SITE_ID,
            sessionToken: sessionTokenRef.current ?? undefined,
            honeypot: hp || undefined,
            fields: {
              name: data.name.trim() || undefined,
              email: data.email.trim() || undefined,
              phone: data.phone.trim() || undefined,
              insurance_type: data.insurance_type || undefined,
              message: data.message.trim() || undefined,
            },
          }),
        });
        const body: SaveResponse = await res.json().catch(() => ({}));
        if (!res.ok) return body;
        if (body.session_token) sessionTokenRef.current = body.session_token;
        return body;
      } catch {
        return null;
      }
    },
    [hp],
  );

  const scheduleAutoSave = useCallback(
    (data: typeof formData) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        void callSave(data);
      }, 500);
    },
    [callSave],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (hp) {
      toast({
        title: "Quote request submitted!",
        description: "We'll be in touch within 24 hours.",
      });
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.insurance_type
    ) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      if (debounceRef.current) clearTimeout(debounceRef.current);

      const save = await callSave(formData);
      if (!save?.session_token || !sessionTokenRef.current) {
        throw new Error(save?.message || "Could not save lead.");
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
        title: "Quote request submitted!",
        description: "We'll be in touch within 24 hours.",
      });
      setFormData({ ...emptyForm, insurance_type: initialInsuranceType ?? "" });
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

  const updateField = <K extends keyof typeof formData>(
    key: K,
    value: (typeof formData)[K],
  ) => {
    setFormData((prev) => {
      const next = { ...prev, [key]: value };
      scheduleAutoSave(next);
      return next;
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from users + assistive tech */}
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

      <div>
        <label className="text-sm font-medium text-popover-foreground mb-1 block">
          Name *
        </label>
        <Input
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          placeholder="Your full name"
          maxLength={255}
          autoComplete="name"
          className="bg-popover text-popover-foreground border-border"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-popover-foreground mb-1 block">
          Phone *
        </label>
        <Input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          placeholder="(254) 555-0123"
          maxLength={50}
          autoComplete="tel"
          className="bg-popover text-popover-foreground border-border"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-popover-foreground mb-1 block">
          Email *
        </label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="your@email.com"
          maxLength={255}
          autoComplete="email"
          className="bg-popover text-popover-foreground border-border"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-popover-foreground mb-1 block">
          Insurance Type *
        </label>
        <Select
          value={formData.insurance_type}
          onValueChange={(value) => updateField("insurance_type", value)}
        >
          <SelectTrigger className="bg-popover text-popover-foreground border-border">
            <SelectValue placeholder="Select insurance type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Auto">Auto Insurance</SelectItem>
            <SelectItem value="Home">Home Insurance</SelectItem>
            <SelectItem value="Life">Life Insurance</SelectItem>
            <SelectItem value="Business">Business Insurance</SelectItem>
            <SelectItem value="Renters">Renters Insurance</SelectItem>
            <SelectItem value="Flood">Flood &amp; Storm</SelectItem>
            <SelectItem value="Umbrella">Umbrella Insurance</SelectItem>
            <SelectItem value="Specialty">Boat / Motorcycle / RV</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium text-popover-foreground mb-1 block">
          Message
        </label>
        <Textarea
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Tell us about your insurance needs..."
          rows={3}
          maxLength={2000}
          className="bg-popover text-popover-foreground border-border"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Quote Request"}
      </Button>

      <p className="text-xs text-center text-popover-foreground/60">
        We'll respond within 24 hours. Or call us at{" "}
        <a href="tel:2542943311" className="text-primary hover:underline">
          (254) 294-3311
        </a>
      </p>
    </form>
  );
};

export default QuoteForm;
