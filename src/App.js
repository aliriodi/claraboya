import "./App.css";
import { Layout } from "./components/Layout";
import banner from "./assets/claraboya/IsometraLN.jpg";
import { home_mock } from "./mocks/home_mock";
import HomeItem from "./components/HomeItem";
//import { products_mock } from "./mocks/products_mock";
//import { Pagination } from "swiper/modules";
//import { Swiper, SwiperSlide } from "swiper/react";
import play from "./assets/play-icon.png";
//import { useNavigate } from "react-router-dom";
import thumbnail from "./assets/fondo-video.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReactPlayer from "react-player";

function App() {
  const playIcon = <img src={play} alt="play-icon" />;
  //const navigate = useNavigate();

  return (
    <Layout banner={banner} color={"#F6B2BF"}>
      <div className="home">
        <div className="home-title-container">
          <div className="home-title">
            <p className="souvenir">Claraboya</p>
            <p className="print"> Escolar</p>
          </div>
          <p ></p>
          <div className="contenedorB">
            <p className="fiestas">Transformando la Luz en Educación </p>
          </div>
          <p className="diseños">
            {/* Transformando la luz en educación */}
            {/* Transforma las aulas con luz natural */}
          </p>

        </div>
        <div className="contenedorA">
          {home_mock.map((data, index) => (
            <HomeItem item={data} index={index} />
          ))}</div>
        <div className="home-products-container">
          <p className="home-products-title">BENEFICIOS</p>
          <div className="separador">
            <div className="home-products">
              <ul>
                <li>Mejora el rendimiento y aprendizaje en los alumnos.</li>
                <li>Reduce la mala conducta de los alumnos.</li>
                <li>Disminuye los costos operativos en electricidad y sistemas de climatización.</li>
                <li>La falta de luz natural altera la cronobiología (reloj biológico) y provoca alteraciones psicológicas y fisiológicas significativas.</li>
                <li>La falta de luz natural altera el patrón hormonal básico e influye en la capacidad de los niños para concentrarse y cooperar, al tiempo que podría tener un impacto en el crecimiento anual del cuerpo.</li>
              </ul>

              {/* <Swiper
              watchSlidesProgress={true}
              slidesPerView={1}
              pagination={true}
              grabCursor={true}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1250: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1800: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {products_mock.map((data) => (
                <SwiperSlide>
                  <img
                    src={data[0].img}
                    className="carousel-img"
                    alt="carousel-product-img"
                    onClick={() => {
                      navigate(`/Productos#${data[0].id}`);
                    }}
                  />
                  <p className="carrusel-title">{data[0].categoria}</p>
                </SwiperSlide>
              ))}
            </Swiper> */}
  </div>
            </div>
            <div className="home-more-btn-container">
              {/* <button
              className="home-more-btn"
              onClick={() => navigate("/productos/",{ replace: true })}
            >
              VER MÁS
            </button> */}
          
          </div>
        </div>
      </div>
      {/* <div className="video-container">
        <p className="video-title">¿Cómo trabajamos?</p>
        <div className="video">
          <ReactPlayer
            playIcon={playIcon}
            light={thumbnail}
            width="100%"
            height="100%"
            url={"https://www.youtube.com/watch?v=8APqXh7NSzs"}
          />
        </div>
      </div> */}
    </Layout>
  );
}

export default App;
