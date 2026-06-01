-- Execute este arquivo no cPanel → phpMyAdmin → Importar
-- Cria as tabelas do blog e documentos PAC Advogados

CREATE TABLE IF NOT EXISTS `posts` (
  `id`               INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug`             VARCHAR(255)  NOT NULL UNIQUE,
  `title`            VARCHAR(500)  NOT NULL,
  `category`         VARCHAR(100)  NOT NULL DEFAULT '',
  `excerpt`          TEXT,
  `body`             LONGTEXT      NOT NULL,
  `date`             DATE          NOT NULL,
  `read_time`        VARCHAR(20)   NOT NULL DEFAULT '5 min',
  `meta_description` TEXT,
  `published`        TINYINT(1)    NOT NULL DEFAULT 1,
  `created_at`       TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
  `updated_at`       TIMESTAMP     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_category`  (`category`),
  INDEX `idx_published` (`published`),
  INDEX `idx_date`      (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `page_views` (
  `id`         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `page`       VARCHAR(255)  NOT NULL,
  `title`      VARCHAR(255)  NOT NULL DEFAULT '',
  `referrer`   VARCHAR(500)  NOT NULL DEFAULT '',
  `device`     VARCHAR(20)   NOT NULL DEFAULT 'desktop',
  `browser`    VARCHAR(50)   NOT NULL DEFAULT '',
  `ip_hash`    VARCHAR(32)   NOT NULL DEFAULT '',
  `created_at` TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_page`    (`page`),
  INDEX `idx_date`    (`created_at`),
  INDEX `idx_ip_hash` (`ip_hash`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `documents` (
  `id`          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug`        VARCHAR(255)  NOT NULL UNIQUE,
  `titulo`      VARCHAR(500)  NOT NULL,
  `tipo`        ENUM('html','pdf') NOT NULL DEFAULT 'pdf',
  `filename`    VARCHAR(255)  NOT NULL,
  `descricao`   TEXT,
  `created_at`  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
