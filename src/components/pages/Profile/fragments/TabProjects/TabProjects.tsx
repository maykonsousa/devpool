import { Box, useTheme } from '@mui/material';
import React from 'react';
import { ProjectCard } from './ProjectCard';

export function TabProjects() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem',
        width: '100%',
        padding: '1rem 0',
        [theme.breakpoints.down('md')]: {
          padding: '1rem',
          alignContent: 'center',
          justifyContent: 'center',
          border: '1px solid #ccc',
        },
      }}
    >
      <ProjectCard
        deploy_url="www.google.com.br"
        description="Descrição do projeto"
        github_url="www.google.com.br"
        image_url="https://images.pexels.com/photos/574080/pexels-photo-574080.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
        name="Projeto 2"
        resume="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like."
        tecs={['React', 'Typescript', 'Material UI']}
        type="frontend"

      />
      <ProjectCard
        deploy_url="www.google.com.br"
        description="Descrição do projeto"
        github_url="www.google.com.br"
        image_url="https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
        name="Projeto 3"
        resume="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like."
        tecs={['Node.js', 'Prisma', 'Typescript']}
        type="backend"
      />
      <ProjectCard
        deploy_url="www.google.com.br"
        description="Descrição do projeto"
        github_url="www.google.com.br"
        image_url="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
        name="Projeto 4"
        resume="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like."
        tecs={['React Native', 'Typescript', 'Material UI']}
        type="mobile"
      />
      <ProjectCard
        deploy_url="www.google.com.br"
        description="Descrição do projeto"
        github_url="www.google.com.br"
        image_url="https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
        name="Projeto 5"
        resume="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like."
        tecs={['React', 'Typescript', 'Material UI', 'Node.js', 'Prisma']}
        type="fullstack"
      />
      <ProjectCard
        deploy_url="www.google.com.br"
        description="Descrição do projeto"
        github_url="www.google.com.br"
        image_url="https://images.pexels.com/photos/574080/pexels-photo-574080.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
        name="Projeto 6"
        resume="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like."
        tecs={['React', 'Typescript', 'Material UI']}
        type="frontend"

      />
      <ProjectCard
        deploy_url="www.google.com.br"
        description="Descrição do projeto"
        github_url="www.google.com.br"
        image_url="https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
        name="Projeto 1"
        resume="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like."
        tecs={['Node.js', 'Prisma', 'Typescript']}
        type="backend"
      />
      <ProjectCard
        deploy_url="www.google.com.br"
        description="Descrição do projeto"
        github_url="www.google.com.br"
        image_url="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
        name="Projeto 7"
        resume="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like."
        tecs={['React Native', 'Typescript', 'Material UI']}
        type="mobile"
      />
      <ProjectCard
        deploy_url="www.google.com.br"
        description="Descrição do projeto"
        github_url="www.google.com.br"
        image_url="https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2"
        name="Projeto 8"
        resume="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like."
        tecs={['React', 'Typescript', 'Material UI', 'Node.js', 'Prisma']}
        type="fullstack"
      />
    </Box>
  );
}
