import { Place } from '../models/Place.js';

export function getAll() {
  return Place.findAll();
}

export function getById(tagId) {
  return Place.findByPk(tagId);
}

export function createTag(tag) {
  const { name, description, latitude, longitude } = tag;
  return Place.create({ name, description, latitude, longitude })
}
