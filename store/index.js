import vuex from 'vuex'

const store = {
  state: {
    msg: 'Message in store'
  },
  getters: {},
  mutations: {
    reset_msg(state, arg)
    {
      state.msg = arg;
    }
  },
  actions: {}
}

export default function() {
  return new vuex.Store(store)
}