let address: any = {
  country: 'Korea',
  city: 'Seoul',
  address1: 'Gangnam-gu',
  address2: 'Sinsa-dong',
  address3: '673443543'
};

const { country, city, ...detail } = address;

console.log(detail);
