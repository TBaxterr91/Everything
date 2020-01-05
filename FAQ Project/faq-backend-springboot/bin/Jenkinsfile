pipeline {
    agent any

    stages {
        stage('Testing FAQS project') {
            steps {
		    echo "Testing a project"
            }
        }
        stage('Building FAQs project') {
            steps {
                    sh 'mvn package -DskipTests'
		    sh 'docker build -t="rakimsv/ratings:latest" .'
            }
        }
        stage('Staging FAQs project') {
            steps {
                   echo "Staging"
            }
        }
        stage('Deploying FAQs project') {
            steps {
		   sh 'docker push "rakimsv/ratings:latest"'
                   echo "Deploy"
            }
        }
        stage('FAQs project deployed') {
            steps {
                    sh 'chmod +x DockerRun.sh'
                    sh "ssh jenkins@104.198.153.5 'bash -s' < ./DockerRun.sh"
                echo "Project Deployed"
            }
        }
        stage('Running FAQS project') {
            steps {
                sh 'docker run "rakimsv/ratings:latest"'
                echo "Project Running"
            }
        }
    }
}
