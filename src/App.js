import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  Grid,
  View,
  Link,
} from '@aws-amplify/ui-react';
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GalleryPage from "./pages/GalleryPage.js"
import UpcomingToursPage from "./pages/UpcomingToursPage.js"
import AboutPage from "./pages/AboutPage.js"
import HomePage from "./pages/HomePage.js"
import BookingPage from "./pages/BookingPage.js"
import RegisterYourInterestPage from "./pages/RegisterYourInterestPage.js"
const App = () => {
  return (
    <View className="App">
      <>
      <Flex justifyContent="space-between" padding="3%" >
        <Heading level="1">PADEL LAB TOURS</Heading>
          <Flex>
          {' '}
            <Link color="black" href="/">
              HOME
            </Link>
            <Link color="black" href="/about">
              ABOUT
            </Link>
            <Link color="black" href="/upcoming-tours">
              TOURS
            </Link>
            <Link color="black" href="/gallery">
              GALLERY
            </Link>
            <Link color="black" href="/register">
              REGISTER YOUR INTEREST
            </Link>
          </Flex>
      </Flex>
        <BrowserRouter>
          {' '}
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/upcoming-tours" element={<UpcomingToursPage/>}></Route>
            <Route path="/gallery" element={<GalleryPage/>}></Route>
            <Route path="/register" element={<RegisterYourInterestPage/>}></Route>
            <Route path="/booking" element={<BookingPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </View>
  );
};

export default App;