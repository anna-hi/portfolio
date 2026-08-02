module.exports = new Proxy({}, { get: (_, key) => String(key) });
