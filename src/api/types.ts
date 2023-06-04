export interface Job {
  id: number;
  title: string;
  organization: string;
  degree: string;
  jobType: string;
  locations: string[];
  minimumQualifications: string[];
  preferredQualifications: string[];
  description: string[];
  dateAdded: string;
}

export interface Degree {
  id: number;
  degree: string;
}

export interface AuthData {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthenticationDetails {
  Authentication: string;
  error: string;
  token: string;
}
