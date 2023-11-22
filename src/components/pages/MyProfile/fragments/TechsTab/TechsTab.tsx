import React, { useCallback, useMemo } from 'react';
import {
  Box, FormControl, InputAdornment, TextField, Typography,
} from '@mui/material';
import { useGetAllTechnologies, useGetTechsByUser, useSession } from '@/hooks';
import { Loading } from '@/components/Loading';
import { Search } from '@mui/icons-material';
import { GridContainer, TabContainer } from './TechsTab.styles';
import { TechCheckbox } from './TechCheckbox';

interface ITechs {
  id: string;
  name: string;
}

export function TechsTab() {
  const [fiteredTechs, setFilteredTechs] = React.useState<ITechs[]>([]);
  const [seachText, setSearchText] = React.useState<string>('');
  const { technologies, loading } = useGetAllTechnologies();
  const { user } = useSession();
  const { data } = useGetTechsByUser({
    variables: {
      input: {
        userId: user?.id as string,
      },
    },
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    const filtered = technologies?.filter((tech:ITechs) => tech.name.toLowerCase()
      .includes(event.target.value.toLowerCase()));
    setFilteredTechs(filtered);
  };

  const techsByUser = useMemo(() => data?.techs, [data]);

  const getAllTechs = useCallback(() => {
    if (technologies) {
      setFilteredTechs(technologies);
    }
  }, [technologies]);

  const isChecked = (techId:string) => {
    if (techsByUser) {
      return techsByUser.some((tech) => tech.techId === techId);
    }
    return false;
  };

  const handleReset = () => {
    setSearchText('');
    setFilteredTechs(technologies);
  };

  React.useEffect(() => {
    getAllTechs();
  }, [getAllTechs]);
  return (
    <TabContainer>
      <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '1rem' }}>
        Minhas tecnologias
      </Typography>
      <Typography variant="body1">
        Adicione as tecnologias que você conhece e que podem ser relevantes para
        o seu perfil profissional.
      </Typography>
      {
        loading ? (<Loading />) : (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
          >
            <FormControl fullWidth>
              <TextField
                label="Pesquisar"
                fullWidth
                value={seachText}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <GridContainer>
              {fiteredTechs?.map((tech:{id:string, name: string}) => (
                <TechCheckbox
                  key={tech.id}
                  techId={tech.id}
                  techName={tech.name}
                  userId={user?.id as string}
                  isChecked={isChecked(tech.id)}
                  reset={handleReset}
                />
              ))}

            </GridContainer>
          </Box>
        )

      }
    </TabContainer>
  );
}
