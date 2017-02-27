!#bin/perl

my $s_startdate = $argv[0];
my $s_enddate   = $argv[1];
open(jsonfile.txt,"+<");

  while(<>){
      $_=~s/Search.StartDate\\\"\:\s*\\\".*?\"\,\\\"Search.EndDate.*/Search.StartDate\\\"\:\s*\\\"$s_startdate\"\,\\\"Search.EndDate.*/ if($_=~/Search.StartDate/);
      $_=~s/Search.EndDate\\\"\:\\\".*?\\\"\}.*/Search.EndDate\\\"\:\\\"$s_enddate\\\"\}.*/ if($_=~/$Search.EndDate/);
      
  }
