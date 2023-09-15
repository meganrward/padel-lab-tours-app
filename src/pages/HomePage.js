import React from "react";
import { View, Image, Text, Flex, Link } from "@aws-amplify/ui-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import IMAGES from "./../helpers/images.js"
import { CheckIsMobile } from "../helpers/helpers.js";

export default function HomePage() {

const isMobile = CheckIsMobile();

    return (
        <>
        {isMobile ? (
            <View>
                <Image
                   src={IMAGES[32]}
                   alt="la reserva"
                   objectFit="cover"
                   width="100%"
                />
                <View margin="2rem" textAlign="center">
                    <Link href="/register">Register your interest</Link> before 31st September & receive £100 off your next holiday!
                </View>
            </View>
        ) : (
            <View direction="column" gap="2rem" height="100%">
            <Swiper navigation={true} pagination={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper" autoplay={{ delay: 2500, disableOnInteraction: false }}>
                    <SwiperSlide>
                        <Image
                            src={IMAGES[32]}
                            alt="la reserva"
                            objectFit="cover"
                            height="650px"
                            width="100%"
                        />
                        </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={IMAGES[0]}
                            alt="la reserva"
                            objectFit="cover"
                            height="650px"
                            width="100%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>     
                        <Image
                            src={IMAGES[1]}
                            alt="la reserva"
                            objectFit="cover"
                            height="650px"
                            width="100%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={IMAGES[2]}
                            alt="la reserva"
                            objectFit="cover"
                            height="650px"
                            width="100%"
                        />
                    </SwiperSlide>
                </Swiper>
            </View>
        )}
        </>
    )
}