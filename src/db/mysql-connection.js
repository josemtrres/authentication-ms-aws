import bcrypt from 'bcryptjs';
import mysql from 'mysql2';

export const db = {
  sql : mysql.createConnection({
    host: '34.230.74.225',
    user: 'konan',
    password: '$%cstx7c6dvfghjFTFnh1?',
    database: 'RegistrobaseDatos2'
  }),

  findUser : function(username, password, callback){
    let value =  false;

    this.sql.query('SELECT * FROM user WHERE username = ?', [username], (err, row, fields)=>{
      if(bcrypt.compareSync(password, String(row[0].password))){
        value = true;
      }
      callback(value)
    });
  },

  findByUsername: function(username, callback){
    let value = false;
    this.sql.query('SELECT * FROM user WHERE username = ?', [username], (err, row, fields)=>{
      if(row[0].username == username){
        value = true;
      }
      callback(value);
    });
  }
}

