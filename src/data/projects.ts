export type Project = {
  id: string
  title: string
  year: string
  description: string
  link?: string
  status?: string
  progress?: number
  techs?: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'ms-auth',
    title: 'ms-auth',
    year: '2025',
    description:
      'Serviço de autenticação em Laravel com suporte a MFA (e-mail, SMS e WhatsApp) e emissão de tokens via Passport.',
    link: 'https://github.com/maxmateus/ms-auth',
    status: 'Concluído',
    progress: 100,
    techs: ['Laravel', 'PHP', 'Docker', 'MySQL', 'Redis', 'Swagger'],
    featured: true,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
