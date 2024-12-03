import { findHeroById } from './services/hero.service';

const hero = findHeroById(1);
console.log('app LINE 11 =>', hero?.name ?? 'Hero not found');
