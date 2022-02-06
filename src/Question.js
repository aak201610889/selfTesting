import React from 'react';
import Singlequestion from './Singlequestion';
import "./qustion.css";

function Question({ data }) {
  return (
    <div className='qustion'>
      <div className="title">
        <h2>Question And Answer About Login</h2>
      </div>
      <div>
        {data.map((item) => <Singlequestion item={item} key={ item.id}/>)}
      </div>
    </div>
  );
}

export default Question;
