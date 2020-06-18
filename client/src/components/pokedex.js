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
    axios.get("http://localhost:8080/api/pokemon").then((res) => {
      setPokemonList(res.data.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Pokemon go here!</h1>

      {/* {pokemonList &&
        pokemonList.map((obj) => {
          return <p>{obj.pokemon}</p>;
        })} */}
      <table>
        <thead>
          <tr>
            <th>Generation 1 Pokemon</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList &&
            pokemonList.map((obj) => {
              return (
                <tr>
                  <td>{obj.pokemon}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Pokedex;
