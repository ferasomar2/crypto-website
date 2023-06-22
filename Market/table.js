 // !TOP VOLUME
 let  = []
 for (let i = 0; i < coins.length; i++) {
   volumeArray.push(coins[i].volume.volumeArray.sort((a, b) => b - a))
   console.log(volumeArray, 'total volume');
 }

 let topVolumeArray = volumeArray.slice(0, 5)
 let downVolumeArray = volumeArray.slice(-5).reverse()

 for (let i = 0; i < coins.length; i++) {

   for (let x = 0; x < topVolumeArray.length; x++) {
     if (coins[i].volume == topVolumeArray[x]){
       console.log(coins[i].symbol, "top");
     }
   }
 
   for (let x = 0; x < downVolumeArray.length; x++) {
     if (coins[i].volume == downVolumeArray[x]){
       console.log(coins[i].symbol, 'down');
     }
   }

 }