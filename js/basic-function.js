/*This script is placed inside of an immediately invoked function expression */
(function () {
    //Part One: Create Hotel Object and write out offer details

    var hotel = {
        name: 'Park',
        roomRate: 240, //ammount in dollars
        discount: 15, //Percentage discount
        offerPrice: function () {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    //Write out the Hotel name, standard rate, and special rate
    var hotelName, roomRate, specialRate; //declare variables

    hotelName = document.getElementById('hotelName'); //Get elements from HTML
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;           //Write hotel name
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);        //Write standard room rate
    specialRate.textContent = '$' + hotel.offerPrice();  //Write discounted room rate

    //Part Two: Calculate and write the expiry details for the offer

    var expiryMsg; //message displayed to users
    var today; //Today's date
    var elEnds; //The element that shows the message about the offer ending

    function offerExpires(today) {
        //Declare variables within the local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        //add 7 days time in milliseconds
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        //Create arrays to hold the names of the days of the days and months
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        //Collect the parts of the date to display on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        //Create the message
        expiryMsg = 'Offer expires next: ';
        expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);


//Finish the IIFE
} ());