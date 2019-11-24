var config = {
    style: 'mapbox://styles/mlayman09/ck350781e180n1cp1pkhxb0qf',
    accessToken: 'pk.eyJ1IjoibWxheW1hbjA5IiwiYSI6IlNwWE9kSU0ifQ.5VBFkEIevluT8l2GK3LtoA',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'R2R2R',
    subtitle: 'A journey across the Grand Canyon and back in a day',
    byline: 'Oct 11 2019',
    footer: 'Built with Mapbox',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Preparation',
            image: 'r2r2r_images/Sunrise.jpg',
            description: 'Around two years prior, my friend Vincent and I were out running some Virginia country roads, and came up with the idea of running across the Grand Canyon and back in a day, commonly known as the Rim to Rim to Rim run or R2R2R. Fall of 2019 became our target, and we spent most of 2019 preparing for this day. With a favorable weather forecast for the day, and months of training logged, we were ready to embark upon one of the longest runs of our lives.',
            location: {
                center: [-112.56091, 36.33000],
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
            title: 'The beginning of our journey- descending to the Colorado River',
            image: 'r2r2r_images/River.jpg',
            description: 'Pitch black. That\'s what I remember about the first mile or two of our run. But gradually, as the sun angled it\'s way toward us, we began to see the canyon walls. Ambling down the trail we made sure to take plenty of photos and save our quads for later. 7 miles later we arrived at the Colorado River.',
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
            description: 'After filling our water bottles with NASCAR pit crew efficiency at Phantom Ranch, we began our climb of the North Rim with controlled earnest. Slight incline in the trail? Hike it. We were sticking to our game plan of staying as fresh as possible for as long as possible. The intimacy of the box canyon slowly gave way to a wider, drier canyon floor. 4 hours in we finally felt the sun on our skin.',
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
            title: 'It\'s right there!',
            image: 'r2r2r_images/NorthRimAscent.jpg',
            description: 'Once we passed Manzanita, the true climb began. Hanging gardens and precipitous drop offs kept us mildly distracted from the task at hand. A lovely aspen grove and expansive views southwards towards the San Francisco peaks signaled our proximity to the halfway point. Surely, we thought, after THIS switchback the North Rim trailhead will appear.',
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
            title: 'The North Rim. Now...we just have to do that again!',
            image: 'r2r2r_images/NorthRim.jpg',
            description: 'About 6 hours in, we reached the North Rim. We refueled and sat down for around 10 minutes or so, then began the long descent back down to the river. Around 24 miles or so to go, and we were feeling quite alright.',
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
            description: 'Now to retrace our steps back to Phantom Ranch. Thankfully the chill of the North Rim rapidly disappeared as we went down. Around Manzanita we passed some day hikers we had seen much earlier in the day on the South Kaibab Trail. We briefly thought about hiking over to see Ribbon Falls, but decided to leave that for another day.',
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
            description: 'Soon enough we arrived back at Phantom Ranch. The final climb that was in the back of our minds all day was here, and there was nothing to do but go up! After filling our bottles we crossed the river once again as evening began in the canyon.',
            location: {
                center: [-112.105000, 36.100567],
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
            description: 'An eerie yet peaceful quiet had come over the canyon. The near constant encounters with other hikers and runners had all but stopped. The glances at the watch and mental calculations of mileage remaining became more frequent. And yet, in the midst of the hardest part of the day, we experienced some truly beautiful moments. Notably, a cloudless sunset followed by a nearly full moon illuminating the path ahead.',
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
            description: 'Around 7pm, nearly 14 hours after we had started, and 44 miles and 10,500\' of elevation gain later, we were done for the day. A day well spent, and not easily forgotten!',
            location: {
                center: [-112.14, 36.12],
                zoom: 11,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
		
    ]
};
