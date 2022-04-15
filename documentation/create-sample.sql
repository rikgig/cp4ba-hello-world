CREATE TABLE `USAGER` (
  `email` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`email`)
);
CREATE TABLE `CUSTOMER` (
  `id` int NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `dossierId` varchar(12) DEFAULT NULL,
  `processId` varchar(12) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
