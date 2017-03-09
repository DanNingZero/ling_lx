var pick = function(type) {
    return new Promise((resolve,reject)=>{
        var f = document.createElement('input')
        f.type = 'file';
        f.accept = type||"*"
        f.click();
        f.addEventListener('change', function(e) {
            var file = e.target.files.item(0)
            //console.log(window.URL.createObjectURL(file))
            resolve(file)
        })
    })
}

module.exports = pick