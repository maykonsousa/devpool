import React from 'react';
import { Tooltip, Link } from '@mui/material';
import { theme } from '@/theme';
import {
  Facebook, GitHub, Instagram, LinkedIn, WhatsApp,
} from '@mui/icons-material';

interface ISocialIconProps {
  type: 'facebook' | 'github' | 'instagram' | 'linkedin' | 'whatsapp';
  url: string;
}

export function SocialIcon({ type, url }: ISocialIconProps) {
  const SocialEnum = {
    facebook: {
      label: 'Facebook',
      icon: <Facebook />,
    },
    github: {
      label: 'Github',
      icon: <GitHub />,
    },
    instagram: {
      label: 'Instagram',
      icon: <Instagram />,
    },
    linkedin: {
      label: 'Linkedin',
      icon: <LinkedIn />,
    },
    whatsapp: {
      label: 'Whatsapp',
      icon: <WhatsApp />,
    },
  };

  return (
    <Tooltip title={SocialEnum[type].label} placement="top">
      <Link
        href={url}
        sx={{
          color: 'text.primary',
          border: `2px solid ${theme.palette.text.primary}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          ':hover': {
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.secondary.main,
          },

        }}
      >
        {SocialEnum[type].icon}
      </Link>
    </Tooltip>
  );
}
