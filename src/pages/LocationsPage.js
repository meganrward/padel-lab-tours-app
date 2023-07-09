import React from "react";
import { Image, Flex, Text, Heading, Card, View, Link, Tabs, TabItem } from '@aws-amplify/ui-react';
import IMAGES from "./../helpers/images.js"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function LocationsPage() {
  return (
    <>
        <Flex
            direction="column"
            alignItems="flex-start"
            gap="10px"
            wrap="wrap"
        >
            <View textAlign="center" width="100%">

            <Heading level={1} fontWeight="bold">
                SOTOGRANDE
            </Heading>
            <Text as="span">
                La Reserva, Sotogrande
                <Link href="https://www.lareservaclubsotogrande.com/" isExternal={true}>
                    <Text color="blue" paddingTop="26px">Visit website</Text>
                </Link>
                <Link href="/booking" isExternal={true}>
                    <Text color="blue" paddingTop="26px">Book this tour</Text>
                </Link>
            </Text>
            </View>
            <Flex direction="row" minWidth="0" overflow="visible">
                <Image
                    src={IMAGES[3]}
                    alt="Arial view of Sotogrande artificial beach"
                    width="100%"
                    />
                <Image
                    src={IMAGES[4]}
                    alt="View of tables and chairs on a lakeside beach, surrounded by palm tree"
                    width="100%"
                    />  
                <Image
                    src={IMAGES[5]}
                    alt="View of tables and chairs on a lakeside beach, surrounded by palm trees"
                    width="100%"
                    />
            </Flex>
        </Flex>
    </>
  );
};