// components/LandingButton.jsx
import { motion } from "framer-motion";

export default function LandingButton({ onClick }) {
  return (
    <div>
        <motion.h1
            className="text-4xl font-script"
            initial={{ opacity: 0, y: 50 }}           // Start invisible + 50px down
            animate={{ opacity: 1, y: 0 }}           // End fully visible + y at 0
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth ease
        >
        Introducting
        </motion.h1>
        <motion.h1
        className="text-6xl font-script"
        initial={{ opacity: 0, y: 50 }}           // Start invisible + 50px down
        animate={{ opacity: 1, y: 0 }}           // End fully visible + y at 0
        transition={{ duration: 1, ease: "easeOut" }} // Smooth ease
        >
        Andrew & Carolyn's
        </motion.h1>
       <motion.h1
        className="text-6xl font-script"
        initial={{ opacity: 0, y: 50 }}           // Start invisible + 50px down
        animate={{ opacity: 1, y: 0 }}           // End fully visible + y at 0
        transition={{ duration: 1.2, ease: "easeOut" }} // Smooth ease
       >
        Wedding
       </motion.h1>

        <motion.div
            className="w-3/4 max-w-full p-8 m-auto"
            whileHover={{ scale: 1.025 }}
            initial={{ opacity: 0, y: 50 }}           // Start invisible + 50px down
            animate={{ opacity: 1, y: 0 }}           // End fully visible + y at 0
            transition={{ duration: 1.4, ease: "easeOut" }} // Smooth ease
        >
        <img 
            src="/closeEnvelope.png" 
            alt="closed invite" 
        />

        </motion.div>
        <motion.button
            className="font-script text-4xl p-8 rounded-full"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            transition={{ duration: 0.3 }}
        >
            Click to Open
        </motion.button>
    </div>
   
  );
}