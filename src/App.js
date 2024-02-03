import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
function App() {
  return (
    // <div className="App">
    //  <Name/>
    //  <Price/>
    //  <Description/>
    //   <Image/>
    // </div>

    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>
  );
}

export default App;
