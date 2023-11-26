import { ContentCopy, DoneAll } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

interface ICopyIconProps {
  text: string;
}

export function CopyIcon({ text }: ICopyIconProps) {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = async () => {
    if (!isCopied) {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <IconButton onClick={handleCopy}>
      {isCopied ? <DoneAll color="primary" /> : <ContentCopy />}
    </IconButton>
  );
}
