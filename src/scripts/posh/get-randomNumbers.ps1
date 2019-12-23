$min = $args[0]
$max = $args[1]
$count = $args[2]
$rand = new-object random
for ($i=1; $i -le $count; $i++) { write-host ($rand.next($min * 100, $max * 100) * .01) }