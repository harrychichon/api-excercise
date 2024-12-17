import "./style.css";

const url: string[] = [
  "https://api.chucknorris.io/jokes/random",
  "https://cat-fact.herokuapp.com/facts",
];

// Loggar värdet som API:n hämtar som sträng
const randomChuckNorrisJoke = async (): Promise<string> => {
  const response = await fetch(url[0]);
  const data = await response.json();
  console.log(data.value);
  return data.value;
};
console.log(randomChuckNorrisJoke());


// Går in i en array av object och loggar samtliga värden i nyckeln "text" som sträng (i.e kattfaktan)
const catStuff = async (): Promise<string> => {
  const response = await fetch(url[1]);
  const data = await response.json();
  console.log(data);
  const stringify = data.forEach((item: { text: string }) => {
    console.log(item.text);
  });

  return stringify;
};
console.log(catStuff());






document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    
  </div>
`;
