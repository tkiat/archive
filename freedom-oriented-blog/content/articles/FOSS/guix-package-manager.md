Title: Guix Package Manager
Date: 2021-01-14
Modified: 2021-01-14
Tags: FOSS
Slug: guix-package-manager
Authors: Theerawat Kiatdarakun

Guix is an awesome functional package manager that can be installed in a foreign Linux distro. When the package manager builds some things it chroot to a certain directory whose name is based on the hash value of all predefined inputs in that build process. It puts those input packages and related data to that folder and begins to build it. chroot makes sure that the build process won't affect the current software installed in the system. Guix actually reuses many of nix ideas, nix is the pioneer in this functional thingy.

### Advantages over Traditional Package Manager
- **Build Process without Side Effects**. A build process of a typical Linux distribution has access to all software in the system whereas the build process of Guix has none, hence no side effects.
- **Enable Reproducible Build**. Functional package manager enables reproducible build, while a build process of a typical Linux distro might be affected by global system environment variables.
- **Atomic Transaction**. In current typical Linux distros, the installation or the removal of a package is prone to interruption which can leave the system in a bad state. Functional package manager enables independent build from the system therefore the installation process is atomic. Because of this, you can also revert to previous states.
- **Libre Guaranteed**. It is made by GNU so you can be sure that everything is libre. You can add non-libre packages as well but I don't recommend it since it clashes with the GNU ideology.
- **Shareable Across Distributions**. Guix uses its own dependencies so when you so it should work in multiple distributions. Not only that, I could share it across multi-boot Linux distros in a disk by defining in /etc/fstab a shared /gnu/store as an independent partition from any OS.

### Disadvantages over Traditional Package Manager
- **Require More Storage Space**. Packages from a non-functional package manager, except ones with vendoring, share dependencies across the system so it requires less space.

### Other Differences to Traditional Package Manager
- Guix does not rely on Linux FHS. Who needs FHS?
