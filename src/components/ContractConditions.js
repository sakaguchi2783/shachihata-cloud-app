import React, { useState } from 'react';

function ContractConditions({ onSubmit }) {
  const [conditions, setConditions] = useState([]);
  
  const handleAddCondition = () => {
    setConditions([...conditions, { description: '', deadline: '', priority: '' }]);
  };

  const handleConditionChange = (index, field, value) => {
    const newConditions = [...conditions];
    newConditions[index][field] = value;
    setConditions(newConditions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(conditions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>契約条件を入力してください</h3>
      {conditions.map((condition, index) => (
        <div key={index}>
          <div>
            <label>相手に守ってほしい条件や内容は？</label>
            <textarea
              value={condition.description}
              onChange={(e) => handleConditionChange(index, 'description', e.target.value)}
              required
            />
          </div>
          <div>
            <label>期限:</label>
            <input
              type="date"
              value={condition.deadline}
              onChange={(e) => handleConditionChange(index, 'deadline', e.target.value)}
              required
            />
          </div>
          <div>
            <label>優先順位:</label>
            <input
              type="text"
              value={condition.priority}
              onChange={(e) => handleConditionChange(index, 'priority', e.target.value)}
              required
            />
          </div>
        </div>
      ))}
      <button type="button" className="add-condition-button"onClick={handleAddCondition}>条件を追加</button>
      <button type="submit" className="submit-button">送信</button>
    </form>
  );
}

export default ContractConditions;
