$uri = "http://api.apixu.com/v1/current.json?key=8ddc97dc38ad434480d221412170703&q=dallas"         
$response = invoke-webrequest -Uri $uri                                                                          
$json = ConvertFrom-Json $response.Content                                                         
$json                                                                                              
$json |Format-List                                                                                          
$json.location| Format-List                                                                                 
$json.current | Format-List                                                                         
