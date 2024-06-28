import { useEffect, useState } from "react";
import UserData from "./components/UserData.jsx";

const API = "https://reqres.in/api/users";

function App() {

  const [users, setUsers] = useState({});

  const [isLoaded, setIsLoaded] = useState(false);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setUsers(data["data"]);
      setIsLoaded(true);

      //console.log(data["data"]);
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchUsers(API);
  }, [])

  return <>{
    isLoaded ?
      <div>
        <h4>ID NAME</h4>

        <table>
          <tbody>
            <UserData users={users} />
          </tbody>
        </table>
      </div> : <div><h1>no data</h1></div>
  }
  </>

}

export default App;