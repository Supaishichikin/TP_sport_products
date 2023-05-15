import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/users";
import SearchBar from "../../components/SearchBar";
import UsersTable from "../../components/UsersTable";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center">
      <div className="py-6 w-full max-w-7xl mx-auto space-y-8">
        <SearchBar />
        <UsersTable users={users} />
      </div>
    </div>
  );
}
