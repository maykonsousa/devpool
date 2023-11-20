import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import { useGetAllTechnologies, useGetTechsByUser, useSession } from '@/hooks';
import { GridContainer, TabContainer } from './TechsTab.styles';
import { TechCheckbox } from './TechCheckbox';

export function TechsTab() {
  const { technologies } = useGetAllTechnologies();
  const { user } = useSession();
  const { data } = useGetTechsByUser({
    variables: {
      input: {
        userId: user?.id as string,
      },
    },
  });

  const techsByUser = useMemo(() => data?.techs, [data]);

  const isChecked = (techId:string) => {
    if (techsByUser) {
      return techsByUser.some((tech) => tech.techId === techId);
    }
    return false;
  };
  return (
    <TabContainer>
      <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '1rem' }}>
        Minhas tecnologias
      </Typography>
      <Typography variant="body1">
        Adicione as tecnologias que você conhece e que podem ser relevantes para
        o seu perfil profissional.
      </Typography>
      <GridContainer>
        {technologies?.map((tech:{id:string, name: string}) => (
          <TechCheckbox
            key={tech.id}
            techId={tech.id}
            techName={tech.name}
            userId={user?.id as string}
            isChecked={isChecked(tech.id)}
          />
        ))}

      </GridContainer>
    </TabContainer>
  );
}
