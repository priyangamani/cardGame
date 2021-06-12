
import App from './App';
import React from "react"
import { generatePairNumberList,CHOOSE_NUMBER_OF_CARD_PAIRS } from './src/utils/GeneratePairsNumList';
import { cleanup, render, waitFor } from "@testing-library/react-native"


describe("<CardFlipList APP />", () => {

    afterEach(() => {
        cleanup()
      })

    let component
    beforeEach(() => {
        component = (
         <App />
        )
      })

  
    test("renders correctly", () => {
      // Act
      const tree = render(component)
      // Assert
      expect(tree).toMatchSnapshot()
    })
  
    test("render container", async () => {
      const { getByTestId, container } = await waitFor(() => render(component))

      expect(() => getByTestId("view-app-container")).toBeDefined()
      expect(() => getByTestId("loading_text")).toBeDefined()
      expect(generatePairNumberList(CHOOSE_NUMBER_OF_CARD_PAIRS)).toBeDefined()
    })

  })
 