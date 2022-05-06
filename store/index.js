export const state = () => ({
  msg: 'Message in store'
})

export const getters = {
  get_message(state) {
    return state.msg;
  }
}

export const mutations = {
  reset_msg(state, arg) {
    state.msg = arg;
  }
}