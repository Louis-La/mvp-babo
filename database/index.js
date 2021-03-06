const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const $ = require('jquery');

const connection = mysql.createConnection(mysqlConfig);

const getShops = (callback) => {
  let queryString = 'SELECT * FROM stores';

  connection.query(queryString, (error, result) => {
    if (error) {
      console.log('🤧 Error during querying all shops in MySQL: ', error);
    } else {
      callback(result);
    }
  })
};

const getDrinks = (callback) => {
  let queryString = 'SELECT * FROM drinks';

  connection.query(queryString, (error, result) => {
    if (error) {
      console.log('🤧 Error during querying all drinks in MySQL: ', error);
    } else {
      callback(result);
    }
  })
};

const getComments = (callback) => {
  let queryString = 'SELECT * FROM comments';

  connection.query(queryString, (error, result) => {
    if (error) {
      console.log('🤧 Error during querying all comments in MySQL: ', error);
    } else {
      callback(result);
    }
  })
};

const insertComment = (object, callback) => {
  const insertString = `
    INSERT
      INTO comments
        (
          drink_id,
          username,
          comment,
          drink_rating
        )
    VALUES
      (
        ${object.id},
        '${object.name}',
        '${object.comment}',
        ${parseInt(object.rating)}
      )`;
  connection.query(insertString, callback);
}

module.exports = {
  getShops,
  getDrinks,
  getComments,
  insertComment
}