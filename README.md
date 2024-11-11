# React Vite-project

In this project we practice all stuff learned in lessons.

function Welcome(props) { // props is the way how you pass data, always use props to as a parameter inside a function
return <h1>Hello, {props.name}</h1>
}

const Welcome = (props) => { // this is the another way to write fuction in App.jsx
return <h1>Hello, {props.name}</h1>
}

class welcome extends Component {
render() {
return <h1>Hello, {this.props.name}</h1>
}
}

Props allows you to pass data from a parent(wrapping) component to a child(embedded) component.
