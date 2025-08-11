import { motion } from "framer-motion";

export default function Card({ children }) {
  return (
    <motion.div
      className="max-w-3/4 p-8 m-auto"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}