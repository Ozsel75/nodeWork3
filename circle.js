function circleArea(r){
    const area = Math.PI * (r*r);
    console.log(`raduis is ${r} and the area is ${Math.round(area)}`)
}

function circleCircumference(r){
    const circumference = 2 *Math.PI * r;
    console.log(`radius is ${r} and the circumference is ${circumference.toFixed(2)}`)
}
// circleArea(5);
// circleCircumference(5);

module.exports = {
    circleArea,
    circleCircumference
}
// export {circleArea, circleCircumference };