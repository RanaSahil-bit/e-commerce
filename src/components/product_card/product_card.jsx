import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./product_card_css.css"

function ProductCard(data) {

    function clickHandler() {
        console.log('Clicked')
    }

  return (
    <Card style={{ width: '15rem' ,cursor:'pointer'}} className='mainCard' onClick={clickHandler}>
      <Card.Img variant="top" src={data.img} height={"220px"} />
      <Card.Body>
        <Card.Title className='title'>{data.title}</Card.Title>
        <Card.Subtitle className='price mt-2 text-primary' >Rs {data.price}</Card.Subtitle>
        <Card.Subtitle className='shipping mt-2 text-black' >Ships to <strong>{data.location}</strong></Card.Subtitle>
        <Button variant="warning" className='cart_button mt-2'>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;