export class Data {
    public response: {
        notFound: boolean
        count: number;
        next: string;
        next_page_number: number;
        num_pages: number;
        page_size: number;
        previous: string;
        previous_page_number: number;
        pagenum: number;
        results: any[];
    };

    constructor() {
        this.response = {
            notFound: false,
            count: null,
            next: null,
            next_page_number: null,
            num_pages: null,
            page_size: null,
            previous: null,
            previous_page_number: null,
            pagenum: null,
            results: []
        };
    }
}
