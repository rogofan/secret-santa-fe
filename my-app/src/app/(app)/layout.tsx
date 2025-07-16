// "use client";
// import { useSelector } from "react-redux";
// import Header from "../components/Header";
// import { selectUser } from "../store/authSlice";

// export default function AppLayout({ children }: { children: React.ReactNode }) {
//   const user = useSelector(selectUser);

//   if (!user) {
//     třeba redirect, nebo fallback
//     return <div>Načítání…</div>;
//   }

//   return (
//     <html lang="cs">
//       <body>
//         <Header user={user} />
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }
