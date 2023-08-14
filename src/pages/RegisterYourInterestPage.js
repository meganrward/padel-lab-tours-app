import React, { useState } from "react";
import {
    Button,
    Flex,
    Heading,
    Text,
    TextField,
    Alert,
    PhoneNumberField,
    View,
    CheckboxField,
    Image,
  } from '@aws-amplify/ui-react';
import { API } from "aws-amplify";
import { createCustomer } from './../graphql/mutations';
import { CheckIsMobile } from "../helpers/helpers";
import IMAGES from "./../helpers/images.js"


export default function RegisterYourInterestPage() {
  const isMobile = CheckIsMobile();
  const [isAlertVisible, setIsAlertVisible] = useState(false);

    async function newCustomer(event) {
      console.log("new customer")
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
          first_name: form.get("first_name"),
          last_name: form.get("last_name"),
          email: form.get("email"),
        };
        const mobileNumber = form.get("dial_code")+form.get("number").slice(0,3) + "-" +form.get("number").slice(3,6) + "-" + form.get("number").slice(6)
        mobileNumber.length === 15 ?  data.mobile_number = mobileNumber :
        await API.graphql({
          query: createCustomer,
          variables: { input: data },
        });
        setIsAlertVisible(true)
        event.target.reset();
      }

    return (
      <>
        {isMobile ? (
        <View as="form" onSubmit={newCustomer} padding="3%" justifyContent="center">
        {isAlertVisible ? <Alert
          variation="success"
          isDismissible={false}
          hasIcon={true}
          heading="Registration successful"
          >
          Thanks for registering your interest!
        </Alert> : null}
          <Heading level={5}>Register your interest now to get £100 off your first trip!</Heading>
          <Flex direction="column" justifyContent="left" padding="0.4rem">
            <TextField
                required 
                name="first_name"
                placeholder="First name"
                label={
                    <Text>
                      First name
                      <Text as="span" fontSize="0.8rem" color="red">
                        {' '}
                        (required)
                      </Text>
                    </Text>
                  }
                errorMessage="There is an error"
                isRequired
            />
            <TextField
                required 
                name="last_name"
                placeholder="Last name"
                label={
                    <Text>
                      Last name
                      <Text as="span" fontSize="0.8rem" color="red">
                        {' '}
                        (required)
                      </Text>
                    </Text>
                  }
                errorMessage="There is an error"
                isRequired
            />
            <TextField
                required
                name="email"
                placeholder="email@email.com"
                label={
                    <Text>
                      Email
                      <Text as="span" fontSize="0.8rem" color="red">
                        {' '}
                        (required)
                      </Text>
                    </Text>
                  }
                errorMessage="There is an error"
                isRequired
            />
            <PhoneNumberField
                defaultDialCode="+44"
                dialCodeName="dial_code"
                label={
                    <Text>
                      Mobile number
                      <Text as="span" fontSize="0.8rem">
                        {' '}
                        (optional)
                      </Text>
                    </Text>
                  }
                name="number"
                  placeholder="234-567-8910"
            />
            <CheckboxField
                label="Subscribe to marketing"
                name="subscribe"
                value="yes"
            />
            <Flex justifyContent="flex-end">
              <Button width="10rem" type="submit">Submit</Button>
            </Flex>
          </Flex>
      </View>
        ) : (
          <View as="form" onSubmit={newCustomer} padding="3%" justifyContent="center">
            {isAlertVisible ? <Alert
              variation="success"
              isDismissible={false}
              hasIcon={true}
              heading="Registration successful"
              >
              Thanks for registering your interest!
            </Alert> : null}
              <Heading level={5}>Register your interest now to get £100 off your first trip!</Heading>
              <Flex>
              <Flex direction="column" justifyContent="left" width="35rem" padding="0.4rem">
              <TextField
                  required 
                  name="first_name"
                  placeholder="First name"
                  label={
                      <Text>
                        First name
                        <Text as="span" fontSize="0.8rem" color="red">
                          {' '}
                          (required)
                        </Text>
                      </Text>
                    }
                  errorMessage="There is an error"
                  isRequired
              />
              <TextField
                  required 
                  name="last_name"
                  placeholder="Last name"
                  label={
                      <Text>
                        Last name
                        <Text as="span" fontSize="0.8rem" color="red">
                          {' '}
                          (required)
                        </Text>
                      </Text>
                    }
                  errorMessage="There is an error"
                  isRequired
              />
              <TextField
                  required
                  name="email"
                  placeholder="email@email.com"
                  label={
                      <Text>
                        Email
                        <Text as="span" fontSize="0.8rem" color="red">
                          {' '}
                          (required)
                        </Text>
                      </Text>
                    }
                  errorMessage="There is an error"
                  isRequired
              />
              <PhoneNumberField
                  defaultDialCode="+44"
                  dialCodeName="dial_code"
                  label={
                      <Text>
                        Mobile number
                        <Text as="span" fontSize="0.8rem">
                          {' '}
                          (optional)
                        </Text>
                      </Text>
                    }
                  name="number"
                    placeholder="234-567-8910"
              />
              <CheckboxField
                  label="Subscribe to marketing"
                  name="subscribe"
                  value="yes"
              />
              <Flex justifyContent="flex-end">
                <Button width="10rem" type="submit">Submit</Button>
              </Flex>
              </Flex>
              <Image
                  alt="Road to milford sound"
                  src={IMAGES[3]}
                  width="50rem"
                  paddingLeft="3rem"
                />
              </Flex>
          </View>
        )}
      </>
    )
}