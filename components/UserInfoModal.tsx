import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";

interface UserInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (userInfo: {
    username: string;
    age: number;
    dob: string;
    location: string;
    role: string;
  }) => void;
}

const UserInfoModal= ({
  isOpen,
  onClose,
  onSave,
} : UserInfoModalProps) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    age: "",
    dob: "",
    location: "",
    role: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave({ ...userInfo, age: Number(userInfo.age) });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Complete Your Profile</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userInfo.username}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={userInfo.age}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={userInfo.dob}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={userInfo.location}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={userInfo.role}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default UserInfoModal;
