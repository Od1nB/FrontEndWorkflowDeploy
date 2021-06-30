import React from "react";

import { MemoryRouter } from 'react-router-dom';

import ReactDOM from "react-dom";
import SignUp from "../routes/registerGiver/SignUp";
// import Adapter from "enzyme-adapter-react-16";
// import { shallow, configure } from "enzyme";

describe('SignUp registraion test', () => {

    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <MemoryRouter>
                <SignUp />
            </MemoryRouter>, container)
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('SignUp page renders', () => {
        const inputs = container.querySelectorAll('div');
        expect(inputs).toBeTruthy();
    })

    it('have two buttons', () => {
        const buttons = container.querySelectorAll('button')
        expect(buttons).toHaveLength(2);
    })

    it('renders a location input', () => {
        expect(container.querySelectorAll("#location-input").length).toEqual(1)
    })

    it('renders a fullname input', () => {
        expect(container.querySelectorAll("#fullname").length).toEqual(1)
    })

    it('renders a email input', () => {
        expect(container.querySelectorAll("#email").length).toEqual(1)
    })

    it('renders a phoneNumber input', () => {
        expect(container.querySelectorAll("#phoneNumber").length).toEqual(1)
    })

    it('renders a familyType input', () => {
        expect(container.querySelectorAll("#familyType-input").length).toEqual(1)
    })
});

