import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

    constructor () {
        super({
            clientID:     process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL:  'http://138.68.114.156:3002/auth/google/redirect',
            scope:        ['email', 'profile'],
        });
    }

    async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const { name, emails } = profile;
        const user = {
            googleId:  profile.id,
            email:     emails[0].value,
            authType:  'google',
            firstName: name.givenName,
            lastName:  name.familyName,
            accessToken,
        };
        done(null, user);
    }
}