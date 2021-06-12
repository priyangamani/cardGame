
import React from "react"
import { generatePairNumberList,CHOOSE_NUMBER_OF_CARD_PAIRS,getShuffledListOfPairs } from './GeneratePairsNumList';
import { cleanup } from "@testing-library/react-native"

describe("<generatePairNumberList />", () => {

    afterEach(() => {
        cleanup()
      })
  
  
    test("generatePairNumberList  renders correctly", () => {
      // Assert
      expect(generatePairNumberList(1)).toBeDefined()
    })

    test("getShuffledListOfPairs correctly", () => {
      // Assert
      expect(getShuffledListOfPairs([])).toBeDefined()
      expect(getShuffledListOfPairs([])).toStrictEqual([])
    })


    test("CHOOSE_NUMBER_OF_CARD_PAIRS renders correctly", () => {
      // Assert
      expect(CHOOSE_NUMBER_OF_CARD_PAIRS).toBe(6)
    })
  
  })
  