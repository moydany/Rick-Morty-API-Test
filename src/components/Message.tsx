import React from "react";

interface MessageProps {
  message: string;
  imageUrl: string;
}

const Message: React.FC<MessageProps> = ({ message, imageUrl }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh"
      }}
    >
      <img
        src={imageUrl}
        alt="Message Image"
        style={{ width: "100px", marginRight: "20px" }}
      />
      <h5>{message}</h5>
    </div>
  );
};

export default Message;
