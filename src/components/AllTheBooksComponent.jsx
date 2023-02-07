import { Button, Card } from "react-bootstrap";
import books from "../data/history.json";
function allTheBooks() {
  console.log(books);
  return (
    books.map((elem,index)=>
    <Card className="ms-4 mb-5" style={{ width: "18rem" }} key={index}>
      <Card.Img variant="top" src={elem.img} className="mt-3"/>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
        <Card.Title>{elem.title}</Card.Title>
        </div>
        <div>
        <Card.Text>Category: {elem.category}</Card.Text>
        <Card.Text>Price of the book: {elem.price}</Card.Text>
        </div>
        <Button variant="primary" onClick={() => console.log((elem.asin))}>Go somewhere</Button>
      </Card.Body>
    </Card>
  ));
}
export default allTheBooks;
