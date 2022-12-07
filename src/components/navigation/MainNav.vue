<template>
  <header :class="headerHeightClass">
    <div class="head-container">
      <div class="nav-container">
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="toggle"
          @click="navDisplay"
        />
        <router-link :to="{ name: 'Home' }" class="company"
          >VitaVings</router-link
        >

        <nav id="nav">
          <ul>
            <li
              v-for="menuItem in menuItems"
              id="nav-item"
              :key="menuItem.text"
              data-test="main-nav-list-item"
              @click="hideNav"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="btn-container">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            data-test="login-button"
            text="Sign in"
            type="primary"
            @click="loginUser"
          />
        </div>
      </div>
      <subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import ProfileImage from "@/components/navigation/ProfileImage.vue";
import Subnav from "@/components/navigation/Subnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },

  data() {
    return {
      menuItems: [
        { text: "Home", url: "/" },
        { text: "About", url: "/" },
        { text: "contact", url: "/" },
        { text: "Pricing", url: "/" },
        { text: "jobs", url: "/jobs/results" },
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-28": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
    navDisplay() {
      let navbar = document.getElementById("nav");
      navbar.classList.toggle("show");
    },
    hideNav() {
      let navbar = document.getElementById("nav");
      navbar.classList.remove("show");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
}
.head-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: white;
}
.nav-container {
  display: flex;
  flex-flow: nowrap;
  height: 100%;
  padding-left: 2rem /* 32px */;
  padding-right: 2rem /* 32px */;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid #dadce0;
}
.company {
  display: flex;
  align-items: center;
  height: 100%;
  font-weight: 700;
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
}
.toggle {
  width: 30px;
  margin: auto 0;
  display: none;
}
nav {
  position: absolute;
  float: left;
  height: 100%;
  margin-left: 9rem;
}
nav ul {
  display: flex;
  height: 100%;
  padding: 0%;
  margin: 0%;
  list-style: none;
}
nav li {
  margin-left: 2.25rem;
  height: 100%;
  font-weight: 600;
}
.btn-container {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
}
nav li:first-child {
  margin-left: 0%;
}
@media screen and (max-width: 500px) {
  .toggle {
    display: inline-block;
  }
  .nav-container {
    padding: 0 0.5rem;
  }
  nav {
    display: none;
    margin-left: 0;
    margin-top: 4rem;
  }
  nav ul {
    flex-direction: column;
  }
  nav li {
    margin-left: 0;
    background-color: white;
    font-weight: 600;
  }
  nav.hide {
    display: none;
  }
  nav.show {
    display: block;
  }
}
@media screen and (max-width: 500px) {
}
</style>
