let red = (feature, latlng) => {

	return L.circleMarker(latlng, {
		radius: 10,
		fillColor: "#FF0000",
		color: "#FFFFFF",
		weight: 2,
		opacity: 1,
		fillOpacity: 1
	});
}

let blue = (feature, latlng) => {

	return L.circleMarker(latlng, {
		radius: 10,
		fillColor: "#0000FF",
		color: "#FFFFFF",
		weight: 2,
		opacity: 1,
		fillOpacity: 1
	});
}