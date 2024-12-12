// import Button from './components/button/Button';
import CardContainer from './components/card-container/card-container';
import CardFlex from './components/card-flex/card-flex';
import { CARD_INFO } from './constants/cardInfo';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<CardFlex>
				{CARD_INFO.map(cardInfo => {
					console.log(CARD_INFO);
					return (
						<CardContainer
							key={cardInfo.id}
							img={cardInfo.img}
							title={cardInfo.title}
							textInfo={cardInfo.textInfo}
						/>
					);
				})}
			</CardFlex>
		</>
	);
};

export default App;

// return (
// 	<div>
// 		<GlobalStyles />
// 		<h1>React</h1>
// 		<Button color='steelblue'>Click Me!</Button>
// 		<Button color='#f0f'>Click Me!</Button>
// 	</div>
// )
