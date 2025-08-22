import React from "react";
import "./tech-slider.scss"; // SCSS file next

// Data: add your own icon paths and className for custom color/shadow rules
const TECHS = [
  { name: "Phrasee AI", icon: "/assets/icons/phrasee.svg", className: "phrasee-ai" },
  { name: "Google Cloud AI", icon: "/assets/icons/google-cloud.svg", className: "google-cloud-ai" },
  { name: "OpenAI", icon: "/assets/icons/openai.svg", className: "openai" },
  { name: "AWS", icon: "/assets/icons/aws.svg", className: "aws" },
  { name: "Azure", icon: "/assets/icons/azure.svg", className: "azure" },
  // add more items as needed
];

export default function TechSlider({ speed = 20 /* seconds for one full loop - lower = faster */ }) {
  // Duplicate array to create seamless loop in CSS marquee technique
  const repeated = [...TECHS, ...TECHS];

  return (
    <section className="tech-slider" aria-label="Technologies slider">
      {/* CSS variable --speed controls animation duration */}
      <div className="tech-slider__track" style={{ ["--speed"]: `${speed}s` }}>
        {repeated.map((t, i) => (
          <div key={i} className={`tech-box ${t.className}`}>
            <div className="tech-box-img">
              <div className="img-wrapper">
                <img src={t.icon} alt={t.name} />
              </div>

              <div className="shadow">
                <div className="shadow__wrapper" />
              </div>
            </div>
            {/* optional label */}
            <div className="tech-name">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
