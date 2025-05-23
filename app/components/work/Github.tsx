import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const username: string = process.env.NEXT_PUBLIC_USER_NAME ?? "undefined";
  return (
    <div data-testid="github">
      <GitHubCalendar username={"faaiz-backend-II"} />
    </div>
  );
};

export default Github;
