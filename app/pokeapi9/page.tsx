export default async function Pokeapi9() {

  const res = await fetch("https://pokeapi.co/api/v2/pokemon-species/aegislash");

  const pokemon9 = await res.json();
  // pokemon9.then((value) => {
  //   console.log(`ini mencoba cari tau valuenya ${value}`)
  // })
  // console.log(`ini pokemon9 ${pokemon9.egg_groups}`)

  // Object.values(pokemon9).map()
  // await new Promise((resolve) => new setTimeout(resolve, 3000))
  return (
    <div className="container mx-auto flex justify-center md:container md:mx-auto">
      {Object.values(pokemon9.egg_groups).map((item: any, index: any) => (
      <div key={index}>
        <p>{item.name}</p>
      </div>
      ))}    
    </div>
  )
}