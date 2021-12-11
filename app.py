from flask import Flask,render_template,redirect,request

app=Flask(__name__)

import pj

@app.route('/')
def hello():
    return render_template("index.html")


@app.route('/',methods=['POST'])
def marks():
    if request.method=='POST':
        f=request.files['userfile']
        path="./static/{}".format(f.filename)
        f.save(path)
        
        if 'encrypt' in request.form:
            my_img=pj.encrypt(path)
                
        if 'decrypt' in request.form:
            my_img=pj.decrypt(path)

        from PIL import Image
        img = Image.fromarray(my_img, 'RGB')
        img.save('./static/my.png')
        img='./static/my.png'



    return render_template("index.html",encryption=img)


if __name__=='__main__':
    app.run(debug=True)
