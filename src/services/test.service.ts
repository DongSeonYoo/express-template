import { Service } from 'typedi';
import { PrismaService } from './prisma.service';
import { BadRequestException, InternalServerErrorException } from '../utils/custom-error.util';

@Service()
export class TestService {
  constructor(private readonly prismaService: PrismaService) {}

  async excutePrismaClientKnownRequestError() {
    return this.prismaService.user_tb.create({
      data: {
        email: 'email@naver.com',
        name: 'name',
        password: 'password',
      },
    });
  }

  async excuteHttpException() {
    throw new BadRequestException('Excute BadRequestException');
  }

  async excuteInternalServerErrorException() {
    throw new InternalServerErrorException('Excute InternalServerErrorException');
  }
}
