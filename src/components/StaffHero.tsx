import { useState } from "react";
import { User, Phone, Mail } from "lucide-react";
import Modal from "@/components/Modal";
import thumbsUpReview from "@/assets/thumbs-up-review.png";

// JotForm configurations per staff member
const jotFormConfigs: Record<string, { formId: string; height: string }> = {
  "Alayna Sudduth": {
    formId: "260644897786175",
    height: "539px",
  },
  "Chris Guillen": {
    formId: "260044904370046",
    height: "539px",
  },
  "Haley Blackmon": {
    formId: "260155352050142",
    height: "539px",
  },
  "Lola Flores": {
    formId: "260154731872154",
    height: "539px",
  },
  "Jon Gangale": {
    formId: "260154416065148",
    height: "539px",
  },
  "Star Perry": {
    formId: "260155088019153",
    height: "539px",
  },
  "Brandon Foley": {
    formId: "260154407278154",
    height: "539px",
  },
  "Betty Hidalgo": {
    formId: "260155431466151",
    height: "539px",
  },
  "Natalia Fuentes": {
    formId: "260155202432140",
    height: "539px",
  },
  "Angel Delgadillo": {
    formId: "260155244115144",
    height: "539px",
  },
  "Salina Rodriguez": {
    formId: "260155585040149",
    height: "539px",
  },
  "Jennifer Boggiano": {
    formId: "260154433248150",
    height: "539px",
  },
  "Nicole Tafur": {
    formId: "260155669986171",
    height: "539px",
  },
  "Gina Oliva": {
    formId: "260155820379156",
    height: "539px",
  },
};

// Fallback Google Review URL (agency's main Corpus Christi Google Business profile)
const FALLBACK_GOOGLE_REVIEW_URL = "https://g.page/r/Cc3NV9peP9zEEBM/review";

const getGoogleReviewUrl = (name: string): string =>
  googleReviewUrls[name] ?? FALLBACK_GOOGLE_REVIEW_URL;

// Google Review URL for specific staff members
const googleReviewUrls: Record<string, string> = {
  "Alayna Sudduth": "https://g.page/r/Cc3NV9peP9zEEBM/review",
  "Betty Hidalgo": "https://g.page/r/CcEdhnl-gcgLEBM/review",
  "Bill Maxwell": "https://g.page/r/Cc3NV9peP9zEEBM/review",
  "Brandon Foley": "https://g.page/r/Cc3NV9peP9zEEBM/review",
  "Chris Guillen": "https://g.page/r/Cc3NV9peP9zEEBM/review",
  
  "Gina Oliva": "https://g.page/r/CcEdhnl-gcgLEBM/review",
  "Grace Koch": "https://g.page/r/Cc3NV9peP9zEEBM/review",
  "Haley Blackmon": "https://g.page/r/Cc3NV9peP9zEEBM/review",
  "Jennifer Boggiano": "https://g.page/r/CcEdhnl-gcgLEBM/review",
  "Jon Gangale": "https://g.page/r/Cc3NV9peP9zEEBM/review",
  "Kara Townsend": "https://g.page/r/Cc3NV9peP9zEEBM/review",
  "Kristin Maxwell": "https://g.page/r/Cc3NV9peP9zEEBM/review",
  "Lola Flores": "https://g.page/r/CcEdhnl-gcgLEBM/review",
  "Natalia Fuentes": "https://g.page/r/Cc3NV9peP9zEEBM/review",
  "Nicole Tafur": "https://g.page/r/CcEdhnl-gcgLEBM/review",
  "Salina Rodriguez": "https://g.page/r/CcEdhnl-gcgLEBM/review",
  "Star Perry": "https://g.page/r/CcEdhnl-gcgLEBM/review",
};

