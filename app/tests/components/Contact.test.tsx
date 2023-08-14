/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { screen, render } from "@testing-library/react";
import { it, describe } from 'vitest'

import Contact from '../../components/Contact'

describe('Contact ', () => {
    it('Should Render', () => {
        render(<Contact />)
        const home = screen.getByTestId('contact')
        expect(home).toBeVisible()
    })
})    
