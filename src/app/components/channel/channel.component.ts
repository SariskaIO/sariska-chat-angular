import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import SocketService from "../../services/socket/socket.service";

@Component({
    selector:'app-channel',
    template: ``
})
export class ChannelComponent implements OnInit, OnDestroy{
    
    channel:any = null;
    socket:any = null;
    constructor(private socketService: SocketService){
    }
    @Input() topic: string;
    @Input() params: Object;

    @Output() getChannel = new EventEmitter<string>();

    sendChannel(channel){
        this.getChannel.emit(channel);
    }

    async ngOnInit(){
        
        this.socket = await this.socketService.fetchData();
        
        if(this.socket===null){
            return;
        }
        const ch = this.socket.channel(this.topic, this.params);
        ch.join()
            .receive('ignore', () => console.log('Access denied.'))
            .receive('ok', () => console.log('Access granted.'))
            .receive('timeout', () => console.log('Timeout.'));
            this.channel = ch;
        this.sendChannel(ch);
    }
    
    ngOnDestroy(){
        this.channel && this.channel.leave();
    }
}