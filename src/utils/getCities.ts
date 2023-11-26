import { TStates, citiesByUFMock } from '@/mock/citiesMock';

export const getCities = (state: TStates) => {
  const cities = citiesByUFMock[state] || [];
  const [firstCity, ...restCities] = cities;

  const restCitiesSorted = restCities.sort((a, b) => {
    if (a.name > b.name) return 1;
    return -1;
  });

  const citiesCompleted = [firstCity, ...restCitiesSorted];
  const citiesOnlyNames = citiesCompleted.map((city) => city?.name);
  return { citiesCompleted, citiesOnlyNames };
};
