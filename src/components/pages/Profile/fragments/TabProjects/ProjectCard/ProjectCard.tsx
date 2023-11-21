import { GitHub, Language } from '@mui/icons-material';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';

interface ITechs {
  id: string;
  name: string;
}

interface ProjectCardProps {
  name?: string;
  resume?: string;
  github_url?: string;
  deploy_url?: string;
  image_url?: string;
  techs?: ITechs[];
}

export function ProjectCard(props:ProjectCardProps) {
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
        borderRadius: '10px',
      }}
    >
      <CardHeader
        sx={{ padding: 0, paddingBottom: '1rem' }}
        title={props?.name}

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
          {props?.techs?.map((tec) => (
            <Chip label={tec.name} key={tec.id} />
          ))}
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          href={`${props?.github_url}`}
          target="_blank"
          aria-label="Repositório"
          disabled={!props?.github_url}
        >
          <GitHub />
        </IconButton>
        <IconButton
          href={`${props?.deploy_url}`}
          target="_blank"
          aria-label="Deploy"
          disabled={!props?.deploy_url}
        >
          <Language />
        </IconButton>

      </CardActions>

    </Card>
  );
}
