import {
  dehydrate,
  QueryClient,
  HydrationBoundary,
} from '@tanstack/react-query';
import { getNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { KEY } from '@/types/constants';

type FilteredNotesProps = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ search: string; page: string }>;
};

async function FilteredNotes({ searchParams, params }: FilteredNotesProps) {
  const { search, page } = await searchParams;
  const { slug } = await params;
  // SAFELY extract tag
  let tag: string | undefined = slug?.[0];

  // "/notes/filter/all" OR no slug → get all notes
  if (!tag || tag === 'all') {
    tag = undefined;
  }

  //   const tag = slug[0] === 'all' ? undefined : slug[0];

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [KEY, search, page, tag],
    queryFn: () => getNotes(search, +page, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}

export default FilteredNotes;
