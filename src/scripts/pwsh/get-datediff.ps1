param([string]$startDateTimeString)

$startDate = [datetime]::parse($startDateTimeString)
[datetime]::now - $startDate