{ pkgs ? import <nixpkgs> {} }: # ENVIROMENT
pkgs.mkShell = { # DEPENDENCIES
  packages = with pkgs; [ ttfautohint nodejs ];
} # END