import { auth } from "@clerk/nextjs"


function Dashboard() {
  const { userId } = auth();

  return (
    <div>Dashboard (user is {userId})</div>
  )
}

export default Dashboard