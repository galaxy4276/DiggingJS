import * as U from '../utils/makeRandomNumber';
import IPerson from './IPerson';


export const makePerson = (name: string,
  age: number = U.makeRandomNumber()): IPerson => ({ name, age });

