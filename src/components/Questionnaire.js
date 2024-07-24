import React, { useState } from 'react';

function Questionnaire({ onSubmit }) {
  const [conditions, setConditions] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ conditions, deadline, priority });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>契約書作成</h2>
      <div>
        <label>契約条件を記入してください:</label>
        <textarea
          value={conditions}
          onChange={(e) => setConditions(e.target.value)}
          required
        />
      </div>
      <div>
        <label>これらが守られる期限を設定してください:</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
      </div>
      <div>
        <label>優先順位を記入してください:</label>
        <input
          type="text"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          placeholder="例: 1,2,3..."
          required
        />
      </div>
      <button type="submit">送信</button>
    </form>
  );
}

export default Questionnaire;
