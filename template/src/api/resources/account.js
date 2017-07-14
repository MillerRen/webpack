export default function (mock) {
  mock.onGet('/accounts', {params: {id: 'me'}}).reply(200, {
    name: 'MillerRen'
  })
}
