export interface Event {
    id: string;
    image: string;
    name: string;
    date: string;
    category: string;
}

export const EventsData: Event[] = [
    {
        id: '1',
        image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
        name: 'Navaratri event',
        date: '2023-10-15',
        category: 'festival'
    },
    {
        id: '2',
        image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
        name: 'Diwali event',
        date: '2023-10-16',
        category: 'festival'
    },
    {
        id: '3',
        image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
        name: 'Holi event',
        date: '2023-10-17',
        category: 'festival'
    }, {
        id: '4',
        image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
        name: 'Christmas event',
        date: '2023-10-18',
        category: 'festival'
    },
    {
        id: '5',
        image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
        name: 'New Year event',
        date: '2023-10-19',
        category: 'festival'
    },
    {
        id: '6',
        image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
        name: 'Easter event',
        date: '2023-10-20',
        category: 'festival'
    },
    {
        id: '7',
        image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
        name: 'Thanksgiving event',
        date: '2023-10-21',
        category: 'festival'
    },
    {
        id: '8',
        image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
        name: 'Valentine\'s Day event',
        date: '2023-10-22',
        category: 'festival'
    },
    {
        id: '9',
        image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
        name: 'Independence Day event',
        date: '2023-10-23',
        category: 'festival'
    },
    {
        id: '10',
        image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
        name: 'Republic Day event',
        date: '2023-10-24',
        category: 'festival'
    }
];

export const EventsViewTypes = {
    CARD_VIEW: 'Card View',
    LIST_VIEW: 'List View',
}