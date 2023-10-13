import { Inter } from "next/font/google";
import Posts from "./components/Posts";
const inter = Inter({ subsets: ["latin"] });

import MyProfilePic from "./components/MyProfilePic";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className={`mx-auto ${inter.className}`}>
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Next JS Site!{" "}
        <span className="whitespace-nowarp">
          I'm <span className="font-bold">Ben</span>
        </span>
      </p>
      <Posts />
    </div>
  );
}
