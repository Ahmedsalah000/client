import React from 'react'
import { Row, Accordion } from 'react-bootstrap';
const QAList = ({ data, deleteOneItem }) => {

    const onDeleteItem = (id) => {
        deleteOneItem(id);
    }

    return (
        <Row>
            <Accordion>
                {data.length > 0 ? (
                    data.map((item) => (
                        <Accordion.Item key={item._id} eventKey={item._id}>
                            <Accordion.Header>
                                <div className="m-auto">{item.question}</div>
                            </Accordion.Header>
                            <Accordion.Body className="text-end">
                                <div className="px-3 d-inline ">{item.answer}</div>
                                <div className="px-3 d-inline text-muted">— {item.name}</div>
                                <button onClick={() => onDeleteItem(item._id)} className="btn-color">مسح</button>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                ) : (
                    <h2 className="fs-4 text-center p-5">لا يوجد اسئله الان</h2>
                )}
            </Accordion>
        </Row>
    )
}

export default QAList;
