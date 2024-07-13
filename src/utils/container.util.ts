import Container from 'typedi';
import { TestService } from '../services/test.service';

export const testService = Container.get(TestService);
