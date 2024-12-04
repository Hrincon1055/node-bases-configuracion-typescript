const frutas: string[] = ['banana', 'uva', 'manzana'];

describe('App', () => {
  test('should be true', () => {
    expect(true).toBe(true);
  });

  // Evaluar string
  test('contener un mensaje', () => {
    expect('Hola').toContain('Hola');
    expect('Hola').toMatch(/Hola/);
  });

  test('array contiene manzana', () => {
    expect(frutas).toContain('manzana');
  });

  test('Contiene uva en la segunda posicion', () => {
    const [banana, uva] = frutas;
    expect(uva).toBe('uva');
  });

  // Pruebas a un callback
  // test('prueba callback', (done) => {
  //   const id=10;
  //   getUserById(id, (err, user)=>{
  //     expect(err).toBe('No exite el usuario con id: 10')
  //     expect(user).toBeUndefined()
  //     expect(user).toEqual({id:1, name: 'Henry'})
  //     expect(user).toBeUndefined()
  //     done()
  //   })
  // });
  const getUUID = () => '1234';
  const getAge = () => 35;
  // prueba cuando una funcion retorna una funcion
  //   test('prueba cuando una funcion retorna una funcion ', () => {
  // const makePerson = buildPerson({ getUUID, getAge });
  // expect(typeof makePerson).toBe('functio')
  //   });
});
