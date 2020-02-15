import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Stack, Button, FormControl, FormLabel, Input, Heading } from "@chakra-ui/core";

const LoginPage = () => {

    let history = useHistory()

    const login = (e) => {
        e.preventDefault()
        if (email != "" && password != "") {
            Meteor.loginWithPassword(email, password, (error) => {
                if (error) {
                    console.log("error loging user in: " + error)
                } else {
                    console.log("user logged in")
                    history.push('/protected')
                }
            })
        }
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Box m={4}>

            <Heading as="h1" mb={8}>LoginPage</Heading>
            <form onSubmit={login}>
                <Stack spacing={4}>
                    <FormControl>
                        <FormLabel htmlFor="email">Email address</FormLabel>
                        <Input type="email" name="email" id="email" aria-describedby="email-helper-text" onChange={(e) => { setEmail(e.target.value) }} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Password</FormLabel>
                        <Input type="password" name="password" id="password" aria-describedby="password-helper-text" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </FormControl>
                    <Button variantColor="green" type="submit">Login</Button>
                </Stack>
            </form>
        </Box>
    );
}

export default LoginPage;