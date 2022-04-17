import VehicleList from './components/VehicleList';

function App() {
  const vehicles = [
    {
      id: 1,
      registrationNo: 'ABC123',
      make: 'Chevrolet',
      model: 'Corvette',
      modelYear: '2015',
      imageUrl: 'https://i.postimg.cc/N09fbtKZ/car1.jpg',
      mileage: 25000,
      value: 175000,
    },
    {
      id: 2,
      registrationNo: 'DEF345',
      make: 'Ford',
      model: 'Mustang',
      modelYear: '2017',
      imageUrl: 'https://i.postimg.cc/Fsy2yyh8/car2.jpg',
      mileage: 48500,
      value: 175000,
    },
    {
      id: 3,
      registrationNo: 'GHI678',
      make: 'Porsche',
      model: 'Alpine',
      modelYear: '1967',
      imageUrl: 'https://i.postimg.cc/85xqHwJQ/car3.jpg',
      mileage: 89000,
      value: 175000,
    },
    {
      id: 4,
      registrationNo: 'JKL901',
      make: 'Mercedes',
      model: 'S500',
      modelYear: '2019',
      imageUrl: 'https://i.postimg.cc/MHRgrRVc/car4.jpg',
      mileage: 25000,
      value: 175000,
    },
    {
      id: 5,
      registrationNo: 'MNO902',
      make: 'Mercedes',
      model: 'AMG',
      modelYear: '2014',
      imageUrl: 'https://i.postimg.cc/wj9n01vv/car5.jpg',
      mileage: 25000,
      value: 175000,
    },
  ];

  return (
    <section className='container'>
      <h1>Välkommen till WestCoast Cars</h1>
      <h2>Sälj eller köp din bil hos oss</h2>
      <VehicleList vehicles={vehicles} />
    </section>
  );
}

export default App;
