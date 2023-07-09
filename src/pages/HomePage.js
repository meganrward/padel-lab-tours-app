import React from "react";
import { View, Image, Flex, Tabs, TabItem } from "@aws-amplify/ui-react";
import { Carousel } from 'react-responsive-carousel';
import IMAGES from "./../helpers/images.js"

export default function HomePage() {
    return (
        <>
         <Flex direction="column" gap="2rem">
    <Tabs spacing="equal">
      <TabItem>            <Image
      src="./la-reserva.jpg"
      alt="la reserva"
    /></TabItem>
      <TabItem>
      <Image
      src={IMAGES[0]}
      alt="la reserva"
    />
      </TabItem>
      <TabItem>
      <Image
      src={IMAGES[1]}
      alt="la reserva"
    />
      </TabItem>
      <TabItem>
      <Image
      src={IMAGES[2]}
      alt="la reserva"
    />
      </TabItem>
    </Tabs>
  </Flex>
        </>
    )
}