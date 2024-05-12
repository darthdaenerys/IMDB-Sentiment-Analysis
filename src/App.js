import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
	return (
		<>
			<Navbar title="AI Sentiment Analysis"/>
			<div className='container'>
				<TextForm title="Enter text below to analyze" buttonText="Analyze"/>
			</div>
		</>
	);
}

export default App;
