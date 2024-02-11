const url = "https://xnxxlive.github.io/newstv/newstvm3u.js"
fetch(url)
  .then((response) => {
  const urlData = response.json();
 return urlData;
  })
.then((productData) => {
const productData1 = productData;
console.log(productData1[0].url1);
allButtons.forEach(button => {

button.addEventListener("click", () => {

  if (button.classList.contains("match1")) {
    const currentplayingIndex = 0;
     videoFun1(productData1[0].url1);
     console.log(productData1[0].url1)
    } else if (button.classList.contains("match2")) {
     console.log("world");
     const currentplayingIndex = 1;
     videoFun1(productData1[0].url2);
   } else if (button.classList.contains("match3")) {
    console.log("world");
    videoFun1(productData1[0].url3);
   } else if (button.classList.contains("match4")) {
   console.log("world");
    videoFun1(productData1[0].url4);
  } else if (button.classList.contains("match5")) {
    console.log("world");
    videoFun1(productData1[0].url5);
    console.log(productData1[0].url5)

  } else if (button.classList.contains("match6")) {
   console.log("world");
   const currentplayingIndex = 1;
   videoFun1(productData1[1].url1);
  } else if (button.classList.contains("match7")) {
    console.log("world");
    const currentplayingIndex = 2;
    videoFun1(productData1[1].url2);
} else if (button.classList.contains("match8")) {
  videoFun1(productData1[1].url3);
} else if (button.classList.contains("match9")) {
    console.log("world");
    videoFun1(productData1[1].url4);
    console.log(productData1[1].url4)
  } else if (button.classList.contains("match10")) {
    console.log("world");
    videoFun1(productData1[1].url5);

  } else if (button.classList.contains("match11")) {
    console.log("world");
    videoFun1(productData1[2].url1);
   } else if (button.classList.contains("match12")) {
     console.log("world");
     const currentplayingIndex = 3;
     videoFun1(productData1[2].url2);
   } else if (button.classList.contains("match13")) {
    console.log("world");
    const currentplayingIndex = 0;
    videoFun1(productData1[2].url3);
   } else if (button.classList.contains("match14")) {
     console.log("world");
     videoFun1(productData1[2].url4);
   } else if (button.classList.contains("match15")) {
    console.log("world");
    videoFun1(productData1[2].url5);

  } else if (button.classList.contains("match16")) {
     console.log("world");
     videoFun1(productData1[3].url1);
    } else if (button.classList.contains("match17")) {
     console.log("world");
    videoFun1(productData1[3].url2);
  } else if (button.classList.contains("match18")) {
   videoFun1(productData1[3].url3);
 } else if (button.classList.contains("match19")) {
   videoFun1(productData1[3].url4);
 } else if (button.classList.contains("match20")) {
    videoFun1(productData1[3].url5);

  } else if (button.classList.contains("match21")) {
    videoFun1(productData1[4].url1);
  } else if (button.classList.contains("match22")) {
     videoFun1(productData1[4].url2);
  } else if (button.classList.contains("match23")) {
    videoFun1(productData1[4].url3);
 } else if (button.classList.contains("match24")) {
   videoFun1(productData1[4].url4);
 } else if (button.classList.contains("match25")) {
   videoFun1(productData1[4].url5);

  } else if (button.classList.contains("match26")) {
   videoFun1(productData1[5].url1);
   } else if (button.classList.contains("match27")) {
  videoFun1(productData1[5].url2);
  } else if (button.classList.contains("match28")) {
    videoFun1(productData1[5].url3);
   } else if (button.classList.contains("match29")) {
    videoFun1(productData1[5].url4);
  } else if (button.classList.contains("match30")) {
     videoFun1(productData1[5].url5);

  } else if (button.classList.contains("match31")) {
   videoFun1(productData1[6].url1);
  } else if (button.classList.contains("match32")) {
  videoFun1(productData1[6].url2);
  } else if (button.classList.contains("match33")) {
   videoFun1(productData1[6].url3);
  } else if (button.classList.contains("match34")) {
     videoFun1(productData1[6].url4);
  } else if (button.classList.contains("match35")) {
   videoFun2(productData1[6].url5);

  } else if (button.classList.contains("match36")) {
  ideoFun1(productData1[7].url1);
} else if (button.classList.contains("match37")) {
  videoFun1(productData1[7].url2);
  } else if (button.classList.contains("match38")) {
  videoFun1(productData1[7].url3);
 } else if (button.classList.contains("match39")) {
   videoFun1(productData1[7].url4);
  } else if (button.classList.contains("match40")) {
     videoFun1(productData1[7].url5);

  } else if (button.classList.contains("match41")) {
   videoFun1(productData1[8].url1);
 } else if (button.classList.contains("match42")) {
   videoFun1(productData1[8].url2);
 } else if (button.classList.contains("match43")) {
   videoFun1(productData1[8].url3);
  } else if (button.classList.contains("match44")) {
   console.log("world");
   videoFun1(productData1[8].url4);
  } else if (button.classList.contains("match45")) {
    videoFun1(productData1[8].url5);

  } else if (button.classList.contains("match46")) {
    console.log("world");
    videoFun1(productData1[9].url1);
   } else if (button.classList.contains("match47")) {
    videoFun1(productData1[9].url2);
    } else if (button.classList.contains("match48")) {
      videoFun1(productData1[9].url3);
   } else if (button.classList.contains("match49")) {
    videoFun1(productData1[9].url4);
   } else if (button.classList.contains("match50")) {
    videoFun1(productData1[9].url5);

  } else if (button.classList.contains("match51")) {
    videoFun1(productData1[10].url1);
  } else if (button.classList.contains("match52")) {
    videoFun1(productData1[10].url2);
   } else if (button.classList.contains("match53")) {
    videoFun1(productData1[10].url3);
   } else if (button.classList.contains("match54")) {
    videoFun1(productData1[10].url4);
   } else if (button.classList.contains("match55")) {
    videoFun1(productData1[10].url5);

  } else if (button.classList.contains("match56")) {
    videoFun1(productData1[11].url1);
    } else if (button.classList.contains("match57")) {
      videoFun1(productData1[11].url2);
   } else if (button.classList.contains("match58")) {
    videoFun1(productData1[11].url3);
   } else if (button.classList.contains("match59")) {
    videoFun1(productData1[11].url4);
   } else if (button.classList.contains("match60")) {
    videoFun1(productData1[11].url5);

  } else if (button.classList.contains("match61")) {
    videoFun1(productData1[12].url1);
   } else if (button.classList.contains("match62")) {
    videoFun1(productData1[12].url2);
   } else if (button.classList.contains("match63")) {
    videoFun1(productData1[12].url3);
   } else if (button.classList.contains("match64")) {
    videoFun1(productData1[12].url4);
   } else if (button.classList.contains("match65")) {
    videoFun1(productData1[12].url5);

   } else if (button.classList.contains("match66")) {
    videoFun1(productData1[13].url1);
   } else if (button.classList.contains("match67")) {
    videoFun1(productData1[13].url2);
    } else if (button.classList.contains("match68")) {
      videoFun1(productData1[13].url3);
    } else if (button.classList.contains("match69")) {
      videoFun1(productData1[13].url4);
    } else if (button.classList.contains("match70")) {
      videoFun1(productData1[13].url5);

   } else if (button.classList.contains("match71")) {
    videoFun1(productData1[14].url1);
   } else if (button.classList.contains("match72")) {
    videoFun1(productData1[14].url2);
   }else if (button.classList.contains("match73")) {
    videoFun1(productData1[14].url3);
   }else if (button.classList.contains("match74")) {
    videoFun1(productData1[14].url4);
   }else if (button.classList.contains("match75")) {
    videoFun1(productData1[14].url5);
   }
  })
})
 })
