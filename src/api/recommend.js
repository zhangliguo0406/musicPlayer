import jsonp from '../common/js/jsonp.js'
import {commonParams,options} from "./config.js";

export function getRecommend() {
  const url='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
 /* const data = Object.assign({},commonParams,{
    paltform: 'h5',
    uin: 0,
    needNewCode: 1
  })*/
  const data = {
      g_tk: 5381,
      format: 'json',
      inCharset: 'utf-8',
      outCharset:'utf-8',
      notice: 0,
      paltform: 'h5',
      uin: 0,
      needNewCode: 1
  }
  return jsonp(url,data,options)
}
export function getDisList() {
  const url='https://u.y.qq.com/cgi-bin/musicu.fcg'
  const data = {
    g_tk: 5381,
    format: 'json',
    inCharset: 'utf-8',
    outCharset:'utf-8',
    notice: 0,
    paltform: 'yqq',
    uin: 0,
    loginUin:0,
    hostUin:0,
    needNewCode: 0,
  }
  return jsonp(url,data,options)
}
