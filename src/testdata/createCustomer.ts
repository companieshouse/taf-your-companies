import { faker } from '@faker-js/faker';
import fs from 'fs';

export const generateCustomersData = function () {
  const users: { id: number; full_name: string; email: string; password: string; phone_number: string }[] = [];

  for (let id = 1; id <= 2; id++) {
    const randomName = faker.person.fullName();
    const email = faker.internet.email({
      firstName: randomName,
      provider: 'chtest.mailosaur.net',
      allowSpecialCharacters: false,
    });

    users.push({
      id: id,
      full_name: randomName,
      email: email,
      password: 'Password123!',
      phone_number: '07418612089',
    });
  }

  return { customers: users };
};

const dataObj = generateCustomersData();

fs.writeFileSync('tests/customerDataMobilets.json', JSON.stringify(dataObj, null, '\t'));
