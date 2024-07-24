import React, { useState } from 'react';

function ContractCreationStep2({ onSubmit }) {
  const [partyA, setPartyA] = useState('');
  const [partyB, setPartyB] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ partyA, partyB });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>あなたはどの立場で誰と契約をしますか？</h3>
      <div>
        <label>あなたの立場（法人名や個人名）:</label>
        <input
          type="text"
          value={partyB}
          onChange={(e) => setPartyB(e.target.value)}
          required
        />
      </div>
      <div>
        <label>契約する相手（法人名や個人名）:</label>
        <input
          type="text"
          value={partyA}
          onChange={(e) => setPartyA(e.target.value)}
          required
        />
      </div>
      <button type="submit">次へ</button>
    </form>
  );
}

export default ContractCreationStep2;
