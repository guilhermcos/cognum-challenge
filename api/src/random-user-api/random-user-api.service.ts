import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RandomUserApiService {
  async getRandomUsers() {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=10&nat=br');
      const randomUsers: UserApiResponse = response.data;
      return this.formatUsersResult(randomUsers.results);
    } catch (err) {
      throw err;
    }
  }

  async formatUsersResult(usersInfo: UserInfo[]) {
    const fakeRoles: string[] = [
      'Front-end Developer',
      'Back-end Developer',
      'Full Stack Developer',
      'Software Engineer',
      'DevOps Engineer',
    ];

    return usersInfo.map((userInfo) => {
      const randomIndex = Math.floor(Math.random() * fakeRoles.length);
      const randomRole = fakeRoles[randomIndex];

      return {
        name: `${userInfo.name.first} ${userInfo.name.last}`,
        role: randomRole,
      };
    });
  }
}
