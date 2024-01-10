import { auth } from "@clerk/nextjs"
import Dropzone from "react-dropzone";


function Dashboard() {
  const { userId } = auth();

  return (
    <div>
      <Dropzone />
    </div>
  )
}

export default Dashboard