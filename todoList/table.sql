-- Adminer 4.7.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `todos`;
CREATE TABLE `todos` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `todos` (`id`, `title`, `category`, `description`) VALUES
(1,	'Payer EDF',	'Urgent',	'La douloureuse !! :-('),
(2,	'Appeler Elsa',	'Normal',	'Je ne me souviens plus de quoi je dois lui parler par contre...'),
(3,	'Acheter des boissons',	'Important',	'Pour la pendaison de crémaillère !');

-- 2019-03-26 08:08:15
