function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"]

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
	  return <li key={animal}</li>;
	  // for conditions
	  // return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
	})}
      </ul>
    </div>
  );
	/* or
	 * const animalsList = animals.map((animals) => <li key={animal}</li>)
	 * 
	 * return (
	 *   <div>
	 *     <h1>Animals: </h1>
	 *     <ul>
	 *       {animalsList}
	 *     </ul>
	 *   </div>
	 * */
}

function ListItem(props) {
  return <li>{props.animals}</li>
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animals) => {
        return <ListItem key={animals} animal={animal} />;
      })}
    </ul>
  );
}
