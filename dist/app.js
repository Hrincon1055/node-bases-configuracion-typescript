"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const hero = (0, hero_service_1.findHeroById)(1);
console.log('app LINE 11 =>', hero?.name ?? 'Hero not found');