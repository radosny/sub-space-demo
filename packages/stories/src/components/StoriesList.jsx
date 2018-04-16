import React, { Fragment } from 'react';
import { Panel, Button, Col, Row, Badge, Jumbotron } from 'react-bootstrap';

import './StoriesList.css';

const Story = ({ title, score, url }) => (
    <li className='c-story'><Badge>{score}</Badge>{title}. <a href={url}>details</a></li>
);

const StoriesList = ({ stories, fetchStory, userName }) => (
    <Fragment>
        <Jumbotron>
            <h1>Hello {userName}!</h1>
            <p>
                This is a list of top stories from Hacker News!
            </p>
        </Jumbotron>
        <Row>
            <Col sm={12} md={10}>
                <Panel bsStyle='success'>
                    <Panel.Heading>
                        <Panel.Title componentClass='h3'>Hacker news:</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        {
                            stories.map(story => <Story key={story.id} {...story}/>)
                        }
                    </Panel.Body>
                </Panel>
            </Col>
            <Col sm={12} md={2}>
                <Button onClick={fetchStory}>Get story</Button>
            </Col>
        </Row>
    </Fragment>
);

export default StoriesList;
