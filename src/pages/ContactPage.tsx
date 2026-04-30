import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import heroLionBg from "@/assets/hero-lion-bg.png";

const locations = [
  {
    name: "Corpus Christi Office",
    address: "3837 S Padre Island Dr",
    city: "Corpus Christi, TX 78415",
    phone: "(361) 317-7044",
    email: "KristinMaxwell@Allstate.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5!2d-97.3650!3d27.7006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8668e4c0e0e0e0e0%3A0x0!2s3837%20S%20Padre%20Island%20Dr%2C%20Corpus%20Christi%2C%20TX%2078415!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus",
  },
  {
    name: "Temple Office",
    address: "201 Clinite Grove Blvd Ste 110",
    city: "Temple, TX 76502",
    phone: "(254) 294-3311",
    email: "KristinMaxwell@Allstate.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.2!2d-97.3428!3d31.0821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8645d3a8f1e8c8c7%3A0x0!2s201%20Clinite%20Grove%20Blvd%20Ste%20110%2C%20Temple%2C%20TX%2076502!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Parallax */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Parallax background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroLionBg})`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center right',
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-background/40" />
          
          {/* Hero Content */}
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help. Reach out to us at either of our convenient locations.
            </p>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {locations.map((location) => (
                <div key={location.name} className="space-y-6">
                  {/* Location Info Card */}
                  <div className="bg-secondary rounded-xl p-6 md:p-8 border border-border">
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                      {location.name}
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="text-foreground font-medium">{location.address}</p>
                          <p className="text-muted-foreground">{location.city}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-primary shrink-0" />
                        <a 
                          href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-primary shrink-0" />
                        <a 
                          href={`mailto:${location.email}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {location.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Clock className="w-5 h-5 text-primary shrink-0" />
                        <p className="text-muted-foreground">{location.hours}</p>
                      </div>
                    </div>

                    <a
                      href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                      className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors w-full justify-center"
                    >
                      <Phone className="w-5 h-5" />
                      Call Us Today
                    </a>
                  </div>

                  {/* Map */}
                  <div className="rounded-xl overflow-hidden border border-border h-[300px] md:h-[350px]">
                    <iframe
                      src={location.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${location.name}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
