import { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal";
import ReferralForm from "@/components/ReferralForm";

interface ReferralCTAProps {
  staffName: string;
}

const ReferralCTA = ({ staffName }: ReferralCTAProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-card section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Know Someone Who Needs Coverage?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Send {staffName} a referral. We&rsquo;ll handle the rest — no
            awkward intros, no hard sell, just a quick conversation about
            what they need.
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => setIsModalOpen(true)}
          >
            Refer a Friend
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Send ${staffName} a Referral`}
      >
        <ReferralForm
          staffName={staffName}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </section>
  );
};

export default ReferralCTA;
