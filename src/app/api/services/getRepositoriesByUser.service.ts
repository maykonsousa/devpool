interface GithubRepository {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks: number;
  html_url: string;

}

export interface MappedRepository {
  githubId: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export const getRepositoriesByUser = async (username: string) => {
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=name`;
  const data = await fetch(url).then((response) => response.json());
  const repositories = data.map((repository: GithubRepository):MappedRepository => ({
    githubId: repository.id,
    name: repository.name,
    description: repository.description,
    language: repository.language,
    stars: repository.stargazers_count,
    forks: repository.forks,
    url: repository.html_url,

  }));
  return repositories;
};
