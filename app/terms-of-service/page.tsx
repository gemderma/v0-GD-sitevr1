export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-24 max-w-4xl">
        <h1 className="font-serif text-5xl font-bold mb-8 text-balance">Terms of Service</h1>

        <div className="space-y-2 mb-12 text-sm text-muted-foreground">
          <p>
            <strong>Effective Date:</strong> January 1, 2025
          </p>
          <p>
            <strong>Last Updated:</strong> January 1, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to Gem Derma. These Terms of Service ("Terms") govern your access to and use of our website,
              mobile applications, products, and services (collectively, the "Services"). By accessing or using our
              Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our
              Services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to update or modify these Terms at any time. Your continued use of our Services after
              any changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              You must be at least 18 years old to use our Services. By using our Services, you represent and warrant
              that you are at least 18 years of age and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Account Registration</h2>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Creating an Account</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              To access certain features of our Services, you may need to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Account Termination</h3>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate your account at any time for any reason, including violation
              of these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Use of Services</h2>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Permitted Use</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Services</li>
              <li>Use automated systems (bots, scrapers) without permission</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or harvest information about other users</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Medical Disclaimer</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Gem Derma devices are intended for cosmetic purposes only and are not intended to diagnose, treat, cure,
              or prevent any disease or medical condition. Our Services do not provide medical advice. Always consult
              with a qualified healthcare professional before beginning any skincare treatment, especially if you have:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Existing skin conditions</li>
              <li>Medical devices (pacemakers, etc.)</li>
              <li>Pregnancy or nursing</li>
              <li>History of skin cancer or keloid scarring</li>
              <li>Active infections or open wounds</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Product Information and Orders</h2>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Product Descriptions</h3>
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that
              product descriptions or other content is accurate, complete, reliable, current, or error-free. We reserve
              the right to correct errors and update information at any time.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Pricing</h3>
            <p className="text-muted-foreground leading-relaxed">
              All prices are in USD and are subject to change without notice. We reserve the right to refuse or cancel
              orders if pricing errors occur.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Order Acceptance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your receipt of an order confirmation does not signify our acceptance of your order. We reserve the right
              to accept or decline your order for any reason, including product availability, errors in pricing or
              product information, or suspected fraud.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Payment</h3>
            <p className="text-muted-foreground leading-relaxed">
              You agree to provide current, complete, and accurate payment information. You authorize us to charge the
              payment method you provide for all fees and charges incurred.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Shipping and Delivery</h2>
            <p className="text-muted-foreground leading-relaxed">
              Orders are typically processed within 2-3 business days. Shipping times vary by location. Title and risk
              of loss pass to you upon delivery to the carrier. We are not responsible for delays caused by carriers or
              customs.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Returns and Refunds</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Please refer to our Return Policy for detailed information about returns, exchanges, and refunds.
              Generally:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Products must be returned within 30 days of delivery</li>
              <li>Products must be unused and in original packaging</li>
              <li>Proof of purchase is required</li>
              <li>Certain items may not be eligible for return due to hygiene reasons</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Device Warranty</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Gem Derma devices are covered by a limited warranty as detailed in our Warranty Policy. The warranty
              covers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Manufacturing defects</li>
              <li>Normal use within warranty period</li>
              <li>Original purchaser only</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-3">The warranty does not cover:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Normal wear and tear</li>
              <li>Misuse, abuse, or negligence</li>
              <li>Unauthorized modifications or repairs</li>
              <li>Damage from improper storage or use</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Intellectual Property Rights</h2>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Ownership</h3>
            <p className="text-muted-foreground leading-relaxed">
              All content on our Services, including text, graphics, logos, images, software, and designs, is the
              property of Gem Derma or its licensors and is protected by copyright, trademark, and other intellectual
              property laws.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">License</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We grant you a limited, non-exclusive, non-transferable license to access and use our Services for
              personal, non-commercial purposes. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Copy, modify, or create derivative works</li>
              <li>Distribute, sell, or license any content</li>
              <li>Reverse engineer or decompile any software</li>
              <li>Remove any copyright or proprietary notices</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">User Content</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you submit content to our Services (reviews, photos, testimonials), you grant us a worldwide,
              royalty-free, perpetual license to use, reproduce, modify, and display such content in connection with our
              business.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and
              protect your information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Disclaimers</h2>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">"As Is" Basis</h3>
            <p className="text-muted-foreground leading-relaxed uppercase text-sm">
              Our services and products are provided on an "as is" and "as available" basis without warranties of any
              kind, either express or implied, including but not limited to warranties of merchantability, fitness for a
              particular purpose, or non-infringement.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">No Guarantee of Results</h3>
            <p className="text-muted-foreground leading-relaxed">
              We do not guarantee specific results from using Gem Derma devices. Individual results may vary based on
              skin type, age, lifestyle, and consistent use.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Third-Party Links</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our Services may contain links to third-party websites. We are not responsible for the content, accuracy,
              or practices of third-party sites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed uppercase text-sm mb-4">
              To the fullest extent permitted by law, Gem Derma shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly
              or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm mb-4">
              <li>Your use or inability to use our Services</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from our Services</li>
              <li>Any bugs, viruses, or similar harmful components</li>
              <li>Any errors or omissions in content</li>
              <li>Any user content or conduct</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed uppercase text-sm">
              Our total liability shall not exceed the amount you paid to us in the twelve (12) months preceding the
              claim, or $100, whichever is greater.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You agree to indemnify, defend, and hold harmless Gem Derma, its affiliates, officers, directors,
              employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including
              reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your use of our Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your user content</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Dispute Resolution</h2>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Governing Law</h3>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of California,
              without regard to conflict of law principles.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Arbitration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Any dispute arising from these Terms or our Services shall be resolved through binding arbitration. The
              arbitration shall be conducted in California. You waive any right to a jury trial or to participate in a
              class action.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Exceptions</h3>
            <p className="text-muted-foreground leading-relaxed">
              Either party may seek injunctive relief in court for intellectual property infringement or unauthorized
              use of the Services.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Small Claims Court</h3>
            <p className="text-muted-foreground leading-relaxed">
              You may pursue claims in small claims court if they qualify and remain in small claims court.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Miscellaneous</h2>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Severability</h3>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall
              remain in full force and effect.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Waiver</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right
              or provision.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Assignment</h3>
            <p className="text-muted-foreground leading-relaxed">
              You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We
              may assign these Terms without restriction.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Entire Agreement</h3>
            <p className="text-muted-foreground leading-relaxed">
              These Terms, along with our Privacy Policy and any other policies referenced herein, constitute the entire
              agreement between you and Gem Derma regarding our Services.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Force Majeure</h3>
            <p className="text-muted-foreground leading-relaxed">
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable
              control, including acts of God, natural disasters, war, terrorism, labor disputes, or government actions.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-3 mt-6">Contact for Legal Notices</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">All legal notices should be sent to:</p>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="font-semibold mb-2">Gem Derma</p>
              <p className="text-sm text-muted-foreground">Email: legal@gemderma.com</p>
              <p className="text-sm text-muted-foreground">Address: 123 Beauty Boulevard, Los Angeles, CA 90001</p>
            </div>
          </section>

          <section className="bg-muted/30 p-8 rounded-lg">
            <h2 className="font-serif text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Gem Derma</p>
              <p className="text-sm text-muted-foreground">Email: support@gemderma.com</p>
              <p className="text-sm text-muted-foreground">Address: 123 Beauty Boulevard, Los Angeles, CA 90001</p>
              <p className="text-sm text-muted-foreground">Phone: 1-800-GEMDERMA</p>
            </div>
          </section>

          <div className="text-center pt-8 text-sm text-muted-foreground italic">
            These Terms of Service were last updated on January 1, 2025.
          </div>
        </div>
      </div>
    </div>
  )
}
