import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (matchedComponents.length < 0) {
        //
        reject({ code: 404 })
      }
      Promise.all(matchedComponents.map(component => {
        return component.preFetch && component.preFetch({ store })
      })).then(() => {
        context.state = store.state
        resolve(app)
      }).catch(reject)
    })
  })
}
