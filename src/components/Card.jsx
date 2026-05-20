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
      className="absolute text-sm text-center font-extralight cursor-grab"
      style={{ ...style, background: "#4a2c1a", color: "#f5ede0", border: "1.5px solid #7a4a2a", padding: "10px 28px", borderRadius: "50% / 50%", width: "80px" }}
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