import { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar></Sidebar>
      <div className="flex-1 overflow-y-auto">
        <Header></Header>
        <div className="divider m-0"></div> 
        <div className="p-4 overflow-auto">{children}</div>
      </div>
    </div>
  );
};
