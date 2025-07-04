import Star from "../assets/star.svg";
export default function Rating({ value }) {
  const rating = Array(value).fill(null);
  return (
    <>
      {rating.map((value, index) => (
        <img key={index} src={Star} width="14" height="14" alt="" />
      ))}
    </>
  );
}
