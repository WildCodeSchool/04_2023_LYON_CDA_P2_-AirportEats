import ScrollableTabsButton from "@components/ScrollableTabsButton";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <ScrollableTabsButton />
      <Outlet />
    </>
  );
}
