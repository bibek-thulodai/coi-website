import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Use | Creating Opportunities International",
  description: "Terms of Use for Creating Opportunities International website and services.",
}

export default function TermsOfUsePage() {
  const lastUpdated = "May 14, 2025"

  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Terms of Use</h1>
          <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose max-w-none text-gray-700">
            <p>
              These Terms of Use ("Terms") govern your access to and use of the Creating Opportunities International
              Pvt. Ltd. ("COI," "we," "our," or "us") website, products, and services. Please read these Terms carefully
              before using our services.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Acceptance of Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy. If you do
              not agree to these Terms, you may not access or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. The updated Terms will be posted on this page with a revised "Last
              Updated" date. Your continued use of our services after any changes indicates your acceptance of the
              modified Terms.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Eligibility</h2>
            <p>
              You must be at least 16 years old to use our services. By using our services, you represent and warrant
              that you meet this requirement.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Account Registration and Security</h2>
            <p>
              Some of our services may require you to create an account. You agree to provide accurate, current, and
              complete information during the registration process and to update such information to keep it accurate,
              current, and complete. You are responsible for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Intellectual Property Rights</h2>
            <p>
              Our website, products, and services, including all content, features, and functionality, are owned by COI
              or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mt-2">
              We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our
              services for your personal, non-commercial use. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
                republish, download, store, or transmit any of our materials
              </li>
              <li>Use any illustrations, photographs, logos, or other content for commercial purposes</li>
              <li>Access or use our services for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to any portion of our services</li>
              <li>Interfere with the proper working of our services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">User Content</h2>
            <p>
              Our services may allow you to submit, upload, publish, or otherwise make available content, including
              comments, feedback, and certain personal information. You retain ownership of any intellectual property
              rights that you hold in that content.
            </p>
            <p className="mt-2">
              By submitting content, you grant us a worldwide, royalty-free, non-exclusive, perpetual, irrevocable, and
              fully sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works
              from, distribute, and display such content in connection with our services and business operations.
            </p>
            <p className="mt-2">You represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You own or control all rights in and to the content you submit</li>
              <li>
                The content does not violate any third-party rights, including intellectual property rights and privacy
                rights
              </li>
              <li>The content complies with applicable laws and regulations</li>
              <li>The content is not harmful, offensive, or otherwise objectionable</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Purchases and Payment</h2>
            <p>
              We offer certain products and services for purchase. By making a purchase, you agree to pay all charges
              associated with your purchase.
            </p>
            <p className="mt-2">
              Payment must be made by the methods specified, and you agree to provide accurate and complete payment
              information. All prices are in the currency specified and are exclusive of taxes unless otherwise stated.
            </p>
            <p className="mt-2">
              Refunds may be available in accordance with our Refund Policy, which is available upon request.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Franchise Agreements</h2>
            <p>
              If you apply for and are granted a franchise opportunity, additional terms and conditions will apply as
              specified in the Franchise Agreement. The Franchise Agreement will supersede these Terms to the extent of
              any inconsistency.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Disclaimer of Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
              NON-INFRINGEMENT.
            </p>
            <p className="mt-2">
              WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY DEFECTS WILL
              BE CORRECTED.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL COI, ITS DIRECTORS, EMPLOYEES,
              PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
              OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
              INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE OUR SERVICES</li>
              <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OUR SERVICES</li>
              <li>ANY CONTENT OBTAINED FROM OUR SERVICES</li>
              <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless COI and its officers, directors, employees, agents, and
              affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees
              (including reasonable attorneys' fees) that arise from or relate to your use of our services or violation
              of these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its
              conflict of law principles. Any legal suit, action, or proceeding arising out of, or related to, these
              Terms or our services shall be instituted exclusively in the courts located in Kathmandu, Nepal.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions
              will continue in full force and effect.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any other legal notices or additional terms and
              conditions or policies published by us on our website, constitute the entire agreement between you and COI
              concerning our services.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions or concerns about these Terms, please contact us at:</p>
            <p className="mt-2">
              <strong>Creating Opportunities International Pvt. Ltd.</strong>
              <br />
              Email: legal@creatingoppo.com
              <br />
              Address: Kathmandu, Nepal
            </p>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8 flex justify-between">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/cookie-notice">Cookie Notice</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
