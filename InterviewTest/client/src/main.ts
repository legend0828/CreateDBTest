import $ from 'jquery';
import fillMissingMetrics from '../utils/fillMissingMetrics';
(function () {
  const example1 = [
    {
      date: 1738368000000,           // -11d
      averageLikesCount: 100,
      followersCount: 200,
      averageEngagementRate: 0.01
    },
    {
      date: 1738540800000,           // -9d
      averageLikesCount: 105,
      followersCount: 202,
      averageEngagementRate: 0.012
    },
    {
      date: 1738713600000,           // -7d
      averageLikesCount: 110,
      followersCount: 205,
      averageEngagementRate: 0.015
    },
    {
      date: 1738800000000,           // -6d
      averageLikesCount: 120,
      followersCount: 208,
      averageEngagementRate: 0.02
    },
    {
      date: 1739068800000,           // -3d
      averageLikesCount: 130,
      followersCount: 210,
      averageEngagementRate: 0.022
    },
    {
      date: 1739155200000,           // -2d
      averageLikesCount: 140,
      followersCount: 215,
      averageEngagementRate: 0.023
    },
    {
      date: 1739328000000,           // 0d
      averageLikesCount: 150,
      followersCount: 220,
      averageEngagementRate: 0.025
    },
  ];  

  const example2 = [
    {
      date: 1738886400000,           // -5d
      averageLikesCount: 120,
      followersCount: 208,
      averageEngagementRate: 0.02
    },
    {
      date: 1739328000000,           // 0d
      averageLikesCount: 150,
      followersCount: 220,
      averageEngagementRate: 0.025
    },
  ];

  const example3 = [{
      date: 1739328000000,           // 0d
      averageLikesCount: 150,
      followersCount: 220,
      averageEngagementRate: 0.025
    },
  ];

  let TARGET_DAY = 7;
  let selectExample: Array<any> = example1;
  
  $("#daysSelect").on("change", (e)=>{
    TARGET_DAY =  Number($(e.target).val());
  });
  $("#exampleSelect").on("change", (e) => {
    selectExample = $(e.target).val() == "1" ? example1 : $(e.target).val() == "2" ? example2 : example3;
  });
  $("#loadBtn").on("click", () => {
    if($("#exampleSelect").val() === "0" || $("#daysSelect").val() === "0" ){
      alert("Please Select Days or Example");
      return;
    }
    
    const fillDataArray = fillMissingMetrics(selectExample,TARGET_DAY);

    $("#outputExample").html(`<h3>Example</h3><div>${JSON.stringify(selectExample)}</div>`);
    $("#outputResult").html(`<h3>Result</h3><div>${JSON.stringify(fillDataArray)}</div>`);
  });

  
  
  //題目2 Debug
  $("#loadYoutubeBtn").on("click", () => {
    const youtubeIds = ['@darbbq', '@oojimateru', '@homemeat_clip'];
    const query = youtubeIds.join(',');

    fetch(`/api/youtube-data?ids=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(data => {
        $("#outputYoutubeResult").text("Data has been written to the console.")
        console.log(data);
      })
      .catch(err => console.error('Fetch error:', err));
  });
})();