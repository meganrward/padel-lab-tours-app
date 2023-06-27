import React, { useState, useEffect } from "react";
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    Alert,
    PhoneNumberField,
    View,
    CheckboxField,
  } from '@aws-amplify/ui-react';
import { API } from "aws-amplify";
import { createCustomer } from './../graphql/mutations';
// import { validateField } from './../ui-components/utils.js';
// import { formatError } from "graphql";


export default function RegisterYourInterestPage() {
  console.log("register your interest page")
  const [isAlertVisible, setIsAlertVisible] = useState(false);

    async function newCustomer(event) {
      console.log("new customer")
        event.preventDefault();
        const form = new FormData(event.target);
        const mobileNumber = form.get("dial_code")+form.get("number").slice(0,3) + "-" +form.get("number").slice(3,6) + "-" + form.get("number").slice(6)
        const data = {
          first_name: form.get("first_name"),
          last_name: form.get("last_name"),
          email: form.get("email"),
          mobile_number: mobileNumber,
        };
        console.log(JSON.stringify(data))
        await API.graphql({
          query: createCustomer,
          variables: { input: data },
        });
        console.log("graphql called")
        setIsAlertVisible(true)
        event.target.reset();
      }

    return (
      
        <View as="form" onSubmit={newCustomer} padding="3%">
          {isAlertVisible ? <Alert
            variation="success"
            isDismissible={false}
            hasIcon={true}
            heading="Registration successful"
            >
            A representative will be in touch
          </Alert> : null}
            <Heading>Register your interest</Heading>
            <Flex direction="column" justifyContent="left" width="50%">
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
            </Flex>
            <Button type="submit">Submit</Button>
        </View>
    )
}