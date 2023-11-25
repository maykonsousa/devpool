import {
  CalendarMonth,
  Check,
  Engineering,
  Handyman,
} from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react';
import { IJob } from '@/hooks';
import { formatDate } from '@/utils';
import {
  DateContainer,
  IndicatorContainer,
  IndicatorIcon,
  JobContainer,
  JobContent,
  JobDate,
  JobDescription,
  JobInformations,
  JobOffice,
  JobTitle,
  TechItem,
  TechsContainer,
} from './ExperienceCard.styles';

interface IExperienceCard {
  job: IJob;
}

export function ExperienceCard({ job }: IExperienceCard) {
  return (
    <JobContainer>
      <IndicatorContainer>
        <IndicatorIcon>
          <Handyman />
        </IndicatorIcon>

        <JobContent elevation={3}>
          <JobTitle>{job.company}</JobTitle>

          <JobInformations>
            <JobOffice avatar={<Engineering />} label={job.name} />

            <DateContainer>
              <JobDate>
                <CalendarMonth /> {formatDate(job.startDate)}
              </JobDate>

              <JobDate>
                {job.isCurrent ? <Check /> : <CalendarMonth />}
                {job.isCurrent ? 'Atual' : formatDate(job.endDate)}
              </JobDate>
            </DateContainer>
          </JobInformations>

          <JobDescription>
            {job.description.length > 200
              ? `${job.description.substring(0, 200)}...`
              : job.description}
          </JobDescription>

          <Divider />

          <TechsContainer>
            {job.technologies.map((tech) => (
              <TechItem key={tech.id} label={tech.name} />
            ))}
          </TechsContainer>
        </JobContent>
      </IndicatorContainer>
    </JobContainer>
  );
}
