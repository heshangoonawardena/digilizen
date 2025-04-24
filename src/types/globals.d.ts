export {};

// Create a type for the roles
export type Roles =
  | "police_sergeant"
  | "traffic_officer"
  | "senior_officer"
  | "admin"
  | "user ";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
