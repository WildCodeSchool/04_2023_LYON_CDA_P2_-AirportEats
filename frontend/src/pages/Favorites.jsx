import BackButton from "@components/BackButton";

export default function Favorites() {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "right", marginRight: 50 }}
      >
        <BackButton />
      </div>
      <h1>My Title</h1>
      <p>My favs</p>
    </>
  );
}
