"use client"
import { useEffect, useState } from "react";
import { Tproduk } from "../types/product"
import Loading from "../components/Loading";
import ProductComponent from "./components/ProductComponent";

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [dataDummy, setDataDummy] = useState([
    {nama: "tas", harga: 4000, stok: 20},
    {nama: "baju", harga: 2000, stok: 100},
    {nama: "kipas", harga: 1500, stok: 400},
    {nama: "parfum", harga: 1200, stok: 40},
    {nama: "kabel", harga: 1000, stok: 80},
  ])
  // const dataDummy: Tproduk[] = [
  //   {nama: "tas", harga: 4000, stok: 20},
  //   {nama: "baju", harga: 2000, stok: 100},
  //   {nama: "kipas", harga: 1500, stok: 400},
  //   {nama: "parfum", harga: 1200, stok: 40},
  //   {nama: "kabel", harga: 1000, stok: 80},
  // ]
  // console.log(dataDummy.length)
  // if dataDummy
  // const obj = {
  //   nama: "peralatan mandi", harga: 1000, stok: 20
  // }
  // dataDummy.push(obj)
  // Show loading spinner
  console.log(`ini berasal dari tambah data ${dataDummy}`)

  useEffect(() => {
    if (dataDummy.length > 0) {
    setLoading(false)
  }
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : ( 
        <ProductComponent pageProps={dataDummy} dataDummys={dataDummy} />
      )}
    </>
  
  )
}