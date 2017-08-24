# script to combine disparate data types in the same result set by wrapping them in a custom object
$result = @{}
$result.Processes = Get-Process
$result.Services = Get-Service
$result