import {
	StyledDiv,
	StyledImg,
	StyledTitle,
	StyledText,
	StyledButton
} from './Card-container.styles';

const CardContainer = ({ bodyColor, img, title, textInfo, button }) => {
	return (
		<StyledDiv $bodyColor={bodyColor}>
			<StyledImg src={img} />
			<StyledTitle>{title}</StyledTitle>
			<StyledText>{textInfo}</StyledText>
			<StyledButton $button={bodyColor}>{button}</StyledButton>
		</StyledDiv>
	);
};

export default CardContainer;
