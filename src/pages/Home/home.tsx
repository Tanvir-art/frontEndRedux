import CategoryProduct from "@/myComponents/CategoryProduct/CategoryProduct"
import FeaturedProducts from "../../myComponents/FeatureProduct/FeatureProduct"
import Slider from "../../myComponents/Slider/Slider"
import ContactForm from "@/myComponents/ContactForm/ContactForm"



const Home = () => {
    return (
        <div>
            <Slider />
            <CategoryProduct />
            <FeaturedProducts />
            <ContactForm />
        </div>
    )
}

export default Home
