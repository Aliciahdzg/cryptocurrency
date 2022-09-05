import { render, screen } from "@testing-library/react"
import FirstApp from '../FirstApp';


describe('Pruebas en  <FirstApp />', () => {
    const name = 'Alicia Hernandez';
    const title = 'My FirstApp';
    const subtitle = 'Hola Soy:';

    test('debe hacer match con el snapshot', () => {
        const {container} = render( <FirstApp name={name} title={title} subtitle={subtitle} />);

        expect( container ).toMatchSnapshot();

    });

    test('debe mostrar el mensaje My FirstApp', () => {
         
        render( <FirstApp name={name} title={title} subtitle={subtitle} /> );
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('debe mostrar el titulo en un h1', () => {

        render( <FirstApp name={name} title={title} subtitle={subtitle} /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title);
    });

    test('debe mostrar el subtitulo enviado por props', () => {
        render( 
          <FirstApp 
            name={name} 
            title={title} 
            subtitle={subtitle} 
          /> 
        );
        expect( screen.getByText( subtitle ) ).toBeTruthy();
    })
})