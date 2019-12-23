new-item $args[0] -type directory
cd $args[0]
for($i=1; $i -lt 13; $i += 1)
{
            $dirName = '{0:d2}' -f $i 
            new-item $dirName -type directory           
}
