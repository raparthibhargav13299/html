/* Write a program to build a `Pyramid of stars` of given height */
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


/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
