export const checkClaimStatusColor = (status) => {
  switch(status) {
    case "Declined": 
      return {background: "#E84393"};
    case "Done":
      return {background: "#00B894"};
    default: //new
      return {background: "#6C5CE7"};
  }
}