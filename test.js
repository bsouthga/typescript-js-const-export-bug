
class Collection {
  constructor(opts) {}
}

export const Adapter = new Collection({ });

Adapter.method = async function() {
  await Promise.resolve();
}