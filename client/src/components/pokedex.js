import React from "react";
import axios from "axios";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = React.useState([]);

  const getPokemon = async () => {
    const data = await axios.get("http://localhost:8080/api/pokemon");
    console.log("hello");
    setPokemonList(data);
  };

  React.useEffect(() => {
    axios.get("/api/pokemon").then((res) => {
      setPokemonList(res);
      console.log(res);
    });
  });

  return (
    <div>
      <h1>Pokemon go here!</h1>
      {/* {pokemonList.map((obj) => {
        return <h1>{obj.pokemon}</h1>;
      })} */}
    </div>
  );
};

export default Pokedex;
