const webSqlConfig = [
  'WorldIn',
  '1.0',
  'WorldIn WebSQL DB',
  2 * 1024 * 1024,
  (db) => {
    console.log(`${db} successfully created!`);
  },
  globalThis.openDatabase,
];

export default webSqlConfig;
