import { Service } from 'typedi';
import { PrismaService } from './prisma.service';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '../utils/custom-error.util';

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

  async successTest() {
    return await this.prismaService.user_tb.findFirst({
      where: {
        idx: 2,
      },
    });
  }

  async getUserProfile(userIdx: number) {
    return await this.prismaService.user_tb
      .findFirst({
        where: {
          idx: userIdx,
          deleted_at: null,
        },
      })
      .then((res) => {
        if (!res) {
          throw new NotFoundException('profile not found');
        }

        return res;
      });
  }
}
