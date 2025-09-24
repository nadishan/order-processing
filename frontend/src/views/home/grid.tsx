import { PrimaryButton, Table } from "../../components";

type GridProps = {
    onProductAdd: () => void;
    products: (string | number)[][];
}

const Grid = (props: GridProps) => {

    const { onProductAdd, products } = props;

    const headers = ['Order ID', 'Customer Name', 'Product', 'Status'];

    return (
        <div className="grid-container">
            <div className="product-add-button">
                <PrimaryButton onClick={onProductAdd}>
                    Add Item to Inventory
                </PrimaryButton>
            </div>
            <div className="table-container">
                <Table data={products} headers={headers} />
            </div>
        </div>

    )
}

export default Grid;