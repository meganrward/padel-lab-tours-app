import React from "react";
import { View, Image, Text, Flex } from "@aws-amplify/ui-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import IMAGES from "./../helpers/images.js"

export default function HomePage() {
    return (
        <>
        <View direction="column" gap="2rem" height="100%">
         <Swiper navigation={true} pagination={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper" autoplay={{ delay: 2500, disableOnInteraction: false }}>
                <SwiperSlide>
                    {/* <View 
                        style= {{backgroundImage: "url(./la-reserva-3.jpg)"}} 
                        objectFit="scale-down"
                        height="100%"
                        width="100%"
                    >
                        <View height="100%">hi</View>
                    </View> */}
                    <Image
                        src="./la-reserva-3.jpg"
                        alt="la reserva"
                        objectFit="cover"
                        height="50%"
                        width="100%"
                    />
                    </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={IMAGES[0]}
                        alt="la reserva"
                        objectFit="cover"
                        height="50%"
                        width="100%"
                    />
                </SwiperSlide>
                <SwiperSlide>     
                    <Image
                        src={IMAGES[1]}
                        alt="la reserva"
                        objectFit="cover"
                        height="50%"
                        width="100%"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={IMAGES[2]}
                        alt="la reserva"
                        objectFit="cover"
                        height="50%"
                        width="100%"
                    />
                </SwiperSlide>
            </Swiper>
  </View>
        </>
    )
}