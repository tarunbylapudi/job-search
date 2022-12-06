import { mount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "google",
    ...jobProps,
  });

  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
        "font-awesome-icon": true,
      },
    },
  });

  it("renders job title", () => {
    const jobProps = createJobProps({ title: "Vue Developer" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue Developer");
  });
  it("renders job organization", () => {
    const jobProps = createJobProps({ organization: "google" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("google");
  });
  it("renders job locations", () => {
    const jobProps = createJobProps({ locations: ["Vizag", "Hyd"] });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vizag");
    expect(wrapper.text()).toMatch("Hyd");
  });
  it("renders job qualifications", () => {
    const jobProps = createJobProps({ minimumQualifications: ["Dev", "Qea"] });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Dev");
    expect(wrapper.text()).toMatch("Qea");
  });

  it("links to individual jobs page", () => {
    const jobProps = createJobProps({ id: 15 });
    const wrapper = mount(JobListing, createConfig(jobProps));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
