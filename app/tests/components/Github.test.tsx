/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { screen, render } from "@testing-library/react";
import { describe, it } from "vitest";

import Github from "../../components/Github";

describe('GitHub ', () => {
    it('Should Render', () => {
        render(<Github />)
        const github = screen.getByTestId('github')
        expect(github).toBeVisible()
    })
})    
