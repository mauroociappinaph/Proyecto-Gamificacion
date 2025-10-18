// packages/common-types/src/interfaces/clerk-user.interface.ts
export interface ClerkUser {
  id: string;
  emailAddresses: Array<{ id: string; emailAddress: string }>;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string;
  // Agrega cualquier otra claim que necesites de Clerk
  // Por ejemplo, si tienes roles personalizados en las claims de Clerk:
  // roles?: string[];
}
