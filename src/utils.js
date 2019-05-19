export const dateToNumberOfDaysInMonth = date => {
    const month = date.getMonth();
    const year = date.getFullYear();
    if (month === 1) {
      if (year % 4 === 0) {
        return 29;
      } else return 28;
    } else if (month >= 7) {
      if (month % 2 === 0) {
        return 30;
      } else return 31;
      // july and august
      return 31;
    } else {
      if (month % 2 === 0) {
        return 31;
      } else return 30;
    }
  };

  export const returnNthMonth = function(date, nth) {
    const newDate = new Date(date);
    if (nth === 0) return newDate;
  
    newDate.setMonth(date.getMonth() + nth);
    return newDate;
  }
  
  export const returnNextMonth = function(date) {
    return returnNthMonth(date, 1);
  };
  
  export const returnPreviousMonth = function(date) {
    return returnNthMonth(date, -1);
  };
  
  export const returnNthDate = function(date, nthDay) {
    const newDate = new Date(date);
    if (nthDay === 0) return newDate;
  
    newDate.setDate(nthDay);
    return newDate;
  };