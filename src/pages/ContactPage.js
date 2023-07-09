import React, {useState, useEffect } from "react";
import { View, Image, Alert, Heading, Flex, TextField, Text, Button, TextAreaField } from "@aws-amplify/ui-react";

export default function ContactPage() {
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    async function toggleAlert(event) {
        setIsAlertVisible(true)
    }
    return (
        <>
            <View as="form" onSubmit={toggleAlert} padding="3%">
          {isAlertVisible ? <Alert
            variation="success"
            isDismissible={false}
            hasIcon={true}
            heading="Registration successful"
            >
            A representative will be in touch
          </Alert> : null}
            <Heading>CONTACT US</Heading>
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
             <TextAreaField
                label={
                    <Text>
                      Message
                      <Text as="span" fontSize="0.8rem" color="red">
                        {' '}
                        (required)
                      </Text>
                    </Text>
                  }
                placeholder="Write your message here"
                resize="vertical"
                paddingBottom="10px"
                />
            </Flex>
            <Button type="submit">Submit</Button>
            </View>

        </>
    )
}