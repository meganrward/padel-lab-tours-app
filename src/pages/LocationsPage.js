import React from "react";
import { Image, Flex, Text, Heading, Card, View, Link, Tabs, TabItem } from '@aws-amplify/ui-react';
import IMAGES from "./../helpers/images.js"


export default function LocationsPage() {
  return (
    <>
     <View
      backgroundColor="white"
      padding="medium"
    >
      <Card>
        <Flex direction="row" alignItems="flex-start" justifyContent="space-between">
          <Flex
            direction="column"
            alignItems="flex-start"
            gap="10px"
            wrap="wrap"
          >
            <Heading level={5}>
              SOTOGRANDE
            </Heading>

            <Text as="span">
                La Reserva, Sotogrande
                <Link href="https://www.lareservaclubsotogrande.com/" isExternal={true}>
          <Text color="blue" paddingTop="26px">Visit website</Text></Link>
            </Text>
          </Flex>
          <Flex width="80%">
          <Tabs spacing="equal">
      <TabItem>
      <Image
      src={IMAGES[3]}
      alt="Arial view of Sotogrande artificial beach"
      />
      </TabItem>
      <TabItem>
      <Image
      src={IMAGES[4]}
      alt="View of tables and chairs on a lakeside beach, surrounded by palm tree"
      />
      </TabItem>
      <TabItem>
      <Image
      src={IMAGES[5]}
      alt="View of tables and chairs on a lakeside beach, surrounded by palm trees"
      />
      </TabItem>
    </Tabs>
    </Flex>
        </Flex>
      </Card>
    </View>
    </>
  );
};