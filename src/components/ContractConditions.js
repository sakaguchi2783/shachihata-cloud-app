import React, { useState } from 'react';
import './ContractCreationStep1.css';

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
      <p>①まず『条件を追加』を押して3点（内容・期日・順位）を記入ください。</p>
      <p>②条件を追加したい場合は『条件を追加』を何回もタップしてください。</p>
      <p>③最後に『送信』を押して完成です。</p>
      <p>　</p>
      {conditions.map((condition, index) => (
        <div key={index}>
          <div>
            <label>「相手に守ってほしい条件や内容は？」</label>
            <textarea
              value={condition.description}
              onChange={(e) => handleConditionChange(index, 'description', e.target.value)}
              required
            />
          </div>
          <div>
            <label>「期限は？」（いつまで守ってほしい？）</label>
            <input
              type="date"
              value={condition.deadline}
              onChange={(e) => handleConditionChange(index, 'deadline', e.target.value)}
              required
            />
          </div>
          <div>
            <label>「優先順位は？」（この約束事は何番目に大事？）</label>
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
