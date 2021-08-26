interface ISearch {
  text: string;
  suburb: string;
  updatedFrom?: number;
  updatedTo?: number;
  dayFrom?: number;
  dayTo?: number;
}

export default ISearch;
