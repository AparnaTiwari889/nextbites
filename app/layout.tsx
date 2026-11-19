
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Discover Delicious Recipes",
  description: "Discover easy and delicious recipes with NextBites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="nav-container">
            <a href="/" className="logo">
              Next<span>Bites</span>.
            </a>

            <nav>
              <a href="/">Home</a>
              <a href="#recipes">Recipes</a>
              <a href="#about">About</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="footer" id="about">
          <p>© 2026 NextBites. Made with love for food lovers.</p>
        </footer>
      </body>
    </html>
  );
}
