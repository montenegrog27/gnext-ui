declare module 'gnext-ui' {
  import { FC } from 'react';

  interface TableProps {
    headers: string[];
    rows: { [key: string]: any }[];
    imageColumns?: string[];
    showButton?: boolean;
    showDelete?: boolean;
    showEdit?: boolean;
    showSwitch?: boolean;
    headerTitles?: {
      actions?: string; 
      delete?: string;
      edit?: string; 
      switch?: string;
    };
    onDelete?: (rowIndex: number) => void;
    onEdit?: (rowIndex: number) => void;
    onSwitchChange?: (rowIndex: number, checked: boolean) => void;
    onButtonClick?: (rowIndex: number) => void;
  }

  interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    range?: number;
    currentPageBgColor?: string; 
    currentPageTextColor?: string;
  }

  export const Table: FC<TableProps>;
  export const TableGlass: FC<TableProps>;
  export const TableNeo: FC<TableProps>;
  export const PaginationGlass: FC<PaginationProps>;
}
