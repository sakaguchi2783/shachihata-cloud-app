import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>ようこそ、シャチハタクラウドアプリへ</h2>
      <p>契約書作成を簡単に行いましょう。</p>
      <Link to="/dashboard">
        <button>ダッシュボードへ進む</button>
      </Link>
    </div>
  );
}

export default Home;
