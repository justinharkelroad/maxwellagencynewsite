import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: March 23, 2026</p>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the Maxwell Financial Group website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Use of Website</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website is provided for informational purposes only. The content on this site is intended to give you a general overview of the insurance products and services offered by Maxwell Financial Group as an authorized Allstate agency. You agree to use this website only for lawful purposes and in a manner that does not infringe upon or restrict the use of this site by others.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">No Binding Quotes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any information, estimates, or quotes provided through this website are for informational purposes only and do not constitute a binding offer, contract, or guarantee of coverage. Actual insurance quotes, terms, conditions, and pricing are subject to review and approval by the applicable insurance carrier and may differ from any estimate provided online. Coverage is not effective until a policy has been issued.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of Maxwell Financial Group or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this site without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. Maxwell Financial Group does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Maxwell Financial Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any legal action arising from these terms shall be filed in the courts of the State of Texas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms of Service, please contact us:
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

export default TermsOfService;
