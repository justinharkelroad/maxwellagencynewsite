import { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal";

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
            Send me a referral and earn $20 when they get a quote!
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => setIsModalOpen(true)}
          >
            Get a Quote Now
          </Button>
        </div>
      </div>

      {/* Referral Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Send ${staffName} a Referral`}
      >
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
          <p className="text-muted-foreground">
            Jotform embed will go here
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default ReferralCTA;
