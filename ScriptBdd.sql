-- Table Roles

INSERT INTO `projet_final_api`.`roles` (`roleId`, `rolename`) VALUES ('1', 'Admin');
INSERT INTO `projet_final_api`.`roles` (`roleId`, `rolename`) VALUES ('2', 'User');
INSERT INTO `projet_final_api`.`roles` (`roleId`, `rolename`) VALUES ('3', 'Visitor');

-- Table Movie

INSERT INTO `projet_final_api`.`movies` (`moviename`, `releasedate`, `globalrating`) VALUES ('Star Wars', '1977-10-19', '5');
INSERT INTO `projet_final_api`.`movies` (`moviename`, `releasedate`, `globalrating`) VALUES ('Star Wars 2', '2000-10-09', '4');
INSERT INTO `projet_final_api`.`movies` (`moviename`, `releasedate`, `globalrating`) VALUES ('Star Wars 3', '2003-10-03', '3');
INSERT INTO `projet_final_api`.`movies` (`moviename`, `releasedate`, `globalrating`) VALUES ('Star Wars 4', '2010-08-21', '2');
INSERT INTO `projet_final_api`.`movies` (`moviename`, `releasedate`, `globalrating`) VALUES ('Star Wars 5', '2020-02-16', '1');

-- Table User


INSERT INTO `projet_final_api`.`users` (`username`, `email`, `password`, `firstname`, `lastname`, `roleId`) VALUES ('admin', 'admin@gmail.com', '$2b$10$JA40mD35HAB2zTZD.Dvle.6FTGuehSGXd7IYwhINt3PdWe7dbmWcy', 'admin', 'admin', '1');
INSERT INTO `projet_final_api`.`users` (`username`, `email`, `password`, `firstname`, `lastname`, `roleId`) VALUES ('visitor', 'visitor@gmail.com', '$2b$10$QIDYApEgl8RjlWN.FOgXJeB5T9oPJXyUG5AVOJAEzWFkNWXIX/l6i', 'visitor', 'visitor', '3');
INSERT INTO `projet_final_api`.`users` (`username`, `email`, `password`, `firstname`, `lastname`, `roleId`) VALUES ('user', 'user@gmail.com', '$2b$10$S1.NJHglp3mSVE5dOJ0WhuJ5AUgNxzgml90l7mmBxlY4iqjjiCAku', 'user', 'user', '2');
INSERT INTO `projet_final_api`.`users` (`username`, `email`, `password`, `firstname`, `lastname`, `roleId`) VALUES ('user2', 'user2@gmail.com', '$2b$10$ktLgFaARp8ATQC.IduDKmeWnrR203kv7omCDZdS.9a/NafHx/TP72', 'user2', 'user2', '2');


-- Table Reviews

INSERT INTO `projet_final_api`.`reviews` (`reviewId`, `username`, `reviewtitle`, `rating`, `comment`, `like`, `moviename`) VALUES ('1', 'user', 'Review star wars', '5', 'WAaa film incredible', '2', 'Star Wars');
INSERT INTO `projet_final_api`.`reviews` (`reviewId`, `username`, `reviewtitle`, `rating`, `comment`, `like`, `moviename`) VALUES ('2', 'user2', 'Review star wars 2', '1', 'Sacrément nul ', '5', 'Star Wars 2');
INSERT INTO `projet_final_api`.`reviews` (`reviewId`, `username`, `reviewtitle`, `rating`, `comment`, `like`, `moviename`) VALUES ('3', 'user2', 'Review star wars 3', '3', 'Mouais ça va', '1', 'Star Wars 3');
INSERT INTO `projet_final_api`.`reviews` (`reviewId`, `username`, `reviewtitle`, `rating`, `comment`, `like`, `moviename`) VALUES ('4', 'user', 'Review star wars 4', '2', 'incroyable mieux que le premier', '10', 'Star Wars 4');
