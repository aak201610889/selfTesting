import React, { useState } from 'react';

function Singlequestion({ item }) {
  const [readMore, setreadMore] = useState(false);
  const { title, info} = item;
  return (
    <div>
      <div className="single__quastion">
        <div>
          <h3>{title}</h3>
          <button
            className="btn"
            onClick={() => {
              setreadMore(!readMore);
            }}
          >
            {readMore ? "-" : "+"}
          </button>
        </div>
        {readMore && <p>{info}</p>}
      </div>
    </div>
  );
}

export default Singlequestion;
