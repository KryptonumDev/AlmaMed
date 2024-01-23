'use client';

import { useState } from 'react';

export const CopyToClipboard = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  };

  return (
    <p>
      {icon}
      <span>{text}</span>
      <button
        onClick={() => {
          copyToClipboard(text);
        }}
      >
        {isCopied ? 'Skopiowano' : 'Skopiuj'}
      </button>
    </p>
  );
};
