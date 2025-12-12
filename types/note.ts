interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
}

interface CreateNoteData {
  title: string;
  content: string;
  tag: string;
}

type Tags = 'Work' | 'Personal' | 'Meetimg' | 'Shopping' | 'Todo';

export type { Note, CreateNoteData, Tags };
