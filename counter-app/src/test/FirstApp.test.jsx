import { render } from "@testing-library/react"
import FirstApp from '../FirstApp';


describe('Pruebas en  <FirstApp />', () => {
    const name = 'Alicia Hernandez';
    const title = 'My FirstApp';
    const subtitle = 'Hola Soy:';
     
    // test('debe hacer match con el snapshot', () => {

    //     const { container } = render(<FirstApp name={name} title={title} subtitle={subtitle} />);

    //     expect( container ).toMatchSnapshot();
    // });

    test('debe mostrar el titulo en un h1', () => {
        
        const { container, getByText, getByTestId } = render(<FirstApp name={name} title={title} subtitle={subtitle} />);
        expect( getByText(title) ).toBeTruthy();
         
        // No se recomienda hacerlo de la siguiente manera
        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toContain( title );
        expect( getByTestId('test-title').innerHTML ).toBe(title);
    });

    test('debe mostrar el subtitulo enviado en props', () => {
        const { getByText } = render(
            <FirstApp 
               name={name} 
               title={title} 
               subtitle={subtitle} 
            />
        );

        expect( getByText( subtitle ) ).toBeTruthy();
    })
})