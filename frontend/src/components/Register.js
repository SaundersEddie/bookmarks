import React, { useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const initialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    userEmail: '',
    isAdmin: false
};

export default function Register() {
    const [values, setValues] = useState(initialValues);

    const onChangeOurForm = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Submit Pressed")
        const userData = {
            firstName: values.firstName,
            lastName: values.lastName,
            userName: values.userName,
            password: values.password,
            userEmail: values.userEmail,
            isAdmin: false
        }
        console.log(userData);
        axios.post(`/auth/register`, userData)
        setValues({
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            userEmail: '',
            isAdmin: false
        })
    }

    return (
        <>
            <h1>Welcome to the Bookmarks App</h1>
            <h3>Please fill out the fields below to register an account</h3>
            <Form onSubmit={onSubmit}>
                {/* <Form> */}
                <Row>
                    <Form.Label column lg={2}>
                        First Name
                    </Form.Label>
                    <Col>
                        <Form.Control
                            name='firstName'
                            type="text"
                            placeholder="First Name"
                            value={values.firstName}
                            onChange={onChangeOurForm}
                        />
                    </Col>
                    <Form.Label column lg={2}>
                        Last Name
                    </Form.Label>
                    <Col>
                        <Form.Control
                            name='lastName'
                            type="text"
                            placeholder="Last Name"
                            value={values.lastName}
                            onChange={onChangeOurForm}
                        />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Form.Label column lg={2}>
                        Username
                    </Form.Label>
                    <Col>
                        <Form.Control
                            name='userName'
                            type="text"
                            placeholder="Username"
                            value={values.userName}
                            onChange={onChangeOurForm}
                        />
                    </Col>

                    <Form.Label column lg={2}>
                        Password
                    </Form.Label>
                    <Col>
                        <Form.Control
                            name='password'
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={onChangeOurForm}
                        />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Form.Label column lg={2}>
                        Email
                    </Form.Label>
                    <Col>
                        <Form.Control
                            name='userEmail'
                            type="text"
                            placeholder="Email"
                            value={values.userEmail}
                            onChange={onChangeOurForm}
                        />
                    </Col>
                    <Form.Check type='checkbox' id={`isAdmin`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>{`isAdmin`}</Form.Check.Label>
                    </Form.Check>
                </Row>
                <Row>
                    <div className="form-group text-center">
                    <Button as="input" type="submit" value="Register" />{''}
                    </div>
                </Row>
            </Form>
        </>
    )
}