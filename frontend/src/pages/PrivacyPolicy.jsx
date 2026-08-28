import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="privacy-page" className="min-h-screen bg-white text-[#1F1F2E]">
      <Navbar />

      {/* Hero / Header Section */}
      <div className="relative pt-32 pb-16 overflow-hidden bg-[#F8F6FF] border-b border-[#ECECF5]">
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#EDE7FF] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#DDD3FB] blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1F1F2E] font-poppins">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#6C6C80]">
            Last updated: August 12, 2026
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <div className="bg-white border border-[#ECECF5] rounded-2xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(130,49,211,0.04)] space-y-8 text-[#1F1F2E]/90 leading-relaxed text-sm">

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">1. Introduction</h2>
            <p>
              Revenue Chiefs, operated by <span className="font-semibold text-[#1F1F2E]">Perennial Innovative Solutions</span> ("we", "us", or "our"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <a href="https://revenuechief.org" className="text-[#8231D3] hover:underline font-medium">https://revenuechief.org</a> and use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">2. Information We Collect</h2>
            <p className="mb-3">
              We collect information that you provide directly to us or that is generated automatically when you use our Platform:
            </p>
            <ul className="space-y-2.5 list-disc pl-5">
              <li>
                <span className="font-medium text-[#1F1F2E]">Account Information:</span> When you register, we collect details such as your username, first name, last name, designation, company, and credentials.
              </li>
              <li>
                <span className="font-medium text-[#1F1F2E]">Contact Information:</span> We collect your official email address, phone number, and any other contact details provided during registration or support communication.
              </li>
              <li>
                <span className="font-medium text-[#1F1F2E]">Subscription Information:</span> Details regarding your membership tier (e.g. Free, Basic, Premium) and subscription duration/cycle.
              </li>
              <li>
                <span className="font-medium text-[#1F1F2E]">Payment Information:</span> When purchasing a subscription, payments are collected through our third-party payment gateway provider. <span className="font-semibold text-rose-700">Please note: We do NOT store card numbers, CVVs, expiry dates, netbanking credentials, UPI PINs, or bank passwords on our servers.</span> All payment credentials are input directly into the secure payment gateway interface.
              </li>
              <li>
                <span className="font-medium text-[#1F1F2E]">Technical/Device Information:</span> We automatically log technical data such as your IP address, browser type, operating system, and usage statistics (e.g. page clicks, view durations) via standard web logs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">3. How Information Is Used</h2>
            <p className="mb-3">
              We use your information to operate, maintain, and provide the features of the Platform. Specifically, we use it for:
            </p>
            <ul className="space-y-2.5 list-disc pl-5">
              <li>Providing and managing your user account and membership access.</li>
              <li>Processing your subscription transactions securely.</li>
              <li>Sending announcements, event reminders, or notification updates.</li>
              <li>Responding to support tickets, inquiries, or feedback.</li>
              <li>Analyzing platform activity to debug, optimize, and secure the Platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">4. Payment Processing</h2>
            <p>
              Paid membership operations are processed using a secure, industry-standard third-party payment gateway/provider (such as Razorpay). The gateway operates under its own privacy policies and PCI-DSS compliance standards to handle card and bank transactions. All transactions, billing details, and GST invoicing are processed under the parent corporate entity <span className="font-semibold text-[#1F1F2E]">Perennial Innovative Solutions</span>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">5. Third-Party Services</h2>
            <p>
              We may use third-party services to perform operations on our behalf (e.g., SMTP servers for sending notification emails, or LinkedIn API integration for sharing community profile announcements). These third parties only have access to information needed to perform their functions and are contractually bound to protect it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">6. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies (like local storage) to keep you logged into the platform, remember your dashboard preferences, and analyze website traffic. You can adjust your browser settings to reject cookies, though some features of the Platform may not function correctly as a result.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to prevent unauthorized access, disclosure, alteration, or destruction of your personal information. However, no electronic transmission or storage method is 100% secure, and we cannot guarantee absolute data security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">8. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, or enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">9. User Rights</h2>
            <p>
              Depending on your location, you may have the right to access, rectify, delete, or limit the use of your personal data. You may exercise these rights by modifying your profile settings in the account dashboard or contacting us at our support email.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">10. Children's Privacy</h2>
            <p>
              Our Platform is intended solely for professional adults and we do not knowingly collect or solicit personal information from children under the age of 13 (or applicable local age limit).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">11. Changes to Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by publishing the updated Privacy Policy on this page and revising the "Last updated" date at the top.
            </p>
          </section>

          <section className="border-t border-[#ECECF5] pt-8">
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">12. Contact Information</h2>
            <p className="mb-4">
              If you have any questions or concerns regarding this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-2.5 text-sm text-[#6C6C80]">
              <li>
                <span className="font-medium text-[#1F1F2E]">Support Email:</span>{" "}
                <a href="mailto:info@revenuechiefs.org" className="text-[#8231D3] hover:underline">
                  info@revenuechiefs.org
                </a>
              </li>
              <li>
                <span className="font-medium text-[#1F1F2E]">Phone Number:</span>{" "}
                <span className="text-[#1F1F2E]">+91 98842 00044 / +91 79969 69996</span>
              </li>
              <li>
                <span className="font-medium text-[#1F1F2E]">Business Address:</span>{" "}
                <span className="text-[#1F1F2E]">
                  25, 18th Main Rd, Sector 3, HSR Layout, Bengaluru, Karnataka 560102
                </span>
              </li>
            </ul>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
