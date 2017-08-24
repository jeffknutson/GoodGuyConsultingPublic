<#
.SYNOPSIS

Retrieves a list of installed hotfixes from the local computer.

.DESCRIPTION

TODO put description text here.

#>
param(
    [int]$Year = (get-date).year,
    [bool]$LongView = $true,
    [Parameter(Mandatory=$true)]
    [string]$Stuff  #for our example script, $Stuff does not really do anything; it is here to show how to do Mandatory params
)

$hotfixes = get-hotfix 

$filteredHotfixes = $hotfixes | where-object { ([datetime]$_.InstalledOn).year -eq $year} 

if($LongView -eq $true) { 
    $filteredHotfixes 
}
else {
    $filteredHotfixes |  select-object InstalledOn, HotFixID 
}
