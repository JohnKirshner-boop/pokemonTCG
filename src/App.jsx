import { useGetCardsQuery } from "./services/pokemonApi";

function App() {
  const { data, isLoading, error } = useGetCardsQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading cards</h1>;

  return (
    <div>
      <h1>Pokemon Cards</h1>
      {data.data.map((card) => (
        <div key={card.id}>
          <img src={card.images.small} />
          <h3>{card.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;