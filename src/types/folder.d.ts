type FolderType = {
  id: number;
  title: string;
  depth: number;
  parent: number | null;
  children: FolderType[];
};

export { FolderType };
