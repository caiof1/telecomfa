// CSS
import styles from "./Carousel.module.css";

// motion
import { motion } from "framer-motion";

// Hooks
import { useState, useEffect, useRef } from "react";

const Carousel = ({ setPlano, documents }) => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className={styles.container_carousel}>
      <motion.div
        ref={carousel}
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <>
          {documents &&
            documents.map((doc) => (
              <div className={styles.product}>
                <div className={styles.title_product}>
                  <span>{doc.name}</span>
                </div>
                <div className={styles.value}>
                  <span>R$ {doc.value}</span>
                </div>
                <div className={styles.description}>
                  <span>{doc.description}</span>
                </div>
                <a
                  href="#form"
                  onClick={() => setPlano(doc.name)}
                  className={styles.link}
                >
                  <button className={styles.btn}>Solicitar contato</button>
                </a>
              </div>
            ))}{" "}
          </>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
