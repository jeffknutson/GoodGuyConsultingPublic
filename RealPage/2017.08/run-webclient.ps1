# this script shows how to download a file using the .NET System.Net.WebClient

try
{
   $wc = new-object System.Net.WebClient
   $url = "https://raw.githubusercontent.com/jeffknutson/GoodGuyConsultingPublic/master/RealPage/2017.08/Notes.txt"
   $wc.DownloadFile($url, "$home\my.downloaded.notes.txt")
}
catch
{
    $_ # dump error message to output
}