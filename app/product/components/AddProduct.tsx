"use client"
import { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { TdataDummy } from "./ProductComponent";
import { useRouter } from "next/navigation";

export default function AddProduct({dataDummys} : {dataDummys: TdataDummy}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [newNama, setNewNama] = useState<string>('')
  const [newPrice, setNewPrice] = useState()
  const [newStock, setNewStock] = useState()
  const router = useRouter()

  const handleSubmitCreate: FormEventHandler<HTMLFormElement> = (e: any) => {
    e.preventDefault();
    console.log(newNama, newPrice, newStock)
    // setNewNama("");
    const newData = {
      nama: newNama, harga: newPrice, stok: newStock
    }
    dataDummys.push(newData)
    setModalOpen(false)
    router.refresh()
  } 


  return (
    <div>
      <button onClick={() => setModalOpen(true)} className="p-2 rounded-sm bg-blue-500 text-white cursor-pointer">
        Add new Products
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitCreate}>
          <h3 className="font-bold">add new products</h3>
          <div className="modal-action">
            <label htmlFor="">Nama</label>
            <input type="text" value={newNama} onChange={e => setNewNama(e.target.value)} placeholder="Type here" className="input" />
            <label htmlFor="">Harga</label>
            <input type="number" value={newPrice} onChange={e => setNewPrice(e.target.value)} placeholder="Type here" className="input" />
            <label htmlFor="">stok</label>
            <input type="number" value={newStock} onChange={e => setNewStock(e.target.value)} placeholder="Type here" className="input" />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}