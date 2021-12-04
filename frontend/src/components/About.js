import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function About() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="link" onClick={handleShow}>
                About
            </Button>
            <Modal show={show} onHide={handleClose} animation={true} scrollable={true}>
                <Modal.Header>
                    <Modal.Title>About Bookmarks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Bookmarks was designed and developed by these fine people:</p>
                    <p>Eddie Saunders</p>
                    <p>Richard Kessler</p>
                    <p>Travis Culteri</p>
                    <p>Samuel Guevara</p>
                    <p>This app is purely for fun, and no guarantee of production status or data retention is given.</p>
                    <a href="https://github.com/SaundersEddie/bookmarks" target="_blank" rel="noreferrer">Github</a><br />
                    <a href="mailto:edwyn.saunders@outlook.com">Email</a>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}