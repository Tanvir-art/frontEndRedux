import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative h-[90vh] w-full flex justify-center items-center"
                        style={{
                            backgroundImage: "url('/images/m.jpeg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="relative space-y-4 z-10">
                            <p className="text-4xl font-bold   text-white p-4 rounded-lg text-center">
                                Get 25% Discount On Your First Order
                            </p>
                            <Button className="text-sm font-medium px-4 hover:bg-[#1a347b] bg-[#1E3A8A] text-white">
                                <Link to={'/products'}>Shop Now</Link>
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-[90vh] w-full flex justify-center items-center"
                        style={{
                            backgroundImage: "url('/images/a.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="relative space-y-4 z-10">
                            <p className="text-4xl font-bold   text-white p-4 rounded-lg text-center">
                                Get 25% Discount On Your First Order
                            </p>
                            <Button className="text-sm font-medium px-4 hover:bg-[#1a347b] bg-[#1E3A8A] text-white">
                                <Link to={'/products'}>Shop Now</Link>
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-[90vh] w-full flex justify-center items-center"
                        style={{
                            backgroundImage: "url('/images/b.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="relative space-y-4 z-10">
                            <p className="text-2xl font-bold text-white p-4 rounded-lg text-center">
                                Get 25% Discount On Your First Order
                            </p>
                            <Button className="text-sm font-medium px-4 hover:bg-[#1a347b] bg-[#1E3A8A] text-white">
                                <Link to={'/products'}>Shop Now</Link>
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
