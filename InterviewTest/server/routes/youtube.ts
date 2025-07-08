import express from 'express';
import fetch from 'node-fetch'; // npm install node-fetch

const router = express.Router();

const getPage = async (url: string): Promise<string> => {
  const res = await fetch(url);
  return await res.text();
};

router.get('/youtube-data', async (req, res) => {
  const ids = req.query.ids as string;
  const youtubeIds = ids.split(',');

  try {
    // Debug 最終優化後寫法
    // const results = await Promise.all(
    //   youtubeIds.map(async (id) => {
    //     const channelPage = await getPage(`https://www.youtube.com/${id}`);
    //     const videosPage = await getPage(`https://www.youtube.com/${id}/videos`);
    //     return { id, channelPage, videosPage };
    //   })
    // );
    // res.json(results);

    // Debug 第1種解法
    // var promises = [];
    // for (let i = 0; i < youtubeIds.length; i++) {
    //   var promise = new Promise(async (resolve, reject) => {
    //     try {
    //       var channelURL = `https://www.youtube.com/${youtubeIds[i]}`;
    //       var channelPage = await getPage(channelURL);
  
    //       var videosURL = `https://www.youtube.com/${youtubeIds[i]}/videos`;
    //       var videosPage = await getPage(videosURL);
    //       console.log(i, channelURL, videosURL);
    //       resolve({ channelPage, videosPage });
    //     } catch (e) {
    //       reject(e);
    //     }
    //   });
    //   promises.push(promise);
    // }
    // var results = await Promise.all(promises);
    // res.json(results);

    // Debug 第2種解法
    // var promises = [];
    // for (var i = 0; i < youtubeIds.length; i++) {
    //   ((index) => {
    //     var promise = new Promise(async (resolve, reject) => {
    //       try {
    //         var channelURL = `https://www.youtube.com/${youtubeIds[index]}`;
    //         var channelPage = await getPage(channelURL);
    
    //         var videosURL = `https://www.youtube.com/${youtubeIds[index]}/videos`;
    //         var videosPage = await getPage(videosURL);
    //         console.log(index, channelURL, videosURL);
    //         resolve({ channelPage, videosPage });
    //       } catch (e) {
    //         reject(e);
    //       }
    //     });
    //     promises.push(promise);
    //   })(i);
    // }
    // var results = await Promise.all(promises);
    // res.json(results);

    // Debug 第3種解法
    var promises = youtubeIds.map((id)=>{
      return new Promise(async (resolve, reject) => {
        try {
          var channelURL = `https://www.youtube.com/${id}`;
          var channelPage = await getPage(channelURL);
  
          var videosURL = `https://www.youtube.com/${id}/videos`;
          var videosPage = await getPage(videosURL);
          console.log(id, channelURL, videosURL);
          resolve({ channelPage, videosPage });
        } catch (e) {
          reject(e);
        }
      })
    });
    var results = await Promise.all(promises);
    res.json(results);

  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

export default router;