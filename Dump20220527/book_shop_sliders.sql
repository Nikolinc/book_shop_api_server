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
-- Table structure for table `sliders`
--

DROP TABLE IF EXISTS `sliders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sliders` (
  `idSliders` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `sliderscolName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idSliders`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sliders`
--

LOCK TABLES `sliders` WRITE;
/*!40000 ALTER TABLE `sliders` DISABLE KEYS */;
INSERT INTO `sliders` VALUES (1,'https://github.com/Nikolinc/book_shop/blob/main/assets/Slider/41298.jpg?raw=true','Книжная удача помогает всем любителям чтения. Проверьте сами :)','Книжная удача!'),(2,'https://github.com/Nikolinc/book_shop/blob/main/assets/Slider/40930.jpg?raw=true','Хорошие новости для всех отаку! Популярная манга «Истребитель демонов» скоро будет доступна в печатном виде – и только в «Читай-городе». Успевайте оформить предзаказ, чтобы точно получить свой заветный томик и прочитать его первыми :)','Манга Коёхару Готогэ'),(3,'https://github.com/Nikolinc/book_shop/blob/main/assets/Slider/41350.jpg?raw=true','Война повлияла на творчество многих авторов. В подборке вас ждут истории о сражениях и мире, которые расскажут Михаил Шолохов, Сергей Михалков и другие писатели. Скорее загляните!','День Победы'),(4,'https://github.com/Nikolinc/book_shop/blob/main/assets/Slider/41456.jpg?raw=true','Будущее – это тайна, раскрыть которую помогут звёзды. Загляните в нашу подборку книг по астрологии, нумерологии и не только, чтобы человеческие судьбы больше не были для вас загадкой.   ','Звёзды подскажут'),(5,'https://github.com/Nikolinc/book_shop/blob/main/assets/Slider/41534.jpg?raw=true','В семейных сагах есть и любовь, и тайны, и драмы. А ещё много героев и сюжетных линий, которые увлекут вас надолго. Загляните в нашу подборку, чтобы выбрать новую интересную историю о связи поколений.','Семейные саги');
/*!40000 ALTER TABLE `sliders` ENABLE KEYS */;
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
