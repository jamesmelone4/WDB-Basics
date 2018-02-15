// for(i = 0; i < 10; i++) {
//   console.log("Echo!");
//   if(i < 3) {
//     console.log("Tater Tots!");
//   }
// }


function echo(str, num) {
  for(var i = 0; i < num; i++) {
    console.log(str);
  }
}

echo("Echo!!!", 10)
echo("Tater Tots!!!", 3)