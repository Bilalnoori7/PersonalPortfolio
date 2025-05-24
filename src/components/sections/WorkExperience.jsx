import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useTheme } from "../ThemeContext"; // Adjust path as needed
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
  const {currentTheme}= useTheme();
  return (
    <section className='max-container' id="experience">
      <div className='py-16'>
        {/* <h3 className="text-[40px] font-bold mb-8 text-[#EBEBEB] text-center font-sans">Work Experience</h3> */}
        <h3 className={`text-[40px] font-bold mb-8 ${currentTheme.textColor} text-center font-sans`}>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`${experience.company_name}-${index}`}
                date={experience.date}
                dateClassName={`${currentTheme.textColor}`}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  background: "rgb(0, 0, 0)",
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  border: "1px solid #333",
                }}
                contentArrowStyle={{ borderRight: '7px solid #333' }}
              >
                <div>
                  <h3 className={`${currentTheme.textColor} text-xl font-sans font-semibold`}>
                    {experience.company_name}
                  </h3>
                  
                  {/* If there are multiple roles, render them */}
                  {experience.roles ? (
                    <div className="space-y-4 mt-2">
                      {experience.roles.map((role, roleIndex) => (
                        <div key={`role-${roleIndex}`} >
                          <p className={`${currentTheme.textColor} font-medium text-base mb-1`}>
                            {role.title}
                          </p>
                          <p className={`${currentTheme.textColor} text-sm mb-2`}>
                            {role.date}
                          </p>
                          <ul className='list-disc ml-5 space-y-2'>
                            {role.points.map((point, pointIndex) => (
                              <li
                                key={`role-point-${pointIndex}`}
                                className={`${currentTheme.textColor} font-normal pl-1 text-sm`}
                              >
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // For single role experiences, render as before
                    <>
                      <p className={`${currentTheme.textColor} font-medium text-base' style={{ margin: 0 }}`}>
                        {experience.title}
                      </p>
                      <ul className='my-5 list-disc ml-5 space-y-2'>
                        {experience.points.map((point, pointIndex) => (
                          <li
                            key={`experience-point-${pointIndex}`}
                            className={`${currentTheme.textColor} font-normal pl-1 text-sm`}
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

    </section>
  );
};