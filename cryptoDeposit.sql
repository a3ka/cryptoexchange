-- table
create table "AvailableCryptocurrency" (
  id bigint generated always as identity,
  name varchar NOT NULL
);

-- seed
insert into "AvailableCryptocurrency"
  ("name")
values
  ('BTC'),
  ('USDT');

-- get all
select * from "AvailableCryptocurrency";
