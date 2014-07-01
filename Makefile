
serve:
	
	rm -rf dist tmp
	RUNNING_TEST=false \
	PORT=9000 \
		node submodules/li-core/build/server/server.js
