import { useGetJobsByUser, useGetProfile, useGetProjectsByUser } from '@/hooks';
import { CheckBox, DisabledByDefault } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useSession } from 'next-auth/react';
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ProgressBar } from './ProgressBar';

export function AlertProfileDialog() {
  const [open, setOpen] = React.useState(false);
  const { push } = useRouter();
  const [completed, setCompleted] = React.useState(14);
  const { data: session } = useSession();
  const { data } = useGetProfile({
    variables: { input: { username: session?.user.name } },
  });

  const { data: ProjectsData } = useGetProjectsByUser({
    variables: { input: { username: session?.user.name } },
  });

  const { data: jobsData } = useGetJobsByUser({
    username: session?.user.name as string,
  });
  const hasSocialInfo = data?.user?.contacts?.linkedin_url ? 16 : 0;
  const hasCourses = data?.user?.courses?.length ? 14 : 0;
  const hasLanguages = data?.user?.languages?.length ? 14 : 0;
  const hasTechnologies = data?.user?.technologies?.length ? 14 : 0;
  const hasProjects = ProjectsData?.projects?.length ? 14 : 0;
  const hasJobs = jobsData?.jobs?.length ? 14 : 0;

  const handleOpen = useCallback(() => {
    if (data?.user?.type === 'developer' && completed < 100) {
      setOpen(true);
    }
  }, [data, completed]);

  const handleComplete = useCallback(() => {
    setCompleted(
      14 +
        hasCourses +
        hasJobs +
        hasLanguages +
        hasProjects +
        hasSocialInfo +
        hasTechnologies,
    );
  }, [
    hasCourses,
    hasJobs,
    hasLanguages,
    hasProjects,
    hasSocialInfo,
    hasTechnologies,
  ]);

  const handleConfirm = () => {
    push('/settings');
    setOpen(false);
  };

  React.useEffect(() => {
    handleComplete();
  }, [handleComplete]);

  React.useEffect(() => {
    handleOpen();
  }, [handleOpen]);
  return (
    <Dialog open={open}>
      <DialogTitle variant="h4">Seu perfil ainda não está completo</DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '200px',
          minWidth: '500px',
        }}
      >
        <Typography variant="h6">
          Quanto mais completo o seu perfil estiver, maiores as chances de você
          ser encontrado por recrutadores.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '1rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              width: '100%',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                width: '100%',
              }}
            >
              <CheckBox color="success" />
              Dados Pessoais
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                width: '100%',
              }}
            >
              {hasProjects ? (
                <CheckBox color="success" />
              ) : (
                <DisabledByDefault color="error" />
              )}
              Projetos
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                width: '100%',
              }}
            >
              {hasCourses ? (
                <CheckBox color="success" />
              ) : (
                <DisabledByDefault color="error" />
              )}
              Educação
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                width: '100%',
              }}
            >
              {hasLanguages ? (
                <CheckBox color="success" />
              ) : (
                <DisabledByDefault color="error" />
              )}
              Idiomas
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                width: '100%',
              }}
            >
              {hasJobs ? (
                <CheckBox color="success" />
              ) : (
                <DisabledByDefault color="error" />
              )}
              Experiências
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                width: '100%',
              }}
            >
              {hasTechnologies ? (
                <CheckBox color="success" />
              ) : (
                <DisabledByDefault color="error" />
              )}
              Tecnologias
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                width: '100%',
              }}
            >
              {hasSocialInfo ? (
                <CheckBox color="success" />
              ) : (
                <DisabledByDefault color="error" />
              )}
              Redes Sociais & Contatos
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ProgressBar value={completed} />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="info" variant="outlined">
          Lembrar mais tarde
        </Button>
        <Button color="info" variant="contained" onClick={handleConfirm}>
          Completar Perfil
        </Button>
      </DialogActions>
    </Dialog>
  );
}
