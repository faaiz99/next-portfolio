import { octokit } from "./gh.helper";
import { OctokitResponse } from "@octokit/types";
import { supabase } from "./db.helper";
import User from "../Types/User";
import Repo from "../Types/Repos";

// User

export const getUserFromGH = async (): Promise<boolean> => {
  try {
    const user: OctokitResponse<any> = await octokit.request("GET /users/:username", {
      username: `${process.env.NEXT_PUBLIC_USER_NAME}`,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        Accept: "application/vnd.github+json",
      },
    });
    await transformUser(user);
    return true;
  } catch (error) {
    console.error('Error fetching user from GitHub:', error);
    return false;
  }
};

export const transformUser = async (user: OctokitResponse<any>): Promise<void> => {
  const {
    id,
    login,
    avatar_url,
    public_repos,
    followers,
    following,
    created_at,
    updated_at,
  } = user.data;

  const mappedUser: User = {
    id,
    login,
    avatar_url,
    public_repos,
    followers,
    following,
    created_at,
    updated_at,
  };

  await insertUserToDB(mappedUser);
};

export const insertUserToDB = async (user: User): Promise<boolean> => {
  const { id, login, public_repos, followers, following, avatar_url } = user;
  const { error } = await supabase
    .from("users")
    .update({
      login: login,
      public_repos: public_repos,
      followers: followers,
      following: following,
      avatar_url: avatar_url,
      updated_at: new Date().toString(),
    })
    .eq("id", id);
  if (error) {
    return false;
  }
  return true;
};

// Repositories
export const getReposFromGH = async (): Promise<boolean> => {
  try {
    const repos: OctokitResponse<any> = await octokit.request("GET /users/{username}/repos", {
      username: `${process.env.NEXT_PUBLIC_USER_NAME}`,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        Accept: "application/vnd.github+json",
      },
    });
    await transformRepo(repos);
    return true;
  } catch (error) {
    console.error('Error fetching repositories from GitHub:', error);
    return false;
  }
};
export const transformRepo = async (repos: OctokitResponse<any>): Promise<void> => {
  const mappedRepos: Repo[] = repos.data.map((repo: Repo) => {
    const {
      id,
      name,
      html_url,
      description,
      language,
      created_at,
      updated_at,
      forks_count,
      open_issues_count,
    } = repo;

    return {
      id,
      name,
      html_url,
      description,
      language,
      created_at,
      updated_at,
      forks_count,
      open_issues_count,
    };
  });

  await insertReposToDB(mappedRepos);
};
export const insertReposToDB = async (repos: Repo[]): Promise<boolean> => {
  try {
    const { data, error } = await supabase.from("repos").upsert(repos);
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

