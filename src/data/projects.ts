export type Project = {
  id: string
  title: string
  year: string
  description: string
  link?: string
  repos?: { name: string; url: string }[]
  status?: string
  progress?: number
  techs?: string[]
  featured?: boolean
}

export const projects: Project[] = [
  // {
  //   id: 'ms-auth',
  //   title: 'ms-auth',
  //   year: '2025',
  //   description:
  //     'Serviço de autenticação em Laravel com suporte a MFA (e-mail, SMS e WhatsApp) e emissão de tokens via Passport.',
  //   link: 'https://github.com/maxmateus/ms-auth',
  //   status: 'Concluído',
  //   progress: 100,
  //   techs: ['Laravel', 'PHP', 'Docker', 'MySQL', 'Redis', 'Swagger'],
  //   featured: true,
  // },
  {
    id: 'minibank',
    title: 'Bank',
    year: '2026',
    description:
      'Banco digital para estudo, com arquitetura em camadas e responsabilidades bem definidas. O projeto simula fluxos centrais de um sistema bancário, envolvendo controle de acesso, gestão de contas, movimentações financeiras com regras de negócio e integração entre frontend e backend.',
    repos: [
      { name: 'docker-bank', url: 'https://github.com/MaxMateus/docker-bank' },
      { name: 'bff-bank', url: 'https://github.com/MaxMateus/bff-bank' },
      { name: 'api-bank', url: 'https://github.com/MaxMateus/api-bank' },
    ],
    status: 'Em desenvolvimento',
    progress: 10,
    techs: ['Laravel', 'PHP', 'Docker', 'MySQL', 'Redis', 'Swagger', 'Vue.js'],
    featured: true,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
