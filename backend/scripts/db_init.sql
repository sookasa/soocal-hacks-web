CREATE TABLE choices
(
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  yelp_id TEXT NOT NULL
);
CREATE UNIQUE INDEX ON choices (date, yelp_id);

CREATE TABLE votes
(
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  email TEXT NOT NULL,
  choice_id INT NOT NULL REFERENCES choices (id),
  "like" BOOL NOT NULL
);
CREATE UNIQUE INDEX ON votes (date, choice_id, email);
