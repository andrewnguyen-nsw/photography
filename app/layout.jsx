import "@styles/globals.css";

import Nav from "@components/Nav";

export const metadat = {
  title: "AndrewNguyen's Photography Gallery",
  description: "AndrewNguyen's Photography Gallery & Portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="main">

        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
