class DataBase {
  getData() {
    return 'Some data from the data';
  }
}
class BusinessLogic {
  constructor(data) {
    this.data = data;
  }

  processData() {
    const processedData = this.data + "Finished";
    return processedData
    // process the data in some way
  }
}

const database = new DataBase()
const businesslogic = new BusinessLogic(database)
businesslogic.processData();