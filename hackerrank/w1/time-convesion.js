/* 
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

s = 12:01:00PM
return 12:01:00

what i know 
- if s is pass 12 like 1pm add it to the hour
*/

function timeConversion(s) {
    // Write your code here

    let foo = "";
    foo += s[8]
    foo += s[9]
    // makes hour to int
    let hour = ""
        hour += s[0];
        hour+= s[1];

        let hourInt = parseInt(hour)
    // check if am or pm
    if (foo == "PM") {
        if (hourInt != 12){
            let x = hourInt + 12
            // console.log(x + s[2]+ s[3] + s[4] + s[5]+ s[6] + s[7])
            return x + s[2]+ s[3] + s[4] + s[5]+ s[6] + s[7]
        } else {
            // console.log(hourInt + s[2]+ s[3] + s[4] + s[5]+ s[6] + s[7])
            return hourInt + s[2]+ s[3] + s[4] + s[5]+ s[6] + s[7]
        }
    } else {
        // console.log(hourInt + s[2]+ s[3] + s[4] + s[5]+ s[6] + s[7])
        if (hourInt == 12){
            hourInt = "00"
        } else if (hourInt != 12 && hourInt < 10){
            return "0" + hourInt + s[2]+ s[3] + s[4] + s[5]+ s[6] + s[7]
        }
        return hourInt + s[2]+ s[3] + s[4] + s[5]+ s[6] + s[7]
    }

    


}

console.log(timeConversion("05:40:03AM"))