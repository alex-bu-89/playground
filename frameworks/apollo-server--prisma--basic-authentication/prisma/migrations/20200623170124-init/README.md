# Migration `20200623170124-init`

This migration has been generated by Alexander Buyanov at 6/23/2020, 5:01:24 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"email" text  NOT NULL ,"id" SERIAL,"password" text  NOT NULL ,"updatedAt" timestamp(3)  NOT NULL ,"username" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200623170124-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,20 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+    provider = "postgresql"
+    url      = env("DATABASE_URL")
+}
+
+generator client {
+    provider = "prisma-client-js"
+}
+
+model User {
+    id        Int      @default(autoincrement()) @id
+    email     String   @unique
+    username  String
+    password  String
+    createdAt DateTime @default(now())
+    updatedAt DateTime @updatedAt
+}
```


