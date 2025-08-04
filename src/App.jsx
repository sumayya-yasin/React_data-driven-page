import Header from "./components/Header";
import Entry from "./components/Entry";
import Footer from "./components/Footer";
import journalEnteries from "./journalEnteries";
import "./index.css";

export default function App() {
  const entryData = journalEnteries.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flexGrow: 1 }}>
      {entryData}
      </div>      
      <Footer />
    </div>
  );
}
