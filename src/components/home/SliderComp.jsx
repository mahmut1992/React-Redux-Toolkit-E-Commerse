import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpeg";
import image3 from "../../assets/images/image3.jpeg";
import image4 from "../../assets/images/image4.jpeg";
import image5 from "../../assets/images/image5.jpeg";
import image6 from "../../assets/images/image6.jpeg";

const SliderComp = () => {
  var settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings} a>
        <div className="!flex items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <h1 className="text-4xl font-bold">
              Kaliteli ürünlerin tek adresi...
            </h1>
            <p className="text-xl my-4">
              Kaliteli ayakkabı seçimi, hem şıklık hem de konfor açısından büyük
              önem taşır. Dayanıklı malzemelerden üretilmiş, ergonomik tasarıma
              sahip ayakkabılar uzun ömürlü olur. Deri, süet veya nefes alabilen
              file yapılar, ayak sağlığını destekler. Taban yapısı kaymaz ve
              esnek olmalıdır. Spor, klasik veya günlük kullanım için farklı
              modeller mevcuttur.
            </p>
            <button className=" rounded-full text-2xl cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200 hover:bg-gray-400 hover:text-white ">
              İncele
            </button>
          </div>

          <img src={image1} alt="product-image" />
        </div>
        <div className="!flex items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <h1 className="text-4xl font-bold">
              Kaliteli ürünlerin tek adresi...
            </h1>
            <p className="text-xl my-4">
              Kaliteli ayakkabı seçimi, hem şıklık hem de konfor açısından büyük
              önem taşır. Dayanıklı malzemelerden üretilmiş, ergonomik tasarıma
              sahip ayakkabılar uzun ömürlü olur. Deri, süet veya nefes alabilen
              file yapılar, ayak sağlığını destekler. Taban yapısı kaymaz ve
              esnek olmalıdır. Spor, klasik veya günlük kullanım için farklı
              modeller mevcuttur.
            </p>
            <button className=" rounded-full text-2xl cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200 hover:bg-gray-400 hover:text-white ">
              İncele
            </button>
          </div>
          <img src={image2} alt="product-image" />
        </div>
        <div className="!flex items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <h1 className="text-4xl font-bold">
              Kaliteli ürünlerin tek adresi...
            </h1>
            <p className="text-xl my-4">
              Kaliteli ayakkabı seçimi, hem şıklık hem de konfor açısından büyük
              önem taşır. Dayanıklı malzemelerden üretilmiş, ergonomik tasarıma
              sahip ayakkabılar uzun ömürlü olur. Deri, süet veya nefes alabilen
              file yapılar, ayak sağlığını destekler. Taban yapısı kaymaz ve
              esnek olmalıdır. Spor, klasik veya günlük kullanım için farklı
              modeller mevcuttur.
            </p>
            <button className=" rounded-full text-2xl cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200 hover:bg-gray-400 hover:text-white ">
              İncele
            </button>
          </div>
          <img src={image3} alt="product-image" />
        </div>
        <div className="!flex items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <h1 className="text-4xl font-bold">
              Kaliteli ürünlerin tek adresi...
            </h1>
            <p className="text-xl my-4">
              Kaliteli ayakkabı seçimi, hem şıklık hem de konfor açısından büyük
              önem taşır. Dayanıklı malzemelerden üretilmiş, ergonomik tasarıma
              sahip ayakkabılar uzun ömürlü olur. Deri, süet veya nefes alabilen
              file yapılar, ayak sağlığını destekler. Taban yapısı kaymaz ve
              esnek olmalıdır. Spor, klasik veya günlük kullanım için farklı
              modeller mevcuttur.
            </p>
            <button className=" rounded-full text-2xl cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200 hover:bg-gray-400 hover:text-white ">
              İncele
            </button>
          </div>
          <img src={image4} alt="product-image" />
        </div>
        <div className="!flex items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <h1 className="text-4xl font-bold">
              Kaliteli ürünlerin tek adresi...
            </h1>
            <p className="text-xl my-4">
              Kaliteli ayakkabı seçimi, hem şıklık hem de konfor açısından büyük
              önem taşır. Dayanıklı malzemelerden üretilmiş, ergonomik tasarıma
              sahip ayakkabılar uzun ömürlü olur. Deri, süet veya nefes alabilen
              file yapılar, ayak sağlığını destekler. Taban yapısı kaymaz ve
              esnek olmalıdır. Spor, klasik veya günlük kullanım için farklı
              modeller mevcuttur.
            </p>
            <button className=" rounded-full text-2xl cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200 hover:bg-gray-400 hover:text-white ">
              İncele
            </button>
          </div>
          <img src={image5} alt="product-image" />
        </div>
        <div className="!flex items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <h1 className="text-4xl font-bold">
              Kaliteli ürünlerin tek adresi...
            </h1>
            <p className="text-xl my-4">
              Kaliteli ayakkabı seçimi, hem şıklık hem de konfor açısından büyük
              önem taşır. Dayanıklı malzemelerden üretilmiş, ergonomik tasarıma
              sahip ayakkabılar uzun ömürlü olur. Deri, süet veya nefes alabilen
              file yapılar, ayak sağlığını destekler. Taban yapısı kaymaz ve
              esnek olmalıdır. Spor, klasik veya günlük kullanım için farklı
              modeller mevcuttur.
            </p>
            <button className=" rounded-full text-2xl cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200 hover:bg-gray-400 hover:text-white ">
              İncele
            </button>
          </div>
          <img src={image6} alt="product-image" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
