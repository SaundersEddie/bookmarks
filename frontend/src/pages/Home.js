import Card from 'react-bootstrap/Card'
import React from 'react';

export default function Home() {
    return (
        <>
        <Card body>
            <h1 className="">Bookmarks</h1>
            <hr></hr>
            <p>Some waffle about the app, when really the Login page or option to register should be here.</p>
            <p>The source code can be located here:</p>
            <p><a href="https://github.com/SaundersEddie/bookmarks" target="_blank" rel="noopener noreferrer">Source Code</a></p>
            <p>Eddie</p>
        </Card>
        </>
    )
}