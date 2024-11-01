-- CreateTable
CREATE TABLE "Farmer" (
    "_id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Farmer_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Crop" (
    "_id" TEXT NOT NULL,
    "cropName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" INTEGER NOT NULL,
    "harvestDate" TIMESTAMP(3) NOT NULL,
    "farmLocation" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Crop_pkey" PRIMARY KEY ("_id")
);
