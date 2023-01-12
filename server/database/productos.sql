-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-12-2022 a las 12:02:57
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crudapi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `referencia` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `cantidad` int(10) NOT NULL,
  `valor` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `referencia`, `nombre`, `descripcion`, `cantidad`, `valor`, `createdAt`, `updatedAt`) VALUES
(1, 'Xiaomi Redmi 12', 'Celular', 'Celular de 64 Gigas de almacenamiento', 2, 850000, '2022-12-16', '2022-12-16'),
(2, 'Xiaomi mi 12', 'Celular', 'Celular de 64 Gigas de almacenamiento', 7, 3500000, '2022-12-16', '2022-12-16'),
(3, 'Iphone Apple 13', 'Celular Iphone', 'Celular de 64 Gigas de almacenamiento', 3, 4500000, '2022-12-16', '2022-12-16'),
(4, 'Zenbook Asus', 'Portatil Asus', 'Portatil de 14 pulgadas', 4, 2300000, '2022-12-16', '2022-12-16'),
(5, 'TV Smart TV LG', 'TV LG Legion', 'TV Smart TV FUL HD con pantalla curva de 78 pulgadas', 1, 12300000, '2022-12-16', '2022-12-16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
