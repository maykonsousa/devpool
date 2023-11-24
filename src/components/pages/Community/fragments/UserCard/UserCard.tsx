import {
  Avatar,
  AvatarGroup,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Computer, EqualizerSharp, LocationOn } from "@mui/icons-material";
import { useGetContacts } from "@/hooks";
import {
  Bio,
  CardContainer,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  InfoContainer,
} from "./UserCard.styles";
import { SocialIcon } from "../SocialIcon/SocialIcon";
import { MenuCard } from "../MenuCard/MenuCard";

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

export function UserCard({ user }: UserCardProps) {
  const { data } = useGetContacts({
    variables: {
      input: {
        userId: user.id,
      },
    },
  });

  const contacts = data?.contacts;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        <Bio>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          reprehenderit saepe possimus asperiores doloribus numquam dolorum,
          corporis nihil, facilis dolor nesciunt quia libero nulla deserunt
          repellendus vitae laboriosam! Odio doloremque reprehenderit libero a
          harum excepturi, sunt pariatur ut eligendi exercitationem perferendis
          suscipit ratione cumque ex qui quis nulla provident ipsum.
        </Bio>
      </CardContent>
      <CardFooter>
        <AvatarGroup max={5}>
          {contacts?.linkedin_url && (
            <SocialIcon type="linkedin_url" url={contacts.linkedin_url} />
          )}
          {contacts?.github_url && (
            <SocialIcon type="github_url" url={contacts.github_url} />
          )}
          {contacts?.instagram_url && (
            <SocialIcon type="instagram_url" url={contacts.instagram_url} />
          )}
          {contacts?.cell_phone && (
            <SocialIcon type="cell_phone" url={contacts.cell_phone} />
          )}
          {contacts?.personal_website && (
            <SocialIcon
              type="personal_website"
              url={contacts.personal_website}
            />
          )}
          {contacts?.twitter_url && (
            <SocialIcon type="twitter_url" url={contacts.twitter_url} />
          )}
        </AvatarGroup>
      </CardFooter>
    </CardContainer>
  );
}
