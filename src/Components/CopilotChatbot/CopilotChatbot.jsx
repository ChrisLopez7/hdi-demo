// src/components/CopilotChatbot.jsx
'use client'
import { useEffect } from "react";

export default function CopilotChatbot() {
  useEffect(() => {
    const toggle = document.getElementById("copilot-toggle");
    const iframe = document.getElementById("copilot-iframe");

    if (toggle && iframe) {
      toggle.addEventListener("click", () => {
        iframe.style.display = iframe.style.display === "none" ? "block" : "none";
      });
    }
    
    return () => {
      if (toggle && iframe) {
        toggle.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <div id="copilot-chatbot-root" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      <img
        src="/Images/robot-icon.png"
        alt="Asistente Virtual"
        id="copilot-toggle"
        style={{ width: "60px", height: "60px", cursor: "pointer" }}
      />
      <iframe
        id="copilot-iframe"
        src="https://copilotstudio.microsoft.com/environments/Default-6d5e4175-75ef-480a-becf-6f7a01d04824/bots/cr104_asesorHdi/webchat?__version__=2"
        title="Asistente Virtual HDI"
        allow="microphone; geolocation"
        style={{
          width: "350px",
          height: "500px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          display: "none",
          position: "fixed",
          bottom: "90px",
          right: "20px",
          zIndex: 1000,
        }}
      ></iframe>
    </div>
  );
}
