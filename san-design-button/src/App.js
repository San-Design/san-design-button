import './App.css';
import {Button, IconButton} from 'san-design-button';
import 'font-awesome/css/font-awesome.min.css';

function App() {
	
  return (
  	<div className="body">
  		<h1>Buttons</h1>
	  		<h2>Basic Buttons</h2>
	  		<Button buttonSize="btn--wide" buttonColor="red" buttonVariant="btn--solid">Default</Button>
	  		
	  		<IconButton buttonSize="btn--wide" buttonColor="red" buttonVariant="btn--solid" leftIcon="fa-facebook">Default</IconButton>
	  		<IconButton buttonSize="btn--large" buttonColor="red" buttonVariant="btn--solid" leftIcon="fa-facebook">Default</IconButton>
	  		<IconButton buttonSize="btn--medium" buttonColor="red" buttonVariant="btn--solid" leftIcon="fa-facebook">Default</IconButton>
	  		<IconButton buttonSize="btn--small" buttonColor="red" buttonVariant="btn--solid" leftIcon="fa-facebook">Default</IconButton>
  	</div>  	
 	);
}

export default App;
