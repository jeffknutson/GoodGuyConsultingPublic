$year = [int]$args[0]

new-item $year -type directory 
set-location $year

for($i = 1; $i -le 12; $i++)
{
    new-item $i -type directory 
}

set-location ..