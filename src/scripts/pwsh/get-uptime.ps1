$Current_Time = Get-Date

$strOSBootTime=Get-WmiObject win32_operatingSystem

$Script:strOSBootTime=[Management.ManagementDateTimeConverter]::ToDateTime($strOSBootTime.LastBootUpTime)

$Script:UpTime = $Current_Time.subtract($strOSBootTime)

Write-Host "Your System has been up for:"

Write-Host $UpTime.Days + " Days"

Write-Host $UpTime.Hours + " Hours"

Write-Host $UpTime.Minutes + " Minutes"

Write-Host $UpTime.Seconds + " Seconds"

#http://mctexpert.blogspot.com/2009_09_01_archive.html