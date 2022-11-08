import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>Настоящий тайский массаж</span>
          </a>
        </h1>
        <button
          onClick={() => {
            window.location.href = 'https://w583606.yclients.com';
          }}
          >
          ОНЛАЙН-ЗАПИСЬ
        </button>
      </div>
    </header>
  );
}
