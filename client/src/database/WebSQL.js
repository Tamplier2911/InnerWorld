class WebSQL {
  constructor(
    dbName,
    dbVersion,
    dbDesc,
    dbSize,
    dbCreationCb,
    dbCreationPrimitive
  ) {
    this.db = dbCreationPrimitive(
      dbName,
      dbVersion,
      dbDesc,
      dbSize,
      dbCreationCb
    );
  }

  createTable(tableName, tableData) {
    return new Promise((res, rej) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS ${tableName} ${tableData}`,
          [],
          (tx) => res('Table successfully created!'),
          (tx, err) => rej(err)
        );
      });
    });
  }

  dropTable(tableName) {
    return new Promise((res, rej) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          `DROP TABLE ${tableName}`,
          [],
          (tx) => res('Table was successfully dropped!'),
          (tx, err) => rej(err)
        );
      });
    });
  }

  insertData(tableName, data, emailMatcher) {
    return new Promise((res, rej) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO ${tableName} ${data}`,
          [],
          // (tx) => res('Data successfully inserted!'),
          (tx) => {
            tx.executeSql(
              `SELECT * FROM ${tableName} WHERE email='${emailMatcher}'`,
              [],
              (tx, results) => res(Array.from(results.rows)),
              (tx, err) => rej(err)
            );
          },
          (tx, err) => rej(err)
        );
      });
    });
  }

  readData(tableName) {
    return new Promise((res, rej) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          `SELECT * FROM ${tableName}`,
          [],
          (tx, results) => {
            res(Array.from(results.rows));
          },
          (tx, err) => {
            rej(err);
          }
        );
      });
    });
  }

  updateData(tableName, setter, matcher) {
    return new Promise((res, rej) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          `UPDATE ${tableName} SET ${setter} WHERE id=${matcher}`,
          [],
          (tx) => res('Data successfully updated!'),
          (tx, err) => rej(err)
        );
      });
    });
  }

  deleteData(tableName, id) {
    return new Promise((res, rej) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          `DELETE FROM ${tableName} WHERE id=?`,
          [id],
          (tx) => res('Data successfully deleted!'),
          (tx, err) => rej(err)
        );
      });
    });
  }
}

export default WebSQL;

// ****************  WebSQL Promisified USE EXAMPLES **************** //

/*

const createTable = async () => {
  try {
    const res = await db.createTable(
      'test',
      `(
          id INTEGER PRIMARY KEY,
          firstName VARCHAR(40) NOT NULL,
          lastName VARCHAR(40) NOT NULL,
          phone TEXT NOT NULL,
          email TEXT NOT NULL
        )`
    );

    // res = Table successfully created!
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};

const dropTable = async () => {
  try {
    const res = await db.dropTable('test');
    // res = Table was successfully dropped!
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};

const insertData = async () => {
  try {
    const res = await db.insertData(
      'test',
      `(firstName, lastName, phone, email)
          VALUES ('Rock', 'Star', '+380502223432', 'rock@star.com')`
    );
    // res[0] = inserted object with primary key id
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const readData = async () => {
  try {
    const res = await db.readData('test');
    // res = array of data [{…}, {…} ...]
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};

const updateData = async () => {
  try {
    const res = await db.updateData(
      'test',
      `firstName='Tyler', lastName='Durden', phone='+380501233443', email='tyler@durden.com'`,
      1
    );
    // res = Data successfully updated!
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteData = async () => {
  try {
    const res = await db.deleteData('test', 1);
    // res = Data successfully deleted!
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};

*/
