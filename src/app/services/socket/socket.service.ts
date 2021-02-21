import { DoCheck, Injectable, OnDestroy, OnInit } from "@angular/core";
import { ConstantsService } from "../constants/constants.service";
import { UtilsService } from "../utils/utils.service";
import {Socket} from 'phoenix';

@Injectable()
export default class SocketService  {

    constructor(private utilsService: UtilsService, private constantsService: ConstantsService){
        
    }
    async fetchData() {
        const token = await this.utilsService.getToken();
        const params = {token};
        const s = new Socket(this.constantsService.WEB_SOCKET_URL, {params});
        s.onOpen( () => console.log("connection open!") )
        s.onError( () => console.log("there was an error with the connection!") )
        s.onClose( () => console.log("the connection dropped") )
        s.connect();
        return s;
    }
}