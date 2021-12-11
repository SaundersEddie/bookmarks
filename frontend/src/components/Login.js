import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const initialValues = {
    userName: '',
    password: '',
};

export default function Login() {
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
        console.log("Login Pressed")
        const userData = {
            userName: values.userName,
            password: values.password,
        }
        console.log(userData);
        axios.post(`/auth/login`, userData)
        setValues({
            userName: '',
            password: '',
        })
    }
    return (
        <>
            <h1>Please login to the Bookmarks App</h1>
            <Form onSubmit={onSubmit}>
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

                <Row>
                    <div className="form-group text-center">
                    <Button as="input" type="submit" value="Login" />{''}
                    </div>
                </Row>
            </Form>
        </>
    )
}