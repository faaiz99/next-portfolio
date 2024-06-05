import { octokit } from "./gh.helper";
import { OctokitResponse } from "@octokit/types";
import { supabase } from "./db.helper";
import { UserResponse, User } from "../Types/User";
import {Repo, RepoResponse } from "../Types/Repos";

// User

export const getUserFromGH = async (): Promise<UserResponse> => {
  try {
    return await octokit.request("GET /users/:username", {
      username: `${process.env.NEXT_PUBLIC_USER_NAME}`,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        Accept: "application/vnd.github+json",
      },
    }); 
  } catch (error:any) {
    throw new Error(`Error fetching user from GitHub: ${error.message}`)
  }
};

export const userMapper = (user: UserResponse): User => {
  return {
    id: user.data.id,
    login: user.data.login,
    avatar_url: user.data.avatar_url,
    public_repos: user.data.public_repos,
    followers: user.data.followers,
    following: user.data.following,
    created_at: user.data.created_at,
    updated_at: user.data.updated_at,
  } as User;
};

export const insertUserToDB = async (user: User): Promise<boolean> => {
  const { id, login, public_repos, followers, following, avatar_url } = user;
  const {  error } = await supabase
    .from("users")
    .update({
      login,
      public_repos,
      followers,
      following,
      avatar_url,
      updated_at: new Date().toString(),
    })
    .eq("id", id);
  if (error) return false;
  return true;
};

// Repositories
export const getReposFromGH = async (): Promise<any> => {
  try {
    return await octokit.request("GET /users/{username}/repos", {
      username: `${process.env.NEXT_PUBLIC_USER_NAME}`,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        Accept: "application/vnd.github+json",
      },
    });
  } catch (error:any) {
    throw new Error (`Error fetching repositories from GitHub: ${error.message}`)
  }
};
export const reposMapper = (repos: RepoResponse): Repo[] => {
  const mappedRepos: Repo[] = repos.data.map(({  
    id,
    name,
    html_url,
    description,
    language,
    created_at,
    updated_at,
    forks_count,
    open_issues_count,}: Repo) => ({  id,
      name,
      html_url,
      description,
      language,
      created_at,
      updated_at,
      forks_count,
      open_issues_count,}));
  return mappedRepos;
};

export const insertReposToDB = async (repos: Repo[]): Promise<boolean> => {
  try {
    const { error } = await supabase.from("repos").upsert(repos);
    if (error) {
      console.error('Error inserting repositories to DB:', error);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Unexpected error inserting repositories to DB:', error);
    return false;
  }
};

async function processGHData(): Promise<boolean> {

  try {
    const user = await getUserFromGH();
    const transformedUser = userMapper(user)
    const isUserSuccess = await insertUserToDB(transformedUser);

    const repos = await getReposFromGH();
    const transformedRepos = reposMapper(repos)
    const isRepoSuccess = await insertReposToDB(transformedRepos);
  } catch (error: any) {
    return false
  }
  return true
}

export { processGHData }