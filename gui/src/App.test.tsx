/**
 * External Imports
 */
import initStoryshots from '@storybook/addon-storyshots';

// Run story snapshots for entire app
// CRA doesn't allow "root" property change. So include it here.
// ref: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/utils/createJestConfig.js#L73
initStoryshots();
