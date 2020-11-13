import React, {useEffect, useState} from 'react';
const API_URL = process.env.REACT_APP_API;


const QuestionPage = ({match}) => {
  //find the id from the url
    const id = match.params.id;
    //now send it further
    //const questions = data.find(questions =>questions._id ===id);


    const [data, setData] = useState([]);
    useEffect(() => {
      async function getData() {
        const url = `${API_URL}/questions/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      }
      getData();
    }, [id]); 
  
return(
    <>
    <h1 className="text-center questionHeader">Question: {data.name}</h1>

    <div>
    <p>{data.Answer}</p>
   
      </div>
    </>
);
}
export default QuestionPage;