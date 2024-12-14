import {
	StyledDiv,
	StyledImg,
	StyledTitle,
	StyledText,
	StyledButton
} from './Card-container.styles';

const CardContainer = ({ color, img, title, textInfo, button }) => {
	return (
		<StyledDiv $color={color}>
			<StyledImg src={img} />
			<StyledTitle>{title}</StyledTitle>
			<StyledText>{textInfo}</StyledText>
			<StyledButton $color={color}>{button}</StyledButton>
		</StyledDiv>
	);
};

export default CardContainer;
