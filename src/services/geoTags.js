import { GeoTag } from '../models/GeoTag.js';

export function getAll() {
  return GeoTag.findAll();
}

export function getById(tagId) {
  return GeoTag.findByPk(tagId);
}

export function createTag(tag) {
  const { name, description, latitude, longitude } = tag;
  return GeoTag.create({ name, description, latitude, longitude })
}
