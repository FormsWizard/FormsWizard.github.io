{
  description = "Build https://formswizard.github.io/";
  inputs.nixpkgs.url = "nixpkgs/nixos-unstable";
  outputs = { self, nixpkgs }:
    let
      lastModifiedDate = self.lastModifiedDate or self.lastModified or "19700101";
      version = builtins.substring 0 8 lastModifiedDate;
      supportedSystems = [ "x86_64-linux" "x86_64-darwin" "aarch64-linux" "aarch64-darwin" ];
      forAllSystems = nixpkgs.lib.genAttrs supportedSystems;
      nixpkgsFor = forAllSystems (system: import nixpkgs { inherit system; overlays = [ self.overlay ]; });
    in
    {
      overlay = final: prev: {

        formswizardwebsite = with final; buildNpmPackage rec {
          pname = "formswizardwebsite";
          version = "0.0.1";
          src = ./.;        
          npmDepsHash = "sha256-YbDmODi6WgRGlUPGjeG5jyj3HitogoO/dZKgZaYKBzc=";  #lib.fakeHash;
          #dontNpmBuild = true;
          installPhase = ''
            cp -r ./dist $out
            cp -r ./src $out  ## TODO images+styles
            touch $out/.nojekyll
          '';
          meta = with lib; {
            description = "A modern web UI for various torrent clients with a Node.js backend and React frontend";
            homepage = "https://flood.js.org";
            license = licenses.gpl3Only;
            maintainers = with maintainers; [ j03 ];
          };
        };

      };

      packages = forAllSystems (system: {
        inherit (nixpkgsFor.${system}) formswizardwebsite;
      });
      defaultPackage = forAllSystems (system: self.packages.${system}.formswizardwebsite);
    };
}
