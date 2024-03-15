"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset  > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        isVisible ? "fixed bottom-20 right-6" : "hidden"
      } bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-full shadow-md transition duration-300`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTopButton;
