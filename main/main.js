module.exports = function main(inputs) {
    var price = 0;
	if(inputs.distance <= 2){
		price = 6 + 0.25 * inputs.parkTime;
	}else if(inputs.distance <= 8){
		price = 6 + (inputs.distance - 2) * 0.8 + inputs.parkTime * 0.25;
	}else{
		price = 6 + (8 - 2) * 0.8 + (inputs.distance - 8) * 0.8 * 1.5 + inputs.parkTime * 0.25;}
    return Math.round(price);
};
