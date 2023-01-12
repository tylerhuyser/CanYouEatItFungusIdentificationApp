export default function convertDateToSeason (inputMonth) {
  let month = parseInt(inputMonth)
  let beginSeason = parseInt(month)
  let endSeason = parseInt(month)

  console.log(beginSeason)
  console.log(endSeason)

  if (month >= 2 && month <= 11) {
    beginSeason = month - 1
    endSeason = month + 1
  } else if (month == 1) {
    beginSeason = 12
    endSeason = month + 1
  } else if (month == 12) {
    beginSeason = month - 1
    endSeason = 1
  }

  console.log(beginSeason);
  console.log(endSeason);

  let season = (beginSeason) + '-' + (endSeason)
  console.log(season)
  
  return season 
}