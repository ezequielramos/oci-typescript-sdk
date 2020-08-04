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
import common = require("oci-common");

/**
* A compute host. The image used to launch the instance determines its operating system and other
* software. The shape specified during the launch process determines the number of CPUs and memory
* allocated to the instance. For more information, see
* [Overview of the Compute Service](https://docs.cloud.oracle.com/Content/Compute/Concepts/computeoverview.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you
* supply string values using the API.
* 
*/
export interface Instance {
  /**
    * The availability domain the instance is running in.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the compartment that contains the instance.
   */
  "compartmentId": string;
  /**
   * The OCID of dedicated VM host.
   *
   */
  "dedicatedVmHostId"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: `My bare metal instance`
* 
    */
  "displayName"?: string;
  /**
    * Additional metadata key/value pairs that you provide. They serve the same purpose and functionality
* as fields in the `metadata` object.
* <p>
They are distinguished from `metadata` fields in that these can be nested JSON objects (whereas `metadata`
* fields are string/string maps only).
* 
    */
  "extendedMetadata"?: { [key: string]: any };
  /**
    * The name of the fault domain the instance is running in.
* <p>
A fault domain is a grouping of hardware and infrastructure within an availability domain.
* Each availability domain contains three fault domains. Fault domains let you distribute your
* instances so that they are not on the same physical hardware within a single availability domain.
* A hardware failure or Compute hardware maintenance that affects one fault domain does not affect
* instances in other fault domains.
* <p>
If you do not specify the fault domain, the system selects one for you.
* <p>
Example: `FAULT-DOMAIN-1`
* 
    */
  "faultDomain"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the instance.
   */
  "id": string;
  /**
   * Deprecated. Use `sourceDetails` instead.
   *
   */
  "imageId"?: string;
  /**
    * When a bare metal or virtual machine
* instance boots, the iPXE firmware that runs on the instance is
* configured to run an iPXE script to continue the boot process.
* <p>
If you want more control over the boot process, you can provide
* your own custom iPXE script that will run when the instance boots;
* however, you should be aware that the same iPXE script will run
* every time an instance boots; not only after the initial
* LaunchInstance call.
* <p>
The default iPXE script connects to the instance's local boot
* volume over iSCSI and performs a network boot. If you use a custom iPXE
* script and want to network-boot from the instance's local boot volume
* over iSCSI the same way as the default iPXE script, you should use the
* following iSCSI IP address: 169.254.0.2, and boot volume IQN:
* iqn.2015-02.oracle.boot.
* <p>
For more information about the Bring Your Own Image feature of
* Oracle Cloud Infrastructure, see
* [Bring Your Own Image](https://docs.cloud.oracle.com/Content/Compute/References/bringyourownimage.htm).
* <p>
For more information about iPXE, see http://ipxe.org.
* 
    */
  "ipxeScript"?: string;
  /**
   * Specifies the configuration mode for launching virtual machine (VM) instances. The configuration modes are:
   * * `NATIVE` - VM instances launch with iSCSI boot and VFIO devices. The default value for Oracle-provided images.
   * * `EMULATED` - VM instances launch with emulated devices, such as the E1000 network driver and emulated SCSI disk controller.
   * * `PARAVIRTUALIZED` - VM instances launch with paravirtualized devices using VirtIO drivers.
   * * `CUSTOM` - VM instances launch with custom configuration settings specified in the `LaunchOptions` parameter.
   *
   */
  "launchMode"?: Instance.LaunchMode;
  /**
   * Options for tuning the compatibility and performance of VM shapes. The values that you specify override any default values.
   *
   */
  "launchOptions"?: model.LaunchOptions;
  /**
   * The current state of the instance.
   */
  "lifecycleState": Instance.LifecycleState;
  /**
   * Custom metadata that you provide.
   */
  "metadata"?: { [key: string]: string };
  /**
    * The region that contains the availability domain the instance is running in.
* <p>
For the us-phoenix-1 and us-ashburn-1 regions, `phx` and `iad` are returned, respectively.
* For all other regions, the full region name is returned.
* <p>
Examples: `phx`, `eu-frankfurt-1`
* 
    */
  "region": string;
  /**
   * The shape of the instance. The shape determines the number of CPUs and the amount of memory
   * allocated to the instance. You can enumerate all available shapes by calling
   * {@link #listShapes(ListShapesRequest) listShapes}.
   *
   */
  "shape": string;
  "shapeConfig"?: model.InstanceShapeConfig;
  /**
   * Details for creating an instance
   */
  "sourceDetails"?: model.InstanceSourceViaImageDetails | model.InstanceSourceViaBootVolumeDetails;
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
    * The date and time the instance was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  "agentConfig"?: model.InstanceAgentConfig;
  /**
   * The date and time the instance is expected to be stopped / started,  in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * After that time if instance hasn't been rebooted, Oracle will reboot the instance within 24 hours of the due time.
   * Regardless of how the instance was stopped, the flag will be reset to empty as soon as instance reaches Stopped state.
   * Example: `2018-05-25T21:10:29.600Z`
   *
   */
  "timeMaintenanceRebootDue"?: Date;
}

export namespace Instance {
  export enum LaunchMode {
    Native = "NATIVE",
    Emulated = "EMULATED",
    Paravirtualized = "PARAVIRTUALIZED",
    Custom = "CUSTOM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Moving = "MOVING",
    Provisioning = "PROVISIONING",
    Running = "RUNNING",
    Starting = "STARTING",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    CreatingImage = "CREATING_IMAGE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Instance): object {
    const jsonObj = {
      ...obj,
      ...{
        "launchOptions": obj.launchOptions
          ? model.LaunchOptions.getJsonObj(obj.launchOptions)
          : undefined,

        "shapeConfig": obj.shapeConfig
          ? model.InstanceShapeConfig.getJsonObj(obj.shapeConfig)
          : undefined,
        "sourceDetails": obj.sourceDetails
          ? model.InstanceSourceDetails.getJsonObj(obj.sourceDetails)
          : undefined,

        "agentConfig": obj.agentConfig
          ? model.InstanceAgentConfig.getJsonObj(obj.agentConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
