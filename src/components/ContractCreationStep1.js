import React, { useState } from 'react';
import './ContractCreationStep1.css';

function ContractCreationStep1({ onSubmit }) {
  const [contractType, setContractType] = useState('');
  const [otherContractType, setOtherContractType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedContractType = contractType === 'その他' ? otherContractType : contractType;
    onSubmit({ contractType: selectedContractType });
  };

  const contractTypes = [
    { type: '業務委託契約書', description: '委託業務の範囲や報酬を明確にする契約書' },
    { type: '売買契約書', description: '商品やサービスの売買条件を規定する契約書' },
    { type: '賃貸借契約書', description: '不動産や動産の賃貸条件を規定する契約書' },
    { type: '雇用契約書', description: '従業員と雇用主の間の雇用条件を明確にする契約書' },
    { type: '秘密保持契約書', description: '機密情報の保護に関する契約書' },
    { type: 'ライセンス契約書', description: '知的財産の使用許諾に関する契約書' },
    { type: '合弁契約書', description: '共同事業の運営条件を規定する契約書' },
    { type: 'フランチャイズ契約書', description: 'フランチャイズビジネスの運営条件を規定する契約書' },
    { type: '融資契約書', description: '資金の借入条件を規定する契約書' },
    { type: '保証契約書', description: '保証人が被保証人の債務を保証する契約書' },
    { type: 'その他', description: 'その他の契約書' },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h3>はじめに</h3>
      <p>まず、はじめにあなたが作りたい契約書の内容を決めてください。</p>
      <div className="contract-types">
        {contractTypes.map((contract) => (
          <div key={contract.type} className="contract-type">
            <label className="contract-label">
              <input
                type="radio"
                name="contractType"
                value={contract.type}
                onChange={(e) => setContractType(e.target.value)}
                required
              />
              <span className="contract-name">{contract.type}</span>
              <div className="contract-description">（{contract.description}）</div>
            </label>
          </div>
        ))}
        {contractType === 'その他' && (
          <div>
            <label>その他の契約書の種類を記入してください:</label>
            <input
              type="text"
              value={otherContractType}
              onChange={(e) => setOtherContractType(e.target.value)}
              required
            />
          </div>
        )}
      </div>
      <button type="submit">次へ</button>
    </form>
  );
}

export default ContractCreationStep1;
