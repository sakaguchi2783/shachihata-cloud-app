import React from 'react';

function Contracts({ contractData }) {
  return (
    <div style={{ border: '1px solid black', padding: '20px', width: '210mm', margin: '0 auto' }}>
      <h2>契約書</h2>
      <div>
        <h3>契約条件:</h3>
        <p>{contractData.conditions}</p>
      </div>
      <div>
        <h3>期限（この条件を守るのはいつまでですか？）:</h3>
        <p>{contractData.deadline}</p>
      </div>
      <div>
        <h3>優先順位（この条件の優先順位をつけてみましょう。例：１←一番上に表記されます）:</h3>
        <p>{contractData.priority}</p>
      </div>
    </div>
  );
}

export default Contracts;
