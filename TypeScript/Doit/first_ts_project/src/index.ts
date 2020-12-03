import IPerson from './person/IPerson';
import Person from './person/Person';
import Chance from 'chance';
import * as R from 'ramda';

const chance = new Chance();

let person: IPerson[] = R.range(0, 2)
              .map((n: number) => new Person(chance.name(), chance.age()))
console.log(person);