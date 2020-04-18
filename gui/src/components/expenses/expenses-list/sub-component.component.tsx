import React from 'react';

export function ExpenseItem<P extends any>({ data }: P) {
  console.log('DATA', data);
  return <div>Sub component</div>;
}
