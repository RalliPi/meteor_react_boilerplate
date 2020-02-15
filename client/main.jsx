import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import RouterContainer from '/imports/ui/router/Router'
import { ThemeProvider } from 'emotion-theming';
import { theme, CSSReset } from "@chakra-ui/core";


const ThemedRouterContainer = () => (<ThemeProvider theme={theme}>      <CSSReset />
  <RouterContainer /></ThemeProvider>)

Meteor.startup(() => {
  render(<ThemedRouterContainer />, document.getElementById('react-target'));
});
