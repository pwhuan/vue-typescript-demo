import request from '../utils/request';
const apiHost = process.env.NODE_ENV === 'production' ? 'https://app.oboe360.com/' : "https://app.oboe360.com/";


export function getAllGoodsList(params: any) {
    return request({
        url: apiHost + 'closamake_app/goods/Goods/allGoodsList',
        method: 'post',
        data: params
    });
}
