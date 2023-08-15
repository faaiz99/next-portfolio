/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */



import { octokit } from './gh.helper'
import { OctokitResponse } from '@octokit/types'
import { supabase } from './db.helper'
import User from '../Types/User'
import Repo from '../Types/Repos'


// User 

export const getUserFromGH = async (): Promise<void> => {
  let user: OctokitResponse<any>
  try {
    user = await octokit.request('GET /users/:username', {
      username: `${process.env.NEXT_PUBLIC_USER_NAME}`,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'Accept': 'application/vnd.github+json'
      }
    })
    console.log('over to transform User function')
    await transformUser(user)
  } catch (error) {
    console.log(error)
  }
}

export const transformUser = async (user: OctokitResponse<any>): Promise<void> => {
  let mappedUser: User
  mappedUser = (({
    id,
    login,
    avatar_url,
    public_repos,
    followers,
    following,
    created_at,
    updated_at }) => ({
      id,
      login,
      avatar_url,
      public_repos,
      followers,
      following,
      created_at,
      updated_at,

    }))(user.data);
  console.log('over to db handler')
  await insertUserToDB(mappedUser)
}

export const insertUserToDB = async (user: User): Promise<void> => {
  const { data, error } = await supabase
    .from('users')
    .update({
      // id:user.id,
      login: user.login,
      public_repos: user.public_repos,
      followers: user.followers,
      following: user.following,
      avatar_url: user.avatar_url,
      // created_at:user.created_at,
      updated_at: user.updated_at,
    }).eq('id', user.id)
    .select()
  if (data)
    console.log('Data Updated Successfully:', data)
  else if (error) {
    console.log('Data Could not be Updated', error)
  }
}

// Repositories 
export const getReposFromGH = async (): Promise<void> => {
  let repos: OctokitResponse<any>
  try {
    repos = await octokit.request('GET /users/{username}/repos', {
      username: `${process.env.NEXT_PUBLIC_USER_NAME}`,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'Accept': 'application/vnd.github+json'
      }
    })
    console.log('over to transform Repo function')
    await transformRepo(repos)
  } catch (error) {
    console.log(error)
  }

}
export const transformRepo = async (repos: OctokitResponse<any>): Promise<void> => {
  let mappedRepos: Array<any> = []
  repos.data.forEach((repo: Repo) => {
    let picked = (({
      id,
      name,
      html_url,
      description,
      language,
      created_at,
      updated_at,
      forks_count,
      open_issues_count }) => ({
        id,
        name,
        html_url,
        description,
        language,
        created_at,
        updated_at,
        forks_count,
        open_issues_count
      }))(repo);
    mappedRepos.push(picked)
  })
  console.log('over to db handler')
  await insertReposToDB(mappedRepos as Repo[])
}
export const insertReposToDB = async (repos: Repo[]): Promise<void> => {

  const { data, error } = await supabase
    .from('repos')
    .upsert(repos)
  if (data)
    console.log('Data Updated Successfully:', data)
  else if (error) {
    console.log('Data Could not be Updated', error)
  }
}
