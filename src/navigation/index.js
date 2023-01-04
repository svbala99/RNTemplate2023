// library imports
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// user imports
import MainStack from './MainStack';

/**
 * @function RootNavigation
 * @returns {JSX}
 * @description entire react navigation provider is wrapped on top of the app stack
 */
function RootNavigation() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

// exports
export default RootNavigation;
