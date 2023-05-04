import ScrollableTabsButton from "@components/ScrollableTabsButton";
import { Outlet } from "react-router-dom";
// Rename fichier

export default function Home() {
  return (
    <>
      <ScrollableTabsButton />
      <Outlet />
    </>
  );
}
