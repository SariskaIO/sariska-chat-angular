import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConstantsService } from './services/constants/constants.service';
import { UtilsService } from './services/utils/utils.service';
import SocketService from './services/socket/socket.service';
import { ChannelComponent } from './components/channel/channel.component';
import { ChatWindowComponent } from './components/chatWindow/ChatWindow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MessageItemComponent } from './components/messageItem/MessageItem.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ChatWindowComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ConstantsService,
    UtilsService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
