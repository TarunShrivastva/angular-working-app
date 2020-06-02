export class Pagination {
  current_page: number;
  from: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
  last_page?: number;
  data: any[];
}

// A dynamic pagination model which can be describe the
// instance type for data array.
// Use this instead of simple Pagination
export class NewPagination<T> {
  current_page: number;
  from: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
  data: T[];
  last_page?: number;
}
