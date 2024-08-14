
let aqi = 107


if (aqi>0 && aqi <=50) {
    console.log("Air Quality: Good")
} else if (aqi>50 && aqi <=100) {
    console.log("Air Quality: Fair")
}
else if (aqi > 101 && aqi <=150){
    console.log("Air Quality: Moderate")
} else if (aqi >150 && aqi <=200) {
    console.log("Air Quality: Unhealthy for Sensitive Groups")
} else if (aqi >200 && aqi <=300 ){
    console.log("Air Quality: Very  Unhealthy")
} else {
    console.log("Air Quality: Hazardous")
}