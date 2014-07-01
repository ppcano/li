
app:
	
	rm -rf dist tmp
	RUNNING_TESTS=false \
	RUNNING_VIEWS=false \
	PORT=9000 \
		node submodules/li-core/build/server/server.js

views:
	
	rm -rf dist tmp
	RUNNING_TESTS=false \
	RUNNING_VIEWS=true \
	PORT=9000 \
		node submodules/li-core/build/server/server.js

tests:
	
	rm -rf dist tmp
	RUNNING_TESTS=true \
	RUNNING_VIEWS=false \
	PORT=9000 \
		node submodules/li-core/build/server/server.js

.PHONY: app views tests
