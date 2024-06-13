import React from 'react';
import { Row, Accordion } from 'react-bootstrap';

const QAList = ({ data }) => {

    const getColorFromName = (name) => {
        const colors = ["#4caf50", "#2196f3", "#ffeb3b", "#f44336"];
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash % colors.length)];
    };

    return (
        <Row>
            <Accordion>
                {
                    data.length > 0 ? (
                        data.map((item, index) => {
                            return (
                                <Accordion.Item key={index} eventKey={item._id}>
                                    <Accordion.Header>
                                        <div>{item.question}</div>
                                    </Accordion.Header>
                                    <Accordion.Body className="text-end">
                                        <div className="d-flex justify-content-between align-items-center">
                                        <div className="username-box" style={{ backgroundColor: getColorFromName(item.name) }}>{item.name}</div>
                                        <div className="answer-box">{item.answer}</div>
                                            
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            );
                        })
                    ) : <h2 className="fs-4 text-center p-5">No questions available</h2>
                }
            </Accordion>
        </Row>
    );
};

export default QAList;
