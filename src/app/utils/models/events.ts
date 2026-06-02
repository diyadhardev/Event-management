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
        name: 'Event 1',
        date: '2023-10-15',
        category: 'Category 1'
    },
    {
        id: '2',
        image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
        name: 'Event 2',
        date: '2023-10-16',
        category: 'Category 2'
    }
];  