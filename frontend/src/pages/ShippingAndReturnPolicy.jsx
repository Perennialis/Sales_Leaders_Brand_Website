import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function ShippingAndReturnPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="shipping-page" className="min-h-screen bg-white text-[#1F1F2E]">
      <Navbar />

      {/* Hero / Header Section */}
      <div className="relative pt-32 pb-16 overflow-hidden bg-[#F8F6FF] border-b border-[#ECECF5]">
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#EDE7FF] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#DDD3FB] blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1F1F2E] font-poppins">
            Shipping & Return Policy
          </h1>
          <p className="mt-3 text-sm text-[#6C6C80]">
            Last updated: August 28, 2026
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <div className="bg-white border border-[#ECECF5] rounded-2xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(130,49,211,0.04)] space-y-8 text-[#1F1F2E]/90 leading-relaxed text-sm">

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">1. Shipping Policy</h2>
            <p className="mb-3">
              At Revenue Chiefs (a vertical of <span className="font-semibold text-[#1F1F2E]">Perennial Innovative Solutions</span>), our primary offerings are digital memberships, event access, and online services. As such, there is typically no physical shipping involved for standard memberships.
            </p>
            <p>
              However, in the event that we ship physical merchandise (e.g., welcome kits, event merchandise, or promotional items):
            </p>
            <ul className="space-y-2.5 list-disc pl-5 mt-3">
              <li>
                <span className="font-medium text-[#1F1F2E]">Processing Time:</span> Orders are typically processed within 2-3 business days.
              </li>
              <li>
                <span className="font-medium text-[#1F1F2E]">Shipping Time:</span> Domestic deliveries within India generally take 5-7 business days, depending on the destination.
              </li>
              <li>
                <span className="font-medium text-[#1F1F2E]">Shipping Costs:</span> Shipping fees (if applicable) will be clearly indicated at checkout before completion of your order.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">2. Returns Policy (Physical Goods)</h2>
            <p className="mb-3">
              For any physical merchandise received, if you are not completely satisfied with your purchase, you may be eligible for a return subject to the following conditions:
            </p>
            <ul className="space-y-2.5 list-disc pl-5">
              <li>
                <span className="font-medium text-[#1F1F2E]">Eligibility Window:</span> Return requests must be initiated within 7 days of receiving the item.
              </li>
              <li>
                <span className="font-medium text-[#1F1F2E]">Item Condition:</span> The item must be unused, in its original packaging, and in the same condition that you received it.
              </li>
              <li>
                <span className="font-medium text-[#1F1F2E]">Non-Returnable Items:</span> Customized items, exclusive event tickets, and certain promotional goods may be exempt from being returned.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">3. Process for Returns</h2>
            <p>
              To initiate a return for physical merchandise, please contact us at <a href="mailto:info@revenuechiefs.org" className="text-[#8231D3] hover:underline font-medium">info@revenuechiefs.org</a> with your order details and reason for return. Once approved, we will provide you with instructions on how and where to send your package. You will be responsible for paying your own shipping costs for returning your item unless the return is due to a defect or an error on our part.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">4. Digital Services & Subscriptions</h2>
            <p>
              Please note that this Shipping & Return Policy pertains only to physical goods. For rules governing the cancellation or refund of digital memberships and subscription services, please refer to our <a href="/cancellation-and-refund-policy" className="text-[#8231D3] hover:underline font-medium">Cancellation & Refund Policy</a>.
            </p>
          </section>

          <section className="border-t border-[#ECECF5] pt-8">
            <h2 className="text-lg font-semibold text-[#1F1F2E] mb-3 font-poppins">5. Contact Information</h2>
            <p className="mb-4">
              If you have any questions regarding shipping or returns, please reach out to us:
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
