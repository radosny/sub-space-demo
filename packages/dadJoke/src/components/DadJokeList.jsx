import React from 'react';
import { Panel, Button, Col, Row } from 'react-bootstrap';

import './DadJokesList.css';

const DadJokeList = ({ jokes, fetchJoke }) => (
    <Row>
        <Col sm={12} md={10}>
            <Panel bsStyle='success'>
                <Panel.Heading>
                    <Panel.Title componentClass='h3'>Dad Joke list:</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <ul>
                    {
                        jokes.map(joke => <li className='c-joke' key={joke.id}>{joke.joke}</li>)
                    }
                    </ul>
                </Panel.Body>
            </Panel>
        </Col>
        <Col sm={12} md={2}>
            <Button onClick={fetchJoke}>Get joke</Button>
        </Col>
    </Row>
);

export default DadJokeList;
