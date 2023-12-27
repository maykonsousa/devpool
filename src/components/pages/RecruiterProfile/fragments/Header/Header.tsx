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
  Business,
  Computer,
  EqualizerSharp,
  Facebook,
  LinkedIn,
  Twitter,
  WhatsApp,
} from '@mui/icons-material';
import { useGetRecruiterProfile, useSession } from '@/hooks';
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { HeaderAvatar, HeaderContainer } from './Header.styles';

interface HeaderProps {
  id: string;
}

export function Header({ id }: HeaderProps) {
  const theme = useTheme();
  const { user: userLoged } = useSession();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { data, loading } = useGetRecruiterProfile({
    variables: { input: { id, userId: userLoged?.id as string } },
  });

  const user = useMemo(() => data?.recruiter, [data]);
  const url = `https://www.devpoolbr.com.br/recruiters/${id}`;

  const seniorityEnum = {
    junior: 'Júnior',
    pleno: 'Pleno',
    senior: 'Sênior',
    estagiario: 'Estagiário',
    trainee: 'Trainee',
  };

  return (
    <HeaderContainer>
      <HeaderAvatar>
        {loading || !user?.avatar_url ? (
          <Skeleton
            variant="rectangular"
            width={isMobile ? '80px' : '120px'}
            height={isMobile ? '80px' : '120px'}
            animation="wave"
          />
        ) : (
          <Image
            src={user?.avatar_url || '/FakeAvatar.png'}
            width={120}
            height={120}
            style={{
              borderRadius: '8px',
              width: isMobile ? '80px' : '120px',
              height: isMobile ? '80px' : '128px',
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
            justifyContent: 'center',
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
              [theme.breakpoints.down('md')]: {
                display: 'none',
              },
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
                  justifyContent: 'center',
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
                  justifyContent: 'center',
                },
              }}
            >
              <EqualizerSharp />
              <Typography variant="body1">
                {seniorityEnum[user?.seniority as keyof typeof seniorityEnum]}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                [theme.breakpoints.down('md')]: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              }}
            >
              <Business />
              <Typography variant="body1">{user?.company}</Typography>
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
