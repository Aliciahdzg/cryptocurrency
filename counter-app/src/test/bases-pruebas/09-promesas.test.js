import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas'

describe('Pruebas en 09-promesas', () => {
    test('getHeroesByIdAsync debe retornar un heroe', (done) => {
        
        const id = 1;
        getHeroeByIdAsync( id ).then( hero => {

           expect(hero).toEqual({ 
            id:1,
            name: 'Batman',
            owner: 'DC'
           });
           
           done();
        })
    })

    test('getHeroesByIdAsync debe obtener un error si horeo no existe', (done) => {
        
        const id = 100;
        getHeroeByIdAsync( id )
           .then( hero => {
            expect( hero ).toBeFalsy();
            done();
           })
           .catch(err => {
            
            expect( err ).toBe(`No se pudo encontrar el héroe ${id}`)

            done();
           })
    })
})