import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/service/user/user.service';
export declare class UserController {
    private srv;
    constructor(srv: UserService);
    login(data: UserDto): Promise<Object>;
}
