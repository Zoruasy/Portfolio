import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypewriterLoop = ({ texts, speed = 80, pause = 2000 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout;

        if (!isDeleting && charIndex < currentText.length) {
            timeout = setTimeout(() => {
                setDisplayedText(currentText.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }, speed);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayedText(currentText.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            }, speed / 2);
        } else {
            timeout = setTimeout(() => {
                setIsDeleting(!isDeleting);
                if (!isDeleting) return;
                setTextIndex((prev) => (prev + 1) % texts.length);
            }, pause);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "monospace", whiteSpace: "pre" }}
        >
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
            >
                |
            </motion.span>
        </motion.div>
    );
};

export default TypewriterLoop;
