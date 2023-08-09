// CSS
import styles from "./Carousel.module.css";

// motion
import { motion } from "framer-motion";

// Hooks
import { useState, useEffect, useRef } from "react";

const Carousel = ({setPlano}) => {
  const [width, setWidth] = useState(0)

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
          <div className={styles.product}>
            <div className={styles.title_product}>
              <span>Internet 300 MB + netflix padrão</span>
            </div>
            <div className={styles.value}>
              <span>R$ 159,99</span>
            </div>
            <div className={styles.description}>
              <span>
                300 download/ 150 upload - Para CPF - Fidelidade de 1 ano - Sem
                taxa de instalação - Pagamento só depois de 30 dias
              </span>
            </div>
            <a href="#form" onClick={() => setPlano('Internet 300 MB + netflix padrão')} className={styles.link}>
              <button className={styles.btn}>Solicitar contato</button>
            </a>
          </div>{" "}
          <div className={styles.product}>
            <div className={styles.title_product}>
              <span>Internet 300 MB + netflix padrão</span>
            </div>
            <div className={styles.value}>
              <span>R$ 159,99</span>
            </div>
            <div className={styles.description}>
              <span>
                300 download/ 150 upload - Para CPF - Fidelidade de 1 ano - Sem
                taxa de instalação - Pagamento só depois de 30 dias
              </span>
            </div>
            <button className={styles.btn}>Solicitar contato</button>
          </div>{" "}
          <div className={styles.product}>
            <div className={styles.title_product}>
              <span>Internet 300 MB + netflix padrão</span>
            </div>
            <div className={styles.value}>
              <span>R$ 159,99</span>
            </div>
            <div className={styles.description}>
              <span>
                300 download/ 150 upload - Para CPF - Fidelidade de 1 ano - Sem
                taxa de instalação - Pagamento só depois de 30 dias
              </span>
            </div>
            <button className={styles.btn}>Solicitar contato</button>
          </div>{" "}
          <div className={styles.product}>
            <div className={styles.title_product}>
              <span>Internet 300 MB + netflix padrão</span>
            </div>
            <div className={styles.value}>
              <span>R$ 159,99</span>
            </div>
            <div className={styles.description}>
              <span>
                300 download/ 150 upload - Para CPF - Fidelidade de 1 ano - Sem
                taxa de instalação - Pagamento só depois de 30 dias
              </span>
            </div>
            <button className={styles.btn}>Solicitar contato</button>
          </div>
          <div className={styles.product}>
            <div className={styles.title_product}>
              <span>Internet 300 MB + netflix padrão</span>
            </div>
            <div className={styles.value}>
              <span>R$ 159,99</span>
            </div>
            <div className={styles.description}>
              <span>
                300 download/ 150 upload - Para CPF - Fidelidade de 1 ano - Sem
                taxa de instalação - Pagamento só depois de 30 dias
              </span>
            </div>
            <button className={styles.btn}>Solicitar contato</button>
          </div>
          <div className={styles.product}>
            <div className={styles.title_product}>
              <span>Internet 300 MB + netflix padrão</span>
            </div>
            <div className={styles.value}>
              <span>R$ 159,99</span>
            </div>
            <div className={styles.description}>
              <span>
                300 download/ 150 upload - Para CPF - Fidelidade de 1 ano - Sem
                taxa de instalação - Pagamento só depois de 30 dias
              </span>
            </div>
            <button className={styles.btn}>Solicitar contato</button>
          </div>
          <div className={styles.product}>
            <div className={styles.title_product}>
              <span>Internet 300 MB + netflix padrão</span>
            </div>
            <div className={styles.value}>
              <span>R$ 159,99</span>
            </div>
            <div className={styles.description}>
              <span>
                300 download/ 150 upload - Para CPF - Fidelidade de 1 ano - Sem
                taxa de instalação - Pagamento só depois de 30 dias
              </span>
            </div>
            <button className={styles.btn}>Solicitar contato</button>
          </div>
          <div className={styles.product}>
            <div className={styles.title_product}>
              <span>Internet 300 MB + netflix padrão</span>
            </div>
            <div className={styles.value}>
              <span>R$ 159,99</span>
            </div>
            <div className={styles.description}>
              <span>
                300 download/ 150 upload - Para CPF - Fidelidade de 1 ano - Sem
                taxa de instalação - Pagamento só depois de 30 dias
              </span>
            </div>
            <button className={styles.btn}>Solicitar contato</button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
