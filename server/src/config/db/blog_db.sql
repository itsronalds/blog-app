-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: blog_db
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `IDPost` int NOT NULL AUTO_INCREMENT,
  `IDUser` int NOT NULL,
  `postTitle` varchar(30) NOT NULL,
  `postDescription` longtext NOT NULL,
  `postImage` text NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`IDPost`),
  KEY `IDUser` (`IDUser`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`IDUser`) REFERENCES `users` (`IDUser`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,'React Library','React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.\r\n\r\nReact offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.','https://res.cloudinary.com/drycaa0bz/image/upload/v1696992622/blog/posts/vp41lqyexuudcpuhn6wx.png','2023-10-11 02:50:22'),(2,1,'Rick and Morty Series','Whenever I am asked to explain the appeal of “Rick and Morty,” I propose a thought experiment.\r\n\r\nImagine that you grew up with the world’s tragedies being beamed into your living room by 24-hour cable news. Your country has been at war for much your lifetime. You graduated college with a huge amount of debt, and you entered the work force during the recent financial crisis. Imagine, too, that the world’s ecological crisis weighs heavily on your mind and that you spend as much time on the internet as you do speaking to real human beings.\r\n\r\nIf you were this sort of person, what television show would resonate with you?\r\n\r\n“Rick and Morty,” the Adult Swim animated comedy by Justin Roiland and Dan Harmon, just might be the answer.\r\n\r\nIt is dark, even to the point of being nihilistic; it is absurdist; and it operates less like a novel or serial drama and more like a meme or internet video. It also speaks to the sense of alienation, anxiety and skepticism that it not uncommon among younger Americans today.\r\n\r\nAnd it has just been renewed for 70 episodes. Adult Swim announced last week that as a part of an overall deal with the series creators, “Rick and Morty,” which numbers 31 episodes in its first three seasons, will return for more than double that number.','https://res.cloudinary.com/drycaa0bz/image/upload/v1696992934/blog/posts/e2vureekoaeltkirnhpx.jpg','2023-10-11 02:55:35');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `IDUser` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `userLastName` varchar(50) NOT NULL,
  `userGender` char(1) NOT NULL,
  `userEmail` varchar(225) NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `userPhoto` text,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`IDUser`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ronald','Abu Saleh','M','ronaldabusaleh@gmail.com','$2b$10$bkksZ65Ndv7b/54KEv4ERuNqZGqtS8xPhL5rW3n.kekrqEC7qhDyK','https://res.cloudinary.com/drycaa0bz/image/upload/v1696992481/blog/users/qlmxdkhhecwnps9oyl5i.jpg','2023-10-11 02:48:02');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-10 23:23:03
