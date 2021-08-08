var buildPyramid = (n) => 
{
     var n;
     let temp = ''; let y=''; let res=''
    for (j = 0; j < n; j++) {
        for(k=n-j; k>1 ; k--){
            y = y+' ';     
        }
        temp = temp + ' *';
        res= res+(y+temp)+'  \n';
        y='';  
    }
   
    return res;
}
buildPyramid(5);
module.exports = buildPyramid;