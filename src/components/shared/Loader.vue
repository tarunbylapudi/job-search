<template>
  <div class="google-loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
export default { name: "Loader" };
</script>
<style scoped>
.google-loader {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding-bottom: 7rem;
}
.google-loader span {
  display: inline-block;
  margin-top: 10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
}
.google-loader span:not(:first-child) {
  margin-left: 10px;
}
.google-loader span:nth-child(1) {
  background: #4285f4;
  animation: move 1s ease-in-out -0.25s infinite alternate;
}
.google-loader span:nth-child(2) {
  background: #db4437;
  animation: move 1s ease-in-out -0.5s infinite alternate;
}
.google-loader span:nth-child(3) {
  background: #f4b400;
  animation: move 1s ease-in-out -0.75s infinite alternate;
}
.google-loader span:nth-child(4) {
  background: #0f9d58;
  animation: move 1s ease-in-out -1s infinite alternate;
}

@keyframes move {
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(5px);
  }
}
h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 4em;
  text-align: center;
  letter-spacing: -8px;
  margin-top: 0;
}
h1 span:first-child {
  color: #4285f4;
}
h1 span:nth-child(2) {
  color: #db4437;
}
h1 span:nth-child(3) {
  color: #f4b400;
}
h1 span:nth-child(4) {
  color: #4285f4;
}
h1 span:nth-child(5) {
  color: #0f9d58;
}
h1 span:last-child {
  color: #db4437;
  transform: rotate(-20deg);
  display: inline-block;
}
</style>
