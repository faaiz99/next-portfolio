export  interface User {
  login: string;
  id: number;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface UserResponse {
  data: User
}