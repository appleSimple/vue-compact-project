import { FolderType } from "../types/folder";

export const FOLDER_LIST: FolderType[] = [
  {
    id: 0,
    title: '첫번째 폴더',
    depth: 0,
    parent: null,
    children: [
      {
        id: 1,
        title: '두번째 폴더',
        depth: 1,
        parent: 0,
        children: [],
      },
    ],
  },
  {
    id: 2,
    title: '세번째 폴더',
    depth: 0,
    parent: null,
    children: [
      {
        id: 3,
        title: '네번째 폴더',
        depth: 1,
        parent: 2,
        children: [
          {
            id: 4,
            title: '다섯번째 폴더',
            depth: 2,
            parent: 3,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: '여섯번째 폴더',
    depth: 0,
    parent: null,
    children: [],
  },
];
