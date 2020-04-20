export const ArrayToObject = (key: string, list: any[]) => {
  return list.reduce((acc, elem) => {
    acc[elem[key]] = elem;
    return acc;
  }, {});
};
