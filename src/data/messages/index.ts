import { Message } from '../../types';
import { techMessages } from './tech';
import { lifeMessages } from './life';
import { careerMessages } from './career';
import { motivationMessages } from './motivation';

export const messages: Message[] = [
  ...techMessages,
  ...lifeMessages,
  ...careerMessages,
  ...motivationMessages
];