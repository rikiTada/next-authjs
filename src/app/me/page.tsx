/* eslint-disable @next/next/no-img-element */
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/me");
  }

  return (
    <div className="mx-4">
      <h1 className="text-xl font-semibold my-6">You are session data.</h1>
      <div className="flex gap-8">
        <div>
          <p>id: {session.user.id}</p>
          <p>name: {session.user.name}</p>
          <p>email: {session.user.email}</p>
        </div>
        <img
          alt="user image"
          className="size-20 min-h-full aspect-square rounded-full"
          src={session.user.image!}
        />
      </div>
      <div className="my-4 p-4 bg-muted rounded overflow-x-auto">
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>

      {/* <SignoutButton
        signOut={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      /> */}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
        className="w-full"
      >
        <Button className="w-full">Sign out</Button>
      </form>
    </div>
  );
}
