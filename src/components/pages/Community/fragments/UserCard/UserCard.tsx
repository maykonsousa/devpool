import {
  Avatar,
  AvatarGroup,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { Computer, EqualizerSharp, LocationOn } from '@mui/icons-material';
import { seniorityAbbreviations } from '@/mock/generalMocks';
import {
  Bio,
  CardContainer,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  InfoContainer,
} from './UserCard.styles';
import { SocialIcon } from '../SocialIcon/SocialIcon';
import { MenuCard } from '../MenuCard/MenuCard';

interface IContacts {
  linkedin_url: string;
  github_url: string;
  instagram_url: string;
  cell_phone: string;
  personal_website: string;
  twitter_url: string;
}

interface IUserData {
  id: string;
  name: string;
  avatar_url: string;
  cover_url: string;
  role: string;
  seniority: string;
  city: string;
  state: string;
  bio: string;
  email: string;
  username: string;
  contacts: IContacts;
}

interface UserCardProps {
  user: IUserData;
}

type SocialIconType =
  | 'linkedin_url'
  | 'github_url'
  | 'twitter_url'
  | 'instagram_url'
  | 'cell_phone'
  | 'personal_website';
export function UserCard({ user }: UserCardProps) {
  const { contacts } = user;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const seniorityEnum = {
    estagiario: 'Estagiário',
    junior: 'Júnior',
    pleno: 'Pleno',
    senior: 'Sênior',
    trainee: 'Trainee',
  };
  return (
    <CardContainer elevation={8}>
      <CardHeader>
        <Avatar alt={user.name} src={user.avatar_url} />
        <CardTitle>{user.name}</CardTitle>
        <MenuCard username={user.username} />
      </CardHeader>

      {isMobile ? (
        <InfoContainer>
          <Chip
            avatar={<Computer fontSize="small" />}
            label={`${user.role}/${
              seniorityAbbreviations[
                user.seniority as keyof typeof seniorityAbbreviations
              ]
            }`}
          />
          <Chip
            avatar={<LocationOn fontSize="small" />}
            label={`${user.city}/${user.state}`}
          />
        </InfoContainer>
      ) : (
        <InfoContainer>
          <Chip avatar={<Computer fontSize="small" />} label={user.role} />
          <Chip
            avatar={<EqualizerSharp fontSize="small" />}
            label={seniorityEnum[user.seniority as keyof typeof seniorityEnum]}
          />
          <Chip
            avatar={<LocationOn fontSize="small" />}
            label={`${user.city}/${user.state}`}
          />
        </InfoContainer>
      )}

      <CardContent>
        <Bio>{user.bio}</Bio>
      </CardContent>
      <CardFooter>
        <AvatarGroup max={5}>
          {Object.entries(contacts).map(([key, value]) => {
            if (value && key !== '__typename') {
              return (
                <SocialIcon
                  key={key}
                  type={key as SocialIconType}
                  url={value}
                />
              );
            }
            return null;
          })}
        </AvatarGroup>
      </CardFooter>
    </CardContainer>
  );
}
