export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  youtubeId: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "Dashboard interativo para gerenciamento de loja online com gráficos e métricas em tempo real.",
    fullDescription: "Um dashboard completo para e-commerce com visualização de dados em tempo real, gestão de produtos, acompanhamento de pedidos e análise de métricas de vendas. Desenvolvido com foco em UX e performance.",
    youtubeId: "dQw4w9WgXcQ",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Supabase"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "2",
    title: "App de Finanças Pessoais",
    description: "Aplicativo para controle financeiro pessoal com categorização automática de despesas.",
    fullDescription: "Aplicativo completo de gestão financeira com categorização inteligente de transações, gráficos de evolução patrimonial, metas de economia e relatórios mensais detalhados.",
    youtubeId: "dQw4w9WgXcQ",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "Stripe"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Rede Social para Devs",
    description: "Plataforma social focada em desenvolvedores com compartilhamento de código e projetos.",
    fullDescription: "Uma rede social pensada para desenvolvedores, com feed de posts técnicos, compartilhamento de snippets de código com syntax highlighting, sistema de likes e comentários, e perfil profissional.",
    youtubeId: "dQw4w9WgXcQ",
    technologies: ["Next.js", "Prisma", "MongoDB", "Socket.io", "AWS"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Landing Page Criativa",
    description: "Landing page com animações elaboradas e design moderno para startup de tecnologia.",
    fullDescription: "Landing page de alta conversão com animações de scroll, parallax, microinterações e design responsivo. Otimizada para SEO e performance com score 100 no Lighthouse.",
    youtubeId: "dQw4w9WgXcQ",
    technologies: ["React", "Framer Motion", "GSAP", "Tailwind CSS"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "5",
    title: "Task Manager Pro",
    description: "Gerenciador de tarefas com drag & drop, kanban board e integração com calendário.",
    fullDescription: "Ferramenta de produtividade com boards kanban, drag & drop intuitivo, timers pomodoro, integração com Google Calendar e relatórios de produtividade semanais.",
    youtubeId: "dQw4w9WgXcQ",
    technologies: ["React", "DnD Kit", "Firebase", "PWA", "Service Workers"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Portfolio 3D",
    description: "Portfólio interativo com elementos 3D e experiência imersiva usando Three.js.",
    fullDescription: "Portfólio criativo com cenas 3D interativas, navegação imersiva, modelos 3D customizados e transições cinematográficas entre as seções. Uma experiência visual única.",
    youtubeId: "dQw4w9WgXcQ",
    technologies: ["Three.js", "React Three Fiber", "GLSL", "Blender", "Vite"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];
