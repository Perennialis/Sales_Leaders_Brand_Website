import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function CancellationRefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="refund-page" className="min-h-screen bg-white text-[#1F1F2E]">
      <Navbar />

      {/* Hero / Header Section */}
      <div className="relative pt-32 pb-16 overflow-hidden bg-[#F8F6FF] border-b border-[#ECECF5]">
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#EDE7FF] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#DDD3FB] blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1F1F2E] font-poppins">
            Cancellation &amp; Refund Policy
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
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">1. Subscription Cancellation</h2>
            <p>
              We understand that plans can change. You have the right to cancel your membership subscription at any time. Revenue Chiefs is a vertical business unit operated by <span className="font-semibold text-[#1F1F2E]">Perennial Innovative Solutions</span>. When you cancel, you will continue to have access to the Platform's paid benefits until the end of your current active billing cycle (e.g., the end of your current monthly or annual term). No further recurring charges will be processed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">2. How to Request Cancellation</h2>
            <p>
              You can cancel your subscription by logging into your account dashboard, navigating to the "Billing & Plan" section, and selecting "Cancel Subscription". Alternatively, you can email us at{" "}
              <a href="mailto:info@revenuechiefs.org" className="text-[#8231D3] hover:underline font-medium">info@revenuechiefs.org</a>{" "}
              with your account registration email and request a cancellation. Please send the request at least forty-eight (48) hours prior to your scheduled renewal date to ensure processing before the next charge.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">3. Cancellation Before the Next Renewal</h2>
            <p>
              To avoid being billed for the next subscription term (annual or monthly), your cancellation request must be submitted prior to the renewal date. If your request is received after the renewal charge has been processed, access will remain active through that billing cycle, and the cancellation will take effect for the subsequent cycle.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">4. Effect of Cancellation</h2>
            <p>
              Upon the effective date of your subscription cancellation (at the end of your current term), your account will revert to the "Free" tier. You will lose access to premium member directories, exclusive events, premium hub posts, podcasts, videos, gestures, and other features exclusive to paid tiers. Any active announcements or profiles will remain subject to our standard community guidelines.
            </p>
          </section>

          <section className="border-l-4 border-amber-500 bg-amber-50/40 p-5 rounded-r-2xl">
            <h2 className="text-base font-semibold text-amber-950 mb-1.5 font-poppins">5. Refund Process &amp; Eligibility</h2>
            <p className="font-semibold text-slate-800">
              [REFUND TERMS TO BE CONFIRMED BY BUSINESS OWNER]
            </p>
            <p className="text-xs text-[#6C6C80] mt-2.5 leading-relaxed">
              *The terms regarding partial refunds, refund windows (e.g. within a set number of days from registration), and trial-period refunds are currently pending business confirmation and will be updated here once approved by the business owner.*
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">6. Failed Payment Handling</h2>
            <p>
              If an automatic renewal payment fails due to card expiration, insufficient funds, or gateway issues, our system will attempt to retry the transaction. During this retry period, access to premium services may be temporarily suspended. We will notify you via email of the payment failure, allowing you to update your billing details.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">7. Duplicate Payment Handling</h2>
            <p>
              In the event that our payment gateway records duplicate transactions for the same subscription period due to technical issues, we will verify the error and issue a full refund for the duplicate charge to the original payment source. Refund processing times are subject to standard banking guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">8. Refund Processing</h2>
            <p>
              Once a refund request is approved, the transaction is initiated back to your original payment method (Credit Card, Debit Card, Net Banking, or UPI). Refunds typically take between 5 to 7 business days to reflect in your account, depending on your bank or financial institution. Please note that all refunds and banking transfers are issued under the corporate name and details of <span className="font-semibold text-[#1F1F2E]">Perennial Innovative Solutions</span>.
            </p>
          </section>

          <section className="border-t border-[#ECECF5] pt-8">
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">9. Contact / Support Process</h2>
            <p className="mb-4">
              For any billing assistance, billing disputes, or cancellation requests, please contact our support desk:
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
