import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './components/product_card/product_card.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavBar from './components/navbar/navbar.jsx';
import Contact from './pages/contact/contact.jsx';
import ProductDetail from './pages/product_details/product.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { useState } from 'react';
import ChatBotButton from './components/chatbot/chatbotbutton.jsx';
import ChatBotWindow from './components/chatbot/chatbotwindow.jsx';

function App() {
  const [showChat, setShowChat] = useState(false);

  const products_data = [
    { id:"321", img:"mini_blender.jpeg", title:"Portable 6 Blades Mini Bottle Juicer", price:"700", location:"Lahore" },
    { id:"435", img:"airpods.png", title:"Wireless Bluetooth Earbuds", price:"2000", location:"Lahore" },
    { id:"765", img:"powerbank.jpg", title:"Transparent Power Bank", price:"3000", location:"Lahore" },
    { id:"876", img:"coffee_frother.jpg", title:"Rechargeable Electric Coffee Frother", price:"1500", location:"Lahore" },
    { id:"093", img:"spy_cam.jpg", title:"SQ6 Mini Spy Camera", price:"1000", location:"Lahore" },
    { id:"820", img:"body_masager.jpg", title:"Wireless EMS Mini Body Massager", price:"400", location:"Lahore" }
  ];

  return (
    <div className='body'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="products_body">
                <Row xs={1} md={5} className="g-3">
                  {products_data.map((data) => (
                    <Col key={data.id}>
                      <Link to={`/product/${data.id}`} style={{ textDecoration: "none" }}>
                        <ProductCard {...data} />
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            }
          />
          <Route path="/product/:id" element={<ProductDetail products={products_data} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <ChatBotButton toggleChat={() => setShowChat(!showChat)} isOpen={showChat} />
        {showChat && <ChatBotWindow />}
      </BrowserRouter>
    </div>
  );
}

export default App;
