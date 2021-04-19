import * as pg from "pg";

export class DatabaseService {

    private static instance:DatabaseService;

    private pool:pg.Pool;

    constructor() {

        try {

        } catch(e) {

            throw e;
        
        }

    }

    // Service Instance Initialization
    static getInstance() {
        
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService();
        }
        return DatabaseService.instance;

    }

}

export default DatabaseService.getInstance();