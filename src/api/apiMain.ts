import request from '../utils/request';


export function getAllGoodsList(params: any) {
    return request({
        url: 'https://app.oboe360.com//closamake_app/goods/Goods/allGoodsList',
        method: 'post',
        data: params
    });
}
