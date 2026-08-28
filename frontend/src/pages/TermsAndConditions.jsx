import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="terms-page" className="min-h-screen bg-white text-[#1F1F2E]">
      <Navbar />

      {/* Hero / Header Section */}
      <div className="relative pt-32 pb-16 overflow-hidden bg-[#F8F6FF] border-b border-[#ECECF5]">
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#EDE7FF] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#DDD3FB] blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1F1F2E] font-poppins">
            Terms &amp; Conditions
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
              Welcome to Revenue Chiefs. These Terms and Conditions govern your use of our website located at{" "}
              <a href="https://revenuechief.org" className="text-[#8231D3] hover:underline font-medium">https://revenuechief.org</a>{" "}
              and our associated services, applications, and communities (collectively, the "Platform" or "Service") operated by{" "}
              <span className="font-semibold text-[#1F1F2E]">Revenue Chiefs</span> (a business vertical of <span className="font-semibold text-[#1F1F2E]">Perennial Innovative Solutions</span>) ("us", "we", or "our").
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">2. Acceptance of Terms</h2>
            <p>
              By accessing or using our Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not access or use the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">3. Eligibility</h2>
            <p>
              You must be at least 18 years of age or the age of legal majority in your jurisdiction to create an account or use our Platform. By using the Platform, you represent and warrant that you have the full right, power, and authority to enter into this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">4. User Account</h2>
            <p>
              To access certain features of the Platform, you may be required to register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are solely responsible for safeguarding your account credentials and for any activities or actions under your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">5. User Responsibilities</h2>
            <p>
              You agree not to use the Platform for any unlawful purpose or in any way that violates these Terms. You are responsible for all content, announcements, and interactions you post or conduct on the Platform, ensuring they respect other members and communities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">6. Subscription and Membership</h2>
            <p>
              We offer several membership plan tiers (e.g., Free, Basic, Premium) with varying features and privileges. Access to paid membership tiers is conditional on the payment of applicable fees. Subscription features, benefits, and tier structures are detailed on our subscription page and may be modified from time to time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">7. Pricing and Payments</h2>
            <p>
              All subscription prices are as listed on the Subscription/Pricing page of the Platform. Payments are processed securely via our third-party payment processors. You agree to pay all charges incurred by your account at the prices in effect when such charges are incurred, including any applicable taxes. All financial transactions, billing statements, GST registration, payment gateway transactions, and bank details pertain exclusively to <span className="font-semibold text-[#1F1F2E]">Perennial Innovative Solutions</span>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">8. Subscription Renewal</h2>
            <p>
              Paid subscriptions are billed on a subscription cycle basis (e.g. Annual or Monthly). Unless otherwise stated, renewal policies are subject to confirmation. <span className="font-semibold text-amber-700">[SUBSCRIPTION RENEWAL TERMS TO BE CONFIRMED BY BUSINESS OWNER]</span>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">9. Cancellation</h2>
            <p>
              You can request subscription cancellation at any time. Cancellation details, processing methods, and effective dates of cancellation are subject to confirmation. <span className="font-semibold text-amber-700">[CANCELLATION TERMS TO BE CONFIRMED BY BUSINESS OWNER]</span>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">10. Refunds</h2>
            <p>
              Membership subscription fees are generally non-refundable unless specified otherwise. Specific refund windows and rules are pending business confirmation. Please note that all refunds are processed under the parent corporate entity <span className="font-semibold text-[#1F1F2E]">Perennial Innovative Solutions</span>. <span className="font-semibold text-amber-700">[REFUND TERMS TO BE CONFIRMED BY BUSINESS OWNER]</span>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">11. Acceptable Use</h2>
            <p>
              You agree not to modify, distribute, transmit, broadcast, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the Platform. You must not attempt to breach security, introduce malware, or disrupt service operations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">12. Intellectual Property</h2>
            <p>
              The Platform and its original content, features, logos, designs, templates, and functionality are and will remain the exclusive property of Revenue Chiefs and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">13. Third-Party Services</h2>
            <p>
              Our Platform may contain links to or integrations with third-party websites or services (e.g., LinkedIn, payment gateways) that are not owned or controlled by us. We assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">14. Service Availability</h2>
            <p>
              We strive to keep the Platform available at all times. However, we do not guarantee uninterrupted access, and we reserve the right to suspend or restrict access for maintenance, updates, or technical issues without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">15. Disclaimer</h2>
            <p>
              The Platform is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties of any kind, whether express or implied, including but not limited to suitability, accuracy, completeness, security, or non-infringement of content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">16. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall Revenue Chiefs, its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">17. Suspension or Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account and access to the Platform immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">18. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of changes by posting the new terms on this page with a revised "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">19. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of <span className="font-semibold">Bengaluru, Karnataka, India</span>, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in courts located in <span className="font-semibold">Bengaluru, Karnataka, India</span>.
            </p>
          </section>

          <section className="border-t border-[#ECECF5] pt-8">
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">20. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
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
