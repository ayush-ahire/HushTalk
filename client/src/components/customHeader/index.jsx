import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";

const CustomerHeader = ({ chat }) => {
  console.log(chat)
  return (
    <div className="chat-header">
      <div className="flexbetween">
        <h3 className="header-text">{chat.title}</h3>
        <ChatBubbleLeftRightIcon className="icon-chat" />
      </div>
      <div className="header-text"><h3>Hush🤫Talk</h3></div>
      <div className="flexbetween">
        <PhoneIcon className="icon-phone" />
        <p className="header-text">{chat.description}</p>

      </div>
    </div>
  );
};

export default CustomerHeader;
