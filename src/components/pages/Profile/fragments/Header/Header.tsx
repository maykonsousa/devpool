'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import {
  Box,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Computer,
  EqualizerSharp,
  Facebook,
  LinkedIn,
  LocationOn,
  Twitter,
  WhatsApp,
} from '@mui/icons-material';
import { useGetProfile } from '@/hooks';
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { HeaderAvatar, HeaderContainer } from './Header.styles';

interface HeaderProps {
  username: string;
}

export function Header({ username }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { data, loading } = useGetProfile({
    variables: { input: { username } },
  });

  const user = useMemo(() => data?.user, [data]);
  const url = `https://devpoolbr.vercel.app/profile/${username}`;

  return (
    <HeaderContainer>
      <HeaderAvatar>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={120}
            height={120}
            animation="wave"
          />
        ) : (
          <Image
            src={user?.avatar_url as string}
            width={120}
            height={120}
            style={{
              borderRadius: '8px',
              width: isMobile ? '80px' : '120px',
              height: isMobile ? '80px' : '120px',
            }}
            alt="avatar"
          />
        )}
      </HeaderAvatar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
          [theme.breakpoints.down('md')]: {
            alignItems: 'center',
          },
        }}
      >
        {loading ? (
          <Skeleton variant="text" width={300} height={40} animation="wave" />
        ) : (
          <Typography variant="h4">{user?.name}</Typography>
        )}
        {loading ? (
          <Skeleton variant="text" width={300} height={40} animation="wave" />
        ) : (
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                [theme.breakpoints.down('md')]: {
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              }}
            >
              <Computer />
              <Typography variant="body1">{user?.role}</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                [theme.breakpoints.down('md')]: {
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              }}
            >
              <EqualizerSharp />
              <Typography variant="body1">{user?.seniority}</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                [theme.breakpoints.down('md')]: {
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              }}
            >
              <LocationOn />
              <Typography variant="body1">
                {user ? `${user?.city}/${user?.state}` : ''}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          [theme.breakpoints.down('md')]: {
            alignItems: 'center',
          },
        }}
      >
        <Typography variant="body1">Compartilhar</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <LinkedinShareButton url={url}>
            <LinkedIn fontSize="large" />
          </LinkedinShareButton>
          <FacebookShareButton url={url}>
            <Facebook fontSize="large" />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <Twitter fontSize="large" />
          </TwitterShareButton>
          <WhatsappShareButton url={url}>
            <WhatsApp fontSize="large" />
          </WhatsappShareButton>
        </Box>
      </Box>
    </HeaderContainer>
  );
}
