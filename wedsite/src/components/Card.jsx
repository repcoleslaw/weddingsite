import { motion } from "framer-motion";

export default function Card({ children }) {
  return (

    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-16 w-full md:w-1/2 text-center mx-auto"
    >
      {children}
    </motion.div>


  );
}