import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Box } from "@mui/material";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Carrousel = () => {
  return (
    <>
      <Swiper
        navigation
        autoplay={{ delay: 5000 }}
        fadeEffect={{ crossFade: true }}
        effect="fade"
        pagination
        slidesPerView={1}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
      >
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src="https://http2.mlstatic.com/D_NQ_929837-MLA75163224787_032024-OO.webp"
            sx={{
              width: "100%",
              height: "400px",
              maskImage: "linear-gradient(#000 80%, transparent)",
              textAlign: "center",
              display: "grid",
              alignContent: "center",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg"
            alt="Not Found"
            sx={{
              width: "100%",
              height: "400px",
              maskImage: "linear-gradient(#000 80%, transparent)",
              textAlign: "center",
              display: "grid",
              alignContent: "center",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="https://http2.mlstatic.com/D_NQ_929837-MLA75163224787_032024-OO.webp"
            sx={{
              width: "100%",
              height: "400px",
              maskImage: "linear-gradient(#000 80%, transparent)",
              textAlign: "center",
              display: "grid",
              alignContent: "center",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carrousel;
