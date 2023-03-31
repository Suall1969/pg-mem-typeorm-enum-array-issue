# What is this?
This is a very minimal reproduction code for the issue with enum arrays in pg-mem that occurs with Typeorm.
# How to run it?
1. clone repository
2. run `npm i`
3. run `npm start`
# Why the issue occurs?
Enum arrays, like other arrays, are serialised as strings `{value1, value2}` and pg-mem parses these strings into actual arrays `['value1', 'value2']`. The problem is that the ubiquitous Postgres driver namely node-postgres doesn't parse enum arrays by default ([although it can be configured to do so](https://github.com/brianc/node-pg-types/issues/56)). Thus, Typeorm [always tries to parse enum arrays manually](https://github.com/typeorm/typeorm/blob/58fc08840a4a64ca1935391f4709a784c3f0b373/src/driver/postgres/PostgresDriver.ts#L777); which fails with pg-mem since they are already parsed beforehand.
# What can be done about this?
At the very least, there should be an option to disable parsing of specified emums or enum arrays in general. Ideally the parsing corpus can be extracted into separate abstractions and be pluged-in as needed, similar to node-postgres.
