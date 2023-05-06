export default function Stars({ rating }) {
  const list = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      list.push(
        <i key={i} className="fa-solid fa-star text-primaryOrange text-lg"></i>
      );
    } else {
      list.push(
        <i key={i} className="fa-solid fa-star text-gray-400 text-lg"></i>
      );
    }
  }

  return <div className="star-rating">{list}</div>;
}
