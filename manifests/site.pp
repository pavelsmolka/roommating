Exec { 
  path      => [ "/bin/", "/sbin/" , "/usr/bin/", "/usr/sbin/" ],
  cwd       => '/vagrant/',
  logoutput => true,
}

class apt_packages {

  exec { 'apt-get update': command => '/usr/bin/apt-get update' }

  Package { 
    ensure  => 'installed',
    require => Exec['apt-get update'],
  }

  $db_native_extensions = [
    'libsqlite3-dev', # sqlite
    'libpq-dev', #postgres
    'mysql-client', 'libmysqlclient-dev', #mysql
  ]

  package { 'git' : } 
  package { 'build-essential' : }
  package { $db_native_extensions : }

}

class rails_app {
  package { 'bundler':
    ensure   => 'installed',
    provider => 'gem',
  }
  ->
  exec { 'bundle install': }
  ->
  exec {'rails s &': }
}

include apt_packages
include rails_app
