"use client";
import { Button } from "@/components/ui/button";

export const SignoutButton = ({ signOut }: { signOut: () => void }) => {
  return <Button onClick={signOut}>サインアウト</Button>;
};
