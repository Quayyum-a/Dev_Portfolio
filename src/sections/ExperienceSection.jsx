import React from "react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import GlowCard from "../components/GlowCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: text,
          start: "top 70%",
        },
      });
    });

    gsap.utils.toArray(".timeline-logo").forEach((logo) => {
      gsap.from(logo, {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
        ease: "power1.out",
        duration: 0.5,
        scrollTrigger: {
          trigger: logo,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6 timeline-card">
                  <GlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt={card.title} loading="lazy" />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" loading="lazy" />
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-baseline mb-2">
                          <h1 className="font-semibold text-3xl mr-3">{card.title}</h1>
                          <span className="text-xs text-white-50 bg-gray-800 px-2 py-1 rounded">
                            {card.date}
                          </span>
                        </div>

                        {/* Challenge */}
                        <div className="space-y-2">
                          <h2 className="font-semibold text-xl text-blue-400">Challenge</h2>
                          <p className="text-white-50">{card.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div className="space-y-2">
                          <h2 className="font-semibold text-xl text-blue-400">Solution</h2>
                          <p className="text-white-50">{card.solution}</p>
                        </div>

                        {/* Impact */}
                        {card.impact && (
                          <div className="space-y-2">
                            <h2 className="font-semibold text-xl text-blue-400">Impact</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {card.impact.map((metric, idx) => (
                                <div key={idx} className="bg-gray-800 rounded p-3">
                                  <div className="flex items-center mb-2">
                                    <div className="w-6 h-6 bg-blue-500 rounded mr-2 flex items-center justify-center text-xs text-white">
                                      {idx + 1}
                                    </div>
                                    <span className="font-semibold text-white">{metric.label}</span>
                                  </div>
                                  <div className="text-2xl font-bold text-blue-300">{metric.value}</div>
                                  <p className="text-white-50 text-sm">{metric.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technical Details */}
                        {card.technicalDetails && (
                          <div className="space-y-2">
                            <h2 className="font-semibold text-xl text-blue-400">Technical Approach</h2>
                            <p className="text-white-50">{card.technicalDetails}</p>
                          </div>
                        )}

                        {/* Technologies */}
                        {card.technologies && (
                          <div className="space-y-2">
                            <h2 className="font-semibold text-xl text-blue-400">Technologies</h2>
                            <div className="flex flex-wrap gap-2">
                              {card.technologies.map((tech, idx) => (
                                <span key={idx} className="bg-gray-800 text-white-50 px-3 py-1 rounded text-sm">
                                  {tech.name} {tech.level && `(${tech.level})`}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Original Responsibilities (keeping for compatibility) */}
                        {card.responsibilities && (
                          <div className="space-y-2">
                            <h2 className="font-semibold text-xl text-blue-400">Responsibilities</h2>
                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                              {card.responsibilities.map((responsibility) => (
                                <li key={responsibility} className="text-lg">
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
