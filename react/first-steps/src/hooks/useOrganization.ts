import { useContext } from "react";
import { OrganizationContext } from '../context/OrganizationsContext'

export const useOrganization = () => useContext(OrganizationContext);
