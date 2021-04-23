import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Task = ({ task, onDelete, onToggle }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const showComponent = () => {
			setTimeout(() => {
				setShow(true);
			}, 1);
		};

		return showComponent();
	}, []);

	return (
		<div
			className={`task ${show ? "show-task" : "hide-task"} ${
				task.reminder && "reminder"
			}`}
			onDoubleClick={() => onToggle(task.id)}
		>
			<h3>
				{task.text}
				<i className={show && "btn-delete" }>
					<FaTimes
						onClick={() => {
							setShow(false);
							setTimeout(() => {
								onDelete(task.id);
							}, 500);
						}}
						style={{ color: "red", cursor: "pointer" }}
					/>
				</i>
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;
