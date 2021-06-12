import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import CardFlipList from './src/components/cardFlipContainer/CardFlipList';
import {
  generatePairNumberList,
  CHOOSE_NUMBER_OF_CARD_PAIRS,
} from './src/utils/GeneratePairsNumList';
import styles from './App.style'

const App = () => {
  const [cardListItems, setCardListItems] = useState([]);

  useEffect(() => {
    getCardItemsList();
  }, []);

  const getCardItemsList = () => {
    setCardListItems(generatePairNumberList(CHOOSE_NUMBER_OF_CARD_PAIRS));
  };

  return (
    <View style={styles.container} testID='view-app-container'>
      {cardListItems.length > 0 ? (
        <CardFlipList listItems={cardListItems} restart={getCardItemsList} />
      ) : (
        <Text testID='loading_text'>Loading Cards...</Text>
      )}
    </View>
  );
};

export default App;
