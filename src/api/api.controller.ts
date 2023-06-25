import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: ':version.api.localhost' })
export class ApiController {
  @Get('')
  hello(@HostParam('version') version: string) {
    return `hello, API ${version}`;
  }
}
