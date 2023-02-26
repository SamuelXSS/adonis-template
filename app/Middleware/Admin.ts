import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdminMiddleware {
  public async handle({ auth }: HttpContextContract, next: () => Promise<void>) {
    if (auth.user?.role !== 'admin')
      throw { code: 'E_INVALID_ACCESS', messages: { error: 'Acesso inválido' } }

    await next()
  }
}
