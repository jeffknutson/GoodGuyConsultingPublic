param([int]$max)

for($i = 0; $i -lt $max; $i++){[guid]::newguid().tostring("N")}