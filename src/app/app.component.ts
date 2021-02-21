import { Component, ElementRef, OnInit } from '@angular/core';
import {ChatWindowComponent} from './components/chatWindow/ChatWindow.component';

@Component({
  selector: 'app-root',
  template: `
            <app-channel [topic]="topic" [params]="params" (getChannel)="getChannel($event)"></app-channel>
            
            <app-chat-window [messages]="messages" [user]="newUser" [room]="newRoom" [pushMessage]="pushMessage"></app-chat-window>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  topic: String="chat:room123";
  params: Object={};
  channel: string = null; 
  newRoom: Object = {};
  newUser: Object = {};
  messages: any = [];
  Room: any;
  pushMessage: Function = () => {};

  getChannel(channel){
    this.channel = channel;
    console.log('getChannel', this.channel);

    channel.on('user_joined', response => {
      console.log('user', response);
      const {room, user} = response;
      this.newUser = user;
      this.newRoom=room;
      localStorage.setItem("user",JSON.stringify({id : user.id, name: user.name}));
      localStorage.setItem("room",JSON.stringify({session_id : room.session_id, created_by: room.created_by, inserted_at: room.inserted_at}));
    })
    channel.on('new_message', message => {
      console.log('newMessage', message);
      this.messages = [...this.messages, message]
    })
    channel.on('archived_message', message => {
      this.messages = [message, ...this.messages]
    })
    channel.on('archived_message_count', payload => {
      const { page: {count} } = payload;
     console.log('total archived message count', count);
    })

     this.pushMessage = (message)=>{
      this.messages = [...this.messages, {content: message}];
      channel.push('new_message', {content: message});
    };

  }
  
  ngOnInit(){
    this.Room = JSON.stringify(this.newRoom);
  }

}
