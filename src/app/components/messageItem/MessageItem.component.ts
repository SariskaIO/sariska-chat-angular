import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-message-item',
    template: `
                <div class="message_item">
                <div class="custom_avatar">
                    <p class="avatar_title">{{user.name.toUpperCase().slice(0,1)}}</p>
                </div>
                <p class="message_content">
                    {{message.content || message}}
                </p>
                </div>
    `,
    styleUrls:['message_item.css']
})
export class MessageItemComponent {
    @Input() message: any;
    @Input() user: Object

}