export default function ChatItem({message, userId}) {
    const isSender = message.sender === userId;
    
    

    if(isSender){
        return(
            <div className="chat chat-end">
                <div className="chat-header">
                    {/* Add username */}
                    Obi-Wan Kenobi
                </div>
                <div className="chat-bubble chat-bubble-primary">{message.content}</div>
            </div>
        )
    }

   return (
    <div className="chat chat-start">
        <div className="chat-header">
            {/* Add username */}
            Obi-Wan Kenobi
        </div>
        <div className="chat-bubble">{message.content}</div>
    </div>
   );
}