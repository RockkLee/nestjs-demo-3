import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { UserModule } from '@infra/module/user.module';
import { UserPo } from '@infra/po/user.po';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "sqlite", // or 'postgres', 'mysql', etc.
            database: 'database.sqlite', // For SQLite
            autoLoadEntities: true, // Enable auto-loading of entities
            synchronize: true, // Set to false in production
        }),
        UserModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
