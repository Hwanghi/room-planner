/* eslint-disable */

import React, { useState } from "react";
import "./App.css";
import {
    Button,
    Jumbotron,
    InputGroup,
    Prepend,
    Text,
    FormControl
} from "react-bootstrap";

function Login() {

    return (
        <div className="로그인">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default"> 사용자ID </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default"> 비밀번호 </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>

            <Button variant="primary"> 로그인 </Button>{' '}
        </div>
    )
}

export default Login