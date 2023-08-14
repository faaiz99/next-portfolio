/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { screen, render } from "@testing-library/react";
import { describe, it } from "vitest";

import About from '../../components/About'

describe('About Page ', () => {
    it('Should Render', () => {
        render(<About />)
        const header = screen.getByTestId('about')
        expect(header).toBeVisible()
    })
})    
