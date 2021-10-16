CREATE databse babo;

CREATE TABLE stores (
  store_id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  rating VARCHAR(255),
  verified BOOL,
  logo_photo TEXT,
  street TEXT,
  city TEXT,
  state TEXT,
  PRIMARY KEY (store_id)
);

LOAD DATA LOCAL INFILE '/Users/louisla/downloads/stores.csv'
INTO TABLE stores
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;



CREATE TABLE drinks (
  drink_id INTEGER  NOT NULL AUTO_INCREMENT,
  store_id INTEGER,
  drink_name TEXT,
  price VARCHAR(255),
  drink_photo TEXT,
  PRIMARY KEY (drink_id),
  FOREIGN KEY (store_id)
    REFERENCES stores(store_id)
);

LOAD DATA LOCAL INFILE '/Users/louisla/downloads/drinks.csv'
INTO TABLE drinks
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;



CREATE TABLE comments (
  comment_id INTEGER  NOT NULL AUTO_INCREMENT,
  drink_id INTEGER,
  username TEXT,
  comment TEXT,
  drink_rating INTEGER,
  PRIMARY KEY (comment_id),
  FOREIGN KEY (drink_id)
    REFERENCES drinks(drink_id)
);

LOAD DATA LOCAL INFILE '/Users/louisla/downloads/comments.csv'
INTO TABLE comments
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;




CREATE TABLE newsletter (
  newsletter_id INTEGER NOT NULL AUTO_INCREMENT,
  email TEXT,
  PRIMARY KEY (newsletter_id)
);

    INSERT INTO comments (drink_id, username, comment, drink_rating)
      VALUES (1, "Jane P.", "It was okay", 7);