export const computeSessionTime =  (minutes, currentTime = Date.now()) => {
    // const currentTime = Date.now();
    return new Date(currentTime + minutes*60000).getTime();
}

export const generateControllerOptions = arr => {
    let date = [], depAirport = [], arAirport = [], plnName = [];

    arr = Object.values(arr);
    
    for (let i = 0; i < arr.length; i++){
        date.push(arr[i]['FlyDate']);
        depAirport.push(arr[i]['DepartureAirport']);
        arAirport.push(arr[i]['ArrivalAirport']);
        plnName.push(arr[i]['PnlName'])
    }

    const result = {
        "date": [...new Set(date)],
        "dAir": filterArrayOfObjects(depAirport, 'Code'),
        "arAir": filterArrayOfObjects(arAirport, 'Code'),
        "pName": [...new Set(plnName)]
    };

    return result
}

export const filterArrayOfObjects = (arr, comp) => {
    const unique = arr
         .map(e => e[comp])
  
       // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
  
      // eliminate the dead keys & store unique objects
      .filter(e => arr[e]).map(e => arr[e]);
  
     return unique;
}

export const convertDate = str => {
    let day = "", month = "", year = "";
    let date = str.slice(0, str.indexOf('T'));
    day = date.slice(-2)
    year = date.slice(0, 4)
    month = getMonth(date.slice(5, 7))
    return `${day} ${month} ${year}`;
}

const getMonth = month => {
    switch(month){
        case "01":
            return "Jan";
        case "02":
            return "Feb";
        case "03":
            return "Mar";
        case "04":
            return "Apr";
        case "05":
            return "May";
        case "06":
            return "Jun";
        case "07":
            return "Jul";
        case "08":
            return "Aug";
        case "09":
            return "Sep";
        case "10":
            return "Oct";
        case "11":
            return "Nov";
        case "12":
            return "Dec";
        default:
            return month
    }
}