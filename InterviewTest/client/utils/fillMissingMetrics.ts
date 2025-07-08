const ONE_DAY_MS = 24 * 60 * 60 * 1000;

//題目1 Algorithm - Fill in Missing Daily Metrics
type Metric = {
    date: number; // UTC timestamp at midnight
    averageLikesCount: number;
    followersCount: number;
    averageEngagementRate: number;
};

/**
 * Fill in missing metrics to ensure complete data for the specified days
 * 
 * @param dataArray - Array of metric objects sorted by date in ascending order
 * @param targetDays - The specified number of days
 * @returns An array of metrics with exactly the specified number of days of data
 */
const fillMissingMetrics = (dataArray: Array<Metric>, targetDays: number) : Array<Metric> => {
    if(dataArray.length === 1){
      return Array(targetDays).fill(dataArray);
    }
    const resultArray = [];

    const fillData = (data:Metric, loopCount: number): void => {
      for(let i = 0; i < loopCount; i++){
        if(resultArray.length >= targetDays){
          break;
        }
        resultArray.push(data);
      }
    }

    for(let i = dataArray.length - 1; i > 0 && resultArray.length < targetDays; i--){
      const currentData = dataArray[i];
      const prevData = dataArray[i-1];
      const gapDays = Math.floor((currentData.date - prevData.date) / ONE_DAY_MS);
      
      resultArray.push(currentData);
      
      if(gapDays <= 1){
        continue;
      }

      const newerCount = Math.floor((gapDays - 1) / 2);
      const olderCount = Math.ceil((gapDays - 1) / 2);

      fillData(currentData, newerCount);
      fillData(prevData, olderCount);
    }

    if(resultArray.length < targetDays){
      fillData(dataArray[0], targetDays - resultArray.length);
    }

    return resultArray.reverse();
}
  
export default fillMissingMetrics;