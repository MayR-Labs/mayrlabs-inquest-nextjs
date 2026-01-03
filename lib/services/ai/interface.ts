import { IService } from '../base';

export interface IAIService extends IService {
  name: string;

  generateText(prompt: string): Promise<string>;
}
