
import { IProduct } from '../../type/Product'

import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface IProps {
    products: IProduct[]
    onRemove: (product: IProduct[]) => void
}
const Product = (props: IProps) => {
    console.log(props);


    const data = props.products.map((product: any) => {
        return {
            key: product._id,
            name: product.name,
            price: product.price
        }
    })
    console.log(data);

    const removeProduct = (id: string) => {
        props.onRemove(id)
    }
    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product price',
            dataIndex: 'price',
            key: 'price',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => removeProduct(record.key)} >Primary Button</Button>
                </Space>
            ),
        },
    ];
    return <Table columns={columns} dataSource={data} />

}

export default Product