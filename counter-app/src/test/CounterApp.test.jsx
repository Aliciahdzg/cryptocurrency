import { render, screen, fireEvent } from "@testing-library/react";
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp', () => {
    const initialValue = 100;

    test('Should be match with the snapshot', () => {
        const { container } = render( <CounterApp value={initialValue} />);
        expect( container ).toMatchSnapshot();
    });

    test('Should show inital value as 100', () => {
        render( <CounterApp value={initialValue} /> );
        expect( screen.getByText(initialValue) ).toBeTruthy();
        // expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('100');
    });

    test('should increase the number when clicked button +1', () => {
        render( <CounterApp value={initialValue} /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('101') ).toBeTruthy
    });

    test('should decreased the number when clicked button -1', () => {
        render( <CounterApp value={initialValue} /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('99') ).toBeTruthy
    });

    test('should works button reset', () => {
        render( <CounterApp value={initialValue} /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));

        expect( screen.getByText(100)).toBeTruthy()
    })


});