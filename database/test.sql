-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-11-2022 a las 03:41:12
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(40) NOT NULL,
  `status` int(11) NOT NULL,
  `password` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `email`, `phone`, `status`, `password`) VALUES
(1, 'Fidencio', 'fidencio@gmail.com', '6672365124', 1, '$2a$10$M.cttL7diVpU0a68CdkJ7.4gAUCOZy0Ia1xtgcznUD6TKzzH2RXna'),
(2, 'Palomino', 'palomino@gmail.com', '6672355323', 1, '$2a$10$M.cttL7diVpU0a68CdkJ7.4gAUCOZy0Ia1xtgcznUD6TKzzH2RXna'),
(3, 'Teofilo', 'teofilo@gmail.com', '6672856749', 1, '$2a$10$M.cttL7diVpU0a68CdkJ7.4gAUCOZy0Ia1xtgcznUD6TKzzH2RXna'),
(4, 'Susana', 'susana@gmail.com', '6672987456', 1, '$2a$10$M.cttL7diVpU0a68CdkJ7.4gAUCOZy0Ia1xtgcznUD6TKzzH2RXna');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
