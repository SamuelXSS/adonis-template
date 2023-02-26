import Env from '@ioc:Adonis/Core/Env'
import axios from 'axios'

const isProd = Env.get('NODE_ENV') === 'production'

const access_token = isProd
  ? Env.get('ASAAS_ACCESS_TOKEN_PROD')!
  : Env.get('ASAAS_ACCESS_TOKEN_DEV')!

const asaasApi = axios.create({
  baseURL: isProd ? Env.get('ASAAS_ACCESS_URL_PROD') : Env.get('ASAAS_ACCESS_URL_DEV'),
})

asaasApi.defaults.headers['access_token'] = access_token

export default asaasApi
