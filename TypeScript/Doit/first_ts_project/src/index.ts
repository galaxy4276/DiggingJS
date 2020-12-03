import { makeRandomNumber } from './utils/makeRandomNumber';
import IPerson from './person/IPerson';
import { makePerson } from './person/Person';

const testMakePerson = (): void => {
  let eungi: IPerson = makePerson('eungi')
  let hungi: IPerson = makePerson('hungi')
  console.log(eungi, hungi);
}


testMakePerson();