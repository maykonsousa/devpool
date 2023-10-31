import { Handyman } from '@mui/icons-material';
import {
  Paper, Typography, Divider, Box, Chip, IconButton,
} from '@mui/material';
import React from 'react';

export function ExperienceCard() {
  return (
    <Box sx={{
      display: 'flex',
      gap: 4,
      borderLeft: '2px solid #ccc',
      paddingBottom: '1rem',

    }}
    >
      <Box sx={{
        display: 'flex',
        gap: 2,
        transform: 'translateX(-1.5rem)',
        alignItems: 'center',

      }}
      >
        <IconButton
          sx={{
            width: '3rem',
            height: '3rem',
            padding: '8px',
            bgcolor: 'primary.main',

          }}
        >
          <Handyman />
        </IconButton>
        <Paper elevation={3} sx={{ padding: '1rem', gap: 1 }}>
          <Typography variant="h6" fontWeight="bold">Nome da Empresa</Typography>
          <Typography variant="body1" color="textSecondary">Cargo</Typography>
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Soluta nobis labore
            facere modi molestiae commodi sit suscipit numquam, aspernatur
            iusto temporibus sapiente repellat voluptatibus aliquid.
          </Typography>
          <Divider sx={{
            marginTop: '1rem',
            marginBottom: '1rem',

          }}
          />
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
            gap: '8px',
            flexWrap: 'wrap',

          }}
          >
            {['React', 'Node', 'TypeScript', 'JavaScript', 'HTML', 'CSS'].map((item) => (
              <Chip label={item} key={item} />
            ))}
          </Box>

        </Paper>
      </Box>
    </Box>
  );
}
