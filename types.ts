
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum WorkspaceTab {
  DRIVE = 'drive',
  GMAIL = 'gmail',
  DOCS = 'docs',
  SHEETS = 'sheets',
  CALENDAR = 'calendar'
}

export interface WorkspaceItem {
  id: string;
  name: string;
  type: string;
  lastModified: string;
  owner: string;
}
