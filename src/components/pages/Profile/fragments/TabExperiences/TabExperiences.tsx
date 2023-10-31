import { Handyman } from '@mui/icons-material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import {
  Box, Chip, Divider, Paper, Typography,
} from '@mui/material';
import React from 'react';

export function TabExperiences() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      padding: '1rem 0',
      width: '100%',

    }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Experiências
      </Typography>

      <Timeline position="right">
        <TimelineItem>

          <TimelineSeparator>
            <TimelineDot color="primary">
              <Handyman />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
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
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>

          <TimelineSeparator>
            <TimelineDot color="primary">
              2022
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
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
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>

          <TimelineSeparator>
            <TimelineDot color="primary">
              <Handyman />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
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
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>

          <TimelineSeparator>
            <TimelineDot color="primary">
              <Handyman />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
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
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
