import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";


@Component({
    selector:'app-chat-window',
    template:`  <div class="window">
                <mat-card class="matCard">
                    <mat-card-header class="header">
                    <div mat-card-avatar class="avatar">
                      <p class="avatar_title">{{user.name.toUpperCase().slice(0,1)}}</p>
                    </div>
                    <mat-card-title></mat-card-title>
                    <mat-card-subtitle>{{user.name}}</mat-card-subtitle>
                    </mat-card-header>
                    <mat-card-content class="content">
                        <p class="hey">Hey ! {{user.name}} </p>
                        <div>
                        <div *ngFor="let message of messages| keyvalue" >
                                <app-message-item [message]="message.value" [user]="user"></app-message-item>
                        </div>
                        <div #div id="div" class="divRef"></div>
                        </div>
                    </mat-card-content>
                    <mat-card-actions class="footer">
                        <mat-icon class="edit_icon">edit</mat-icon>
                        <form class="submit-form" (submit)="handleSubmit($event)">
                          <mat-form-field class="example-full-width" appearance="outline">
                            <mat-label>Enter Message</mat-label>
                            <input type="text" name="text" [(ngModel)]="text" matInput placeholder="Enter Your Message">
                          </mat-form-field>
                        </form>
                        <mat-icon class="edit_icon" (click)="handleSubmit($event)">send</mat-icon>

                    </mat-card-actions>
                </mat-card>
                </div>
    `,
    styleUrls:['card.css']
})
export class ChatWindowComponent implements OnChanges, OnInit, AfterViewInit{

    @Input() room: Object;
    @Input() user: Object;
    @Input() messages: any;
    @Input() pushMessage: Function;

    
    text: string = '';
    handleSubmit: Function = () => {};

    adjustTextMessage: Function = (text) => {
        return text.trim();
    };
    isMessageEmpty: Function = (text) => {
        return this.adjustTextMessage(text).length === 0;
    }

    disableButton = this.isMessageEmpty(this.text);
      
      @ViewChild('div')div:ElementRef;

    ngOnChanges(simpleChange: SimpleChanges){

      this.handleSubmit=(e)=>{
      e.preventDefault();
      if(this.text==='') return;
      else {
      this.pushMessage(this.text);
      this.text =''
      this.div.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
        
    }
    ngOnInit(){

      document.getElementById('div').scrollIntoView({ behavior: "smooth", block: "start" });
    }
    ngAfterViewInit() {

      this.div.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}