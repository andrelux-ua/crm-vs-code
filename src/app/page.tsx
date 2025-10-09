import ActiveLabel from "./components/status-label";
import NotActiveLabel from "./components/not-active-label";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl text-red-500">Home Page Project Next.js</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not Active</NotActiveLabel>
    </main>
  );
}
