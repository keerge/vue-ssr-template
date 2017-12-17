import home from '@/api/home'
const createModule = () => {
  const state = {
    content: ''
  }
  const getters = {
    index_content: state => state.content
  }
  const mutations = {
    GET_CONTENT_DATA(state, data) {
      state.content = data.content
    }
  }
  const actions = {
    getContent({ commit, state }) {
      home.getIndex().then((res) => {
        commit('GET_CONTENT_DATA', res.data)
      })
    }
  }
  return {
    state,
    getters,
    actions,
    mutations
  }
}

export default createModule()
