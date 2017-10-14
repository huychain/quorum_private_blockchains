// File: 'truffle.js'
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 22000, // was 8548
      network_id: "*" // Match any network id
    },
    nodefour: {
      host: "localhost",
      port: 22003,
      network_id: "*" // Match any network id
    },
    nodeseven: {
      host: "localhost",
      port: 22006,
      network_id: "*" // Match any network id
    }
  }
};
