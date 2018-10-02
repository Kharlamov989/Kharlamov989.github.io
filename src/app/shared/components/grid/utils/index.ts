export class Utils {
    public getValueByPath(item: any, path: string, type: any): string {
        if (path) {
            try {
                let propNames: string[] = path.split('.');
                let value: any;

                if (propNames.length === 0) {
                    throw new Error();
                }

                propNames.map((prop) => {
                    item = item[prop];

                    if (item != undefined) {
                        value = item;
                    } else {
                        type === Number ? value = 0 : value = 'Не указано';
                    }
                });

                return value;
            } catch (e) {
                console.error('Path parsing error');
            }
        }
    }

    public contains(array: any[], value: any): boolean {
        let index: number = array.indexOf(value);

        if (index !== -1) {
            return true;
        } else {
            return false;
        }
    }
}
