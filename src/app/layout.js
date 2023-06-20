import "./globals.scss";

export const metadata = {
  title: "Dheeresh Agarwal",
  description: "Created by Dheeresh Agarwal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/39c9d22d07.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.6.1/ci.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css"
          integrity="sha512-csw0Ma4oXCAgd/d4nTcpoEoz4nYvvnk21a8VA2h2dzhPAvjbUIK6V3si7/g/HehwdunqqW18RwCJKpD7rL67Xg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
