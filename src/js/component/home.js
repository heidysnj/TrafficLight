import React from "react";

//create your first component
export function Home() {
	const [state, setState] = React.useState({
		red: "",
		yellow: "",
		green: ""
	});
	const stylesBorder = {
		border: "3px solid yellow",
		height: "50px",
		width: "50px"
	};
	return (
		<div className="text-center mt-5">
			<div
				className="rounded-circle bg-danger"
				style={
					state.red ? stylesBorder : { height: "50px", width: "50px" }
				}
				onClick={() =>
					setState({ red: "clicked", yellow: "", green: "" })
				}></div>
			<div
				className="rounded-circle bg-warning"
				style={
					state.yellow
						? stylesBorder
						: { height: "50px", width: "50px" }
				}
				onClick={() =>
					setState({ red: "", yellow: "clicked", green: "" })
				}></div>
			<div
				className="rounded-circle bg-success"
				style={
					state.green
						? stylesBorder
						: { height: "50px", width: "50px" }
				}
				onClick={() =>
					setState({ red: "", yellow: "", green: "clicked" })
				}></div>
		</div>
	);
}
