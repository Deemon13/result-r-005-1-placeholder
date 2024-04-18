import { useEffect } from 'react';
import styles from './app.module.css';
import { useState } from 'react';

const route = 'todos';
const URL = `https://jsonplaceholder.typicode.com/${route}`;

export const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch(URL)
			.then(loadedData => loadedData.json())
			.then(loadedTodos => {
				setTodos(loadedTodos);
			});
	}, [URL]);

	return (
		<div className={styles.app}>
			{todos.map(({ id, userId, title, completed }) => (
				<div key={id}>
					{userId}: {title} - {completed ? 'done' : 'active'}
				</div>
			))}
		</div>
	);
};
