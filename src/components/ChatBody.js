import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({messages}) => {
	const navigate = useNavigate();

	const handleLeaveChat = () => {
		localStorage.removeItem("userName");
		navigate("/");
		window.location.reload();
	};

	return (
		<>
			<header className="chat__mainHeader">
				<p>Hangout with colleagues</p>
				<button className="leaveChat__btn" onClick={handleLeaveChat}>
					Leave chat
				</button>
			</header>

			<div className="message__container">
                {messages.map((message) => 
                    message.name === localStorage.getItem("userName") ? (
                    <div className="message__chats">
                        <p className="sender__name">You</p>
                        <div className="message_sender">
                            <p>Hello there</p>
                        </div>
                    </div>
                    ) : (
                    <div className="message__chats">
                        <p>Other</p>
                        <div className="message__recipient">
                            <p>Hey, I'm good, you?</p>
                        </div>
                    </div>
                    )
                )}

				<div className="message__status">
					<p>Someone is typing...</p>
				</div>
			</div>
		</>
	);
};

export default ChatBody;
