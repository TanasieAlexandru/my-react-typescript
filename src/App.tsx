import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TicTacToeGame from 'components/TicTacToe/TicTacToe';
import Home from 'components/Home/Home';

export default function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/ticTacToeGame">TicTacToeGame</Link>
					</li>
				</ul>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/ticTacToeGame" element={<TicTacToeGame />}></Route>
				</Routes>
			</div>
		</Router>
	);
}
