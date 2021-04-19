// import WebSocket from "ws";
import Session from "../models/session";
import {Tools} from "../lib/tools";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export default class Message {

    private WebSocket:WebSocket;

    private Session:Session;

    constructor(session:Session,data:any) {

        const json = Tools.parse.JSON(data);
        if(json) {

            // has data
            // jwt on data

        } else {

            if(data === "AUTH") {

                this.Session.WebSocket.send(session.auth());

            }

        }

    }

};