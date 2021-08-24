interface ISearch {
  text: string;
  suburb: string;
  updatedFrom?: Date;
  updatedTo?: Date;
  dayFrom?: Date;
  dayTo?: Date;
}

export default ISearch;
