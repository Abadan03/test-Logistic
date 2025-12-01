export default async function Pokeapi() {

  const res = await fetch("https://pokeapi.co/api/v2/ability/battle-armor");

  const pokemon = await res.json();
  // pokemon.then((value) => {
  //   console.log(`ini mencoba cari tau valuenya ${value}`)
  // })
  console.log(`ini pokemon ${Object.values(pokemon.effect_entries)}`)

  // Object.values(pokemon).map()
  // await new Promise((resolve) => new setTimeout(resolve, 3000))
  return (
    <div className="container mx-auto flex justify-center md:container md:mx-auto">
      {Object.values(pokemon.effect_entries).map((item: any, index: any) => (
      <div key={index}>
        <p>{item.effect}</p>
      </div>
      ))}    
    </div>
  )
}