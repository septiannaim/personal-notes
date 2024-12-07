import { useEffect, useState } from "react";
import NoteBody from "./components/NoteBody";
import NoteFooter from "./components/NoteFooter";
import NoteHeader from "./components/NoteHeader";
import { getInitialData } from "./utils";

function App() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const notesAll = (searchNotes || notes).filter((note) => !note.archived);
  const notesArchive = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <div className="note-app">
      <NoteHeader search={query} setQuery={setQuery} />
      <NoteBody
        notesAll={notesAll}
        notesArchive={notesArchive}
        setNotes={setNotes}
      />
      <NoteFooter />
    </div>
  );
}

export default App;
