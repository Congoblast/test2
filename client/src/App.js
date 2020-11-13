import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import QuestionList from './components/QuestionList';
//import QuestionList from "./components/QuestionList";
import NavBar from "./NavBar"
import QuestionPage from './pages/QuestionPage';
import AddQuestion from"./components/AddQuestion";
import "./cssb/css/bootstrap.css";
import "./styles.css";
//import QuestionListPage from './pages/QuestionListPage';
const API_URL = process.env.REACT_APP_API;
function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/questions`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []); 

async function addQuestion(name){

const newQuestion = {
  name: name
}
const url = `${API_URL}/question`;
const response = await fetch(url, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newQuestion),
});
const data = await response.json();
console.log(data);

}
  return (
    <>

  <Router>
    <NavBar/>
    <Switch>
      <Route path="/questions" component={QuestionList} exact/>
      <Route path="/questions/:id" component={QuestionPage} exact/>
      <Route path="/question" component={AddQuestion} exact/>
    </Switch>
  </Router>
      <h1>Question List</h1>
      <p>Data from server:</p>
      {data.map(questions => {
        return <p key={questions._id}>{questions.name}({questions._id}) </p>;
      })}
    </>
  );
}

export default App;
