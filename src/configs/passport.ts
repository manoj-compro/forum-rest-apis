import { Strategy, ExtractJwt } from "passport-jwt"

import prisma from '~/prisma/client';
import dotenv from "dotenv"

dotenv.config();
const JwtStrategy = Strategy;
import { PassportStatic } from "passport";

const passportConfig = (passport: PassportStatic) => {
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET ?? 'secret',
      },
      async (jwtPayload, done) => {
        try {
          const user = await prisma.user.findUnique({
            where: { id: jwtPayload.id }
          });
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        } catch (error) {
          return done(error, false);
        }
      }
    )
  )
}

export default passportConfig