run:
	firefox "127.0.0.1:5000/" &
	export FLASK_APP=server.py; flask run
