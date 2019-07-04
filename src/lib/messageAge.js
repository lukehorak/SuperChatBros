const makeTimeStamp = (ts) => {
   const date = new Date(ts)
   const hours = date.getHours();
   const mins = date.getMinutes();
   const sec = date.getSeconds();
   if(!hours){ // If no date
      return ""
   }
   return `${hours}:${mins}`
 }


module.exports = makeTimeStamp;