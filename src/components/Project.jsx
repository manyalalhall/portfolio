import React from "react";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl text-[#2c1a0e]">{title}</p>
          <div className="flex gap-5 mt-2" style={{ color: "#8b5e3c" }}>
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 cursor-pointer hover-animation font-medium"
          style={{ color: "#4a2c1a" }}
        >
          Read More →
        </a>
      </div>
      <div className="bg-gradient-to-r from-transparent via-stone-300 to-transparent h-[1px] w-full" />
    </>
  );
};

export default Project;