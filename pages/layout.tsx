import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import './globals.css'; // globalne style

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head />
      <body className="bg-gray-100">
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
