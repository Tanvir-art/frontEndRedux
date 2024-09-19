import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Tshop } from "../../redux/feature/shopSlice";

interface ProductCardProps {
    product: Tshop;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Link to={`/product/${product._id}`}>
            <Card className="flex flex-col justify-between shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-0">
                    <img src={product.url} alt={product.name} className="w-full h-48 object-cover" />
                </CardContent>
                <div className="p-4 flex flex-col items-center">
                    <CardHeader className="p-0 text-center mb-2">
                        <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-2 text-center">
                        <p className="text-sm font-medium">Price: ${product.price}</p>
                        <div className="flex gap-4">
                            <p className="text-sm text-gray-500">Brand: {product.brand}</p>
                            <p className="text-sm text-gray-500">Category: {product.category}</p>
                        </div>
                    </CardContent>
                    <CardFooter className=" p-0 w-full flex flex-col items-center gap-4">


                    </CardFooter>
                </div>
            </Card>
        </Link>
    );
};

export default ProductCard;
