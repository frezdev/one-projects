import { createContext, useEffect, useState } from "react";
import { type Organization, type Member, OrganizationMapItem } from '@/types'
import { organizations } from '@/db/organization.data';
import { useLocalStorage } from '@/hooks/useLocalStorage'

type OrganizationsMap = Map<Organization['id'], OrganizationMapItem>;

interface DefaultValuesTypes {
  organizations: OrganizationsMap,
  addMemberToOrg: (id: string, newMember: Member) => void,
  deleteMember: (orgId: Organization['id'], memberId: Member['id']) => void,
  createOrg: (name: string, color: string) => void,
  updateOrg: (id: Organization['id'], callback: (currentOrg: OrganizationMapItem) => OrganizationMapItem) => void
}

const defaultValue: DefaultValuesTypes = {
  organizations: new Map(),
  addMemberToOrg: () => { },
  deleteMember: () => { },
  createOrg: () => { },
  updateOrg: () => { }
}

export const OrganizationContext = createContext(defaultValue);

export const OrganizationProvider = ({ children }: { children: React.ReactNode }) => {
  const [orgStorage, setOrgStorage] = useLocalStorage<Organization[]>('organizations', organizations);
  const [organizationsState, setOrganizationsState] = useState<OrganizationsMap>(new Map());

  const addMemberToOrg = (id: string, newMember: Member) => {
    const newOrganizations = structuredClone(organizationsState);
    const orgToUpdate = newOrganizations.get(id);
    if (orgToUpdate) {
      orgToUpdate.members.set(newMember.id, newMember);
      setOrganizationsState(newOrganizations);
      setOrgStorage(
        convertToSaveOnLocalStorage(newOrganizations)
      )
    }
  }

  const deleteMember = (orgId: Organization['id'], memberId: Member['id']) => {
    const newOrganizations = structuredClone(organizationsState);
    const orgToUpdate = newOrganizations.get(orgId);
    if (orgToUpdate) {
      orgToUpdate.members.delete(memberId);
      setOrganizationsState(newOrganizations)
      setOrgStorage(
        convertToSaveOnLocalStorage(newOrganizations)
      )
    }
  }

  const createOrg = (name: string, color: string) => {
    const newOrg: Organization = {
      id: crypto.randomUUID(),
      title: name,
      asentColor: color,
      bgColor: `${color}55`,
      members: []
    }
    setOrgStorage([...orgStorage, newOrg]);
    setOrganizationsState((prev) => new Map([...prev, [newOrg.id, { ...newOrg, members: new Map() }]]));
  }

  const updateOrg = (id: Organization['id'], callback: (currentOrg: OrganizationMapItem) => OrganizationMapItem) => {
    const newOrganizations = structuredClone(organizationsState);
    let orgToUpdate = newOrganizations.get(id);

    if (orgToUpdate) {
      orgToUpdate = callback(orgToUpdate);
      newOrganizations.set(id, orgToUpdate);
      setOrganizationsState(newOrganizations);
      setOrgStorage(
        convertToSaveOnLocalStorage(newOrganizations)
      )
    }
  }

  useEffect(() => {
    const organizationsMap: OrganizationsMap = new Map();
    orgStorage.forEach((org) => {
      let members: Array<[Member['id'], Member]> = []
      org.members.forEach(member => {
        members.push([member.id, member])
      })
      organizationsMap.set(org.id, { ...org, members: new Map(members) })
    });

    setOrganizationsState(organizationsMap);
  }, [orgStorage]);

  return (
    <OrganizationContext.Provider
      value={{
        organizations: organizationsState,
        addMemberToOrg,
        deleteMember,
        createOrg,
        updateOrg,
      }}>
      {children}
    </OrganizationContext.Provider>
  )
}

const convertToSaveOnLocalStorage = (newOrganizations: OrganizationsMap) => {
  return Array.from(
    newOrganizations.values(),
    (org) => ({
      ...org,
      members: Array.from(org.members.values())
    })
  )
}