import x from "../assests/x.webp";
import gitHub from "../assests/githubb.png";
import instagram from "../assests/instagram.png";
import Image from "next/image";

export default function Social() {
  return (
    <div className="flex gap-24">
      <div>
        <Image className="w-8 h-8 rounded-full" src={x} alt="x logo" />
      </div>
      <div>
        <Image className="w-8 h-8 rounded-full" src={instagram} alt="x logo" />
      </div>
      <div>
        <Image className="w-8 h-8 rounded-full" src={gitHub} alt="x logo" />
      </div>
    </div>
  );
}
