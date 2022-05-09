export default function (context) {
  // if (process.server) {
  //   console.log(context.req.headers.cookie)
  // }
  // else {
  //   console.log(document.cookie)
  // }
  const all = context.app.$cookies.getAll()
  console.log(all)
}