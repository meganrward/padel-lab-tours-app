import React from "react";
import { View, Image, Flex } from "@aws-amplify/ui-react";
import IMAGES from "./../helpers/images.js"

export default function GalleryPage() {

    return (
        <>
                <Flex flexWrap="wrap">
                    <View><Image src = {IMAGES[0]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[1]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[2]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[3]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[4]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[5]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[6]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[7]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[8]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[9]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[10]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[11]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[12]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[13]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[14]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[15]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[16]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[17]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[18]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[19]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[20]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[21]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[22]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[23]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[24]} alt="{image}"/></View>
                    <View><Image src = {IMAGES[25]} alt="{image}"/></View>
                </Flex>
        </>
    )
}