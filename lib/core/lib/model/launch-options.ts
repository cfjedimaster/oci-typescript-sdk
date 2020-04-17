/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";

/**
 * Options for tuning compatibility and performance of VM shapes.
 *
 */
export interface LaunchOptions {
  /**
   * Emulation type for volume.
   * * `ISCSI` - ISCSI attached block storage device. This is the default for Boot Volumes and Remote Block
   * Storage volumes on Oracle provided images.
   * * `SCSI` - Emulated SCSI disk.
   * * `IDE` - Emulated IDE disk.
   * * `VFIO` - Direct attached Virtual Function storage.  This is the default option for Local data
   * volumes on Oracle provided images.
   * * `PARAVIRTUALIZED` - Paravirtualized disk.
   *
   */
  "bootVolumeType"?: LaunchOptions.BootVolumeType;
  /**
   * Firmware used to boot VM.  Select the option that matches your operating system.
   * * `BIOS` - Boot VM using BIOS style firmware.  This is compatible with both 32 bit and 64 bit operating
   * systems that boot using MBR style bootloaders.
   * * `UEFI_64` - Boot VM using UEFI style firmware compatible with 64 bit operating systems.  This is the
   * default for Oracle provided images.
   *
   */
  "firmware"?: LaunchOptions.Firmware;
  /**
   * Emulation type for the physical network interface card (NIC).
   * * `E1000` - Emulated Gigabit ethernet controller.  Compatible with Linux e1000 network driver.
   * * `VFIO` - Direct attached Virtual Function network controller. This is the networking type
   * when you launch an instance using hardware-assisted (SR-IOV) networking.
   * * `PARAVIRTUALIZED` - VM instances launch with paravirtualized devices using virtio drivers.
   *
   */
  "networkType"?: LaunchOptions.NetworkType;
  /**
   * Emulation type for volume.
   * * `ISCSI` - ISCSI attached block storage device. This is the default for Boot Volumes and Remote Block
   * Storage volumes on Oracle provided images.
   * * `SCSI` - Emulated SCSI disk.
   * * `IDE` - Emulated IDE disk.
   * * `VFIO` - Direct attached Virtual Function storage.  This is the default option for Local data
   * volumes on Oracle provided images.
   * * `PARAVIRTUALIZED` - Paravirtualized disk.
   *
   */
  "remoteDataVolumeType"?: LaunchOptions.RemoteDataVolumeType;
  /**
   * Whether to enable in-transit encryption for the boot volume's paravirtualized attachment. The default value is false.
   */
  "isPvEncryptionInTransitEnabled"?: boolean;
  /**
   * Whether to enable consistent volume naming feature. Defaults to false.
   */
  "isConsistentVolumeNamingEnabled"?: boolean;
}

export namespace LaunchOptions {
  export enum BootVolumeType {
    ISCSI = "ISCSI",
    SCSI = "SCSI",
    IDE = "IDE",
    VFIO = "VFIO",
    PARAVIRTUALIZED = "PARAVIRTUALIZED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum Firmware {
    BIOS = "BIOS",
    UEFI64 = "UEFI_64",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum NetworkType {
    E1000 = "E1000",
    VFIO = "VFIO",
    PARAVIRTUALIZED = "PARAVIRTUALIZED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum RemoteDataVolumeType {
    ISCSI = "ISCSI",
    SCSI = "SCSI",
    IDE = "IDE",
    VFIO = "VFIO",
    PARAVIRTUALIZED = "PARAVIRTUALIZED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LaunchOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
