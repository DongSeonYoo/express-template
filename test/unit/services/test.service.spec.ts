import { TestService } from '../../../src/services/test.service';
import { PrismaService } from '../../../src/services/prisma.service';

describe('TestService', () => {
  let testService: TestService;
  let prismaServiceMock: jest.Mocked<Partial<PrismaService>> & PrismaService;

  beforeEach(() => {
    prismaServiceMock = {
      user_tb: {
        findFirst: jest.fn(),
        create: jest.fn(),
      },
    } as unknown as PrismaService;

    testService = new TestService(prismaServiceMock);
  });

  it('should definded', () => {
    expect(testService).toBeDefined();
  });
});