.catch((error) => {
console.log("try catch error")
})

const allButtons = document.querySelectorAll(`.match1,.match2,.match3,.match4,.match5,.match6,.match7,.match8,.match9,.match10,.match11,.match12,.match13,.match14,.match15,

.match16,.match17,.match18,.match19,.match20,.match21,.match22,.match23,.match24,.match25,.match26,.match27,.match28,.match29,.match30,.match31,.match32,.match33,.match34,.match35,
.match36,.match37,.match38,.match39,.match40,.match41,.match42,.match43,.match44,.match45,.match46,.match47,.match48,.match49,.match50,.match51,.match52,.match53,.match54,.match55,.match56,.match57,
.match58,.match59,.match60,.match61,.match62,.match63,.match64,.match65,.match66,.match67,.match68,.match69,.match70,.match71,.match72,.match73
,.match74,.match75,.match76,.match77,.match78,.match79,.match80,.match81,.match82,.match83
,.match84,.match85,.match86,.match87,.match88,.match89,.match90,.match91,.match92,.match93
,.match94,.match95,.match96,.match97,.match98,.match99,.match100`);

const videoFun2 = (m3u8URL2) => {
      const isAndroid = /Android/i.test(navigator.userAgent);
      const networkStreamPlayerURL = `intent://${m3u8URL2}#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=PLAYIDTV;end`;
    if (isAndroid) {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none'; 
         iframe.src = networkStreamPlayerURL;
         document.body.appendChild(iframe);
         setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000); 
      } else {
        alert("aviableOnAndroidDevice");
      }
    };
const videoFun1 = (m3u8URL1) => {
      const isAndroid = /Android/i.test(navigator.userAgent);
      const networkStreamPlayerURL = `intent://${m3u8URL1}#Intent;scheme=http;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=PLAYIDTV;end`;
    if (isAndroid) {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none'; 
         iframe.src = networkStreamPlayerURL;
         document.body.appendChild(iframe);
         setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000); 
      } else {
        alert("aviableOnAndroidDevice");
      }
    };
/*
const allButtons = document.querySelectorAll(`.match1,.match2,.match3,.match4,.match5,.match6,.match7,.match8,.match9,.match10,.match11,.match12,.match13,.match
const videoFun2 = (m3u8URL) => {
console.log("helloWorld");
const isAndroid = /Android/i.test(navigator.userAgent);
if (isAndroid) {
 const networkStreamPlayerURL = `intent://${m3u8URL}#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=PLAYIDTV;end`;
// Try to open the custom URL
window.location.href = networkStreamPlayerURL;
} else {
// Show a message or provide a fallback for non-Android devices
alert("This feature is only available on Android devices.");
}
};

const videoFun1 = (m3u8URL) => {
console.log("helloWorld");
const isAndroid = /Android/i.test(navigator.userAgent);
if (isAndroid) {
const networkStreamPlayerURL = `intent://${m3u8URL}#Intent;scheme=http;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=PLAYIDTV;end`;
// Try to open the custom URL
window.location.href = networkStreamPlayerURL;
} else {
// Show a message or provide a fallback for non-Android devices
alert("This feature is only available on Android devices.");
}
};*/
