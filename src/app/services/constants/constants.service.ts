import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class ConstantsService implements OnInit {
    constructor(){}
    GENERATE_TOKEN_URL = "https://api.sariska.io/api/v1/misc/generate-token";
    WEB_SOCKET_URL = "wss://api.sariska.io/api/v1/messaging/websocket";
    API_KEY = "27fd6f9b91c706492720d0e023a8aac067d94da499b03e8c39";

    COMPANY_NAME = 'Sariska';
    ngOnInit(){
        console.log('token', this.GENERATE_TOKEN_URL);
    }
}