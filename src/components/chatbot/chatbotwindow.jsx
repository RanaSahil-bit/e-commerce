import { useState } from "react";
import axios from "axios";
import "./chatbot.css";

function ChatBotWindow() {
    const [input, setInput] = useState("");
    const [speciality, setSpeciality] = useState("general");
    const [chat, setChat] = useState([]);

    async function sendMessage(e) {
        e.preventDefault();
        if (!input) return;

        const text = input;
        const personality = `
You are a helpful product assistant for an online gadget store.
You know all product details, features, and pricing.
Your job is to answer customer questions clearly, honestly, and in a friendly tone.
If someone asks about delivery, warranty, or stock, give a general polite answer (like "Yes, we deliver all over Pakistan!" or "All items are available unless marked out of stock.").
If someone greets you, greet them warmly.
If they ask anything unrelated to the store or products, politely say: "Sorry, I can only answer questions related to our products."

Here are the available products:

**Portable 6 Blades Mini Bottle Juicer**  
   - ID: 321  
   - Price: Rs. 700  
   - Location: Lahore  
   - Description: A compact and rechargeable mini juicer with 6 powerful blades.  
     Perfect for smoothies, shakes, or juices on the go.  
     USB rechargeable, easy to clean, and ideal for travel, gym, and home use.

**InTouch INT-W03 Wireless Bluetooth Earbuds**  
   - ID: 435  
   - Price: Rs. 2000  
   - Location: Lahore  
   - Description: High-quality wireless earbuds with ANC + ENC noise cancellation,  
     deep bass sound, and a long battery life.  
     Great for music, gaming (including PUBG), and calls.

**Transparent Power Bank with LED Light (20,000 mAh)**  
   - ID: 765  
   - Price: Rs. 3000  
   - Location: Lahore  
   - Description: A stylish transparent power bank featuring LED lights,  
     a smart digital display, and dual USB outputs.  
     Fast charging for phones and devices with 20,000mAh capacity.

**Rechargeable Electric Coffee Frother & Milk Beater**  
   - ID: 876  
   - Price: Rs. 1500  
   - Location: Lahore  
   - Description: A handheld electric frother with a stainless steel whisk and  
     powerful motor. Ideal for making creamy coffee, matcha, or milk foam.  
     Rechargeable via USB and easy to use at home or café.

**SQ6 Mini Spy Camera (HD Portable Security Cam)**  
   - ID: 093  
   - Price: Rs. 1000  
   - Location: Lahore  
   - Description: A small HD spy camera with night vision and motion detection.  
     Comes with two stands and is ideal for indoor security or discreet recording.  
     Compact, rechargeable, and easy to install.

**Wireless EMS Mini Body Massager (Butterfly Massager)**  
   - ID: 820  
   - Price: Rs. 400  
   - Location: Lahore  
   - Description: A mini electronic muscle stimulator that helps relieve pain and  
     improve blood circulation.  
     Portable and wireless – attach to any body part and relax your muscles instantly.

Respond like a store assistant who truly knows these products.
You can explain differences, recommend items, or help users pick the best one for their needs.
`;

        setChat((prev) => [...prev, { text, sender: "user" }]);
        setInput("");

        try {
            const result = await axios.post(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
                {
                    contents: [
                        {
                            parts: [{ text: personality }, { text }],
                        },
                    ],
                },
                {
                    headers: {
                        "X-goog-api-key": "AIzaSyDSrXvCZxdja7LOrweXYXoJXBRZbCzzrh8",
                        "Content-Type": "application/json",
                    },
                }
            );

            const botResponse =
                result.data.candidates?.[0]?.content?.parts?.[0]?.text ||
                "Sorry, I didn’t get that.";
            setChat((prev) => [...prev, { text: botResponse, sender: "bot" }]);
        } catch (error) {
            console.error(error);
            setChat((prev) => [
                ...prev,
                { text: "Something went wrong. Try again later.", sender: "bot", error },
            ]);
        }
    }


    return (
        <div className="chatbot-window">
            <div className="navbar">Chatbot</div>

            {/* <div className="selection">
                <label htmlFor="specialty">Choose Specialty: </label>
                <select
                    id="specialty"
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                >
                    <option value="general">General</option>
                    <option value="programmer">Programmer</option>
                    <option value="computer-engineer">Computer Scientist</option>
                    <option value="doctor">Doctor</option>
                    <option value="engineer">Engineer</option>
                    <option value="poet">Poet</option>
                    <option value="joker">Joker</option>
                </select>
            </div> */}

            <div className="chat-box">
                {chat.map((msg, index) => (
                    <p key={index} className={msg.sender}>
                        {msg.text}
                    </p>
                ))}
            </div>

            <form className="chat-input" onSubmit={sendMessage}>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatBotWindow;
