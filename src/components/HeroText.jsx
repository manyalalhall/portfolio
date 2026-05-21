const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <h1 className="text-4xl font-medium" style={{ color: "#3b1f0e" }}>
          Hi, I'm Manya!
        </h1>
        <p
          className="text-5xl font-large mt-2"
          style={{ color: "#5c3317", lineHeight: 1.25 }}
        >
          Building <span style={{ fontStyle: "italic" }}>Real</span> Products
          <br />& Applications
        </p>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden">
        <p className="text-4xl font-medium" style={{ color: "#3b1f0e" }}>
          Hi, I'm Manya
        </p>
        <p
          className="text-4xl font-black"
          style={{ color: "#5c3317", lineHeight: 1.3 }}
        >
          Building <span style={{ fontStyle: "italic" }}>Real</span> Products & Applications
        </p>
      </div>
    </div>
  );
};

export default HeroText;