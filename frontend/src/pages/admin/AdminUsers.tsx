import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/users";
import SearchBar from "../../components/SearchBar";
import UsersTable from "../../components/UsersTable";
import { User } from "../../types/user";

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.first_name.toLowerCase().includes(search.toLowerCase()) ||
      user.last_name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getAllUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center">
      <div className="py-6 w-full max-w-7xl mx-auto space-y-8">
        <SearchBar search={search} setSearch={setSearch} />
        <UsersTable users={filteredUsers} />
      </div>
    </div>
  );
}
