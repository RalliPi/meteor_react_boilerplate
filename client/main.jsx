import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import RouterContainer from '/imports/ui/router/Router'

Meteor.startup(() => {
  render(<RouterContainer />, document.getElementById('react-target'));
});
