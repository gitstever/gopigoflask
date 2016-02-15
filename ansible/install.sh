#!/bin/bash
if ! dpkg -l git >/dev/null
then
	sudo apt-get install -y git
fi
if ! python -c "import ansible" >/dev/null 2>&1
then
	sudo pip install ansble
fi
ansible-playbook -i hosts -vv site.yml

