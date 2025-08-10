import React, { useState } from "react";
import HomeBanner from "../../Components/HomeBanner";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination,Autoplay} from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Rating,
} from "@mui/material";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import FullscreenIcon from "@mui/icons-material/Fullscreen";


const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState({});
  const [sparkleIndex, setSparkleIndex] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const toggleLike = (index) => {
    setLikedProducts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setSparkleIndex(index);
    setTimeout(() => setSparkleIndex(null), 600);
  };

  const products = [
    {
      img: "https://m.media-amazon.com/images/I/51vaKJu6iOL._SY500_.jpg",
      name: "Product 1",
      price: "₹999",
      description: "This is a nice product 1 description.",
      rating: 4.5,
    },
    {
      img: "https://images-magento.shoppersstop.com/pub/media/catalog/product/S24VM10316643/S24VM10316643_WHITE/S24VM10316643_WHITE.jpg_2000Wx3000H",
      name: "Product 2",
      price: "₹1099",
      description: "Amazing quality product 2.",
      rating: 4,
    },
    {
      img: "https://images-magento.shoppersstop.com/pub/media/catalog/product/S24VM10316643/S24VM10316643_WHITE/S24VM10316643_WHITE.jpg_2000Wx3000H",
      name: "Product 3",
      price: "₹1199",
      description: "Best seller product 3.",
      rating: 3.5,
    },
    {
      img: "https://images-magento.shoppersstop.com/pub/media/catalog/product/S24VM10316643/S24VM10316643_WHITE/S24VM10316643_WHITE.jpg_2000Wx3000H",
      name: "Product 4",
      price: "₹1299",
      description: "Top-rated product 4.",
      rating: 5,
    },
    {
      img: "https://images-magento.shoppersstop.com/pub/media/catalog/product/S24VM10316643/S24VM10316643_WHITE/S24VM10316643_WHITE.jpg_2000Wx3000H",
      name: "Product 5",
      price: "₹1399",
      description: "Customer favorite product 5.",
      rating: 4.7,
    },
  ];

  return (
    <>
      <HomeBanner />
      <section className="homeProducts py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img
                  src="https://sslimages.shoppersstop.com/sys-master/root/hf6/h49/33278720344094/Vero-Moda-web_f3.jpg"
                  className="w-100"
                  alt="Vero Moda"
                />
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="info">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-dark text-sml mb-0">DO NOT MISS THE OFFERS</p>
                </div>

                <Button
                  className="viewallbtn"
                  variant="contained"
                  endIcon={<IoIosArrowRoundForward />}
                >
                  View All
                </Button>
              </div>

              <div className="product_row w-100">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  navigation={true}
                  grabCursor={true}
                  simulateTouch={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {products.map((product, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="item productItem"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        <IconButton
                          onClick={() => handleOpen(product)}
                          style={{ position: "absolute", top: 8, left: 8, color: "black", zIndex: 10 }}
                          aria-label="Fullscreen"
                          size="small"
                        >
                          <FullscreenIcon fontSize="small" />
                        </IconButton>

                        <IconButton
                          onClick={() => toggleLike(index)}
                          className={sparkleIndex === index ? "sparkle" : ""}
                          style={{ position: "absolute", top: 8, right: 8, color: likedProducts[index] ? "red" : "gray", zIndex: 10 }}
                          aria-label={likedProducts[index] ? "Unlike" : "Like"}
                          size="small"
                        >
                          {likedProducts[index] ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
                        </IconButton>

                        <div onClick={() => handleOpen(product)} style={{ paddingTop: "30px" }}>
                          <div className="imgWrapper">
                            <img src={product.img} alt={product.name} className="w-100" />
                          </div>
                          <div style={{ marginTop: "5px" }}>
                            <Rating name={`rating-${index}`} value={product.rating} precision={0.5} readOnly size="small" />
                          </div>
                          <p style={{ fontSize: "0.9rem", fontWeight: "bold", margin: "5px 0 0" }}>{product.price}</p>
                          <p style={{ fontSize: "0.85rem", color: "#555", marginTop: "4px" }}>{product.description}</p>
                        </div>

                        <Button
                          variant={likedProducts[index] ? "contained" : "outlined"}
                          size="small"
                          color="error"
                          onClick={() => toggleLike(index)}
                          style={{ marginTop: "8px" }}
                        >
                          {likedProducts[index] ? "Liked ❤️" : "Like ♡"}
                        </Button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>{selectedProduct?.name}</DialogTitle>
        <DialogContent>
          <img src={selectedProduct?.img} alt={selectedProduct?.name} style={{ width: "100%", marginBottom: "10px" }} />
          <p><strong>Price:</strong> {selectedProduct?.price}</p>
          <p><strong>Description:</strong> {selectedProduct?.description}</p>
          <Rating name="rating-fullscreen" value={selectedProduct?.rating} precision={0.5} readOnly size="medium" />
          <Button variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }}>Buy Now</Button>
        </DialogContent>
      </Dialog>
      <section className="shopByCategory py-5">
  <div className="container">
    <h2 className="text-center mb-4">SHOP BY CATEGORY</h2>

    {/* Brand Banners Row */}
    <div className="row mb-4">
      {[
        "https://cmsimages.shoppersstop.com/Libas_web_bc373bb18d/Libas_web_bc373bb18d.png",
        "https://cmsimages.shoppersstop.com/LQ_web_7822884708/LQ_web_7822884708.png",
        "https://cmsimages.shoppersstop.com/Allen_solly_web_1e2d1b737d/Allen_solly_web_1e2d1b737d.png",
      ].map((banner, index) => (
        <div className="col-md-4 col-sm-6 mb-3" key={index}>
          <img
            src={banner}
            alt={`Banner ${index + 1}`}
            className="img-fluid"
            style={{ borderRadius: "10px", width: "100%" }}
          />
        </div>
      ))}
    </div>

    {/* Category Cards Row */}
    <div className="row">
      {[
        {
          title: "Ethnic Wear",
          discount: "50-80% OFF",
          img: "https://cmsimages.shoppersstop.com/Libas_web_bc373bb18d/Libas_web_bc373bb18d.png",
        },
        {
          title: "Casual Wear",
          discount: "40-80% OFF",
          img: "https://cmsimages.shoppersstop.com/Neerus_web_2917357546/Neerus_web_2917357546.png",
        },
        {
          title: "Men’s wear",
          discount: "30-70% OFF",
          img: "https://cmsimages.shoppersstop.com/Fratini_web_bf681a0f3f/Fratini_web_bf681a0f3f.png",
        },
        {
          title: "Men’s wear",
          discount: "30-70% OFF",
          img: "https://cmsimages.shoppersstop.com/UCB_web_1bdba195f3/UCB_web_1bdba195f3.png",
        },
        {
          title: "Western Wear",
          discount: "40-80% OFF",
          img: "https://cmsimages.shoppersstop.com/VH_web_412c78aee7/VH_web_412c78aee7.png",
        },
        {
          title: "Watches",
          discount: "50-60% OFF",
          img: "https://cmsimages.shoppersstop.com/Earnshaw_web_5ae83524c0/Earnshaw_web_5ae83524c0.png",
        },
      ].map((item, index) => (
        <div className="col-md-2 col-sm-4 col-6 text-center mb-4" key={index}>
          <div className="category-card p-2" style={{ border: "1px solid #eee", borderRadius: "8px" }}>
            <img src={item.img} alt={item.title} className="img-fluid mb-2" />
            <h6 className="mb-1">{item.title}</h6>
            <p className="text-danger fw-bold">{item.discount}</p>
            <Button size="small" variant="outlined" fullWidth>Shop Now</Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="brand-carousel py-5" style={{ backgroundColor: "#1e1e1e" }}>
  <div className="container text-center">
    <h2 className="text-white mb-4">Featured Brands</h2>
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="brandSwiper"
    >
      {[
        "https://cmsimages.shoppersstop.com/Libas_web_bc373bb18d/Libas_web_bc373bb18d.png",
        "https://cmsimages.shoppersstop.com/LQ_web_7822884708/LQ_web_7822884708.png",
        "https://cmsimages.shoppersstop.com/Allen_solly_web_1e2d1b737d/Allen_solly_web_1e2d1b737d.png",
        "https://cmsimages.shoppersstop.com/UCB_web_1bdba195f3/UCB_web_1bdba195f3.png",
        "https://cmsimages.shoppersstop.com/Earnshaw_web_5ae83524c0/Earnshaw_web_5ae83524c0.png",
      ].map((url, index) => (
        <SwiperSlide key={index} style={{ width: "310px" }}>
          <div style={{ borderRadius: "10px", overflow: "hidden", background: "#fff", padding: "10px" }}>
            <img src={url} alt={`brand-${index}`} style={{ width: "100%", height: "auto" }} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>




    </>
  );
};

export default Home;
