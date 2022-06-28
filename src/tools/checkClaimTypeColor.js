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