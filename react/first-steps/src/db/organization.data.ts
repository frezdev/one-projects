import { type Organization } from "@/types";

const myProfile = {
  id: crypto.randomUUID(),
  name: 'Carlos Florez',
  role: 'Desarrollador Frontend',
  image: 'https://github.com/frezdev.png'
}

export const organizations: Array<Organization> = [
  {
    id: crypto.randomUUID(),
    title: 'Programación',
    asentColor: '#57C278',
    bgColor: '#D9F7E9',
    members: [],
  },
  {
    id: crypto.randomUUID(),
    title: 'Front End',
    asentColor: '#82CFFA',
    bgColor: '#E8F8FF',
    members: [myProfile],
  },
  {
    id: crypto.randomUUID(),
    title: 'Data Science',
    asentColor: '#A6D157',
    bgColor: '#F0F8E2',
    members: [],
  },
  {
    id: crypto.randomUUID(),
    title: 'DevOps',
    asentColor: '#E06B69',
    bgColor: '#FDE7E8',
    members: [],
  },
  {
    id: crypto.randomUUID(),
    title: 'UX/UI',
    asentColor: '#DB6EBF',
    bgColor: '#FAE9F5',
    members: [],
  },
  {
    id: crypto.randomUUID(),
    title: 'Mobile',
    asentColor: '#FFBA05',
    bgColor: '#FFF5D9',
    members: [],
  },
  {
    id: crypto.randomUUID(),
    title: 'Innovacion y Gestión',
    asentColor: '#FF8A29',
    bgColor: '#FFEEDF',
    members: [],
  }
]