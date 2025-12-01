"use client"
import { useState } from 'react'
import { TdataDummy } from './ProductComponent'
import { useRouter } from 'next/navigation'

const DeleteProduct = ({ dataDummys, unique }: { dataDummys: TdataDummy, unique: any }) => {
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()
  console.log(`ini unique ${unique}`)
  
  console.log(`ini dari delete produk ${dataDummys}`);

// handleSubmitCreate: FormEventHandler<HTMLFormElement> = (e: any) => {
//     e.preventDefault();
//     console.log(newNama, newPrice, newStock)
//     const newData = {
//       nama: newNama, harga: newPrice, stok: newStock
//     }
//     dataDummys.push(newData)
//     setModalOpen(false)
//     router.refresh()
//   } 
  if (isActive) {
    dataDummys.splice(unique)
    setIsActive(false)
    router.refresh()
  }

  return (
    <div>
      <button onClick={() => setIsActive(true)} className='p-2 border-black bg-red-600 cursor-pointer'>Delete Barang ini </button>
    </div>
  )
}

export default DeleteProduct