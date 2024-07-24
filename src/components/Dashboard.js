import React, { useState } from 'react';
import ContractCreationStep1 from './ContractCreationStep1';
import ContractCreationStep2 from './ContractCreationStep2';
import ContractConditions from './ContractConditions';
import ContractDocument from './ContractDocument';

function Dashboard() {
  const [step, setStep] = useState(1);
  const [contractType, setContractType] = useState('');
  const [partyA, setPartyA] = useState('');
  const [partyB, setPartyB] = useState('');
  const [conditions, setConditions] = useState([]);

  const handleStep1Submit = (data) => {
    setContractType(data.contractType);
    setStep(2);
  };

  const handleStep2Submit = (data) => {
    setPartyA(data.partyA);
    setPartyB(data.partyB);
    setStep(3);
  };

  const handleConditionsSubmit = (data) => {
    setConditions(data);
    setStep(4);
  };

  return (
    <div>
      <h2>ダッシュボード</h2>
      {step === 1 && <ContractCreationStep1 onSubmit={handleStep1Submit} />}
      {step === 2 && <ContractCreationStep2 onSubmit={handleStep2Submit} />}
      {step === 3 && <ContractConditions onSubmit={handleConditionsSubmit} />}
      {step === 4 && (
        <ContractDocument
          contractType={contractType}
          partyA={partyA}
          partyB={partyB}
          conditions={conditions}
        />
      )}
    </div>
  );
}

export default Dashboard;
