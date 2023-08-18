'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '../helper/db.helper'
import { Spinner } from './Spinner'
import User from '../Types/User'
import Repo from '../Types/Repos'
import Github from './Github'

const getRepos = async (range: number): Promise<Repo[]> => {
    const { data: repos, error } = await supabase
        .from('repos')
        .select('*')
        .range(0, range)
    if (error)
        console.log('error while fetching repos:', error);
    return repos as Repo[]
}

const getUser = async (): Promise<User> => {
    const { data: users, error } = await supabase
        .from('users')
        .select('*')
    if (error)
        console.log('error while fetching user:', error);
    return users![0]
}

/* div cannot be inside p tag it will cause hydration errors */

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
                <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-green-500 font-extrabold"> Coding </span>
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