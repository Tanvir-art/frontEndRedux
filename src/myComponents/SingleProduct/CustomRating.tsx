import { FaStar, FaRegStar } from 'react-icons/fa';

interface RatingProps {
    rating: number;
    totalStars?: number;
}

const CustomRating: React.FC<RatingProps> = ({ rating, totalStars = 5 }) => {
    const filledStars = Math.round(rating); // Round to nearest integer
    return (
        <div className="flex items-center">
            {Array.from({ length: totalStars }, (_, index) =>
                index < filledStars ? (
                    <FaStar key={index} className="text-yellow-500" />
                ) : (
                    <FaRegStar key={index} className="text-yellow-500" />
                )
            )}
            <span className="ml-2 text-sm text-gray-500">({rating})</span>
        </div>
    );
};

export default CustomRating;

