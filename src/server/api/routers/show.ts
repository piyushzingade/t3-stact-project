
import {  z } from "zod";
import { showSchema } from "~/common/zod/showSchema";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const showRouter = createTRPCRouter({
  
  hello: protectedProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return { greeting: `Hello ${input.text}` };
    }),

  create: protectedProcedure
    .input(showSchema)
    .mutation(async ({ ctx, input }) => {
      console.log("Creating show with input:", input);
      // Validate input against the schema
      console.log(ctx.db.show);
      try {
        return await ctx.db.show.create({
          data: {
            title: input.title,
            description : input.description,
            thumbnail : input.thumbnail,
            location : input.location,
            date: new Date(input.date),
            createdById: ctx.session.user.id,
          },
        });
      }catch (e: unknown) {
        console.log(e);
        console.log("error occured");
        return {
          error: "some error occured",
        };
      }
    }),
    
  get: protectedProcedure.query(async ({ ctx }) => {
    const shows = await ctx.db.show.findMany();
    return shows ?? [];
  })
})

  
