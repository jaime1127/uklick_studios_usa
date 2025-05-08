import { Metadata } from "next";
import Login from "../ui/login/Login";

export const metadata: Metadata = {
  title: "About Us | About Us",
};

export default async function Page() {
  return (
    <main>
      <Login />
    </main>
  );
}
