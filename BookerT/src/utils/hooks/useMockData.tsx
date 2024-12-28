export const useMockData = (lengfh: number, model: Record<string, any>) => {
  let data = [];
  for (let index = 0; index < lengfh; index++) {
    data.push({ id: index + 1, ...model });
  }
  return data;
};
