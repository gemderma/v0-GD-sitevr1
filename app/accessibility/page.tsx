import Link from "next/link"

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-center mb-6">Accessibility Statement</h1>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">Last Updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-12">
            {/* Our Commitment */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Our Commitment to Accessibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                At GemDerma, we are committed to ensuring digital accessibility for people with disabilities. We are
                continually improving the user experience for everyone and applying the relevant accessibility standards
                to ensure we provide equal access to all of our users.
              </p>
            </div>

            {/* Conformance Status */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Conformance Status</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These
                guidelines explain how to make web content more accessible for people with disabilities and
                user-friendly for everyone.
              </p>
            </div>

            {/* Measures to Support Accessibility */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Measures to Support Accessibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GemDerma takes the following measures to ensure accessibility of our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Include accessibility as part of our mission statement</li>
                <li>Integrate accessibility into our procurement practices</li>
                <li>Provide continual accessibility training for our staff</li>
                <li>Assign clear accessibility goals and responsibilities</li>
                <li>Employ formal accessibility quality assurance methods</li>
              </ul>
            </div>

            {/* Accessibility Features */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Accessibility Features</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We have implemented the following features to improve accessibility:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Navigation and Structure</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Logical heading structure for easy navigation</li>
                    <li>Consistent navigation menus throughout the site</li>
                    <li>Skip navigation links to bypass repetitive content</li>
                    <li>Clear and descriptive page titles</li>
                    <li>Breadcrumb trails for orientation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Visual Design</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Sufficient color contrast between text and backgrounds</li>
                    <li>Text that can be resized up to 200% without loss of functionality</li>
                    <li>Content that is readable and functional in both portrait and landscape orientations</li>
                    <li>Visual focus indicators for keyboard navigation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Multimedia</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Alternative text for images</li>
                    <li>Captions for videos</li>
                    <li>Transcripts for audio content</li>
                    <li>Controls to pause, stop, or adjust volume</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Forms and Interactions</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Clear labels and instructions for form fields</li>
                    <li>Error identification and suggestions for correction</li>
                    <li>Keyboard accessible interactive elements</li>
                    <li>Adequate time to complete actions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Technical Specifications</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Our website is designed to be compatible with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Assistive technologies such as screen readers</li>
                    <li>Browser accessibility features</li>
                    <li>Keyboard-only navigation</li>
                    <li>Voice recognition software</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Compatibility */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Compatibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>JAWS (Job Access With Speech)</li>
                <li>NVDA (NonVisual Desktop Access)</li>
                <li>VoiceOver (macOS and iOS)</li>
                <li>TalkBack (Android)</li>
                <li>Dragon NaturallySpeaking</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website is optimized for the latest versions of the following browsers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Apple Safari</li>
                <li>Microsoft Edge</li>
              </ul>
            </div>

            {/* Known Limitations */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Known Limitations</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Despite our best efforts to ensure accessibility, there may be some limitations. Below is a description
                of known limitations and potential solutions:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Third-Party Content</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Some content may be provided by third parties that are not under our control. We work with these
                    providers to improve accessibility but cannot guarantee full compliance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Legacy PDF Documents</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Some older PDF documents may not be fully accessible. We are working to update these documents. If
                    you encounter an inaccessible PDF, please contact us for an alternative format.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Video Content</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Some older video content may lack captions or audio descriptions. We are working to update this
                    content and ensure all new videos meet accessibility standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Feedback and Contact */}
            <div className="bg-muted p-8 rounded-lg">
              <h2 className="font-serif text-3xl font-bold mb-4">Feedback and Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We welcome your feedback on the accessibility of the GemDerma website. Please let us know if you
                encounter accessibility barriers:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Email:</strong>{" "}
                  <Link href="mailto:accessibility@gemderma.com" className="text-accent hover:underline">
                    info@gemderma.com
                  </Link>
              <p className="text-muted-foreground leading-relaxed mt-6">
                We aim to respond to accessibility feedback within 5 business days.
              </p>
            </div>
              </p>

            {/* Alternative Access */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Alternative Access</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you cannot access any content or use any features on our website due to a disability, we are happy to
                provide alternative access. Please contact us using the information above, and we will work with you to
                provide the information or services you need through an alternative communication method, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Phone support</li>
                <li>Email correspondence</li>
                <li>Alternative document formats (large print, accessible PDFs, plain text)</li>
                <li>Personal assistance</li>
              </ul>
            </div>

            {/* Assessment and Testing */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Assessment and Testing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GemDerma regularly evaluates the accessibility of our website through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Self-evaluation using accessibility evaluation tools</li>
                <li>Manual testing with assistive technologies</li>
                <li>User testing with individuals who have disabilities</li>
                <li>Third-party accessibility audits</li>
              </ul>
            </div>

            {/* Ongoing Improvements */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Ongoing Improvements</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Accessibility is an ongoing effort. We are continuously working to improve the accessibility and
                usability of our website. Our commitment includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Regular accessibility audits and testing</li>
                <li>Training staff on accessibility best practices</li>
                <li>Updating content and features to meet current standards</li>
                <li>Monitoring and addressing accessibility issues promptly</li>
              </ul>
            </div>

            {/* Formal Complaints */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Formal Complaints</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you are not satisfied with our response to your accessibility concern, you may file a formal
                complaint with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>U.S. Department of Justice (for ADA complaints)</li>
                <li>Your local civil rights office</li>
                <li>Web accessibility ombudsman (if applicable)</li>
              </ul>
            </div>

            {/* Standards and Guidelines */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Standards and Guidelines</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This accessibility statement is based on the following standards and guidelines:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
                <li>Americans with Disabilities Act (ADA)</li>
                <li>Section 508 of the Rehabilitation Act</li>
                <li>European Accessibility Act (EAA)</li>
              </ul>
            </div>

            {/* Date of Statement */}
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                This accessibility statement was created on January 1, 2025 and last reviewed on November 1, 2025.
              </p>
            </div>

            {/* Closing Statement */}
            <div className="bg-accent/10 p-8 rounded-lg text-center">
              <p className="text-muted-foreground leading-relaxed italic">
                GemDerma is committed to making beauty accessible to everyone, and that includes ensuring our digital
                presence is accessible to all users, regardless of ability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
