INSERT INTO `CUSTOMERS` (`email`, `password`, `fullname`, `address`, `phone`, `role`) VALUES ('admin@admin.hu', '$2a$10$lW9Q6thFdccwPiRyOmQmreEtNhERoYGEsYKRL3uV97Q9u2ZGKxusW', 'Admin', 'Admin address', '062099999999', 'ROLE_ADMIN');
INSERT INTO `CUSTOMERS` (`email`, `password`, `fullname`, `address`, `phone`, `role`) VALUES ('c1@c1.hu', '$2a$10$lW9Q6thFdccwPiRyOmQmreEtNhERoYGEsYKRL3uV97Q9u2ZGKxusW', 'Customer1', 'Customer1 address', '062099999991', 'ROLE_CUSTOMER');
INSERT INTO `CUSTOMERS` (`email`, `password`, `fullname`, `address`, `phone`, `role`) VALUES ('c2@c2.hu', '$2a$10$lW9Q6thFdccwPiRyOmQmreEtNhERoYGEsYKRL3uV97Q9u2ZGKxusW', 'Customer2', 'Customer2 address', '062099999992', 'ROLE_CUSTOMER');

INSERT INTO `MENUS` (`name`, `details`, `price`,`IMG_URL`) VALUES ('Csirkemell rizs', '500g, igazi csirkéből', '900', 'https://material.angular.io/assets/img/examples/shiba2.jpg');
INSERT INTO `MENUS` (`name`, `details`, `price`,`IMG_URL`) VALUES ('Tökfőzelék', '', '650', 'https://material.angular.io/assets/img/examples/shiba2.jpg');
INSERT INTO `MENUS` (`name`, `details`, `price`,`IMG_URL`) VALUES ('Vörösboros marhapörkölt, kagylótésztával', 'kenyér jár mellé', '1200', 'https://material.angular.io/assets/img/examples/shiba2.jpg');
INSERT INTO `MENUS` (`name`, `details`, `price`,`IMG_URL`) VALUES ('Húsleves gazdagon, borsófőzelék', 'Laci bácsi kedvence', '950', 'https://material.angular.io/assets/img/examples/shiba2.jpg');

INSERT INTO `COURIERS` (`name`) VALUES ('Jani');
INSERT INTO `COURIERS` (`name`) VALUES ('Bela');
INSERT INTO `COURIERS` (`name`) VALUES ('Jozsi');
INSERT INTO `COURIERS` (`name`) VALUES ('Kati');

