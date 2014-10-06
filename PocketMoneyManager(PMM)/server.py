from flask import Flask, render_template, abort, request
import os

app = Flask(__name__, static_url_path='/'+os.getcwd())
app.debug = True

@app.route('/style/pages/signin')
def signin_css():
	return app.send_static_file('style/pages/signin.css')
	
@app.route('/style/pages/forms')
def forms_css():
	return app.send_static_file('style/pages/forms.css')

@app.route('/script/html_loader')
def script_htmlloader():
	return app.send_static_file('script/html-loader.js')
	
@app.route('/html/signin_form')
def html_signin_form():
	return app.send_static_file('signin_form.html')

@app.route('/SignIn', methods=['GET'])
def signin_page():
	return render_template('index.html', content=None)
	
if __name__ == '__main__':
	app.run('127.0.0.1')
