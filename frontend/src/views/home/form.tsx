import { Dropdown, PrimaryButton, SecondaryButton, TextInput } from "../../components";
import type { Data } from "../../components/dropdown/index.d";

type FormProps = {
    productData: Data[];
    formSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
    onClose: () => void;
}

const Form = (props: FormProps) => {
    const { productData, formSubmitHandler, onClose } = props;

    return (
        <div className="data-form">
            <form onSubmit={formSubmitHandler}>
                <TextInput name="Customer Name *" id="customerName" />
                <Dropdown name="Select a product *" id="selectedProduct" data={productData} />

                <div className="form-buttons-container">
                    <PrimaryButton type="submit" className="form-button">Submit</PrimaryButton>
                    <SecondaryButton type="button" className="form-button" onClick={onClose}>Close</SecondaryButton>
                </div>
            </form>
        </div>
    )
}

export default Form;