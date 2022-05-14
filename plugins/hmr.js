export default function CustomHmr() {
  return {
    name: 'custom-hmr',
    enforce: 'post',
    // HMR
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.json')) {
        console.log('[HMR] reloading json file...')

        server.ws.send({
          type: 'full-reload',
          path: '*',
        })

        server.ws.send({
          type: 'custom',
          event: 'unocss:config-changed',
        })
      }
    },
  }
}
