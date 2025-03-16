import PlayerInput from "./components/PlayerInput";
import RoleSelector from "./components/RoleSelector";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Le Jeu du Loup</h1>
      <PlayerInput />
      <RoleSelector />
    </main>
  );
}
