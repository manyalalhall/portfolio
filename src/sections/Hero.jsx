import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden md:items-center md:justify-between c-space"
      style={{ background: "transparent" }}
    >
      {/* Left: Text */}
      <HeroText />

      {/* Right: Static photo frame */}
      <div className="z-10 flex-shrink-0 mt-10 md:mt-0">
        <div
          style={{
            width: isMobile ? "180px" : "300px",
            height: isMobile ? "220px" : "370px",
            borderRadius: "2rem",
            overflow: "hidden",
            border: "4px solid rgba(180,140,100,0.35)",
            boxShadow: "0 16px 48px 0 rgba(140,100,60,0.18), 0 2px 8px 0 rgba(180,140,100,0.12)",
            background: "#f5ede0",
          }}
        >
          <img
            src="/assets/manya.jpeg"
            alt="Manya Singh Lalhall"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;