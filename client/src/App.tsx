import Conversation from "./Conversation.tsx";
import Sidebar from "./Sidebar.tsx";

function App() {


  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-3">
          <Sidebar/>
        </div>
        <div className="col-9">
          <Conversation/>
        </div>
      </div>
    </div>
  )
}

export default App
