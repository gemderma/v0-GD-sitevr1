import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Spacing */}
      <div className="h-20" />

      {/* Privacy Policy Content */}
      <article className="container mx-auto px-6 lg:px-12 py-20 max-w-4xl">
        {/* Title */}
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Privacy Policy</h1>

        <div className="flex gap-6 text-sm text-muted-foreground mb-12">
          <p>
            <strong>Effective Date:</strong> January 1, 2025
          </p>
          <p>
            <strong>Last Updated:</strong> January 1, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Gem Derma. We respect your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              our website and use our services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Please read this Privacy Policy carefully. By accessing or using our website, you agree to the terms of
              this Privacy Policy. If you do not agree with the terms, please do not access or use our website.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Information We Collect</h2>

            <h3 className="font-serif text-2xl font-semibold mb-3 mt-6">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We may collect personally identifiable information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Payment information</li>
              <li>Account credentials</li>
              <li>Skin analysis data and photos (if using our device)</li>
              <li>Customer service correspondence</li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold mb-3 mt-6">Automatic Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URLs</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Device identifiers</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold mb-3 mt-6">Device Usage Data</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">If you use Gem Derma devices, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Treatment history and settings</li>
              <li>Skin analysis results</li>
              <li>Device performance data</li>
              <li>Usage patterns and frequency</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about products, services, and promotions</li>
              <li>Provide customer support</li>
              <li>Improve and personalize your experience</li>
              <li>Conduct skin analysis and provide personalized recommendations</li>
              <li>Analyze usage patterns and optimize our website and devices</li>
              <li>Detect, prevent, and address technical issues and fraud</li>
              <li>Comply with legal obligations</li>
              <li>Send administrative information such as updates to our terms and policies</li>
            </ul>
          </section>

          {/* How We Share Your Information */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">How We Share Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>

            <h3 className="font-serif text-2xl font-semibold mb-3">Service Providers</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Third-party vendors who perform services on our behalf, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Payment processors</li>
              <li>Shipping and fulfillment partners</li>
              <li>Email service providers</li>
              <li>Analytics providers</li>
              <li>Customer service platforms</li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold mb-3">Business Transfers</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of
              our business.
            </p>

            <h3 className="font-serif text-2xl font-semibold mb-3">Legal Requirements</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              When required by law or to protect our rights, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Compliance with legal process</li>
              <li>Enforcing our terms and conditions</li>
              <li>Protecting the rights, property, or safety of Gem Derma, our users, or others</li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold mb-3">With Your Consent</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may share your information with third parties when you provide explicit consent.
            </p>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use cookies, web beacons, and similar technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve website functionality</li>
              <li>Deliver targeted advertising</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You can control cookies through your browser settings. However, disabling cookies may limit your ability
              to use certain features of our website.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable security measures to protect your personal information from unauthorized access,
              use, alteration, and disclosure. However, no method of transmission over the internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          {/* Your Privacy Rights */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>

            <h3 className="font-serif text-2xl font-semibold mb-3">Access and Portability</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Request access to the personal information we hold about you and receive a copy in a portable format.
            </p>

            <h3 className="font-serif text-2xl font-semibold mb-3">Correction</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Request correction of inaccurate or incomplete personal information.
            </p>

            <h3 className="font-serif text-2xl font-semibold mb-3">Deletion</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Request deletion of your personal information, subject to certain exceptions.
            </p>

            <h3 className="font-serif text-2xl font-semibold mb-3">Opt-Out</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Opt-out of marketing communications at any time by clicking "unsubscribe" in our emails or contacting us
              directly.
            </p>

            <h3 className="font-serif text-2xl font-semibold mb-3">Do Not Track</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website does not currently respond to "Do Not Track" signals.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:privacy@gemderma.com" className="text-accent hover:underline">
                privacy@gemderma.com
              </a>
              .
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website and services are not directed to children under the age of 13 (or 16 in certain
              jurisdictions). We do not knowingly collect personal information from children. If you believe we have
              collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of
              these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          {/* International Data Transfers */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence.
              These countries may have different data protection laws. By using our services, you consent to such
              transfers.
            </p>
          </section>

          {/* California Privacy Rights */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">California Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act
              (CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Right to know what personal information is collected</li>
              <li>Right to know whether personal information is sold or disclosed</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to deletion</li>
              <li>Right to non-discrimination</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@gemderma.com" className="text-accent hover:underline">
                privacy@gemderma.com
              </a>
              .
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last
              Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically for any
              changes.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <h2 className="font-serif text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-semibold text-foreground">Gem Derma</p>
              <p>
                Email:{" "}
                <a href="mailto:privacy@gemderma.com" className="text-accent hover:underline">
                  privacy@gemderma.com
                </a>
              </p>
              <p>Address: [Insert Physical Address]</p>
              <p>Phone: [Insert Phone Number]</p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Home
          </Link>
        </div>
      </article>
    </div>
  )
}
