export class CrawlerInfo {
    crw_id: string;
    crw_url: string;
    crw_fullname: string;
    crw_screen_name: string;
    crw_education: string[];
    crw_geo: string[];
    crw_work: string[];

    constructor(model?: CrawlerInfo) {
        this.crw_id = model ? model.crw_id : 'Нет данных';
        this.crw_url = model ? model.crw_url : 'Нет данных';
        this.crw_fullname = model ? model.crw_fullname : 'Нет данных';
        this.crw_screen_name = model ? model.crw_screen_name : 'Нет данных';
        this.crw_education = model && model.crw_education ? model.crw_education : [];
        this.crw_geo = model && model.crw_geo ? model.crw_geo : [];
        this.crw_work = model && model.crw_work ? model.crw_work : [];
    }
}