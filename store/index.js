export const state = () => ({
  msg: 'Message in store'
})

export const mutations = {
  reset_msg(state, arg)
  {
    state.msg = arg;
  }
}