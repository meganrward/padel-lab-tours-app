import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Flex,
  Image,
  Text,
  View,
  Link,
  Menu,
  MenuItem,
  MenuButton,
} from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpcomingToursPage from "./pages/UpcomingToursPage.js"
import AboutPage from "./pages/AboutPage.js"
import HomePage from "./pages/HomePage.js"
import BookingPage from "./pages/BookingPage.js"
import FaqPage from "./pages/FaqPage.js"
import ContactPage from "./pages/ContactPage.js"
import RegisterYourInterestPage from "./pages/RegisterYourInterestPage.js"
import LocationsPage from "./pages/LocationsPage.js"
import MeetTheTeamPage from "./pages/MeetTheTeamPage.js"
import { ThemeProvider } from '@aws-amplify/ui-react';
import { CheckIsMobile } from "./helpers/helpers";



const App = () => {
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
        },
        button: {
          // this will affect the font weight of all button variants
          fontWeight: { value: '{fontWeights.extrabold}' },
          // style the primary variation
          primary: {
            backgroundColor: { value: '{colors.green.40}' },
            _hover: {
              backgroundColor: { value: '{colors.green.40}' },
            },
            _focus: {
              backgroundColor: { value: '{colors.blue.80}' },
            },
            _active: {
              backgroundColor: { value: '{colors.blue.90}' },
            },
          },
        },
        menu: {
          backgroundColor: { value: '{colors.white}' },
          _hover: {
            backgroundColor: {value: 'colors.gray'},
          },
          borderRadius: { value: '0.2rem' },
          item: {
            minHeight: { value: '3rem' },
            textAlign: { value: 'right'},
          }
        },
      },
    },
  };

  const isMobile = CheckIsMobile();

  return (
    <ThemeProvider theme={theme}>
      {isMobile ? (
        <View className="Mobile-App">
          <Flex justifyContent="space-between" marginTop="0.5rem">
            <Link href="/">
              <Image
                src="./logo-with-name-tours.png"
                alt="PADEL LAB TOURS logo"
                height="6rem"
                padding="1rem"
              />
            </Link>
            <View paddingBottom="1rem" paddingRight="0.2rem">
              <Menu
                menuAlign="right"
              >
                <MenuItem>
                  <Link href="/">
                    <Text>HOME</Text>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/register">
                    <Text>REGISTER YOUR INTEREST</Text>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="https://www.padellab.co.uk" isExternal={true}>
                    <Text>SHOP</Text>
                  </Link>
                </MenuItem>
              </Menu>
            </View>
          </Flex>
          <BrowserRouter>
            {' '}
            <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/about" element={<AboutPage/>}></Route>
              <Route path="/locations" element={<LocationsPage/>}></Route>
              <Route path="/meet-the-team" element={<MeetTheTeamPage/>}></Route>
              <Route path="/register" element={<RegisterYourInterestPage/>}></Route>
              <Route path="/booking" element={<BookingPage/>}></Route>
              <Route path="/faq" element={<FaqPage/>}></Route>
              <Route path="/contact" element={<ContactPage/>}></Route>
            </Routes>
          </BrowserRouter>
          <Flex justifyContent="center" gap="3rem" padding="0.8rem">
            <View>
              <a href="https://www.facebook.com/profile.php?id=100086342149533" title="Facebook" target="_blank" rel="noreferrer">
                <Image 
                  src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" 
                  alt="Facebook" 
                  title="Facebook" 
                  width="2rem" 
                  margin="0.5rem"
                />
              </a>
              <a href="mailto:info@padellabtours.com" title="Email" target="_blank" rel="noreferrer">
                <Image 
                  src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png" 
                  alt="Email" 
                  width="2rem" 
                  margin="0.5rem"
                />
              </a>
              <a href="https://www.instagram.com/padellabofficial/" title="Instagram" target="_blank" rel="noreferrer">
                <Image 
                  src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png" 
                  alt="Instagram" 
                  title="Instagram" 
                  width="2rem" 
                  margin="0.5rem"
                />
              </a>
            </View>
          </Flex>
        </View>
      ) : (
        <View className="App">
          <Flex justifyContent="center" padding="3%" fontSize="1.3rem" alignContent="center" alignText="center" fontWeight="bold">        
            <Link href="/">
              <Image
                src="./logo-with-name-tours.png"
                alt="PADEL LAB TOURS logo"
                height="76px"
              />
            </Link>
            {' '}
            <Link href="/">
              <Text paddingTop="26px">HOME</Text>
            </Link>
            {/* <Link href="/about">
              <Text paddingTop="26px">ABOUT</Text>
            </Link>
            <Link href="/locations">
              <Text paddingTop="26px">LOCATIONS</Text>
            </Link>
            <Link href="/meet-the-team">
              <Text paddingTop="26px">MEET THE TEAM</Text>
            </Link> */}
            <Link href="/register">
              <Text paddingTop="26px">REGISTER YOUR INTEREST</Text>
            </Link>
            {/* <Link href="/faq">
              <Text paddingTop="26px">FAQ</Text>
            </Link>
            <Link href="/contact">
              <Text paddingTop="26px">CONTACT US</Text>
            </Link> */}
            <Link href="https://www.padellab.co.uk" isExternal={true}>
              <Text paddingTop="26px">SHOP</Text>
            </Link>
          </Flex>
            <BrowserRouter>
              {' '}
              <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/about" element={<AboutPage/>}></Route>
                <Route path="/locations" element={<LocationsPage/>}></Route>
                <Route path="/meet-the-team" element={<MeetTheTeamPage/>}></Route>
                <Route path="/register" element={<RegisterYourInterestPage/>}></Route>
                <Route path="/booking" element={<BookingPage/>}></Route>
                <Route path="/faq" element={<FaqPage/>}></Route>
                <Route path="/contact" element={<ContactPage/>}></Route>
              </Routes>
            </BrowserRouter>
            <Flex justifyContent="center" gap="3rem" padding="0.8rem">
              <View>
                <a href="https://www.facebook.com/profile.php?id=100086342149533" title="Facebook" target="_blank" rel="noreferrer">
                  <Image 
                    src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" 
                    alt="Facebook" 
                    title="Facebook" 
                    width="2rem" 
                    margin="0.5rem"
                  />
                </a>
                <a href="mailto:info@padellabtours.com" title="Email" target="_blank" rel="noreferrer">
                  <Image 
                    src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png" 
                    alt="Email" 
                    width="2rem" 
                    margin="0.5rem"
                  />
                </a>
                <a href="https://www.instagram.com/padellabofficial/" title="Instagram" target="_blank" rel="noreferrer">
                  <Image 
                    src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png" 
                    alt="Instagram" 
                    title="Instagram" 
                    width="2rem" 
                    margin="0.5rem"
                  />
                </a>
              </View>
            </Flex>
        </View>
      )}
    </ThemeProvider>
  );
};

export default App;