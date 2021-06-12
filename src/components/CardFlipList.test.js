
import CardFlipList from './cardFlipContainer/CardFlipList';
import React from "react"
import { generatePairNumberList,CHOOSE_NUMBER_OF_CARD_PAIRS } from '../utils/GeneratePairsNumList';
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react-native"

describe("<CardFlipList />", () => {

    afterEach(() => {
        cleanup()
      })

    let component
    let mockCardItemList =  jest.fn()
    beforeEach(() => {
        component = (
         <CardFlipList listItems={generatePairNumberList(CHOOSE_NUMBER_OF_CARD_PAIRS)} restart={mockCardItemList} />
        )
      })

  
    test("renders correctly", () => {
      // Act
      const tree = render(component)
      // Assert
      expect(tree).toMatchSnapshot()
    })
  
    test("content components exists", () => {
      const { getByTestId, container } = render(component)
      expect(container).toBeDefined()
      expect(() => getByTestId("view-card-flip-container")).toBeDefined()
      expect(() => getByTestId("step-count-text")).toBeDefined()
      expect(() => getByTestId("restart-button")).toBeDefined()
    })

    test("restart Button click", () => {
        const { getByTestId } = render(component)
        const restartButton = getByTestId("restart-button")
        expect(restartButton).toBeDefined()
        fireEvent.press(restartButton)
      })
      test("flatList container", () => {
        const { getByTestId, debug } = render(component)
        const flatListContainer = getByTestId("flatlist-container")
        expect(flatListContainer).toBeDefined()
        expect(getByTestId("flatlist-container")).not.toBeNull()
        expect(flatListContainer.props.renderItem).toBeDefined()
      })
  })
  