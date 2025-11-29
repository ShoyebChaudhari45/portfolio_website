import { Link } from "react-router-dom";
import { ArrowLeft, Download, MessageCircle } from "lucide-react";

const ResumeView = () => {
  const resumeFile = "/resume.pdf";
  const whatsappMsg =
    "Hi Shoyeb, I viewed your resume on your portfolio. Let's discuss an opportunity.";

  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-4 px-2"
      style={{ paddingBottom: "40px" }}  // chatbot overlap prevent
    >
      {/* Header */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl shadow-lg flex items-center justify-between px-6 py-4">
        <h1 className="text-lg font-semibold text-white flex items-center gap-2">
          📄 Shoyeb Resume Viewer
        </h1>

        <div className="flex gap-3">
          <Link
            to="/"
            className="bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <ArrowLeft size={18} /> Back
          </Link>

          <a
            href={resumeFile}
            download
            className="bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <Download size={18} /> Download
          </a>

          <a
            href={`https://wa.me/917499601744?text=${encodeURIComponent(whatsappMsg)}`}
            target="_blank"
            className="bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <MessageCircle size={18} /> Hire Me
          </a>
        </div>
      </div>

      {/* PDF Container */}
      <div className="w-full max-w-6xl mt-5 rounded-xl overflow-hidden border border-white/15 shadow-[0_0_18px_rgba(255,255,255,0.18)]"
        style={{ height: "85vh" }}
      >
        <iframe
          src={resumeFile}
          className="w-full h-full"
          style={{ border: "none" }}
          title="Resume Viewer"
        />
      </div>
    </div>
  );
};

export default ResumeView;
