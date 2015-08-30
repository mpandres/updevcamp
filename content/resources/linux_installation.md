+++
date = "2015-02-08T16:20:02+08:00"
title = "Linux Installation Guide"
authors = ["mireya"]

+++

This is a step-by-step guide for installing Linux on your machine via dual boot.

## Create the Installation Disk

### Download Your Preferred Linux Distro

Download the ISO file from the webpage of your preferred Linux distribution. Take note of the system requirements, and download the one appropriate for your machine.

Here are the download sites for some of the distributions:
* [Ubuntu](http://www.ubuntu.com/download)
* [Linux Mint](http://www.linuxmint.com/download.php)
* [elementary OS](http://elementaryos.org)

If you are installing alongside Windows 8, you would need the 64-bit version in order to install correctly in EFI mode.

### Transfer the ISO file to Your Installation Media

You can either burn the ISO file on a blank CD or create a bootable USB on a spare USB with enough memory (~2GB). Ubuntu comes with its own application for creating the installation disk called Startup Disk Creator.

## Install a Boot Manager (for Mac OS)

For Mac OS users, rEFind is a boot manager that allows you to choose which operating system to start your machine with. You can download rEFind [here](http://sourceforge.net/projects/refind/).

After downloading, open a Terminal window and go to the directory where you downloaded rEFind. Run the following command.

```bash
sudo ./install.sh
```
This will install the rEFind boot manager on your Mac OS.

Note: Windows users need not download a new boot manager.

## Partitioning

We need to allocate some space to make room for your Linux system. We will need two partitions: one for the root (this contains the kernel, boot files, system files, etc.), and one for the swap area (the memory used for hibernation and also when the RAM is full). 

For the root, allocate at least 20 GB.

For the swap area, allocate around twice the size of your RAM.

Important Note: Be careful which paritions you are shrinking. Make sure that you select the partition of your hard drive or a partition with lots of space. DO NOT touch the boot manager or any of the important partitions. Remember to backup your files in case something goes wrong.

### Mac OS

In Mac OS, you can partition using Disk Utility.

* Select the Partition tab on top. The Volume Scheme (left rectangle) shows the partitions in your machine. The ones shaded in blue represents the space already taken up by your machine, while the ones in white are the free space you can use.
* You can add a partition by clicking the plus sign below the Volume Scheme. This will add another partition (another box) in the Volume Scheme. Click this new box and change the name, format, and size of the partition.
* Once you've created the necessary partitions, click the Apply buttom on the bottom right and then select Partition.

For a more detailed guide on how to parition on a Mac, click [here](http://www.geek.com/apple/how-to-partition-a-mac-hard-drive-1482555/).

### Windows

In Windows, you can use Disk Management from the Computer Management utility.

* You should see a list of paritions (volumes) available in your machine. Right-click the volume you want to shrink and select "Shrink Volume..." from the menu.
* In the shrink dialog, enter the amount of the new partition. If there is not enough space to in the volume and there's free space right beside it, you can choose the "Extend Volume..." option to add more space. Note that this only works with contiguous space.
* You should now see a box of Unallocated Space. Right click on this and select "New Simple Volume..." to create a partition.

For a more detailed guide on how to parition on Windows, click [here](http://www.howtogeek.com/172580/how-to-create-a-separate-data-partition-for-windows/).

## Installing Linux

### EFI Mode

UEFI (~EFI) is a firmware interface that has replaced the BIOS firmware in recent computers. When installing alongside Windows 8, you would need to disable a few features so that you can properly install in EFI mode.

* First, [disable FastStartup](http://www.eightforums.com/tutorials/6320-fast-startup-turn-off-windows-8-a.html) in Windows. After disabling the feature, make sure that you shutdown Windows properly so that it doesn't save the state of your machine.
* In the BIOS, disable FastBoot. If you run into any problems while installing, try disbaling Secure Boot as well.

Please follow the [official guide](https://help.ubuntu.com/community/UEFI) for installing Ubuntu in EFI mode before proceeding with the next instructions. For troubleshooting, you may find additional (more detailed) instructions [here](http://askubuntu.com/questions/221835/installing-ubuntu-on-a-pre-installed-windows-8-64-bit-system-uefi-supported).

### Booting the Installation Disk

In order to install Linux, you must first boot your computer from the installation disk. Depending on the hardware, this process may differ between machines. However, the general process is as follows:

* Insert the installation disk and then restart your machine.
* Before the machine loads the pre-installed OS, press the appropriate function key to change the boot order. This is usually F12 or ESC for PC users and Option for Mac users, but it generally differs depending on the hardware so be sure to check which function key works for your machine.
* Select the appropriate boot disk. If you choose the incorrect device, your machine will continue to boot as normal. Just restart and try again. If you are successful, your machine will proceed to the Installation Wizard of your Linux distro.

Follow the instructions until you are asked how you would like to install your Linux system. You will usually be presented with three options: "Replace Your Existing OS", "Install Alongside Your OS", or "Something Else". Select the "Something Else" option.

### Setting Up the Partitions

Select the partitions you created before.

* For the root partition, choose to use it as an Ext4 journaling file system and select `/` as its mounting point.
* For the swap partition, choose to use it as a swap area.

You can find a more detailed guide for setting up the partitions [here](http://askubuntu.com/questions/343268/how-to-use-manual-partitioning-during-installation).

Afterwards, follow the remaining instructions for setting up and installing Linux. Then restart your machine.

## Network Configuration

Check if your machine detects wireless networks. If not, connect to the internet via wired connection (such as ethernet) and download the Broadcom STA driver. In elementary OS, you can do this by accessing System Settings > Additional Drivers.

## Update Your System

```bash
sudo apt-get update && apt-get upgrade
```
