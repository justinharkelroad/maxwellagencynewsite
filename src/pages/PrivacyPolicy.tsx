import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: March 23, 2026</p>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Maxwell Financial Group ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully. By using our website, you consent to the practices described herein.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may collect information about you in a variety of ways, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Personal Data:</strong> When you submit a contact or quote request form, we collect your name, email address, phone number, and any additional information you choose to provide.</li>
                <li><strong className="text-foreground">Usage Data:</strong> We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.</li>
                <li><strong className="text-foreground">Cookies and Tracking:</strong> We may use cookies, web beacons, and similar tracking technologies to enhance your experience and gather information about how our website is used. We may use third-party analytics services to better understand website usage. You can control cookie settings through your browser preferences.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By providing your contact information through our website, you consent to receive calls, text messages, and emails from Maxwell Financial Group regarding your inquiry, including for informational and marketing purposes. Message and data rates may apply. Consent is not a condition of purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To respond to your inquiries and provide insurance quotes</li>
                <li>To communicate with you about our products and services</li>
                <li>To improve our website and customer experience</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraudulent or unauthorized activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Insurance-Related Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Information submitted through this website is used for the purpose of obtaining insurance quotes and services. Submission of information does not guarantee coverage, eligibility, or policy issuance. All coverage is subject to underwriting approval and the terms, conditions, and exclusions of the policy issued.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                As an authorized Allstate insurance agency, we may share your information with Allstate and its affiliates to process insurance quotes and applications. We may also share information with third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential. We do not sell any of your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may request access to, correction of, or deletion of your personal information by contacting us at <a href="mailto:KristinMaxwell@Allstate.com" className="text-primary hover:underline">KristinMaxwell@Allstate.com</a>. You may also opt out of receiving marketing communications at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none pl-0 text-muted-foreground space-y-1 mt-2">
                <li>Email — <a href="mailto:KristinMaxwell@Allstate.com" className="text-primary hover:underline">KristinMaxwell@Allstate.com</a></li>
                <li>Temple, TX — <a href="tel:2542943311" className="text-primary hover:underline">254-294-3311</a></li>
                <li>Corpus Christi, TX — <a href="tel:3613177044" className="text-primary hover:underline">361-317-7044</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
