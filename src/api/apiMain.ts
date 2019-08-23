import request from '../utils/request';
const apiHost = process.env.NODE_ENV === 'production' ? 'http://121.40.228.219:8083/speech_manage/' : "http://121.40.228.219:8083/speech_manage/";

export function getAllGoodsList(params: any) {
    return request({
        url: apiHost + 'closamake_app/goods/Goods/allGoodsList',
        method: 'post',
        data: params
    });
}


