import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App test', () => {
    let container: HTMLDivElement;
    const storeFake = (state: any) => ({
        default: () => {},
        subscribe: () => {},
        dispatch: () => {},
        getState: () => ({ ...state })
    });
    const store = storeFake({}) as any;

    beforeEach(()=> {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Provider store={store}>
                <MemoryRouter>
                    <App/>
                </MemoryRouter>
            </Provider>, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('App renders without crashing', () => {
        const inputs = container.querySelectorAll('div');
        expect(inputs).toBeTruthy();
    })

});

