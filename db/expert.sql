-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2019 at 01:44 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `expert`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` char(10) NOT NULL,
  `password` char(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin'),
(2, 'gideon', 'foolishboy');

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `SN` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `message` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`SN`, `name`, `message`, `email`) VALUES
(15, 'Agbani Daviva', 'I am okay', 'agbanidavi2019@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `SN` int(11) NOT NULL,
  `Question` varchar(100) NOT NULL,
  `Type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`SN`, `Question`, `Type`) VALUES
(1, 'Do you experience frequent urination ?', 'Gonorrhea'),
(2, 'Do you have persistent sore throat ?', 'Gonorrhea'),
(3, 'Do you have swelling or redness at the opening of the penis ?', 'Gonorrhea'),
(4, 'Do you experience pain in the testicles ?', 'Gonorrhea'),
(5, 'Do you have watery,creamy and greenish discharge from the vagina ?', 'Gonorrhea'),
(6, 'Do you feel pain upon engaging in sexual Intercourse ?', 'Gonorrhea'),
(7, 'Do you have heavier menstrual period?', 'Gonorrhea'),
(8, 'Do you have sharp pain in the lower abdomen?', 'Gonorrhea'),
(9, 'Do you experience burning sensation while urinating?', 'Gonorrhea'),
(10, 'Do you have a rash of small, black pink spot?', '	Typhoid'),
(11, 'Do you feel tired constantly or after activities?', '	Typhoid'),
(12, 'Do you have changes recently in your mental state ?', '	Typhoid'),
(13, 'Do you have irregular heartbeat?', '	Typhoid'),
(14, 'Do you find it difficult to urinate a times?', '	Typhoid'),
(15, 'Do you have abdominal pain that starts suddenly?', '	Typhoid'),
(16, 'Do you lack appetite towards food?', '	Typhoid'),
(17, 'Do you vomit constantly?', '	Typhoid'),
(18, 'Is your abdomen swollen?', '	Typhoid');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('XoGDngyeRBouYem-GXhNq1RBW5JwKKUM', 1571096597, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`SN`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`SN`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `SN` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `SN` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
