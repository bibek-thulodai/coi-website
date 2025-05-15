import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy | Creating Opportunities International",
  description: "Privacy Policy for Creating Opportunities International website and services.",
}

export default function PrivacyPolicyPage() {
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

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose max-w-none text-gray-700">
            <p>
              Creating Opportunities International Pvt. Ltd. ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Register for an account</li>
              <li>Sign up for our newsletter</li>
              <li>Complete a contact or inquiry form</li>
              <li>Purchase a product or service</li>
              <li>Apply for a franchise opportunity</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, postal address, organization details,
              payment information, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent</li>
              <li>Geographic location (country or city level)</li>
              <li>Device information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide, operate, and maintain our website and services</li>
              <li>Improve, personalize, and expand our website and services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Send promotional communications, such as newsletters or information about new services</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Prevent fraudulent transactions and monitor against theft</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Disclosure of Your Information</h2>
            <p>We may share your information in the following situations:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>With Service Providers:</strong> We may share your information with third-party vendors, service
                providers, contractors, or agents who perform services for us.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a
                portion of our assets, your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we
                will require those affiliates to honor this Privacy Policy.
              </li>
              <li>
                <strong>With Business Partners:</strong> We may share your information with our business partners to
                offer you certain products, services, or promotions.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may disclose your information for any other purpose with your
                consent.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or
                in response to valid requests by public authorities.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect and store information when you use our
              website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              For more information about our use of cookies, please see our Cookie Notice.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal
              information. However, please be aware that no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of your personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to request restriction of processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section
              below.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal
              information from children under 16. If you are a parent or guardian and believe your child has provided us
              with personal information, please contact us.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
              Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Creating Opportunities International Pvt. Ltd.</strong>
              <br />
              Email: privacy@creatingoppo.com
              <br />
              Address: Kathmandu, Nepal
            </p>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8 flex justify-between">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/terms-of-use">Terms of Use</Link>
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
