"use client"

import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export const RouteListener = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const router = useRouter();

//   useEffect(() => {
//     if (pathname === "/") {
//       router.replace("/home");
//     }
//   }, [pathname]);

  return <>{children}</>;
};
