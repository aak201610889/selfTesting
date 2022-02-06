import React from 'react';
import data from './data';
import Question from './Question';

function App() {
  return (
    <div className="App">
      <h2 style={{textAlign:'center'}}>Review project setup</h2>
      <Question data={data} />
    </div>
  );
}

export default App;
