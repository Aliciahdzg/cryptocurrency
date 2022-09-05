import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroesByID debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: "Batman",
            owner: "DC"
          })
    });

    test('getHeroesByID debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const allHeroes = getHeroesByOwner(owner);
        
        expect(allHeroes.length).toBe(3);
        expect(allHeroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
        
        expect(allHeroes).toEqual( heroes.filter(heroe => heroe.owner === owner))
        
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const allHeroes = getHeroesByOwner(owner);

        expect(allHeroes.length).toBe(2);
        expect(allHeroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]);
        
        expect(allHeroes).toEqual( heroes.filter(heroe => heroe.owner === owner))
    })
})