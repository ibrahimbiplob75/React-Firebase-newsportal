import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ newsData }) => {
  const {_id, title, image_url, details, rating, } = newsData;

  const generateStarRating = (ratingValue) => {
    const stars = [];
    for (let i = 1; i <= ratingValue; i++) {
      stars.push(
        <input
          type="radio"
          key={i}
          className="mask mask-star-2 bg-orange-400"
        />
      );
    }
    return stars;
  };
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl mt-10">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
        <figure>
          <img className="p-6" src={image_url} alt={title} />
        </figure>
        {details.length > 400 ? (
          <p className="card-body">{details.slice(0, 200)}
          <Link className="text-red-600 font-semibold" to={`/details/${_id}`}>Read More.....</Link>
          </p>
        ) : (
          <p className="card-body">{details}</p>
        )}

        <div className="rating m-5">
          {generateStarRating(rating.number)}
          <p className="ml-3">{rating.number}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  newsData: PropTypes.object
};
