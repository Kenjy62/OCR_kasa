export default function Stars({ rating }) {
  const list = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      list.push(<i class="fa-solid fa-star text-primaryOrange"></i>);
    } else {
      list.push(<i class="fa-solid fa-star text-gray-400"></i>);
    }
  }

  return <div className="star-rating">{list}</div>;
}
