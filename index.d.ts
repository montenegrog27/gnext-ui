declare module 'gnext-ui' {
  import { FC } from 'react';

  interface TableProps {
      headers: string[];
      rows: { [key: string]: any }[];
  }

  export const Table: FC<TableProps>;
  export const TableGlass: FC<TableProps>;
  export const TableNeo: FC<TableProps>;
}
