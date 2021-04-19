import WebSocketService from "./services/ws";
import Session from "./models/session";
import Message from "./models/message";

// http(s) and auth switches here

WebSocketService.Server.on("connection",(ws)=>{

    console.log(ws);

    let session:Session;

    ws.on("open",()=>{
        new Session(ws);
    })

    ws.on("message",data=>{

        console.log(session);

        let message = new Message(session,data);

    });

    // session start

    // session authentication

    // session user object creation if authenticated

    // user auth

    // 

});