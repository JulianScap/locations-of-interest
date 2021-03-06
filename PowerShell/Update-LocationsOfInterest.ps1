[string] $jsonFile = "$PSScriptRoot\..\json\locations-of-interest.json";
[string] $tmpFolder = '.tmp';

function Get-Data() {
  $headers = @{}
  $headers.Add("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
  $headers.Add("X-Requested-With", "XMLHttpRequest")
  $headers.Add("Cookie", "has_js=1")
  $response = Invoke-RestMethod -Uri 'https://www.health.govt.nz/views/ajax' -Method POST -Headers $headers -ContentType 'application/x-www-form-urlencoded; charset=UTF-8' -Body 'title=&field_address_value=&view_name=locations_of_interest&view_display_id=block&view_args=&view_path=node%252F11392&view_base_path=locations-of-interest%252Fexport&view_dom_id=466c32f2724ef21ee171ee0ef30f77d7&pager_element=0&ajax_html_ids%255B%255D=fit-vids-style&ajax_html_ids%255B%255D=skip-link&ajax_html_ids%255B%255D=skipper&ajax_html_ids%255B%255D=page&ajax_html_ids%255B%255D=navbar&ajax_html_ids%255B%255D=block-apachesolr-panels-search-form&ajax_html_ids%255B%255D=apachesolr-panels-search-block&ajax_html_ids%255B%255D=edit-apachesolr-panels-search-form&ajax_html_ids%255B%255D=edit-actions&ajax_html_ids%255B%255D=edit-submit&ajax_html_ids%255B%255D=megamenu&ajax_html_ids%255B%255D=main-menu&ajax_html_ids%255B%255D=megamenu-dropdown-780&ajax_html_ids%255B%255D=megamenu-dropdown-6076&ajax_html_ids%255B%255D=megamenu-dropdown-776&ajax_html_ids%255B%255D=megamenu-dropdown-778&ajax_html_ids%255B%255D=block-views-announcements-whole-site&ajax_html_ids%255B%255D=announcement-69335&ajax_html_ids%255B%255D=page-header&ajax_html_ids%255B%255D=main-content&ajax_html_ids%255B%255D=block-system-main&ajax_html_ids%255B%255D=skip-content&ajax_html_ids%255B%255D=node-11392&ajax_html_ids%255B%255D=views-exposed-form-locations-of-interest-block&ajax_html_ids%255B%255D=edit-title-wrapper&ajax_html_ids%255B%255D=edit-title&ajax_html_ids%255B%255D=edit-field-address-value-wrapper&ajax_html_ids%255B%255D=edit-field-address-value&ajax_html_ids%255B%255D=edit-submit-locations-of-interest&ajax_html_ids%255B%255D=edit-reset&ajax_html_ids%255B%255D=content-footer-wrapper&ajax_html_ids%255B%255D=content-footer&ajax_html_ids%255B%255D=block-moh-tools-page-tools&ajax_page_state%255Btheme%255D=mohpub_bootstrap&ajax_page_state%255Btheme_token%255D=YhQ8KaqR-NXr-sMzz_KfnAWmP425SpxahSHSxsRlDwM&ajax_page_state%255Bcss%255D%255Bmodules%252Fsystem%252Fsystem.base.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fcalendar%252Fcss%252Fcalendar_multiday.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fckeditor_accordion%252Fcss%252Fckeditor-accordion.css%255D=1&ajax_page_state%255Bcss%255D%255Bmodules%252Ffield%252Ftheme%252Ffield.css%255D=1&ajax_page_state%255Bcss%255D%255Bmodules%252Fnode%252Fnode.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fextlink%252Fextlink.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fviews%252Fcss%252Fviews.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fckeditor%252Fcss%252Fckeditor.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fctools%252Fcss%252Fctools.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fpanels%252Fcss%252Fpanels.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Flibraries%252Fc3%252Fc3.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Flibraries%252Fd3.c3%252Fd3-c3.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Ffontawesome%252Fcss%252Ffontawesome.min.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Ffontawesome%252Fcss%252Fsolid.min.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Ffontawesome%252Fcss%252Fbrands.min.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Ffeatures%252Fsite_profile%252Fcss%252Ffix-rubik-multiselect-height.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fcss%252Fstyle.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fcss%252Fresponsive-tables.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fcss%252Fprint.css%255D=1&ajax_page_state%255Bjs%255D%255B0%255D=1&ajax_page_state%255Bjs%255D%255B1%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcustom%252Ftable_d3chart%252Fjs%252Ftable_d3chart.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcustom%252Fmoh_d3%252Fmoh_d3.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fjquery_update%252Freplace%252Fjquery%252F1.7%252Fjquery.min.js%255D=1&ajax_page_state%255Bjs%255D%255Bmisc%252Fjquery-extend-3.4.0.js%255D=1&ajax_page_state%255Bjs%255D%255Bmisc%252Fjquery-html-prefilter-3.5.0-backport.js%255D=1&ajax_page_state%255Bjs%255D%255Bmisc%252Fjquery.once.js%255D=1&ajax_page_state%255Bjs%255D%255Bmisc%252Fdrupal.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fjquery_update%252Freplace%252Fui%252Fexternal%252Fjquery.cookie.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fjquery_update%252Freplace%252Fmisc%252Fjquery.form.min.js%255D=1&ajax_page_state%255Bjs%255D%255Bmisc%252Fajax.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fjquery_update%252Fjs%252Fjquery_update.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fckeditor_accordion%252Fjs%252Fckeditor-accordion.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fextlink%252Fextlink.js%255D=1&ajax_page_state%255Bjs%255D%255Bmodules%252Ffield%252Fmodules%252Ftext%252Ftext.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fviews%252Fjs%252Fbase.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fbootstrap%252Fjs%252Fmisc%252F_progress.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Ffield_group%252Ffield_group.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fviews%252Fjs%252Fajax_view.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fgoogle_analytics%252Fgoogleanalytics.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Flibraries%252Fc3%252Fc3.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Flibraries%252Fd3%252Fd3.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fd3%252Fjs%252Fd3.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Flibraries%252Fd3.helpers%252Fd3.helpers.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Flibraries%252Fd3.c3%252Fd3-c3.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fassets%252Fios-fix.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Faffix.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Falert.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fbutton.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fcarousel.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fcollapse.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fdropdown.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fmodal.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Ftooltip.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fpopover.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fscrollspy.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Ftab.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Ftransition.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fjquery.cookie.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fjquery.moh.announcement.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fsvgeezy.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Ffitvids.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fbootstrap-tabcollapse.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fjquery.scrollTo.min.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fscript.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fjquery.google_analytics.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fbootstrap-accessibility.min.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fstyle-switcher.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fbootstrap%252Fjs%252Fmodules%252Fviews%252Fjs%252Fajax_view.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fbootstrap%252Fjs%252Fmisc%252Fajax.js%255D=1&ajax_page_state%255Bjquery_version%255D=1.7'

  $result = $response | Where-Object { $_.command -eq "insert" -and $_.method -eq "replaceWith" -and $_.selector.StartsWith(".view-dom-id-") }

  $result.data = $result.data.Replace('<?xml version="1.0"?>', '');
  $result.data > "./$tmpFolder/locations-of-interest.xml"
  return "<div>$($result.data)</div>";
}

function Sanitize {
  param ([string]$text)
  if ($text) {
    $text = ($text.Split(",", [System.StringSplitOptions]::RemoveEmptyEntries) | Where-Object { $_.Trim() }) -join ","
    $text = ($text.Split(" ", [System.StringSplitOptions]::RemoveEmptyEntries) | Where-Object { $_.Trim() }) -join " "
    return $text.Trim();
  }
  else {
    return "";
  }
}

function Get-Month {
  param ([string] $monthAsString)
  switch ($monthAsString) {
    "Aug" { return 8; }
    "August" { return 8; }
    "Sep" { return 9; }
    "Sept" { return 9; }
    "September" { return 9; }
    Default {}
  }
}

function GetHoursMinutes {
  param ([string] $times)

  [string] $regex = '^(?<hours>\d+):(?<minutes>\d+) ?(?<pm>[aApP][mM])';
  [System.Text.RegularExpressions.Match] $match = [regex]::Match($times, $regex)

  if (!$match.Success) { return 12, 0; }

  [bool] $pm = $match.Groups["pm"].Value -ieq "pm"
  [int] $h = $match.Groups["hours"].Value
  if ($pm -and $h -ne 12) {
    $h += 12;
  }
  [int] $m = + $match.Groups["minutes"].Value

  return $h, $m;
}

function Set-Dates {
  param ([PSCustomObject]$loi)
  if (!$loi) { return; }

  if ($loi.updatedAsString) {
    [string[]] $tokens = -split $loi.updatedAsString;
    [int] $month = Get-Month $tokens[1];
    [int] $hours, $minutes = GetHoursMinutes ($tokens[2..3] -join ' ');
    $loi.updated = [DateTime]::new(2021, $month, $tokens[0], $hours, $minutes, 0).ToString("yyyy-MM-ddTHH:mm:ssZ");
  }

  if ($loi.dayAsString) {
    [string[]] $tokens = -split $loi.dayAsString;
    [int] $month = Get-Month $tokens[2];
    [int] $hours, $minutes = GetHoursMinutes $loi.times;

    $loi.day = [DateTime]::new(2021, $month, $tokens[1], $hours, $minutes, 0).ToString("yyyy-MM-ddTHH:mm:ssZ");
  }
}

function Get-CityPostCode {
  param([string] $cityPostCode)
  if (!$cityPostCode -or $cityPostCode.Length -lt 5) {
    if ($cityPostCode -match "^\d+$") {
      return $null, $cityPostCode;
    }
    return $null, $null;
  }

  [string] $postCode = $cityPostCode.Substring($cityPostCode.Length - 4);
  [string] $city = $cityPostCode.Substring(0, $cityPostCode.Length - 5);

  if ($postCode -match "^\d+$") {
    return $city, $postCode;
  }
  else {
    return $cityPostCode, $null;
  }
}

function Convert-Address {
  param([PSCustomObject]$loi)
  if (!$loi.address) { return; }
  [string[]] $parts = $loi.address -split ",";

  $parts = $parts.Trim();

  if ($parts.count -eq 1) {
    $loi.city = $parts[0];
  }
  elseif ($parts.count -eq 2) {
    $loi.streetAddress = $parts[0];
    [string[]] $cityPostCode = Get-CityPostCode $parts[1]
    $loi.city = $cityPostCode[0];
    $loi.postCode = $cityPostCode[1];
  }
  elseif ($parts.count -eq 3) {
    $loi.streetAddress = $parts[0];
    $loi.suburb = $parts[1];
    [string[]] $cityPostCode = Get-CityPostCode $parts[2]
    $loi.city = $cityPostCode[0];
    $loi.postCode = $cityPostCode[1];
  }
  elseif ($parts.count -gt 3) {
    $loi.streetAddress = $parts[0..($parts.count - 3)] -join ', '
    $loi.suburb = $parts[$parts.count - 2];
    [string[]] $cityPostCode = Get-CityPostCode $parts[$parts.count - 1]
    $loi.city = $cityPostCode[0];
    $loi.postCode = $cityPostCode[1];
  }

  if (!$loi.city -and $loi.suburb) {
    $loi.city = $loi.suburb;
  }
  if ($loi.city -and !$loi.suburb) {
    $loi.suburb = $loi.city;
  }

  if ($loi.suburb -in "Auckland CBD", "Auckland Central") {
    $loi.suburb = "Auckland";
  }
}

function Convert-ToLocationOfInterest {
  param ([System.Xml.XmlNode] $node)
  $entityAsArray = [System.Collections.ArrayList]::new();
  $node.td.InnerText | ForEach-Object {
    $text = Sanitize $_;
    $entityAsArray.Add($text) | Out-Null
  }

  [PSCustomObject] $loi = [PSCustomObject]@{
    locationName    = $entityAsArray[0];
    address         = $entityAsArray[1];
    dayAsString     = $entityAsArray[2];
    times           = $entityAsArray[3];
    whatToDo        = $entityAsArray[4];
    updatedAsString = $entityAsArray[5];
    updated         = $null;
    day             = $null;
    streetAddress   = $null;
    suburb          = $null;
    city            = $null;
    postCode        = $null;
  };

  Set-Dates $loi
  Convert-Address $loi

  return $loi;
}

function Import-Xml {
  param([xml]$xml)
  [System.Xml.XmlNodeList] $tdList = $data.SelectNodes("//tbody/tr")

  $locationsOfInterests = [System.Collections.ArrayList]::new();

  $tdList | ForEach-Object {
    $item = $_;
    $locationOfInterest = Convert-ToLocationOfInterest $item
    $locationsOfInterests.Add($locationOfInterest) | Out-Null
  }

  return $locationsOfInterests;
}

if (!(Test-Path $tmpFolder)) {
  mkdir $tmpFolder | Out-Null
}

[xml] $data = Get-Data
Import-Xml $data | ConvertTo-Json | Out-File -Encoding utf8 $jsonFile
