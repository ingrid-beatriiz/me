import Profile from "../components/Profile";
import "./globals.css"; // Importa o arquivo de estilos globais

export default function Home() {
  return (
    <main className="container">
      <div className="profile-card">
        <h1>Site criado para a disciplina Programação Front-End</h1>
        <Profile />
      </div>
    </main>
  );
}