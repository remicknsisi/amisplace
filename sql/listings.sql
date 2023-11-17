-- Create listing table
create table
    listings (
        id uuid default uuid_generate_v4 () primary key,
        profile_id uuid references public.profiles (id),
        webflow_id bigint,
        created_at timestamp
        with
            time zone default current_timestamp,
            updated_at timestamp
        with
            time zone,
            more_details_link text,
            price numeric,
            price_unit text check (price_unit in ('night', 'months')),
            available_dates_string text,
            description text,
            host text,
            name text,
            area text,
            location text,
            thumbnail_image text,
            available boolean
    );

-- Set up Row Level Security (RLS)
alter table listings enable row level security;

-- TODO: update to only accepted profiles
create policy "Lstings are viewable by logged in users." on listings for
select
    to authenticated using (true);

create policy "Users can insert their own listings." on listings for insert to authenticated
with
    check (auth.uid () = profile_id);

create policy "Users can update own listings." on listings for
update to authenticated using (auth.uid () = profile_id);

CREATE POLICY "Admin can CRUD any listings" ON "public"."listings"
AS PERMISSIVE FOR ALL
TO authenticated
WITH CHECK (exists ( select 1 from profiles where auth.uid() = id and admin = true ))


-- Create trigger to call the function
create trigger
  update_updated_at_trigger before
update
  on listings for each row
execute
  procedure update_updated_at ();