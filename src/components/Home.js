import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>ようこそ、APMO契約書作成アプリへ</h2>
      <p>このアプリは本番の契約書を作成る前の要件定義としても使えます。</p>
      <p>≪手順に従って契約書を完させよう≫</p>
      <Link to="/dashboard">
        <button>ダッシュボードへ進む</button>
      </Link>
    </div>
  );
}

export default Home;
