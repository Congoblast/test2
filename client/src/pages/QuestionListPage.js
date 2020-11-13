import React, {useEffect, useState} from 'react';
const API_URL = process.env.REACT_APP_API;
import AddQuestion from "../components/AddQuestion"
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

const QuestionListPage = () => (
    <>
    
   {data.map(questions => {
        return  <p key={questions._id}>{questions.name}({questions._id}) </p>;
      })}
      
      <AddQuestion addQuestion={data.addQuestion}></AddQuestion>
    </>
    
);

export default QuestionListPage;