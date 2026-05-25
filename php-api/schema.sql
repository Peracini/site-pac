-- Execute este arquivo no cPanel → phpMyAdmin → Importar
-- Cria a tabela de posts do blog PAC Advogados

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
