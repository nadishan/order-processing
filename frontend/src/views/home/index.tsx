import Form from "./form";
import Grid from "./grid";
import useHome from "./hook";

import './index.css';

const Home = () => {
    const { isFormShown, formattedProducts, formSubmitHandler, onProductAdd, onClose, formattedSavedProducts } = useHome();

    return (
        <div className="home-container">
            {
                isFormShown ? <Form productData={formattedProducts} formSubmitHandler={formSubmitHandler} onClose={onClose} /> : <Grid onProductAdd={onProductAdd} products={formattedSavedProducts} />
            }
        </div>
    )
}

export default Home;