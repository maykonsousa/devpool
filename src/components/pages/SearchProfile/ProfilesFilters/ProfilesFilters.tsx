import {
  Box,
  Button,
  Checkbox,
  Chip,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { SyntheticEvent } from 'react';
import {
  ArrowDropDown,
  ArrowDropUp,
  Close,
  FilterList,
} from '@mui/icons-material';
import {
  useGetAllLanguages,
  useGetAllTechnologies,
  useGetRoles,
} from '@/hooks';
import { seniorityOptions } from '@/mock/generalMocks';
import { states } from '@/mock/statesMock';
import { AutoComplete } from '@/components/AutoComplete';
import {
  ActionButton,
  ButtonGroup,
  CloseButton,
  FilterContainer,
  Title,
} from './ProfilesFilters.styles';

interface IOnFilter {
  field:
    | 'roles'
    | 'seniorities'
    | 'states'
    | 'technologies'
    | 'pcd'
    | 'language'
    | 'level';
  value: string[] | boolean | string | null;
}

interface IFIlters {
  roles: string[] | null;
  seniorities: string[] | null;
  states: string[] | null;
  technologies: string[] | null;
  pcd: boolean | null;
  language: string | null;
  level: string | null;
}

interface IProfilesFiltersProps {
  // eslint-disable-next-line no-unused-vars
  onFilter: ({ field, value }: IOnFilter) => void;
  filters: IFIlters;
}

export function ProfilesFilters({ onFilter, filters }: IProfilesFiltersProps) {
  const [open, setOpen] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState('');

  const { data: rolesList } = useGetRoles();
  const { data: languagesList } = useGetAllLanguages();
  const { onlyNames } = useGetAllTechnologies();
  const technologiesOptions = onlyNames || [];

  const handleSelectChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: string[],
  ) => {
    onFilter({
      field: 'technologies',
      value: newValue,
    });
  };

  const enabledReset =
    filters?.roles?.length ||
    filters?.seniorities?.length ||
    filters?.states?.length ||
    filters?.technologies?.length ||
    filters?.pcd ||
    filters?.language ||
    filters?.level;

  const levelOptions = [
    { value: 'A1', label: 'A1 - Básico' },
    { value: 'A2', label: 'A2 - Básico' },
    { value: 'B1', label: 'B1 - Intermediário' },
    { value: 'B2', label: 'B2 - Intermediário' },
    { value: 'C1', label: 'C1 - Avançado' },
    { value: 'C2', label: 'C2 - Avançado' },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShowFilter('');
  };
  const handleShowFilter = (filter: string) => {
    if (showFilter === filter) {
      setShowFilter('');
    } else {
      setShowFilter(filter);
    }
  };

  const handleResetFilters = () => {
    onFilter({
      field: 'roles',
      value: [],
    });
    onFilter({
      field: 'seniorities',
      value: [],
    });
    onFilter({
      field: 'states',
      value: [],
    });
    onFilter({
      field: 'technologies',
      value: [],
    });
    onFilter({
      field: 'pcd',
      value: null,
    });
    onFilter({
      field: 'language',
      value: null,
    });
    onFilter({
      field: 'level',
      value: null,
    });
  };

  return (
    <>
      <Box display="flex" gap={1} alignItems="center">
        <ActionButton onClick={handleOpen} startIcon={<FilterList />}>
          Filtrar
        </ActionButton>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {filters?.roles?.map((role) => (
            <Chip
              label={role}
              key={role}
              onDelete={() => {
                onFilter({
                  field: 'roles',
                  value: filters?.roles?.filter((r) => r !== role) || [],
                });
              }}
            />
          ))}
          {filters?.seniorities?.map((seniority) => (
            <Chip
              label={seniority}
              key={seniority}
              onDelete={() => {
                onFilter({
                  field: 'seniorities',
                  value:
                    filters?.seniorities?.filter((s) => s !== seniority) || [],
                });
              }}
            />
          ))}
          {filters?.states?.map((state) => (
            <Chip
              label={state}
              key={state}
              onDelete={() => {
                onFilter({
                  field: 'states',
                  value: filters?.states?.filter((s) => s !== state) || [],
                });
              }}
            />
          ))}
          {filters?.technologies?.map((technology) => (
            <Chip
              label={technology}
              key={technology}
              onDelete={() => {
                onFilter({
                  field: 'technologies',
                  value:
                    filters?.technologies?.filter((t) => t !== technology) ||
                    [],
                });
              }}
            />
          ))}
          {filters?.pcd && (
            <Chip
              label="PCD"
              key="pcd"
              onDelete={() => {
                onFilter({
                  field: 'pcd',
                  value: false,
                });
              }}
            />
          )}
          {filters?.language && (
            <Chip
              label={filters?.language}
              key={filters?.language}
              onDelete={() => {
                onFilter({
                  field: 'language',
                  value: null,
                });
              }}
            />
          )}
          {filters?.level && (
            <Chip
              label={filters?.level}
              key={filters?.level}
              onDelete={() => {
                onFilter({
                  field: 'level',
                  value: null,
                });
              }}
            />
          )}
        </Box>
      </Box>

      <Drawer anchor="left" open={open} onClose={handleClose}>
        <FilterContainer role="presentation">
          <Title>Filtros</Title>
          <CloseButton onClick={handleClose}>
            <Close />
          </CloseButton>

          <ButtonGroup>
            <Button
              variant={showFilter === 'roles' ? 'contained' : 'outlined'}
              color={showFilter === 'roles' ? 'primary' : 'info'}
              onClick={() => handleShowFilter('roles')}
              fullWidth
              endIcon={
                showFilter === 'roles' ? <ArrowDropUp /> : <ArrowDropDown />
              }
            >
              Atuação
            </Button>
            <Button
              variant={showFilter === 'seniorities' ? 'contained' : 'outlined'}
              color={showFilter === 'seniorities' ? 'primary' : 'info'}
              onClick={() => handleShowFilter('seniorities')}
              fullWidth
              endIcon={
                showFilter === 'seniorities' ? (
                  <ArrowDropUp />
                ) : (
                  <ArrowDropDown />
                )
              }
            >
              Senioridade
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button
              variant={showFilter === 'states' ? 'contained' : 'outlined'}
              color={showFilter === 'states' ? 'primary' : 'info'}
              onClick={() => handleShowFilter('states')}
              fullWidth
              endIcon={
                showFilter === 'states' ? <ArrowDropUp /> : <ArrowDropDown />
              }
            >
              Localização
            </Button>
            <Button
              variant={showFilter === 'language' ? 'contained' : 'outlined'}
              color={showFilter === 'language' ? 'primary' : 'info'}
              onClick={() => handleShowFilter('language')}
              fullWidth
              endIcon={
                showFilter === 'language' ? <ArrowDropUp /> : <ArrowDropDown />
              }
            >
              Idioma
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button
              variant={showFilter === 'technologies' ? 'contained' : 'outlined'}
              color={showFilter === 'technologies' ? 'primary' : 'info'}
              onClick={() => handleShowFilter('technologies')}
              fullWidth
              endIcon={
                showFilter === 'technologies' ? (
                  <ArrowDropUp />
                ) : (
                  <ArrowDropDown />
                )
              }
            >
              Tecnologias
            </Button>
          </ButtonGroup>

          {showFilter === 'roles' && (
            <FormGroup
              sx={{
                width: '100%',
              }}
            >
              {rolesList?.map((role) => (
                <FormControlLabel
                  key={role.id}
                  control={
                    <Checkbox
                      checked={filters?.roles?.includes(role.name)}
                      onChange={() => {
                        if (filters?.roles?.includes(role.name)) {
                          onFilter({
                            field: 'roles',
                            value: filters?.roles?.filter(
                              (r) => r !== role.name,
                            ),
                          });
                        } else {
                          onFilter({
                            field: 'roles',
                            value: [...(filters?.roles || []), role.name],
                          });
                        }
                      }}
                    />
                  }
                  label={role.name}
                />
              ))}
            </FormGroup>
          )}
          {showFilter === 'seniorities' && (
            <FormGroup
              sx={{
                width: '100%',
              }}
            >
              {seniorityOptions?.map((seniority) => (
                <FormControlLabel
                  key={seniority.value}
                  control={
                    <Checkbox
                      checked={filters?.seniorities?.includes(seniority.value)}
                      onChange={() => {
                        if (filters?.seniorities?.includes(seniority.value)) {
                          onFilter({
                            field: 'seniorities',
                            value: filters?.seniorities?.filter(
                              (s) => s !== seniority.value,
                            ),
                          });
                        } else {
                          onFilter({
                            field: 'seniorities',
                            value: [
                              ...(filters?.seniorities || []),
                              seniority.value,
                            ],
                          });
                        }
                      }}
                    />
                  }
                  label={seniority.label}
                />
              ))}
            </FormGroup>
          )}
          {showFilter === 'states' && (
            <FormGroup
              sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
              }}
            >
              {states?.map((state) => (
                <FormControlLabel
                  key={state.value}
                  control={
                    <Checkbox
                      checked={filters?.states?.includes(state.value)}
                      onChange={() => {
                        if (filters?.states?.includes(state.value)) {
                          onFilter({
                            field: 'states',
                            value: filters?.states?.filter(
                              (s) => s !== state.value,
                            ),
                          });
                        } else {
                          onFilter({
                            field: 'states',
                            value: [...(filters?.states || []), state.value],
                          });
                        }
                      }}
                    />
                  }
                  label={state.value}
                />
              ))}
            </FormGroup>
          )}
          {showFilter === 'technologies' && (
            <AutoComplete
              options={technologiesOptions || []}
              value={filters?.technologies || []}
              label="Tecnologias utilizadas"
              onChange={handleSelectChange}
              color="info"
            />
          )}
          {showFilter === 'language' && (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-standard-label" color="info">
                  Idioma
                </InputLabel>

                <Select
                  label="Idioma"
                  color="info"
                  onChange={(e) => {
                    onFilter({
                      field: 'language',
                      value: e.target.value as string,
                    });
                  }}
                >
                  {languagesList?.languages?.map((language) => (
                    <MenuItem key={language.id} value={language.name}>
                      {language.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {filters?.language && (
                <FormControl fullWidth>
                  <InputLabel
                    color="info"
                    id="demo-simple-select-standard-label"
                  >
                    Nível
                  </InputLabel>

                  <Select
                    color="info"
                    label="Nível"
                    onChange={(e) => {
                      onFilter({
                        field: 'level',
                        value: e.target.value as string,
                      });
                    }}
                  >
                    {levelOptions?.map((level) => (
                      <MenuItem key={level.value} value={level.value}>
                        {level.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Box>
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={filters?.pcd || false}
                onChange={() => {
                  onFilter({
                    field: 'pcd',
                    value: !filters?.pcd,
                  });
                }}
              />
            }
            label="Apenas perfis PCDs"
          />
          <Button
            variant={enabledReset ? 'contained' : 'outlined'}
            color="error"
            onClick={handleResetFilters}
            fullWidth
            disabled={!enabledReset}
          >
            Limpar Filtros
          </Button>
        </FilterContainer>
      </Drawer>
    </>
  );
}
