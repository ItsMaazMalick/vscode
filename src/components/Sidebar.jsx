import { CircleUserRound, Files } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="bg-[#2b2a2a] w-[400px] h-[calc(100vh-52px)] flex text-white">
      <div className="flex flex-col justify-between p-2 bg-[#474647]">
        <Files size={30} />
        <CircleUserRound size={30} />
      </div>
      <div>Right</div>
    </div>
  );
}
