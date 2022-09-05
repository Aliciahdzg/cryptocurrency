import { getImagen } from '../../base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
    test('getImage debe retornar un URL de la imagen', async() => {

        const url = await getImagen();
        const resp = await getImagen();

        expect(typeof url).toBe('string');
        expect( resp ).toBe('No se encontro la imagen');
    })


})