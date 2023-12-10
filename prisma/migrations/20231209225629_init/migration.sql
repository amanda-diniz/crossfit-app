-- CreateTable
CREATE TABLE "PR" (
    "id" SERIAL NOT NULL,
    "exercise" TEXT,
    "date" DATE NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "PR_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repetition" (
    "id" SERIAL NOT NULL,
    "exercise" TEXT,
    "date" DATE NOT NULL,
    "repetition" INTEGER NOT NULL,

    CONSTRAINT "Repetition_pkey" PRIMARY KEY ("id")
);
