import React from 'react';
import './styles.less';

export default function ButtonMain() {
  return (
    <button
      className="btn-normal"
      onClick={() => {
        window.location.href = 'https://w583606.yclients.com';
      }}
    >
      Записаться
    </button>
  );
}
