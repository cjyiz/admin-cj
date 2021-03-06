import defaultSettings from '@/settings'
const { showSettings, fixedHeader, sidebarLogo } = defaultSettings
const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting ({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}
// 动不动用命名空间为什么,是因为在管理状态的内容太多时，可以使用命名空间来对状态进行分类管理
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
