import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields (Name, Email, Message)");
      return;
    }

    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      toast.success("Message Sent Successfully!", {
        description: "Thank you for contacting Revenue Chiefs. We will get back to you shortly.",
        duration: 5000
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1200);
  };

  return (
    <div data-testid="contact-page" className="min-h-screen bg-white text-[#1F1F2E]">
      <Navbar />

      {/* Hero / Header Section */}
      <div className="relative pt-32 pb-16 overflow-hidden bg-[#F8F6FF] border-b border-[#ECECF5]">
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#EDE7FF] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#DDD3FB] blur-[100px]" />
        
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1F1F2E] font-poppins">
            Contact Us
          </h1>
          <p className="mt-3 text-sm text-[#6C6C80] max-w-2xl mx-auto">
            Get in touch with the Revenue Chiefs team for support, partnership, or enterprise billing inquiries.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="md:col-span-1 space-y-6">
            <Card className="border-[#ECECF5] bg-white shadow-[0_4px_20px_rgba(130,49,211,0.04)]">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#F8F6FF] text-[#8231D3] shrink-0 border border-[#ECECF5]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F1F2E] text-base font-poppins">Email Support</h3>
                  <p className="text-xs text-[#6C6C80] mt-1 leading-relaxed">For membership support and inquiries</p>
                  <a href="mailto:inforevenuechiefs@gmail.com" className="text-sm font-semibold text-[#8231D3] hover:text-[#5F27CD] hover:underline block mt-2.5">
                    inforevenuechiefs@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#ECECF5] bg-white shadow-[0_4px_20px_rgba(130,49,211,0.04)]">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#F8F6FF] text-[#8231D3] shrink-0 border border-[#ECECF5]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F1F2E] text-base font-poppins">Phone Contact</h3>
                  <p className="text-xs text-[#6C6C80] mt-1 leading-relaxed">Speak with our representatives</p>
                  <div className="flex flex-col gap-1 mt-2.5 text-sm font-semibold text-[#1F1F2E]">
                    <a href="tel:+919884200044" className="hover:text-[#8231D3] hover:underline block">
                      +91 98842 00044
                    </a>
                    <a href="tel:+917996969996" className="hover:text-[#8231D3] hover:underline block">
                      +91 79969 69996
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#ECECF5] bg-white shadow-[0_4px_20px_rgba(130,49,211,0.04)]">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#F8F6FF] text-[#8231D3] shrink-0 border border-[#ECECF5]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F1F2E] text-base font-poppins">Corporate Office</h3>
                  <p className="text-xs text-[#6C6C80] mt-1 leading-relaxed">Our registered physical address</p>
                  <span className="text-sm font-semibold text-[#1F1F2E]/80 block mt-2.5 leading-relaxed">
                    25, 18th Main Rd, Sector 3, HSR Layout, Bengaluru, Karnataka 560102
                  </span>
                  <span className="text-[10px] text-[#6C6C80] block mt-1 font-normal">
                    (Belongs to Perennial Innovative Solutions Group)
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="border-[#ECECF5] bg-white h-full shadow-[0_4px_20px_rgba(130,49,211,0.04)]">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="h-5 w-5 text-[#8231D3]" />
                  <h2 className="text-lg font-semibold text-[#1F1F2E] font-poppins">Send us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 flex flex-col">
                      <label htmlFor="name" className="text-sm font-medium text-[#1F1F2E]">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="border-[#ECECF5] focus:border-[#8231D3] focus:ring-[#EDE7FF] rounded-lg mt-1"
                        required
                      />
                    </div>
                    <div className="space-y-1.5 flex flex-col">
                      <label htmlFor="email" className="text-sm font-medium text-[#1F1F2E]">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="border-[#ECECF5] focus:border-[#8231D3] focus:ring-[#EDE7FF] rounded-lg mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 flex flex-col">
                    <label htmlFor="subject" className="text-sm font-medium text-[#1F1F2E]">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      className="border-[#ECECF5] focus:border-[#8231D3] focus:ring-[#EDE7FF] rounded-lg mt-1"
                    />
                  </div>

                  <div className="space-y-1.5 flex flex-col">
                    <label htmlFor="message" className="text-sm font-medium text-[#1F1F2E]">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message here..."
                      className="border-[#ECECF5] focus:border-[#8231D3] focus:ring-[#EDE7FF] rounded-lg mt-1 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-[#8231D3] hover:bg-[#5F27CD] text-white rounded-full px-8 py-2.5 font-medium btn-glow flex items-center gap-2 w-full sm:w-auto mt-4 transition-colors"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
