import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const skills = [
  "AI / ML",
  "Full-Stack Dev",
  "Product Thinking",
  "Agile / Scrum",
  "YOLOv8",
  "React",
  "Deep Learning",
];

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1 — me.jpeg as background, white text */}
        <div className="flex items-start grid-1 relative overflow-hidden rounded-2xl hover:-translate-y-1 duration-200">
          <img
            src="assets/me.jpeg"
            alt="Manya working"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-transparent" />
          <div className="z-10 p-6">
            <p className="mt-2 mb-2 text-xl text-white">I'm Manya Singh Lalhall</p>
            <p className="text-white/80 text-sm md:text-base text-pretty">
              Aspiring Product Manager and Software Engineer with 
            </p>
            <p className="text-white/80 text-sm md:text-base text-pretty">
              experience in full-stack development, AI/ML systems,
            </p>
            <p className="text-white/80 text-sm md:text-base text-pretty">
              and scalable product design.
            </p>
          </div>
        </div>

        {/* Grid 2 — skills displayed inline across 2-3 rows */}
        <div
          className="grid-2 relative overflow-hidden rounded-2xl hover:-translate-y-1 duration-200 p-6"
          style={{ background: "#f5ede0" }}
        >
          <div className="flex items-center justify-center h-full w-full">
            <div className="flex flex-wrap gap-x-5 gap-y-3 justify-center">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-base font-bold"
                  style={{ color: "#5c3317" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grid 3 — timezone.jpeg background, white text */}
        <div className="grid-3 relative overflow-hidden rounded-2xl hover:-translate-y-1 duration-200">
          <img
            src="assets/timezone.jpeg"
            alt="Dharamshala view"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10" />
          <div className="z-10 relative w-[55%] p-6">
            <p className="mt-2 mb-2 text-xl text-white">Time Zone</p>
            <p className="text-white/80 text-sm md:text-base text-pretty">
              I'm based in Dharamshala, India, and open to remote work worldwide
            </p>
          </div>
        </div>

        {/* Grid 4 — copy email */}
        <div className="grid-4 rounded-2xl hover:-translate-y-1 duration-200 p-6" style={{ background: "transparent", border: "1.5px solid #c4a882" }}>
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center mt-2 mb-2 text-xl" style={{ color: "#3b1f0e" }}>
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 — tech stack */}
        <div className="grid-default-color grid-5 flex items-center gap-6 p-6">
          <div className="z-10 w-[45%] shrink-0">
            <p className="mt-2 mb-2 text-xl">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Frameworks />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;