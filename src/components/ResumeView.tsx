import React from "react";

const ResumeView = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="text-center py-4 text-white font-semibold text-xl bg-gradient-to-r from-cyan-400 to-purple-500">
        📄 Shoyeb Resume Viewer
      </div>

      {/* PDF Viewer */}
      <iframe
        src="resume.pdf"
        className="flex-1"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Resume Viewer"
      />
    </div>
  );
};

export default ResumeView;
