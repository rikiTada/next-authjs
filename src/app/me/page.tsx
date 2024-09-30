import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/me");
  }

  return (
    <div>
      {session.user.id}
      {session.user.name}
      {session.user.email}
      <img width={14} src={session.user.image!} />

      {/*
      <SignoutButton
        signOut={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      /> */}
    </div>
  );
}
