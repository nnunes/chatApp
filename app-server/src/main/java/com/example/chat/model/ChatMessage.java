package com.example.chat.model;

import java.time.LocalDateTime;


public class ChatMessage {
    private MessageType type;
    private String content;
    private String sender;
    private String receiver;
	private LocalDateTime dateTime=LocalDateTime.now();; 
    
    public enum MessageType {
        CHAT,
        JOIN,
        LEAVE,
        TYPING
    }

    public MessageType getType() {
        return type;
    }

    public void setType(MessageType type) {
        this.type = type;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }
    
    public LocalDateTime getDateTime() {
		return dateTime;
	}

	public void setDateTime(LocalDateTime dateTime) {
		this.dateTime = dateTime;
	}


    //for now receiver stays NULL, for future private messages
    public String getReceiver() {
		return receiver;
	}

	public void setReceiver(String receiver) {
		this.receiver = receiver;	}

}
