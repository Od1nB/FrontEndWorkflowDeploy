import React from "react";

import { MemoryRouter } from 'react-router-dom';

import ReactDOM from "react-dom";
import SignUp from "../routes/registerGiver/SignUp";
import LocationGiver from "../routes/registerGiver/LocationGiver";

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

describe('SignUp registraion test', () => {
    
    let container: HTMLDivElement;

    beforeEach(()=> {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <MemoryRouter>
                <SignUp/>
            </MemoryRouter>, container)
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('SignUp page renders' , () => {
        const inputs = container.querySelectorAll('div');
        expect(inputs).toBeTruthy();
    })

    it('have two buttons' , () => {
        const buttons = container.querySelectorAll('button')
        expect(buttons).toHaveLength(2);
    })

});

