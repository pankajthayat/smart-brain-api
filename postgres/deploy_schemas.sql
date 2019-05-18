-- Deploy fresh database tables
--execute scripts

\i '/docker-entrypoint-initdb.d/tables/users.sql'

\i '/docker-entrypoint-initdb.d/tables/login.sql'

-- order matters in running or creating the  tables here if they depend on each other


\i '/docker-entrypoint-initdb.d/seed/seed.sql'
-- this is for some pre data want to have whenver we run docker