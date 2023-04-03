import { useEffect, useState } from 'react'

import { Routes, Route } from "react-router-dom"

import Addproduct from './pages/admin/Addproduct'
import { addProduct, getall, removeProduct } from './api/Product'
import { IProduct } from './type/Product'
import Product from './pages/admin/Product'
import Admin from './pages/layouts/Admin'
import HomePage from './pages/layouts/HomePage'



function App() {
  const [products, setproducts] = useState<IProduct[]>([])
  useEffect(() => {
    getall().then(({ data }) => setproducts(data.product))
  }, [])
  const onHandleadd = (product: any) => {
    addProduct(product).then(() => setproducts([...products, product]))
  }
  const onHandleaRemove = (id: string) => {
    removeProduct(id).then(() => setproducts(products.filter(item => item._id !== id)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
        </Route>
        <Route path='/admin' element={<Admin />}>
          {/* <Route index element={<Dashbash />} /> */}
          <Route path='add' element={<Addproduct onadd={onHandleadd} />} />
          <Route path='product' element={<Product products={products} onRemove={onHandleaRemove} />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
