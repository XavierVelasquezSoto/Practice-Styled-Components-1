import styled from 'styled-components';

const StyledDiv = styled.div`
	height: 442px;
	background-color: ${props => {
		if (props.$bodyColor === 'sedans') return '#E28625';
		if (props.$bodyColor === 'suvs') return '#006971';
		if (props.$bodyColor === 'luxury') return '#004140';
	}};
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
	color: ${props => {
		if (props.$button === 'sedans') return '#E28625';
		if (props.$button === 'suvs') return '#006971';
		if (props.$button === 'luxury') return '#004140';
	}};
	&:hover {
		background-color: ${props => {
			if (props.$button === 'sedans') return '#E28625';
			if (props.$button === 'suvs') return '#006971';
			if (props.$button === 'luxury') return '#004140';
		}};
		color: ${props => {
			if (props.$button === 'sedans') return '#fff';
			if (props.$button === 'suvs') return '#fff';
			if (props.$button === 'luxury') return '#fff';
		}};
		border: 1px solid #fff;
	}
`;

export { StyledDiv, StyledImg, StyledTitle, StyledText, StyledButton };
