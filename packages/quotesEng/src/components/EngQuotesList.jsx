import React from 'react';
import { Panel, ButtonToolbar, Button } from 'react-bootstrap';

const EngQuotesList = ({ quotes, userName, fetchQuote }) => (
    <Panel bsStyle="success">
        <Panel.Heading>
            <Panel.Title componentClass="h3">English quotes:</Panel.Title>
            <ButtonToolbar>
                <Button bsStyle="primary">Default button</Button>
                <Button>Default button</Button>
            </ButtonToolbar>
        </Panel.Heading>
        <Panel.Body>

        </Panel.Body>
    </Panel>
);
