export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  created_at: string;
  updated_at: string;
  forks_count: number;
  open_issues_count: number;
}

export interface RepoResponse {
  data: Repo[];
}
[];
