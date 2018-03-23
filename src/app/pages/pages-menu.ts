import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'fa fa-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FERRAMENTAS',
    group: true,
  },
  {
    title: 'Avisos',
    icon: 'fa fa-bullhorn',
    children: [
      {
        title: 'Cadastrar',
        link: '/pages/avisos/cadastrar',
      },
      {
        title: 'Listagem',
        link: '/pages/avisos/listagem',
      },
    ],
  },
  {
    title: 'Reclamações',
    icon: 'fa fa-warning',
    link: '/pages/reclamacoes/listagem',
  },
  {
    title: 'Agendamentos',
    icon: 'fa fa-calendar-check-o',
    children: [
      {
        title: 'Agendar',
        link: '/pages/agendamentos/agendamentos-selecao',
      },
    ],
  },
  {
    title: 'Chat',
    icon: 'fa fa-commenting-o',
    link: '/pages/reclamacoes/listagem',
  },
  {
    title: 'Documentos',
    icon: 'fa fa-newspaper-o',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
    ],
  },
  {
    title: 'Enquetes',
    icon: 'nb-compose',
    children: [
      {
        title: 'Cadastrar',
        link: '/pages/enquetes/cadastros',
      },
      {
        title: 'Visualizar',
        link: '/pages/enquetes/visualizar',
      },
    ],
  },
  {
    title: 'Autorizar Visitantes ',
    icon: 'fa fa-unlock',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Reuniões e Assembléias',
    icon: 'fa fa-users',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Regimento Interno',
    icon: 'fa fa-file',
    children: [
      {
        title: 'Cadastrar',
        link: '/pages/regimento/regimento-cadastrar',
      },
      {
        title: 'Visualizar',
        link: '/pages/regimento/regimento-visualizar',
      },
    ],
    
  },
  /*{
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];
