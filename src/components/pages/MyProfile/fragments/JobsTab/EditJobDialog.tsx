import { AutoComplete } from '@/components/AutoComplete';
import { DateInput } from '@/components/DateInput';
import { Dialog } from '@/components/Dialog';
import { TextInput } from '@/components/TextInput';
import { useFeedback, useGetAllTechnologies, useUpdateJob } from '@/hooks';
import { Edit } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import React, { SyntheticEvent, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Checkbox } from '@/components/Checkbox';
import { GridContainer } from './JobsTab.styles';

interface ITech {
  id: string;
  name: string;
}

interface IJob {
  userId: string;
  updatedAt: string;
  startDate: string;
  name: string;
  isCurrent: boolean;
  id: string;
  description: string;
  endDate: string;
  company: string;
  technologies: ITech[];
}
interface IFormValues {
  company?: string;
  name?: string;
  startDate?: Date;
  endDate?: Date;
  isCurrent?: boolean;
  description?: string;
}

const defaultValues: IFormValues = {
  company: '',
  name: '',
  isCurrent: true,
  startDate: new Date(),
  endDate: undefined,
  description: '',
};

interface IEditJobDialog {
  job: IJob;
}

export function EditJobDialog({ job }: IEditJobDialog) {
  const [technologies, setTechnologies] = React.useState<string[]>([]);
  const { onlyNames: technologiesOptions } = useGetAllTechnologies();
  const { showMessage } = useFeedback();

  const formMethods = useForm<IFormValues>({
    defaultValues,
  });
  const updateJobForm = useCallback(() => {
    formMethods.reset({
      company: job.company,
      name: job.name,
      startDate: new Date(+job.startDate),
      endDate: job.endDate ? new Date(+job.endDate) : undefined,
      isCurrent: job.isCurrent,
      description: job.description,
    });

    setTechnologies(job.technologies.map((tech) => tech.name));
  }, [job, formMethods]);

  const oldTechnologies = job.technologies.map((tech) => tech.name);

  const newTechnologies = technologies.filter(
    (tech) => !oldTechnologies.includes(tech),
  );

  const variables = {
    input: {
      data: {
        company:
          formMethods.watch('company') !== job.company
            ? formMethods.watch('company')
            : undefined,
        description:
          formMethods.watch('description') !== job.description
            ? formMethods.watch('description')
            : undefined,
        endDate:
          formMethods.watch('endDate') !== new Date(job.endDate)
            ? formMethods.watch('endDate')
            : undefined,
        id: job.id,
        isCurrent:
          formMethods.watch('isCurrent') !== job.isCurrent
            ? formMethods.watch('isCurrent')
            : undefined,
        name:
          formMethods.watch('name') !== job.name
            ? formMethods.watch('name')
            : undefined,
        startDate:
          formMethods.watch('startDate') !== new Date(job.startDate)
            ? formMethods.watch('startDate')
            : undefined,
        userId: job.userId,
        technologies: newTechnologies.length ? newTechnologies : undefined,
      },
    },
  };

  const { updateJob, loading, error } = useUpdateJob({ variables });

  const onSubmit = formMethods.handleSubmit(async () => {
    const { data } = await updateJob();
    if (data) {
      showMessage({
        message: data.updateJobUser.message,
        type: data.updateJobUser.status as 'success' | 'error',
      });
    } else if (error) {
      showMessage({
        message: error.message,
        type: 'error',
      });
    }

    formMethods.reset();
  });

  const handleSelectTechnologies = (
    event: SyntheticEvent<Element, Event>,
    newValue: string[],
  ) => {
    setTechnologies(newValue);
  };

  React.useEffect(() => {
    updateJobForm();
  }, [updateJobForm]);
  return (
    <Dialog
      elementAction={
        <IconButton>
          <Edit />
        </IconButton>
      }
      title="Editar experiência"
      confirmText="Salvar"
      dismissText="Cancelar"
      loading={loading}
      onConfirm={onSubmit}
    >
      <FormProvider {...formMethods}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            padding: '1rem 0',
          }}
        >
          <GridContainer>
            <TextInput name="company" label="Empresa" />
            <TextInput name="name" label="Cargo" />
            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
                width: '100%',
              }}
            >
              <DateInput name="startDate" label="Data de início" />
              {!formMethods.watch('isCurrent') && (
                <DateInput name="endDate" label="Data de término" />
              )}
            </Box>
            <Checkbox
              name="isCurrent"
              label="Emprego atual"
              value={formMethods.watch('isCurrent')}
              onChange={(e) =>
                formMethods.setValue('isCurrent', e.target.checked)
              }
              checked={formMethods.watch('isCurrent')}
            />
          </GridContainer>

          <TextInput name="description" label="Descrição" multiline rows={4} />
          <AutoComplete
            options={technologiesOptions || []}
            value={technologies}
            label="Tecnologias utilizadas"
            onChange={handleSelectTechnologies}
          />
        </Box>
      </FormProvider>
    </Dialog>
  );
}
