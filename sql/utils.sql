-- Add function to update 'updated_at' field
create
or replace function update_updated_at () returns trigger as $$
begin
  new.updated_at = current_timestamp;
  return new;
end;
$$ language plpgsql;