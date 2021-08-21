function Get-Data() {
  $headers = @{}
  $headers.Add("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
  $headers.Add("X-Requested-With", "XMLHttpRequest")
  $headers.Add("Cookie", "has_js=1")
  $response = Invoke-RestMethod -Uri 'https://www.health.govt.nz/views/ajax' -Method POST -Headers $headers -ContentType 'application/x-www-form-urlencoded; charset=UTF-8' -Body 'title=&field_address_value=&view_name=locations_of_interest&view_display_id=block&view_args=&view_path=node%252F11392&view_base_path=locations-of-interest%252Fexport&view_dom_id=466c32f2724ef21ee171ee0ef30f77d7&pager_element=0&ajax_html_ids%255B%255D=fit-vids-style&ajax_html_ids%255B%255D=skip-link&ajax_html_ids%255B%255D=skipper&ajax_html_ids%255B%255D=page&ajax_html_ids%255B%255D=navbar&ajax_html_ids%255B%255D=block-apachesolr-panels-search-form&ajax_html_ids%255B%255D=apachesolr-panels-search-block&ajax_html_ids%255B%255D=edit-apachesolr-panels-search-form&ajax_html_ids%255B%255D=edit-actions&ajax_html_ids%255B%255D=edit-submit&ajax_html_ids%255B%255D=megamenu&ajax_html_ids%255B%255D=main-menu&ajax_html_ids%255B%255D=megamenu-dropdown-780&ajax_html_ids%255B%255D=megamenu-dropdown-6076&ajax_html_ids%255B%255D=megamenu-dropdown-776&ajax_html_ids%255B%255D=megamenu-dropdown-778&ajax_html_ids%255B%255D=block-views-announcements-whole-site&ajax_html_ids%255B%255D=announcement-69335&ajax_html_ids%255B%255D=page-header&ajax_html_ids%255B%255D=main-content&ajax_html_ids%255B%255D=block-system-main&ajax_html_ids%255B%255D=skip-content&ajax_html_ids%255B%255D=node-11392&ajax_html_ids%255B%255D=views-exposed-form-locations-of-interest-block&ajax_html_ids%255B%255D=edit-title-wrapper&ajax_html_ids%255B%255D=edit-title&ajax_html_ids%255B%255D=edit-field-address-value-wrapper&ajax_html_ids%255B%255D=edit-field-address-value&ajax_html_ids%255B%255D=edit-submit-locations-of-interest&ajax_html_ids%255B%255D=edit-reset&ajax_html_ids%255B%255D=content-footer-wrapper&ajax_html_ids%255B%255D=content-footer&ajax_html_ids%255B%255D=block-moh-tools-page-tools&ajax_page_state%255Btheme%255D=mohpub_bootstrap&ajax_page_state%255Btheme_token%255D=YhQ8KaqR-NXr-sMzz_KfnAWmP425SpxahSHSxsRlDwM&ajax_page_state%255Bcss%255D%255Bmodules%252Fsystem%252Fsystem.base.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fcalendar%252Fcss%252Fcalendar_multiday.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fckeditor_accordion%252Fcss%252Fckeditor-accordion.css%255D=1&ajax_page_state%255Bcss%255D%255Bmodules%252Ffield%252Ftheme%252Ffield.css%255D=1&ajax_page_state%255Bcss%255D%255Bmodules%252Fnode%252Fnode.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fextlink%252Fextlink.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fviews%252Fcss%252Fviews.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fckeditor%252Fcss%252Fckeditor.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fctools%252Fcss%252Fctools.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fpanels%252Fcss%252Fpanels.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Flibraries%252Fc3%252Fc3.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Flibraries%252Fd3.c3%252Fd3-c3.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Ffontawesome%252Fcss%252Ffontawesome.min.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Ffontawesome%252Fcss%252Fsolid.min.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Ffontawesome%252Fcss%252Fbrands.min.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fmodules%252Ffeatures%252Fsite_profile%252Fcss%252Ffix-rubik-multiselect-height.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fcss%252Fstyle.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fcss%252Fresponsive-tables.css%255D=1&ajax_page_state%255Bcss%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fcss%252Fprint.css%255D=1&ajax_page_state%255Bjs%255D%255B0%255D=1&ajax_page_state%255Bjs%255D%255B1%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcustom%252Ftable_d3chart%252Fjs%252Ftable_d3chart.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcustom%252Fmoh_d3%252Fmoh_d3.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fjquery_update%252Freplace%252Fjquery%252F1.7%252Fjquery.min.js%255D=1&ajax_page_state%255Bjs%255D%255Bmisc%252Fjquery-extend-3.4.0.js%255D=1&ajax_page_state%255Bjs%255D%255Bmisc%252Fjquery-html-prefilter-3.5.0-backport.js%255D=1&ajax_page_state%255Bjs%255D%255Bmisc%252Fjquery.once.js%255D=1&ajax_page_state%255Bjs%255D%255Bmisc%252Fdrupal.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fjquery_update%252Freplace%252Fui%252Fexternal%252Fjquery.cookie.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fjquery_update%252Freplace%252Fmisc%252Fjquery.form.min.js%255D=1&ajax_page_state%255Bjs%255D%255Bmisc%252Fajax.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fjquery_update%252Fjs%252Fjquery_update.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fckeditor_accordion%252Fjs%252Fckeditor-accordion.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fextlink%252Fextlink.js%255D=1&ajax_page_state%255Bjs%255D%255Bmodules%252Ffield%252Fmodules%252Ftext%252Ftext.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fviews%252Fjs%252Fbase.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fbootstrap%252Fjs%252Fmisc%252F_progress.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Ffield_group%252Ffield_group.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fviews%252Fjs%252Fajax_view.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fgoogle_analytics%252Fgoogleanalytics.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Flibraries%252Fc3%252Fc3.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Flibraries%252Fd3%252Fd3.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fmodules%252Fcontrib%252Fd3%252Fjs%252Fd3.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Flibraries%252Fd3.helpers%252Fd3.helpers.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Flibraries%252Fd3.c3%252Fd3-c3.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fassets%252Fios-fix.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Faffix.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Falert.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fbutton.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fcarousel.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fcollapse.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fdropdown.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fmodal.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Ftooltip.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fpopover.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Fscrollspy.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Ftab.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fbootstrap%252Fjs%252Ftransition.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fjquery.cookie.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fjquery.moh.announcement.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fsvgeezy.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Ffitvids.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fbootstrap-tabcollapse.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fjquery.scrollTo.min.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fscript.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fjquery.google_analytics.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fbootstrap-accessibility.min.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fmohpub_bootstrap%252Fjs%252Fstyle-switcher.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fbootstrap%252Fjs%252Fmodules%252Fviews%252Fjs%252Fajax_view.js%255D=1&ajax_page_state%255Bjs%255D%255Bsites%252Fall%252Fthemes%252Fbootstrap%252Fjs%252Fmisc%252Fajax.js%255D=1&ajax_page_state%255Bjquery_version%255D=1.7'

  $result = $response | Where-Object { $_.command -eq "insert" -and $_.method -eq "replaceWith" -and $_.selector.StartsWith(".view-dom-id-") }

  $result.data > ./.tmp/locations-of-interest.xml
  return $result.data;
}

function Sanitize {
  param ([string]$text)
  if ($text) {
    return $text.Trim();
  }
  else {
    return "NO DATA";
  }
}

function Get-Month {
  param ([string] $monthAsString)
  switch ($monthAsString) {
    "Aug" { return 8; }
    "August" { return 8; }
    Default {}
  }
}

function Set-Dates {
  param ([PSCustomObject]$loi)
  if (!$loi) { return; }

  if ($loi.UpdatedAsString) {
    [string[]] $tokens = -split $loi.UpdatedAsString;
    [int] $month = Get-Month $tokens[1];
    $loi.Updated = [DateTime]::new(2021, $month, $tokens[0]);
  }

  if ($loi.DayAsString) {
    [string[]] $tokens = -split $loi.DayAsString;
    [int] $month = Get-Month $tokens[2];
    $loi.Day = [DateTime]::new(2021, $month, $tokens[1]);
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
    LocationName    = $entityAsArray[0];
    Address         = $entityAsArray[1];
    DayAsString     = $entityAsArray[2];
    Times           = $entityAsArray[3];
    WhatToDo        = $entityAsArray[4];
    UpdatedAsString = $entityAsArray[5];
    Updated         = $null;
    Day             = $null;
  };

  Set-Dates $loi

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

[xml] $data = Get-Data
Import-Xml $data | ConvertTo-Json > ./.tmp/locations-of-interest.json
