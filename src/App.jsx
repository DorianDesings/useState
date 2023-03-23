import Tabs from './components/tabs/Tabs';
import Title from './components/title/Title';

const App = () => {
	return (
		<>
			<Title
				name='Dorian'
				age={36}
				numbers={[1, 2, 3, 4, 5]}
				object={{ a: 1, b: 2 }}
				boolean={true}
			/>

			<Tabs />
		</>
	);
};

export default App;