interface StaffHeroProps {
  name: string;
  title: string;
  location: string;
  bio?: string;
  imageUrl?: string;
  phone?: string;
  email?: string;
  showStars?: boolean;
  hideQuoteButton?: boolean;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const starsImageUrl = `${SUPABASE_URL}/storage/v1/object/public/staffimages/stars.png`;

const StaffHero = ({ name, title, location, bio, imageUrl, phone, email, showStars, hideQuoteButton }: StaffHeroProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="hero-section section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Photo, Info, and Referral */}
          <div className="space-y-8">
            {/* Photo and Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 animate-fade-in opacity-0">
              {/* Photo */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 bg-secondary rounded-full flex items-center justify-center border-2 border-primary flex-shrink-0 overflow-hidden">
                {imageUrl && !imageError ? (
                  <img 
                    src={imageUrl} 
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={() => {
                      console.warn(`Failed to load image for ${name}: ${imageUrl}`);
                      setImageError(true);
                    }}
                  />
                ) : (
                  <User className="w-16 h-16 text-muted-foreground/40" />
                )}
              </div>

              {/* Info */}
              <div className="text-center sm:text-left">
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2">
                  {name}
                </h1>
                <p className="text-lg text-primary font-medium mb-1">{title}</p>
                <p className="text-muted-foreground mb-4">{location}</p>
                
                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {phone && (
                    <a 
                      href={`tel:${phone}`}
                      className="flex items-center justify-center sm:justify-start gap-2 text-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{phone}</span>
                    </a>
                  )}
                  {email && (
                    <a 
                      href={`mailto:${email}`}
                      className="flex items-center justify-center sm:justify-start gap-2 text-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{email}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Review button for leadership (no quote CTA) */}
            {hideQuoteButton && (
              <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
                <a
                  href={getGoogleReviewUrl(name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-4 px-6 py-4 rounded-lg"
                >
                  <img
                    src={thumbsUpReview}
                    alt="Review"
                    className="h-12 w-auto"
                  />
                  <span className="text-lg font-semibold">Leave a Google Review</span>
                </a>
              </div>
            )}

            {/* Referral CTA */}
            {!hideQuoteButton && (
              <div className="bg-secondary rounded-xl p-6 sm:p-8 text-center animate-fade-in opacity-0 border border-border" style={{ animationDelay: "0.1s" }}>
                <span className="label-uppercase mb-3 block">Referral Program</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Know Someone Who Needs Protection?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Send me a referral and earn $20 when they get a quote!
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-gold"
                >
                  Get a Quote Now
                </button>
              </div>
            )}
          </div>

          {/* Right Column - About Section */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              {bio ||
                "Bio coming soon. This section will include a brief personal introduction, experience, and what makes this agent passionate about helping Texas families."}
            </p>
            {showStars && (
              <div className="mb-6">
                <img 
                  src={starsImageUrl} 
                  alt="5 Star Rating" 
                  className="h-16 w-auto" 
                />
              </div>
            )}
            {!hideQuoteButton && (
              <a
                href={getGoogleReviewUrl(name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-4 px-6 py-4 rounded-lg"
              >
                <img
                  src={thumbsUpReview}
                  alt="Review"
                  className="h-12 w-auto"
                />
                <span className="text-lg font-semibold">Leave a Google Review</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Referral Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={jotFormConfigs[name] ? undefined : `Send ${name} a Referral`}
        hideHeader={!!jotFormConfigs[name]}
      >
        {jotFormConfigs[name] ? (
          <div className="w-full overflow-hidden">
            <iframe
              id={`JotFormIFrame-${jotFormConfigs[name].formId}`}
              title={`Referral Form - ${name}`}
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src={`https://form.jotform.com/${jotFormConfigs[name].formId}`}
              frameBorder={0}
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                height: jotFormConfigs[name].height,
                border: "none",
              }}
              scrolling="no"
            />
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-6">
              Tell us about your referral and {name.split(' ')[0]} will reach out within 24 hours.
            </p>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center min-h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground">
                Referral form coming soon
              </p>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};

export default StaffHero;
