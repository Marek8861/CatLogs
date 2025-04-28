export default function Sidebar() {
    return (
      <div className="w-64 bg-blue-800 text-white min-h-screen p-4">
        <h2 className="text-2xl font-bold mb-4">CatLogs</h2>
        <ul>
          <li><a href="/" className="block py-2 px-4 hover:bg-blue-700">Strona główna</a></li>
          <li><a href="/dashboard" className="block py-2 px-4 hover:bg-blue-700">Dashboard</a></li>
          <li><a href="/post/1" className="block py-2 px-4 hover:bg-blue-700">Posty</a></li>
          <li><a href="/user/marek" className="block py-2 px-4 hover:bg-blue-700">Mój profil</a></li>
        </ul>
      </div>
    );
  }
  