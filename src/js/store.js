    import { reactive } from 'vue'

    export const store = reactive({
    albumList: [
        {
            thumb: '/src/assets/gallery1.jpg',
            title: 'A roll and bang the floor'
        },
        {
            thumb: '/src/assets/gallery2.jpg',
            title: 'Your melody to our music'
        },
        {
            thumb: '/src/assets/gallery3.jpg',
            title: 'Touching heaven on frequency'
        },
        {
            thumb: '/src/assets/gallery4.jpg',
            title: 'Music makes stronge beats'
        },
        {
            thumb: '/src/assets/gallery5.jpg',
            title: 'Sound is the spark of time'
        },
        {
            thumb: '/src/assets/gallery6.jpg',
            title: 'Make your night groovy'
        },

    ],
    blogList: [
        {
            thumb: '/src/assets/hip_hop_wired_to_dance_make.jpg',
            title: 'Hip hop wired to dance make',
            date: '06 November 2021',
            info: 'Driving Short Distances Music is a Genre That Includes Traditional Folk Music And The Contemporary Genre That Evolved From The Former'
        },
        {
            thumb: '/src/assets/music_business-worldwide.jpg',
            title: 'Music business worldwide',
            date: '27 May 2022',
            info: 'Accelerate Work And Drive Productivity The Beatles\' Experimentation And Creative Freedom Led Other Bands To Experiment In Various Ways As Well'
        },
        {
            thumb: '/src/assets/giveaways_rock.jpg',
            title: 'Giveaways rock to all',
            date: '07 May 2022',
            info: 'Signs Your Car Battery Has To Be Removed When The Dashboard Lights Start Flashing, This Is A Sign The Battery Is Dying. Several Issues Aries And'
        },
    ]
});