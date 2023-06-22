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
import RegisterYourInterestPage from "./pages/RegisterYourInterestPage.js"
const App = () => {
  return (
    <View className="App">
      <>
      <Flex justifyContent="space-between" padding="3%">
        <Heading level="1">PADEL LAB TOURS</Heading>
          <Flex>
          {' '}
            <Link href="/">
              <Button>HOME</Button>
            </Link>
            <Link href="/about">
              <Button>ABOUT</Button>
            </Link>
            <Link href="/upcoming-tours">
              <Button>TOURS</Button>
            </Link>
            <Link href="/gallery">
              <Button>GALLERY</Button>
            </Link>
            <Link href="/register">
              <Button>REGISTER YOUR INTEREST</Button>
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
          </Routes>
        </BrowserRouter>
      </>
    </View>
  );
};

export default App;