import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import { NavBarComponent } from '../navbar-component/navbar-component';
// import Layout from '../components/layout';

class ContactForm extends Component {
    state = {
        namne: '',
        email: '',
        subject: '',
        message: ''
    }

    handleSubmit(event) {
        event.preventDefault();

        const { name, email, subject, message } = this.state;

        let templateParams = {
            from_name: email,
            to_name: name,
            subject: subject,
            message_html: message
        }

        emailjs.send(
            'gmail', 'template_RGSszP0L', templateParams, 'user_mc2hI7otmcOdeUYCmeRYI'
        )

        alert('Message Sent');
        this.resetForm()
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            nesage: ''
        });
    }


    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render() {
        return (
            <div>

                <NavBarComponent />
                <div id="hero-contact-me-background">
                    <br></br>
                    <Container id="coding-projects-container">
                        <h1 className="p-heading1" id="contact-me-title">Get in Touch</h1>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormGroup controlId="formBasicEmail">
                                <Label id="contact-me-white-font-color">Email address</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    className="text-primary"
                                    onChange={this.handleChange.bind(this, 'email')}
                                    placeholder="Enter email"
                                />
                            </FormGroup>
                            <FormGroup controlId="formBasicName">
                                <Label id="contact-me-white-font-color">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    className="text-primary"
                                    onChange={this.handleChange.bind(this, 'name')}
                                    placeholder="Name"
                                />
                            </FormGroup>
                            <FormGroup controlId="formBasicSubject">
                                <Label id="contact-me-white-font-color">Subject</Label>
                                <Input
                                    type="text"
                                    name="subject"
                                    className="text-primary"
                                    value={this.state.subject}
                                    onChange={this.handleChange.bind(this, 'subject')}
                                    placeholder="Subject"
                                />
                            </FormGroup>
                            <FormGroup controlId="formBasicMessage">
                                <Label id="contact-me-white-font-color">Message</Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    className="text-primary"
                                    value={this.state.message}
                                    onChange={this.handleChange.bind(this, 'message')}
                                />
                            </FormGroup>
                            <Button variant="dark" type="submit">
                                Submit
                        </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}

export default ContactForm;