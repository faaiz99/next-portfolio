"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../../helper/db.helper";
import { Repo } from "../../Types/Repos";

type Response = {
  data: {
    repos: Repo[];
    totalRepos: number;
  };
};

const Table: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [range, setRange] = useState<number>(5);
  const [start, setStart] = useState<number>(0);
  const [originalRepos, setOriginalRepos] = useState<Repo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [totalRepos, setTotalRepos] = useState<number>(0);

  const fetchRepositories = async (
    start: number,
    range: number,
  ): Promise<Response> => {
    const response = await fetch("/api/repositories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ start, range }),
    });
    return response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchRepositories(start, range);
        setTotalRepos(res.data.totalRepos);
        setRepos(res.data.repos);
        setOriginalRepos(res.data.repos);
        setPage(1);
      } catch (error) {
        console.error("Error fetching repositories");
      }
    };
    fetchData();
  }, [start, range]);

  const handlePagination = async (
    pageNumber: number,
    action: string,
  ): Promise<void> => {
    if (page < 1) {
      setDisabled(true);
      return;
    }

    setDisabled(false);
    let newPage = page;

    if (action === "inc" && page < Math.ceil(totalRepos / range)) {
      newPage = page + 1;
    } else if (action === "dec" && page > 1) {
      newPage = page - 1;
    }

    if (newPage === page) {
      return;
    }
    setPage(newPage);
    const start = (newPage - 1) * range;

    try {
      const response = await fetchRepositories(start, range);
      setOriginalRepos(response.data.repos);
      setRepos(response.data.repos);
    } catch (error) {
      console.error("Error fetching repositories");
    }
  };

  const handleSearch = (searchKey: string): void => {
    const trimmedKey = searchKey.trim().toLowerCase();
    if (!trimmedKey) {
      setRepos(originalRepos);
      return;
    }
    const filteredRepos: Repo[] = repos.filter(({ name }) =>
      name.toLowerCase().includes(trimmedKey),
    );
    setRepos(filteredRepos);
  };
  return (
    <>
      <p
        className="mt-12 mb-12 text-4xl text-center font-semibold  text-zinc-200 sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl"
        id="work"
      >
        <span className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-green-500 font-extrabold">
          {" "}
          Repositories{" "}
        </span>
      </p>
      <div className="flex flex-row mt-4 px-12 justify-around">
        <div className="flex">
          {" "}
          Show
          <label
            htmlFor="repos"
            className="bg-zinc-400 flex text-sm font-medium t text-zinc-200"
          />
          <select
            id="repos"
            onChange={(e) => {
              setRange(parseInt(e.target.value));
            }}
            className="mr-2 ml-2  border mb-6 w-fit text-sm rounded-lg block  p-1 bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-zinc-200 focus:ring-zinc-500 focus:border-zinc-500"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={totalRepos}>All</option>
          </select>
          entries
        </div>
        <div className=" ml-4">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-zinc-900 sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-zinc-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              onChange={(e) => handleSearch(e.target.value)}
              className="block w-full p-1.5 pl-10 text-sm  border  rounded-lg   bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-zinc-200 focus:ring-zinc-500 focus:border-zinc-500"
              placeholder="Search Repositories..."
              required
            ></input>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mb-1 px-12  lg:flex lg:justify-center">
        <table className=" text-sm text-left text-gray-400 rounded-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6">
          <thead className="text-xs uppercase bg-zinc-800 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Project
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Description</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Open Issues</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Forks</div>
              </th>
              <th scope="col" className="px-9 py-3">
                <div className="flex items-center">Created At</div>
              </th>
              <th scope="col" className="px-9 py-3">
                <div className="flex items-center">Updated At</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Github Link</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => {
              return (
                <React.Fragment key={repo.id}>
                  <tr className=" border-b bg-zinc-700 ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                    >
                      {repo.name}
                    </th>
                    <td className="px-6 py-4">{repo.description}</td>
                    <td className="px-6 py-4">{repo.open_issues_count}</td>
                    <td className="px-6 py-4">{repo.forks_count}</td>
                    <td className="px-6 py-4">
                      {repo.created_at.slice(0, 10)}
                    </td>
                    <td className="px-6 py-4">
                      {repo.updated_at.slice(0, 10)}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        className="font-medium text-blue-600  hover:font-bold hover:text-blue-400"
                        rel="noreferrer"
                      >
                        Link
                      </a>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* TODO: Implement pagination */}
      {/* <div className="inline">
        <div className="mt-4 space-x-8 flex justify-center">
          <button
            disabled={disabled}
            className="p-1 px-3 rounded-lg bg-zinc-700 hover:border-zinc-200 hover:bg-zinc-600 focus:ring-1 focus:ring-zinc-200"
            value="inc"
            onClick={() => {
              handlePagination(page, "dec");
            }}
          >
            Prev
          </button>
          <p>{page}</p>
          <button
            className="p-1 px-3 rounded-lg bg-zinc-700 hover:border-zinc-200 hover:bg-zinc-600 focus:ring-1 focus:ring-zinc-200"
            value="dec"
            onClick={() => {
              handlePagination(page, "inc");
            }}
          >
            Next
          </button>
        </div>
      </div>  */}
    </>
  );
};
export default Table;
