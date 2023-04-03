import { IProduct } from "../type/Product";
import { instance } from "./instance"

const getall = () => {
    return instance.get("/products");
}
const getone = (id: String) => {
    return instance.get("/products/" + id)
}
const removeProduct = (id: String) => {
    return instance.delete("/products/" + id)
}
const addProduct = (product: IProduct[]) => {
    return instance.post("/products", product);
}
const updateProduct = (product: any) => {
    return instance.put("/products/" + product._id, product);
}
export { getall, getone, removeProduct, updateProduct, addProduct }