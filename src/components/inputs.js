import React, { useState } from 'react';
import { Row, Form, Col } from 'react-bootstrap';
import apiClient from '../Api/apiClient';

const FormInput = ({ onAdd, notify }) => {
    const [username, setUsername] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const addNewItem = async() => {
        if (username === "" || question === "" || answer === "") {
            notify("Please complete all fields", "Error");
            return;
        }
        try{
            const { data } =await apiClient.post('/api/questions', {name: username,  question,  answer }) ;
            onAdd(data.data);
            setUsername('');
            setQuestion('');
            setAnswer('');
            notify("Added successfully", "Success");
        }
        catch (error) {
            notify("An error occurred while adding", "Error");
        }

    };

    return (
        <Row className="my-3">
            <Col sm="3">
                <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your name" />
            </Col>
            <Col sm="4">
                <Form.Control  as="textarea" value={question} onChange={(e) => setQuestion(e.target.value)} type="text" placeholder="Enter the question" />
            </Col>
            <Col sm="5">
                <Form.Control as="textarea" rows={3} value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Enter the answer" />
            </Col>
            <Col sm="12" className="mt-2">
                <button onClick={addNewItem} className="btn-color w-100 btn-primerey" type="submit">
                    Add
                </button>
            </Col>
        </Row>
    );
};

export default FormInput;
