import Header from "./components/Header";
import Entry from "./components/Entry";
import journalEnteries from "./journalEnteries";
import "./index.css";

export default function App() {
  const entryData = journalEnteries.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });

  return (
    <>
      <Header />
      {entryData}
    </>
  );
}
