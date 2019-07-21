import React from 'react'
import Auth from '../components/Auth'
import renderer from 'react-test-renderer'

describe('Auth page', () => {
    
    it('has a valid snapshot', () => {
        const component = renderer.create(<Auth />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

})