/**
 * External Imports
 */
import React from 'react';
import { HeaderProps } from 'react-table';

/**
 * Internal Imports
 */
import { camelToWords } from '../../utils';

export const DefaultHeader: React.FC<HeaderProps<any>> = ({ column }: any) => (
  <>{column.id.startsWith('_') ? null : camelToWords(column.id)}</>
);
