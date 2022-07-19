export const parseDate = (date) =>  {
  return date[8] + date[9] + "/" + 
      date[5] + date[6] + "/" + 
      date[0] + date[1] + date[2] + date[3];
}


export const checkClaimTypeColor = (type) => {
  switch(type) {
    case "Hardware": 
      return {background: "#7DB59A"};
    case "Software":
      return {background: "#FF7675"};
    case "TroubleShooting":
      return {background: "#6C5CE7"};
    default:
      return {background: "#FDCB6E"};
  }
}


export const checkClaimStatusColor = (status) => {
  switch(status) {
    case "Declined": 
      return {background: "#E84393"};
    case "Done":
      return {background: "#00B894"};
    case "New":
      return {background: "#6C5CE7"};
    default: //in progress
      return {background: "#FDCB6E"};
  }
}