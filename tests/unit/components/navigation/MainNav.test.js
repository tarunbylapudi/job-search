import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/navigation/MainNav.vue";

describe("MainNav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", () => {
    const wrapper = shallowMount(MainNav, createConfig());
    expect(wrapper.text()).toMatch("VitaVings");
  });

  it("displays munu items for navbar", () => {
    const wrapper = shallowMount(MainNav, createConfig());
    const menuItems = wrapper.findAll("[data-test='main-nav-list-item']");
    const menuItemTexts = menuItems.map((item) => item.text());
    expect(menuItemTexts).toEqual([
      "Home",
      "Blog",
      "About",
      "contact",
      "Pricing",
      "jobs",
    ]);
  });
  describe("when the user logged out", () => {
    it("promps user to sign in", () => {
      const wrapper = shallowMount(MainNav, createConfig());
      const loginButton = wrapper.find("[data-test='login-button']");

      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when the user logged in", () => {
    it("user will see profile pic", async () => {
      const wrapper = shallowMount(MainNav, createConfig());
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("dispals subnav with additional info", async () => {
      const wrapper = shallowMount(MainNav, createConfig());
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
