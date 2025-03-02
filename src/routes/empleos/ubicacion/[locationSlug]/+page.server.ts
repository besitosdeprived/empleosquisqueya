import { db } from '$lib/server/db/db';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const locationSlug = params.locationSlug
  const jobs = await db.query.locations.findMany({
    where: (loc, { eq }) => eq(loc.slug, locationSlug),
    with: {
      jobsToLocations: {
        with: {
          job: {
            with: {
              jobPost: true,
            },
          },
        },
      },
    },
  });
  console.log(jobs)
  return {
    jobs
  };
}) satisfies PageServerLoad;