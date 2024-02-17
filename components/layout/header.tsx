"use client";
import { ThemeSelect } from "../theme-select";
import { Notification } from "../notification";
import { LayougSettingModal } from "./layout-setting-modal";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const pathname = usePathname();

  const [title, setTitle] = useState<string>("");

  const whiteList = ["/", "/login"];

  useEffect(() => {
    if (whiteList.includes(pathname)) {
      setTitle("");
    } else {
      setTitle(pathname.split("/")[1] ?? "");
    }
  }, [pathname]);

  return (
    <div className="navbar bg-base-100 sticky top-0 pl-4 pr-4 pb-0">
      <div className="flex-1">
        <a className="text-xl"> {title} </a>
      </div>
      <div className="flex-none gap-2">
        <LayougSettingModal />

        <div className="form-control">
          <ThemeSelect />
        </div>
        <Notification></Notification>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-8 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
