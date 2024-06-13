import React, { useState } from 'react'
import { Row, Form, Button, Col } from 'react-bootstrap';
import apiClient from '../Api/apiClient'
const FormInput = ({ onAdd, notify }) => {
    const [name, setName] = useState('')
    const [qu, setQu] = useState('')
    const [an, setAn] = useState('')

    const addNewItem = async () => {
        if (name === "" || qu === "" || an === "") {
            notify("من فضلك اكمل البيانات", "Error");
            return;
        }

        try {
            const { data } = await apiClient.post('/api/questions', { name, question: qu, answer: an });
            setName('');
            setQu('');
            setAn('');
            onAdd(data.data);
            notify("تم الإضافة بنجاح", "Success");
        } catch (error) {
            notify("حدث خطأ أثناء الإضافة", "Error");
        }
    }

    return (
        <Row className="my-3">
            <Col sm="4">
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="ادخل اسمك" />
            </Col>
            <Col sm="3">
                <Form.Control value={qu} onChange={(e) => setQu(e.target.value)} type="text" placeholder="ادخل السوال" />
            </Col>
            <Col sm="3">
                <Form.Control value={an} onChange={(e) => setAn(e.target.value)} type="text" placeholder="ادخل الاجابه" />
            </Col>
            <Col sm="2">
                <button onClick={addNewItem} className="btn-color w-100" type="submit">
                    اضافة
                </button>
            </Col>
        </Row>
    )
}

export default FormInput;
