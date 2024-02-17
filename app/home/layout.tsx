import { PropsWithChildren } from "react";
import { Layout } from "@/components/layout/layout";

export default function HomeLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>;
}
