import { Injectable } from '@nestjs/common';
import { IAnimal } from './models/models';
import { faker } from '@faker-js/faker';

@Injectable()
export class AppService {
  animals: IAnimal[];

  getAnimals(): Array<IAnimal> {
    if (!this.animals) {
      this.resetAnimals();
    }

    return this.animals;
  }

  resetAnimals(): void {
    this.animals = [...Array(200).keys()].map((id) => {
      const anType: string = faker.animal.type();
      return {
        id,
        type: anType,
        age: faker.random.numeric(2),
        name: faker.name.firstName(),
        img: faker.image.imageUrl(120, 120, anType, true),
      };
    });
  }
}
