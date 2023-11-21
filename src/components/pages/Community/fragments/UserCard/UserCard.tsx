import {
  Avatar, AvatarGroup, Chip, Typography,
} from '@mui/material';
import React from 'react';
import {
  Computer, EqualizerSharp, LocationOn,
} from '@mui/icons-material';
import { useGetContacts } from '@/hooks';
import {
  CardContainer, CardContent, CardFooter, CardHeader, CardTitle, InfoContainer,
} from './UserCard.styles';
import { SocialIcon } from '../SocialIcon/SocialIcon';
import { MenuCard } from '../MenuCard/MenuCard';

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

}

interface UserCardProps {
 user: IUserData;

}

export function UserCard({
  user,
}: UserCardProps) {
  const { data } = useGetContacts({
    variables: {
      input: {
        userId: user.id,
      },
    },
  });

  const contacts = data?.contacts;

  return (
    <CardContainer elevation={8}>
      <CardHeader>
        <Avatar alt={user.name} src={user.avatar_url} />
        <CardTitle>{user.name}</CardTitle>
        <MenuCard />
      </CardHeader>
      <InfoContainer>
        <Chip avatar={<Computer fontSize="small" />} label={user.role} />
        <Chip avatar={<EqualizerSharp fontSize="small" />} label={user.seniority} />
        <Chip avatar={<LocationOn fontSize="small" />} label={`${user.city}/${user.state}`} />

      </InfoContainer>

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {user.bio}
        </Typography>
      </CardContent>
      <CardFooter>
        <AvatarGroup max={5}>

          {contacts?.linkedin_url && <SocialIcon type="linkedin_url" url={contacts.linkedin_url} />}
          {contacts?.github_url && <SocialIcon type="github_url" url={contacts.github_url} />}
          {contacts?.instagram_url && <SocialIcon type="instagram_url" url={contacts.instagram_url} />}
          {contacts?.cell_phone && <SocialIcon type="cell_phone" url={contacts.cell_phone} />}
          {contacts?.personal_website && <SocialIcon type="personal_website" url={contacts.personal_website} />}
          {contacts?.twitter_url && <SocialIcon type="twitter_url" url={contacts.twitter_url} />}

        </AvatarGroup>

      </CardFooter>

    </CardContainer>
  );
}
