import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    let username = cookies.get("username");
    return {username};
}) satisfies PageServerLoad;