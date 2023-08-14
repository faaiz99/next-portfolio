/* eslint-disable @typescript-eslint/no-unused-vars */
// will recieve a repos prop
'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '../helper/db.helper'
import User from '../Types/User'
import Repo from '../Types/Repos'
import Github from './Github'


const getRepos = async (range: number): Promise<Repo[]> => {
    const { data: repos, error } = await supabase
        .from('repos')
        .select('*')
        .range(0, range)
    if (repos)
        console.log('repos fetched:', repos);
    else if (error)
        console.log('error while fetching repos:', error);
    return repos as Repo[]
}
const getUser = async (): Promise<User> => {
    const { data: users, error } = await supabase
        .from('users')
        .select('*')
    if (error)
        console.log('error while fetching user:', error);
    console.log('user fetched:', users);
    return users![0]
}

const Spinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center rounded-lg ">
            <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 animate-spin text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

// div cannot be inside p tag it will cause hydration errors

const Work: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([])
    const [user, setUser] = useState<User>()

    const [userLoaded, setUserLoaded] = useState(false)
    const [repoLoaded, setRepoLoaded] = useState(false)


    useEffect(() => {
        const populateData = async () => {
            const reposData = await getRepos(10)
            setRepos(reposData)
            setRepoLoaded(true)
            const userData = await getUser()
            setUser(userData)
            setUserLoaded(true)
        }
        populateData()
    }, [])




    return (
        <>
            <p className="mt-12 mb-12 text-4xl text-center font-semibold  text-zinc-200 sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl" id="work">My
                <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-green-500 font-extrabold">Coding </span>
                Crafts.</p>
            <div className="flex flex-wrap justify-center  md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row  gap-4 p-2">
                <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col gap-6 bg-zinc-900 p-8  rounded-3xl h-32 w-32">
                    <p className="text-sm text-center font-semibold  text-zinc-400">Repos</p>
                    {
                        repoLoaded ? <p className="text-zinc-200 text-center text-xl font-extrabold">{repos.length}</p> : <Spinner />
                    }

                </div>
                <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col gap-6 bg-zinc-900 p-8  rounded-3xl h-32 w-32">
                    <p className="text-center font-semibold  text-zinc-400">Followers</p>

                    {
                        userLoaded ? <p className="text-zinc-200 text-center text-xl font-extrabold">
                            {user?.followers}
                        </p> : <Spinner />
                    }

                </div>
                <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col gap-6 bg-zinc-900 p-8  rounded-3xl h-32 w-48">
                    <p className="text-center font-semibold  text-zinc-400">Last Updated</p>
                    {
                        userLoaded ? <p className="text-zinc-200 text-center text-xl font-extrabold">
                            {user?.updated_at.slice(0, 10)}
                        </p> : <Spinner />
                    }

                </div>
                <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col gap-6 bg-zinc-900 p-8  rounded-3xl h-32 w-48">
                    <p className="text-center font-semibold  text-zinc-400">Created</p>
                    {
                        userLoaded ? <p className="text-zinc-200 text-center text-xl font-extrabold">
                            {user?.created_at.slice(0, 10)}
                        </p> : <Spinner />
                    }

                </div>

            </div>
            <div className="justify-center flex mt-12 px-12">
                <Github />
            </div>
            <div className="overflow-x-auto mt-12 mb-12 px-12  lg:flex lg:justify-center" >
                <table className=" text-sm text-left text-gray-400 rounded-lg sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6" >
                    <thead className="text-xs uppercase bg-zinc-800 text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Project
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Description
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Open Issues
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Forks

                                </div>
                            </th>
                            <th scope="col" className="px-9 py-3">
                                <div className="flex items-center">
                                    Created At

                                </div>
                            </th>
                            <th scope="col" className="px-9 py-3">
                                <div className="flex items-center">
                                    Updated At
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Github Link
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {repos.map(repo => {
                            return (<React.Fragment key={repo.id}>
                                <tr className=" border-b bg-zinc-700 ">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white"  >
                                        {repo.name}
                                    </th>
                                    <td className="px-6 py-4"  >
                                        {repo.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {repo.open_issues_count}
                                    </td>
                                    <td className="px-6 py-4" >
                                        {repo.forks_count}
                                    </td>
                                    <td className="px-6 py-4" >
                                        {repo.created_at.slice(0, 10)}
                                    </td>
                                    <td className="px-6 py-4" >
                                        {repo.updated_at.slice(0, 10)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={repo.html_url} target="_blank" className="font-medium text-blue-600  hover:font-bold hover:text-blue-400" rel="noreferrer">Link</a>
                                    </td>
                                </tr>
                            </React.Fragment>)
                        })}
                    </tbody>
                </table>
            </div>

        </>

    );
}

export default Work;