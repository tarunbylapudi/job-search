const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
    isLoading: false,
  };
};

export default state;
