import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { productId } = useParams<{ productId: string }>();
    return (
        <div>
            <h1>Product Page</h1>
            <p>This is the product page where you can find details about our products.</p>
        </div>
    )
}

export default ProductPage; 