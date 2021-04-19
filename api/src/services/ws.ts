import WebSocket from "ws";

export class WebSocketService {

    private static instance:WebSocketService;

    public Server:WebSocket.Server;

    constructor() {

        try {

            this.Server = new WebSocket.Server({ port: 8080 })

            console.log(this.Server);

        } catch(e) {

            throw e;
        
        }

    }

    // Service Instance Initialization
    static getInstance() {
        
        if (!WebSocketService.instance) {
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;

    }

}

export default WebSocketService.getInstance();