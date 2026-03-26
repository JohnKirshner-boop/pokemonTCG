import { useState } from "react";
import { useGetCardsQuery } from "./services/pokemonApi";

function App() {
  const [search, setSearch] = useState("");

  const { data, isLoading, error } = useGetCardsQuery(search);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading cards</h1>;

  return (
    <div>
      <h1>Pokemon Cards</h1>

      {/* 🔍 SEARCH BAR */}
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "300px",
        }}
      />

      {/* 🧾 CARD LIST */}
      {data?.data.map((card) => (
        <div key={card.id}>
          <img src={card.images.small} />
          <h3>{card.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;