import Route from '@ioc:Adonis/Core/Route'
import Hash from '@ioc:Adonis/Core/Hash'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

// import User from 'App/Models/User'


Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

// Route.post('login', async ({ auth, request, response }) => {
//   const email = request.input('email')
//   const password = request.input('password')

//   const user = await User.query().where('email', email).firstOrFail()

//   if (!(await Hash.verify(user.password, password))) {
//     return response.unauthorized({ error: 'Invalid credentials' })
//   }

//   const token = await auth.use('api').generate(user)

//   return { token, user }
// })
