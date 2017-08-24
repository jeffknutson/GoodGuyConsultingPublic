

try {
 $x = 1/2   
 $x
}
catch {
    "An error occured" 
}
finally {
  "this is from finally"
  "finally is a good place to cleanup; e.g. open connections, i/o ports, etc"
}