import React, { useState, useEffect } from "react"
import { Form, Button, Modal, Alert } from "react-bootstrap"
import addToMailchimp from 'gatsby-plugin-mailchimp';

const SubscribeWidget = props => {

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseAlert = () => setShowAlert(false);
  const handleShowAlert = () => setShowAlert(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting subscribe form. Email = "+email);

    addToMailchimp(email)
      .then((response) => {
        console.log(response);
        if (response.result === 'error') {
          //alert("An error ocurred while subscribing to the newsletter list: "+response.msg)
          setErrorMsg({__html: response.msg});
          handleShowAlert();
        } else {
          console.log("You have been successfully subscribed to the newsletter, please keep an eye out for the welcome email in your mailbox");
          handleCloseModal();
          props.resultCallback(true);
        }
      })
      .catch((error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
        console.log(error);
        alert("An error ocurred while subscribing to the newsletter list: "+error)
      });

  };

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <>
    <Button variant="primary" onClick={handleShowModal}>
      Subscribe
    </Button>

    <Modal show={showModal} onHide={handleCloseModal}>
      <Form onSubmit={handleSubmit} >
      <Modal.Header closeButton>
        <Modal.Title>Subscribe to our newsletter</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form.Group controlId="formBasicEmail">
          <Form.Control name="email" type="email" placeholder="Email address" onChange={handleEmailChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button className="bg-secondary border-secondary" variant="primary" type="submit">
          Subscribe
        </Button>
        {showAlert &&  <Alert variant="danger" onClose={handleCloseAlert} dismissible>
            <Alert.Heading>Subscription error</Alert.Heading>
            <p dangerouslySetInnerHTML={errorMsg} />
          </Alert>
        }
      </Modal.Footer>
      </Form>
    </Modal>
  </>
    // <Form onSubmit={handleSubmit} >
    //   <Form.Group controlId="formBasicEmail">
    //     <Form.Control name="email" type="email" placeholder="Email address" onChange={handleEmailChange} />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>
    //   <Button className="bg-secondary border-secondary" variant="primary" type="submit">
    //     Subscribe
    //   </Button>
    // </Form>
  )
}

export default SubscribeWidget
