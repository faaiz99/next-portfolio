import {Octokit} from "@octokit/rest"
export const octokit = new Octokit({
  auth: `${process.env.NEXT_PUBLIC_TOKEN}`,
  baseUrl: "https://api.github.com",
});
