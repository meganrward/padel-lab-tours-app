import React from "react";
import { Image } from '@aws-amplify/ui-react';
import { API, Storage } from 'aws-amplify';


export default function AboutPage() {
  return (
    <>
    <Image   height="75%"
  width="75%"
      src="./la-reserva.jpg"
      alt="la reserva"
    />
    </>
  );
};