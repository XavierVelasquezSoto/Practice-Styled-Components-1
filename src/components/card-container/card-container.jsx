const CardContainer = ({ img, title, textInfo }) => {
	return (
		<div>
			<img src={img} alt='' />
			<h1>{title}</h1>
			<p>{textInfo}</p>
		</div>
	);
};

export default CardContainer;
