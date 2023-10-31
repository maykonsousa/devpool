import { GitHub, Language, MoreVert } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';

interface ProjectCardProps {
  name?: string;
  description?: string;
  type?: string;
  resume?: string;
  github_url?: string;
  deploy_url?: string;
  image_url?: string;
  tecs?: string[];
}

export function ProjectCard(props:ProjectCardProps) {
  const typesEnum = {
    frontend: {
      color: 'primary.main',
      subTitle: 'Front-end',
      abbreviation: 'FE',
    },
    backend: {
      color: 'secondary.main',
      subTitle: 'Back-end',
      abbreviation: 'BE',
    },
    mobile: {
      color: 'error.main',
      subTitle: 'Mobile',
      abbreviation: 'MO',
    },
    fullstack: {
      color: 'warning.main',
      subTitle: 'Fullstack',
      abbreviation: 'FS',
    },
    qa: {
      color: 'info.main',
      subTitle: 'Quality Assurance',
      abbreviation: 'QA',
    },
    devops: {
      color: 'success.main',
      subTitle: 'DevOps',
      abbreviation: 'DO',
    },
    data: {
      color: 'text.primary',
      subTitle: 'Data Science',
      abbreviation: 'DS',
    },

  };

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: '360px',
        minWidth: '300px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem',
      }}
    >
      <CardHeader
        sx={{ padding: 0, paddingBottom: '1rem' }}
        avatar={(
          <Tooltip title={typesEnum[props?.type as keyof typeof typesEnum].subTitle} arrow placement="top">
            <Avatar sx={{ bgcolor: typesEnum[props?.type as keyof typeof typesEnum].color }}>
              {typesEnum[props?.type as keyof typeof typesEnum].abbreviation}
            </Avatar>
          </Tooltip>
)}
        title={props?.name}
        subheader={props?.description}
        action={(
          <IconButton>
            <MoreVert />
          </IconButton>
        )}
      />
      <CardMedia
        sx={{ height: '200px' }}
        image={props?.image_url}
        title={props?.name}
      />
      <CardContent sx={{
        padding: '8px 0', gap: '8px', display: 'flex', flexDirection: 'column',
      }}
      >
        <Typography variant="body2" color="text.secondary">
          {props?.resume}
        </Typography>
        <Divider />
        <Box display="flex" gap={1}>
          {props?.tecs?.map((tec) => (
            <Chip label={tec} key={tec} />
          ))}
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          href={`${props?.github_url}`}
          aria-label="Repositório"
        >
          <GitHub />
        </IconButton>
        <IconButton
          href={`${props?.deploy_url}`}
          aria-label="Deploy"
        >
          <Language />
        </IconButton>

      </CardActions>

    </Card>
  );
}
