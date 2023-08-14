import React from 'react'
import GitHubCalendar from 'react-github-calendar';


const Github = () => {
  return (
    <GitHubCalendar username={process.env.NEXT_PUBLIC_USER_NAME} />
  )
}

export default Github