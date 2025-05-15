import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Cookie Notice | Creating Opportunities International",
  description: "Cookie Notice for Creating Opportunities International website.",
}

export default function CookieNoticePage() {
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

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Cookie Notice</h1>
          <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose max-w-none text-gray-700">
            <p>
              This Cookie Notice explains how Creating Opportunities International Pvt. Ltd. ("COI," "we," "our," or
              "us") uses cookies and similar technologies to recognize you when you visit our website. It explains what
              these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
              well as to provide reporting information.
            </p>
            <p className="mt-2">
              Cookies set by the website owner (in this case, COI) are called "first-party cookies." Cookies set by
              parties other than the website owner are called "third-party cookies." Third-party cookies enable
              third-party features or functionality to be provided on or through the website (e.g., advertising,
              interactive content, and analytics).
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Types of Cookies We Use</h2>
            <p>We use the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and
                cannot be switched off. They are usually only set in response to actions made by you which amount to a
                request for services, such as setting your privacy preferences, logging in, or filling in forms.
              </li>
              <li>
                <strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic
                sources so we can measure and improve the performance of our site. They help us to know which pages are
                the most and least popular and see how visitors move around the site.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced
                functionality and personalization. They may be set by us or by third-party providers whose services we
                have added to our pages.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising
                partners. They may be used by those companies to build a profile of your interests and show you relevant
                advertisements on other sites.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Specific Cookies We Use</h2>
            <p>The following is a detailed list of the cookies we use on our website:</p>

            <table className="w-full border-collapse border border-gray-300 mt-4 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Cookie Name</th>
                  <th className="border border-gray-300 p-2 text-left">Type</th>
                  <th className="border border-gray-300 p-2 text-left">Purpose</th>
                  <th className="border border-gray-300 p-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">_ga</td>
                  <td className="border border-gray-300 p-2">Analytics</td>
                  <td className="border border-gray-300 p-2">Used by Google Analytics to distinguish users</td>
                  <td className="border border-gray-300 p-2">2 years</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">_gid</td>
                  <td className="border border-gray-300 p-2">Analytics</td>
                  <td className="border border-gray-300 p-2">Used by Google Analytics to distinguish users</td>
                  <td className="border border-gray-300 p-2">24 hours</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">_gat</td>
                  <td className="border border-gray-300 p-2">Analytics</td>
                  <td className="border border-gray-300 p-2">Used by Google Analytics to throttle request rate</td>
                  <td className="border border-gray-300 p-2">1 minute</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">cookieConsent</td>
                  <td className="border border-gray-300 p-2">Essential</td>
                  <td className="border border-gray-300 p-2">Stores your cookie consent preferences</td>
                  <td className="border border-gray-300 p-2">1 year</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">sessionId</td>
                  <td className="border border-gray-300 p-2">Essential</td>
                  <td className="border border-gray-300 p-2">Maintains your session information</td>
                  <td className="border border-gray-300 p-2">Session</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">_fbp</td>
                  <td className="border border-gray-300 p-2">Targeting</td>
                  <td className="border border-gray-300 p-2">Used by Facebook to deliver advertisements</td>
                  <td className="border border-gray-300 p-2">3 months</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">How to Control Cookies</h2>
            <p>
              You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject
              cookies, you may still use our website, but your access to some functionality and areas of our website may
              be restricted.
            </p>
            <p className="mt-2">
              Most web browsers allow some control of most cookies through the browser settings. To find out more about
              cookies, including how to see what cookies have been set, visit{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.aboutcookies.org
              </a>{" "}
              or
              <a
                href="https://www.allaboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {" "}
                www.allaboutcookies.org
              </a>
              .
            </p>
            <p className="mt-2">Here are links to instructions for managing cookies in some common browsers:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Other Tracking Technologies</h2>
            <p>
              In addition to cookies, we may use other similar technologies like web beacons (sometimes called "tracking
              pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to
              recognize when someone has visited our website. This allows us, for example, to monitor the traffic
              patterns of users from one page within our website to another, to deliver or communicate with cookies, to
              understand whether you have come to our website from an online advertisement displayed on a third-party
              website, to improve site performance, and to measure the success of email marketing campaigns.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Changes to This Cookie Notice</h2>
            <p>
              We may update this Cookie Notice from time to time to reflect changes to the cookies we use or for other
              operational, legal, or regulatory reasons. Please revisit this Cookie Notice regularly to stay informed
              about our use of cookies and related technologies.
            </p>
            <p className="mt-2">The date at the top of this Cookie Notice indicates when it was last updated.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about our use of cookies or other technologies, please contact us at:</p>
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
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/terms-of-use">Terms of Use</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
