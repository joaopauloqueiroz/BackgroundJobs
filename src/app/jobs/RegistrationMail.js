import Mail from '../lib/Mail'

export default { 
  key: 'RegistrationMail',
  async handle ({ data }) {
    const { user } = data

    await Mail.sendMail({
      from: 'Queue teste <queue.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá ${user.name} Bem vindo, ao teste de queue!`
    })
  },
}