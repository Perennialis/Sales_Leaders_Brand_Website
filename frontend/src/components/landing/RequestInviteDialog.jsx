import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";

export default function RequestInviteDialog({ open, onOpenChange, mode = "invite" }) {
  const [submitting, setSubmitting] = useState(false);

  const titleMap = {
    invite: "Request your invitation",
    apply: "Apply for membership",
    schedule: "Schedule an intro call",
  };
  const descMap = {
    invite: "Tell us a bit about you. We review applications within 7 working days.",
    apply: "All membership applications are reviewed by our team. We protect the quality of the room.",
    schedule: "Our membership team will reach out to confirm a 25-minute private intro call.",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      toast.success("Application received", {
        description: "Our membership team will get back within 7 working days.",
      });
    }, 900);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="invite-dialog"
        className="max-w-lg bg-white border-[#ECECF5] rounded-2xl p-0 overflow-hidden"
      >
        <div className="bg-[#F8F6FF] px-7 py-6 border-b border-[#ECECF5]">
          <div className="flex items-center gap-2 text-[#8231D3] mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-medium tracking-wide">INVITATION-ONLY</span>
          </div>
          <DialogHeader className="text-left space-y-2">
            <DialogTitle className="text-2xl font-semibold text-[#1F1F2E]">
              {titleMap[mode]}
            </DialogTitle>
            <DialogDescription className="text-[#6C6C80] text-sm">
              {descMap[mode]}
            </DialogDescription>
          </DialogHeader>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onSubmit={onSubmit}
          className="px-7 py-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="fname" className="text-xs text-[#1F1F2E]">First name</Label>
              <Input id="fname" data-testid="invite-fname" required placeholder="Rajiv" className="bg-white border-[#ECECF5]" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lname" className="text-xs text-[#1F1F2E]">Last name</Label>
              <Input id="lname" data-testid="invite-lname" required placeholder="Menon" className="bg-white border-[#ECECF5]" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs text-[#1F1F2E]">Work email</Label>
            <Input id="email" type="email" data-testid="invite-email" required placeholder="rajiv@company.com" className="bg-white border-[#ECECF5]" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="title" className="text-xs text-[#1F1F2E]">Title</Label>
              <Input id="title" data-testid="invite-title" required placeholder="VP Sales" className="bg-white border-[#ECECF5]" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="company" className="text-xs text-[#1F1F2E]">Company</Label>
              <Input id="company" data-testid="invite-company" required placeholder="Infosys" className="bg-white border-[#ECECF5]" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="msg" className="text-xs text-[#1F1F2E]">Briefly, why join?</Label>
            <Textarea id="msg" data-testid="invite-msg" rows={3} placeholder="What would you like to get from this network?" className="bg-white border-[#ECECF5]" />
          </div>

          <div className="pt-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-2">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              data-testid="invite-cancel"
              className="px-5 py-2.5 rounded-full border border-[#ECECF5] text-[#1F1F2E] hover:bg-[#F4F5F7] transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              data-testid="invite-submit"
              className="btn-glow px-6 py-2.5 rounded-full bg-[#8231D3] text-white font-medium hover:bg-[#5F27CD] transition-colors text-sm disabled:opacity-70"
            >
              {submitting ? "Submitting…" : "Submit Application"}
            </button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
