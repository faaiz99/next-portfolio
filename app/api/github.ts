/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */

import { octokit } from '../helper/gh.helper'
import { OctokitResponse } from '@octokit/types'
import { supabase } from '../helper/db.helper'
import User from '../Types/User'
import Repo from '../Types/Repos'

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
  } catch (error) {
    console.log(error.message)
  }
  console.log('over to transform function')
  transformUser(user)
}

export const transformUser = async (user: OctokitResponse<any>): Promise<void> => {

  const keys = ['login', 'id', 'node_id', 'avatar_url', 'url', 'html_url',
    'public_repos', 'followers', 'following', 'created_at', 'updated_at']
  let res = Object.fromEntries(keys.map((key) => [key, user[key]]));
  //console.log(JSON.stringify(res, null, 4));
  insertUserToDB(res as User)
}

export const insertUserToDB = async (user:User): Promise<void> => {

}


export const getReposFromGH = async (): Promise<OctokitResponse<any>> => {
  let repos: OctokitResponse<any>
  try {
    repos = await octokit.request('GET /users/{username}/repos', {
      username: `${process.env.NEXT_PUBLIC_USER_NAME}`,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'Accept': 'application/vnd.github+json'
      }
    })

    console.log(repos);
  } catch (error) {
    console.log(error.message)
  }
  return repos.data
}

export const transformRepo = () => {


}

export const insertReposToDB = async (): Promise<void> => {
  console.log('hehe')

  //https://api.github.com/users/faaiz99/repos
}
