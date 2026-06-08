export interface Event {
    id: number;
    image: string;
    name: string;
    date: string;
    category: string;
}

export enum EventsViewType {
    CARD = 'Card',
    LIST = 'List'
}

export const categoryOptions = [
    { label: 'Singing Concert', value: 'Singing Concert' },
    { label: 'Meeting', value: 'Meeting' },
    { label: 'Dance Performance', value: 'Dance Performance' },
    { label: 'Standup Comedy', value: 'Standup Comedy' },
    { label: 'Magic Show', value: 'Magic Show' },
    { label: 'Festival', value: 'Festival' },
    { label: 'Movie Show', value: 'Movie Show' }
];


export const dateFilters = [
    'Within this month',
    'Next 6 months'
];

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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
        name: 'Thanksgiving event',
        date: '21, October 2023',
        category: 'festival'
    },
    {
        id: 8,
        image: 'https://i.pinimg.com/736x/60/a6/e2/60a6e2b0776d1d6735fce5ae7dc9b175.jpg',
        name: 'Valentine\'s Day event',
        date: '22, October 2023',
        category: 'festival'
    },
    {
        id: 9,
        image: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
        name: 'Independence Day event',
        date: '23, October 2023',
        category: 'festival'
    },
    {
        id: 10,
        image: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
        name: 'Republic Day event',
        date: '24, October 2023',
        category: 'festival'
    }
];