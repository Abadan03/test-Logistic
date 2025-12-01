import { Tproduk } from "@/app/types/product"
import AddProduct from "./AddProduct"
import DeleteProduct from "./DeleteProduct"
export type TdataDummy = {
  splice(): unknown
  push(newData: { nama: string }): unknown
  dataDummy: () => void
}

export default function ProductComponent({ pageProps, dataDummys } : {pageProps: Tproduk[], dataDummys: TdataDummy}) {

  console.log(pageProps)
  
  return (
    <div className="container flex flex-col justify-center align-middle w-full">
      <h1>All Products</h1>
      <AddProduct dataDummys={dataDummys} />

    
      <div className="grid grid-flow-col grid-rows-4 gap-4">
        {pageProps?.map((item, index) => (
          <div key={index} className="border border-black">
            <div>
            <DeleteProduct unique={index} dataDummys={dataDummys}/>

            </div>
            <ul>
              <li>
                nama : {item?.nama}
              </li>
              <li>
                Harga : {item?.harga}
              </li>
              <li>
                stok : {item?.stok}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}