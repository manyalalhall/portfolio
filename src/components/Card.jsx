import { motion } from "motion/react";
const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-3 py-2 text-sm text-center rounded-full font-extralight w-[8rem] cursor-grab"
      style={{ ...style, background: "#4a2c1a", color: "#f5ede0", border: "1.5px solid #7a4a2a" }}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;