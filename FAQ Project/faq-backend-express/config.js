
module.exports = {
    'currentProfile': 'development',
    'development': {
        'config_id': 'development',
        'app_name': 'my app',
        'app_desc': 'my app desc',
        'node_port': 3000,
        'json_indentation': 4,
        'database': {
            'name': 'groupproject',
            'host': 'localhost',
            'user': 'root',
            'password':'root'
        }
    },
    'testing': {
        'config_id': 'development',
        'app_name': 'my app',
        'app_desc': 'my app desc',
        'node_port': 3000,
        'json_indentation': 4,
        'database': {
            'name': 'groupproject',
            'host': 'localhost',
            'user': 'root'
        }
    },
    'staging': {
        'config_id': 'development',
        'app_name': 'my app',
        'app_desc': 'my app desc',
        'node_port': 3000,
        'json_indentation': 4,
        'database': {
            'name': 'nationwide',
            'host': 'localhost',
            'user': 'root'
        }
    },
    'production': {
        'config_id': 'development',
        'app_name': 'my app',
        'app_desc': 'my app desc',
        'node_port': 3000,
        'json_indentation': 4,
        'database': {
            'name': 'nationwide',
            'host': 'localhost',
            'user': 'root'
        }
    }
}