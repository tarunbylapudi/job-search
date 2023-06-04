import { Job } from "@/api/types";
import { Degree } from "@/api/types";
import { AuthData } from "@/api/types";
import { Credentials } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  authData: AuthData[];
  credentials: Credentials;
  jobs: Job[];
  degrees: Degree[];
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
  skillsSearchTerm: string;
  isLoading: boolean;
}
