-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema KvizPraksaAluntis
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema KvizPraksaAluntis
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `KvizPraksaAluntis` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema kvizpraksaaluntis
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema kvizpraksaaluntis
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `kvizpraksaaluntis` DEFAULT CHARACTER SET utf8mb3 ;
USE `KvizPraksaAluntis` ;

-- -----------------------------------------------------
-- Table `KvizPraksaAluntis`.`oblast`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KvizPraksaAluntis`.`oblast` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `naziv` VARCHAR(255) NOT NULL,
  `opis` VARCHAR(255) NULL,
  `aktivno` TINYINT NOT NULL,
  `slika` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `KvizPraksaAluntis`.`single_choice_pitanje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KvizPraksaAluntis`.`single_choice_pitanje` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tekst_pitanja` VARCHAR(4096) NOT NULL,
  `slika` VARCHAR(1024) NULL,
  `odgovor_1` VARCHAR(255) NOT NULL,
  `odgovor_2` VARCHAR(255) NOT NULL,
  `odgovor_3` VARCHAR(255) NOT NULL,
  `odgovor_4` VARCHAR(45) NOT NULL,
  `tacan_odgovor` INT NOT NULL,
  `oblast_id` INT NOT NULL,
  PRIMARY KEY (`id`, `oblast_id`),
  INDEX `fk_single_choice_pitanje_oblast_idx` (`oblast_id` ASC) VISIBLE,
  CONSTRAINT `fk_single_choice_pitanje_oblast`
    FOREIGN KEY (`oblast_id`)
    REFERENCES `KvizPraksaAluntis`.`oblast` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `KvizPraksaAluntis`.`multiple_choice_pitanje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KvizPraksaAluntis`.`multiple_choice_pitanje` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tekst_pitanja` VARCHAR(4096) NOT NULL,
  `slika` VARCHAR(1024) NULL,
  `odgovor_1` VARCHAR(255) NOT NULL,
  `odgovor_2` VARCHAR(255) NOT NULL,
  `odgovor_3` VARCHAR(255) NOT NULL,
  `odgovor_4` VARCHAR(255) NOT NULL,
  `odgovor_5` VARCHAR(45) NOT NULL,
  `odgovor_6` VARCHAR(45) NOT NULL,
  `tacan_odgovor` VARCHAR(4) NOT NULL,
  `oblast_id` INT NOT NULL,
  PRIMARY KEY (`id`, `oblast_id`),
  INDEX `fk_multiple_choice_pitanje_oblast1_idx` (`oblast_id` ASC) VISIBLE,
  CONSTRAINT `fk_multiple_choice_pitanje_oblast1`
    FOREIGN KEY (`oblast_id`)
    REFERENCES `KvizPraksaAluntis`.`oblast` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `KvizPraksaAluntis`.`true_false_pitanje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KvizPraksaAluntis`.`true_false_pitanje` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `teskt_pitanja` VARCHAR(255) NOT NULL,
  `slika` VARCHAR(4096) NULL,
  `tacan_odgovor` TINYINT NOT NULL,
  `oblast_id` INT NOT NULL,
  PRIMARY KEY (`id`, `oblast_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_true_false_pitanje_oblast1_idx` (`oblast_id` ASC) VISIBLE,
  CONSTRAINT `fk_true_false_pitanje_oblast1`
    FOREIGN KEY (`oblast_id`)
    REFERENCES `KvizPraksaAluntis`.`oblast` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `KvizPraksaAluntis`.`spajalica_pitanje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `KvizPraksaAluntis`.`spajalica_pitanje` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tekst_pitanja` VARCHAR(4096) NOT NULL,
  `spojka_lijeva_1` VARCHAR(45) NOT NULL,
  `spojka_desna_1` VARCHAR(45) NOT NULL,
  `spojka_lijeva_2` VARCHAR(45) NOT NULL,
  `spojka_desna_2` VARCHAR(45) NOT NULL,
  `spojka_lijeva_3` VARCHAR(45) NOT NULL,
  `spojka_desna_3` VARCHAR(45) NOT NULL,
  `spojka_lijeva_4` VARCHAR(45) NOT NULL,
  `spojka_desna_4` VARCHAR(45) NOT NULL,
  `spojka_lijeva_5` VARCHAR(45) NOT NULL,
  `spojka_desna_5` VARCHAR(45) NOT NULL,
  `oblast_id` INT NOT NULL,
  PRIMARY KEY (`id`, `oblast_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_spajalica_pitanje_oblast1_idx` (`oblast_id` ASC) VISIBLE,
  CONSTRAINT `fk_spajalica_pitanje_oblast1`
    FOREIGN KEY (`oblast_id`)
    REFERENCES `KvizPraksaAluntis`.`oblast` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `kvizpraksaaluntis` ;

-- -----------------------------------------------------
-- Table `kvizpraksaaluntis`.`easy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kvizpraksaaluntis`.`easy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ime` VARCHAR(45) NOT NULL,
  `broj_bodova` INT NOT NULL,
  `vrijeme` TIME NOT NULL,
  `tip_pitanja` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `kvizpraksaaluntis`.`hard`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kvizpraksaaluntis`.`hard` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ime` VARCHAR(45) NOT NULL,
  `broj_bodova` INT NOT NULL,
  `vrijeme` TIME NOT NULL,
  `tip_pitanja` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `kvizpraksaaluntis`.`medium`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kvizpraksaaluntis`.`medium` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ime` VARCHAR(45) NOT NULL,
  `broj_bodova` INT NOT NULL,
  `vrijeme` TIME NOT NULL,
  `tip_pitanja` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `kvizpraksaaluntis`.`oblast`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kvizpraksaaluntis`.`oblast` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `naziv` VARCHAR(255) NOT NULL,
  `opis` VARCHAR(255) NULL DEFAULT NULL,
  `aktivno` TINYINT NOT NULL,
  `slika` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `kvizpraksaaluntis`.`multiple_choice_pitanje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kvizpraksaaluntis`.`multiple_choice_pitanje` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tekst_pitanja` VARCHAR(4096) NOT NULL,
  `slika` VARCHAR(1024) NULL DEFAULT NULL,
  `odgovor_1` VARCHAR(255) NOT NULL,
  `odgovor_2` VARCHAR(255) NOT NULL,
  `odgovor_3` VARCHAR(255) NOT NULL,
  `odgovor_4` VARCHAR(255) NOT NULL,
  `odgovor_5` VARCHAR(45) NOT NULL,
  `odgovor_6` VARCHAR(45) NOT NULL,
  `tacan_odgovor` VARCHAR(255) NULL DEFAULT NULL,
  `oblast_id` INT NOT NULL,
  `mode` INT NOT NULL,
  PRIMARY KEY (`id`, `oblast_id`),
  INDEX `fk_multiple_choice_pitanje_oblast1_idx` (`oblast_id` ASC) VISIBLE,
  CONSTRAINT `fk_multiple_choice_pitanje_oblast1`
    FOREIGN KEY (`oblast_id`)
    REFERENCES `kvizpraksaaluntis`.`oblast` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `kvizpraksaaluntis`.`single_choice_pitanje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kvizpraksaaluntis`.`single_choice_pitanje` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tekst_pitanja` VARCHAR(4096) NOT NULL,
  `slika` VARCHAR(1024) NULL DEFAULT NULL,
  `odgovor_1` VARCHAR(255) NOT NULL,
  `odgovor_2` VARCHAR(255) NOT NULL,
  `odgovor_3` VARCHAR(255) NOT NULL,
  `odgovor_4` VARCHAR(45) NOT NULL,
  `tacan_odgovor` INT NOT NULL,
  `oblast_id` INT NOT NULL,
  `mode` INT NOT NULL,
  PRIMARY KEY (`id`, `oblast_id`),
  INDEX `fk_single_choice_pitanje_oblast_idx` (`oblast_id` ASC) VISIBLE,
  CONSTRAINT `fk_single_choice_pitanje_oblast`
    FOREIGN KEY (`oblast_id`)
    REFERENCES `kvizpraksaaluntis`.`oblast` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `kvizpraksaaluntis`.`spajalica_pitanje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kvizpraksaaluntis`.`spajalica_pitanje` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tekst_pitanja` VARCHAR(4096) NOT NULL,
  `spojka_lijeva_1` VARCHAR(45) NOT NULL,
  `spojka_desna_1` VARCHAR(45) NOT NULL,
  `spojka_lijeva_2` VARCHAR(45) NOT NULL,
  `spojka_desna_2` VARCHAR(45) NOT NULL,
  `spojka_lijeva_3` VARCHAR(45) NOT NULL,
  `spojka_desna_3` VARCHAR(45) NOT NULL,
  `spojka_lijeva_4` VARCHAR(45) NOT NULL,
  `spojka_desna_4` VARCHAR(45) NOT NULL,
  `spojka_lijeva_5` VARCHAR(45) NOT NULL,
  `spojka_desna_5` VARCHAR(45) NOT NULL,
  `oblast_id` INT NOT NULL,
  `mode` INT NOT NULL,
  PRIMARY KEY (`id`, `oblast_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_spajalica_pitanje_oblast1_idx` (`oblast_id` ASC) VISIBLE,
  CONSTRAINT `fk_spajalica_pitanje_oblast1`
    FOREIGN KEY (`oblast_id`)
    REFERENCES `kvizpraksaaluntis`.`oblast` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `kvizpraksaaluntis`.`true_false_pitanje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kvizpraksaaluntis`.`true_false_pitanje` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `teskt_pitanja` VARCHAR(255) NOT NULL,
  `slika` VARCHAR(4096) NULL DEFAULT NULL,
  `tacan_odgovor` TINYINT NOT NULL,
  `oblast_id` INT NOT NULL,
  `mode` INT NOT NULL,
  PRIMARY KEY (`id`, `oblast_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_true_false_pitanje_oblast1_idx` (`oblast_id` ASC) VISIBLE,
  CONSTRAINT `fk_true_false_pitanje_oblast1`
    FOREIGN KEY (`oblast_id`)
    REFERENCES `kvizpraksaaluntis`.`oblast` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `kvizpraksaaluntis`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kvizpraksaaluntis`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ime` VARCHAR(45) NOT NULL,
  `tip_pitanja` INT NULL DEFAULT NULL,
  `vijeme` TIME NULL DEFAULT NULL,
  `broj_bodova` INT NULL DEFAULT NULL,
  `oblast_id` INT NOT NULL,
  `mode` INT NOT NULL,
  `vrijeme` TIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `oblast_id`),
  INDEX `fk_table1_oblast1_idx` (`oblast_id` ASC) VISIBLE,
  CONSTRAINT `fk_table1_oblast1`
    FOREIGN KEY (`oblast_id`)
    REFERENCES `kvizpraksaaluntis`.`oblast` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
