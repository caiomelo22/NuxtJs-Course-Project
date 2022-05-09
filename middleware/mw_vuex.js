export default function(context) {
  context.store.commit('reset_msg', 'hi from mw')
  // context.app.head.title = 'Title by MW'
}