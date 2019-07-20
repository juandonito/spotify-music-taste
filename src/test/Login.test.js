import React from 'react'
import Login from '../components/Login'
import renderer from 'react-test-renderer'

describe('Login page', () => {

    it('has a valid snapshot', () => {
        const component = renderer.create(<Login/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

})