import React, {useState} from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import List from './components/List/List';



function App() {

  const [storeedListData, addNewListData] = useState([]);

const onSaveHandler = (data) => {

  addNewListData([...storeedListData, data]);
}

const deleteData = (id) => {
 
  addNewListData(() => {
   return storeedListData.filter((user) => user.id !== id);
  })
}

console.log(storeedListData);

  return (
    <div className="App">
    <Card>
     <Header />
     <Form onSave={onSaveHandler} />
     <List user={storeedListData} delHandler={deleteData} />
    </Card>
    </div>
  );
}

export default App;
