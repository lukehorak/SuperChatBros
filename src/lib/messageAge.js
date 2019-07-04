const makeTimeStamp = (ts) => {
   const date = new Date(ts)
   const hours = date.getHours();
   let mins = date.getMinutes();
   mins = (mins < 10 ? '0' + mins : mins )
   const sec = date.getSeconds();
   if(!hours){ // If no date
      return ""
   }
   return `${hours}:${mins}`
 }


module.exports = makeTimeStamp;