# Repair grub from windows terminal (cmd)

1. Open cmd
2. **bcdedit /set {bootmgr} path \EFI\boot\grubx64.efi**
3. Restart pc
4. Boot into linux
5. Exec **sudo grub-mkconfig -o /boot/grub/grub.cfg**
