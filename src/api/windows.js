import axios from '@/libs/api.request'

export const getWindowsStatList = parameter => {
  return axios.request({
    url: `/windows/api/linux-stat-list?${parameter}`,
    method: 'get'
  })
}

export const getWindowsStat = parameter => {
  return axios.request({
    url: `/windows/api/linux-stat?${parameter}`,
    method: 'get'
  })
}

export const getWindowsStatHis = parameter => {
  return axios.request({
    url: `/windows/api/linux-stat-his?${parameter}`,
    method: 'get'
  })
}

export const getWindowsDisk = parameter => {
  return axios.request({
    url: `/windows/api/linux-disk?${parameter}`,
    method: 'get'
  })
}

export const getWindowsDiskHis = parameter => {
  return axios.request({
    url: `/windows/api/linux-disk-his?${parameter}`,
    method: 'get'
  })
}

export const getWindowsIoStat = parameter => {
  return axios.request({
    url: `/windows/api/linux-io-stat?${parameter}`,
    method: 'get'
  })
}

export const getWindowsIoStatHis = parameter => {
  return axios.request({
    url: `/windows/api/linux-io-stat-his?${parameter}`,
    method: 'get'
  })
}
