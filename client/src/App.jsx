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
  ];

  return (
    <>
      <h1>Välkommen till WestCoast Cars</h1>
      <h2>Sälj eller köp din bil hos oss</h2>
      <VehicleList vehicles={vehicles} />
    </>
  );
}

export default App;
