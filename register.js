const Consul = require("consul");

const { localName, local, localPort, host, hostPort } = require("./IPinfo");

console.log("local ip:", local, "local port:", localPort);
console.log("server ip:", host, "server port:", hostPort);

this.consul = new Consul({
  host,
  port: hostPort,
  promisify: true,
});

this.consul.agent.service.register(
  {
    name: localName,
    address: local,
    port: localPort,
    check: {
      http: `http://${local}:${localPort}/health`,
      interval: "10s",
      timeout: "5s",
    },
  },
  (err) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(`${localName}success register！`);
    }
  }
);
