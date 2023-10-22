/* eslint-disable @typescript-eslint/no-explicit-any */
import { octokit } from "./gh.helper";
import { OctokitResponse } from "@octokit/types";
import { supabase } from "./db.helper";
import User from "../Types/User";
import Repo from "../Types/Repos";

// User

export const getUserFromGH = async (): Promise<boolean> => {
  let user: OctokitResponse<any>;
  try {
    user = await octokit.request("GET /users/:username", {
      username: `${process.env.NEXT_PUBLIC_USER_NAME}`,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        Accept: "application/vnd.github+json",
      },
    });
    console.log("over to transform User function");
    await transformUser(user);
    //return true
  } catch (error) {
    console.log(error);
  }
  return true
};

export const transformUser = async (
  user: OctokitResponse<any>,
): Promise<void> => {
  const mappedUser: User = (({
    id,
    login,
    avatar_url,
    public_repos,
    followers,
    following,
    created_at,
    updated_at,
  }) => ({
    id,
    login,
    avatar_url,
    public_repos,
    followers,
    following,
    created_at,
    updated_at,
  }))(user.data);

  console.log("over to db handler");
  await insertUserToDB(mappedUser);
};

export const insertUserToDB = async (user: User): Promise<boolean> => {
  const getDate = () => new Date().toString();
  const { id, login, public_repos, followers, following, avatar_url } = user;
  const { error } = await supabase
    .from("users")
    .update({
      // id:user.id,
      login: login,
      public_repos: public_repos,
      followers: followers,
      following: following,
      avatar_url: avatar_url,
      // created_at: created_at,
      updated_at: getDate(),
    })
    .eq("id", id);
  if (error) {
      return false
  }
  return true

};

// Repositories
export const getReposFromGH = async (): Promise<boolean> => {
  let repos: OctokitResponse<any>;
  try {
    repos = await octokit.request("GET /users/{username}/repos", {
      username: `${process.env.NEXT_PUBLIC_USER_NAME}`,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        Accept: "application/vnd.github+json",
      },
    });
    console.log("over to transform Repo function");
    await transformRepo(repos);
  } catch (error) {
    console.log(error);
  }
  return true
};
export const transformRepo = async (
  repos: OctokitResponse<any>,
): Promise<void> => {
  const mappedRepos: Array<any> = [];
  repos.data.forEach((repo: Repo) => {
    const picked = (({
      id,
      name,
      html_url,
      description,
      language,
      created_at,
      updated_at,
      forks_count,
      open_issues_count,
    }) => ({
      id,
      name,
      html_url,
      description,
      language,
      created_at,
      updated_at,
      forks_count,
      open_issues_count,
    }))(repo);
    mappedRepos.push(picked);
  });
  console.log("over to db handler");
  await insertReposToDB(mappedRepos as Repo[]);
};
export const insertReposToDB = async (repos: Repo[]): Promise<void> => {
  const { data} = await supabase.from("repos").upsert(repos);
  if (data)
    console.log('Data updated', data)
};
