'use server';

import { getDatabaseService } from '@/lib/services';
import { IUser } from '@/lib/types/models';

/**
 * Synchronizes the user with the database after login/authentication.
 * - Creates the user if they don't exist.
 * - Updates provider details if they have changed.
 * - Ensures the user has a role (defaults to 'user' for new users).
 */
export async function syncUser(
  email: string | null | undefined,
  providerDetails: Record<string, unknown>,
): Promise<IUser | null> {
  if (!email) {
    console.error('syncUser: email is missing');
    return null;
  }

  const db = getDatabaseService();
  await db.connect();

  try {
    const existingUser = await db.getUserByEmail(email);

    if (existingUser) {
      const currentDetails = existingUser.provider_details || {};

      const hasChanges = JSON.stringify(currentDetails) !== JSON.stringify(providerDetails);

      if (hasChanges) {
        console.log(`syncUser: Updating provider details for ${email}`);

        const updatedUser = await db.updateUser(existingUser._id!.toString(), {
          provider_details: { ...currentDetails, ...providerDetails },
        });

        if (updatedUser) return JSON.parse(JSON.stringify(updatedUser));

        return null;
      }

      return JSON.parse(JSON.stringify(existingUser));
    }

    console.log(`syncUser: Creating new user for ${email}`);

    const newUser = await db.createUser({
      email,
      provider_details: providerDetails,
      role: 'user',
    });

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error('syncUser: Error synchronizing user:', error);
    return null;
  }
}
