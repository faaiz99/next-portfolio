'use client'
// will recieve a repos prop
import React from 'react'
import Repos from '../Types/Repos'
import User from '../Types/User'
const Work:React.FC = () => {
   
    const repos: Repos[] = [
        {
            "id": 502267298,
            "name": "A-three-production",
            "html_url": "https://github.com/faaiz99/A-three-production",
            "description": "to run the project use CMD and go to project's directory and run command php artisan serve. ",
            "created_at": "2022-06-11T06:16:19Z",
            "updated_at": "2023-07-14T08:07:08Z",
            "language":"php",
            "forks_count": 0,
            "open_issues_count": 0
        },
    ]

    const user: User = {
        "login": "faaiz99",
        "id": 44613754,
        "node_id": "MDQ6VXNlcjQ0NjEzNzU0",
        "avatar_url": "https://avatars.githubusercontent.com/u/44613754?v=4",
        "url": "https://api.github.com/users/faaiz99",
        "html_url": "https://github.com/faaiz99",
        "public_repos": 18,
        "followers": 5,
        "following": 6,
        "created_at": "2018-10-30T15:15:56Z",
        "updated_at": "2023-08-08T05:47:03Z"
    }



    return (
        <>
            <p className="mt-12 mb-12 text-4xl text-center font-semibold  text-zinc-200 sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl" id="work">My
                <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-green-500 font-extrabold">      Coding </span>
                Crafts</p>
            <div className="flex flex-wrap justify-center  md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row  gap-4 p-2">
                <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col gap-6 bg-zinc-900 p-8  rounded-3xl h-48 w-48">
                    <p className="text-xl text-center font-semibold  text-zinc-400">Total Repos</p>

                    <p className="text-zinc-200 text-center text-4xl font-extrabold">

                        {repos.length}
                    </p>

                </div>
                <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col gap-6 bg-zinc-900 p-8  rounded-3xl h-48 w-48">
                    <p className="text-xl text-center font-semibold  text-zinc-400">Followers</p>

                    <p className="text-zinc-200 text-center text-4xl font-extrabold">
                        {user.followers}
                    </p>
                </div>
                <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col gap-6 bg-zinc-900 p-8  rounded-3xl h-48 w-96">
                    <p className="text-xl text-center font-semibold  text-zinc-400">Last Updated</p>

                    <p className="text-zinc-200 text-center text-4xl font-extrabold">
                        {user.updated_at.slice(0, 10)}
                    </p>
                </div>
                <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col gap-6 bg-zinc-900 p-8  rounded-3xl h-48 w-96">
                    <p className="text-xl text-center font-semibold  text-zinc-400">Account Created</p>

                    <p className="text-zinc-200 text-center text-4xl font-extrabold">
                        {user.created_at.slice(0, 10)}
                    </p>
                </div>
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