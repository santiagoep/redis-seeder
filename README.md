# Redis Seeder

Redis Seeder is a script to load seeds in Redis by means of an exported file with extension `.redis`

### Steps

1.Export data in a `.redis` file, It is recommended to use` redis-commander` for this. 2. In case you don't have the `redis-cli` installed, run:

```console
	wget http://download.redis.io/redis-stable.tar.gz
	tar xvzf redis-stable.tar.gz
	cd redis-stable
	make
	sudo make install
```

3.  Run the script

```console
	node redis-seeder.js [PATH_TO_REDIS_FILE]
```
