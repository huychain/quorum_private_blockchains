// File: 'truffle.js' (edited for 7nodes example)
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 22000, // was 8548
      network_id: "*" // Match any network id
    }
  }
};
