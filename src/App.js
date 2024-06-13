import { Container, Row, Col } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import FormInput from './components/FormInput'
import QAList from './components/QAList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiClient from '../src/Api/apiClient'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data } = await apiClient.get('/api/questions');
      setData(data);
    };

    fetchQuestions();
  }, []);

  const addItem = (newQuestion) => {
    setData([...data, newQuestion]);
  }

  const deleteAllItems = async () => {
    try {
      await apiClient.delete('/api/questions'); // تعديل للسماح بحذف جميع العناصر
      setData([]);
      notify("تم حذف الكل بنجاح", "Success");
    } catch (error) {
      notify("حدث خطأ أثناء حذف الكل", "Error");
    }
  }

  const deleteOneItem = async (id) => {
    try {
      await apiClient.delete(`api/questions/${id}`);
      const newData = data.filter((item) => item._id !== id);
      setData(newData);
      notify("تم حذف السؤال بنجاح", "Success");
      if (newData.length <= 0) {
        deleteAllItems();
      }
    } catch (error) {
      notify("حدث خطأ أثناء حذف السؤال", "Error");
    }
  }

  const notify = (message, type) => {
    if (type === "Error")
      toast.error(message)
    else if (type === "Success")
      toast.success(message)
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <div className="fs-3 text-center py-2">
          <h3>M</h3>
          <h3>E</h3>
          <h3>R</h3>
          <h3>N</h3>
        </div>
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئله واجوبه شائعه</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {
              data.length > 0 && (<button onClick={deleteAllItems} className="btn-color w-100 my-3">مسح الكل</button>)
            }
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
