-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: book_shop
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `nomenclature`
--

DROP TABLE IF EXISTS `nomenclature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nomenclature` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `author` varchar(100) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nomenclature`
--

LOCK TABLES `nomenclature` WRITE;
/*!40000 ALTER TABLE `nomenclature` DISABLE KEYS */;
INSERT INTO `nomenclature` VALUES (1,'Берсерк том 1','Хуй Знает Кто Младший','https://img3.labirint.ru/rc/a63fd99361bfb913cf732d979d8b10ff/220x340/books75/747735/cover.jpg?1589469910',1990),(2,'Невеста Ноября','Арден Л','https://img-gorod.ru/28/966/2896636_detail.jpg',629),(3,'Живи и давай жить другим','Грун Х','https://img-gorod.ru/29/023/2902301_detail.jpg',629),(4,'Элизиум','Сакавич Н.','https://img-gorod.ru/28/922/2892294_detail.jpg',458),(5,'Танец пылающего моря (#2)','Меллоу Э.Дж..','https://img-gorod.ru/29/025/2902568_detail.jpg',644),(6,'Я - бездна','Карризи Д.','https://img-gorod.ru/29/025/2902568_detail.jpg',536),(7,'Маркетинг 5.0. Технологии ...','Котлер Ф.','https://img-gorod.ru/29/042/2904206_detail.jpg',964);
/*!40000 ALTER TABLE `nomenclature` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-27 13:06:50
