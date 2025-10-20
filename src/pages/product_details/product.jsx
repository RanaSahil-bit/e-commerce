import { useParams, Link } from "react-router";
import "./product.css";

const ProductDetail = () => {
  const productId = useParams();

  const products = { "321": { img: "mini_blender.jpeg", title: "Portable 6 Blades Mini Bottle Juicer | USB Rechargeable Smoothie Blender | Powerful Personal Fruit Mixer For Travel, Gym & Home Use (Random Color)", price: "700", location: "Lahore", }, "435": { img: "airpods.png", title: "InTouch INT-W03 Wireless Bluetooth Earbuds – ANC + ENC, Long Battery Life, High-Quality Sound, Perfect for PUBG Gaming", price: "2000", location: "Lahore", }, "765": { img: "powerbank.jpg", title: "Transparent Power Bank With LED Light | Fast Charging Portable Power Bank With Dual USB Output And Smart Display (20'000mah)", price: "3000", location: "Lahore", }, "876": { img: "coffee_frother.jpg", title: "Rechargeable Electric Coffee Frother & Milk Beater – Handheld Foam Maker with Stainless Steel Whisk, USB Charging, and Powerful Motor", price: "1500", location: "Lahore", }, "093": { img: "spy_cam.jpg", title: "SQ6 Mini Spy Camera – HD Portable Security Camera with Night Vision & Two Stand Holders", price: "1000", location: "Lahore", }, "820": { img: "body_masager.jpg", title: "Wireless EMS Mini Body Massager – Portable Butterfly Massager For Blood Circulation & Pain Relief", price: "400", location: "Lahore", } }

  const data = products[productId.id];

  if (!productId) return <h3 className="text-center mt-5">Product not found</h3>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <img src={`/${data.img}`} alt={data.title} className="detail-image" />
        <div className="detail-info">
          <h2>{data.title}</h2>
          <p className="price">Rs {data.price}</p>
          <p className="location">{data.location}</p>
          <button className="btn-buy">Buy Now</button>
          <Link to='/'><button className="btn-back">Back</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
