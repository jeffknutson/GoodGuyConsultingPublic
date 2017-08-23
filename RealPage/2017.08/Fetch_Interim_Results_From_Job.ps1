<#
.SYNOPSIS – Fetches interim results from a Job

.PARAMETER EventLogName - the name of the EventLog to read; valid values are "Application", "System"

#>
# to add documentation do a help about_Comment_Based_Help
param(
  # do a help about_Functions_Advanced_Parameters to learn more about these params
  [Parameter(Mandatory=$true, HelpMessage="TODO TODO make this work")]
  [ValidateSet('Application', 'System')]
  [Alias('Name')]
  [string]$EventLogName,

  [ValidateRange(1,20)]
  [int]$Count = 13,

  [string]$Message
)


$j = Start-Job -ScriptBlock { 
    $c = 0; 
    Do { 
        Start-Sleep -Seconds 3; 
        Get-EventLog $args[0] -Newest $args[1]; 
        $c = $c + 1; 
    } While($c -lt 3)
} -ArgumentList $EventLogName, $Count

[array] $results = @()
[int] $count = 0
$StartTime = Get-Date
[int] $sleep_ms = 500

DO
{
    Start-Sleep -Milliseconds $sleep_ms
    if ($j.HasMoreData -eq $true)
    {
        $c = $results.Length
        $CurrTime = Get-Date
        $Duration = [int]($CurrTime - $StartTime).TotalMilliseconds
        Write-Output "Interim results @ $duration ms;  Results length: $c"
        $results += (Receive-Job $j.Id)
        $count++
    }
}
While ($j.State -ne "completed")

$c = $results.Length
$CurrTime = Get-Date
$Duration = [int]($CurrTime - $StartTime).TotalMilliseconds
Write-Output "$Message -- Final results @ $Duration; Results length: $c";