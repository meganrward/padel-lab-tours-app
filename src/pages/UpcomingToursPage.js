import React from "react";
import { View, Link } from "@aws-amplify/ui-react";

export default function AboutPage() {
    return (
        <>
            <View>
            upcoming tours
            <Link color="black" href="/booking">
              BOOK THIS TOUR
            </Link>
            </View>

        </>
    )
}