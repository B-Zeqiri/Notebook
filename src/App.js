import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';


const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			tag: 'first',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			tag: 'second',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			tag: 'third',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			tag: 'fourth',
			date: '30/04/2021',
		},
	]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);
	const addNote = (text, tag) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			tag: tag,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
	return (
			<div className='container'>
				<h1>Notes</h1>
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
	);
};

export default App;
