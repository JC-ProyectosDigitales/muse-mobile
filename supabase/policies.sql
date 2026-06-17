-- Ejecuta esto en Supabase → SQL Editor
-- si la app puede leer/crear pero no eliminar.

-- Tabla garments
alter table public.garments enable row level security;

drop policy if exists "garments_public_select" on public.garments;
drop policy if exists "garments_public_insert" on public.garments;
drop policy if exists "garments_public_update" on public.garments;
drop policy if exists "garments_public_delete" on public.garments;

create policy "garments_public_select"
  on public.garments
  for select
  using (true);

create policy "garments_public_insert"
  on public.garments
  for insert
  with check (true);

create policy "garments_public_update"
  on public.garments
  for update
  using (true);

create policy "garments_public_delete"
  on public.garments
  for delete
  using (true);

-- Bucket garments (Storage)
drop policy if exists "garments_storage_select" on storage.objects;
drop policy if exists "garments_storage_insert" on storage.objects;
drop policy if exists "garments_storage_delete" on storage.objects;

create policy "garments_storage_select"
  on storage.objects
  for select
  using (bucket_id = 'garments');

create policy "garments_storage_insert"
  on storage.objects
  for insert
  with check (bucket_id = 'garments');

create policy "garments_storage_delete"
  on storage.objects
  for delete
  using (bucket_id = 'garments');
