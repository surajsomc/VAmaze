import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const fullText = "At VAmaze, our mission is to empower businesses of all sizes with cutting-edge software products that drive digital transformation and deliver measurable Outcome. We are dedicated to understanding our clients unique needs and delivering tailor-made solutions that increase efficiency, boost revenue, and foster growth. Our team of experts stays at the forefront of technology trends to ensure that our clients receive the best products and services in the industry. We are committed to delivering exceptional customer service and building long-lasting partnerships with our clients.";

  useEffect(() => {
    let index = 0;
    const type = () => {
      setTimeout(() => {
        setText(fullText.substring(0, index + 1));
        index++;
        if (index < fullText.length) {
          type();
        }
      }, 60);
    };

    type();
  }, []);

  return (
    <div>
      {fullText ? <p>{text}</p> : <p>Loading...</p>}
      {isCursorVisible && <span className="cursor">|</span>}
    </div>
  );
};

export default TypingEffect;
