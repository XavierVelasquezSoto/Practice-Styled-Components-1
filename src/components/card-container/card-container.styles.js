import styled from 'styled-components';

const StyledDiv = styled.div`
	height: 442px;
	background-color: ${props => props.$color};
	padding: 48px;
`;

const StyledImg = styled.img`
	margin-bottom: 35px;
`;

const StyledTitle = styled.h1`
	margin: 0;
	font-weight: 700;
	padding-bottom: 25px;
	font-size: 40px;
	font-family: 'Big Shoulders Display', sans-serif;
`;

const StyledText = styled.p`
	margin: 0;
	font-weight: 400;
	line-height: 25px;
	font-size: 15px;
	opacity: 0.75;
	padding-bottom: 25px;
`;

const StyledButton = styled.button`
	width: 146px;
	height: 48px;
	border-radius: 30px;
	border: none;
	background-color: #fff;
	color: ${props => props.$color};
	&:hover {
		background-color: transparent;
		color: #fff;
		border: 1px solid #fff;
	}
`;

export { StyledDiv, StyledImg, StyledTitle, StyledText, StyledButton };
