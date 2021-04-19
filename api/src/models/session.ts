import WebSocket from "ws";

export default class Session {

    private key:string = "";

    public isAuthenticated:boolean = false;

    public level:number = 0;

    public WebSocket:WebSocket;

    constructor(ws:WebSocket) {

        this.WebSocket = ws;

        ws.send("AUTHREQUEST");

    }

    public auth(){

    }

};