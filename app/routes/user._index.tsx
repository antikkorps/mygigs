import React from "react"

const UserProfile: React.FC = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software developer with a passion for open-source projects.",
    avatarUrl: "https://via.placeholder.com/150",
  }

  return (
    <div className="p-5 max-w-lg mx-auto">
      <div className="flex flex-col items-center text-center">
        <img
          src={user.avatarUrl}
          alt="User Avatar"
          className="rounded-full w-36 h-36 object-cover my-5"
        />
        <h1 className="mt-4 text-2xl font-semibold">{user.name}</h1>
        <p className="mt-2 text-gray-600">{user.email}</p>
        <p className="mt-2 text-gray-600">{user.bio}</p>
      </div>
    </div>
  )
}

export default UserProfile
