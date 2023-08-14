/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { screen, render } from "@testing-library/react";
import { describe, it } from "vitest";

import Footer from '../../components/Footer'

describe('Footer ', () => {
    it('Should Render', () => {
        render(<Footer />)
        const footer = screen.getByTestId('footer')
        expect(footer).toBeVisible()
    })
})    
