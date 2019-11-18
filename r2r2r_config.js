var config = {
    style: 'mapbox://styles/mlayman09/ck350781e180n1cp1pkhxb0qf',
    accessToken: 'pk.eyJ1IjoibWxheW1hbjA5IiwiYSI6IlNwWE9kSU0ifQ.5VBFkEIevluT8l2GK3LtoA',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'R2R2R',
    subtitle: 'A journey across the Grand Canyon and back in a day',
    byline: 'Oct 11 2019',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Display Title',
            image: 'r2r2r_images/Sunrise.jpg',
            description: 'Sunrise, about 4 miles in',
            location: {
                center: [-112.56091, 36.40448],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'nus',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'nus',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            title: 'The beginning of our journey- The South Kaibab Trailhead',
            image: 'r2r2r_images/River.jpg',
            description: 'Description here',
            location: {
                center: [-112.08770, 36.05800],
                zoom: 14,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		
		{
            id: '3',
            title: 'Start of the North Rim ascent',
            image: 'r2r2r_images/InnerCanyon.jpg',
            description: 'Description here',
            location: {
                center: [-112.08900, 36.11806],
                zoom: 14,
                pitch: 20,
                bearing: 15
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		
		{
            id: '4',
            title: 'Up up up!',
            image: 'r2r2r_images/NorthRimAscent.jpg',
            description: 'Description here',
            location: {
                center: [-112.04437, 36.17999],
                zoom: 14,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		
		{
            id: '5',
            title: 'North Rim! Now...we just have to do that again!',
            image: 'r2r2r_images/NorthRim.jpg',
            description: 'Description here',
            location: {
                center: [-112.08101, 36.20500],
                zoom: 13,
                pitch: 20,
                bearing: 350
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		
		{
            id: '6',
            title: 'Back to the River',
            image: 'r2r2r_images/NorthRimViews.jpg',
            description: 'Description here',
            location: {
                center: [-112.04437, 36.17999],
                zoom: 14,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		
		{
            id: '7',
            title: 'One final push to go',
            image: 'r2r2r_images/Afternoon.jpg',
            description: 'Description here',
            location: {
                center: [-112.08900, 36.11806],
                zoom: 14,
                pitch: 20,
                bearing: 15
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		
		{
            id: '8',
            title: 'Sunset in the canyon',
            image: 'r2r2r_images/Sunset.jpg',
            description: 'Description here',
            location: {
                center: [-112.139999, 36.07965],
                zoom: 14,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		
		{
            id: '9',
            title: 'Finished, in more ways than one',
            image: 'r2r2r_images/Finish.jpg',
            description: 'Description here',
            location: {
                center: [-112.14, 36.12],
                zoom: 12,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
		
    ]
};
