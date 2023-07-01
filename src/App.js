import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Flex,
  Image,
  Text,
  View,
  Link,
} from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpcomingToursPage from "./pages/UpcomingToursPage.js"
import AboutPage from "./pages/AboutPage.js"
import HomePage from "./pages/HomePage.js"
import BookingPage from "./pages/BookingPage.js"
import FaqPage from "./pages/FaqPage.js"
import ContactPage from "./pages/ContactPage.js"
import RegisterYourInterestPage from "./pages/RegisterYourInterestPage.js"
import { ThemeProvider } from '@aws-amplify/ui-react';


const theme = {
  name: 'custom-theme',
  tokens: {
    components: {
      card: {
        backgroundColor: { value: '{colors.background.secondary}' },
        outlined: {
          borderColor: { value: '{colors.black}' },
        },
      },
      heading: {
        color: { value: "black" },
      },
      link: {
        color: { value: 'black' },
      },
      text: {
        color: {value: "black"},
        
      }
    },
  },
};


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <View className="App">
      <Flex justifyContent="center" padding="3%" fontSize="20px">
        <Image
          src="./logo-with-name.avif"
          alt="PADEL LAB TOURS logo"
          height="48px"
        />
        {' '}
        <Link href="/">
          <Text>HOME</Text>
        </Link>
        <Link href="/about">
          <Text>ABOUT</Text>
        </Link>
        <Link href="/upcoming-tours">
          <Text>TOURS</Text>
        </Link>
        <Link href="/register">
          <Text>REGISTER YOUR INTEREST</Text>
        </Link>
        <Link href="/faq">
          <Text>FAQ</Text>
        </Link>
        <Link href="/contact">
          <Text>CONTACT US</Text>
        </Link>
      </Flex>
        <BrowserRouter>
          {' '}
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/upcoming-tours" element={<UpcomingToursPage/>}></Route>
            <Route path="/register" element={<RegisterYourInterestPage/>}></Route>
            <Route path="/booking" element={<BookingPage/>}></Route>
            <Route path="/faq" element={<FaqPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
          </Routes>
        </BrowserRouter>
    </View>
    </ThemeProvider>
  );
};

export default App;