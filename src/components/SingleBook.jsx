import { Button, Card } from "react-bootstrap";
function singleBook({book:{img,title,price,category,asin}}){
    return(
        <Card className="ms-4 mb-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} className="mt-3" style={{height: "400px"}}/>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
        <Card.Title>{title}</Card.Title>
        </div>
        <div>
        <Card.Text>Category: {category}</Card.Text>
        <Card.Text>Price of the book: {price}</Card.Text>
        </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
    )
}

export default singleBook