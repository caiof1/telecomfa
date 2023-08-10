// CSS
import styles from "./Carousel.module.css";

// swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination"

import { Swiper, SwiperSlide } from "swiper/react";

// hooks
import { useState, useEffect } from "react";

register();

const Carousel = ({ setPlano, documents }) => {

  const [slidePerView, setSlidePerView] = useState(3)

  useEffect(() => {

    function handleResize() {
      if(window.innerWidth < 700) {
        setSlidePerView(1)
      }else if(window.innerWidth < 990) {
        setSlidePerView(2)
      } else {
        setSlidePerView(3)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])

  return (
    <div className={styles.container_carousel}>
      <Swiper
        className={styles.carousel}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={slidePerView}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
      >
        {documents.map((doc) => (
          <SwiperSlide key={doc.id} className={styles.product_single}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
