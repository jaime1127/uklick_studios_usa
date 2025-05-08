import { Metadata } from "next";
import Login from "../ui/login/Login";

export const metadata: Metadata = {
  title: "Login",
};

export default async function Page() {
  return (
    <main>
      <Login />
    </main>
  );
}
