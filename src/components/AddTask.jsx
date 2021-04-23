import { useState } from "react";

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState("");
	const [day, setDay] = useState("");
	const [reminder, setReminder] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if (!text) {
			alert("Please Add A Task");
			return;
		}
		onAdd({ text, day, reminder });

		setText("");
		setDay("");
		setReminder(false);
		return;
	};
	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Task</label>
				<input
					type="text"
					name="input-1"
					placeholder="Add Task"
					value={text}
					onChange={(e) => setText(e.target.value)}
					autoComplete="off"
				/>
			</div>
			<div className="form-control">
				<label>Day & Time</label>
				<input
					type="text"
					name="input-2"
					placeholder="Day & Time"
					value={day}
					onChange={(e) => setDay(e.target.value)}
					autoComplete="off"
				/>
			</div>
			<div className="form-control form-control-check">
				<label>Set Reminder</label>
				<input
					type="checkbox"
					checked={reminder}
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
				/>
			</div>
			<div className="btn-box">
				<input type="submit" value="Save Task" className="btn btn-block" />
			</div>
		</form>
	);
};

export default AddTask;
