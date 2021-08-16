<?php
$queryTerm = $_REQUEST['q'];
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.twitter.com/1.1/search/tweets.json?q='.urlencode($queryTerm).'&count=12&lang=pt',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer AAAAAAAAAAAAAAAAAAAAACyrSgEAAAAA0Lc4gFl09fzbdARw6FtsGpoKilw%3DTHGA8dWtgI1RgnEdyAMC4J9vdgVhOGhEq83NotWJfmcDoeMd8a',
    'Cookie: guest_id=v1%3A162891414382859092; personalization_id="v1_ka0RE+T+bsXnDOdk7Dzd8w=="'
  ),
));
$response = curl_exec($curl);
if($response === false)
    $response = curl_error($curl);
curl_close($curl);
echo $response;
