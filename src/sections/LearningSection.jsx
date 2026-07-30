import React from "react";
import TitleHeader from "../components/TitleHeader";
import { learningTopics } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const LearningSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".learning-topic",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#learning",
          start: "top center",
        },
      }
    );
  });

  return (
    <section id="learning" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Current Learning Journey"
          sub="📚 Expanding My Expertise in AI/ML"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningTopics.map((topic, index) => (
            <div key={index} className="learning-topic card-border rounded-xl p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-xl mb-2">{topic.title}</h3>
                  <p className="text-white-50 mb-4">{topic.description}</p>

                  <div className="mb-4">
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                        style={{ width: topic.progress + "%" }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-white-50 mt-1">
                      <span>Progress</span>
                      <span>{topic.progress}%</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-white mb-2">Resources:</p>
                    {topic.resources.map((resource, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="flex-shrink-0">
                          <span className="text-blue-400">•</span>
                        </div>
                        <div className="flex-1">
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:underline"
                          >
                            {resource.name}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;