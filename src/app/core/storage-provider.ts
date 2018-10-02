export class StorageProvider {
    get(key: string): any {
        let item: string = localStorage.getItem(key);

        return item ? JSON.parse(item) : null;
    }

    set(key: string, obj: any) {
        localStorage.setItem(key, JSON.stringify(obj));
    }

    delete(key: string) {
        localStorage.removeItem(key);
    }
}