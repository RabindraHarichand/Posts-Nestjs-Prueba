import { ConsoleLogger, Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome World!';
  }

  getHelloName(name): string {
    console.log(name)
    return 'Welcome World!' + name;
  }

}
