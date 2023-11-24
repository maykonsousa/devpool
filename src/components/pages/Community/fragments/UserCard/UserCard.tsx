import {
  Avatar,
  AvatarGroup,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { Computer, EqualizerSharp, LocationOn } from '@mui/icons-material';
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

  return (
    <CardContainer elevation={8}>
      <CardHeader>
        <Avatar alt={user.name} src={user.avatar_url} />
        <CardTitle>{user.name}</CardTitle>
        <MenuCard username={user.username} />
      </CardHeader>

      <InfoContainer>
        <Chip
          avatar={!isMobile ? <Computer fontSize="small" /> : undefined}
          label={user.role}
        />
        <Chip
          avatar={!isMobile ? <EqualizerSharp fontSize="small" /> : undefined}
          label={user.seniority}
        />
        <Chip
          avatar={!isMobile ? <LocationOn fontSize="small" /> : undefined}
          label={`${user.city}/${user.state}`}
        />
      </InfoContainer>

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
