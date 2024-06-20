import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Module({
  providers: [
    // guard this entire module
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class UserModule {}
