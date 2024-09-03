import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function ContractDocument({ contractType, partyA, partyB, conditions }) {
  const today = new Date().toLocaleDateString('ja-JP');
  const documentRef = useRef();

  const handleDownloadPdf = async () => {
    const canvas = await html2canvas(documentRef.current, {
      scale: 2, // 解像度を上げる
      useCORS: true,
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('contract.pdf');
  };

  return (
    <div>
      <div
        ref={documentRef}
        style={{
          border: '1px solid black',
          padding: '20px',
          width: '210mm',
          minHeight: '297mm',
          margin: '0 auto',
          backgroundColor: '#fff',
          boxSizing: 'border-box',
        }}
      >
        <p>{contractType}</p>
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
      <button onClick={handleDownloadPdf} style={{ marginTop: '20px' }}>
        PDFをダウンロード
      </button>
    </div>
  );
}

export default ContractDocument;
