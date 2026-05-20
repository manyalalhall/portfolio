import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
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
          {/* dark gradient overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-transparent" />
          <div className="z-10 p-6">
            <p className="mt-2 mb-2 text-xl text-white">Hi, I'm Manya Singh Lalhall</p>
            <p className="text-white/80 text-sm md:text-base text-pretty">
              Aspiring Product Manager and Software Engineer with experience in full-stack development, AI/ML systems, and scalable product design.
              Skilled in Agile workflows, product thinking, user journey analysis, competitive analysis, and data-driven decision making.
            </p>
          </div>
        </div>

        {/* Grid 2 — coffee bag right, skill capsules, no background text */}
        <div
          ref={grid2Container}
          className="grid-2 relative overflow-hidden rounded-2xl hover:-translate-y-1 duration-200 p-6"
          style={{ background: "#f5ede0" }}
        >
          {/* Coffee bag image on right */}
          <img
            src="assets/coffee_bag.png"
            alt="coffee bag"
            className="absolute right-0 bottom-0 h-[90%] object-contain pointer-events-none"
          />
          <div className="flex items-center justify-center w-full h-full">
            <Card style={{ rotate: "5deg",   top: "30%", left: "20%" }}  text="AI/ML"           containerRef={grid2Container} />
            <Card style={{ rotate: "-5deg",  top: "60%", left: "45%" }}  text="Full-Stack"      containerRef={grid2Container} />
            <Card style={{ rotate: "8deg",   bottom: "30%", left: "60%"}} text="Product Thinking" containerRef={grid2Container} />
            <Card style={{ rotate: "-6deg",  top: "55%", left: "0%" }}   text="Agile / Scrum"  containerRef={grid2Container} />
            <Card style={{ rotate: "4deg",   top: "10%", left: "38%" }}  text="YOLOv8"         containerRef={grid2Container} />
            <Card style={{ rotate: "-4deg",  top: "5%",  left: "5%" }}   text="React"          containerRef={grid2Container} />
            <Card style={{ rotate: "6deg",   top: "75%", left: "20%" }}  text="Deep Learning"  containerRef={grid2Container} />
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
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="mt-2 mb-2 text-xl">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;