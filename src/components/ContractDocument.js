import React from 'react';

function ContractDocument({ contractType, partyA, partyB, conditions }) {
  const today = new Date().toLocaleDateString('ja-JP');

  return (
    <div style={{ border: '1px solid black', padding: '20px', width: '210mm', margin: '0 auto' }}>
      <h2>契約書</h2>
      <p>契約書名: {contractType}</p>
      <p>甲: {partyA}</p>
      <p>乙: {partyB}</p>

      {conditions.map((condition, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <h3>第{index + 1}条</h3>
          <p>{condition.deadline}まで</p>
          <p>{condition.description}</p>
        </div>
      ))}

      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <p>締結日: {today}</p>
        <p>甲: {partyA}</p>
        <p>乙: {partyB}</p>
      </div>
    </div>
  );
}

export default ContractDocument;
