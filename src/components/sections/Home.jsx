import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../ThemeContext"; // Adjust path as needed
import myPhoto from '/src/assets/images/Bilal-Noori_Headshot.jpg';

export const Home = () => {
  // Use the global theme context instead of local state
  const { currentTheme } = useTheme();

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative pt-16 md:pt-20`}
    >
      <RevealOnScroll>
        {/* This creates a flex container that's column on mobile, row on larger screens */}
        <div className="flex flex-col md:flex-row items-center gap-12 z-10 px-4">
          {/* This creates a circular container for the image */}
          <div className={`w-84 h-84 overflow-hidden rounded-full border-4 ${currentTheme.borderColor}`}>
            {/* This displays the image and makes it cover the container properly */}
            <img 
              src={myPhoto} 
              alt="Bilal Noori" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left max-w-xl">
            <h1 className={`font-[ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue',Arial] text-5xl md:text-7xl font-bold mb-6 ${currentTheme.textColor} leading-right`}>
              Hi, I'm Bilal Noori
            </h1>
            <p className={`font-['Helvetica'] ${currentTheme.textColor} text-lg mb-4`}>
              I am a self-driven and committed Computer Science major at Michigan State University, complementing my technical education with a minor in Business. With a profound passion for coding and a well-versed skill set in Python and C++, I am eager to leverage my technical expertise to solve real-world problems and drive innovation. Outside of academics, I enjoy playing soccer and have been a part of the Michigan State University Futsal Club Team, even making it to the semi-finals last year.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};