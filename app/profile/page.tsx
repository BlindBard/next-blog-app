import { Metadata } from "next";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authConfig } from "@/app/config/auth";

export const metadata: Metadata = {
  title: "Profile | Next App"
};
export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h3>Profile of {session?.user?.name}</h3>
      {session?.user?.image && <Image src={session.user.image} width={100} height={100} alt="User image" />}
    </div>
  );
}
