"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../../helper/db.helper";
import { Spinner } from "../Spinner";
import {User} from "../../Types/User";
import Github from "./Github";

const getUser = async (): Promise<User> => {
  const { data: users, error } = await supabase.from("users").select("*");
  if (error) console.log("error while fetching user:", error);
  return users![0];
};

const getTotalRepos = async (): Promise<number> => {
  const { data: repos, error } = await supabase
    .from("repos")
    .select("id", { count: "exact" });
  if (error) console.log(error);
  const length: number | undefined = repos?.length;
  return length as number;
};

/* div cannot be inside p tag it will cause hydration errors */

const Work: React.FC = () => {
  const [user, setUser] = useState<User>();
  const [userLoaded, setUserLoaded] = useState<boolean>(false);
  const [repoLoaded, setRepoLoaded] = useState<boolean>(false);
  const [totalRepos, setTotalRepos] = useState<number>(0);

  useEffect(() => {
    async function populateData() {
      const userData = await getUser();
      setUser(userData);
      setUserLoaded(true);
      const reposCount = await getTotalRepos();
      setTotalRepos(reposCount);
      setRepoLoaded(true);
    }
    populateData();
  }, []);

  return (
    <>
      <p
        className="mt-12 mb-12 text-4xl text-center font-semibold  text-zinc-200 sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl"
        id="work"
      >
        <span className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-green-500 font-extrabold">
          {" "}
          Github{" "}
        </span>
        Stats.
      </p>
      <div className="flex flex-wrap justify-center  md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row  gap-4 p-2">
        <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col gap-6 bg-zinc-900 p-8  rounded-3xl h-32 w-32">
          <p className="text-sm text-center font-semibold  text-zinc-400">
            Repos
          </p>
          {repoLoaded ? (
            <p className="text-zinc-200 text-center text-xl font-extrabold">
              {totalRepos}
            </p>
          ) : (
            <Spinner />
          )}
        </div>
        <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col gap-6 bg-zinc-900 p-8  rounded-3xl h-32 w-32">
          <p className="text-center font-semibold  text-zinc-400">Followers</p>

          {userLoaded ? (
            <p className="text-zinc-200 text-center text-xl font-extrabold">
              {user?.followers}
            </p>
          ) : (
            <Spinner />
          )}
        </div>
        <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col gap-6 bg-zinc-900 p-8  rounded-3xl h-32 w-auto">
          <p className="text-center font-semibold  text-zinc-400">
            Last Updated
          </p>
          {userLoaded ? (
            <p className="text-zinc-200 text-center text-xl font-extrabold">
              {user?.updated_at.slice(0, 15)}
            </p>
          ) : (
            <Spinner />
          )}
        </div>
        <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col gap-6 bg-zinc-900 p-8  rounded-3xl h-32 w-auto">
          <p className="text-center font-semibold  text-zinc-400">Created</p>
          {userLoaded ? (
            <p className="text-zinc-200 text-center text-xl font-extrabold">
              {user?.created_at.slice(0, 15)}
            </p>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
      <div className="justify-center flex mt-12 px-12">
        <Github />
      </div>
    </>
  );
};

export default Work;
