'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { Box, Skeleton, Typography, useTheme } from '@mui/material';
import {
  Computer,
  EqualizerSharp,
  LinkedIn,
  LocationOn,
} from '@mui/icons-material';
import { useGetProfile } from '@/hooks';
import { LinkedinShareButton } from 'react-share';
import { HeaderAvatar, HeaderContainer } from './Header.styles';

interface HeaderProps {
  username: string;
}

export function Header({ username }: HeaderProps) {
  const theme = useTheme();
  const { data, loading } = useGetProfile({
    variables: { input: { username } },
  });

  const user = useMemo(() => data?.user, [data]);

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
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
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
      <LinkedinShareButton url="https://devpoolbr/profile/maykonsousa/">
        <LinkedIn />
      </LinkedinShareButton>
    </HeaderContainer>
  );
}
