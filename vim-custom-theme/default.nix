{}:

let
  sources = import ./nix/sources.nix;
  pkgs = import sources.nixpkgs { };

  shell = pkgs.mkShell
    {
      buildInputs = [
        pkgs.nodejs-16_x
      ];
      shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
      '';
    };
in
{
  inherit shell;
}
