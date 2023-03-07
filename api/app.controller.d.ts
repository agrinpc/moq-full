import { Response } from 'express';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    serveApp(res: Response): Promise<void>;
    redirect(res: any, id: string): any;
}
