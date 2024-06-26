import axios from "axios";
import type { Post, Category } from "./types";

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

export const search = async (url: string) => {
  try {
    const response = await api.get(url);

    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    return [null, response.data]
  } catch (error) {
    if (error instanceof Error) {
      return [error.message, null]
    }
    return ['Failed to fetch data', null]
  }

}

export class Posts {
  static async getAll({ category, subcategory }: { category?: string, subcategory?: string } = {}) {
    let url = '/posts';

    if (category) url = `/posts?category=${category}`;
    if (subcategory) url = `/posts?subcategory=${subcategory}`;

    return search(url) as Promise<[Error | null, Post[] | null]>
  }

  static async getById(id: string) {
    return search(`posts/${id}`) as Promise<[Error | null, Post | null]>
  }
}

export class Categories {
  static async getAll() {
    return search('/categories') as Promise<[Error | null, Category[] | null]>
  }

  static async getById(id: string) {
    return search(`categories?id=${id}`) as Promise<[Error | null, Category[] | null]>
  }
}