import { deleteUser, updateUser } from "../api/users";
import { User } from "../types/user";

export default function UserRow({
  _id,
  first_name,
  last_name,
  phone,
  email,
  role,
}: User) {
  async function handleEdit() {
    alert("Not implemented yet");
  }

  async function handleDelete() {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    const data = await deleteUser(_id);
    console.log(data);

    // TODO: Mettre à jour la liste des utilisateurs
    window.location.reload();
  }

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
      >
        <div className="">
          <div className="text-base font-semibold">{`${first_name} ${last_name}`}</div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </th>
      <td className="px-6 py-4">{phone}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div
            className={`h-2.5 w-2.5 rounded-full ${
              role === "USER" ? "bg-green-500" : "bg-blue-500"
            } mr-2`}
          ></div>
          {role}
        </div>
      </td>
      <td className="px-6 py-4">
        <button
          type="button"
          onClick={handleEdit}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Edit user
        </button>
      </td>
      <td className="px-6 py-4">
        <button
          type="button"
          onClick={handleDelete}
          className="text-sm font-medium text-red-600 hover:underline"
        >
          Delete user
        </button>
      </td>
    </tr>
  );
}
