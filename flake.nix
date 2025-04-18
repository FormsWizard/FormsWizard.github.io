{
  description = "Build https://formswizard.github.io/";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
  };

  outputs = { self, nixpkgs, ... }:
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs {inherit system;};
    inherit (pkgs) lib;
  in rec {
    packages.${system} = rec {
      ci = import ./.ci { inherit pkgs; };
      default = ci;
    };
  };
}
