import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from './decorators';

addDecorator((storyFn) => <ThemeDecorator>{storyFn()}</ThemeDecorator>);
