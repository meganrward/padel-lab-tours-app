import React from "react";
import { Image, Flex, Text, Heading, Card, View } from '@aws-amplify/ui-react';
import IMAGES from "../helpers/images.js"


export default function MeetTheTeamPage() {
  return (
    <>
     <View
      backgroundColor="white"
      padding="medium"
    >
      <Card>
        <Flex direction="row" alignItems="flex-start">
          <Image
            alt="Road to milford sound"
            src={IMAGES[1]}
            width="300%"
          />
          <Flex
            direction="column"
            alignItems="flex-start"
            gap="10px"
          >
            <Heading level={5}>
              ABOUT
            </Heading>

            <Text as="span">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae auctor nibh, in ullamcorper lorem. Vestibulum ac purus at neque vestibulum vulputate et quis leo. Duis faucibus, dui ornare fringilla viverra, dolor libero ultricies dolor, id facilisis ante ipsum vitae magna. Sed massa dui, faucibus in iaculis ac, vehicula vitae ligula. Fusce id lacus quis magna tristique condimentum ac quis nulla. Proin neque libero, tincidunt id placerat vitae, laoreet in enim. Nulla imperdiet molestie sapien, nec vehicula turpis iaculis ac. Nulla iaculis, tellus eu auctor dapibus, ex est aliquet tortor, in vulputate nibh metus eget mauris. 
            </Text>
          </Flex>
        </Flex>
      </Card>
      <Card>
        <Flex direction="row" alignItems="flex-start">
          <Flex
            direction="column"
            alignItems="flex-start"
            gap="10px"
          >
            <Heading level={5}>
              ABOUT
            </Heading>

            <Text as="span">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae auctor nibh, in ullamcorper lorem. Vestibulum ac purus at neque vestibulum vulputate et quis leo. Duis faucibus, dui ornare fringilla viverra, dolor libero ultricies dolor, id facilisis ante ipsum vitae magna. Sed massa dui, faucibus in iaculis ac, vehicula vitae ligula. Fusce id lacus quis magna tristique condimentum ac quis nulla. Proin neque libero, tincidunt id placerat vitae, laoreet in enim. Nulla imperdiet molestie sapien, nec vehicula turpis iaculis ac. Nulla iaculis, tellus eu auctor dapibus, ex est aliquet tortor, in vulputate nibh metus eget mauris. 
            </Text>
          </Flex>
          <Image
            alt="Road to milford sound"
            src={IMAGES[2]}
            width="300%"
          />
        </Flex>
      </Card>
    </View>
    </>
  );
};