import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, tag, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
        <div className='note-footer'>
		        <span>{tag}</span>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
