import { API } from "aws-amplify";
// import { createBooking } from './../graphql/mutations';
import React, { useState, useEffect } from "react";
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    Grid,
    PhoneNumberField,
    View,
    CheckboxField,
  } from '@aws-amplify/ui-react';

export default function BookingPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [disabledSubmit, setDisabledSubmit] =  useState(true)  


    const checkFieldsValid = () => {
        firstName && lastName && emailAddress.includes("@") ? setDisabledSubmit(false) : setDisabledSubmit(true)
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.currentTarget.value);
        checkFieldsValid()
    };
    const handleLastNameChange = (e) => {
        setLastName(e.currentTarget.value);
        checkFieldsValid()
    };
    const handleEmailAddressChange = (e) => {
        setEmailAddress(e.currentTarget.value);
        checkFieldsValid()
    };
    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.currentTarget.value)
    }

    const onSubmit = () => {

    }

    return (
        <View padding="3%">
            <Heading>Register your interest</Heading>
            <Flex direction="column" justifyContent="left" width="30%">
            <TextField 
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
                onChange={handleFirstNameChange}
            />
            <TextField 
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
                onChange={handleLastNameChange}
            />
            <TextField
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
                onChange={handleEmailAddressChange}
            />
            <PhoneNumberField
                defaultDialCode="+44"
                label={
                    <Text>
                      Mobile number
                      <Text as="span" fontSize="0.8rem">
                        {' '}
                        (optional)
                      </Text>
                    </Text>
                  }
                placeholder="234-567-8910"
                onChange={handleMobileNumberChange}
            />
            <CheckboxField
                label="Subscribe to marketing"
                name="subscribe"
                value="yes"
            />
            </Flex>
            <Button type="submit" disabled={disabledSubmit} onClick={onSubmit}>Submit</Button>
        </View>
    )
}
// const createNewBooking = await API.graphql({
//     query: createBooking,
//     variables: {
//         input: {
// 		"first_name": "Lorem ipsum dolor sit amet",
// 		"last_name": "Lorem ipsum dolor sit amet",
// 		"has_paid": true,
// 		"customerID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
// 	}
//     }
// });
