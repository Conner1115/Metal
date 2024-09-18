{ pkgs }: {
  deps = [
    pkgs.nodejs
    pkgs.yarn
  ];

  env = {
    NODE_OPTIONS = "--openssl-legacy-provider";
  };
}