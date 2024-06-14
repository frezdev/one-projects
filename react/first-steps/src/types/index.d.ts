export interface Organization {
  id: string,
  title: string,
  asentColor: string,
  bgColor: string,
  members: Array<Member>,
}

export interface OrganizationMapItem {
  id: string,
  title: string,
  asentColor: string,
  bgColor: string,
  members: Map<Member['id'], Member>,
}

export interface Member {
  id: number | string,
  name: string,
  role: string,
  image: string
}