// 这里引入的内容是模拟的服务器返回结果
import { login, logout, getInfo } from '@/api/user'
// 这里引入的内容是模拟的获取的cookie值
import { getToken, setToken, removeToken } from '@/utils/auth'
// 加载重置路由方法？
import { resetRouter } from '@/router'
const state = {
  token: getToken(),
  name: '',
  avatar: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then(res => {
          const { data } = res
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
    })
  },
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(res => {
        const { data } = res
        if (!data) {
          reject('loser')
        }
        const { name, avatar } = data
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        // 这里resolve和reject哪来的
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  logout ({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        resetRouter()
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }

}

// 这里输出一个namespaced是什么意思
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
