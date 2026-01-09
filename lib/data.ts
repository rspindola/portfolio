import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'renatospindolasistemas@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Renato Castro, I am reaching out to you because...',

    upworkProfile: 'https://www.upwork.com/freelancers/rspindola',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/rspindola' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/rspindola' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'React Native',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Vue.js',
            icon: '/logo/vue.svg',
        },
        {
            name: 'Nuxt.js',
            icon: '/logo/nuxt.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Laravel',
            icon: '/logo/laravel.svg',
        },
        {
            name: 'Wordpress',
            icon: '/logo/wordpress.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Jenkins',
            icon: '/logo/jenkins.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    // {
    //     title: 'RecuperaFly App',
    //     slug: 'recuperafly',
    //     liveUrl: 'https://www.instagram.com/recuperafly/',
    //     year: 2025,
    //     description: `
    //     Projeto mobile full-stack inovador que representa uma solução completa de negócio: um aplicativo React Native integrado a uma robusta infraestrutura backend para monitoramento de vendas e gestão de notificações push em tempo real. O <strong>RecuperaFly</strong> é mais do que um app - é um ecossistema tecnológico que conecta gateways de pagamento, análise de dados e comunicação mobile de forma inteligente e automatizada.<br/><br/>

    //     <strong>🔄 Arquitetura Completa: Do Gateway ao Usuário</strong><br/>
    //     Desenvolvi uma solução end-to-end que integra múltiplas camadas tecnológicas. A API backend consome dados de vendas diretamente de gateways de pagamento, processa informações estratégicas e aciona um sistema de webhooks inteligente que dispara notificações push personalizadas via Firebase. Todo este fluxo alimenta um app mobile moderno, responsivo e altamente performático.<br/><br/>

    //     <strong>⚙️ Backend: API RESTful com Nest.js</strong><br/>
    //     Construí uma API robusta e escalável utilizando Nest.js, com arquitetura modular e padrões enterprise. A aplicação possui integração nativa com gateways de pagamento para coleta automatizada de dados de vendas, sistema de webhooks para triggers em tempo real e autenticação segura com JWT e Passport.<br/><br/>

    //     <strong>🔔 Sistema de Notificações Inteligente</strong><br/>
    //     Implementei um sistema de webhooks que monitora eventos específicos dos gateways de pagamento e automaticamente aciona o Firebase Cloud Messaging (FCM) para envio de notificações push direcionadas. Isso garante que os usuários recebam informações relevantes instantaneamente, melhorando engajamento e conversão.<br/><br/>

    //     <strong>📱 Mobile: React Native de Alta Performance</strong><br/>
    //     O app foi desenvolvido com React Native utilizando as melhores práticas de desenvolvimento mobile, incluindo navegação fluida, gerenciamento de estado otimizado, cache inteligente e interface responsiva. A aplicação consome a API backend de forma eficiente, oferecendo aos usuários uma experiência premium e intuitiva.<br/><br/>

    //     <strong>🚀 Destaques Técnicos</strong>
    //     <ul>
    //       <li>Integração nativa com gateways de pagamento para coleta de dados em tempo real</li>
    //       <li>Sistema de webhooks automatizado para triggers de eventos</li>
    //       <li>Notificações push inteligentes via Firebase Cloud Messaging</li>
    //       <li>API RESTful documentada com Swagger para fácil manutenção</li>
    //       <li>App React Native com performance otimizada e UX moderna</li>
    //       <li>Arquitetura modular e escalável para futuras expansões</li>
    //     </ul><br/>

    //     <strong>💼 Resultado de Negócio</strong><br/>
    //     Uma solução completa que transforma dados de vendas em insights acionáveis, mantendo usuários engajados através de comunicação automatizada e oferecendo uma plataforma mobile robusta para monitoramento e gestão de negócios em tempo real.
    //   `,
    //     role: `
    //     Full-Stack Developer & Mobile Specialist<br/>
    //     Responsável por todas as fases do desenvolvimento:
    //     <ul>
    //       <li>🔧 Backend: API RESTful com Nest.js, integração com gateways de pagamento e sistema de webhooks</li>
    //       <li>� Mobile: Desenvolvimento completo do app React Native com foco em performance e UX</li>
    //       <li>🔔 Notificações: Implementação de sistema push via Firebase Cloud Messaging</li>
    //       <li>🔐 Segurança: Autenticação robusta com JWT e Passport, validação de dados e middleware de segurança</li>
    //       <li>📊 Integração: Conexão nativa com gateways de pagamento para análise de dados de vendas</li>
    //       <li>📚 Documentação: API totalmente documentada com Swagger para facilitar manutenção e expansões</li>
    //     </ul>
    //   `,
    //     techStack: [
    //         'React Native',
    //         'Nest.js',
    //         'Firebase Cloud Messaging',
    //         'JWT & Passport',
    //         'Swagger',
    //         'Gateway APIs',
    //         'Webhooks',
    //         'TypeScript',
    //     ],
    //     thumbnail: '/projects/thumbnail/recuperafly.jpg',
    //     longThumbnail: '/projects/thumbnail/recuperafly.jpg',
    //     images: ['/projects/thumbnail/recuperafly.jpg'],
    // },
    {
        title: 'Collections',
        slug: 'collections-hq',
        liveUrl: 'https://vuexy-admin-pink.vercel.app/',
        year: 2023,
        description: `
        Este projeto representa uma realização pessoal e técnica de alto nível: a construção completa, do zero, de uma plataforma digital full stack voltada para o gerenciamento e catalogação de minha coleção de histórias em quadrinhos (HQs) e mangás. Muito além de um simples catálogo, trata-se de uma solução robusta, altamente escalável e focada na performance, usabilidade e organização inteligente.<br/><br/>

        <strong>Desenvolvimento 100% Autoral</strong><br/>
        Todas as etapas – da concepção à produção – foram executadas exclusivamente por mim. Estruturei a arquitetura da aplicação, implementei a API, criei a interface do usuário, realizei testes, integrei serviços e configurei o deployment de ponta a ponta.<br/><br/>

        <strong>🔧 Backend: API RESTful com Laravel</strong><br/>
        Desenvolvi uma API completa e segura com Laravel, permitindo controle total sobre os dados da coleção. A modelagem do banco de dados foi cuidadosamente planejada para permitir extensões futuras, com autenticação e otimizações de performance.<br/><br/>

        <strong>Technical Highlights:</strong>
        <ul>
          <li>Gerenciamento completo de HQs e mangás (CRUD)</li>
          <li>Organização por gêneros, autores, editoras, coleções e status de leitura</li>
          <li>Upload e armazenamento de imagens de capas com preview</li>
          <li>Filtros combináveis e busca instantânea com paginação otimizada</li>
        </ul><br/>

        <strong>💻 Frontend: Next.js moderno com Vercel</strong><br/>
        Utilizei Next.js para criar uma interface intuitiva, responsiva e moderna, com design minimalista, suporte a dark mode e carregamento rápido. Toda a aplicação foi pensada para ser escalável e facilmente navegável, mesmo em coleções com milhares de entradas.<br/><br/>

        <strong>📦 Deploy Estratégico</strong><br/>
        <ul>
          <li>Frontend hospedado na <strong>Vercel</strong>, com CI/CD automático, SSR e distribuição global via CDN</li>
          <li>Backend rodando na <strong>HostGator</strong> com banco de dados MySQL gerenciado e estrutura modular</li>
        </ul><br/>
      `,
        role: `
        Full-Stack Developer <br/>
        Responsável por todas as fases do desenvolvimento:
        <ul>
          <li>✅ Backend: Criação de API RESTful com Laravel, autenticação, relacionamentos e filtros complexos</li>
          <li>🎨 Frontend: Construção de UI moderna com Next.js, SSR e responsividade total</li>
          <li>🧠 Modelagem de dados: Estrutura relacional bem planejada e otimizada</li>
          <li>🚀 Deployment: Configuração de ambiente na Vercel (frontend) e HostGator (backend)</li>
          <li>🔍 Performance: Implementação de técnicas de caching e lazy loading</li>
          <li>📊 Organização: Interface de administração para visualização e manutenção eficiente</li>
        </ul>
      `,
        techStack: [
            'Next.js',
            'Tailwind CSS',
            'Laravel',
            'Vercel',
            'MySQL',
            'HostGator',
        ],
        thumbnail: '/projects/thumbnail/collections.jpeg',
        longThumbnail: '/projects/long/collections.jpeg',
        images: ['/projects/images/collections.jpeg'],
    },
    {
        title: 'Hospital Badim',
        slug: 'hospital-badim',
        liveUrl: 'https://hospitalbadim.com.br/',
        year: 2024,
        description: `
    Projeto institucional desenvolvido para o <strong>Hospital Badim</strong>, um dos principais centros hospitalares do Rio de Janeiro. A proposta era criar uma presença digital moderna, responsiva e altamente gerenciável para atender às demandas de um público exigente e diversificado.<br/><br/>

    <strong>Parceria Estratégica com Agência</strong><br/>
    Este trabalho foi realizado em regime de freelance para uma agência de marketing digital, onde fui responsável por todo o desenvolvimento técnico do site. A equipe de marketing ficou encarregada da comunicação e conteúdos, enquanto atuei de forma autônoma na engenharia da solução.<br/><br/>

    <strong>🎯 Objetivo</strong><br/>
    Desenvolver um tema WordPress <strong>completamente personalizado</strong> e otimizado para performance, acessibilidade e escalabilidade. O layout foi codificado do zero, sem o uso de construtores visuais, garantindo leveza, controle total do código e aderência total ao design aprovado.<br/><br/>

    <strong>🧩 Destaques Técnicos</strong>
    <ul>
      <li>Criação de tema WordPress customizado 100% sob medida</li>
      <li>Utilização de <strong>Tailwind CSS</strong> para estilização responsiva e utilitária</li>
      <li>Templates modulares com componentes reutilizáveis</li>
      <li>Áreas administrativas criadas sob medida para facilitar a gestão de conteúdos</li>
      <li>Otimização para SEO, Core Web Vitals e compatibilidade com dispositivos móveis</li>
      <li>Integração com ferramentas da agência (como Google Tag Manager e plugins personalizados)</li>
    </ul><br/>

    <strong>🎛️ Autonomia para o Cliente</strong><br/>
    Após a entrega, toda a gestão do conteúdo e layout passou para o time interno da agência e do hospital, que hoje utilizam o painel WordPress para atualizar textos, imagens, e seções do site com total liberdade e segurança.<br/><br/>

    <strong>📈 Resultados Esperados</strong><br/>
    Um site institucional robusto, confiável e com excelente experiência de navegação, que reforça a autoridade e credibilidade da marca Hospital Badim na web.<br/>
  `,
        role: `
    Frontend Developer / WordPress Specialist<br/>
    <ul>
      <li>🎨 Layout: Desenvolvimento do tema a partir do zero, com Tailwind CSS e sem uso de construtores</li>
      <li>🧱 WordPress: Configuração de estruturas personalizadas (CPTs, campos ACF, menus dinâmicos)</li>
      <li>⚙️ Backend: Integração com o painel WordPress para total autonomia do cliente</li>
      <li>🚀 Performance: Site leve, otimizado e com foco em acessibilidade e responsividade</li>
      <li>🧑‍💻 Entrega Profissional: Repositório versionado e documentação técnica entregue à agência</li>
    </ul>
  `,
        techStack: ['WordPress', 'Tailwind CSS', 'PHP', 'ACF', 'Vite', 'Figma'],
        thumbnail: '/projects/thumbnail/hospital-badim.jpeg',
        longThumbnail: '/projects/long/hospital-badim.jpeg',
        images: ['/projects/images/hospital-badim-1.jpeg'],
    },
    {
        title: 'Maria Poeta',
        slug: 'loja-poesia',
        liveUrl: 'https://donamariapoeta.com.br/',
        year: 2024,
        description: `
    Um projeto sensível, autêntico e tecnicamente completo: a criação de uma loja virtual para uma autora independente de poesias. Desenvolvido como freelance pessoal, o projeto teve como objetivo oferecer à escritora uma plataforma profissional, confiável e fácil de administrar, para divulgar e vender seus próprios livros diretamente ao público.<br/><br/>

    <strong>🛍️ Loja Virtual com WordPress + WooCommerce</strong><br/>
    Toda a loja foi construída sobre o ecossistema WordPress com WooCommerce, aproveitando sua robustez e flexibilidade. Desenvolvi um tema sob medida com foco em simplicidade, leveza e elegância, refletindo o tom intimista das obras da autora.<br/><br/>

    <strong>📦 Funcionalidades Implementadas</strong>
    <ul>
      <li>Integração com os <strong>Correios</strong> para cálculo de frete automático</li>
      <li>Opções de pagamento via <strong>PIX</strong> e <strong>PagSeguro</strong> (cartão e boleto)</li>
      <li>Área de gerenciamento de pedidos e clientes no painel WordPress</li>
      <li>Cadastro dinâmico de produtos (livros físicos e digitais)</li>
      <li>Tematização delicada com fontes legíveis e tipografia poética</li>
    </ul><br/>

    <strong>🛠️ Manutenção Contínua</strong><br/>
    Após a entrega inicial, continuo oferecendo suporte técnico e manutenção esporádica para ajustes no layout, otimizações de performance e atualizações de segurança da loja.<br/><br/>

    <strong>📚 Propósito e Impacto</strong><br/>
    Mais do que um e-commerce, esta loja é uma ponte direta entre a autora e seus leitores, promovendo a literatura independente com dignidade e profissionalismo no ambiente digital.
  `,
        role: `
    Desenvolvedor Full Stack WordPress<br/>
    <ul>
      <li>🧱 Estrutura: WordPress + WooCommerce, configurado e personalizado para vendas de livros</li>
      <li>🎨 Layout: Tema desenvolvido do zero com foco na identidade da autora</li>
      <li>💳 Pagamentos: Configuração de gateways PIX e PagSeguro</li>
      <li>📦 Logística: Integração com Correios para cálculo automático de frete</li>
      <li>🔄 Suporte: Acompanhamento contínuo com melhorias e ajustes sob demanda</li>
    </ul>
  `,
        techStack: [
            'WordPress',
            'WooCommerce',
            'PHP',
            'PagSeguro API',
            'Tailwind CSS',
            'Correios API',
        ],
        thumbnail: '/projects/thumbnail/maria-poeta.jpeg',
        longThumbnail: '/projects/long/maria-poeta.jpeg',
        images: [
            '/projects/images/maria-poeta-1.jpeg',
            '/projects/images/maria-poeta-2.jpeg',
        ],
    },
    {
        title: 'Living Parque Jardim',
        slug: 'landing-living-parque-jardim',
        liveUrl: 'https://www.livingparquejardim.com.br/',
        year: 2024,
        description: `
    Este projeto foi desenvolvido com foco total em performance, conversão e estética moderna para o setor imobiliário. Trata-se de uma landing page institucional de alto impacto visual, criada para apresentar o empreendimento <strong>Living Parque Jardim</strong>, destacando seus diferenciais e captando leads qualificados interessados na compra de apartamentos.<br/><br/>

    <strong>🚀 Objetivo: Vender Imóveis com Eficiência Digital</strong><br/>
    A landing page foi concebida como uma ferramenta de marketing direto para apoiar a força de vendas e a geração de leads, utilizando gatilhos visuais, microinterações e CTAs estratégicos ao longo da página. O projeto foi realizado como <strong>freelancer para a agência Sensorial Webhouse</strong>, que ficou responsável pelo tráfego e marketing digital, enquanto eu conduzi toda a camada técnica do front-end.<br/><br/>

    <strong>🧰 Tecnologias e Estratégias</strong>
    <ul>
      <li>Framework moderno com <strong>Next.js</strong> para melhor performance e SEO</li>
      <li>Design responsivo e elegante com <strong>Tailwind CSS</strong></li>
      <li>Otimização extrema de imagens e fontes para carregamento rápido</li>
      <li>Formulário integrado com ferramenta de CRM da agência</li>
      <li>Arquitetura modular e reutilizável para rápida replicação em outros empreendimentos</li>
    </ul><br/>

    <strong>🌇 Apelo Visual Imersivo</strong><br/>
    O layout foi construído para comunicar status, elegância e conforto, com seções pensadas para impactar visitantes em dispositivos móveis e desktop, utilizando recursos como parallax, grid modular e uso eficaz de espaços em branco.<br/><br/>

    <strong>💼 Resultado</strong><br/>
    Uma página que representa o equilíbrio entre branding e funcionalidade, garantindo performance técnica e conversão de visitas em oportunidades reais para o time comercial.
  `,
        role: `
    Desenvolvedor Front-End<br/>
    <ul>
      <li>⚙️ Stack: Next.js + Tailwind CSS com estrutura enxuta e escalável</li>
      <li>📱 UI/UX: Layout responsivo focado em performance e captação de leads</li>
      <li>🎯 Estratégia: Construção orientada a conversão com formulários integrados</li>
      <li>🧪 SEO & Performance: Otimizações para Google Core Web Vitals</li>
      <li>🤝 Colaboração: Projeto executado como parceiro técnico da agência Sensorial Webhouse</li>
    </ul>
  `,
        techStack: [
            'Next.js',
            'Tailwind CSS',
            'Vercel',
            'Google Fonts',
            'Formspree / CRM',
        ],
        thumbnail: '/projects/thumbnail/living-parque-jardim.png',
        longThumbnail: '/projects/long/living-parque-jardim.png',
        images: ['/projects/images/living-parque-jardim.png'],
    },
    {
        title: 'Park Design by EDSA',
        slug: 'landing-park-design-edsa',
        liveUrl: 'https://www.parkdesignbyedsa.com.br/',
        year: 2024,
        description: `
    Desenvolvida como parte de uma estratégia digital voltada para o mercado imobiliário, esta landing page tem como objetivo principal destacar o empreendimento <strong>Park Design by EDSA</strong> e captar leads qualificados para o time de vendas. O projeto foi idealizado e executado como freelancer técnico para a agência <strong>Sensorial Webhouse</strong>, responsável pelas ações de marketing e tráfego pago.<br/><br/>

    <strong>🌟 Foco em Conversão e Design Imersivo</strong><br/>
    A landing page foi construída com base em uma estrutura visual limpa e moderna, pensada para transmitir sofisticação, credibilidade e conforto. Utilizando técnicas de UX voltadas para o setor imobiliário, ela guia o usuário por meio de blocos estratégicos com CTAs de alto impacto, sem comprometer a performance da página.<br/><br/>

    <strong>🛠️ Infraestrutura Técnica</strong>
    <ul>
      <li>Framework de alto desempenho com <strong>Next.js</strong></li>
      <li>Estilização otimizada com <strong>Tailwind CSS</strong></li>
      <li>Deploy e CDN global pela <strong>Vercel</strong> para garantir máxima velocidade</li>
      <li>Otimização de SEO e Google Core Web Vitals para melhorar ranqueamento</li>
      <li>Formulário integrado com CRM da agência, captando leads em tempo real</li>
    </ul><br/>

    <strong>📈 Resultado Direcionado</strong><br/>
    A entrega combinou performance técnica, apelo visual e orientação à conversão. Com o conteúdo administrado pela equipe da agência, a página serve como um modelo escalável para outros empreendimentos futuros.
  `,
        role: `
    Desenvolvedor Front-End<br/>
    <ul>
      <li>🧱 Stack: Next.js com Tailwind CSS para desenvolvimento rápido e modular</li>
      <li>💻 Layout 100% responsivo e pensado para dispositivos móveis</li>
      <li>📩 Integração de formulários com sistema de CRM utilizado pela agência</li>
      <li>🚀 Otimização para SEO e desempenho com foco em campanhas de tráfego pago</li>
      <li>🤝 Projeto realizado em parceria com a agência Sensorial Webhouse</li>
    </ul>
  `,
        techStack: [
            'Next.js',
            'Tailwind CSS',
            'Vercel',
            'Google Fonts',
            'Formspree / CRM',
        ],
        thumbnail: '/projects/thumbnail/park-design.jpeg',
        longThumbnail: '/projects/long/park-design.jpeg',
        images: ['/projects/images/park-design.jpeg'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Desenvolvedor Web e Mobile',
        company: 'MB Labs',
        duration: 'Set 2023 - Atualmente',
    },
    {
        title: 'Desenvolvedor Frontend',
        company: 'Fretebras',
        duration: 'Jul 2022 - Set 2023',
    },
    {
        title: 'Desenvolvedor Frontend',
        company: 'Compass.UOL',
        duration: 'Jan 2022 - Jul 2022',
    },
    {
        title: 'Desenvolvedor FullStack',
        company: 'GrooveTech',
        duration: 'Set 2021 - Jan 2022',
    },
    {
        title: 'Desenvolvedor Web',
        company: 'Jornal O Dia',
        duration: 'Ago 2019 - Set 2021',
    },
];
