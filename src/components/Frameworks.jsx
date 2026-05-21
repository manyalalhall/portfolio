export function Frameworks() {
  const skills = [
    "python",
    "javascript",
    "react",
    "git",
    "html5",
    "css3",
    "tailwindcss",
    "vitejs",
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "center" }}>
      {skills.map((skill) => (
        <img
          key={skill}
          src={`/assets/logos/${skill}.svg`}
          style={{ width: "50px", height: "50px", display: "block" }}
        />
      ))}
    </div>
  );
}

export { Frameworks as FrameWorks };