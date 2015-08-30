+++
date = "2014-07-16T20:08:20+08:00"
title = "Build your own LNPP Stack"
authors = ["neil"]

+++

Set-up an **nginx**, **php**, **PostgreSQL**, and **phppgadmin** development environment in your Linux machine.

## Linux

**Supported Distributions**
1. Ubuntu (Precise Pangolin)
2. ElementaryOS (Luna)
3. Linux Mint (Cinnamon)

### Update your system
```bash
sudo apt-get update
sudo apt-get upgrade
```

### Installing nginx
```bash
sudo apt-get install nginx
```

### Installing php
```bash
sudo apt-get install php5 php5-common php5-fpm php5-cli php5-mcrypt php5-pgsql
```

**Note**: You might encounter a bug in Ubuntu 14.10 about the icedtea-7-plugin. If you receive such an error, you can use this workaround:

```bash
sudo ln -sv /usr/lib/jvm/java-7-openjdk-amd64 /usr/lib/jvm/java-8-openjdk-amd64
sudo apt-get install -f
```

### Installing postgres
```bash
sudo apt-get install python-software-properties
sudo apt-get install postgresql
sudo apt-get install libpq-dev
```

### Set-up postgres
```bash
sudo -u postgres createuser --superuser $USER
sudo -u postgres psql
```

Once you entered the ```postgresql REPL```, setup the password for the user:
```bash
postgres=# \password [enter your username here] #e.g. neil
```

Once you exit the REPL, create a database for the created user:
```bash
createdb $USER
```

Finally, you can now create a database using this command:
```bash
createdb my_database #change 'my_database'
```

### Installing phppgadmin
```bash
sudo apt-get install phppgadmin
```

**Note**: Version 5.1-1 is dependent on libapache2-mod-php5 and apache2. To install phppgadmin without installing the apache dependencies, you would have to manually download the compressed folder from [sourceforge](phppgadmin.sourceforge.net/doku.php?id=download) and extract to ```/usr/share```.

### Creating a virtual host for phppgadmin
Create ```/etc/nginx/sites-available/app.phppgadmin.dev``` which should look like this:
```bash
server {
  listen 80;

  root /usr/share/phppgadmin; # if you downloaded phppgadmin manually, rename this to the name of the extracted folder

  index index.php;

  #You can change this depending on your wanted url
  #In case you change this one, rename this file also.
  server_name app.phppgadmin.dev;

  access_log  /var/log/app.phppgadmin.dev.access.log;

  error_log   /var/log/app.phppgadmin.dev.error.log;

  location / {
    allow all;
  }

  location ~ \.php$ {
    include phpfpm_params;
    allow all;
  }

  location ~ /\.ht {
    deny all;
  }
}
```

Next, create ```/etc/nginx/phpfpm_params``` which should contain these configurations:
```bash
fastcgi_split_path_info      ^(.+\.php)(.*)$;
fastcgi_pass                 unix:/var/run/php5-fpm.sock;
fastcgi_index                index.php;
fastcgi_param                SCRIPT_FILENAME  $document_root$fastcgi_script_name;
include fastcgi_params;
fastcgi_param                QUERY_STRING $query_string;
fastcgi_param                REQUEST_METHOD $request_method;
fastcgi_param                CONTENT_TYPE $content_type;
fastcgi_param                CONTENT_LENGTH $content_length;
fastcgi_intercept_errors     on;
fastcgi_ignore_client_abort  off;
fastcgi_connect_timeout      60;
fastcgi_send_timeout         180;
fastcgi_read_timeout         180;
fastcgi_buffer_size          128k;
fastcgi_buffers              4  256k;
fastcgi_busy_buffers_size    256k;
fastcgi_temp_file_write_size 256k;
```

Then create a symlink to the ```sites-enabled``` directory to activate the new virtual host.
```bash
sudo ln -s /etc/nginx/sites-available/app.phppgadmin.dev /etc/nginx/sites-enabled/app.phppgadmin.dev
```

Lastly, edit ```/etc/hosts``` and add your newly created virtual host.
```bash
127.0.0.1 localhost
127.0.0.1 app.phppgadmin.dev #this is the added line

# The following lines are desirable for IPv6 capable hosts
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
```

### Further Notes

For more info about creating a virtual host for nginx, see [Digital Ocean's guide](https://www.digitalocean.com/community/tutorials/how-to-install-laravel-with-nginx-on-an-ubuntu-12-04-lts-vps).

We used this [resource](https://xdev.me/article/Install_phpPgAdmin_on_Ubuntu) for the installation and set-up of phppgadmin. We added more modifications as a fix for some encountered errors.
