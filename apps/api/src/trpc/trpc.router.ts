import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { MonsterTypesService } from 'src/monsters-type/monster-types.service';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly monsterTypesService: MonsterTypesService,
  ) {}

  appRouter = this.trpc.router({
    hello: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        return `Hello ${input.name ? input.name : `Bilbo`}`;
      }),
    getMonsterTypes: this.trpc.procedure
      // .input()
      .query(async () => {
        return await this.monsterTypesService.getAll();
      }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      // @ts-ignore
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
