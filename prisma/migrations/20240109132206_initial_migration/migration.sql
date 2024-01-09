-- CreateTable
CREATE TABLE `Dokumen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `noDokumen` VARCHAR(255) NOT NULL,
    `npwp` VARCHAR(191) NOT NULL,
    `namaWp` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `jenisBerkasId` VARCHAR(191) NOT NULL,
    `noDusId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JenisBerkas` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dus` (
    `id` VARCHAR(191) NOT NULL,
    `noDus` VARCHAR(255) NOT NULL,
    `noRak` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('User', 'Admin') NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
