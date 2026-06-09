export interface Event {
    id: number;
    image: string;
    name: string;
    date: string;
    category: string;
}

export const EventsData: Event[] = [
    {
        id: 1,
        image: '../../../assets/images/card-image.svg',
        name: 'Navaratri event',
        date: '15, October 2023',
        category: 'festival'
    },
    {
        id: 2,
        image: '../../../assets/images/card-image2.svg',
        name: 'Diwali event',
        date: '16, October 2023',
        category: 'festival'
    },
    {
        id: 3,
        image: '../../../assets/images/card-image3.svg',
        name: 'Holi event',
        date: '17, October 2023',
        category: 'festival'
    }, 
    {
        id: 4,
        image: '../../../assets/images/card-image4.svg',
        name: 'Christmas event',
        date: '18, October 2023',
        category: 'festival'
    },
    {
        id: 5,
        image: '../../../assets/images/card-image5.svg',
        name: 'New Year event',
        date: '19, October 2023',
        category: 'festival'
    },
    {
        id: 6,
        image: '../../../assets/images/card-image6.svg',
        name: 'Easter event',
        date: '20, October 2023',
        category: 'festival'
    },
    {
        id: 7,
        image: '../../../assets/images/card-image7.svg',
        name: 'Thanksgiving event',
        date: '21, October 2023',
        category: 'festival'
    },
    {
        id: 8,
        image: '../../../assets/images/card-image8.svg',
        name: 'Valentine\'s Day event',
        date: '22, October 2023',
        category: 'festival'
    },
    {
        id: 9,
        image: '../../../assets/images/card-image9.svg',
        name: 'Independence Day event',
        date: '23, October 2023',
        category: 'festival'
    },
    {
        id: 10,
        image: '../../../assets/images/card-image10.svg',
        name: 'Republic Day event',
        date: '24, October 2023',
        category: 'festival'
    }
];

export const EventsViewTypes = {
    CARD_VIEW: 'Card View',
    LIST_VIEW: 'List View',
}