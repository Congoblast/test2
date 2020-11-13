import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
const API_URL = process.env.REACT_APP_API;

function QuestionList(props) {
    
  
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


    
  
    return (
      <div className="background-blue">
        <h1>Question List</h1>
        <ul>
          {data.map(questions =>
            <li class="list-group-item text-center" key={questions._id}>
              <Link to={`/questions/${questions._id}`}>{questions.name}</Link>
            </li>)}
        </ul>
      </div>
    );
  }
  
  export default QuestionList;
  