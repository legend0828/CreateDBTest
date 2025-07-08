import fillMissingMetrics  from './fillMissingMetrics';
describe('utils test', () => {
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
    const example2 = [{
            date: 1738540800000,           // -9d
            averageLikesCount: 105,
            followersCount: 202,
            averageEngagementRate: 0.012
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
    const expectResult1 = [{
        date: 1738800000000,           // -6d
        averageLikesCount: 120,
        followersCount: 208,
        averageEngagementRate: 0.02
      },{
        date: 1738800000000,           // -6d
        averageLikesCount: 120,
        followersCount: 208,
        averageEngagementRate: 0.02
      },{
        date: 1739068800000,           // -3d
        averageLikesCount: 130,
        followersCount: 210,
        averageEngagementRate: 0.022
      },{
        date: 1739068800000,           // -3d
        averageLikesCount: 130,
        followersCount: 210,
        averageEngagementRate: 0.022
      },{
        date: 1739155200000,           // -2d
        averageLikesCount: 140,
        followersCount: 215,
        averageEngagementRate: 0.023
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

    const expectResult2 = [{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738540800000,           // -9d
        averageLikesCount: 105,
        followersCount: 202,
        averageEngagementRate: 0.012
      },{
        date: 1738540800000,           // -9d
        averageLikesCount: 105,
        followersCount: 202,
        averageEngagementRate: 0.012
      },{
        date: 1738713600000,           // -7d
        averageLikesCount: 110,
        followersCount: 205,
        averageEngagementRate: 0.015
      },{
        date: 1738800000000,           // -6d
        averageLikesCount: 120,
        followersCount: 208,
        averageEngagementRate: 0.02
      },{
        date: 1738800000000,           // -6d
        averageLikesCount: 120,
        followersCount: 208,
        averageEngagementRate: 0.02
      },{
        date: 1739068800000,           // -3d
        averageLikesCount: 130,
        followersCount: 210,
        averageEngagementRate: 0.022
      },{
        date: 1739068800000,           // -3d
        averageLikesCount: 130,
        followersCount: 210,
        averageEngagementRate: 0.022
      },{
        date: 1739155200000,           // -2d
        averageLikesCount: 140,
        followersCount: 215,
        averageEngagementRate: 0.023
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
    const expectResult3 = [{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738368000000,           // -11d
        averageLikesCount: 100,
        followersCount: 200,
        averageEngagementRate: 0.01
      },{
        date: 1738540800000,           // -9d
        averageLikesCount: 105,
        followersCount: 202,
        averageEngagementRate: 0.012
      },{
        date: 1738540800000,           // -9d
        averageLikesCount: 105,
        followersCount: 202,
        averageEngagementRate: 0.012
      },{
        date: 1738713600000,           // -7d
        averageLikesCount: 110,
        followersCount: 205,
        averageEngagementRate: 0.015
      },{
        date: 1738800000000,           // -6d
        averageLikesCount: 120,
        followersCount: 208,
        averageEngagementRate: 0.02
      },{
        date: 1738800000000,           // -6d
        averageLikesCount: 120,
        followersCount: 208,
        averageEngagementRate: 0.02
      },{
        date: 1739068800000,           // -3d
        averageLikesCount: 130,
        followersCount: 210,
        averageEngagementRate: 0.022
      },{
        date: 1739068800000,           // -3d
        averageLikesCount: 130,
        followersCount: 210,
        averageEngagementRate: 0.022
      },{
        date: 1739155200000,           // -2d
        averageLikesCount: 140,
        followersCount: 215,
        averageEngagementRate: 0.023
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
    const expectResult4 = [{
            date: 1738540800000,           // -9d
            averageLikesCount: 105,
            followersCount: 202,
            averageEngagementRate: 0.012
        },{
            date: 1738540800000,           // -9d
            averageLikesCount: 105,
            followersCount: 202,
            averageEngagementRate: 0.012
        },{
            date: 1739328000000,           // 0d
            averageLikesCount: 150,
            followersCount: 220,
            averageEngagementRate: 0.025
        },{
            date: 1739328000000,           // 0d
            averageLikesCount: 150,
            followersCount: 220,
            averageEngagementRate: 0.025
        },{
            date: 1739328000000,           // 0d
            averageLikesCount: 150,
            followersCount: 220,
            averageEngagementRate: 0.025
        },{
            date: 1739328000000,           // 0d
            averageLikesCount: 150,
            followersCount: 220,
            averageEngagementRate: 0.025
        },{
          date: 1739328000000,           // 0d
          averageLikesCount: 150,
          followersCount: 220,
          averageEngagementRate: 0.025
        },
    ];
    const expectResult5 = [{
            date: 1739328000000,           // 0d
            averageLikesCount: 150,
            followersCount: 220,
            averageEngagementRate: 0.025
        },
        {
            date: 1739328000000,           // 0d
            averageLikesCount: 150,
            followersCount: 220,
            averageEngagementRate: 0.025
        },
        {
            date: 1739328000000,           // 0d
            averageLikesCount: 150,
            followersCount: 220,
            averageEngagementRate: 0.025
        },
        {
            date: 1739328000000,           // 0d
            averageLikesCount: 150,
            followersCount: 220,
            averageEngagementRate: 0.025
        },
        {
            date: 1739328000000,           // 0d
            averageLikesCount: 150,
            followersCount: 220,
            averageEngagementRate: 0.025
        },
        {
            date: 1739328000000,           // 0d
            averageLikesCount: 150,
            followersCount: 220,
            averageEngagementRate: 0.025
        },
        {
            date: 1739328000000,           // 0d
            averageLikesCount: 150,
            followersCount: 220,
            averageEngagementRate: 0.025
        },
    ];


    test('fillMissingMetrics 7 day by Example1', () => {
        expect(fillMissingMetrics(example1, 7).flat()).toEqual(expectResult1);
    });
    test('fillMissingMetrics 14 day by Example1', () => {
        expect(fillMissingMetrics(example1, 14).flat()).toEqual(expectResult2);
    });
    test('fillMissingMetrics 30 day by Example1', () => {
        expect(fillMissingMetrics(example1, 30).flat()).toEqual(expectResult3);
    });   
    test('fillMissingMetrics 7 day by Example2', () => {
        expect(fillMissingMetrics(example2, 7).flat()).toEqual(expectResult4);
    });
    test('fillMissingMetrics 7 day by example3', () => {
        expect(fillMissingMetrics(example3, 7).flat()).toEqual(expectResult5);
    });
});