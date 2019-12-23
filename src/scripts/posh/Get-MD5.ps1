param([string]$fileName)

[Reflection.Assembly]::LoadWithPartialName("System.Security") | out-null
$sha1 = new-Object System.Security.Cryptography.MD5CryptoServiceProvider

$pathLength = (get-location).Path.Length + 1

$file = get-childitem $fileName

$filename = $file.FullName
$filenameDisplay = $filename.Substring($pathLength)
write-host $filenameDisplay

$file = [System.IO.File]::Open($filename, "open", "read")
$sha1.ComputeHash($file) | %{ write-host -NoNewLine $_.ToString("x2") }
$file.Dispose()
write-host