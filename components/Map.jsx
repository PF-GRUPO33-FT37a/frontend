// import {
// 	GoogleMap,
// 	InfoWindow,
// 	Marker,
// 	LoadScript,
// } from '@react-google-maps/api';

// export default function Map() {
// 	const key = 'AIzaSyB3rS6UDVt2aN_8zki8FmvPMbm0rq1FH6Q';
// 	const containerStyle = {
// 		width: '100%',
// 		height: '400px',
// 	};

// 	const center = {
// 		lat: 4.722365,
// 		lng: -74.065015,
// 	};

// 	const markers = [
// 		{
// 			position: {
// 				lat: 4.722365,
// 				lng: -74.065015,
// 			},
// 			label: 'FashinFinds Bogotá',
// 		},
// 		{
// 			position: {
// 				lat: -34.568767,
// 				lng: -58.698108,
// 			},
// 			label: 'FashinFinds Buenos Aires',
// 		},
// 	];

// 	return (
// 		<LoadScript googleMapsApiKey={key}>
// 			<GoogleMap center={center} zoom={10} mapContainerStyle={containerStyle}>
// 				{markers.map((marker, index) => (
// 					<Marker key={index} position={marker.position}>
// 						<div>{marker.label}</div>
// 					</Marker>
// 				))}
// 			</GoogleMap>
// 		</LoadScript>
// 	);
// }

import React, { useState } from 'react';
import {
	GoogleMap,
	InfoWindow,
	Marker,
	LoadScript,
} from '@react-google-maps/api';

export default function Map() {
	const key = 'AIzaSyB3rS6UDVt2aN_8zki8FmvPMbm0rq1FH6Q';
	const containerStyle = {
		width: '100%',
		height: '400px',
	};

	// const center = {
	// 	lat: 4.722365,
	// 	lng: -74.065015,
	// };

	const markers = [
		{
			position: {
				lat: 4.722365,
				lng: -74.065015,
			},
			label: 'FashinFinds Bogotá',
		},
		{
			position: {
				lat: -34.568767,
				lng: -58.698108,
			},
			label: 'FashinFinds Buenos Aires',
		},
	];

	const [activeMarker, setActiveMarker] = useState(markers[0]);
	const [center, setCenter] = useState(markers[0].position);

	const handleMarkerClick = (marker) => {
		setActiveMarker(marker);
	};

	const handleListItemClick = (marker) => {
		setActiveMarker(marker);
		setCenter(marker.position);
	};

	return (
		<LoadScript googleMapsApiKey={key}>
			<div>
				<ul style={{ listStyleType: 'none', padding: 0 }}>
					{markers.map((marker, index) => (
						<li
							key={index}
							style={{ cursor: 'pointer', margin: '5px 0' }}
							onClick={() => handleListItemClick(marker)}
						>
							{marker.label}
						</li>
					))}
				</ul>
			</div>
			<GoogleMap center={center} zoom={10} mapContainerStyle={containerStyle}>
				{markers.map((marker, index) => (
					<Marker
						key={index}
						position={marker.position}
						onClick={() => handleMarkerClick(marker)}
					>
						{activeMarker === marker && (
							<InfoWindow position={marker.position}>
								<div>{marker.label}</div>
							</InfoWindow>
						)}
					</Marker>
				))}
			</GoogleMap>
		</LoadScript>
	);
}
