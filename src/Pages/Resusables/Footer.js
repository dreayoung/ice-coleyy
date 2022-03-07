import React from 'react';

export default function Footer() {
  return (
    <div className="text-xs text-gray-200 text-center pt-32 pl-4 pb-20 pr-4">
      <p>
        ©2022 Cole Edwards. Site made by{' '}
        <span>
          <a
            href="https://www.instagram.com/askdwe/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-wavy"
          >
            askdwe
          </a>
        </span>
      </p>
    </div>
  );
}
