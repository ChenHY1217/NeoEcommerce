import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // controls delay between each word
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

interface StaggeredTextProps {
    sentence: string;
}

const StaggeredText: React.FC<StaggeredTextProps> = ( {sentence} ) => {
  return (
     <motion.div
      className="flex flex-wrap gap-2 text-xl font-medium"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {sentence.split(" ").map((word, index) => (
        <motion.span key={index} variants={wordVariants}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default StaggeredText;