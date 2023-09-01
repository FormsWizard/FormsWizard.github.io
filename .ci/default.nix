{ pkgs }:

let
in pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_latest
  ];
  shellHook = ''
    set -e

    echo 'Install node dependencies…'
    npm i

    echo 'Build astro app'
    npm run build
    cp -r ./src/ ./dist/

    touch ./dist/.nojekyll

    exit
  '';
}
