(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickDC.DEVICE_IDENTIFIER = 11;
BrickDC.CALLBACK_UNDER_VOLTAGE = 21;
BrickDC.CALLBACK_EMERGENCY_SHUTDOWN = 22;
BrickDC.CALLBACK_VELOCITY_REACHED = 23;
BrickDC.CALLBACK_CURRENT_VELOCITY = 24;
BrickDC.FUNCTION_SET_VELOCITY = 1;
BrickDC.FUNCTION_GET_VELOCITY = 2;
BrickDC.FUNCTION_GET_CURRENT_VELOCITY = 3;
BrickDC.FUNCTION_SET_ACCELERATION = 4;
BrickDC.FUNCTION_GET_ACCELERATION = 5;
BrickDC.FUNCTION_SET_PWM_FREQUENCY = 6;
BrickDC.FUNCTION_GET_PWM_FREQUENCY = 7;
BrickDC.FUNCTION_FULL_BRAKE = 8;
BrickDC.FUNCTION_GET_STACK_INPUT_VOLTAGE = 9;
BrickDC.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE = 10;
BrickDC.FUNCTION_GET_CURRENT_CONSUMPTION = 11;
BrickDC.FUNCTION_ENABLE = 12;
BrickDC.FUNCTION_DISABLE = 13;
BrickDC.FUNCTION_IS_ENABLED = 14;
BrickDC.FUNCTION_SET_MINIMUM_VOLTAGE = 15;
BrickDC.FUNCTION_GET_MINIMUM_VOLTAGE = 16;
BrickDC.FUNCTION_SET_DRIVE_MODE = 17;
BrickDC.FUNCTION_GET_DRIVE_MODE = 18;
BrickDC.FUNCTION_SET_CURRENT_VELOCITY_PERIOD = 19;
BrickDC.FUNCTION_GET_CURRENT_VELOCITY_PERIOD = 20;
BrickDC.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickDC.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickDC.FUNCTION_RESET = 243;
BrickDC.FUNCTION_GET_IDENTITY = 255;
BrickDC.DRIVE_MODE_DRIVE_BRAKE = 0;
BrickDC.DRIVE_MODE_DRIVE_COAST = 1;

function BrickDC(uid, ipcon) {
    //Device for controlling DC motors
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickDC.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickDC.FUNCTION_SET_VELOCITY] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickDC.FUNCTION_GET_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.FUNCTION_GET_CURRENT_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.FUNCTION_SET_ACCELERATION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickDC.FUNCTION_GET_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.FUNCTION_SET_PWM_FREQUENCY] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickDC.FUNCTION_GET_PWM_FREQUENCY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.FUNCTION_FULL_BRAKE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickDC.FUNCTION_GET_STACK_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.FUNCTION_GET_CURRENT_CONSUMPTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.FUNCTION_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickDC.FUNCTION_DISABLE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickDC.FUNCTION_IS_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.FUNCTION_SET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickDC.FUNCTION_GET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.FUNCTION_SET_DRIVE_MODE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickDC.FUNCTION_GET_DRIVE_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.FUNCTION_SET_CURRENT_VELOCITY_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickDC.FUNCTION_GET_CURRENT_VELOCITY_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.CALLBACK_UNDER_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickDC.CALLBACK_EMERGENCY_SHUTDOWN] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickDC.CALLBACK_VELOCITY_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickDC.CALLBACK_CURRENT_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickDC.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickDC.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickDC.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickDC.CALLBACK_UNDER_VOLTAGE] = 'H';
    this.callbackFormats[BrickDC.CALLBACK_EMERGENCY_SHUTDOWN] = '';
    this.callbackFormats[BrickDC.CALLBACK_VELOCITY_REACHED] = 'h';
    this.callbackFormats[BrickDC.CALLBACK_CURRENT_VELOCITY] = 'h';

    this.setVelocity = function(velocity, returnCallback, errorCallback) {
        /*
        Sets the velocity of the motor. Whereas -32767 is full speed backward,
        0 is stop and 32767 is full speed forward. Depending on the
        acceleration (see :func:`SetAcceleration`), the motor is not immediately
        brought to the velocity but smoothly accelerated.
        
        The velocity describes the duty cycle of the PWM with which the motor is
        controlled, e.g. a velocity of 3277 sets a PWM with a 10% duty cycle.
        You can not only control the duty cycle of the PWM but also the frequency,
        see :func:`SetPWMFrequency`.
        
        The default velocity is 0.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_VELOCITY, [velocity], 'h', '', returnCallback, errorCallback);
    };
    this.getVelocity = function(returnCallback, errorCallback) {
        /*
        Returns the velocity as set by :func:`SetVelocity`.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_VELOCITY, [], '', 'h', returnCallback, errorCallback);
    };   
    this.getCurrentVelocity = function(returnCallback, errorCallback) {
        /*
        Returns the *current* velocity of the motor. This value is different
        from :func:`GetVelocity` whenever the motor is currently accelerating
        to a goal set by :func:`SetVelocity`.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_CURRENT_VELOCITY, [], '', 'h', returnCallback, errorCallback);
    };   
    this.setAcceleration = function(acceleration, returnCallback, errorCallback) {
        /*
        Sets the acceleration of the motor. It is given in *velocity/s*. An
        acceleration of 10000 means, that every second the velocity is increased
        by 10000 (or about 30% duty cycle).
        
        For example: If the current velocity is 0 and you want to accelerate to a
        velocity of 16000 (about 50% duty cycle) in 10 seconds, you should set
        an acceleration of 1600.
        
        If acceleration is set to 0, there is no speed ramping, i.e. a new velocity
        is immediately given to the motor.
        
        The default acceleration is 10000.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_ACCELERATION, [acceleration], 'H', '', returnCallback, errorCallback);
    };
    this.getAcceleration = function(returnCallback, errorCallback) {
        /*
        Returns the acceleration as set by :func:`SetAcceleration`.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_ACCELERATION, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setPWMFrequency = function(frequency, returnCallback, errorCallback) {
        /*
        Sets the frequency (in Hz) of the PWM with which the motor is driven.
        The possible range of the frequency is 1-20000Hz. Often a high frequency
        is less noisy and the motor runs smoother. However, with a low frequency
        there are less switches and therefore fewer switching losses. Also with
        most motors lower frequencies enable higher torque.
        
        If you have no idea what all this means, just ignore this function and use
        the default frequency, it will very likely work fine.
        
        The default frequency is 15 kHz.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_PWM_FREQUENCY, [frequency], 'H', '', returnCallback, errorCallback);
    };
    this.getPWMFrequency = function(returnCallback, errorCallback) {
        /*
        Returns the PWM frequency (in Hz) as set by :func:`SetPWMFrequency`.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_PWM_FREQUENCY, [], '', 'H', returnCallback, errorCallback);
    };   
    this.fullBrake = function(returnCallback, errorCallback) {
        /*
        Executes an active full brake.
        
        .. warning::
         This function is for emergency purposes,
         where an immediate brake is necessary. Depending on the current velocity and
         the strength of the motor, a full brake can be quite violent.
        
        Call :func:`SetVelocity` with 0 if you just want to stop the motor.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_FULL_BRAKE, [], '', '', returnCallback, errorCallback);
    };   
    this.getStackInputVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the stack input voltage in mV. The stack input voltage is the
        voltage that is supplied via the stack, i.e. it is given by a
        Step-Down or Step-Up Power Supply.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_STACK_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getExternalInputVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the external input voltage in mV. The external input voltage is
        given via the black power input connector on the DC Brick.
        
        If there is an external input voltage and a stack input voltage, the motor
        will be driven by the external input voltage. If there is only a stack
        voltage present, the motor will be driven by this voltage.
        
        .. warning::
         This means, if you have a high stack voltage and a low external voltage,
         the motor will be driven with the low external voltage. If you then remove
         the external connection, it will immediately be driven by the high
         stack voltage.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getCurrentConsumption = function(returnCallback, errorCallback) {
        /*
        Returns the current consumption of the motor in mA.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_CURRENT_CONSUMPTION, [], '', 'H', returnCallback, errorCallback);
    };   
    this.enable = function(returnCallback, errorCallback) {
        /*
        Enables the driver chip. The driver parameters can be configured (velocity,
        acceleration, etc) before it is enabled.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_ENABLE, [], '', '', returnCallback, errorCallback);
    };   
    this.disable = function(returnCallback, errorCallback) {
        /*
        Disables the driver chip. The configurations are kept (velocity,
        acceleration, etc) but the motor is not driven until it is enabled again.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_DISABLE, [], '', '', returnCallback, errorCallback);
    };   
    this.isEnabled = function(returnCallback, errorCallback) {
        /*
        Returns *true* if the driver chip is enabled, *false* otherwise.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_IS_ENABLED, [], '', '?', returnCallback, errorCallback);
    };   
    this.setMinimumVoltage = function(voltage, returnCallback, errorCallback) {
        /*
        Sets the minimum voltage in mV, below which the :func:`UnderVoltage` callback
        is triggered. The minimum possible value that works with the DC Brick is 5V.
        You can use this function to detect the discharge of a battery that is used
        to drive the motor. If you have a fixed power supply, you likely do not need
        this functionality.
        
        The default value is 5V.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_MINIMUM_VOLTAGE, [voltage], 'H', '', returnCallback, errorCallback);
    };
    this.getMinimumVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the minimum voltage as set by :func:`SetMinimumVoltage`
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_MINIMUM_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setDriveMode = function(mode, returnCallback, errorCallback) {
        /*
        Sets the drive mode. Possible modes are:
        
        * 0 = Drive/Brake
        * 1 = Drive/Coast
        
        These modes are different kinds of motor controls.
        
        In Drive/Brake mode, the motor is always either driving or braking. There
        is no freewheeling. Advantages are: A more linear correlation between
        PWM and velocity, more exact accelerations and the possibility to drive
        with slower velocities.
        
        In Drive/Coast mode, the motor is always either driving or freewheeling.
        Advantages are: Less current consumption and less demands on the motor and
        driver chip.
        
        The default value is 0 = Drive/Brake.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_DRIVE_MODE, [mode], 'B', '', returnCallback, errorCallback);
    };
    this.getDriveMode = function(returnCallback, errorCallback) {
        /*
        Returns the drive mode, as set by :func:`SetDriveMode`.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_DRIVE_MODE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setCurrentVelocityPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets a period in ms with which the :func:`CurrentVelocity` callback is triggered.
        A period of 0 turns the callback off.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_CURRENT_VELOCITY_PERIOD, [period], 'H', '', returnCallback, errorCallback);
    };
    this.getCurrentVelocityPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetCurrentVelocityPeriod`.
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_CURRENT_VELOCITY_PERIOD, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
        /*
        Returns the firmware and protocol version and the name of the Bricklet for a
        given port.
        
        This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
        plugins.
        
        .. versionadded:: 2.0.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 'B B3 s40', returnCallback, errorCallback);
    };
    this.getChipTemperature = function(returnCallback, errorCallback) {
        /*
        Returns the temperature in °C/10 as measured inside the microcontroller. The
        value returned is not the ambient temperature!
        
        The temperature is only proportional to the real temperature and it has an
        accuracy of +-15%. Practically it is only useful as an indicator for
        temperature changes.
        
        .. versionadded:: 1.1.3~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
    };   
    this.reset = function(returnCallback, errorCallback) {
        /*
        Calling this function will reset the Brick. Calling this function
        on a Brick inside of a stack will reset the whole stack.
        
        After a reset you have to create new device objects,
        calling functions on the existing ones will result in
        undefined behavior!
        
        .. versionadded:: 1.1.3~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_RESET, [], '', '', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Brick is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be '0'-'8' (stack position).
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickDC;

},{"./Device":48}],2:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickIMU.DEVICE_IDENTIFIER = 16;
BrickIMU.CALLBACK_ACCELERATION = 31;
BrickIMU.CALLBACK_MAGNETIC_FIELD = 32;
BrickIMU.CALLBACK_ANGULAR_VELOCITY = 33;
BrickIMU.CALLBACK_ALL_DATA = 34;
BrickIMU.CALLBACK_ORIENTATION = 35;
BrickIMU.CALLBACK_QUATERNION = 36;
BrickIMU.FUNCTION_GET_ACCELERATION = 1;
BrickIMU.FUNCTION_GET_MAGNETIC_FIELD = 2;
BrickIMU.FUNCTION_GET_ANGULAR_VELOCITY = 3;
BrickIMU.FUNCTION_GET_ALL_DATA = 4;
BrickIMU.FUNCTION_GET_ORIENTATION = 5;
BrickIMU.FUNCTION_GET_QUATERNION = 6;
BrickIMU.FUNCTION_GET_IMU_TEMPERATURE = 7;
BrickIMU.FUNCTION_LEDS_ON = 8;
BrickIMU.FUNCTION_LEDS_OFF = 9;
BrickIMU.FUNCTION_ARE_LEDS_ON = 10;
BrickIMU.FUNCTION_SET_ACCELERATION_RANGE = 11;
BrickIMU.FUNCTION_GET_ACCELERATION_RANGE = 12;
BrickIMU.FUNCTION_SET_MAGNETOMETER_RANGE = 13;
BrickIMU.FUNCTION_GET_MAGNETOMETER_RANGE = 14;
BrickIMU.FUNCTION_SET_CONVERGENCE_SPEED = 15;
BrickIMU.FUNCTION_GET_CONVERGENCE_SPEED = 16;
BrickIMU.FUNCTION_SET_CALIBRATION = 17;
BrickIMU.FUNCTION_GET_CALIBRATION = 18;
BrickIMU.FUNCTION_SET_ACCELERATION_PERIOD = 19;
BrickIMU.FUNCTION_GET_ACCELERATION_PERIOD = 20;
BrickIMU.FUNCTION_SET_MAGNETIC_FIELD_PERIOD = 21;
BrickIMU.FUNCTION_GET_MAGNETIC_FIELD_PERIOD = 22;
BrickIMU.FUNCTION_SET_ANGULAR_VELOCITY_PERIOD = 23;
BrickIMU.FUNCTION_GET_ANGULAR_VELOCITY_PERIOD = 24;
BrickIMU.FUNCTION_SET_ALL_DATA_PERIOD = 25;
BrickIMU.FUNCTION_GET_ALL_DATA_PERIOD = 26;
BrickIMU.FUNCTION_SET_ORIENTATION_PERIOD = 27;
BrickIMU.FUNCTION_GET_ORIENTATION_PERIOD = 28;
BrickIMU.FUNCTION_SET_QUATERNION_PERIOD = 29;
BrickIMU.FUNCTION_GET_QUATERNION_PERIOD = 30;
BrickIMU.FUNCTION_ORIENTATION_CALCULATION_ON = 37;
BrickIMU.FUNCTION_ORIENTATION_CALCULATION_OFF = 38;
BrickIMU.FUNCTION_IS_ORIENTATION_CALCULATION_ON = 39;
BrickIMU.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickIMU.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickIMU.FUNCTION_RESET = 243;
BrickIMU.FUNCTION_GET_IDENTITY = 255;
BrickIMU.CALIBRATION_TYPE_ACCELEROMETER_GAIN = 0;
BrickIMU.CALIBRATION_TYPE_ACCELEROMETER_BIAS = 1;
BrickIMU.CALIBRATION_TYPE_MAGNETOMETER_GAIN = 2;
BrickIMU.CALIBRATION_TYPE_MAGNETOMETER_BIAS = 3;
BrickIMU.CALIBRATION_TYPE_GYROSCOPE_GAIN = 4;
BrickIMU.CALIBRATION_TYPE_GYROSCOPE_BIAS = 5;

function BrickIMU(uid, ipcon) {
    //Device for sensing acceleration, magnetic field and angular velocity
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickIMU.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 1];
    this.responseExpected[BrickIMU.FUNCTION_GET_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_MAGNETIC_FIELD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_ANGULAR_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_ALL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_ORIENTATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_QUATERNION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_IMU_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_LEDS_ON] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickIMU.FUNCTION_LEDS_OFF] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickIMU.FUNCTION_ARE_LEDS_ON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_SET_ACCELERATION_RANGE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickIMU.FUNCTION_GET_ACCELERATION_RANGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_SET_MAGNETOMETER_RANGE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickIMU.FUNCTION_GET_MAGNETOMETER_RANGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_SET_CONVERGENCE_SPEED] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickIMU.FUNCTION_GET_CONVERGENCE_SPEED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_SET_CALIBRATION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickIMU.FUNCTION_GET_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_SET_ACCELERATION_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_ACCELERATION_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_SET_MAGNETIC_FIELD_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_MAGNETIC_FIELD_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_SET_ANGULAR_VELOCITY_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_ANGULAR_VELOCITY_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_SET_ALL_DATA_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_ALL_DATA_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_SET_ORIENTATION_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_ORIENTATION_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_SET_QUATERNION_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_QUATERNION_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.CALLBACK_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickIMU.CALLBACK_MAGNETIC_FIELD] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickIMU.CALLBACK_ANGULAR_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickIMU.CALLBACK_ALL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickIMU.CALLBACK_ORIENTATION] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickIMU.CALLBACK_QUATERNION] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickIMU.FUNCTION_ORIENTATION_CALCULATION_ON] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickIMU.FUNCTION_ORIENTATION_CALCULATION_OFF] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickIMU.FUNCTION_IS_ORIENTATION_CALCULATION_ON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickIMU.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickIMU.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickIMU.CALLBACK_ACCELERATION] = 'h h h';
    this.callbackFormats[BrickIMU.CALLBACK_MAGNETIC_FIELD] = 'h h h';
    this.callbackFormats[BrickIMU.CALLBACK_ANGULAR_VELOCITY] = 'h h h';
    this.callbackFormats[BrickIMU.CALLBACK_ALL_DATA] = 'h h h h h h h h h h';
    this.callbackFormats[BrickIMU.CALLBACK_ORIENTATION] = 'h h h';
    this.callbackFormats[BrickIMU.CALLBACK_QUATERNION] = 'f f f f';

    this.getAcceleration = function(returnCallback, errorCallback) {
        /*
        Returns the calibrated acceleration from the accelerometer for the 
        x, y and z axis in mG (G/1000, 1G = 9.80605m/s²).
        
        If you want to get the acceleration periodically, it is recommended 
        to use the callback :func:`Acceleration` and set the period with 
        :func:`SetAccelerationPeriod`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ACCELERATION, [], '', 'h h h', returnCallback, errorCallback);
    };   
    this.getMagneticField = function(returnCallback, errorCallback) {
        /*
        Returns the calibrated magnetic field from the magnetometer for the 
        x, y and z axis in mG (Milligauss or Nanotesla).
        
        If you want to get the magnetic field periodically, it is recommended 
        to use the callback :func:`MagneticField` and set the period with 
        :func:`SetMagneticFieldPeriod`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_MAGNETIC_FIELD, [], '', 'h h h', returnCallback, errorCallback);
    };   
    this.getAngularVelocity = function(returnCallback, errorCallback) {
        /*
        Returns the calibrated angular velocity from the gyroscope for the 
        x, y and z axis in °/14.375s (you have to divide by 14.375 to
        get the value in °/s).
        
        If you want to get the angular velocity periodically, it is recommended 
        to use the callback :func:`AngularVelocity` and set the period with 
        :func:`SetAngularVelocityPeriod`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ANGULAR_VELOCITY, [], '', 'h h h', returnCallback, errorCallback);
    };   
    this.getAllData = function(returnCallback, errorCallback) {
        /*
        Returns the data from :func:`GetAcceleration`, :func:`GetMagneticField` 
        and :func:`GetAngularVelocity` as well as the temperature of the IMU Brick.
        
        The temperature is given in °C/100.
        
        If you want to get the data periodically, it is recommended 
        to use the callback :func:`AllData` and set the period with 
        :func:`SetAllDataPeriod`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ALL_DATA, [], '', 'h h h h h h h h h h', returnCallback, errorCallback);
    };   
    this.getOrientation = function(returnCallback, errorCallback) {
        /*
        Returns the current orientation (roll, pitch, yaw) of the IMU Brick as Euler
        angles in one-hundredth degree. Note that Euler angles always experience a
        `gimbal lock <http://en.wikipedia.org/wiki/Gimbal_lock>`__.
        
        We recommend that you use quaternions instead.
        
        The order to sequence in which the orientation values should be applied is 
        roll, yaw, pitch. 
        
        If you want to get the orientation periodically, it is recommended 
        to use the callback :func:`Orientation` and set the period with 
        :func:`SetOrientationPeriod`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ORIENTATION, [], '', 'h h h', returnCallback, errorCallback);
    };   
    this.getQuaternion = function(returnCallback, errorCallback) {
        /*
        Returns the current orientation (x, y, z, w) of the IMU as 
        `quaternions <http://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation>`__.
        
        You can go from quaternions to Euler angles with the following formula::
        
         roll  = atan2(2*y*w - 2*x*z, 1 - 2*y*y - 2*z*z)
         pitch = atan2(2*x*w - 2*y*z, 1 - 2*x*x - 2*z*z)
         yaw   =  asin(2*x*y + 2*z*w)
        
        This process is not reversible, because of the 
        `gimbal lock <http://en.wikipedia.org/wiki/Gimbal_lock>`__.
        
        Converting the quaternions to an OpenGL transformation matrix is
        possible with the following formula::
        
         matrix = [[1 - 2*(y*y + z*z),     2*(x*y - w*z),     2*(x*z + w*y), 0],
                   [    2*(x*y + w*z), 1 - 2*(x*x + z*z),     2*(y*z - w*x), 0],
                   [    2*(x*z - w*y),     2*(y*z + w*x), 1 - 2*(x*x + y*y), 0],
                   [                0,                 0,                 0, 1]]
        
        If you want to get the quaternions periodically, it is recommended 
        to use the callback :func:`Quaternion` and set the period with 
        :func:`SetQuaternionPeriod`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_QUATERNION, [], '', 'f f f f', returnCallback, errorCallback);
    };   
    this.getIMUTemperature = function(returnCallback, errorCallback) {
        /*
        Returns the temperature of the IMU Brick. The temperature is given in 
        °C/100.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_IMU_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
    };   
    this.ledsOn = function(returnCallback, errorCallback) {
        /*
        Turns the orientation and direction LEDs of the IMU Brick on.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_LEDS_ON, [], '', '', returnCallback, errorCallback);
    };   
    this.ledsOff = function(returnCallback, errorCallback) {
        /*
        Turns the orientation and direction LEDs of the IMU Brick off.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_LEDS_OFF, [], '', '', returnCallback, errorCallback);
    };   
    this.areLedsOn = function(returnCallback, errorCallback) {
        /*
        Returns *true* if the orientation and direction LEDs of the IMU Brick
        are on, *false* otherwise.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_ARE_LEDS_ON, [], '', '?', returnCallback, errorCallback);
    };   
    this.setAccelerationRange = function(range, returnCallback, errorCallback) {
        /*
        Not implemented yet.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_ACCELERATION_RANGE, [range], 'B', '', returnCallback, errorCallback);
    };
    this.getAccelerationRange = function(returnCallback, errorCallback) {
        /*
        Not implemented yet.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ACCELERATION_RANGE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setMagnetometerRange = function(range, returnCallback, errorCallback) {
        /*
        Not implemented yet.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_MAGNETOMETER_RANGE, [range], 'B', '', returnCallback, errorCallback);
    };
    this.getMagnetometerRange = function(returnCallback, errorCallback) {
        /*
        Not implemented yet.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_MAGNETOMETER_RANGE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setConvergenceSpeed = function(speed, returnCallback, errorCallback) {
        /*
        Sets the convergence speed of the IMU Brick in °/s. The convergence speed 
        determines how the different sensor measurements are fused.
        
        If the orientation of the IMU Brick is off by 10° and the convergence speed is 
        set to 20°/s, it will take 0.5s until the orientation is corrected. However,
        if the correct orientation is reached and the convergence speed is too high,
        the orientation will fluctuate with the fluctuations of the accelerometer and
        the magnetometer.
        
        If you set the convergence speed to 0, practically only the gyroscope is used
        to calculate the orientation. This gives very smooth movements, but errors of the
        gyroscope will not be corrected. If you set the convergence speed to something
        above 500, practically only the magnetometer and the accelerometer are used to
        calculate the orientation. In this case the movements are abrupt and the values
        will fluctuate, but there won't be any errors that accumulate over time.
        
        In an application with high angular velocities, we recommend a high convergence
        speed, so the errors of the gyroscope can be corrected fast. In applications with
        only slow movements we recommend a low convergence speed. You can change the
        convergence speed on the fly. So it is possible (and recommended) to increase 
        the convergence speed before an abrupt movement and decrease it afterwards 
        again.
        
        You might want to play around with the convergence speed in the Brick Viewer to
        get a feeling for a good value for your application.
        
        The default value is 30.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_CONVERGENCE_SPEED, [speed], 'H', '', returnCallback, errorCallback);
    };
    this.getConvergenceSpeed = function(returnCallback, errorCallback) {
        /*
        Returns the convergence speed as set by :func:`SetConvergenceSpeed`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_CONVERGENCE_SPEED, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setCalibration = function(typ, data, returnCallback, errorCallback) {
        /*
        There are several different types that can be calibrated:
        
        .. csv-table::
         :header: "Type", "Description", "Values"
         :widths: 10, 30, 110
        
         "0",    "Accelerometer Gain", "``[mul x, mul y, mul z, div x, div y, div z, 0, 0, 0, 0]``"
         "1",    "Accelerometer Bias", "``[bias x, bias y, bias z, 0, 0, 0, 0, 0, 0, 0]``"
         "2",    "Magnetometer Gain",  "``[mul x, mul y, mul z, div x, div y, div z, 0, 0, 0, 0]``"
         "3",    "Magnetometer Bias",  "``[bias x, bias y, bias z, 0, 0, 0, 0, 0, 0, 0]``"
         "4",    "Gyroscope Gain",     "``[mul x, mul y, mul z, div x, div y, div z, 0, 0, 0, 0]``"
         "5",    "Gyroscope Bias",     "``[bias xl, bias yl, bias zl, temp l, bias xh, bias yh, bias zh, temp h, 0, 0]``"
        
        The calibration via gain and bias is done with the following formula::
        
         new_value = (bias + orig_value) * gain_mul / gain_div
        
        If you really want to write your own calibration software, please keep
        in mind that you first have to undo the old calibration (set bias to 0 and
        gain to 1/1) and that you have to average over several thousand values
        to obtain a usable result in the end.
        
        The gyroscope bias is highly dependent on the temperature, so you have to
        calibrate the bias two times with different temperatures. The values ``xl``,
        ``yl``, ``zl`` and ``temp l`` are the bias for ``x``, ``y``, ``z`` and the
        corresponding temperature for a low temperature. The values ``xh``, ``yh``,
        ``zh`` and ``temp h`` are the same for a high temperatures. The temperature
        difference should be at least 5°C. If you have a temperature where the
        IMU Brick is mostly used, you should use this temperature for one of the
        sampling points.
        
        .. note::
         We highly recommend that you use the Brick Viewer to calibrate your
         IMU Brick.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_CALIBRATION, [typ, data], 'B h10', '', returnCallback, errorCallback);
    };
    this.getCalibration = function(typ, returnCallback, errorCallback) {
        /*
        Returns the calibration for a given type as set by :func:`SetCalibration`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_CALIBRATION, [typ], 'B', 'h10', returnCallback, errorCallback);
    };
    this.setAccelerationPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Acceleration` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_ACCELERATION_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAccelerationPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAccelerationPeriod`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ACCELERATION_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setMagneticFieldPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`MagneticField` callback is triggered
        periodically. A value of 0 turns the callback off.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_MAGNETIC_FIELD_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getMagneticFieldPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetMagneticFieldPeriod`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_MAGNETIC_FIELD_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAngularVelocityPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AngularVelocity` callback is triggered
        periodically. A value of 0 turns the callback off.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_ANGULAR_VELOCITY_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAngularVelocityPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAngularVelocityPeriod`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ANGULAR_VELOCITY_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAllDataPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AllData` callback is triggered
        periodically. A value of 0 turns the callback off.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_ALL_DATA_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAllDataPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAllDataPeriod`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ALL_DATA_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setOrientationPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Orientation` callback is triggered
        periodically. A value of 0 turns the callback off.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_ORIENTATION_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getOrientationPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetOrientationPeriod`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_ORIENTATION_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setQuaternionPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Quaternion` callback is triggered
        periodically. A value of 0 turns the callback off.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_SET_QUATERNION_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getQuaternionPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetQuaternionPeriod`.
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_QUATERNION_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.orientationCalculationOn = function(returnCallback, errorCallback) {
        /*
        Turns the orientation calculation of the IMU Brick on.
        
        As default the calculation is on.
        
        .. versionadded:: 2.0.2~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_ORIENTATION_CALCULATION_ON, [], '', '', returnCallback, errorCallback);
    };   
    this.orientationCalculationOff = function(returnCallback, errorCallback) {
        /*
        Turns the orientation calculation of the IMU Brick off.
        
        If the calculation is off, :func:`GetOrientation` will return
        the last calculated value until the calculation is turned on again.
        
        The trigonometric functions that are needed to calculate the orientation 
        are very expensive. We recommend to turn the orientation calculation
        off if the orientation is not needed, to free calculation time for the
        sensor fusion algorithm.
        
        As default the calculation is on.
        
        .. versionadded:: 2.0.2~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_ORIENTATION_CALCULATION_OFF, [], '', '', returnCallback, errorCallback);
    };   
    this.isOrientationCalculationOn = function(returnCallback, errorCallback) {
        /*
        Returns *true* if the orientation calculation of the IMU Brick
        is on, *false* otherwise.
        
        .. versionadded:: 2.0.2~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_IS_ORIENTATION_CALCULATION_ON, [], '', '?', returnCallback, errorCallback);
    };   
    this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
        /*
        Returns the firmware and protocol version and the name of the Bricklet for a
        given port.
        
        This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
        plugins.
        
        .. versionadded:: 2.0.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 'B B3 s40', returnCallback, errorCallback);
    };
    this.getChipTemperature = function(returnCallback, errorCallback) {
        /*
        Returns the temperature in °C/10 as measured inside the microcontroller. The
        value returned is not the ambient temperature!
        
        The temperature is only proportional to the real temperature and it has an
        accuracy of +-15%. Practically it is only useful as an indicator for
        temperature changes.
        
        .. versionadded:: 1.0.7~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
    };   
    this.reset = function(returnCallback, errorCallback) {
        /*
        Calling this function will reset the Brick. Calling this function
        on a Brick inside of a stack will reset the whole stack.
        
        After a reset you have to create new device objects,
        calling functions on the existing ones will result in
        undefined behavior!
        
        .. versionadded:: 1.0.7~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_RESET, [], '', '', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Brick is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be '0'-'8' (stack position).
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickIMU.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickIMU;

},{"./Device":48}],3:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickMaster.DEVICE_IDENTIFIER = 13;
BrickMaster.CALLBACK_STACK_CURRENT = 59;
BrickMaster.CALLBACK_STACK_VOLTAGE = 60;
BrickMaster.CALLBACK_USB_VOLTAGE = 61;
BrickMaster.CALLBACK_STACK_CURRENT_REACHED = 62;
BrickMaster.CALLBACK_STACK_VOLTAGE_REACHED = 63;
BrickMaster.CALLBACK_USB_VOLTAGE_REACHED = 64;
BrickMaster.FUNCTION_GET_STACK_VOLTAGE = 1;
BrickMaster.FUNCTION_GET_STACK_CURRENT = 2;
BrickMaster.FUNCTION_SET_EXTENSION_TYPE = 3;
BrickMaster.FUNCTION_GET_EXTENSION_TYPE = 4;
BrickMaster.FUNCTION_IS_CHIBI_PRESENT = 5;
BrickMaster.FUNCTION_SET_CHIBI_ADDRESS = 6;
BrickMaster.FUNCTION_GET_CHIBI_ADDRESS = 7;
BrickMaster.FUNCTION_SET_CHIBI_MASTER_ADDRESS = 8;
BrickMaster.FUNCTION_GET_CHIBI_MASTER_ADDRESS = 9;
BrickMaster.FUNCTION_SET_CHIBI_SLAVE_ADDRESS = 10;
BrickMaster.FUNCTION_GET_CHIBI_SLAVE_ADDRESS = 11;
BrickMaster.FUNCTION_GET_CHIBI_SIGNAL_STRENGTH = 12;
BrickMaster.FUNCTION_GET_CHIBI_ERROR_LOG = 13;
BrickMaster.FUNCTION_SET_CHIBI_FREQUENCY = 14;
BrickMaster.FUNCTION_GET_CHIBI_FREQUENCY = 15;
BrickMaster.FUNCTION_SET_CHIBI_CHANNEL = 16;
BrickMaster.FUNCTION_GET_CHIBI_CHANNEL = 17;
BrickMaster.FUNCTION_IS_RS485_PRESENT = 18;
BrickMaster.FUNCTION_SET_RS485_ADDRESS = 19;
BrickMaster.FUNCTION_GET_RS485_ADDRESS = 20;
BrickMaster.FUNCTION_SET_RS485_SLAVE_ADDRESS = 21;
BrickMaster.FUNCTION_GET_RS485_SLAVE_ADDRESS = 22;
BrickMaster.FUNCTION_GET_RS485_ERROR_LOG = 23;
BrickMaster.FUNCTION_SET_RS485_CONFIGURATION = 24;
BrickMaster.FUNCTION_GET_RS485_CONFIGURATION = 25;
BrickMaster.FUNCTION_IS_WIFI_PRESENT = 26;
BrickMaster.FUNCTION_SET_WIFI_CONFIGURATION = 27;
BrickMaster.FUNCTION_GET_WIFI_CONFIGURATION = 28;
BrickMaster.FUNCTION_SET_WIFI_ENCRYPTION = 29;
BrickMaster.FUNCTION_GET_WIFI_ENCRYPTION = 30;
BrickMaster.FUNCTION_GET_WIFI_STATUS = 31;
BrickMaster.FUNCTION_REFRESH_WIFI_STATUS = 32;
BrickMaster.FUNCTION_SET_WIFI_CERTIFICATE = 33;
BrickMaster.FUNCTION_GET_WIFI_CERTIFICATE = 34;
BrickMaster.FUNCTION_SET_WIFI_POWER_MODE = 35;
BrickMaster.FUNCTION_GET_WIFI_POWER_MODE = 36;
BrickMaster.FUNCTION_GET_WIFI_BUFFER_INFO = 37;
BrickMaster.FUNCTION_SET_WIFI_REGULATORY_DOMAIN = 38;
BrickMaster.FUNCTION_GET_WIFI_REGULATORY_DOMAIN = 39;
BrickMaster.FUNCTION_GET_USB_VOLTAGE = 40;
BrickMaster.FUNCTION_SET_LONG_WIFI_KEY = 41;
BrickMaster.FUNCTION_GET_LONG_WIFI_KEY = 42;
BrickMaster.FUNCTION_SET_WIFI_HOSTNAME = 43;
BrickMaster.FUNCTION_GET_WIFI_HOSTNAME = 44;
BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_PERIOD = 45;
BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_PERIOD = 46;
BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_PERIOD = 47;
BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_PERIOD = 48;
BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_PERIOD = 49;
BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_PERIOD = 50;
BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_THRESHOLD = 51;
BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_THRESHOLD = 52;
BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_THRESHOLD = 53;
BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_THRESHOLD = 54;
BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_THRESHOLD = 55;
BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_THRESHOLD = 56;
BrickMaster.FUNCTION_SET_DEBOUNCE_PERIOD = 57;
BrickMaster.FUNCTION_GET_DEBOUNCE_PERIOD = 58;
BrickMaster.FUNCTION_IS_ETHERNET_PRESENT = 65;
BrickMaster.FUNCTION_SET_ETHERNET_CONFIGURATION = 66;
BrickMaster.FUNCTION_GET_ETHERNET_CONFIGURATION = 67;
BrickMaster.FUNCTION_GET_ETHERNET_STATUS = 68;
BrickMaster.FUNCTION_SET_ETHERNET_HOSTNAME = 69;
BrickMaster.FUNCTION_SET_ETHERNET_MAC_ADDRESS = 70;
BrickMaster.FUNCTION_SET_ETHERNET_WEBSOCKET_CONFIGURATION = 71;
BrickMaster.FUNCTION_GET_ETHERNET_WEBSOCKET_CONFIGURATION = 72;
BrickMaster.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickMaster.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickMaster.FUNCTION_RESET = 243;
BrickMaster.FUNCTION_GET_IDENTITY = 255;
BrickMaster.EXTENSION_TYPE_CHIBI = 1;
BrickMaster.EXTENSION_TYPE_RS485 = 2;
BrickMaster.EXTENSION_TYPE_WIFI = 3;
BrickMaster.EXTENSION_TYPE_ETHERNET = 4;
BrickMaster.CHIBI_FREQUENCY_OQPSK_868_MHZ = 0;
BrickMaster.CHIBI_FREQUENCY_OQPSK_915_MHZ = 1;
BrickMaster.CHIBI_FREQUENCY_OQPSK_780_MHZ = 2;
BrickMaster.CHIBI_FREQUENCY_BPSK40_915_MHZ = 3;
BrickMaster.RS485_PARITY_NONE = 'n';
BrickMaster.RS485_PARITY_EVEN = 'e';
BrickMaster.RS485_PARITY_ODD = 'o';
BrickMaster.WIFI_CONNECTION_DHCP = 0;
BrickMaster.WIFI_CONNECTION_STATIC_IP = 1;
BrickMaster.WIFI_CONNECTION_ACCESS_POINT_DHCP = 2;
BrickMaster.WIFI_CONNECTION_ACCESS_POINT_STATIC_IP = 3;
BrickMaster.WIFI_CONNECTION_AD_HOC_DHCP = 4;
BrickMaster.WIFI_CONNECTION_AD_HOC_STATIC_IP = 5;
BrickMaster.WIFI_ENCRYPTION_WPA_WPA2 = 0;
BrickMaster.WIFI_ENCRYPTION_WPA_ENTERPRISE = 1;
BrickMaster.WIFI_ENCRYPTION_WEP = 2;
BrickMaster.WIFI_ENCRYPTION_NO_ENCRYPTION = 3;
BrickMaster.WIFI_EAP_OPTION_OUTER_AUTH_EAP_FAST = 0;
BrickMaster.WIFI_EAP_OPTION_OUTER_AUTH_EAP_TLS = 1;
BrickMaster.WIFI_EAP_OPTION_OUTER_AUTH_EAP_TTLS = 2;
BrickMaster.WIFI_EAP_OPTION_OUTER_AUTH_EAP_PEAP = 3;
BrickMaster.WIFI_EAP_OPTION_INNER_AUTH_EAP_MSCHAP = 0;
BrickMaster.WIFI_EAP_OPTION_INNER_AUTH_EAP_GTC = 4;
BrickMaster.WIFI_EAP_OPTION_CERT_TYPE_CA_CERT = 0;
BrickMaster.WIFI_EAP_OPTION_CERT_TYPE_CLIENT_CERT = 8;
BrickMaster.WIFI_EAP_OPTION_CERT_TYPE_PRIVATE_KEY = 16;
BrickMaster.WIFI_STATE_DISASSOCIATED = 0;
BrickMaster.WIFI_STATE_ASSOCIATED = 1;
BrickMaster.WIFI_STATE_ASSOCIATING = 2;
BrickMaster.WIFI_STATE_ERROR = 3;
BrickMaster.WIFI_STATE_NOT_INITIALIZED_YET = 255;
BrickMaster.WIFI_POWER_MODE_FULL_SPEED = 0;
BrickMaster.WIFI_POWER_MODE_LOW_POWER = 1;
BrickMaster.WIFI_DOMAIN_CHANNEL_1TO11 = 0;
BrickMaster.WIFI_DOMAIN_CHANNEL_1TO13 = 1;
BrickMaster.WIFI_DOMAIN_CHANNEL_1TO14 = 2;
BrickMaster.THRESHOLD_OPTION_OFF = 'x';
BrickMaster.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickMaster.THRESHOLD_OPTION_INSIDE = 'i';
BrickMaster.THRESHOLD_OPTION_SMALLER = '<';
BrickMaster.THRESHOLD_OPTION_GREATER = '>';
BrickMaster.ETHERNET_CONNECTION_DHCP = 0;
BrickMaster.ETHERNET_CONNECTION_STATIC_IP = 1;

function BrickMaster(uid, ipcon) {
    //Device for controlling Stacks and four Bricklets
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickMaster.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 3];
    this.responseExpected[BrickMaster.FUNCTION_GET_STACK_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_STACK_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_EXTENSION_TYPE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_EXTENSION_TYPE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_IS_CHIBI_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_MASTER_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_MASTER_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_SLAVE_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_SLAVE_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_SIGNAL_STRENGTH] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_ERROR_LOG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_FREQUENCY] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_FREQUENCY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_CHANNEL] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_CHANNEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_IS_RS485_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_RS485_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_RS485_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_RS485_SLAVE_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_RS485_SLAVE_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_RS485_ERROR_LOG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_RS485_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_RS485_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_IS_WIFI_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_ENCRYPTION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_ENCRYPTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_REFRESH_WIFI_STATUS] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_CERTIFICATE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_CERTIFICATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_POWER_MODE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_POWER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_BUFFER_INFO] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_REGULATORY_DOMAIN] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_REGULATORY_DOMAIN] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_USB_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_LONG_WIFI_KEY] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_LONG_WIFI_KEY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_HOSTNAME] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_HOSTNAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.CALLBACK_STACK_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickMaster.CALLBACK_STACK_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickMaster.CALLBACK_USB_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickMaster.CALLBACK_STACK_CURRENT_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickMaster.CALLBACK_STACK_VOLTAGE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickMaster.CALLBACK_USB_VOLTAGE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_IS_ETHERNET_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_ETHERNET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_ETHERNET_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_HOSTNAME] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_MAC_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_WEBSOCKET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_ETHERNET_WEBSOCKET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickMaster.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickMaster.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickMaster.CALLBACK_STACK_CURRENT] = 'H';
    this.callbackFormats[BrickMaster.CALLBACK_STACK_VOLTAGE] = 'H';
    this.callbackFormats[BrickMaster.CALLBACK_USB_VOLTAGE] = 'H';
    this.callbackFormats[BrickMaster.CALLBACK_STACK_CURRENT_REACHED] = 'H';
    this.callbackFormats[BrickMaster.CALLBACK_STACK_VOLTAGE_REACHED] = 'H';
    this.callbackFormats[BrickMaster.CALLBACK_USB_VOLTAGE_REACHED] = 'H';

    this.getStackVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the stack voltage in mV. The stack voltage is the
        voltage that is supplied via the stack, i.e. it is given by a 
        Step-Down or Step-Up Power Supply.
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getStackCurrent = function(returnCallback, errorCallback) {
        /*
        Returns the stack current in mA. The stack current is the
        current that is drawn via the stack, i.e. it is given by a
        Step-Down or Step-Up Power Supply.
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_CURRENT, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setExtensionType = function(extension, exttype, returnCallback, errorCallback) {
        /*
        Writes the extension type to the EEPROM of a specified extension. 
        The extension is either 0 or 1 (0 is the on the bottom, 1 is the on on top, 
        if only one extension is present use 0).
        
        Possible extension types:
        
        .. csv-table::
         :header: "Type", "Description"
         :widths: 10, 100
        
         "1",    "Chibi"
         "2",    "RS485"
         "3",    "WIFI"
         "4",    "Ethernet"
        
        The extension type is already set when bought and it can be set with the 
        Brick Viewer, it is unlikely that you need this function.
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_EXTENSION_TYPE, [extension, exttype], 'B I', '', returnCallback, errorCallback);
    };
    this.getExtensionType = function(extension, returnCallback, errorCallback) {
        /*
        Returns the type for a given extension as set by :func:`SetExtensionType`.
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_EXTENSION_TYPE, [extension], 'B', 'I', returnCallback, errorCallback);
    };
    this.isChibiPresent = function(returnCallback, errorCallback) {
        /*
        Returns *true* if a Chibi Extension is available to be used by the Master Brick.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_CHIBI_PRESENT, [], '', '?', returnCallback, errorCallback);
    };   
    this.setChibiAddress = function(address, returnCallback, errorCallback) {
        /*
        Sets the address (1-255) belonging to the Chibi Extension.
        
        It is possible to set the address with the Brick Viewer and it will be 
        saved in the EEPROM of the Chibi Extension, it does not
        have to be set on every startup.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_ADDRESS, [address], 'B', '', returnCallback, errorCallback);
    };
    this.getChibiAddress = function(returnCallback, errorCallback) {
        /*
        Returns the address as set by :func:`SetChibiAddress`.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_ADDRESS, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setChibiMasterAddress = function(address, returnCallback, errorCallback) {
        /*
        Sets the address (1-255) of the Chibi Master. This address is used if the
        Chibi Extension is used as slave (i.e. it does not have a USB connection).
        
        It is possible to set the address with the Brick Viewer and it will be 
        saved in the EEPROM of the Chibi Extension, it does not
        have to be set on every startup.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_MASTER_ADDRESS, [address], 'B', '', returnCallback, errorCallback);
    };
    this.getChibiMasterAddress = function(returnCallback, errorCallback) {
        /*
        Returns the address as set by :func:`SetChibiMasterAddress`.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_MASTER_ADDRESS, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setChibiSlaveAddress = function(num, address, returnCallback, errorCallback) {
        /*
        Sets up to 254 slave addresses. Valid addresses are in range 1-255. 0 has a
        special meaning, it is used as list terminator and not allowed as normal slave
        address. The address numeration (via ``num`` parameter) has to be used
        ascending from 0. For example: If you use the Chibi Extension in Master mode
        (i.e. the stack has an USB connection) and you want to talk to three other
        Chibi stacks with the slave addresses 17, 23, and 42, you should call with
        ``(0, 17)``, ``(1, 23)``, ``(2, 42)`` and ``(3, 0)``. The last call with
        ``(3, 0)`` is a list terminator and indicates that the Chibi slave address
        list contains 3 addresses in this case.
        
        It is possible to set the addresses with the Brick Viewer, that will take care
        of correct address numeration and list termination.
        
        The slave addresses will be saved in the EEPROM of the Chibi Extension, they
        don't have to be set on every startup.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_SLAVE_ADDRESS, [num, address], 'B B', '', returnCallback, errorCallback);
    };
    this.getChibiSlaveAddress = function(num, returnCallback, errorCallback) {
        /*
        Returns the slave address for a given ``num`` as set by
        :func:`SetChibiSlaveAddress`.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_SLAVE_ADDRESS, [num], 'B', 'B', returnCallback, errorCallback);
    };
    this.getChibiSignalStrength = function(returnCallback, errorCallback) {
        /*
        Returns the signal strength in dBm. The signal strength updates every time a
        packet is received.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_SIGNAL_STRENGTH, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getChibiErrorLog = function(returnCallback, errorCallback) {
        /*
        Returns underrun, CRC error, no ACK and overflow error counts of the Chibi
        communication. If these errors start rising, it is likely that either the
        distance between two Chibi stacks is becoming too big or there are
        interferences.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_ERROR_LOG, [], '', 'H H H H', returnCallback, errorCallback);
    };   
    this.setChibiFrequency = function(frequency, returnCallback, errorCallback) {
        /*
        Sets the Chibi frequency range for the Chibi Extension. Possible values are:
        
        .. csv-table::
         :header: "Type", "Description"
         :widths: 10, 100
        
         "0",    "OQPSK 868MHz (Europe)"
         "1",    "OQPSK 915MHz (US)"
         "2",    "OQPSK 780MHz (China)"
         "3",    "BPSK40 915MHz"
        
        It is possible to set the frequency with the Brick Viewer and it will be 
        saved in the EEPROM of the Chibi Extension, it does not
        have to be set on every startup.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_FREQUENCY, [frequency], 'B', '', returnCallback, errorCallback);
    };
    this.getChibiFrequency = function(returnCallback, errorCallback) {
        /*
        Returns the frequency value as set by :func:`SetChibiFrequency`.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_FREQUENCY, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setChibiChannel = function(channel, returnCallback, errorCallback) {
        /*
        Sets the channel used by the Chibi Extension. Possible channels are
        different for different frequencies:
        
        .. csv-table::
         :header: "Frequency",             "Possible Channels"
         :widths: 40, 60
        
         "OQPSK 868MHz (Europe)", "0"
         "OQPSK 915MHz (US)",     "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
         "OQPSK 780MHz (China)",  "0, 1, 2, 3"
         "BPSK40 915MHz",         "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
        
        It is possible to set the channel with the Brick Viewer and it will be 
        saved in the EEPROM of the Chibi Extension, it does not
        have to be set on every startup.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_CHANNEL, [channel], 'B', '', returnCallback, errorCallback);
    };
    this.getChibiChannel = function(returnCallback, errorCallback) {
        /*
        Returns the channel as set by :func:`SetChibiChannel`.
        
        .. versionadded:: 1.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_CHANNEL, [], '', 'B', returnCallback, errorCallback);
    };   
    this.isRS485Present = function(returnCallback, errorCallback) {
        /*
        Returns *true* if a RS485 Extension is available to be used by the Master Brick.
        
        .. versionadded:: 1.2.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_RS485_PRESENT, [], '', '?', returnCallback, errorCallback);
    };   
    this.setRS485Address = function(address, returnCallback, errorCallback) {
        /*
        Sets the address (0-255) belonging to the RS485 Extension.
        
        Set to 0 if the RS485 Extension should be the RS485 Master (i.e.
        connected to a PC via USB).
        
        It is possible to set the address with the Brick Viewer and it will be 
        saved in the EEPROM of the RS485 Extension, it does not
        have to be set on every startup.
        
        .. versionadded:: 1.2.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_RS485_ADDRESS, [address], 'B', '', returnCallback, errorCallback);
    };
    this.getRS485Address = function(returnCallback, errorCallback) {
        /*
        Returns the address as set by :func:`SetRS485Address`.
        
        .. versionadded:: 1.2.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_RS485_ADDRESS, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setRS485SlaveAddress = function(num, address, returnCallback, errorCallback) {
        /*
        Sets up to 255 slave addresses. Valid addresses are in range 1-255. 0 has a
        special meaning, it is used as list terminator and not allowed as normal slave
        address. The address numeration (via ``num`` parameter) has to be used
        ascending from 0. For example: If you use the RS485 Extension in Master mode
        (i.e. the stack has an USB connection) and you want to talk to three other
        RS485 stacks with the addresses 17, 23, and 42, you should call with
        ``(0, 17)``, ``(1, 23)``, ``(2, 42)`` and ``(3, 0)``. The last call with
        ``(3, 0)`` is a list terminator and indicates that the RS485 slave address list
        contains 3 addresses in this case.
        
        It is possible to set the addresses with the Brick Viewer, that will take care
        of correct address numeration and list termination.
        
        The slave addresses will be saved in the EEPROM of the Chibi Extension, they
        don't have to be set on every startup.
        
        .. versionadded:: 1.2.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_RS485_SLAVE_ADDRESS, [num, address], 'B B', '', returnCallback, errorCallback);
    };
    this.getRS485SlaveAddress = function(num, returnCallback, errorCallback) {
        /*
        Returns the slave address for a given ``num`` as set by
        :func:`SetRS485SlaveAddress`.
        
        .. versionadded:: 1.2.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_RS485_SLAVE_ADDRESS, [num], 'B', 'B', returnCallback, errorCallback);
    };
    this.getRS485ErrorLog = function(returnCallback, errorCallback) {
        /*
        Returns CRC error counts of the RS485 communication.
        If this counter starts rising, it is likely that the distance
        between the RS485 nodes is too big or there is some kind of
        interference.
        
        .. versionadded:: 1.2.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_RS485_ERROR_LOG, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setRS485Configuration = function(speed, parity, stopbits, returnCallback, errorCallback) {
        /*
        Sets the configuration of the RS485 Extension. Speed is given in baud. The
        Master Brick will try to match the given baud rate as exactly as possible.
        The maximum recommended baud rate is 2000000 (2Mbit/s).
        Possible values for parity are 'n' (none), 'e' (even) and 'o' (odd).
        Possible values for stop bits are 1 and 2.
        
        If your RS485 is unstable (lost messages etc.), the first thing you should
        try is to decrease the speed. On very large bus (e.g. 1km), you probably
        should use a value in the range of 100000 (100kbit/s).
        
        The values are stored in the EEPROM and only applied on startup. That means
        you have to restart the Master Brick after configuration.
        
        .. versionadded:: 1.2.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_RS485_CONFIGURATION, [speed, parity, stopbits], 'I c B', '', returnCallback, errorCallback);
    };
    this.getRS485Configuration = function(returnCallback, errorCallback) {
        /*
        Returns the configuration as set by :func:`SetRS485Configuration`.
        
        .. versionadded:: 1.2.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_RS485_CONFIGURATION, [], '', 'I c B', returnCallback, errorCallback);
    };   
    this.isWifiPresent = function(returnCallback, errorCallback) {
        /*
        Returns *true* if a WIFI Extension is available to be used by the Master Brick.
        
        .. versionadded:: 1.2.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_WIFI_PRESENT, [], '', '?', returnCallback, errorCallback);
    };   
    this.setWifiConfiguration = function(ssid, connection, ip, subnetMask, gateway, port, returnCallback, errorCallback) {
        /*
        Sets the configuration of the WIFI Extension. The ``ssid`` can have a max length
        of 32 characters. Possible values for ``connection`` are:
        
        .. csv-table::
         :header: "Value", "Description"
         :widths: 10, 90
        
         "0", "DHCP"
         "1", "Static IP"
         "2", "Access Point: DHCP"
         "3", "Access Point: Static IP"
         "4", "Ad Hoc: DHCP"
         "5", "Ad Hoc: Static IP"
        
        If you set ``connection`` to one of the static IP options then you have to
        supply ``ip``, ``subnet_mask`` and ``gateway`` as an array of size 4 (first
        element of the array is the least significant byte of the address). If
        ``connection`` is set to one of the DHCP options then ``ip``, ``subnet_mask``
        and ``gateway`` are ignored, you can set them to 0.
        
        The last parameter is the port that your program will connect to. The
        default port, that is used by brickd, is 4223.
        
        The values are stored in the EEPROM and only applied on startup. That means
        you have to restart the Master Brick after configuration.
        
        It is recommended to use the Brick Viewer to set the WIFI configuration.
        
        .. versionadded:: 1.3.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_CONFIGURATION, [ssid, connection, ip, subnetMask, gateway, port], 's32 B B4 B4 B4 H', '', returnCallback, errorCallback);
    };
    this.getWifiConfiguration = function(returnCallback, errorCallback) {
        /*
        Returns the configuration as set by :func:`SetWifiConfiguration`.
        
        .. versionadded:: 1.3.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_CONFIGURATION, [], '', 's32 B B4 B4 B4 H', returnCallback, errorCallback);
    };   
    this.setWifiEncryption = function(encryption, key, keyIndex, eapOptions, caCertificateLength, clientCertificateLength, privateKeyLength, returnCallback, errorCallback) {
        /*
        Sets the encryption of the WIFI Extension. The first parameter is the
        type of the encryption. Possible values are:
        
        .. csv-table::
         :header: "Value", "Description"
         :widths: 10, 90
        
         "0", "WPA/WPA2"
         "1", "WPA Enterprise (EAP-FAST, EAP-TLS, EAP-TTLS, PEAP)"
         "2", "WEP"
         "3", "No Encryption"
        
        The ``key`` has a max length of 50 characters and is used if ``encryption``
        is set to 0 or 2 (WPA/WPA2 or WEP). Otherwise the value is ignored.
        
        For WPA/WPA2 the key has to be at least 8 characters long. If you want to set
        a key with more than 50 characters, see :func:`SetLongWifiKey`.
        
        For WEP the key has to be either 10 or 26 hexadecimal digits long. It is
        possible to set the WEP ``key_index`` (1-4). If you don't know your
        ``key_index``, it is likely 1.
        
        If you choose WPA Enterprise as encryption, you have to set ``eap_options`` and
        the length of the certificates (for other encryption types these parameters
        are ignored). The certificate length are given in byte and the certificates
        themselves can be set with :func:`SetWifiCertificate`. ``eap_options`` consist
        of the outer authentication (bits 1-2), inner authentication (bit 3) and
        certificate type (bits 4-5):
        
        .. csv-table::
         :header: "Option", "Bits", "Description"
         :widths: 20, 10, 70
        
         "outer authentication", "1-2", "0=EAP-FAST, 1=EAP-TLS, 2=EAP-TTLS, 3=EAP-PEAP"
         "inner authentication", "3", "0=EAP-MSCHAP, 1=EAP-GTC"
         "certificate type", "4-5", "0=CA Certificate, 1=Client Certificate, 2=Private Key"
        
        Example for EAP-TTLS + EAP-GTC + Private Key: ``option = 2 | (1 << 2) | (2 << 3)``.
        
        The values are stored in the EEPROM and only applied on startup. That means
        you have to restart the Master Brick after configuration.
        
        It is recommended to use the Brick Viewer to set the WIFI encryption.
        
        .. versionadded:: 1.3.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_ENCRYPTION, [encryption, key, keyIndex, eapOptions, caCertificateLength, clientCertificateLength, privateKeyLength], 'B s50 B B H H H', '', returnCallback, errorCallback);
    };
    this.getWifiEncryption = function(returnCallback, errorCallback) {
        /*
        Returns the encryption as set by :func:`SetWifiEncryption`.
        
        .. versionadded:: 1.3.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_ENCRYPTION, [], '', 'B s50 B B H H H', returnCallback, errorCallback);
    };   
    this.getWifiStatus = function(returnCallback, errorCallback) {
        /*
        Returns the status of the WIFI Extension. The ``state`` is updated automatically,
        all of the other parameters are updated on startup and every time
        :func:`RefreshWifiStatus` is called.
        
        Possible states are:
        
        .. csv-table::
         :header: "State", "Description"
         :widths: 10, 90
        
         "0", "Disassociated"
         "1", "Associated"
         "2", "Associating"
         "3", "Error"
         "255", "Not initialized yet"
        
        .. versionadded:: 1.3.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_STATUS, [], '', 'B6 B6 B h B4 B4 B4 I I B', returnCallback, errorCallback);
    };   
    this.refreshWifiStatus = function(returnCallback, errorCallback) {
        /*
        Refreshes the WIFI status (see :func:`GetWifiStatus`). To read the status
        of the WIFI module, the Master Brick has to change from data mode to
        command mode and back. This transaction and the readout itself is
        unfortunately time consuming. This means, that it might take some ms
        until the stack with attached WIFI Extension reacts again after this
        function is called.
        
        .. versionadded:: 1.3.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_REFRESH_WIFI_STATUS, [], '', '', returnCallback, errorCallback);
    };   
    this.setWifiCertificate = function(index, data, dataLength, returnCallback, errorCallback) {
        /*
        This function is used to set the certificate as well as password and username
        for WPA Enterprise. To set the username use index 0xFFFF,
        to set the password use index 0xFFFE. The max length of username and 
        password is 32.
        
        The certificate is written in chunks of size 32 and the index is used as
        the index of the chunk. ``data_length`` should nearly always be 32. Only
        the last chunk can have a length that is not equal to 32.
        
        The starting index of the CA Certificate is 0, of the Client Certificate
        10000 and for the Private Key 20000. Maximum sizes are 1312, 1312 and
        4320 byte respectively.
        
        The values are stored in the EEPROM and only applied on startup. That means
        you have to restart the Master Brick after uploading the certificate.
        
        It is recommended to use the Brick Viewer to set the certificate, username
        and password.
        
        .. versionadded:: 1.3.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_CERTIFICATE, [index, data, dataLength], 'H B32 B', '', returnCallback, errorCallback);
    };
    this.getWifiCertificate = function(index, returnCallback, errorCallback) {
        /*
        Returns the certificate for a given index as set by :func:`SetWifiCertificate`.
        
        .. versionadded:: 1.3.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_CERTIFICATE, [index], 'H', 'B32 B', returnCallback, errorCallback);
    };
    this.setWifiPowerMode = function(mode, returnCallback, errorCallback) {
        /*
        Sets the power mode of the WIFI Extension. Possible modes are:
        
        .. csv-table::
         :header: "Mode", "Description"
         :widths: 10, 90
        
         "0", "Full Speed (high power consumption, high throughput)"
         "1", "Low Power (low power consumption, low throughput)"
        
        The default value is 0 (Full Speed).
        
        .. versionadded:: 1.3.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_POWER_MODE, [mode], 'B', '', returnCallback, errorCallback);
    };
    this.getWifiPowerMode = function(returnCallback, errorCallback) {
        /*
        Returns the power mode as set by :func:`SetWifiPowerMode`.
        
        .. versionadded:: 1.3.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_POWER_MODE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getWifiBufferInfo = function(returnCallback, errorCallback) {
        /*
        Returns informations about the WIFI receive buffer. The WIFI
        receive buffer has a max size of 1500 byte and if data is transfered
        too fast, it might overflow.
        
        The return values are the number of overflows, the low watermark 
        (i.e. the smallest number of bytes that were free in the buffer) and
        the bytes that are currently used.
        
        You should always try to keep the buffer empty, otherwise you will
        have a permanent latency. A good rule of thumb is, that you can transfer
        1000 messages per second without problems.
        
        Try to not send more then 50 messages at a time without any kind of
        break between them.
        
        .. versionadded:: 1.3.2~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_BUFFER_INFO, [], '', 'I H H', returnCallback, errorCallback);
    };   
    this.setWifiRegulatoryDomain = function(domain, returnCallback, errorCallback) {
        /*
        Sets the regulatory domain of the WIFI Extension. Possible domains are:
        
        .. csv-table::
         :header: "Domain", "Description"
         :widths: 10, 90
        
         "0", "FCC: Channel 1-11 (N/S America, Australia, New Zealand)"
         "1", "ETSI: Channel 1-13 (Europe, Middle East, Africa)"
         "2", "TELEC: Channel 1-14 (Japan)"
        
        The default value is 1 (ETSI).
        
        .. versionadded:: 1.3.4~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_REGULATORY_DOMAIN, [domain], 'B', '', returnCallback, errorCallback);
    };
    this.getWifiRegulatoryDomain = function(returnCallback, errorCallback) {
        /*
        Returns the regulatory domain as set by :func:`SetWifiRegulatoryDomain`.
        
        .. versionadded:: 1.3.4~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_REGULATORY_DOMAIN, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getUSBVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the USB voltage in mV.
        
        .. versionadded:: 1.3.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_USB_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setLongWifiKey = function(key, returnCallback, errorCallback) {
        /*
        Sets a long WIFI key (up to 63 chars, at least 8 chars) for WPA encryption.
        This key will be used
        if the key in :func:`SetWifiEncryption` is set to "-". In the old protocol,
        a payload of size 63 was not possible, so the maximum key length was 50 chars.
        
        With the new protocol this is possible, since we didn't want to break API,
        this function was added additionally.
        
        .. versionadded:: 2.0.2~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_LONG_WIFI_KEY, [key], 's64', '', returnCallback, errorCallback);
    };
    this.getLongWifiKey = function(returnCallback, errorCallback) {
        /*
        Returns the encryption key as set by :func:`SetLongWifiKey`.
        
        .. versionadded:: 2.0.2~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_LONG_WIFI_KEY, [], '', 's64', returnCallback, errorCallback);
    };   
    this.setWifiHostname = function(hostname, returnCallback, errorCallback) {
        /*
        Sets the hostname of the WIFI Extension. The hostname will be displayed 
        by access points as the hostname in the DHCP clients table.
        
        Setting an empty String will restore the default hostname.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_HOSTNAME, [hostname], 's16', '', returnCallback, errorCallback);
    };
    this.getWifiHostname = function(returnCallback, errorCallback) {
        /*
        Returns the hostname as set by :func:`GetWifiHostname`.
        
        An empty String means, that the default hostname is used.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_HOSTNAME, [], '', 's16', returnCallback, errorCallback);
    };   
    this.setStackCurrentCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`StackCurrent` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`StackCurrent` is only triggered if the current has changed since the
        last triggering.
        
        The default value is 0.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getStackCurrentCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetCurrentCallbackPeriod`.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setStackVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`StackVoltage` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`StackVoltage` is only triggered if the voltage has changed since the
        last triggering.
        
        The default value is 0.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getStackVoltageCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetStackVoltageCallbackPeriod`.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setUSBVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`USBVoltage` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`USBVoltage` is only triggered if the voltage has changed since the
        last triggering.
        
        The default value is 0.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getUSBVoltageCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetUSBVoltageCallbackPeriod`.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setStackCurrentCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`StackCurrentReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the current is *outside* the min and max values"
         "'i'",    "Callback is triggered when the current is *inside* the min and max values"
         "'<'",    "Callback is triggered when the current is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the current is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getStackCurrentCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetStackCurrentCallbackThreshold`.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setStackVoltageCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`StackStackVoltageReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the voltage is *outside* the min and max values"
         "'i'",    "Callback is triggered when the voltage is *inside* the min and max values"
         "'<'",    "Callback is triggered when the voltage is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the voltage is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getStackVoltageCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetStackVoltageCallbackThreshold`.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setUSBVoltageCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`USBVoltageReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the voltage is *outside* the min and max values"
         "'i'",    "Callback is triggered when the voltage is *inside* the min and max values"
         "'<'",    "Callback is triggered when the voltage is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the voltage is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getUSBVoltageCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetUSBVoltageCallbackThreshold`.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`StackCurrentReached`,
        * :func:`StackVoltageReached`,
        * :func:`USBVoltageReached`
        
        are triggered, if the thresholds
        
        * :func:`SetStackCurrentCallbackThreshold`,
        * :func:`SetStackVoltageCallbackThreshold`,
        * :func:`SetUSBVoltageCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        
        .. versionadded:: 2.0.5~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.isEthernetPresent = function(returnCallback, errorCallback) {
        /*
        Returns *true* if a Ethernet Extension is available to be used by the Master
        Brick.
        
        .. versionadded:: 2.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_ETHERNET_PRESENT, [], '', '?', returnCallback, errorCallback);
    };   
    this.setEthernetConfiguration = function(connection, ip, subnetMask, gateway, port, returnCallback, errorCallback) {
        /*
        Sets the configuration of the Ethernet Extension. Possible values for
        ``connection`` are:
        
        .. csv-table::
         :header: "Value", "Description"
         :widths: 10, 90
        
         "0", "DHCP"
         "1", "Static IP"
        
        If you set ``connection`` to static IP options then you have to supply ``ip``,
        ``subnet_mask`` and ``gateway`` as an array of size 4 (first element of the
        array is the least significant byte of the address). If ``connection`` is set
        to the DHCP options then ``ip``, ``subnet_mask`` and ``gateway`` are ignored,
        you can set them to 0.
        
        The last parameter is the port that your program will connect to. The
        default port, that is used by brickd, is 4223.
        
        The values are stored in the EEPROM and only applied on startup. That means
        you have to restart the Master Brick after configuration.
        
        It is recommended to use the Brick Viewer to set the Ethernet configuration.
        
        .. versionadded:: 2.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_CONFIGURATION, [connection, ip, subnetMask, gateway, port], 'B B4 B4 B4 H', '', returnCallback, errorCallback);
    };
    this.getEthernetConfiguration = function(returnCallback, errorCallback) {
        /*
        Returns the configuration as set by :func:`SetEthernetConfiguration`.
        
        .. versionadded:: 2.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_ETHERNET_CONFIGURATION, [], '', 'B B4 B4 B4 H', returnCallback, errorCallback);
    };   
    this.getEthernetStatus = function(returnCallback, errorCallback) {
        /*
        Returns the status of the Ethernet Extension.
        
        ``mac_address``, ``ip``, ``subnet_mask`` and ``gateway`` are given as an array.
        The first element of the array is the least significant byte of the address.
        
        ``rx_count`` and ``tx_count`` are the number of bytes that have been
        received/send since last restart.
        
        ``hostname`` is the currently used hostname.
        
        .. versionadded:: 2.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_ETHERNET_STATUS, [], '', 'B6 B4 B4 B4 I I s32', returnCallback, errorCallback);
    };   
    this.setEthernetHostname = function(hostname, returnCallback, errorCallback) {
        /*
        Sets the hostname of the Ethernet Extension. The hostname will be displayed 
        by access points as the hostname in the DHCP clients table.
        
        Setting an empty String will restore the default hostname.
        
        The current hostname can be discovered with :func:`GetEthernetStatus`.
        
        .. versionadded:: 2.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_HOSTNAME, [hostname], 's32', '', returnCallback, errorCallback);
    };
    this.setEthernetMACAddress = function(macAddress, returnCallback, errorCallback) {
        /*
        Sets the MAC address of the Ethernet Extension. The Ethernet Extension should
        come configured with a valid MAC address, that is also written on a
        sticker of the extension itself.
        
        The MAC address can be read out again with :func:`GetEthernetStatus`.
        
        .. versionadded:: 2.1.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_MAC_ADDRESS, [macAddress], 'B6', '', returnCallback, errorCallback);
    };
    this.setEthernetWebsocketConfiguration = function(sockets, port, returnCallback, errorCallback) {
        /*
        Sets the Ethernet Websocket configuration. The first parameter sets the number of socket
        connections that are reserved for websockets. The range is 0-7. The connections
        are shared with the plain sockets. Example: If you set the connections to 3,
        there will be 3 websocket and 4 plain socket connections available.
        
        The second parameter is the port for the websocket connections. The port can
        not be the same as the port for the plain socket connections.
        
        The values are stored in the EEPROM and only applied on startup. That means
        you have to restart the Master Brick after configuration.
        
        It is recommended to use the Brick Viewer to set the Ethernet configuration.
        
        The default values are 3 for the socket connections and 4280 for the port.
        
        .. versionadded:: 2.2.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_WEBSOCKET_CONFIGURATION, [sockets, port], 'B H', '', returnCallback, errorCallback);
    };
    this.getEthernetWebsocketConfiguration = function(returnCallback, errorCallback) {
        /*
        Returns the configuration as set by :func:`SetEthernetConfiguration`.
        
        .. versionadded:: 2.2.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_ETHERNET_WEBSOCKET_CONFIGURATION, [], '', 'B H', returnCallback, errorCallback);
    };   
    this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
        /*
        Returns the firmware and protocol version and the name of the Bricklet for a
        given port.
        
        This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
        plugins.
        
        .. versionadded:: 2.0.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 'B B3 s40', returnCallback, errorCallback);
    };
    this.getChipTemperature = function(returnCallback, errorCallback) {
        /*
        Returns the temperature in °C/10 as measured inside the microcontroller. The
        value returned is not the ambient temperature!
        
        The temperature is only proportional to the real temperature and it has an
        accuracy of +-15%. Practically it is only useful as an indicator for
        temperature changes.
        
        .. versionadded:: 1.2.1~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
    };   
    this.reset = function(returnCallback, errorCallback) {
        /*
        Calling this function will reset the Brick. Calling this function
        on a Brick inside of a stack will reset the whole stack.
        
        After a reset you have to create new device objects,
        calling functions on the existing ones will result in
        undefined behavior!
        
        .. versionadded:: 1.2.1~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_RESET, [], '', '', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Brick is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be '0'-'8' (stack position).
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickMaster;

},{"./Device":48}],4:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickServo.DEVICE_IDENTIFIER = 14;
BrickServo.CALLBACK_UNDER_VOLTAGE = 26;
BrickServo.CALLBACK_POSITION_REACHED = 27;
BrickServo.CALLBACK_VELOCITY_REACHED = 28;
BrickServo.FUNCTION_ENABLE = 1;
BrickServo.FUNCTION_DISABLE = 2;
BrickServo.FUNCTION_IS_ENABLED = 3;
BrickServo.FUNCTION_SET_POSITION = 4;
BrickServo.FUNCTION_GET_POSITION = 5;
BrickServo.FUNCTION_GET_CURRENT_POSITION = 6;
BrickServo.FUNCTION_SET_VELOCITY = 7;
BrickServo.FUNCTION_GET_VELOCITY = 8;
BrickServo.FUNCTION_GET_CURRENT_VELOCITY = 9;
BrickServo.FUNCTION_SET_ACCELERATION = 10;
BrickServo.FUNCTION_GET_ACCELERATION = 11;
BrickServo.FUNCTION_SET_OUTPUT_VOLTAGE = 12;
BrickServo.FUNCTION_GET_OUTPUT_VOLTAGE = 13;
BrickServo.FUNCTION_SET_PULSE_WIDTH = 14;
BrickServo.FUNCTION_GET_PULSE_WIDTH = 15;
BrickServo.FUNCTION_SET_DEGREE = 16;
BrickServo.FUNCTION_GET_DEGREE = 17;
BrickServo.FUNCTION_SET_PERIOD = 18;
BrickServo.FUNCTION_GET_PERIOD = 19;
BrickServo.FUNCTION_GET_SERVO_CURRENT = 20;
BrickServo.FUNCTION_GET_OVERALL_CURRENT = 21;
BrickServo.FUNCTION_GET_STACK_INPUT_VOLTAGE = 22;
BrickServo.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE = 23;
BrickServo.FUNCTION_SET_MINIMUM_VOLTAGE = 24;
BrickServo.FUNCTION_GET_MINIMUM_VOLTAGE = 25;
BrickServo.FUNCTION_ENABLE_POSITION_REACHED_CALLBACK = 29;
BrickServo.FUNCTION_DISABLE_POSITION_REACHED_CALLBACK = 30;
BrickServo.FUNCTION_IS_POSITION_REACHED_CALLBACK_ENABLED = 31;
BrickServo.FUNCTION_ENABLE_VELOCITY_REACHED_CALLBACK = 32;
BrickServo.FUNCTION_DISABLE_VELOCITY_REACHED_CALLBACK = 33;
BrickServo.FUNCTION_IS_VELOCITY_REACHED_CALLBACK_ENABLED = 34;
BrickServo.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickServo.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickServo.FUNCTION_RESET = 243;
BrickServo.FUNCTION_GET_IDENTITY = 255;

function BrickServo(uid, ipcon) {
    //Device for controlling up to seven servos
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickServo.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickServo.FUNCTION_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickServo.FUNCTION_DISABLE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickServo.FUNCTION_IS_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_SET_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickServo.FUNCTION_GET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_GET_CURRENT_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_SET_VELOCITY] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickServo.FUNCTION_GET_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_GET_CURRENT_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_SET_ACCELERATION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickServo.FUNCTION_GET_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_SET_OUTPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickServo.FUNCTION_GET_OUTPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_SET_PULSE_WIDTH] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickServo.FUNCTION_GET_PULSE_WIDTH] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_SET_DEGREE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickServo.FUNCTION_GET_DEGREE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_SET_PERIOD] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickServo.FUNCTION_GET_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_GET_SERVO_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_GET_OVERALL_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_GET_STACK_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_SET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickServo.FUNCTION_GET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.CALLBACK_UNDER_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickServo.CALLBACK_POSITION_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickServo.CALLBACK_VELOCITY_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickServo.FUNCTION_ENABLE_POSITION_REACHED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickServo.FUNCTION_DISABLE_POSITION_REACHED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickServo.FUNCTION_IS_POSITION_REACHED_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_ENABLE_VELOCITY_REACHED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickServo.FUNCTION_DISABLE_VELOCITY_REACHED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickServo.FUNCTION_IS_VELOCITY_REACHED_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickServo.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickServo.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickServo.CALLBACK_UNDER_VOLTAGE] = 'H';
    this.callbackFormats[BrickServo.CALLBACK_POSITION_REACHED] = 'B h';
    this.callbackFormats[BrickServo.CALLBACK_VELOCITY_REACHED] = 'B h';

    this.enable = function(servoNum, returnCallback, errorCallback) {
        /*
        Enables a servo (0 to 6). If a servo is enabled, the configured position,
        velocity, acceleration, etc. are applied immediately.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_ENABLE, [servoNum], 'B', '', returnCallback, errorCallback);
    };
    this.disable = function(servoNum, returnCallback, errorCallback) {
        /*
        Disables a servo (0 to 6). Disabled servos are not driven at all, i.e. a
        disabled servo will not hold its position if a load is applied.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_DISABLE, [servoNum], 'B', '', returnCallback, errorCallback);
    };
    this.isEnabled = function(servoNum, returnCallback, errorCallback) {
        /*
        Returns *true* if the specified servo is enabled, *false* otherwise.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_IS_ENABLED, [servoNum], 'B', '?', returnCallback, errorCallback);
    };
    this.setPosition = function(servoNum, position, returnCallback, errorCallback) {
        /*
        Sets the position in °/100 for the specified servo. 
        
        The default range of the position is -9000 to 9000, but it can be specified
        according to your servo with :func:`SetDegree`.
        
        If you want to control a linear servo or RC brushless motor controller or
        similar with the Servo Brick, you can also define lengths or speeds with
        :func:`SetDegree`.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_POSITION, [servoNum, position], 'B h', '', returnCallback, errorCallback);
    };
    this.getPosition = function(servoNum, returnCallback, errorCallback) {
        /*
        Returns the position of the specified servo as set by :func:`SetPosition`.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_POSITION, [servoNum], 'B', 'h', returnCallback, errorCallback);
    };
    this.getCurrentPosition = function(servoNum, returnCallback, errorCallback) {
        /*
        Returns the *current* position of the specified servo. This may not be the
        value of :func:`SetPosition` if the servo is currently approaching a
        position goal.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_CURRENT_POSITION, [servoNum], 'B', 'h', returnCallback, errorCallback);
    };
    this.setVelocity = function(servoNum, velocity, returnCallback, errorCallback) {
        /*
        Sets the maximum velocity of the specified servo in °/100s. The velocity
        is accelerated according to the value set by :func:`SetAcceleration`.
        
        The minimum velocity is 0 (no movement) and the maximum velocity is 65535.
        With a value of 65535 the position will be set immediately (no velocity).
        
        The default value is 65535.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_VELOCITY, [servoNum, velocity], 'B H', '', returnCallback, errorCallback);
    };
    this.getVelocity = function(servoNum, returnCallback, errorCallback) {
        /*
        Returns the velocity of the specified servo as set by :func:`SetVelocity`.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_VELOCITY, [servoNum], 'B', 'H', returnCallback, errorCallback);
    };
    this.getCurrentVelocity = function(servoNum, returnCallback, errorCallback) {
        /*
        Returns the *current* velocity of the specified servo. This may not be the
        value of :func:`SetVelocity` if the servo is currently approaching a
        velocity goal.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_CURRENT_VELOCITY, [servoNum], 'B', 'H', returnCallback, errorCallback);
    };
    this.setAcceleration = function(servoNum, acceleration, returnCallback, errorCallback) {
        /*
        Sets the acceleration of the specified servo in °/100s².
        
        The minimum acceleration is 1 and the maximum acceleration is 65535.
        With a value of 65535 the velocity will be set immediately (no acceleration).
        
        The default value is 65535.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_ACCELERATION, [servoNum, acceleration], 'B H', '', returnCallback, errorCallback);
    };
    this.getAcceleration = function(servoNum, returnCallback, errorCallback) {
        /*
        Returns the acceleration for the specified servo as set by 
        :func:`SetAcceleration`.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_ACCELERATION, [servoNum], 'B', 'H', returnCallback, errorCallback);
    };
    this.setOutputVoltage = function(voltage, returnCallback, errorCallback) {
        /*
        Sets the output voltages with which the servos are driven in mV.
        The minimum output voltage is 2000mV and the maximum output voltage is 
        9000mV.
        
        .. note::
         We recommend that you set this value to the maximum voltage that is
         specified for your servo, most servos achieve their maximum force only
         with high voltages.
        
        The default value is 5000.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_OUTPUT_VOLTAGE, [voltage], 'H', '', returnCallback, errorCallback);
    };
    this.getOutputVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the output voltage as specified by :func:`SetOutputVoltage`.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_OUTPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setPulseWidth = function(servoNum, min, max, returnCallback, errorCallback) {
        /*
        Sets the minimum and maximum pulse width of the specified servo in µs.
        
        Usually, servos are controlled with a 
        `PWM <http://en.wikipedia.org/wiki/Pulse-width_modulation>`__, whereby the
        length of the pulse controls the position of the servo. Every servo has
        different minimum and maximum pulse widths, these can be specified with
        this function.
        
        If you have a datasheet for your servo that specifies the minimum and
        maximum pulse width, you should set the values accordingly. If your servo
        comes without any datasheet you have to find the values via trial and error.
        
        Both values have a range from 1 to 65535 (unsigned 16-bit integer). The
        minimum must be smaller than the maximum.
        
        The default values are 1000µs (1ms) and 2000µs (2ms) for minimum and 
        maximum pulse width.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_PULSE_WIDTH, [servoNum, min, max], 'B H H', '', returnCallback, errorCallback);
    };
    this.getPulseWidth = function(servoNum, returnCallback, errorCallback) {
        /*
        Returns the minimum and maximum pulse width for the specified servo as set by
        :func:`SetPulseWidth`.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_PULSE_WIDTH, [servoNum], 'B', 'H H', returnCallback, errorCallback);
    };
    this.setDegree = function(servoNum, min, max, returnCallback, errorCallback) {
        /*
        Sets the minimum and maximum degree for the specified servo (by default
        given as °/100).
        
        This only specifies the abstract values between which the minimum and maximum
        pulse width is scaled. For example: If you specify a pulse width of 1000µs
        to 2000µs and a degree range of -90° to 90°, a call of :func:`SetPosition`
        with 0 will result in a pulse width of 1500µs 
        (-90° = 1000µs, 90° = 2000µs, etc.).
        
        Possible usage:
        
        * The datasheet of your servo specifies a range of 200° with the middle position
          at 110°. In this case you can set the minimum to -9000 and the maximum to 11000.
        * You measure a range of 220° on your servo and you don't have or need a middle
          position. In this case you can set the minimum to 0 and the maximum to 22000.
        * You have a linear servo with a drive length of 20cm, In this case you could
          set the minimum to 0 and the maximum to 20000. Now you can set the Position
          with :func:`SetPosition` with a resolution of cm/100. Also the velocity will
          have a resolution of cm/100s and the acceleration will have a resolution of
          cm/100s².
        * You don't care about units and just want the highest possible resolution. In
          this case you should set the minimum to -32767 and the maximum to 32767.
        * You have a brushless motor with a maximum speed of 10000 rpm and want to
          control it with a RC brushless motor controller. In this case you can set the
          minimum to 0 and the maximum to 10000. :func:`SetPosition` now controls the rpm.
        
        Both values have a possible range from -32767 to 32767 
        (signed 16-bit integer). The minimum must be smaller than the maximum.
        
        The default values are -9000 and 9000 for the minimum and maximum degree.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_DEGREE, [servoNum, min, max], 'B h h', '', returnCallback, errorCallback);
    };
    this.getDegree = function(servoNum, returnCallback, errorCallback) {
        /*
        Returns the minimum and maximum degree for the specified servo as set by
        :func:`SetDegree`.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_DEGREE, [servoNum], 'B', 'h h', returnCallback, errorCallback);
    };
    this.setPeriod = function(servoNum, period, returnCallback, errorCallback) {
        /*
        Sets the period of the specified servo in µs.
        
        Usually, servos are controlled with a 
        `PWM <http://en.wikipedia.org/wiki/Pulse-width_modulation>`__. Different
        servos expect PWMs with different periods. Most servos run well with a 
        period of about 20ms.
        
        If your servo comes with a datasheet that specifies a period, you should
        set it accordingly. If you don't have a datasheet and you have no idea
        what the correct period is, the default value (19.5ms) will most likely
        work fine. 
        
        The minimum possible period is 1µs and the maximum is 65535µs.
        
        The default value is 19.5ms (19500µs).
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_PERIOD, [servoNum, period], 'B H', '', returnCallback, errorCallback);
    };
    this.getPeriod = function(servoNum, returnCallback, errorCallback) {
        /*
        Returns the period for the specified servo as set by :func:`SetPeriod`.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_PERIOD, [servoNum], 'B', 'H', returnCallback, errorCallback);
    };
    this.getServoCurrent = function(servoNum, returnCallback, errorCallback) {
        /*
        Returns the current consumption of the specified servo in mA.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_SERVO_CURRENT, [servoNum], 'B', 'H', returnCallback, errorCallback);
    };
    this.getOverallCurrent = function(returnCallback, errorCallback) {
        /*
        Returns the current consumption of all servos together in mA.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_OVERALL_CURRENT, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getStackInputVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the stack input voltage in mV. The stack input voltage is the
        voltage that is supplied via the stack, i.e. it is given by a 
        Step-Down or Step-Up Power Supply.
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_STACK_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getExternalInputVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the external input voltage in mV. The external input voltage is
        given via the black power input connector on the Servo Brick. 
         
        If there is an external input voltage and a stack input voltage, the motors
        will be driven by the external input voltage. If there is only a stack 
        voltage present, the motors will be driven by this voltage.
        
        .. warning::
         This means, if you have a high stack voltage and a low external voltage,
         the motors will be driven with the low external voltage. If you then remove
         the external connection, it will immediately be driven by the high
         stack voltage
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setMinimumVoltage = function(voltage, returnCallback, errorCallback) {
        /*
        Sets the minimum voltage in mV, below which the :func:`UnderVoltage` callback
        is triggered. The minimum possible value that works with the Servo Brick is 5V.
        You can use this function to detect the discharge of a battery that is used
        to drive the stepper motor. If you have a fixed power supply, you likely do 
        not need this functionality.
        
        The default value is 5V (5000mV).
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_MINIMUM_VOLTAGE, [voltage], 'H', '', returnCallback, errorCallback);
    };
    this.getMinimumVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the minimum voltage as set by :func:`SetMinimumVoltage`
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_MINIMUM_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.enablePositionReachedCallback = function(returnCallback, errorCallback) {
        /*
        Enables the :func:`PositionReached` callback.
        
        Default is disabled.
        
        .. versionadded:: 2.0.1~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_ENABLE_POSITION_REACHED_CALLBACK, [], '', '', returnCallback, errorCallback);
    };   
    this.disablePositionReachedCallback = function(returnCallback, errorCallback) {
        /*
        Disables the :func:`PositionReached` callback.
        
        Default is disabled.
        
        .. versionadded:: 2.0.1~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_DISABLE_POSITION_REACHED_CALLBACK, [], '', '', returnCallback, errorCallback);
    };   
    this.isPositionReachedCallbackEnabled = function(returnCallback, errorCallback) {
        /*
        Returns *true* if :func:`PositionReached` callback is enabled, *false* otherwise.
        
        .. versionadded:: 2.0.1~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_IS_POSITION_REACHED_CALLBACK_ENABLED, [], '', 'B', returnCallback, errorCallback);
    };   
    this.enableVelocityReachedCallback = function(returnCallback, errorCallback) {
        /*
        Enables the :func:`VelocityReached` callback.
        
        Default is disabled.
        
        .. versionadded:: 2.0.1~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_ENABLE_VELOCITY_REACHED_CALLBACK, [], '', '', returnCallback, errorCallback);
    };   
    this.disableVelocityReachedCallback = function(returnCallback, errorCallback) {
        /*
        Disables the :func:`VelocityReached` callback.
        
        Default is disabled.
        
        .. versionadded:: 2.0.1~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_DISABLE_VELOCITY_REACHED_CALLBACK, [], '', '', returnCallback, errorCallback);
    };   
    this.isVelocityReachedCallbackEnabled = function(returnCallback, errorCallback) {
        /*
        Returns *true* if :func:`VelocityReached` callback is enabled, *false* otherwise.
        
        .. versionadded:: 2.0.1~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_IS_VELOCITY_REACHED_CALLBACK_ENABLED, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
        /*
        Returns the firmware and protocol version and the name of the Bricklet for a
        given port.
        
        This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
        plugins.
        
        .. versionadded:: 2.0.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 'B B3 s40', returnCallback, errorCallback);
    };
    this.getChipTemperature = function(returnCallback, errorCallback) {
        /*
        Returns the temperature in °C/10 as measured inside the microcontroller. The
        value returned is not the ambient temperature!
        
        The temperature is only proportional to the real temperature and it has an
        accuracy of +-15%. Practically it is only useful as an indicator for
        temperature changes.
        
        .. versionadded:: 1.1.3~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
    };   
    this.reset = function(returnCallback, errorCallback) {
        /*
        Calling this function will reset the Brick. Calling this function
        on a Brick inside of a stack will reset the whole stack.
        
        After a reset you have to create new device objects,
        calling functions on the existing ones will result in
        undefined behavior!
        
        .. versionadded:: 1.1.3~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_RESET, [], '', '', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Brick is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be '0'-'8' (stack position).
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickServo;

},{"./Device":48}],5:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickStepper.DEVICE_IDENTIFIER = 15;
BrickStepper.CALLBACK_UNDER_VOLTAGE = 31;
BrickStepper.CALLBACK_POSITION_REACHED = 32;
BrickStepper.CALLBACK_ALL_DATA = 40;
BrickStepper.CALLBACK_NEW_STATE = 41;
BrickStepper.FUNCTION_SET_MAX_VELOCITY = 1;
BrickStepper.FUNCTION_GET_MAX_VELOCITY = 2;
BrickStepper.FUNCTION_GET_CURRENT_VELOCITY = 3;
BrickStepper.FUNCTION_SET_SPEED_RAMPING = 4;
BrickStepper.FUNCTION_GET_SPEED_RAMPING = 5;
BrickStepper.FUNCTION_FULL_BRAKE = 6;
BrickStepper.FUNCTION_SET_CURRENT_POSITION = 7;
BrickStepper.FUNCTION_GET_CURRENT_POSITION = 8;
BrickStepper.FUNCTION_SET_TARGET_POSITION = 9;
BrickStepper.FUNCTION_GET_TARGET_POSITION = 10;
BrickStepper.FUNCTION_SET_STEPS = 11;
BrickStepper.FUNCTION_GET_STEPS = 12;
BrickStepper.FUNCTION_GET_REMAINING_STEPS = 13;
BrickStepper.FUNCTION_SET_STEP_MODE = 14;
BrickStepper.FUNCTION_GET_STEP_MODE = 15;
BrickStepper.FUNCTION_DRIVE_FORWARD = 16;
BrickStepper.FUNCTION_DRIVE_BACKWARD = 17;
BrickStepper.FUNCTION_STOP = 18;
BrickStepper.FUNCTION_GET_STACK_INPUT_VOLTAGE = 19;
BrickStepper.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE = 20;
BrickStepper.FUNCTION_GET_CURRENT_CONSUMPTION = 21;
BrickStepper.FUNCTION_SET_MOTOR_CURRENT = 22;
BrickStepper.FUNCTION_GET_MOTOR_CURRENT = 23;
BrickStepper.FUNCTION_ENABLE = 24;
BrickStepper.FUNCTION_DISABLE = 25;
BrickStepper.FUNCTION_IS_ENABLED = 26;
BrickStepper.FUNCTION_SET_DECAY = 27;
BrickStepper.FUNCTION_GET_DECAY = 28;
BrickStepper.FUNCTION_SET_MINIMUM_VOLTAGE = 29;
BrickStepper.FUNCTION_GET_MINIMUM_VOLTAGE = 30;
BrickStepper.FUNCTION_SET_SYNC_RECT = 33;
BrickStepper.FUNCTION_IS_SYNC_RECT = 34;
BrickStepper.FUNCTION_SET_TIME_BASE = 35;
BrickStepper.FUNCTION_GET_TIME_BASE = 36;
BrickStepper.FUNCTION_GET_ALL_DATA = 37;
BrickStepper.FUNCTION_SET_ALL_DATA_PERIOD = 38;
BrickStepper.FUNCTION_GET_ALL_DATA_PERIOD = 39;
BrickStepper.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickStepper.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickStepper.FUNCTION_RESET = 243;
BrickStepper.FUNCTION_GET_IDENTITY = 255;
BrickStepper.STEP_MODE_FULL_STEP = 1;
BrickStepper.STEP_MODE_HALF_STEP = 2;
BrickStepper.STEP_MODE_QUARTER_STEP = 4;
BrickStepper.STEP_MODE_EIGHTH_STEP = 8;
BrickStepper.STATE_STOP = 1;
BrickStepper.STATE_ACCELERATION = 2;
BrickStepper.STATE_RUN = 3;
BrickStepper.STATE_DEACCELERATION = 4;
BrickStepper.STATE_DIRECTION_CHANGE_TO_FORWARD = 5;
BrickStepper.STATE_DIRECTION_CHANGE_TO_BACKWARD = 6;

function BrickStepper(uid, ipcon) {
    //Device for controlling stepper motors
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickStepper.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickStepper.FUNCTION_SET_MAX_VELOCITY] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_GET_MAX_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_GET_CURRENT_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_SET_SPEED_RAMPING] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_GET_SPEED_RAMPING] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_FULL_BRAKE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_SET_CURRENT_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_GET_CURRENT_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_SET_TARGET_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_GET_TARGET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_SET_STEPS] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_GET_STEPS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_GET_REMAINING_STEPS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_SET_STEP_MODE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_GET_STEP_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_DRIVE_FORWARD] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_DRIVE_BACKWARD] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_STOP] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_GET_STACK_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_GET_CURRENT_CONSUMPTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_SET_MOTOR_CURRENT] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_GET_MOTOR_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_DISABLE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_IS_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_SET_DECAY] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_GET_DECAY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_SET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_GET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.CALLBACK_UNDER_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickStepper.CALLBACK_POSITION_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_SET_SYNC_RECT] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_IS_SYNC_RECT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_SET_TIME_BASE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_GET_TIME_BASE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_GET_ALL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_SET_ALL_DATA_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_GET_ALL_DATA_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.CALLBACK_ALL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickStepper.CALLBACK_NEW_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickStepper.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickStepper.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickStepper.CALLBACK_UNDER_VOLTAGE] = 'H';
    this.callbackFormats[BrickStepper.CALLBACK_POSITION_REACHED] = 'i';
    this.callbackFormats[BrickStepper.CALLBACK_ALL_DATA] = 'H i i H H H';
    this.callbackFormats[BrickStepper.CALLBACK_NEW_STATE] = 'B B';

    this.setMaxVelocity = function(velocity, returnCallback, errorCallback) {
        /*
        Sets the maximum velocity of the stepper motor in steps per second.
        This function does *not* start the motor, it merely sets the maximum
        velocity the stepper motor is accelerated to. To get the motor running use
        either :func:`SetTargetPosition`, :func:`SetSteps`, :func:`DriveForward` or
        :func:`DriveBackward`.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_MAX_VELOCITY, [velocity], 'H', '', returnCallback, errorCallback);
    };
    this.getMaxVelocity = function(returnCallback, errorCallback) {
        /*
        Returns the velocity as set by :func:`SetMaxVelocity`.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_MAX_VELOCITY, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getCurrentVelocity = function(returnCallback, errorCallback) {
        /*
        Returns the *current* velocity of the stepper motor in steps per second.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_CURRENT_VELOCITY, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setSpeedRamping = function(acceleration, deacceleration, returnCallback, errorCallback) {
        /*
        Sets the acceleration and deacceleration of the stepper motor. The values
        are given in *steps/s²*. An acceleration of 1000 means, that
        every second the velocity is increased by 1000 *steps/s*.
        
        For example: If the current velocity is 0 and you want to accelerate to a
        velocity of 8000 *steps/s* in 10 seconds, you should set an acceleration
        of 800 *steps/s²*.
        
        An acceleration/deacceleration of 0 means instantaneous
        acceleration/deacceleration (not recommended)
        
        The default value is 1000 for both
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_SPEED_RAMPING, [acceleration, deacceleration], 'H H', '', returnCallback, errorCallback);
    };
    this.getSpeedRamping = function(returnCallback, errorCallback) {
        /*
        Returns the acceleration and deacceleration as set by 
        :func:`SetSpeedRamping`.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_SPEED_RAMPING, [], '', 'H H', returnCallback, errorCallback);
    };   
    this.fullBrake = function(returnCallback, errorCallback) {
        /*
        Executes an active full brake. 
         
        .. warning::
         This function is for emergency purposes,
         where an immediate brake is necessary. Depending on the current velocity and
         the strength of the motor, a full brake can be quite violent.
        
        Call :func:`Stop` if you just want to stop the motor.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_FULL_BRAKE, [], '', '', returnCallback, errorCallback);
    };   
    this.setCurrentPosition = function(position, returnCallback, errorCallback) {
        /*
        Sets the current steps of the internal step counter. This can be used to
        set the current position to 0 when some kind of starting position
        is reached (e.g. when a CNC machine reaches a corner).
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_CURRENT_POSITION, [position], 'i', '', returnCallback, errorCallback);
    };
    this.getCurrentPosition = function(returnCallback, errorCallback) {
        /*
        Returns the current position of the stepper motor in steps. On startup
        the position is 0. The steps are counted with all possible driving
        functions (:func:`SetTargetPosition`, :func:`SetSteps`, :func:`DriveForward` or
        :func:`DriveBackward`). It also is possible to reset the steps to 0 or
        set them to any other desired value with :func:`SetCurrentPosition`.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_CURRENT_POSITION, [], '', 'i', returnCallback, errorCallback);
    };   
    this.setTargetPosition = function(position, returnCallback, errorCallback) {
        /*
        Sets the target position of the stepper motor in steps. For example,
        if the current position of the motor is 500 and :func:`SetTargetPosition` is
        called with 1000, the stepper motor will drive 500 steps forward. It will
        use the velocity, acceleration and deacceleration as set by
        :func:`SetMaxVelocity` and :func:`SetSpeedRamping`.
        
        A call of :func:`SetTargetPosition` with the parameter *x* is equivalent to
        a call of :func:`SetSteps` with the parameter 
        (*x* - :func:`GetCurrentPosition`).
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_TARGET_POSITION, [position], 'i', '', returnCallback, errorCallback);
    };
    this.getTargetPosition = function(returnCallback, errorCallback) {
        /*
        Returns the last target position as set by :func:`SetTargetPosition`.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_TARGET_POSITION, [], '', 'i', returnCallback, errorCallback);
    };   
    this.setSteps = function(steps, returnCallback, errorCallback) {
        /*
        Sets the number of steps the stepper motor should run. Positive values
        will drive the motor forward and negative values backward. 
        The velocity, acceleration and deacceleration as set by
        :func:`SetMaxVelocity` and :func:`SetSpeedRamping` will be used.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_STEPS, [steps], 'i', '', returnCallback, errorCallback);
    };
    this.getSteps = function(returnCallback, errorCallback) {
        /*
        Returns the last steps as set by :func:`SetSteps`.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_STEPS, [], '', 'i', returnCallback, errorCallback);
    };   
    this.getRemainingSteps = function(returnCallback, errorCallback) {
        /*
        Returns the remaining steps of the last call of :func:`SetSteps`.
        For example, if :func:`SetSteps` is called with 2000 and 
        :func:`GetRemainingSteps` is called after the motor has run for 500 steps,
        it will return 1500.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_REMAINING_STEPS, [], '', 'i', returnCallback, errorCallback);
    };   
    this.setStepMode = function(mode, returnCallback, errorCallback) {
        /*
        Sets the step mode of the stepper motor. Possible values are:
        
        * Full Step = 1
        * Half Step = 2
        * Quarter Step = 4
        * Eighth Step = 8
        
        A higher value will increase the resolution and
        decrease the torque of the stepper motor.
        
        The default value is 8 (Eighth Step).
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_STEP_MODE, [mode], 'B', '', returnCallback, errorCallback);
    };
    this.getStepMode = function(returnCallback, errorCallback) {
        /*
        Returns the step mode as set by :func:`SetStepMode`.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_STEP_MODE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.driveForward = function(returnCallback, errorCallback) {
        /*
        Drives the stepper motor forward until :func:`DriveBackward` or
        :func:`Stop` is called. The velocity, acceleration and deacceleration as 
        set by :func:`SetMaxVelocity` and :func:`SetSpeedRamping` will be used.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_DRIVE_FORWARD, [], '', '', returnCallback, errorCallback);
    };   
    this.driveBackward = function(returnCallback, errorCallback) {
        /*
        Drives the stepper motor backward until :func:`DriveForward` or
        :func:`Stop` is triggered. The velocity, acceleration and deacceleration as
        set by :func:`SetMaxVelocity` and :func:`SetSpeedRamping` will be used.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_DRIVE_BACKWARD, [], '', '', returnCallback, errorCallback);
    };   
    this.stop = function(returnCallback, errorCallback) {
        /*
        Stops the stepper motor with the deacceleration as set by 
        :func:`SetSpeedRamping`.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_STOP, [], '', '', returnCallback, errorCallback);
    };   
    this.getStackInputVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the stack input voltage in mV. The stack input voltage is the
        voltage that is supplied via the stack, i.e. it is given by a 
        Step-Down or Step-Up Power Supply.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_STACK_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getExternalInputVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the external input voltage in mV. The external input voltage is
        given via the black power input connector on the Stepper Brick. 
         
        If there is an external input voltage and a stack input voltage, the motor
        will be driven by the external input voltage. If there is only a stack 
        voltage present, the motor will be driven by this voltage.
        
        .. warning::
         This means, if you have a high stack voltage and a low external voltage,
         the motor will be driven with the low external voltage. If you then remove
         the external connection, it will immediately be driven by the high
         stack voltage
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getCurrentConsumption = function(returnCallback, errorCallback) {
        /*
        Returns the current consumption of the motor in mA.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_CURRENT_CONSUMPTION, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setMotorCurrent = function(current, returnCallback, errorCallback) {
        /*
        Sets the current in mA with which the motor will be driven.
        The minimum value is 100mA, the maximum value 2291mA and the 
        default value is 800mA.
        
        .. warning::
         Do not set this value above the specifications of your stepper motor.
         Otherwise it may damage your motor.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_MOTOR_CURRENT, [current], 'H', '', returnCallback, errorCallback);
    };
    this.getMotorCurrent = function(returnCallback, errorCallback) {
        /*
        Returns the current as set by :func:`SetMotorCurrent`.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_MOTOR_CURRENT, [], '', 'H', returnCallback, errorCallback);
    };   
    this.enable = function(returnCallback, errorCallback) {
        /*
        Enables the driver chip. The driver parameters can be configured (maximum velocity,
        acceleration, etc) before it is enabled.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_ENABLE, [], '', '', returnCallback, errorCallback);
    };   
    this.disable = function(returnCallback, errorCallback) {
        /*
        Disables the driver chip. The configurations are kept (maximum velocity,
        acceleration, etc) but the motor is not driven until it is enabled again.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_DISABLE, [], '', '', returnCallback, errorCallback);
    };   
    this.isEnabled = function(returnCallback, errorCallback) {
        /*
        Returns *true* if the driver chip is enabled, *false* otherwise.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_IS_ENABLED, [], '', '?', returnCallback, errorCallback);
    };   
    this.setDecay = function(decay, returnCallback, errorCallback) {
        /*
        Sets the decay mode of the stepper motor. The possible value range is
        between 0 and 65535. A value of 0 sets the fast decay mode, a value of
        65535 sets the slow decay mode and a value in between sets the mixed
        decay mode.
        
        Changing the decay mode is only possible if synchronous rectification
        is enabled (see :func:`SetSyncRect`).
        
        For a good explanation of the different decay modes see 
        `this <http://ebldc.com/?p=86/>`__ blog post by Avayan.
        
        A good decay mode is unfortunately different for every motor. The best
        way to work out a good decay mode for your stepper motor, if you can't
        measure the current with an oscilloscope, is to listen to the sound of
        the motor. If the value is too low, you often hear a high pitched 
        sound and if it is too high you can often hear a humming sound.
        
        Generally, fast decay mode (small value) will be noisier but also
        allow higher motor speeds.
        
        The default value is 10000.
        
        .. note::
         There is unfortunately no formula to calculate a perfect decay
         mode for a given stepper motor. If you have problems with loud noises
         or the maximum motor speed is too slow, you should try to tinker with
         the decay value
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_DECAY, [decay], 'H', '', returnCallback, errorCallback);
    };
    this.getDecay = function(returnCallback, errorCallback) {
        /*
        Returns the decay mode as set by :func:`SetDecay`.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_DECAY, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setMinimumVoltage = function(voltage, returnCallback, errorCallback) {
        /*
        Sets the minimum voltage in mV, below which the :func:`UnderVoltage` callback
        is triggered. The minimum possible value that works with the Stepper Brick is 8V.
        You can use this function to detect the discharge of a battery that is used
        to drive the stepper motor. If you have a fixed power supply, you likely do 
        not need this functionality.
        
        The default value is 8V.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_MINIMUM_VOLTAGE, [voltage], 'H', '', returnCallback, errorCallback);
    };
    this.getMinimumVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the minimum voltage as set by :func:`SetMinimumVoltage`.
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_MINIMUM_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setSyncRect = function(syncRect, returnCallback, errorCallback) {
        /*
        Turns synchronous rectification on or off (*true* or *false*).
        
        With synchronous rectification on, the decay can be changed
        (see :func:`SetDecay`). Without synchronous rectification fast
        decay is used.
        
        For an explanation of synchronous rectification see 
        `here <http://en.wikipedia.org/wiki/Active_rectification>`__.
        
        .. warning::
         If you want to use high speeds (> 10000 steps/s) for a large 
         stepper motor with a large inductivity we strongly
         suggest that you disable synchronous rectification. Otherwise the
         Brick may not be able to cope with the load and overheat.
        
        The default value is *false*.
        
        .. versionadded:: 1.1.4~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_SYNC_RECT, [syncRect], '?', '', returnCallback, errorCallback);
    };
    this.isSyncRect = function(returnCallback, errorCallback) {
        /*
        Returns *true* if synchronous rectification is enabled, *false* otherwise.
        
        .. versionadded:: 1.1.4~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_IS_SYNC_RECT, [], '', '?', returnCallback, errorCallback);
    };   
    this.setTimeBase = function(timeBase, returnCallback, errorCallback) {
        /*
        Sets the time base of the velocity and the acceleration of the stepper brick
        (in seconds).
        
        For example, if you want to make one step every 1.5 seconds, you can set 
        the time base to 15 and the velocity to 10. Now the velocity is 
        10steps/15s = 1steps/1.5s.
        
        The default value is 1.
        
        .. versionadded:: 1.1.6~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_TIME_BASE, [timeBase], 'I', '', returnCallback, errorCallback);
    };
    this.getTimeBase = function(returnCallback, errorCallback) {
        /*
        Returns the time base as set by :func:`SetTimeBase`.
        
        .. versionadded:: 1.1.6~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_TIME_BASE, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getAllData = function(returnCallback, errorCallback) {
        /*
        Returns the following parameters: The current velocity,
        the current position, the remaining steps, the stack voltage, the external
        voltage and the current consumption of the stepper motor.
        
        There is also a callback for this function, see :func:`AllData`.
        
        .. versionadded:: 1.1.6~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_ALL_DATA, [], '', 'H i i H H H', returnCallback, errorCallback);
    };   
    this.setAllDataPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AllData` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        .. versionadded:: 1.1.6~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_ALL_DATA_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAllDataPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAllDataPeriod`.
        
        .. versionadded:: 1.1.6~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_ALL_DATA_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
        /*
        Returns the firmware and protocol version and the name of the Bricklet for a
        given port.
        
        This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
        plugins.
        
        .. versionadded:: 2.0.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 'B B3 s40', returnCallback, errorCallback);
    };
    this.getChipTemperature = function(returnCallback, errorCallback) {
        /*
        Returns the temperature in °C/10 as measured inside the microcontroller. The
        value returned is not the ambient temperature!
        
        The temperature is only proportional to the real temperature and it has an
        accuracy of +-15%. Practically it is only useful as an indicator for
        temperature changes.
        
        .. versionadded:: 1.1.4~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
    };   
    this.reset = function(returnCallback, errorCallback) {
        /*
        Calling this function will reset the Brick. Calling this function
        on a Brick inside of a stack will reset the whole stack.
        
        After a reset you have to create new device objects,
        calling functions on the existing ones will result in
        undefined behavior!
        
        .. versionadded:: 1.1.4~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_RESET, [], '', '', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Brick is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be '0'-'8' (stack position).
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Firmware)
        */
        this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickStepper;

},{"./Device":48}],6:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletAmbientLight.DEVICE_IDENTIFIER = 21;
BrickletAmbientLight.CALLBACK_ILLUMINANCE = 13;
BrickletAmbientLight.CALLBACK_ANALOG_VALUE = 14;
BrickletAmbientLight.CALLBACK_ILLUMINANCE_REACHED = 15;
BrickletAmbientLight.CALLBACK_ANALOG_VALUE_REACHED = 16;
BrickletAmbientLight.FUNCTION_GET_ILLUMINANCE = 1;
BrickletAmbientLight.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletAmbientLight.FUNCTION_SET_ILLUMINANCE_CALLBACK_PERIOD = 3;
BrickletAmbientLight.FUNCTION_GET_ILLUMINANCE_CALLBACK_PERIOD = 4;
BrickletAmbientLight.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletAmbientLight.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletAmbientLight.FUNCTION_SET_ILLUMINANCE_CALLBACK_THRESHOLD = 7;
BrickletAmbientLight.FUNCTION_GET_ILLUMINANCE_CALLBACK_THRESHOLD = 8;
BrickletAmbientLight.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletAmbientLight.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletAmbientLight.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletAmbientLight.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletAmbientLight.FUNCTION_GET_IDENTITY = 255;
BrickletAmbientLight.THRESHOLD_OPTION_OFF = 'x';
BrickletAmbientLight.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletAmbientLight.THRESHOLD_OPTION_INSIDE = 'i';
BrickletAmbientLight.THRESHOLD_OPTION_SMALLER = '<';
BrickletAmbientLight.THRESHOLD_OPTION_GREATER = '>';

function BrickletAmbientLight(uid, ipcon) {
    //Device for sensing Ambient Light
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletAmbientLight.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletAmbientLight.FUNCTION_GET_ILLUMINANCE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAmbientLight.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAmbientLight.FUNCTION_SET_ILLUMINANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletAmbientLight.FUNCTION_GET_ILLUMINANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAmbientLight.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletAmbientLight.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAmbientLight.FUNCTION_SET_ILLUMINANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletAmbientLight.FUNCTION_GET_ILLUMINANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAmbientLight.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletAmbientLight.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAmbientLight.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletAmbientLight.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAmbientLight.CALLBACK_ILLUMINANCE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletAmbientLight.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletAmbientLight.CALLBACK_ILLUMINANCE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletAmbientLight.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletAmbientLight.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletAmbientLight.CALLBACK_ILLUMINANCE] = 'H';
    this.callbackFormats[BrickletAmbientLight.CALLBACK_ANALOG_VALUE] = 'H';
    this.callbackFormats[BrickletAmbientLight.CALLBACK_ILLUMINANCE_REACHED] = 'H';
    this.callbackFormats[BrickletAmbientLight.CALLBACK_ANALOG_VALUE_REACHED] = 'H';

    this.getIlluminance = function(returnCallback, errorCallback) {
        /*
        Returns the illuminance of the ambient light sensor. The value
        has a range of 0 to 9000 and is given in Lux/10, i.e. a value
        of 4500 means that an illuminance of 450 Lux is measured.
        
        If you want to get the illuminance periodically, it is recommended to use the
        callback :func:`Illuminance` and set the period with 
        :func:`SetIlluminanceCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_GET_ILLUMINANCE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getAnalogValue = function(returnCallback, errorCallback) {
        /*
        Returns the value as read by a 12-bit analog-to-digital converter.
        The value is between 0 and 4095.
        
        .. note::
         The value returned by :func:`GetIlluminance` is averaged over several samples
         to yield less noise, while :func:`GetAnalogValue` gives back raw
         unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
         if you need the full resolution of the analog-to-digital converter.
        
         Also, the analog-to-digital converter covers three different ranges that are
         set dynamically depending on the light intensity. It is impossible to
         distinguish between these ranges with the analog value.
        
        If you want the analog value periodically, it is recommended to use the 
        callback :func:`AnalogValue` and set the period with 
        :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setIlluminanceCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Illuminance` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Illuminance` is only triggered if the illuminance has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_SET_ILLUMINANCE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getIlluminanceCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetIlluminanceCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_GET_ILLUMINANCE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AnalogValue` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`AnalogValue` is only triggered if the analog value has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setIlluminanceCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`IlluminanceReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the illuminance is *outside* the min and max values"
         "'i'",    "Callback is triggered when the illuminance is *inside* the min and max values"
         "'<'",    "Callback is triggered when the illuminance is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the illuminance is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_SET_ILLUMINANCE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getIlluminanceCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetIlluminanceCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_GET_ILLUMINANCE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AnalogValueReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
         "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
         "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`IlluminanceReached`,
        * :func:`AnalogValueReached`
        
        are triggered, if the thresholds
        
        * :func:`SetIlluminanceCallbackThreshold`,
        * :func:`SetAnalogValueCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletAmbientLight.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletAmbientLight;

},{"./Device":48}],7:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletAnalogIn.DEVICE_IDENTIFIER = 219;
BrickletAnalogIn.CALLBACK_VOLTAGE = 13;
BrickletAnalogIn.CALLBACK_ANALOG_VALUE = 14;
BrickletAnalogIn.CALLBACK_VOLTAGE_REACHED = 15;
BrickletAnalogIn.CALLBACK_ANALOG_VALUE_REACHED = 16;
BrickletAnalogIn.FUNCTION_GET_VOLTAGE = 1;
BrickletAnalogIn.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletAnalogIn.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD = 3;
BrickletAnalogIn.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD = 4;
BrickletAnalogIn.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletAnalogIn.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletAnalogIn.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD = 7;
BrickletAnalogIn.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD = 8;
BrickletAnalogIn.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletAnalogIn.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletAnalogIn.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletAnalogIn.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletAnalogIn.FUNCTION_SET_RANGE = 17;
BrickletAnalogIn.FUNCTION_GET_RANGE = 18;
BrickletAnalogIn.FUNCTION_SET_AVERAGING = 19;
BrickletAnalogIn.FUNCTION_GET_AVERAGING = 20;
BrickletAnalogIn.FUNCTION_GET_IDENTITY = 255;
BrickletAnalogIn.THRESHOLD_OPTION_OFF = 'x';
BrickletAnalogIn.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletAnalogIn.THRESHOLD_OPTION_INSIDE = 'i';
BrickletAnalogIn.THRESHOLD_OPTION_SMALLER = '<';
BrickletAnalogIn.THRESHOLD_OPTION_GREATER = '>';
BrickletAnalogIn.RANGE_AUTOMATIC = 0;
BrickletAnalogIn.RANGE_UP_TO_6V = 1;
BrickletAnalogIn.RANGE_UP_TO_10V = 2;
BrickletAnalogIn.RANGE_UP_TO_36V = 3;
BrickletAnalogIn.RANGE_UP_TO_45V = 4;
BrickletAnalogIn.RANGE_UP_TO_3V = 5;

function BrickletAnalogIn(uid, ipcon) {
    //Device for sensing Voltages between 0 and 45V
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletAnalogIn.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 2];
    this.responseExpected[BrickletAnalogIn.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAnalogIn.CALLBACK_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletAnalogIn.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletAnalogIn.CALLBACK_VOLTAGE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletAnalogIn.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_SET_RANGE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_GET_RANGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_SET_AVERAGING] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_GET_AVERAGING] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAnalogIn.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletAnalogIn.CALLBACK_VOLTAGE] = 'H';
    this.callbackFormats[BrickletAnalogIn.CALLBACK_ANALOG_VALUE] = 'H';
    this.callbackFormats[BrickletAnalogIn.CALLBACK_VOLTAGE_REACHED] = 'H';
    this.callbackFormats[BrickletAnalogIn.CALLBACK_ANALOG_VALUE_REACHED] = 'H';

    this.getVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the voltage of the sensor. The value is in mV and
        between 0V and 45V. The resolution between 0 and 6V is about 2mV.
        Between 6 and 45V the resolution is about 10mV.
        
        If you want to get the voltage periodically, it is recommended to use the
        callback :func:`Voltage` and set the period with 
        :func:`SetVoltageCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_GET_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getAnalogValue = function(returnCallback, errorCallback) {
        /*
        Returns the value as read by a 12-bit analog-to-digital converter.
        The value is between 0 and 4095.
        
        .. note::
         The value returned by :func:`GetVoltage` is averaged over several samples
         to yield less noise, while :func:`GetAnalogValue` gives back raw
         unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
         if you need the full resolution of the analog-to-digital converter.
        
        If you want the analog value periodically, it is recommended to use the 
        callback :func:`AnalogValue` and set the period with 
        :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Voltage` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Voltage` is only triggered if the voltage has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getVoltageCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetVoltageCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AnalogValue` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`AnalogValue` is only triggered if the analog value has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setVoltageCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`VoltageReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the voltage is *outside* the min and max values"
         "'i'",    "Callback is triggered when the voltage is *inside* the min and max values"
         "'<'",    "Callback is triggered when the voltage is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the voltage is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getVoltageCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetVoltageCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AnalogValueReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
         "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
         "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`VoltageReached`,
        * :func:`AnalogValueReached`
        
        are triggered, if the thresholds
        
        * :func:`SetVoltageCallbackThreshold`,
        * :func:`SetAnalogValueCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setRange = function(range, returnCallback, errorCallback) {
        /*
        Sets the measurement range. Possible ranges:
        
        * 0: Automatically switched
        * 1: 0V - 6.05V, ~1.48mV resolution
        * 2: 0V - 10.32V, ~2.52mV resolution
        * 3: 0V - 36.30V, ~8.86mV resolution
        * 4: 0V - 45.00V, ~11.25mV resolution
        * 5: 0V - 3.3V, ~0.81mV resolution, new in version 2.0.3 (Plugin)
        
        The default measurement range is 0.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_SET_RANGE, [range], 'B', '', returnCallback, errorCallback);
    };
    this.getRange = function(returnCallback, errorCallback) {
        /*
        Returns the measurement range as set by :func:`SetRange`.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_GET_RANGE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setAveraging = function(average, returnCallback, errorCallback) {
        /*
        Set the length of a averaging for the voltage value.
        
        Setting the length to 0 will turn the averaging completely off. If the
        averaging is off, there is more noise on the data, but the data is without
        delay.
        
        The default value is 50.
        
        .. versionadded:: 2.0.3~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_SET_AVERAGING, [average], 'B', '', returnCallback, errorCallback);
    };
    this.getAveraging = function(returnCallback, errorCallback) {
        /*
        Returns the averaging configuration as set by :func:`SetAveraging`.
        
        .. versionadded:: 2.0.3~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_GET_AVERAGING, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletAnalogIn.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletAnalogIn;

},{"./Device":48}],8:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletAnalogOut.DEVICE_IDENTIFIER = 220;
BrickletAnalogOut.FUNCTION_SET_VOLTAGE = 1;
BrickletAnalogOut.FUNCTION_GET_VOLTAGE = 2;
BrickletAnalogOut.FUNCTION_SET_MODE = 3;
BrickletAnalogOut.FUNCTION_GET_MODE = 4;
BrickletAnalogOut.FUNCTION_GET_IDENTITY = 255;
BrickletAnalogOut.MODE_ANALOG_VALUE = 0;
BrickletAnalogOut.MODE_1K_TO_GROUND = 1;
BrickletAnalogOut.MODE_100K_TO_GROUND = 2;
BrickletAnalogOut.MODE_500K_TO_GROUND = 3;

function BrickletAnalogOut(uid, ipcon) {
    //Device for output of voltage between 0 and 5V
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletAnalogOut.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletAnalogOut.FUNCTION_SET_VOLTAGE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletAnalogOut.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAnalogOut.FUNCTION_SET_MODE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletAnalogOut.FUNCTION_GET_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletAnalogOut.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.setVoltage = function(voltage, returnCallback, errorCallback) {
        /*
        Sets the voltage in mV. The possible range is 0V to 5V (0-5000).
        Calling this function will set the mode to 0 (see :func:`SetMode`).
        
        The default value is 0 (with mode 1).
        */
        this.ipcon.sendRequest(this, BrickletAnalogOut.FUNCTION_SET_VOLTAGE, [voltage], 'H', '', returnCallback, errorCallback);
    };
    this.getVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the voltage as set by :func:`SetVoltage`.
        */
        this.ipcon.sendRequest(this, BrickletAnalogOut.FUNCTION_GET_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setMode = function(mode, returnCallback, errorCallback) {
        /*
        Sets the mode of the analog value. Possible modes:
        
        * 0: Normal Mode (Analog value as set by :func:`SetVoltage` is applied)
        * 1: 1k Ohm resistor to ground
        * 2: 100k Ohm resistor to ground
        * 3: 500k Ohm resistor to ground
        
        Setting the mode to 0 will result in an output voltage of 0. You can jump
        to a higher output voltage directly by calling :func:`SetVoltage`.
        
        The default mode is 1.
        */
        this.ipcon.sendRequest(this, BrickletAnalogOut.FUNCTION_SET_MODE, [mode], 'B', '', returnCallback, errorCallback);
    };
    this.getMode = function(returnCallback, errorCallback) {
        /*
        Returns the mode as set by :func:`SetMode`.
        */
        this.ipcon.sendRequest(this, BrickletAnalogOut.FUNCTION_GET_MODE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletAnalogOut.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletAnalogOut;

},{"./Device":48}],9:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletBarometer.DEVICE_IDENTIFIER = 221;
BrickletBarometer.CALLBACK_AIR_PRESSURE = 15;
BrickletBarometer.CALLBACK_ALTITUDE = 16;
BrickletBarometer.CALLBACK_AIR_PRESSURE_REACHED = 17;
BrickletBarometer.CALLBACK_ALTITUDE_REACHED = 18;
BrickletBarometer.FUNCTION_GET_AIR_PRESSURE = 1;
BrickletBarometer.FUNCTION_GET_ALTITUDE = 2;
BrickletBarometer.FUNCTION_SET_AIR_PRESSURE_CALLBACK_PERIOD = 3;
BrickletBarometer.FUNCTION_GET_AIR_PRESSURE_CALLBACK_PERIOD = 4;
BrickletBarometer.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD = 5;
BrickletBarometer.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD = 6;
BrickletBarometer.FUNCTION_SET_AIR_PRESSURE_CALLBACK_THRESHOLD = 7;
BrickletBarometer.FUNCTION_GET_AIR_PRESSURE_CALLBACK_THRESHOLD = 8;
BrickletBarometer.FUNCTION_SET_ALTITUDE_CALLBACK_THRESHOLD = 9;
BrickletBarometer.FUNCTION_GET_ALTITUDE_CALLBACK_THRESHOLD = 10;
BrickletBarometer.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletBarometer.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletBarometer.FUNCTION_SET_REFERENCE_AIR_PRESSURE = 13;
BrickletBarometer.FUNCTION_GET_CHIP_TEMPERATURE = 14;
BrickletBarometer.FUNCTION_GET_REFERENCE_AIR_PRESSURE = 19;
BrickletBarometer.FUNCTION_SET_AVERAGING = 20;
BrickletBarometer.FUNCTION_GET_AVERAGING = 21;
BrickletBarometer.FUNCTION_GET_IDENTITY = 255;
BrickletBarometer.THRESHOLD_OPTION_OFF = 'x';
BrickletBarometer.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletBarometer.THRESHOLD_OPTION_INSIDE = 'i';
BrickletBarometer.THRESHOLD_OPTION_SMALLER = '<';
BrickletBarometer.THRESHOLD_OPTION_GREATER = '>';

function BrickletBarometer(uid, ipcon) {
    //Device for sensing air pressure and altitude changes
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletBarometer.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 1];
    this.responseExpected[BrickletBarometer.FUNCTION_GET_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_GET_ALTITUDE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_SET_AIR_PRESSURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_GET_AIR_PRESSURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_SET_AIR_PRESSURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_GET_AIR_PRESSURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_SET_ALTITUDE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_GET_ALTITUDE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_SET_REFERENCE_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletBarometer.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletBarometer.CALLBACK_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletBarometer.CALLBACK_ALTITUDE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletBarometer.CALLBACK_AIR_PRESSURE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletBarometer.CALLBACK_ALTITUDE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletBarometer.FUNCTION_GET_REFERENCE_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_SET_AVERAGING] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletBarometer.FUNCTION_GET_AVERAGING] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletBarometer.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletBarometer.CALLBACK_AIR_PRESSURE] = 'i';
    this.callbackFormats[BrickletBarometer.CALLBACK_ALTITUDE] = 'i';
    this.callbackFormats[BrickletBarometer.CALLBACK_AIR_PRESSURE_REACHED] = 'i';
    this.callbackFormats[BrickletBarometer.CALLBACK_ALTITUDE_REACHED] = 'i';

    this.getAirPressure = function(returnCallback, errorCallback) {
        /*
        Returns the air pressure of the air pressure sensor. The value
        has a range of 10000 to 1200000 and is given in mbar/1000, i.e. a value
        of 1001092 means that an air pressure of 1001.092 mbar is measured.
        
        If you want to get the air pressure periodically, it is recommended to use the
        callback :func:`AirPressure` and set the period with
        :func:`SetAirPressureCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_AIR_PRESSURE, [], '', 'i', returnCallback, errorCallback);
    };   
    this.getAltitude = function(returnCallback, errorCallback) {
        /*
        Returns the relative altitude of the air pressure sensor. The value is given in
        cm and is calculated based on the difference between the current air pressure
        and the reference air pressure that can be set with :func:`SetReferenceAirPressure`.
        
        If you want to get the altitude periodically, it is recommended to use the
        callback :func:`Altitude` and set the period with
        :func:`SetAltitudeCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_ALTITUDE, [], '', 'i', returnCallback, errorCallback);
    };   
    this.setAirPressureCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AirPressure` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`AirPressure` is only triggered if the air pressure has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_AIR_PRESSURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAirPressureCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAirPressureCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_AIR_PRESSURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAltitudeCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Altitude` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Altitude` is only triggered if the altitude has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAltitudeCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAltitudeCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAirPressureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AirPressureReached` callback.
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the air pressure is *outside* the min and max values"
         "'i'",    "Callback is triggered when the air pressure is *inside* the min and max values"
         "'<'",    "Callback is triggered when the air pressure is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the air pressure is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_AIR_PRESSURE_CALLBACK_THRESHOLD, [option, min, max], 'c i i', '', returnCallback, errorCallback);
    };
    this.getAirPressureCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAirPressureCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_AIR_PRESSURE_CALLBACK_THRESHOLD, [], '', 'c i i', returnCallback, errorCallback);
    };   
    this.setAltitudeCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AltitudeReached` callback.
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the altitude is *outside* the min and max values"
         "'i'",    "Callback is triggered when the altitude is *inside* the min and max values"
         "'<'",    "Callback is triggered when the altitude is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the altitude is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_ALTITUDE_CALLBACK_THRESHOLD, [option, min, max], 'c i i', '', returnCallback, errorCallback);
    };
    this.getAltitudeCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAltitudeCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_ALTITUDE_CALLBACK_THRESHOLD, [], '', 'c i i', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`AirPressureReached`,
        * :func:`AltitudeReached`
        
        are triggered, if the thresholds
        
        * :func:`SetAirPressureCallbackThreshold`,
        * :func:`SetAltitudeCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setReferenceAirPressure = function(airPressure, returnCallback, errorCallback) {
        /*
        Sets the reference air pressure in mbar/1000 for the altitude calculation.
        Setting the reference to the current air pressure results in a calculated
        altitude of 0cm. Passing 0 is a shortcut for passing the current air pressure as
        reference.
        
        Well known reference values are the Q codes
        `QNH <http://en.wikipedia.org/wiki/QNH>`__ and
        `QFE <http://en.wikipedia.org/wiki/Mean_sea_level_pressure#Mean_sea_level_pressure>`__
        used in aviation.
        
        The default value is 1013.25mbar.
        
        .. versionadded:: 1.1.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_REFERENCE_AIR_PRESSURE, [airPressure], 'i', '', returnCallback, errorCallback);
    };
    this.getChipTemperature = function(returnCallback, errorCallback) {
        /*
        Returns the temperature of the air pressure sensor. The value
        has a range of -4000 to 8500 and is given in °C/100, i.e. a value
        of 2007 means that a temperature of 20.07 °C is measured.
        
        This temperature is used internally for temperature compensation of the air
        pressure measurement. It is not as accurate as the temperature measured by the
        :ref:`temperature_bricklet` or the :ref:`temperature_ir_bricklet`.
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
    };   
    this.getReferenceAirPressure = function(returnCallback, errorCallback) {
        /*
        Returns the reference air pressure as set by :func:`SetReferenceAirPressure`.
        
        .. versionadded:: 1.1.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_REFERENCE_AIR_PRESSURE, [], '', 'i', returnCallback, errorCallback);
    };   
    this.setAveraging = function(movingAveragePressure, averagePressure, averageTemperature, returnCallback, errorCallback) {
        /*
        Sets the different averaging parameters. It is possible to set
        the length of a normal averaging for the temperature and pressure,
        as well as an additional length of a 
        `moving average <http://en.wikipedia.org/wiki/Moving_average>`__ 
        for the pressure. The moving average is calculated from the normal 
        averages.  There is no moving average for the temperature.
        
        The maximum length for the pressure average is 10, for the
        temperature average is 255 and for the moving average is 25.
        
        Setting the all three parameters to 0 will turn the averaging
        completely off. If the averaging is off, there is lots of noise
        on the data, but the data is without delay. Thus we recommend
        to turn the averaging off if the Barometer Bricklet data is
        to be used for sensor fusion with other sensors.
        
        The default values are 10 for the normal averages and 25 for the
        moving average.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_AVERAGING, [movingAveragePressure, averagePressure, averageTemperature], 'B B B', '', returnCallback, errorCallback);
    };
    this.getAveraging = function(returnCallback, errorCallback) {
        /*
        Returns the averaging configuration as set by :func:`SetAveraging`.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_AVERAGING, [], '', 'B B B', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletBarometer;

},{"./Device":48}],10:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletCurrent12.DEVICE_IDENTIFIER = 23;
BrickletCurrent12.CALLBACK_CURRENT = 15;
BrickletCurrent12.CALLBACK_ANALOG_VALUE = 16;
BrickletCurrent12.CALLBACK_CURRENT_REACHED = 17;
BrickletCurrent12.CALLBACK_ANALOG_VALUE_REACHED = 18;
BrickletCurrent12.CALLBACK_OVER_CURRENT = 19;
BrickletCurrent12.FUNCTION_GET_CURRENT = 1;
BrickletCurrent12.FUNCTION_CALIBRATE = 2;
BrickletCurrent12.FUNCTION_IS_OVER_CURRENT = 3;
BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE = 4;
BrickletCurrent12.FUNCTION_SET_CURRENT_CALLBACK_PERIOD = 5;
BrickletCurrent12.FUNCTION_GET_CURRENT_CALLBACK_PERIOD = 6;
BrickletCurrent12.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 7;
BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 8;
BrickletCurrent12.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD = 9;
BrickletCurrent12.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD = 10;
BrickletCurrent12.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 11;
BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 12;
BrickletCurrent12.FUNCTION_SET_DEBOUNCE_PERIOD = 13;
BrickletCurrent12.FUNCTION_GET_DEBOUNCE_PERIOD = 14;
BrickletCurrent12.FUNCTION_GET_IDENTITY = 255;
BrickletCurrent12.THRESHOLD_OPTION_OFF = 'x';
BrickletCurrent12.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletCurrent12.THRESHOLD_OPTION_INSIDE = 'i';
BrickletCurrent12.THRESHOLD_OPTION_SMALLER = '<';
BrickletCurrent12.THRESHOLD_OPTION_GREATER = '>';

function BrickletCurrent12(uid, ipcon) {
    //Device for sensing current of up to 12.5A
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletCurrent12.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletCurrent12.FUNCTION_GET_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent12.FUNCTION_CALIBRATE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletCurrent12.FUNCTION_IS_OVER_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent12.FUNCTION_SET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletCurrent12.FUNCTION_GET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent12.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent12.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletCurrent12.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent12.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent12.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletCurrent12.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent12.CALLBACK_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletCurrent12.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletCurrent12.CALLBACK_CURRENT_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletCurrent12.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletCurrent12.CALLBACK_OVER_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletCurrent12.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletCurrent12.CALLBACK_CURRENT] = 'h';
    this.callbackFormats[BrickletCurrent12.CALLBACK_ANALOG_VALUE] = 'H';
    this.callbackFormats[BrickletCurrent12.CALLBACK_CURRENT_REACHED] = 'h';
    this.callbackFormats[BrickletCurrent12.CALLBACK_ANALOG_VALUE_REACHED] = 'H';
    this.callbackFormats[BrickletCurrent12.CALLBACK_OVER_CURRENT] = '';

    this.getCurrent = function(returnCallback, errorCallback) {
        /*
        Returns the current of the sensor. The value is in mA
        and between -12500mA and 12500mA.
        
        If you want to get the current periodically, it is recommended to use the
        callback :func:`Current` and set the period with 
        :func:`SetCurrentCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_CURRENT, [], '', 'h', returnCallback, errorCallback);
    };   
    this.calibrate = function(returnCallback, errorCallback) {
        /*
        Calibrates the 0 value of the sensor. You have to call this function
        when there is no current present. 
        
        The zero point of the current sensor
        is depending on the exact properties of the analog-to-digital converter,
        the length of the Bricklet cable and the temperature. Thus, if you change
        the Brick or the environment in which the Bricklet is used, you might
        have to recalibrate.
        
        The resulting calibration will be saved on the EEPROM of the Current
        Bricklet.
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_CALIBRATE, [], '', '', returnCallback, errorCallback);
    };   
    this.isOverCurrent = function(returnCallback, errorCallback) {
        /*
        Returns *true* if more than 12.5A were measured.
        
        .. note::
         To reset this value you have to power cycle the Bricklet.
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_IS_OVER_CURRENT, [], '', '?', returnCallback, errorCallback);
    };   
    this.getAnalogValue = function(returnCallback, errorCallback) {
        /*
        Returns the value as read by a 12-bit analog-to-digital converter.
        The value is between 0 and 4095.
        
        .. note::
         The value returned by :func:`GetCurrent` is averaged over several samples
         to yield less noise, while :func:`GetAnalogValue` gives back raw
         unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
         if you need the full resolution of the analog-to-digital converter.
        
        If you want the analog value periodically, it is recommended to use the 
        callback :func:`AnalogValue` and set the period with 
        :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setCurrentCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Current` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Current` is only triggered if the current has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_SET_CURRENT_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getCurrentCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetCurrentCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_CURRENT_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AnalogValue` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`AnalogValue` is only triggered if the analog value has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setCurrentCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`CurrentReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the current is *outside* the min and max values"
         "'i'",    "Callback is triggered when the current is *inside* the min and max values"
         "'<'",    "Callback is triggered when the current is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the current is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getCurrentCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetCurrentCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AnalogValueReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
         "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
         "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`CurrentReached`,
        * :func:`AnalogValueReached`
        
        are triggered, if the thresholds
        
        * :func:`SetCurrentCallbackThreshold`,
        * :func:`SetAnalogValueCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletCurrent12;

},{"./Device":48}],11:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletCurrent25.DEVICE_IDENTIFIER = 24;
BrickletCurrent25.CALLBACK_CURRENT = 15;
BrickletCurrent25.CALLBACK_ANALOG_VALUE = 16;
BrickletCurrent25.CALLBACK_CURRENT_REACHED = 17;
BrickletCurrent25.CALLBACK_ANALOG_VALUE_REACHED = 18;
BrickletCurrent25.CALLBACK_OVER_CURRENT = 19;
BrickletCurrent25.FUNCTION_GET_CURRENT = 1;
BrickletCurrent25.FUNCTION_CALIBRATE = 2;
BrickletCurrent25.FUNCTION_IS_OVER_CURRENT = 3;
BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE = 4;
BrickletCurrent25.FUNCTION_SET_CURRENT_CALLBACK_PERIOD = 5;
BrickletCurrent25.FUNCTION_GET_CURRENT_CALLBACK_PERIOD = 6;
BrickletCurrent25.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 7;
BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 8;
BrickletCurrent25.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD = 9;
BrickletCurrent25.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD = 10;
BrickletCurrent25.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 11;
BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 12;
BrickletCurrent25.FUNCTION_SET_DEBOUNCE_PERIOD = 13;
BrickletCurrent25.FUNCTION_GET_DEBOUNCE_PERIOD = 14;
BrickletCurrent25.FUNCTION_GET_IDENTITY = 255;
BrickletCurrent25.THRESHOLD_OPTION_OFF = 'x';
BrickletCurrent25.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletCurrent25.THRESHOLD_OPTION_INSIDE = 'i';
BrickletCurrent25.THRESHOLD_OPTION_SMALLER = '<';
BrickletCurrent25.THRESHOLD_OPTION_GREATER = '>';

function BrickletCurrent25(uid, ipcon) {
    //Device for sensing current of up to 25A
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletCurrent25.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletCurrent25.FUNCTION_GET_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent25.FUNCTION_CALIBRATE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletCurrent25.FUNCTION_IS_OVER_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent25.FUNCTION_SET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletCurrent25.FUNCTION_GET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent25.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent25.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletCurrent25.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent25.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent25.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletCurrent25.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletCurrent25.CALLBACK_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletCurrent25.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletCurrent25.CALLBACK_CURRENT_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletCurrent25.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletCurrent25.CALLBACK_OVER_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletCurrent25.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletCurrent25.CALLBACK_CURRENT] = 'h';
    this.callbackFormats[BrickletCurrent25.CALLBACK_ANALOG_VALUE] = 'H';
    this.callbackFormats[BrickletCurrent25.CALLBACK_CURRENT_REACHED] = 'h';
    this.callbackFormats[BrickletCurrent25.CALLBACK_ANALOG_VALUE_REACHED] = 'H';
    this.callbackFormats[BrickletCurrent25.CALLBACK_OVER_CURRENT] = '';

    this.getCurrent = function(returnCallback, errorCallback) {
        /*
        Returns the current of the sensor. The value is in mA
        and between -25000mA and 25000mA.
        
        If you want to get the current periodically, it is recommended to use the
        callback :func:`Current` and set the period with 
        :func:`SetCurrentCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_CURRENT, [], '', 'h', returnCallback, errorCallback);
    };   
    this.calibrate = function(returnCallback, errorCallback) {
        /*
        Calibrates the 0 value of the sensor. You have to call this function
        when there is no current present. 
        
        The zero point of the current sensor
        is depending on the exact properties of the analog-to-digital converter,
        the length of the Bricklet cable and the temperature. Thus, if you change
        the Brick or the environment in which the Bricklet is used, you might
        have to recalibrate.
        
        The resulting calibration will be saved on the EEPROM of the Current
        Bricklet.
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_CALIBRATE, [], '', '', returnCallback, errorCallback);
    };   
    this.isOverCurrent = function(returnCallback, errorCallback) {
        /*
        Returns *true* if more than 25A were measured.
        
        .. note::
         To reset this value you have to power cycle the Bricklet.
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_IS_OVER_CURRENT, [], '', '?', returnCallback, errorCallback);
    };   
    this.getAnalogValue = function(returnCallback, errorCallback) {
        /*
        Returns the value as read by a 12-bit analog-to-digital converter.
        The value is between 0 and 4095.
        
        .. note::
         The value returned by :func:`GetCurrent` is averaged over several samples
         to yield less noise, while :func:`GetAnalogValue` gives back raw
         unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
         if you need the full resolution of the analog-to-digital converter.
        
        If you want the analog value periodically, it is recommended to use the 
        callback :func:`AnalogValue` and set the period with 
        :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setCurrentCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Current` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Current` is only triggered if the current has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_SET_CURRENT_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getCurrentCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetCurrentCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_CURRENT_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AnalogValue` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`AnalogValue` is only triggered if the analog value has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setCurrentCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`CurrentReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the current is *outside* the min and max values"
         "'i'",    "Callback is triggered when the current is *inside* the min and max values"
         "'<'",    "Callback is triggered when the current is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the current is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getCurrentCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetCurrentCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AnalogValueReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
         "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
         "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`CurrentReached`,
        * :func:`AnalogValueReached`
        
        are triggered, if the thresholds
        
        * :func:`SetCurrentCallbackThreshold`,
        * :func:`SetAnalogValueCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletCurrent25.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletCurrent25;

},{"./Device":48}],12:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletDistanceIR.DEVICE_IDENTIFIER = 25;
BrickletDistanceIR.CALLBACK_DISTANCE = 15;
BrickletDistanceIR.CALLBACK_ANALOG_VALUE = 16;
BrickletDistanceIR.CALLBACK_DISTANCE_REACHED = 17;
BrickletDistanceIR.CALLBACK_ANALOG_VALUE_REACHED = 18;
BrickletDistanceIR.FUNCTION_GET_DISTANCE = 1;
BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletDistanceIR.FUNCTION_SET_SAMPLING_POINT = 3;
BrickletDistanceIR.FUNCTION_GET_SAMPLING_POINT = 4;
BrickletDistanceIR.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD = 5;
BrickletDistanceIR.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD = 6;
BrickletDistanceIR.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 7;
BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 8;
BrickletDistanceIR.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD = 9;
BrickletDistanceIR.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD = 10;
BrickletDistanceIR.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 11;
BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 12;
BrickletDistanceIR.FUNCTION_SET_DEBOUNCE_PERIOD = 13;
BrickletDistanceIR.FUNCTION_GET_DEBOUNCE_PERIOD = 14;
BrickletDistanceIR.FUNCTION_GET_IDENTITY = 255;
BrickletDistanceIR.THRESHOLD_OPTION_OFF = 'x';
BrickletDistanceIR.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletDistanceIR.THRESHOLD_OPTION_INSIDE = 'i';
BrickletDistanceIR.THRESHOLD_OPTION_SMALLER = '<';
BrickletDistanceIR.THRESHOLD_OPTION_GREATER = '>';

function BrickletDistanceIR(uid, ipcon) {
    //Device for sensing distance via infrared
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletDistanceIR.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletDistanceIR.FUNCTION_GET_DISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_SET_SAMPLING_POINT] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_GET_SAMPLING_POINT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceIR.CALLBACK_DISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletDistanceIR.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletDistanceIR.CALLBACK_DISTANCE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletDistanceIR.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletDistanceIR.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletDistanceIR.CALLBACK_DISTANCE] = 'H';
    this.callbackFormats[BrickletDistanceIR.CALLBACK_ANALOG_VALUE] = 'H';
    this.callbackFormats[BrickletDistanceIR.CALLBACK_DISTANCE_REACHED] = 'H';
    this.callbackFormats[BrickletDistanceIR.CALLBACK_ANALOG_VALUE_REACHED] = 'H';

    this.getDistance = function(returnCallback, errorCallback) {
        /*
        Returns the distance measured by the sensor. The value is in mm and possible
        distance ranges are 40 to 300, 100 to 800 and 200 to 1500, depending on the
        selected IR sensor.
        
        If you want to get the distance periodically, it is recommended to use the
        callback :func:`Distance` and set the period with 
        :func:`SetDistanceCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_DISTANCE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getAnalogValue = function(returnCallback, errorCallback) {
        /*
        Returns the value as read by a 12-bit analog-to-digital converter.
        The value is between 0 and 4095.
        
        .. note::
         The value returned by :func:`GetDistance` is averaged over several samples
         to yield less noise, while :func:`GetAnalogValue` gives back raw
         unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
         if you need the full resolution of the analog-to-digital converter.
        
        If you want the analog value periodically, it is recommended to use the 
        callback :func:`AnalogValue` and set the period with 
        :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setSamplingPoint = function(position, distance, returnCallback, errorCallback) {
        /*
        Sets a sampling point value to a specific position of the lookup table.
        The lookup table comprises 128 equidistant analog values with
        corresponding distances.
        
        If you measure a distance of 50cm at the analog value 2048, you
        should call this function with (64, 5000). The utilized analog-to-digital
        converter has a resolution of 12 bit. With 128 sampling points on the
        whole range, this means that every sampling point has a size of 32
        analog values. Thus the analog value 2048 has the corresponding sampling
        point 64 = 2048/32.
        
        Sampling points are saved on the EEPROM of the Distance IR Bricklet and
        loaded again on startup.
        
        .. note::
         An easy way to calibrate the sampling points of the Distance IR Bricklet is
         implemented in the Brick Viewer. If you want to calibrate your Bricklet it is
         highly recommended to use this implementation.
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_SET_SAMPLING_POINT, [position, distance], 'B H', '', returnCallback, errorCallback);
    };
    this.getSamplingPoint = function(position, returnCallback, errorCallback) {
        /*
        Returns the distance to a sampling point position as set by
        :func:`SetSamplingPoint`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_SAMPLING_POINT, [position], 'B', 'H', returnCallback, errorCallback);
    };
    this.setDistanceCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Distance` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Distance` is only triggered if the distance has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getDistanceCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetDistanceCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AnalogValue` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`AnalogValue` is only triggered if the analog value has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setDistanceCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`DistanceReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the distance is *outside* the min and max values"
         "'i'",    "Callback is triggered when the distance is *inside* the min and max values"
         "'<'",    "Callback is triggered when the distance is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the distance is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getDistanceCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetDistanceCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AnalogValueReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
         "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
         "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`DistanceReached`,
        * :func:`AnalogValueReached`
        
        are triggered, if the thresholds
        
        * :func:`SetDistanceCallbackThreshold`,
        * :func:`SetAnalogValueCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletDistanceIR.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletDistanceIR;

},{"./Device":48}],13:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletDistanceUS.DEVICE_IDENTIFIER = 229;
BrickletDistanceUS.CALLBACK_DISTANCE = 8;
BrickletDistanceUS.CALLBACK_DISTANCE_REACHED = 9;
BrickletDistanceUS.FUNCTION_GET_DISTANCE_VALUE = 1;
BrickletDistanceUS.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD = 2;
BrickletDistanceUS.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD = 3;
BrickletDistanceUS.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD = 4;
BrickletDistanceUS.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD = 5;
BrickletDistanceUS.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletDistanceUS.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletDistanceUS.FUNCTION_SET_MOVING_AVERAGE = 10;
BrickletDistanceUS.FUNCTION_GET_MOVING_AVERAGE = 11;
BrickletDistanceUS.FUNCTION_GET_IDENTITY = 255;
BrickletDistanceUS.THRESHOLD_OPTION_OFF = 'x';
BrickletDistanceUS.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletDistanceUS.THRESHOLD_OPTION_INSIDE = 'i';
BrickletDistanceUS.THRESHOLD_OPTION_SMALLER = '<';
BrickletDistanceUS.THRESHOLD_OPTION_GREATER = '>';

function BrickletDistanceUS(uid, ipcon) {
    //Device for sensing distance via ultrasound
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletDistanceUS.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletDistanceUS.FUNCTION_GET_DISTANCE_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceUS.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletDistanceUS.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceUS.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletDistanceUS.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceUS.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletDistanceUS.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceUS.CALLBACK_DISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletDistanceUS.CALLBACK_DISTANCE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletDistanceUS.FUNCTION_SET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletDistanceUS.FUNCTION_GET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDistanceUS.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletDistanceUS.CALLBACK_DISTANCE] = 'H';
    this.callbackFormats[BrickletDistanceUS.CALLBACK_DISTANCE_REACHED] = 'H';

    this.getDistanceValue = function(returnCallback, errorCallback) {
        /*
        Returns the current distance value measured by the sensor. The value has a
        range of 0 to 4095. A small value corresponds to a small distance, a big
        value corresponds to a big distance. The relation between the measured distance
        value and the actual distance is affected by the 5V supply voltage (deviations
        in the supply voltage result in deviations in the distance values) and is
        non-linear (resolution is bigger at close range).
        
        If you want to get the distance value periodically, it is recommended to
        use the callback :func:`Distance` and set the period with 
        :func:`SetDistanceCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_GET_DISTANCE_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setDistanceCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Distance` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Distance` is only triggered if the distance value has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getDistanceCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetDistanceCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setDistanceCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`DistanceReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the distance value is *outside* the min and max values"
         "'i'",    "Callback is triggered when the distance value is *inside* the min and max values"
         "'<'",    "Callback is triggered when the distance value is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the distance value is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getDistanceCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetDistanceCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`DistanceReached`,
        
        are triggered, if the thresholds
        
        * :func:`SetDistanceCallbackThreshold`,
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setMovingAverage = function(average, returnCallback, errorCallback) {
        /*
        Sets the length of a `moving averaging <http://en.wikipedia.org/wiki/Moving_average>`__ 
        for the distance value.
        
        Setting the length to 0 will turn the averaging completely off. With less
        averaging, there is more noise on the data.
        
        The range for the averaging is 0-100.
        
        The default value is 20.
        */
        this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_SET_MOVING_AVERAGE, [average], 'B', '', returnCallback, errorCallback);
    };
    this.getMovingAverage = function(returnCallback, errorCallback) {
        /*
        Returns the length moving average as set by :func:`SetMovingAverage`.
        */
        this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_GET_MOVING_AVERAGE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletDistanceUS;

},{"./Device":48}],14:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletDualButton.DEVICE_IDENTIFIER = 230;
BrickletDualButton.CALLBACK_STATE_CHANGED = 4;
BrickletDualButton.FUNCTION_SET_LED_STATE = 1;
BrickletDualButton.FUNCTION_GET_LED_STATE = 2;
BrickletDualButton.FUNCTION_GET_BUTTON_STATE = 3;
BrickletDualButton.FUNCTION_SET_SELECTED_LED_STATE = 5;
BrickletDualButton.FUNCTION_GET_IDENTITY = 255;
BrickletDualButton.LED_STATE_AUTO_TOGGLE_ON = 0;
BrickletDualButton.LED_STATE_AUTO_TOGGLE_OFF = 1;
BrickletDualButton.LED_STATE_ON = 2;
BrickletDualButton.LED_STATE_OFF = 3;
BrickletDualButton.BUTTON_STATE_PRESSED = 0;
BrickletDualButton.BUTTON_STATE_RELEASED = 1;
BrickletDualButton.LED_LEFT = 0;
BrickletDualButton.LED_RIGHT = 1;

function BrickletDualButton(uid, ipcon) {
    //Device with two buttons and two LEDs
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletDualButton.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletDualButton.FUNCTION_SET_LED_STATE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletDualButton.FUNCTION_GET_LED_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDualButton.FUNCTION_GET_BUTTON_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDualButton.CALLBACK_STATE_CHANGED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletDualButton.FUNCTION_SET_SELECTED_LED_STATE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletDualButton.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletDualButton.CALLBACK_STATE_CHANGED] = 'B B B B';

    this.setLEDState = function(ledL, ledR, returnCallback, errorCallback) {
        /*
        Sets the state of the LEDs. Possible states are:
        
        * 0 = AutoToggleOn: Enables auto toggle with initially enabled LED.
        * 1 = AutoToggleOff: Activates auto toggle with initially disabled LED.
        * 2 = On: Enables LED (auto toggle is disabled).
        * 3 = Off: Disables LED (auto toggle is disabled).
        
        In auto toggle mode the LED is toggled automatically at each press of a button.
        
        If you just want to set one of the LEDs and don't know the current state
        of the other LED, you can get the state with :func:`GetLEDState` or you
        can use :func:`SetSelectedLEDState`.
        
        The default value is (1, 1).
        */
        this.ipcon.sendRequest(this, BrickletDualButton.FUNCTION_SET_LED_STATE, [ledL, ledR], 'B B', '', returnCallback, errorCallback);
    };
    this.getLEDState = function(returnCallback, errorCallback) {
        /*
        Returns the current state of the LEDs, as set by :func:`SetLEDState`.
        */
        this.ipcon.sendRequest(this, BrickletDualButton.FUNCTION_GET_LED_STATE, [], '', 'B B', returnCallback, errorCallback);
    };   
    this.getButtonState = function(returnCallback, errorCallback) {
        /*
        Returns the current state for both buttons. Possible states are:
        
        * 0 = pressed
        * 1 = released
        */
        this.ipcon.sendRequest(this, BrickletDualButton.FUNCTION_GET_BUTTON_STATE, [], '', 'B B', returnCallback, errorCallback);
    };   
    this.setSelectedLEDState = function(led, state, returnCallback, errorCallback) {
        /*
        Sets the state of the selected LED (0 or 1). 
        
        The other LED remains untouched.
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletDualButton.FUNCTION_SET_SELECTED_LED_STATE, [led, state], 'B B', '', returnCallback, errorCallback);
    };
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletDualButton.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletDualButton;

},{"./Device":48}],15:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletDualRelay.DEVICE_IDENTIFIER = 26;
BrickletDualRelay.CALLBACK_MONOFLOP_DONE = 5;
BrickletDualRelay.FUNCTION_SET_STATE = 1;
BrickletDualRelay.FUNCTION_GET_STATE = 2;
BrickletDualRelay.FUNCTION_SET_MONOFLOP = 3;
BrickletDualRelay.FUNCTION_GET_MONOFLOP = 4;
BrickletDualRelay.FUNCTION_SET_SELECTED_STATE = 6;
BrickletDualRelay.FUNCTION_GET_IDENTITY = 255;

function BrickletDualRelay(uid, ipcon) {
    //Device for controlling two relays
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletDualRelay.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletDualRelay.FUNCTION_SET_STATE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletDualRelay.FUNCTION_GET_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDualRelay.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletDualRelay.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletDualRelay.CALLBACK_MONOFLOP_DONE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletDualRelay.FUNCTION_SET_SELECTED_STATE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletDualRelay.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletDualRelay.CALLBACK_MONOFLOP_DONE] = 'B ?';

    this.setState = function(relay1, relay2, returnCallback, errorCallback) {
        /*
        Sets the state of the relays, *true* means on and *false* means off. 
        For example: (true, false) turns relay 1 on and relay 2 off.
        
        If you just want to set one of the relays and don't know the current state
        of the other relay, you can get the state with :func:`GetState` or you
        can use :func:`SetSelectedState`.
        
        Running monoflop timers will be overwritten if this function is called.
        
        The default value is (*false*, *false*).
        */
        this.ipcon.sendRequest(this, BrickletDualRelay.FUNCTION_SET_STATE, [relay1, relay2], '? ?', '', returnCallback, errorCallback);
    };
    this.getState = function(returnCallback, errorCallback) {
        /*
        Returns the state of the relays, *true* means on and *false* means off.
        */
        this.ipcon.sendRequest(this, BrickletDualRelay.FUNCTION_GET_STATE, [], '', '? ?', returnCallback, errorCallback);
    };   
    this.setMonoflop = function(relay, state, time, returnCallback, errorCallback) {
        /*
        The first parameter can be 1 or 2 (relay 1 or relay 2). The second parameter 
        is the desired state of the relay (*true* means on and *false* means off).
        The third parameter indicates the time (in ms) that the relay should hold 
        the state.
        
        If this function is called with the parameters (1, true, 1500):
        Relay 1 will turn on and in 1.5s it will turn off again.
        
        A monoflop can be used as a failsafe mechanism. For example: Lets assume you 
        have a RS485 bus and a Dual Relay Bricklet connected to one of the slave 
        stacks. You can now call this function every second, with a time parameter
        of two seconds. The relay will be on all the time. If now the RS485 
        connection is lost, the relay will turn off in at most two seconds.
        
        .. versionadded:: 1.1.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletDualRelay.FUNCTION_SET_MONOFLOP, [relay, state, time], 'B ? I', '', returnCallback, errorCallback);
    };
    this.getMonoflop = function(relay, returnCallback, errorCallback) {
        /*
        Returns (for the given relay) the current state and the time as set by 
        :func:`SetMonoflop` as well as the remaining time until the state flips.
        
        If the timer is not running currently, the remaining time will be returned
        as 0.
        
        .. versionadded:: 1.1.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletDualRelay.FUNCTION_GET_MONOFLOP, [relay], 'B', '? I I', returnCallback, errorCallback);
    };
    this.setSelectedState = function(relay, state, returnCallback, errorCallback) {
        /*
        Sets the state of the selected relay (1 or 2), *true* means on and *false* means off. 
        
        The other relay remains untouched.
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletDualRelay.FUNCTION_SET_SELECTED_STATE, [relay, state], 'B ?', '', returnCallback, errorCallback);
    };
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletDualRelay.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletDualRelay;

},{"./Device":48}],16:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletGPS.DEVICE_IDENTIFIER = 222;
BrickletGPS.CALLBACK_COORDINATES = 17;
BrickletGPS.CALLBACK_STATUS = 18;
BrickletGPS.CALLBACK_ALTITUDE = 19;
BrickletGPS.CALLBACK_MOTION = 20;
BrickletGPS.CALLBACK_DATE_TIME = 21;
BrickletGPS.FUNCTION_GET_COORDINATES = 1;
BrickletGPS.FUNCTION_GET_STATUS = 2;
BrickletGPS.FUNCTION_GET_ALTITUDE = 3;
BrickletGPS.FUNCTION_GET_MOTION = 4;
BrickletGPS.FUNCTION_GET_DATE_TIME = 5;
BrickletGPS.FUNCTION_RESTART = 6;
BrickletGPS.FUNCTION_SET_COORDINATES_CALLBACK_PERIOD = 7;
BrickletGPS.FUNCTION_GET_COORDINATES_CALLBACK_PERIOD = 8;
BrickletGPS.FUNCTION_SET_STATUS_CALLBACK_PERIOD = 9;
BrickletGPS.FUNCTION_GET_STATUS_CALLBACK_PERIOD = 10;
BrickletGPS.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD = 11;
BrickletGPS.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD = 12;
BrickletGPS.FUNCTION_SET_MOTION_CALLBACK_PERIOD = 13;
BrickletGPS.FUNCTION_GET_MOTION_CALLBACK_PERIOD = 14;
BrickletGPS.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD = 15;
BrickletGPS.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD = 16;
BrickletGPS.FUNCTION_GET_IDENTITY = 255;
BrickletGPS.FIX_NO_FIX = 1;
BrickletGPS.FIX_2D_FIX = 2;
BrickletGPS.FIX_3D_FIX = 3;
BrickletGPS.RESTART_TYPE_HOT_START = 0;
BrickletGPS.RESTART_TYPE_WARM_START = 1;
BrickletGPS.RESTART_TYPE_COLD_START = 2;
BrickletGPS.RESTART_TYPE_FACTORY_RESET = 3;

function BrickletGPS(uid, ipcon) {
    //Device for receiving GPS position
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletGPS.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletGPS.FUNCTION_GET_COORDINATES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_GET_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_GET_ALTITUDE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_GET_MOTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_GET_DATE_TIME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_RESTART] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletGPS.FUNCTION_SET_COORDINATES_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_GET_COORDINATES_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_SET_STATUS_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_GET_STATUS_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_SET_MOTION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_GET_MOTION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletGPS.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletGPS.CALLBACK_COORDINATES] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletGPS.CALLBACK_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletGPS.CALLBACK_ALTITUDE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletGPS.CALLBACK_MOTION] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletGPS.CALLBACK_DATE_TIME] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletGPS.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletGPS.CALLBACK_COORDINATES] = 'I c I c H H H H';
    this.callbackFormats[BrickletGPS.CALLBACK_STATUS] = 'B B B';
    this.callbackFormats[BrickletGPS.CALLBACK_ALTITUDE] = 'I I';
    this.callbackFormats[BrickletGPS.CALLBACK_MOTION] = 'I I';
    this.callbackFormats[BrickletGPS.CALLBACK_DATE_TIME] = 'I I';

    this.getCoordinates = function(returnCallback, errorCallback) {
        /*
        Returns the GPS coordinates. Latitude and longitude are given in the
        ``DD.dddddd°`` format, the value 57123468 means 57.123468°.
        The parameter ``ns`` and ``ew`` are the cardinal directions for
        latitude and longitude. Possible values for ``ns`` and ``ew`` are 'N', 'S', 'E'
        and 'W' (north, south, east and west).
        
        PDOP, HDOP and VDOP are the dilution of precision (DOP) values. They specify
        the additional multiplicative effect of GPS satellite geometry on GPS 
        precision. See 
        `here <http://en.wikipedia.org/wiki/Dilution_of_precision_(GPS)>`__
        for more information. The values are give in hundredths.
        
        EPE is the "Estimated Position Error". The EPE is given in cm. This is not the
        absolute maximum error, it is the error with a specific confidence. See
        `here <http://www.nps.gov/gis/gps/WhatisEPE.html>`__ for more information.
        
        This data is only valid if there is currently a fix as indicated by
        :func:`GetStatus`.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_COORDINATES, [], '', 'I c I c H H H H', returnCallback, errorCallback);
    };   
    this.getStatus = function(returnCallback, errorCallback) {
        /*
        Returns the current fix status, the number of satellites that are in view and
        the number of satellites that are currently used.
        
        Possible fix status values can be:
        
        .. csv-table::
         :header: "Value", "Description"
         :widths: 10, 100
        
         "1", "No Fix, :func:`GetCoordinates` and :func:`GetAltitude` return invalid data"
         "2", "2D Fix, only :func:`GetCoordinates` returns valid data"
         "3", "3D Fix, :func:`GetCoordinates` and :func:`GetAltitude` return valid data"
        
        There is also a :ref:`blue LED <gps_bricklet_fix_led>` on the Bricklet that
        indicates the fix status.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_STATUS, [], '', 'B B B', returnCallback, errorCallback);
    };   
    this.getAltitude = function(returnCallback, errorCallback) {
        /*
        Returns the current altitude and corresponding geoidal separation.
        
        Both values are given in cm.
        
        This data is only valid if there is currently a fix as indicated by
        :func:`GetStatus`.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_ALTITUDE, [], '', 'I I', returnCallback, errorCallback);
    };   
    this.getMotion = function(returnCallback, errorCallback) {
        /*
        Returns the current course and speed. Course is given in hundredths degree
        and speed is given in hundredths km/h. A course of 0° means the Bricklet is
        traveling north bound and 90° means it is traveling east bound.
        
        Please note that this only returns useful values if an actual movement
        is present.
        
        This data is only valid if there is currently a fix as indicated by
        :func:`GetStatus`.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_MOTION, [], '', 'I I', returnCallback, errorCallback);
    };   
    this.getDateTime = function(returnCallback, errorCallback) {
        /*
        Returns the current date and time. The date is
        given in the format ``ddmmyy`` and the time is given
        in the format ``hhmmss.sss``. For example, 140713 means
        14.05.13 as date and 195923568 means 19:59:23.568 as time.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_DATE_TIME, [], '', 'I I', returnCallback, errorCallback);
    };   
    this.restart = function(restartType, returnCallback, errorCallback) {
        /*
        Restarts the GPS Bricklet, the following restart types are available:
        
        .. csv-table::
         :header: "Value", "Description"
         :widths: 10, 100
        
         "0", "Hot start (use all available data in the NV store)"
         "1", "Warm start (don't use ephemeris at restart)"
         "2", "Cold start (don't use time, position, almanacs and ephemeris at restart)"
         "3", "Factory reset (clear all system/user configurations at restart)"
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_RESTART, [restartType], 'B', '', returnCallback, errorCallback);
    };
    this.setCoordinatesCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Coordinates` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Coordinates` is only triggered if the coordinates changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_COORDINATES_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getCoordinatesCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetCoordinatesCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_COORDINATES_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setStatusCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Status` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Status` is only triggered if the status changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_STATUS_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getStatusCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetStatusCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_STATUS_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAltitudeCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Altitude` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Altitude` is only triggered if the altitude changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAltitudeCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAltitudeCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setMotionCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Motion` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Motion` is only triggered if the motion changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_MOTION_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getMotionCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetMotionCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_MOTION_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setDateTimeCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`DateTime` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`DateTime` is only triggered if the date or time changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getDateTimeCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetDateTimeCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletGPS;

},{"./Device":48}],17:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletHallEffect.DEVICE_IDENTIFIER = 240;
BrickletHallEffect.CALLBACK_EDGE_COUNT = 10;
BrickletHallEffect.FUNCTION_GET_VALUE = 1;
BrickletHallEffect.FUNCTION_GET_EDGE_COUNT = 2;
BrickletHallEffect.FUNCTION_SET_EDGE_COUNT_CONFIG = 3;
BrickletHallEffect.FUNCTION_GET_EDGE_COUNT_CONFIG = 4;
BrickletHallEffect.FUNCTION_SET_EDGE_INTERRUPT = 5;
BrickletHallEffect.FUNCTION_GET_EDGE_INTERRUPT = 6;
BrickletHallEffect.FUNCTION_SET_EDGE_COUNT_CALLBACK_PERIOD = 7;
BrickletHallEffect.FUNCTION_GET_EDGE_COUNT_CALLBACK_PERIOD = 8;
BrickletHallEffect.FUNCTION_EDGE_INTERRUPT = 9;
BrickletHallEffect.FUNCTION_GET_IDENTITY = 255;
BrickletHallEffect.EDGE_TYPE_RISING = 0;
BrickletHallEffect.EDGE_TYPE_FALLING = 1;
BrickletHallEffect.EDGE_TYPE_BOTH = 2;

function BrickletHallEffect(uid, ipcon) {
    //Device that detects presence of magnetic field via hall effect
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletHallEffect.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletHallEffect.FUNCTION_GET_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHallEffect.FUNCTION_GET_EDGE_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHallEffect.FUNCTION_SET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletHallEffect.FUNCTION_GET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHallEffect.FUNCTION_SET_EDGE_INTERRUPT] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletHallEffect.FUNCTION_GET_EDGE_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHallEffect.FUNCTION_SET_EDGE_COUNT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletHallEffect.FUNCTION_GET_EDGE_COUNT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHallEffect.FUNCTION_EDGE_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHallEffect.CALLBACK_EDGE_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletHallEffect.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletHallEffect.CALLBACK_EDGE_COUNT] = 'I ?';

    this.getValue = function(returnCallback, errorCallback) {
        /*
        Returns *true* if a magnetic field of 35 Gauss (3.5mT) or greater is detected.
        */
        this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_GET_VALUE, [], '', '?', returnCallback, errorCallback);
    };   
    this.getEdgeCount = function(resetCounter, returnCallback, errorCallback) {
        /*
        Returns the current value of the edge counter. You can configure
        edge type (rising, falling, both) that is counted with
        :func:`SetEdgeCountConfig`.
        
        If you set the reset counter to *true*, the count is set back to 0
        directly after it is read.
        */
        this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_GET_EDGE_COUNT, [resetCounter], '?', 'I', returnCallback, errorCallback);
    };
    this.setEdgeCountConfig = function(edgeType, debounce, returnCallback, errorCallback) {
        /*
        The edge type parameter configures if rising edges, falling edges or 
        both are counted. Possible edge types are:
        
        * 0 = rising (default)
        * 1 = falling
        * 2 = both
        
        A magnetic field of 35 Gauss (3.5mT) or greater causes a falling edge and a
        magnetic field of 25 Gauss (2.5mT) or smaller causes a rising edge.
        
        If a magnet comes near the Bricklet the signal goes low (falling edge), if
        a magnet is removed from the vicinity the signal goes high (rising edge).
        
        The debounce time is given in ms.
        
        Configuring an edge counter resets its value to 0.
        
        If you don't know what any of this means, just leave it at default. The
        default configuration is very likely OK for you.
        
        Default values: 0 (edge type) and 100ms (debounce time)
        */
        this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_SET_EDGE_COUNT_CONFIG, [edgeType, debounce], 'B B', '', returnCallback, errorCallback);
    };
    this.getEdgeCountConfig = function(returnCallback, errorCallback) {
        /*
        Returns the edge type and debounce time as set by :func:`SetEdgeCountConfig`.
        */
        this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_GET_EDGE_COUNT_CONFIG, [], '', 'B B', returnCallback, errorCallback);
    };   
    this.setEdgeInterrupt = function(edges, returnCallback, errorCallback) {
        /*
        Sets the number of edges until an interrupt is invoked.
        
        If *edges* is set to n, an interrupt is invoked for every n-th detected edge.
        
        If *edges* is set to 0, the interrupt is disabled.
        
        Default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_SET_EDGE_INTERRUPT, [edges], 'I', '', returnCallback, errorCallback);
    };
    this.getEdgeInterrupt = function(returnCallback, errorCallback) {
        /*
        Returns the edges as set by :func:`SetEdgeInterrupt`.
        */
        this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_GET_EDGE_INTERRUPT, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setEdgeCountCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`EdgeCount` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`EdgeCount` is only triggered if the edge count has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_SET_EDGE_COUNT_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getEdgeCountCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetEdgeCountCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_GET_EDGE_COUNT_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.edgeInterrupt = function(returnCallback, errorCallback) {
        /*
        This callback is triggered every n-th count, as configured with
        :func:`SetEdgeInterrupt`. The parameters are the
        current count and the current value (see :func:`GetValue` and :func:`GetEdgeCount`).
        */
        this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_EDGE_INTERRUPT, [], '', 'I ?', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletHallEffect;

},{"./Device":48}],18:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletHumidity.DEVICE_IDENTIFIER = 27;
BrickletHumidity.CALLBACK_HUMIDITY = 13;
BrickletHumidity.CALLBACK_ANALOG_VALUE = 14;
BrickletHumidity.CALLBACK_HUMIDITY_REACHED = 15;
BrickletHumidity.CALLBACK_ANALOG_VALUE_REACHED = 16;
BrickletHumidity.FUNCTION_GET_HUMIDITY = 1;
BrickletHumidity.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_PERIOD = 3;
BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_PERIOD = 4;
BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_THRESHOLD = 7;
BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_THRESHOLD = 8;
BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletHumidity.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletHumidity.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletHumidity.FUNCTION_GET_IDENTITY = 255;
BrickletHumidity.THRESHOLD_OPTION_OFF = 'x';
BrickletHumidity.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletHumidity.THRESHOLD_OPTION_INSIDE = 'i';
BrickletHumidity.THRESHOLD_OPTION_SMALLER = '<';
BrickletHumidity.THRESHOLD_OPTION_GREATER = '>';

function BrickletHumidity(uid, ipcon) {
    //Device for sensing Humidity
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletHumidity.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletHumidity.FUNCTION_GET_HUMIDITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHumidity.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHumidity.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletHumidity.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletHumidity.CALLBACK_HUMIDITY] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletHumidity.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletHumidity.CALLBACK_HUMIDITY_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletHumidity.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletHumidity.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletHumidity.CALLBACK_HUMIDITY] = 'H';
    this.callbackFormats[BrickletHumidity.CALLBACK_ANALOG_VALUE] = 'H';
    this.callbackFormats[BrickletHumidity.CALLBACK_HUMIDITY_REACHED] = 'H';
    this.callbackFormats[BrickletHumidity.CALLBACK_ANALOG_VALUE_REACHED] = 'H';

    this.getHumidity = function(returnCallback, errorCallback) {
        /*
        Returns the humidity of the sensor. The value
        has a range of 0 to 1000 and is given in %RH/10 (Relative Humidity), 
        i.e. a value of 421 means that a humidity of 42.1 %RH is measured.
        
        If you want to get the humidity periodically, it is recommended to use the
        callback :func:`Humidity` and set the period with 
        :func:`SetHumidityCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_HUMIDITY, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getAnalogValue = function(returnCallback, errorCallback) {
        /*
        Returns the value as read by a 12-bit analog-to-digital converter.
        The value is between 0 and 4095.
        
        .. note::
         The value returned by :func:`GetHumidity` is averaged over several samples
         to yield less noise, while :func:`GetAnalogValue` gives back raw
         unfiltered analog values. The returned humidity value is calibrated for
         room temperatures, if you use the sensor in extreme cold or extreme
         warm environments, you might want to calculate the humidity from
         the analog value yourself. See the `HIH 5030 datasheet
         <https://github.com/Tinkerforge/humidity-bricklet/raw/master/datasheets/hih-5030.pdf>`__.
        
        If you want the analog value periodically, it is recommended to use the 
        callback :func:`AnalogValue` and set the period with 
        :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setHumidityCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Humidity` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Humidity` is only triggered if the humidity has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getHumidityCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetHumidityCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AnalogValue` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`AnalogValue` is only triggered if the analog value has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setHumidityCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`HumidityReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the humidity is *outside* the min and max values"
         "'i'",    "Callback is triggered when the humidity is *inside* the min and max values"
         "'<'",    "Callback is triggered when the humidity is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the humidity is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getHumidityCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetHumidityCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AnalogValueReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
         "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
         "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`HumidityReached`,
        * :func:`AnalogValueReached`
        
        are triggered, if the thresholds
        
        * :func:`SetHumidityCallbackThreshold`,
        * :func:`SetAnalogValueCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletHumidity;

},{"./Device":48}],19:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletIO16.DEVICE_IDENTIFIER = 28;
BrickletIO16.CALLBACK_INTERRUPT = 9;
BrickletIO16.CALLBACK_MONOFLOP_DONE = 12;
BrickletIO16.FUNCTION_SET_PORT = 1;
BrickletIO16.FUNCTION_GET_PORT = 2;
BrickletIO16.FUNCTION_SET_PORT_CONFIGURATION = 3;
BrickletIO16.FUNCTION_GET_PORT_CONFIGURATION = 4;
BrickletIO16.FUNCTION_SET_DEBOUNCE_PERIOD = 5;
BrickletIO16.FUNCTION_GET_DEBOUNCE_PERIOD = 6;
BrickletIO16.FUNCTION_SET_PORT_INTERRUPT = 7;
BrickletIO16.FUNCTION_GET_PORT_INTERRUPT = 8;
BrickletIO16.FUNCTION_SET_PORT_MONOFLOP = 10;
BrickletIO16.FUNCTION_GET_PORT_MONOFLOP = 11;
BrickletIO16.FUNCTION_SET_SELECTED_VALUES = 13;
BrickletIO16.FUNCTION_GET_EDGE_COUNT = 14;
BrickletIO16.FUNCTION_SET_EDGE_COUNT_CONFIG = 15;
BrickletIO16.FUNCTION_GET_EDGE_COUNT_CONFIG = 16;
BrickletIO16.FUNCTION_GET_IDENTITY = 255;
BrickletIO16.DIRECTION_IN = 'i';
BrickletIO16.DIRECTION_OUT = 'o';
BrickletIO16.EDGE_TYPE_RISING = 0;
BrickletIO16.EDGE_TYPE_FALLING = 1;
BrickletIO16.EDGE_TYPE_BOTH = 2;

function BrickletIO16(uid, ipcon) {
    //Device for controlling up to 16 general purpose input/output pins
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletIO16.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 1];
    this.responseExpected[BrickletIO16.FUNCTION_SET_PORT] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIO16.FUNCTION_GET_PORT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO16.FUNCTION_SET_PORT_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIO16.FUNCTION_GET_PORT_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO16.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletIO16.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO16.FUNCTION_SET_PORT_INTERRUPT] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletIO16.FUNCTION_GET_PORT_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO16.CALLBACK_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletIO16.FUNCTION_SET_PORT_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIO16.FUNCTION_GET_PORT_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO16.CALLBACK_MONOFLOP_DONE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletIO16.FUNCTION_SET_SELECTED_VALUES] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIO16.FUNCTION_GET_EDGE_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO16.FUNCTION_SET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIO16.FUNCTION_GET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO16.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletIO16.CALLBACK_INTERRUPT] = 'c B B';
    this.callbackFormats[BrickletIO16.CALLBACK_MONOFLOP_DONE] = 'c B B';

    this.setPort = function(port, valueMask, returnCallback, errorCallback) {
        /*
        Sets the output value (high or low) for a port ("a" or "b") with a bitmask
        (8bit). A 1 in the bitmask means high and a 0 in the bitmask means low.
        
        For example: The value 15 or 0b00001111 will turn the pins 0-3 high and the
        pins 4-7 low for the specified port.
        
        .. note::
         This function does nothing for pins that are configured as input.
         Pull-up resistors can be switched on with :func:`SetPortConfiguration`.
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_PORT, [port, valueMask], 'c B', '', returnCallback, errorCallback);
    };
    this.getPort = function(port, returnCallback, errorCallback) {
        /*
        Returns a bitmask of the values that are currently measured on the
        specified port. This function works if the pin is configured to input
        as well as if it is configured to output.
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_PORT, [port], 'c', 'B', returnCallback, errorCallback);
    };
    this.setPortConfiguration = function(port, selectionMask, direction, value, returnCallback, errorCallback) {
        /*
        Configures the value and direction of a specified port. Possible directions
        are 'i' and 'o' for input and output.
        
        If the direction is configured as output, the value is either high or low
        (set as *true* or *false*).
        
        If the direction is configured as input, the value is either pull-up or
        default (set as *true* or *false*).
        
        For example:
        
        * ('a', 255, 'i', true) or ('a', 0b11111111, 'i', true) will set all pins of port A as input pull-up.
        * ('a', 128, 'i', false) or ('a', 0b10000000, 'i', false) will set pin 7 of port A as input default (floating if nothing is connected).
        * ('b', 3, 'o', false) or ('b', 0b00000011, 'o', false) will set pins 0 and 1 of port B as output low.
        * ('b', 4, 'o', true) or ('b', 0b00000100, 'o', true) will set pin 2 of port B as output high.
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_PORT_CONFIGURATION, [port, selectionMask, direction, value], 'c B c ?', '', returnCallback, errorCallback);
    };
    this.getPortConfiguration = function(port, returnCallback, errorCallback) {
        /*
        Returns a direction bitmask and a value bitmask for the specified port. A 1 in
        the direction bitmask means input and a 0 in the bitmask means output.
        
        For example: A return value of (15, 51) or (0b00001111, 0b00110011) for
        direction and value means that:
        
        * pins 0 and 1 are configured as input pull-up,
        * pins 2 and 3 are configured as input default,
        * pins 4 and 5 are configured as output high
        * and pins 6 and 7 are configured as output low.
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_PORT_CONFIGURATION, [port], 'c', 'B B', returnCallback, errorCallback);
    };
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the debounce period of the :func:`Interrupt` callback in ms.
        
        For example: If you set this value to 100, you will get the interrupt
        maximal every 100ms. This is necessary if something that bounces is
        connected to the IO-16 Bricklet, such as a button.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setPortInterrupt = function(port, interruptMask, returnCallback, errorCallback) {
        /*
        Sets the pins on which an interrupt is activated with a bitmask.
        Interrupts are triggered on changes of the voltage level of the pin,
        i.e. changes from high to low and low to high.
        
        For example: ('a', 129) or ('a', 0b10000001) will enable the interrupt for
        pins 0 and 7 of port a.
        
        The interrupt is delivered with the callback :func:`Interrupt`.
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_PORT_INTERRUPT, [port, interruptMask], 'c B', '', returnCallback, errorCallback);
    };
    this.getPortInterrupt = function(port, returnCallback, errorCallback) {
        /*
        Returns the interrupt bitmask for the specified port as set by
        :func:`SetPortInterrupt`.
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_PORT_INTERRUPT, [port], 'c', 'B', returnCallback, errorCallback);
    };
    this.setPortMonoflop = function(port, selectionMask, valueMask, time, returnCallback, errorCallback) {
        /*
        Configures a monoflop of the pins specified by the second parameter as 8 bit
        long bitmask. The specified pins must be configured for output. Non-output
        pins will be ignored.
        
        The third parameter is a bitmask with the desired value of the specified
        output pins. A 1 in the bitmask means high and a 0 in the bitmask means low.
        
        The forth parameter indicates the time (in ms) that the pins should hold
        the value.
        
        If this function is called with the parameters ('a', 9, 1, 1500) or
        ('a', 0b00001001, 0b00000001, 1500): Pin 0 will get high and pin 3 will get
        low on port 'a'. In 1.5s pin 0 will get low and pin 3 will get high again.
        
        A monoflop can be used as a fail-safe mechanism. For example: Lets assume you
        have a RS485 bus and an IO-16 Bricklet connected to one of the slave
        stacks. You can now call this function every second, with a time parameter
        of two seconds and pin 0 set to high. Pin 0 will be high all the time. If now
        the RS485 connection is lost, then pin 0 will get low in at most two seconds.
        
        .. versionadded:: 1.1.2~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_PORT_MONOFLOP, [port, selectionMask, valueMask, time], 'c B B I', '', returnCallback, errorCallback);
    };
    this.getPortMonoflop = function(port, pin, returnCallback, errorCallback) {
        /*
        Returns (for the given pin) the current value and the time as set by
        :func:`SetPortMonoflop` as well as the remaining time until the value flips.
        
        If the timer is not running currently, the remaining time will be returned
        as 0.
        
        .. versionadded:: 1.1.2~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_PORT_MONOFLOP, [port, pin], 'c B', 'B I I', returnCallback, errorCallback);
    };
    this.setSelectedValues = function(port, selectionMask, valueMask, returnCallback, errorCallback) {
        /*
        Sets the output value (high or low) for a port ("a" or "b" with a bitmask, 
        according to the selection mask. The bitmask is 8 bit long and a 1 in the
        bitmask means high and a 0 in the bitmask means low.
        
        For example: The parameters ('a', 192, 128) or ('a', 0b11000000, 0b10000000)
        will turn pin 7 high and pin 6 low on port A, pins 0-6 will remain untouched.
        
        .. note::
         This function does nothing for pins that are configured as input.
         Pull-up resistors can be switched on with :func:`SetConfiguration`.
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_SELECTED_VALUES, [port, selectionMask, valueMask], 'c B B', '', returnCallback, errorCallback);
    };
    this.getEdgeCount = function(pin, resetCounter, returnCallback, errorCallback) {
        /*
        Returns the current value of the edge counter for the selected pin on port A.
        You can configure the edges that are counted with :func:`SetEdgeCountConfig`.
        
        If you set the reset counter to *true*, the count is set back to 0
        directly after it is read.
        
        .. versionadded:: 2.0.3~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_EDGE_COUNT, [pin, resetCounter], 'B ?', 'I', returnCallback, errorCallback);
    };
    this.setEdgeCountConfig = function(pin, edgeType, debounce, returnCallback, errorCallback) {
        /*
        Configures the edge counter for the selected pin of port A. Pins 0 and 1
        are available for edge counting.
        
        The edge type parameter configures if rising edges, falling edges or
        both are counted if the pin is configured for input. Possible edge types are:
        
        * 0 = rising (default)
        * 1 = falling
        * 2 = both
        
        The debounce time is given in ms.
        
        Configuring an edge counter resets its value to 0.
        
        If you don't know what any of this means, just leave it at default. The
        default configuration is very likely OK for you.
        
        Default values: 0 (edge type) and 100ms (debounce time)
        
        .. versionadded:: 2.0.3~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_EDGE_COUNT_CONFIG, [pin, edgeType, debounce], 'B B B', '', returnCallback, errorCallback);
    };
    this.getEdgeCountConfig = function(pin, returnCallback, errorCallback) {
        /*
        Returns the edge type and debounce time for the selected pin of port A as set by
        :func:`SetEdgeCountConfig`.
        
        .. versionadded:: 2.0.3~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_EDGE_COUNT_CONFIG, [pin], 'B', 'B B', returnCallback, errorCallback);
    };
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletIO16;

},{"./Device":48}],20:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletIO4.DEVICE_IDENTIFIER = 29;
BrickletIO4.CALLBACK_INTERRUPT = 9;
BrickletIO4.CALLBACK_MONOFLOP_DONE = 12;
BrickletIO4.FUNCTION_SET_VALUE = 1;
BrickletIO4.FUNCTION_GET_VALUE = 2;
BrickletIO4.FUNCTION_SET_CONFIGURATION = 3;
BrickletIO4.FUNCTION_GET_CONFIGURATION = 4;
BrickletIO4.FUNCTION_SET_DEBOUNCE_PERIOD = 5;
BrickletIO4.FUNCTION_GET_DEBOUNCE_PERIOD = 6;
BrickletIO4.FUNCTION_SET_INTERRUPT = 7;
BrickletIO4.FUNCTION_GET_INTERRUPT = 8;
BrickletIO4.FUNCTION_SET_MONOFLOP = 10;
BrickletIO4.FUNCTION_GET_MONOFLOP = 11;
BrickletIO4.FUNCTION_SET_SELECTED_VALUES = 13;
BrickletIO4.FUNCTION_GET_EDGE_COUNT = 14;
BrickletIO4.FUNCTION_SET_EDGE_COUNT_CONFIG = 15;
BrickletIO4.FUNCTION_GET_EDGE_COUNT_CONFIG = 16;
BrickletIO4.FUNCTION_GET_IDENTITY = 255;
BrickletIO4.DIRECTION_IN = 'i';
BrickletIO4.DIRECTION_OUT = 'o';
BrickletIO4.EDGE_TYPE_RISING = 0;
BrickletIO4.EDGE_TYPE_FALLING = 1;
BrickletIO4.EDGE_TYPE_BOTH = 2;

function BrickletIO4(uid, ipcon) {
    //Device for controlling up to 4 general purpose input/output pins
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletIO4.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 1];
    this.responseExpected[BrickletIO4.FUNCTION_SET_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIO4.FUNCTION_GET_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO4.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIO4.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO4.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletIO4.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO4.FUNCTION_SET_INTERRUPT] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletIO4.FUNCTION_GET_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO4.CALLBACK_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletIO4.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIO4.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO4.CALLBACK_MONOFLOP_DONE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletIO4.FUNCTION_SET_SELECTED_VALUES] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIO4.FUNCTION_GET_EDGE_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO4.FUNCTION_SET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIO4.FUNCTION_GET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIO4.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletIO4.CALLBACK_INTERRUPT] = 'B B';
    this.callbackFormats[BrickletIO4.CALLBACK_MONOFLOP_DONE] = 'B B';

    this.setValue = function(valueMask, returnCallback, errorCallback) {
        /*
        Sets the output value (high or low) with a bitmask (4bit). A 1 in the bitmask
        means high and a 0 in the bitmask means low.
        
        For example: The value 3 or 0b0011 will turn the pins 0-1 high and the
        pins 2-3 low.
        
        .. note::
         This function does nothing for pins that are configured as input.
         Pull-up resistors can be switched on with :func:`SetConfiguration`.
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_VALUE, [valueMask], 'B', '', returnCallback, errorCallback);
    };
    this.getValue = function(returnCallback, errorCallback) {
        /*
        Returns a bitmask of the values that are currently measured.
        This function works if the pin is configured to input
        as well as if it is configured to output.
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_VALUE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setConfiguration = function(selectionMask, direction, value, returnCallback, errorCallback) {
        /*
        Configures the value and direction of the specified pins. Possible directions
        are 'i' and 'o' for input and output.
        
        If the direction is configured as output, the value is either high or low
        (set as *true* or *false*).
        
        If the direction is configured as input, the value is either pull-up or
        default (set as *true* or *false*).
        
        For example:
        
        * (15, 'i', true) or (0b1111, 'i', true) will set all pins of as input pull-up.
        * (8, 'i', false) or (0b1000, 'i', false) will set pin 3 of as input default (floating if nothing is connected).
        * (3, 'o', false) or (0b0011, 'o', false) will set pins 0 and 1 as output low.
        * (4, 'o', true) or (0b0100, 'o', true) will set pin 2 of as output high.
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_CONFIGURATION, [selectionMask, direction, value], 'B c ?', '', returnCallback, errorCallback);
    };
    this.getConfiguration = function(returnCallback, errorCallback) {
        /*
        Returns a value bitmask and a direction bitmask. A 1 in the direction bitmask
        means input and a 0 in the bitmask means output.
        
        For example: A return value of (3, 5) or (0b0011, 0b0101) for direction and
        value means that:
        
        * pin 0 is configured as input pull-up,
        * pin 1 is configured as input default,
        * pin 2 is configured as output high and
        * pin 3 is are configured as output low.
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_CONFIGURATION, [], '', 'B B', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the debounce period of the :func:`Interrupt` callback in ms.
        
        For example: If you set this value to 100, you will get the interrupt
        maximal every 100ms. This is necessary if something that bounces is
        connected to the IO-4 Bricklet, such as a button.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setInterrupt = function(interruptMask, returnCallback, errorCallback) {
        /*
        Sets the pins on which an interrupt is activated with a bitmask.
        Interrupts are triggered on changes of the voltage level of the pin,
        i.e. changes from high to low and low to high.
        
        For example: An interrupt bitmask of 10 or 0b1010 will enable the interrupt for
        pins 1 and 3.
        
        The interrupt is delivered with the callback :func:`Interrupt`.
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_INTERRUPT, [interruptMask], 'B', '', returnCallback, errorCallback);
    };
    this.getInterrupt = function(returnCallback, errorCallback) {
        /*
        Returns the interrupt bitmask as set by :func:`SetInterrupt`.
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_INTERRUPT, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setMonoflop = function(selectionMask, valueMask, time, returnCallback, errorCallback) {
        /*
        Configures a monoflop of the pins specified by the first parameter as 4 bit
        long bitmask. The specified pins must be configured for output. Non-output
        pins will be ignored.
        
        The second parameter is a bitmask with the desired value of the specified
        output pins. A 1 in the bitmask means high and a 0 in the bitmask means low.
        
        The third parameter indicates the time (in ms) that the pins should hold
        the value.
        
        If this function is called with the parameters (9, 1, 1500) or
        (0b1001, 0b0001, 1500): Pin 0 will get high and pin 3 will get low. In 1.5s pin
        0 will get low and pin 3 will get high again.
        
        A monoflop can be used as a fail-safe mechanism. For example: Lets assume you
        have a RS485 bus and an IO-4 Bricklet connected to one of the slave
        stacks. You can now call this function every second, with a time parameter
        of two seconds and pin 0 set to high. Pin 0 will be high all the time. If now
        the RS485 connection is lost, then pin 0 will get low in at most two seconds.
        
        .. versionadded:: 1.1.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_MONOFLOP, [selectionMask, valueMask, time], 'B B I', '', returnCallback, errorCallback);
    };
    this.getMonoflop = function(pin, returnCallback, errorCallback) {
        /*
        Returns (for the given pin) the current value and the time as set by
        :func:`SetMonoflop` as well as the remaining time until the value flips.
        
        If the timer is not running currently, the remaining time will be returned
        as 0.
        
        .. versionadded:: 1.1.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_MONOFLOP, [pin], 'B', 'B I I', returnCallback, errorCallback);
    };
    this.setSelectedValues = function(selectionMask, valueMask, returnCallback, errorCallback) {
        /*
        Sets the output value (high or low) with a bitmask, according to
        the selection mask. The bitmask is 4 bit long, *true* refers to high 
        and *false* refers to low.
        
        For example: The parameters (9, 4) or (0b0110, 0b0100) will turn
        pin 1 low and pin 2 high, pin 0 and 3 will remain untouched.
        
        .. note::
         This function does nothing for pins that are configured as input.
         Pull-up resistors can be switched on with :func:`SetConfiguration`.
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_SELECTED_VALUES, [selectionMask, valueMask], 'B B', '', returnCallback, errorCallback);
    };
    this.getEdgeCount = function(pin, resetCounter, returnCallback, errorCallback) {
        /*
        Returns the current value of the edge counter for the selected pin. You can
        configure the edges that are counted with :func:`SetEdgeCountConfig`.
        
        If you set the reset counter to *true*, the count is set back to 0
        directly after it is read.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_EDGE_COUNT, [pin, resetCounter], 'B ?', 'I', returnCallback, errorCallback);
    };
    this.setEdgeCountConfig = function(selectionMask, edgeType, debounce, returnCallback, errorCallback) {
        /*
        Configures the edge counter for the selected pins.
        
        The edge type parameter configures if rising edges, falling edges or
        both are counted if the pin is configured for input. Possible edge types are:
        
        * 0 = rising (default)
        * 1 = falling
        * 2 = both
        
        The debounce time is given in ms.
        
        Configuring an edge counter resets its value to 0.
        
        If you don't know what any of this means, just leave it at default. The
        default configuration is very likely OK for you.
        
        Default values: 0 (edge type) and 100ms (debounce time)
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_SET_EDGE_COUNT_CONFIG, [selectionMask, edgeType, debounce], 'B B B', '', returnCallback, errorCallback);
    };
    this.getEdgeCountConfig = function(pin, returnCallback, errorCallback) {
        /*
        Returns the edge type and debounce time for the selected pin as set by
        :func:`SetEdgeCountConfig`.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_EDGE_COUNT_CONFIG, [pin], 'B', 'B B', returnCallback, errorCallback);
    };
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIO4.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletIO4;

},{"./Device":48}],21:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletIndustrialDigitalIn4.DEVICE_IDENTIFIER = 223;
BrickletIndustrialDigitalIn4.CALLBACK_INTERRUPT = 9;
BrickletIndustrialDigitalIn4.FUNCTION_GET_VALUE = 1;
BrickletIndustrialDigitalIn4.FUNCTION_SET_GROUP = 2;
BrickletIndustrialDigitalIn4.FUNCTION_GET_GROUP = 3;
BrickletIndustrialDigitalIn4.FUNCTION_GET_AVAILABLE_FOR_GROUP = 4;
BrickletIndustrialDigitalIn4.FUNCTION_SET_DEBOUNCE_PERIOD = 5;
BrickletIndustrialDigitalIn4.FUNCTION_GET_DEBOUNCE_PERIOD = 6;
BrickletIndustrialDigitalIn4.FUNCTION_SET_INTERRUPT = 7;
BrickletIndustrialDigitalIn4.FUNCTION_GET_INTERRUPT = 8;
BrickletIndustrialDigitalIn4.FUNCTION_GET_EDGE_COUNT = 10;
BrickletIndustrialDigitalIn4.FUNCTION_SET_EDGE_COUNT_CONFIG = 11;
BrickletIndustrialDigitalIn4.FUNCTION_GET_EDGE_COUNT_CONFIG = 12;
BrickletIndustrialDigitalIn4.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialDigitalIn4.EDGE_TYPE_RISING = 0;
BrickletIndustrialDigitalIn4.EDGE_TYPE_FALLING = 1;
BrickletIndustrialDigitalIn4.EDGE_TYPE_BOTH = 2;

function BrickletIndustrialDigitalIn4(uid, ipcon) {
    //Device for controlling up to 4 optically coupled digital inputs
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletIndustrialDigitalIn4.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 1];
    this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_SET_GROUP] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_GROUP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_AVAILABLE_FOR_GROUP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_SET_INTERRUPT] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDigitalIn4.CALLBACK_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_EDGE_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_SET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletIndustrialDigitalIn4.CALLBACK_INTERRUPT] = 'H H';

    this.getValue = function(returnCallback, errorCallback) {
        /*
        Returns the input value with a bitmask. The bitmask is 16bit long, *true*
        refers to high and *false* refers to low.
        
        For example: The value 3 or 0b0011 means that pins 0-1 are high and the other
        pins are low.
        
        If no groups are used (see :func:`SetGroup`), the pins correspond to the
        markings on the Digital In 4 Bricklet.
        
        If groups are used, the pins correspond to the element in the group.
        Element 1 in the group will get pins 0-3, element 2 pins 4-7, element 3
        pins 8-11 and element 4 pins 12-15.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setGroup = function(group, returnCallback, errorCallback) {
        /*
        Sets a group of Digital In 4 Bricklets that should work together. You can
        find Bricklets that can be grouped together with :func:`GetAvailableForGroup`.
        
        The group consists of 4 elements. Element 1 in the group will get pins 0-3,
        element 2 pins 4-7, element 3 pins 8-11 and element 4 pins 12-15.
        
        Each element can either be one of the ports ('a' to 'd') or 'n' if it should
        not be used.
        
        For example: If you have two Digital In 4 Bricklets connected to port A and
        port B respectively, you could call with ``['a', 'b', 'n', 'n']``.
        
        Now the pins on the Digital In 4 on port A are assigned to 0-3 and the
        pins on the Digital In 4 on port B are assigned to 4-7. It is now possible
        to call :func:`GetValue` and read out two Bricklets at the same time.
        
        Changing the group configuration resets all edge counter configurations
        and values.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_SET_GROUP, [group], 'c4', '', returnCallback, errorCallback);
    };
    this.getGroup = function(returnCallback, errorCallback) {
        /*
        Returns the group as set by :func:`SetGroup`
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_GROUP, [], '', 'c4', returnCallback, errorCallback);
    };   
    this.getAvailableForGroup = function(returnCallback, errorCallback) {
        /*
        Returns a bitmask of ports that are available for grouping. For example the
        value 5 or 0b0101 means: Port A and port C are connected to Bricklets that
        can be grouped together.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_AVAILABLE_FOR_GROUP, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the debounce period of the :func:`Interrupt` callback in ms.
        
        For example: If you set this value to 100, you will get the interrupt
        maximal every 100ms. This is necessary if something that bounces is
        connected to the Digital In 4 Bricklet, such as a button.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setInterrupt = function(interruptMask, returnCallback, errorCallback) {
        /*
        Sets the pins on which an interrupt is activated with a bitmask.
        Interrupts are triggered on changes of the voltage level of the pin,
        i.e. changes from high to low and low to high.
        
        For example: An interrupt bitmask of 9 or 0b1001 will enable the interrupt for
        pins 0 and 3.
        
        The interrupts use the grouping as set by :func:`SetGroup`.
        
        The interrupt is delivered with the callback :func:`Interrupt`.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_SET_INTERRUPT, [interruptMask], 'H', '', returnCallback, errorCallback);
    };
    this.getInterrupt = function(returnCallback, errorCallback) {
        /*
        Returns the interrupt bitmask as set by :func:`SetInterrupt`.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_INTERRUPT, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getEdgeCount = function(pin, resetCounter, returnCallback, errorCallback) {
        /*
        Returns the current value of the edge counter for the selected pin. You can
        configure the edges that are counted with :func:`SetEdgeCountConfig`.
        
        If you set the reset counter to *true*, the count is set back to 0
        directly after it is read.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_EDGE_COUNT, [pin, resetCounter], 'B ?', 'I', returnCallback, errorCallback);
    };
    this.setEdgeCountConfig = function(selectionMask, edgeType, debounce, returnCallback, errorCallback) {
        /*
        Configures the edge counter for the selected pins. A bitmask of 9 or 0b1001 will
        enable the edge counter for pins 0 and 3.
        
        The edge type parameter configures if rising edges, falling edges or
        both are counted if the pin is configured for input. Possible edge types are:
        
        * 0 = rising (default)
        * 1 = falling
        * 2 = both
        
        The debounce time is given in ms.
        
        Configuring an edge counter resets its value to 0.
        
        If you don't know what any of this means, just leave it at default. The
        default configuration is very likely OK for you.
        
        Default values: 0 (edge type) and 100ms (debounce time)
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_SET_EDGE_COUNT_CONFIG, [selectionMask, edgeType, debounce], 'H B B', '', returnCallback, errorCallback);
    };
    this.getEdgeCountConfig = function(pin, returnCallback, errorCallback) {
        /*
        Returns the edge type and debounce time for the selected pin as set by
        :func:`SetEdgeCountConfig`.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_EDGE_COUNT_CONFIG, [pin], 'B', 'B B', returnCallback, errorCallback);
    };
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletIndustrialDigitalIn4;

},{"./Device":48}],22:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletIndustrialDigitalOut4.DEVICE_IDENTIFIER = 224;
BrickletIndustrialDigitalOut4.CALLBACK_MONOFLOP_DONE = 8;
BrickletIndustrialDigitalOut4.FUNCTION_SET_VALUE = 1;
BrickletIndustrialDigitalOut4.FUNCTION_GET_VALUE = 2;
BrickletIndustrialDigitalOut4.FUNCTION_SET_MONOFLOP = 3;
BrickletIndustrialDigitalOut4.FUNCTION_GET_MONOFLOP = 4;
BrickletIndustrialDigitalOut4.FUNCTION_SET_GROUP = 5;
BrickletIndustrialDigitalOut4.FUNCTION_GET_GROUP = 6;
BrickletIndustrialDigitalOut4.FUNCTION_GET_AVAILABLE_FOR_GROUP = 7;
BrickletIndustrialDigitalOut4.FUNCTION_SET_SELECTED_VALUES = 9;
BrickletIndustrialDigitalOut4.FUNCTION_GET_IDENTITY = 255;

function BrickletIndustrialDigitalOut4(uid, ipcon) {
    //Device for controlling up to 4 optically coupled digital outputs
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletIndustrialDigitalOut4.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_SET_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_GET_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_SET_GROUP] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_GET_GROUP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_GET_AVAILABLE_FOR_GROUP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDigitalOut4.CALLBACK_MONOFLOP_DONE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_SET_SELECTED_VALUES] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletIndustrialDigitalOut4.CALLBACK_MONOFLOP_DONE] = 'H H';

    this.setValue = function(valueMask, returnCallback, errorCallback) {
        /*
        Sets the output value with a bitmask (16bit). A 1 in the bitmask means high
        and a 0 in the bitmask means low.
        
        For example: The value 3 or 0b0011 will turn pins 0-1 high and the other pins
        low.
        
        If no groups are used (see :func:`SetGroup`), the pins correspond to the
        markings on the Digital Out 4 Bricklet.
        
        If groups are used, the pins correspond to the element in the group.
        Element 1 in the group will get pins 0-3, element 2 pins 4-7, element 3
        pins 8-11 and element 4 pins 12-15.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_SET_VALUE, [valueMask], 'H', '', returnCallback, errorCallback);
    };
    this.getValue = function(returnCallback, errorCallback) {
        /*
        Returns the bitmask as set by :func:`SetValue`.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_GET_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setMonoflop = function(selectionMask, valueMask, time, returnCallback, errorCallback) {
        /*
        Configures a monoflop of the pins specified by the first parameter
        bitmask.
        
        The second parameter is a bitmask with the desired value of the specified
        pins. A 1 in the bitmask means high and a 0 in the bitmask means low.
        
        The third parameter indicates the time (in ms) that the pins should hold
        the value.
        
        If this function is called with the parameters (9, 1, 1500) or
        (0b1001, 0b0001, 1500): Pin 0 will get high and pin 3 will get low. In 1.5s
        pin 0 will get low and pin 3 will get high again.
        
        A monoflop can be used as a fail-safe mechanism. For example: Lets assume you
        have a RS485 bus and a Digital Out 4 Bricklet connected to one of the slave
        stacks. You can now call this function every second, with a time parameter
        of two seconds and pin 0 high. Pin 0 will be high all the time. If now
        the RS485 connection is lost, then pin 0 will turn low in at most two seconds.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_SET_MONOFLOP, [selectionMask, valueMask, time], 'H H I', '', returnCallback, errorCallback);
    };
    this.getMonoflop = function(pin, returnCallback, errorCallback) {
        /*
        Returns (for the given pin) the current value and the time as set by
        :func:`SetMonoflop` as well as the remaining time until the value flips.
        
        If the timer is not running currently, the remaining time will be returned
        as 0.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_GET_MONOFLOP, [pin], 'B', 'H I I', returnCallback, errorCallback);
    };
    this.setGroup = function(group, returnCallback, errorCallback) {
        /*
        Sets a group of Digital Out 4 Bricklets that should work together. You can
        find Bricklets that can be grouped together with :func:`GetAvailableForGroup`.
        
        The group consists of 4 elements. Element 1 in the group will get pins 0-3,
        element 2 pins 4-7, element 3 pins 8-11 and element 4 pins 12-15.
        
        Each element can either be one of the ports ('a' to 'd') or 'n' if it should
        not be used.
        
        For example: If you have two Digital Out 4 Bricklets connected to port A and
        port B respectively, you could call with ``['a', 'b', 'n', 'n']``.
        
        Now the pins on the Digital Out 4 on port A are assigned to 0-3 and the
        pins on the Digital Out 4 on port B are assigned to 4-7. It is now possible
        to call :func:`SetValue` and control two Bricklets at the same time.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_SET_GROUP, [group], 'c4', '', returnCallback, errorCallback);
    };
    this.getGroup = function(returnCallback, errorCallback) {
        /*
        Returns the group as set by :func:`SetGroup`
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_GET_GROUP, [], '', 'c4', returnCallback, errorCallback);
    };   
    this.getAvailableForGroup = function(returnCallback, errorCallback) {
        /*
        Returns a bitmask of ports that are available for grouping. For example the
        value 5 or 0b0101 means: Port A and port C are connected to Bricklets that
        can be grouped together.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_GET_AVAILABLE_FOR_GROUP, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setSelectedValues = function(selectionMask, valueMask, returnCallback, errorCallback) {
        /*
        Sets the output value with a bitmask, according to the selection mask.
        The bitmask is 16 bit long, *true* refers to high and *false* refers to 
        low.
        
        For example: The values (3, 1) or (0b0011, 0b0001) will turn pin 0 high, pin 1
        low the other pins remain untouched.
        
        If no groups are used (see :func:`SetGroup`), the pins correspond to the
        markings on the Digital Out 4 Bricklet.
        
        If groups are used, the pins correspond to the element in the group.
        Element 1 in the group will get pins 0-3, element 2 pins 4-7, element 3
        pins 8-11 and element 4 pins 12-15.
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_SET_SELECTED_VALUES, [selectionMask, valueMask], 'H H', '', returnCallback, errorCallback);
    };
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletIndustrialDigitalOut4;

},{"./Device":48}],23:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletIndustrialDual020mA.DEVICE_IDENTIFIER = 228;
BrickletIndustrialDual020mA.CALLBACK_CURRENT = 10;
BrickletIndustrialDual020mA.CALLBACK_CURRENT_REACHED = 11;
BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT = 1;
BrickletIndustrialDual020mA.FUNCTION_SET_CURRENT_CALLBACK_PERIOD = 2;
BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT_CALLBACK_PERIOD = 3;
BrickletIndustrialDual020mA.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD = 4;
BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD = 5;
BrickletIndustrialDual020mA.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletIndustrialDual020mA.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletIndustrialDual020mA.FUNCTION_SET_SAMPLE_RATE = 8;
BrickletIndustrialDual020mA.FUNCTION_GET_SAMPLE_RATE = 9;
BrickletIndustrialDual020mA.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialDual020mA.THRESHOLD_OPTION_OFF = 'x';
BrickletIndustrialDual020mA.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletIndustrialDual020mA.THRESHOLD_OPTION_INSIDE = 'i';
BrickletIndustrialDual020mA.THRESHOLD_OPTION_SMALLER = '<';
BrickletIndustrialDual020mA.THRESHOLD_OPTION_GREATER = '>';
BrickletIndustrialDual020mA.SAMPLE_RATE_240_SPS = 0;
BrickletIndustrialDual020mA.SAMPLE_RATE_60_SPS = 1;
BrickletIndustrialDual020mA.SAMPLE_RATE_15_SPS = 2;
BrickletIndustrialDual020mA.SAMPLE_RATE_4_SPS = 3;

function BrickletIndustrialDual020mA(uid, ipcon) {
    //Device for sensing two currents between 0 and 20mA (IEC 60381-1)
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletIndustrialDual020mA.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_SET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_SET_SAMPLE_RATE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_GET_SAMPLE_RATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialDual020mA.CALLBACK_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletIndustrialDual020mA.CALLBACK_CURRENT_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletIndustrialDual020mA.CALLBACK_CURRENT] = 'B i';
    this.callbackFormats[BrickletIndustrialDual020mA.CALLBACK_CURRENT_REACHED] = 'B i';

    this.getCurrent = function(sensor, returnCallback, errorCallback) {
        /*
        Returns the current of the specified sensor (0 or 1). The value is in nA
        and between 0nA and 22505322nA (22.5mA).
        
        It is possible to detect if an IEC 60381-1 compatible sensor is connected
        and if it works probably.
        
        If the returned current is below 4mA, there is likely no sensor connected
        or the sensor may be defect. If the returned current is over 20mA, there might
        be a short circuit or the sensor may be defect.
        
        If you want to get the current periodically, it is recommended to use the
        callback :func:`Current` and set the period with 
        :func:`SetCurrentCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT, [sensor], 'B', 'i', returnCallback, errorCallback);
    };
    this.setCurrentCallbackPeriod = function(sensor, period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Current` callback is triggered
        periodically for the given sensor. A value of 0 turns the callback off.
        
        :func:`Current` is only triggered if the current has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_SET_CURRENT_CALLBACK_PERIOD, [sensor, period], 'B I', '', returnCallback, errorCallback);
    };
    this.getCurrentCallbackPeriod = function(sensor, returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetCurrentCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT_CALLBACK_PERIOD, [sensor], 'B', 'I', returnCallback, errorCallback);
    };
    this.setCurrentCallbackThreshold = function(sensor, option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`CurrentReached` callback for the given
        sensor.
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the current is *outside* the min and max values"
         "'i'",    "Callback is triggered when the current is *inside* the min and max values"
         "'<'",    "Callback is triggered when the current is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the current is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD, [sensor, option, min, max], 'B c i i', '', returnCallback, errorCallback);
    };
    this.getCurrentCallbackThreshold = function(sensor, returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetCurrentCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD, [sensor], 'B', 'c i i', returnCallback, errorCallback);
    };
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callback
        
        * :func:`CurrentReached`
        
        is triggered, if the threshold
        
        * :func:`SetCurrentCallbackThreshold`
        
        keeps being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setSampleRate = function(rate, returnCallback, errorCallback) {
        /*
        Sets the sample rate to either 240, 60, 15 or 4 samples per second.
        The resolution for the rates is 12, 14, 16 and 18 bit respectively.
        
        .. csv-table::
         :header: "Value", "Description"
         :widths: 10, 100
        
         "0",    "240 samples per second, 12 bit resolution"
         "1",    "60 samples per second, 14 bit resolution"
         "2",    "15 samples per second, 16 bit resolution"
         "3",    "4 samples per second, 18 bit resolution"
        
        The default value is 3: 4 samples per second with 18 bit resolution.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_SET_SAMPLE_RATE, [rate], 'B', '', returnCallback, errorCallback);
    };
    this.getSampleRate = function(returnCallback, errorCallback) {
        /*
        Returns the sample rate as set by :func:`SetSampleRate`.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_GET_SAMPLE_RATE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletIndustrialDual020mA;

},{"./Device":48}],24:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletIndustrialQuadRelay.DEVICE_IDENTIFIER = 225;
BrickletIndustrialQuadRelay.CALLBACK_MONOFLOP_DONE = 8;
BrickletIndustrialQuadRelay.FUNCTION_SET_VALUE = 1;
BrickletIndustrialQuadRelay.FUNCTION_GET_VALUE = 2;
BrickletIndustrialQuadRelay.FUNCTION_SET_MONOFLOP = 3;
BrickletIndustrialQuadRelay.FUNCTION_GET_MONOFLOP = 4;
BrickletIndustrialQuadRelay.FUNCTION_SET_GROUP = 5;
BrickletIndustrialQuadRelay.FUNCTION_GET_GROUP = 6;
BrickletIndustrialQuadRelay.FUNCTION_GET_AVAILABLE_FOR_GROUP = 7;
BrickletIndustrialQuadRelay.FUNCTION_SET_SELECTED_VALUES = 9;
BrickletIndustrialQuadRelay.FUNCTION_GET_IDENTITY = 255;

function BrickletIndustrialQuadRelay(uid, ipcon) {
    //Device for controlling up to 4 Solid State Relays
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletIndustrialQuadRelay.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletIndustrialQuadRelay.FUNCTION_SET_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIndustrialQuadRelay.FUNCTION_GET_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialQuadRelay.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIndustrialQuadRelay.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialQuadRelay.FUNCTION_SET_GROUP] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIndustrialQuadRelay.FUNCTION_GET_GROUP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialQuadRelay.FUNCTION_GET_AVAILABLE_FOR_GROUP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletIndustrialQuadRelay.CALLBACK_MONOFLOP_DONE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletIndustrialQuadRelay.FUNCTION_SET_SELECTED_VALUES] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletIndustrialQuadRelay.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletIndustrialQuadRelay.CALLBACK_MONOFLOP_DONE] = 'H H';

    this.setValue = function(valueMask, returnCallback, errorCallback) {
        /*
        Sets the output value with a bitmask (16bit). A 1 in the bitmask means relay
        closed and a 0 means relay open.
        
        For example: The value 3 or 0b0011 will close the relay of pins 0-1 and open
        the other pins.
        
        If no groups are used (see :func:`SetGroup`), the pins correspond to the
        markings on the Quad Relay Bricklet.
        
        If groups are used, the pins correspond to the element in the group.
        Element 1 in the group will get pins 0-3, element 2 pins 4-7, element 3
        pins 8-11 and element 4 pins 12-15.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialQuadRelay.FUNCTION_SET_VALUE, [valueMask], 'H', '', returnCallback, errorCallback);
    };
    this.getValue = function(returnCallback, errorCallback) {
        /*
        Returns the bitmask as set by :func:`SetValue`.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialQuadRelay.FUNCTION_GET_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setMonoflop = function(selectionMask, valueMask, time, returnCallback, errorCallback) {
        /*
        Configures a monoflop of the pins specified by the first parameter
        bitmask.
        
        The second parameter is a bitmask with the desired value of the specified
        pins. A 1 in the bitmask means relay closed and a 0 means relay open.
        
        The third parameter indicates the time (in ms) that the pins should hold
        the value.
        
        If this function is called with the parameters (9, 1, 1500) or
        (0b1001, 0b0001, 1500): Pin 0 will close and pin 3 will open. In 1.5s pin 0
        will open and pin 3 will close again.
        
        A monoflop can be used as a fail-safe mechanism. For example: Lets assume you
        have a RS485 bus and a Quad Relay Bricklet connected to one of the slave
        stacks. You can now call this function every second, with a time parameter
        of two seconds and pin 0 closed. Pin 0 will be closed all the time. If now
        the RS485 connection is lost, then pin 0 will be opened in at most two seconds.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialQuadRelay.FUNCTION_SET_MONOFLOP, [selectionMask, valueMask, time], 'H H I', '', returnCallback, errorCallback);
    };
    this.getMonoflop = function(pin, returnCallback, errorCallback) {
        /*
        Returns (for the given pin) the current value and the time as set by
        :func:`SetMonoflop` as well as the remaining time until the value flips.
        
        If the timer is not running currently, the remaining time will be returned
        as 0.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialQuadRelay.FUNCTION_GET_MONOFLOP, [pin], 'B', 'H I I', returnCallback, errorCallback);
    };
    this.setGroup = function(group, returnCallback, errorCallback) {
        /*
        Sets a group of Quad Relay Bricklets that should work together. You can
        find Bricklets that can be grouped together with :func:`GetAvailableForGroup`.
        
        The group consists of 4 elements. Element 1 in the group will get pins 0-3,
        element 2 pins 4-7, element 3 pins 8-11 and element 4 pins 12-15.
        
        Each element can either be one of the ports ('a' to 'd') or 'n' if it should
        not be used.
        
        For example: If you have two Quad Relay Bricklets connected to port A and
        port B respectively, you could call with ``['a', 'b', 'n', 'n']``.
        
        Now the pins on the Quad Relay on port A are assigned to 0-3 and the
        pins on the Quad Relay on port B are assigned to 4-7. It is now possible
        to call :func:`SetValue` and control two Bricklets at the same time.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialQuadRelay.FUNCTION_SET_GROUP, [group], 'c4', '', returnCallback, errorCallback);
    };
    this.getGroup = function(returnCallback, errorCallback) {
        /*
        Returns the group as set by :func:`SetGroup`
        */
        this.ipcon.sendRequest(this, BrickletIndustrialQuadRelay.FUNCTION_GET_GROUP, [], '', 'c4', returnCallback, errorCallback);
    };   
    this.getAvailableForGroup = function(returnCallback, errorCallback) {
        /*
        Returns a bitmask of ports that are available for grouping. For example the
        value 5 or 0b0101 means: Port A and port C are connected to Bricklets that
        can be grouped together.
        */
        this.ipcon.sendRequest(this, BrickletIndustrialQuadRelay.FUNCTION_GET_AVAILABLE_FOR_GROUP, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setSelectedValues = function(selectionMask, valueMask, returnCallback, errorCallback) {
        /*
        Sets the output value with a bitmask, according to the selection mask. 
        The bitmask is 16 bit long, *true* refers to a closed relay and 
        *false* refers to an open relay.
        
        For example: The values (3, 1) or (0b0011, 0b0001) will close the relay of
        pin 0, open the relay of pin 1 and leave the others untouched.
        
        If no groups are used (see :func:`SetGroup`), the pins correspond to the
        markings on the Quad Relay Bricklet.
        
        If groups are used, the pins correspond to the element in the group.
        Element 1 in the group will get pins 0-3, element 2 pins 4-7, element 3
        pins 8-11 and element 4 pins 12-15.
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIndustrialQuadRelay.FUNCTION_SET_SELECTED_VALUES, [selectionMask, valueMask], 'H H', '', returnCallback, errorCallback);
    };
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletIndustrialQuadRelay.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletIndustrialQuadRelay;

},{"./Device":48}],25:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletJoystick.DEVICE_IDENTIFIER = 210;
BrickletJoystick.CALLBACK_POSITION = 15;
BrickletJoystick.CALLBACK_ANALOG_VALUE = 16;
BrickletJoystick.CALLBACK_POSITION_REACHED = 17;
BrickletJoystick.CALLBACK_ANALOG_VALUE_REACHED = 18;
BrickletJoystick.CALLBACK_PRESSED = 19;
BrickletJoystick.CALLBACK_RELEASED = 20;
BrickletJoystick.FUNCTION_GET_POSITION = 1;
BrickletJoystick.FUNCTION_IS_PRESSED = 2;
BrickletJoystick.FUNCTION_GET_ANALOG_VALUE = 3;
BrickletJoystick.FUNCTION_CALIBRATE = 4;
BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_PERIOD = 5;
BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_PERIOD = 6;
BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 7;
BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 8;
BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD = 9;
BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD = 10;
BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 11;
BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 12;
BrickletJoystick.FUNCTION_SET_DEBOUNCE_PERIOD = 13;
BrickletJoystick.FUNCTION_GET_DEBOUNCE_PERIOD = 14;
BrickletJoystick.FUNCTION_GET_IDENTITY = 255;
BrickletJoystick.THRESHOLD_OPTION_OFF = 'x';
BrickletJoystick.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletJoystick.THRESHOLD_OPTION_INSIDE = 'i';
BrickletJoystick.THRESHOLD_OPTION_SMALLER = '<';
BrickletJoystick.THRESHOLD_OPTION_GREATER = '>';

function BrickletJoystick(uid, ipcon) {
    //Dual-Axis Joystick with Button
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletJoystick.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletJoystick.FUNCTION_GET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletJoystick.FUNCTION_IS_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletJoystick.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletJoystick.FUNCTION_CALIBRATE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletJoystick.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletJoystick.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletJoystick.CALLBACK_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletJoystick.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletJoystick.CALLBACK_POSITION_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletJoystick.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletJoystick.CALLBACK_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletJoystick.CALLBACK_RELEASED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletJoystick.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletJoystick.CALLBACK_POSITION] = 'h h';
    this.callbackFormats[BrickletJoystick.CALLBACK_ANALOG_VALUE] = 'H H';
    this.callbackFormats[BrickletJoystick.CALLBACK_POSITION_REACHED] = 'h h';
    this.callbackFormats[BrickletJoystick.CALLBACK_ANALOG_VALUE_REACHED] = 'H H';
    this.callbackFormats[BrickletJoystick.CALLBACK_PRESSED] = '';
    this.callbackFormats[BrickletJoystick.CALLBACK_RELEASED] = '';

    this.getPosition = function(returnCallback, errorCallback) {
        /*
        Returns the position of the Joystick. The value ranges between -100 and
        100 for both axis. The middle position of the joystick is x=0, y=0. The
        returned values are averaged and calibrated (see :func:`Calibrate`).
        
        If you want to get the position periodically, it is recommended to use the
        callback :func:`Position` and set the period with 
        :func:`SetPositionCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_POSITION, [], '', 'h h', returnCallback, errorCallback);
    };   
    this.isPressed = function(returnCallback, errorCallback) {
        /*
        Returns *true* if the button is pressed and *false* otherwise.
        
        It is recommended to use the :func:`Pressed` and :func:`Released` callbacks
        to handle the button.
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_IS_PRESSED, [], '', '?', returnCallback, errorCallback);
    };   
    this.getAnalogValue = function(returnCallback, errorCallback) {
        /*
        Returns the values as read by a 12-bit analog-to-digital converter.
        The values are between 0 and 4095 for both axis.
        
        .. note::
         The values returned by :func:`GetPosition` are averaged over several samples
         to yield less noise, while :func:`GetAnalogValue` gives back raw
         unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
         if you need the full resolution of the analog-to-digital converter.
        
        If you want the analog values periodically, it is recommended to use the 
        callback :func:`AnalogValue` and set the period with 
        :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_ANALOG_VALUE, [], '', 'H H', returnCallback, errorCallback);
    };   
    this.calibrate = function(returnCallback, errorCallback) {
        /*
        Calibrates the middle position of the Joystick. If your Joystick Bricklet
        does not return x=0 and y=0 in the middle position, call this function
        while the Joystick is standing still in the middle position.
        
        The resulting calibration will be saved on the EEPROM of the Joystick
        Bricklet, thus you only have to calibrate it once.
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_CALIBRATE, [], '', '', returnCallback, errorCallback);
    };   
    this.setPositionCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Position` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Position` is only triggered if the position has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getPositionCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetPositionCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AnalogValue` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`AnalogValue` is only triggered if the analog values have changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setPositionCallbackThreshold = function(option, minX, maxX, minY, maxY, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`PositionReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the position is *outside* the min and max values"
         "'i'",    "Callback is triggered when the position is *inside* the min and max values"
         "'<'",    "Callback is triggered when the position is smaller than the min values (max is ignored)"
         "'>'",    "Callback is triggered when the position is greater than the min values (max is ignored)"
        
        The default value is ('x', 0, 0, 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD, [option, minX, maxX, minY, maxY], 'c h h h h', '', returnCallback, errorCallback);
    };
    this.getPositionCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetPositionCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD, [], '', 'c h h h h', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackThreshold = function(option, minX, maxX, minY, maxY, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AnalogValueReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the analog values are *outside* the min and max values"
         "'i'",    "Callback is triggered when the analog values are *inside* the min and max values"
         "'<'",    "Callback is triggered when the analog values are smaller than the min values (max is ignored)"
         "'>'",    "Callback is triggered when the analog values are greater than the min values (max is ignored)"
        
        The default value is ('x', 0, 0, 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, minX, maxX, minY, maxY], 'c H H H H', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`PositionReached`,
        * :func:`AnalogValueReached`
        
        are triggered, if the thresholds
        
        * :func:`SetPositionCallbackThreshold`,
        * :func:`SetAnalogValueCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletJoystick;

},{"./Device":48}],26:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletLCD16x2.DEVICE_IDENTIFIER = 211;
BrickletLCD16x2.CALLBACK_BUTTON_PRESSED = 9;
BrickletLCD16x2.CALLBACK_BUTTON_RELEASED = 10;
BrickletLCD16x2.FUNCTION_WRITE_LINE = 1;
BrickletLCD16x2.FUNCTION_CLEAR_DISPLAY = 2;
BrickletLCD16x2.FUNCTION_BACKLIGHT_ON = 3;
BrickletLCD16x2.FUNCTION_BACKLIGHT_OFF = 4;
BrickletLCD16x2.FUNCTION_IS_BACKLIGHT_ON = 5;
BrickletLCD16x2.FUNCTION_SET_CONFIG = 6;
BrickletLCD16x2.FUNCTION_GET_CONFIG = 7;
BrickletLCD16x2.FUNCTION_IS_BUTTON_PRESSED = 8;
BrickletLCD16x2.FUNCTION_SET_CUSTOM_CHARACTER = 11;
BrickletLCD16x2.FUNCTION_GET_CUSTOM_CHARACTER = 12;
BrickletLCD16x2.FUNCTION_GET_IDENTITY = 255;

function BrickletLCD16x2(uid, ipcon) {
    //Device for controlling a LCD with 2 lines a 16 characters
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletLCD16x2.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletLCD16x2.FUNCTION_WRITE_LINE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD16x2.FUNCTION_CLEAR_DISPLAY] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD16x2.FUNCTION_BACKLIGHT_ON] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD16x2.FUNCTION_BACKLIGHT_OFF] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD16x2.FUNCTION_IS_BACKLIGHT_ON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLCD16x2.FUNCTION_SET_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD16x2.FUNCTION_GET_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLCD16x2.FUNCTION_IS_BUTTON_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLCD16x2.CALLBACK_BUTTON_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletLCD16x2.CALLBACK_BUTTON_RELEASED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletLCD16x2.FUNCTION_SET_CUSTOM_CHARACTER] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD16x2.FUNCTION_GET_CUSTOM_CHARACTER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLCD16x2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletLCD16x2.CALLBACK_BUTTON_PRESSED] = 'B';
    this.callbackFormats[BrickletLCD16x2.CALLBACK_BUTTON_RELEASED] = 'B';

    this.writeLine = function(line, position, text, returnCallback, errorCallback) {
        /*
        Writes text to a specific line (0 to 1) with a specific position 
        (0 to 15). The text can have a maximum of 16 characters.
        
        For example: (0, 5, "Hello") will write *Hello* in the middle of the
        first line of the display.
        
        The display uses a special charset that includes all ASCII characters except
        backslash and tilde. The LCD charset also includes several other non-ASCII characters, see
        the `charset specification <https://github.com/Tinkerforge/lcd-16x2-bricklet/raw/master/datasheets/standard_charset.pdf>`__
        for details. The Unicode example above shows how to specify non-ASCII characters
        and how to translate from Unicode to the LCD charset.
        */
        this.ipcon.sendRequest(this, BrickletLCD16x2.FUNCTION_WRITE_LINE, [line, position, text], 'B B s16', '', returnCallback, errorCallback);
    };
    this.clearDisplay = function(returnCallback, errorCallback) {
        /*
        Deletes all characters from the display.
        */
        this.ipcon.sendRequest(this, BrickletLCD16x2.FUNCTION_CLEAR_DISPLAY, [], '', '', returnCallback, errorCallback);
    };   
    this.backlightOn = function(returnCallback, errorCallback) {
        /*
        Turns the backlight on.
        */
        this.ipcon.sendRequest(this, BrickletLCD16x2.FUNCTION_BACKLIGHT_ON, [], '', '', returnCallback, errorCallback);
    };   
    this.backlightOff = function(returnCallback, errorCallback) {
        /*
        Turns the backlight off.
        */
        this.ipcon.sendRequest(this, BrickletLCD16x2.FUNCTION_BACKLIGHT_OFF, [], '', '', returnCallback, errorCallback);
    };   
    this.isBacklightOn = function(returnCallback, errorCallback) {
        /*
        Returns *true* if the backlight is on and *false* otherwise.
        */
        this.ipcon.sendRequest(this, BrickletLCD16x2.FUNCTION_IS_BACKLIGHT_ON, [], '', '?', returnCallback, errorCallback);
    };   
    this.setConfig = function(cursor, blinking, returnCallback, errorCallback) {
        /*
        Configures if the cursor (shown as "_") should be visible and if it
        should be blinking (shown as a blinking block). The cursor position
        is one character behind the the last text written with 
        :func:`WriteLine`.
        
        The default is (false, false).
        */
        this.ipcon.sendRequest(this, BrickletLCD16x2.FUNCTION_SET_CONFIG, [cursor, blinking], '? ?', '', returnCallback, errorCallback);
    };
    this.getConfig = function(returnCallback, errorCallback) {
        /*
        Returns the configuration as set by :func:`SetConfig`.
        */
        this.ipcon.sendRequest(this, BrickletLCD16x2.FUNCTION_GET_CONFIG, [], '', '? ?', returnCallback, errorCallback);
    };   
    this.isButtonPressed = function(button, returnCallback, errorCallback) {
        /*
        Returns *true* if the button (0 to 2) is pressed. If you want to react
        on button presses and releases it is recommended to use the
        :func:`ButtonPressed` and :func:`ButtonReleased` callbacks.
        */
        this.ipcon.sendRequest(this, BrickletLCD16x2.FUNCTION_IS_BUTTON_PRESSED, [button], 'B', '?', returnCallback, errorCallback);
    };
    this.setCustomCharacter = function(index, character, returnCallback, errorCallback) {
        /*
        The LCD 16x2 Bricklet can store up to 8 custom characters. The characters
        consist of 5x8 pixels and can be addressed with the index 0-7. To describe
        the pixels, the first 5 bits of 8 bytes are used. For example, to make
        a custom character "H", you should transfer the following:
        
        * ``character[0] = 0b00010001`` (decimal value 17)
        * ``character[1] = 0b00010001`` (decimal value 17)
        * ``character[2] = 0b00010001`` (decimal value 17)
        * ``character[3] = 0b00011111`` (decimal value 31)
        * ``character[4] = 0b00010001`` (decimal value 17)
        * ``character[5] = 0b00010001`` (decimal value 17)
        * ``character[6] = 0b00010001`` (decimal value 17)
        * ``character[7] = 0b00000000`` (decimal value 0)
        
        The characters can later be written with :func:`WriteLine` by using the
        characters with the byte representation 8 to 15.
        
        You can play around with the custom characters in Brick Viewer since
        version 2.0.1.
        
        Custom characters are stored by the LCD in RAM, so they have to be set
        after each startup.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLCD16x2.FUNCTION_SET_CUSTOM_CHARACTER, [index, character], 'B B8', '', returnCallback, errorCallback);
    };
    this.getCustomCharacter = function(index, returnCallback, errorCallback) {
        /*
        Returns the custom character for a given index, as set with
        :func:`SetCustomCharacter`.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLCD16x2.FUNCTION_GET_CUSTOM_CHARACTER, [index], 'B', 'B8', returnCallback, errorCallback);
    };
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLCD16x2.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletLCD16x2;

},{"./Device":48}],27:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletLCD20x4.DEVICE_IDENTIFIER = 212;
BrickletLCD20x4.CALLBACK_BUTTON_PRESSED = 9;
BrickletLCD20x4.CALLBACK_BUTTON_RELEASED = 10;
BrickletLCD20x4.FUNCTION_WRITE_LINE = 1;
BrickletLCD20x4.FUNCTION_CLEAR_DISPLAY = 2;
BrickletLCD20x4.FUNCTION_BACKLIGHT_ON = 3;
BrickletLCD20x4.FUNCTION_BACKLIGHT_OFF = 4;
BrickletLCD20x4.FUNCTION_IS_BACKLIGHT_ON = 5;
BrickletLCD20x4.FUNCTION_SET_CONFIG = 6;
BrickletLCD20x4.FUNCTION_GET_CONFIG = 7;
BrickletLCD20x4.FUNCTION_IS_BUTTON_PRESSED = 8;
BrickletLCD20x4.FUNCTION_SET_CUSTOM_CHARACTER = 11;
BrickletLCD20x4.FUNCTION_GET_CUSTOM_CHARACTER = 12;
BrickletLCD20x4.FUNCTION_SET_DEFAULT_TEXT = 13;
BrickletLCD20x4.FUNCTION_GET_DEFAULT_TEXT = 14;
BrickletLCD20x4.FUNCTION_SET_DEFAULT_TEXT_COUNTER = 15;
BrickletLCD20x4.FUNCTION_GET_DEFAULT_TEXT_COUNTER = 16;
BrickletLCD20x4.FUNCTION_GET_IDENTITY = 255;

function BrickletLCD20x4(uid, ipcon) {
    //Device for controlling a LCD with 4 lines a 20 characters
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletLCD20x4.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletLCD20x4.FUNCTION_WRITE_LINE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_CLEAR_DISPLAY] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_BACKLIGHT_ON] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_BACKLIGHT_OFF] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_IS_BACKLIGHT_ON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_SET_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_GET_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_IS_BUTTON_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLCD20x4.CALLBACK_BUTTON_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletLCD20x4.CALLBACK_BUTTON_RELEASED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_SET_CUSTOM_CHARACTER] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_GET_CUSTOM_CHARACTER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_SET_DEFAULT_TEXT] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_GET_DEFAULT_TEXT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_SET_DEFAULT_TEXT_COUNTER] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_GET_DEFAULT_TEXT_COUNTER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLCD20x4.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletLCD20x4.CALLBACK_BUTTON_PRESSED] = 'B';
    this.callbackFormats[BrickletLCD20x4.CALLBACK_BUTTON_RELEASED] = 'B';

    this.writeLine = function(line, position, text, returnCallback, errorCallback) {
        /*
        Writes text to a specific line (0 to 3) with a specific position 
        (0 to 19). The text can have a maximum of 20 characters.
        
        For example: (0, 7, "Hello") will write *Hello* in the middle of the
        first line of the display.
        
        The display uses a special charset that includes all ASCII characters except
        backslash and tilde. The LCD charset also includes several other non-ASCII characters, see
        the `charset specification <https://github.com/Tinkerforge/lcd-20x4-bricklet/raw/master/datasheets/standard_charset.pdf>`__
        for details. The Unicode example above shows how to specify non-ASCII characters
        and how to translate from Unicode to the LCD charset.
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_WRITE_LINE, [line, position, text], 'B B s20', '', returnCallback, errorCallback);
    };
    this.clearDisplay = function(returnCallback, errorCallback) {
        /*
        Deletes all characters from the display.
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_CLEAR_DISPLAY, [], '', '', returnCallback, errorCallback);
    };   
    this.backlightOn = function(returnCallback, errorCallback) {
        /*
        Turns the backlight on.
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_BACKLIGHT_ON, [], '', '', returnCallback, errorCallback);
    };   
    this.backlightOff = function(returnCallback, errorCallback) {
        /*
        Turns the backlight off.
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_BACKLIGHT_OFF, [], '', '', returnCallback, errorCallback);
    };   
    this.isBacklightOn = function(returnCallback, errorCallback) {
        /*
        Returns *true* if the backlight is on and *false* otherwise.
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_IS_BACKLIGHT_ON, [], '', '?', returnCallback, errorCallback);
    };   
    this.setConfig = function(cursor, blinking, returnCallback, errorCallback) {
        /*
        Configures if the cursor (shown as "_") should be visible and if it
        should be blinking (shown as a blinking block). The cursor position
        is one character behind the the last text written with 
        :func:`WriteLine`.
        
        The default is (*false*, *false*).
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_SET_CONFIG, [cursor, blinking], '? ?', '', returnCallback, errorCallback);
    };
    this.getConfig = function(returnCallback, errorCallback) {
        /*
        Returns the configuration as set by :func:`SetConfig`.
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_GET_CONFIG, [], '', '? ?', returnCallback, errorCallback);
    };   
    this.isButtonPressed = function(button, returnCallback, errorCallback) {
        /*
        Returns *true* if the button (0 to 2 or 0 to 3 with hardware version >= 1.2) 
        is pressed. If you want to react
        on button presses and releases it is recommended to use the
        :func:`ButtonPressed` and :func:`ButtonReleased` callbacks.
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_IS_BUTTON_PRESSED, [button], 'B', '?', returnCallback, errorCallback);
    };
    this.setCustomCharacter = function(index, character, returnCallback, errorCallback) {
        /*
        The LCD 20x4 Bricklet can store up to 8 custom characters. The characters
        consist of 5x8 pixels and can be addressed with the index 0-7. To describe
        the pixels, the first 5 bits of 8 bytes are used. For example, to make
        a custom character "H", you should transfer the following:
        
        * ``character[0] = 0b00010001`` (decimal value 17)
        * ``character[1] = 0b00010001`` (decimal value 17)
        * ``character[2] = 0b00010001`` (decimal value 17)
        * ``character[3] = 0b00011111`` (decimal value 31)
        * ``character[4] = 0b00010001`` (decimal value 17)
        * ``character[5] = 0b00010001`` (decimal value 17)
        * ``character[6] = 0b00010001`` (decimal value 17)
        * ``character[7] = 0b00000000`` (decimal value 0)
        
        The characters can later be written with :func:`WriteLine` by using the
        characters with the byte representation 8 to 15.
        
        You can play around with the custom characters in Brick Viewer version
        since 2.0.1.
        
        Custom characters are stored by the LCD in RAM, so they have to be set
        after each startup.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_SET_CUSTOM_CHARACTER, [index, character], 'B B8', '', returnCallback, errorCallback);
    };
    this.getCustomCharacter = function(index, returnCallback, errorCallback) {
        /*
        Returns the custom character for a given index, as set with
        :func:`SetCustomCharacter`.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_GET_CUSTOM_CHARACTER, [index], 'B', 'B8', returnCallback, errorCallback);
    };
    this.setDefaultText = function(line, text, returnCallback, errorCallback) {
        /*
        Sets the default text for lines 0-3. The max number of characters
        per line is 20.
        
        The default text is shown on the LCD, if the default text counter
        expires, see :func:`SetDefaultTextCounter`.
        
        .. versionadded:: 2.0.2~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_SET_DEFAULT_TEXT, [line, text], 'B s20', '', returnCallback, errorCallback);
    };
    this.getDefaultText = function(line, returnCallback, errorCallback) {
        /*
        Returns the default text for a given line (0-3) as set by
        :func:`SetDefaultText`.
        
        .. versionadded:: 2.0.2~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_GET_DEFAULT_TEXT, [line], 'B', 's20', returnCallback, errorCallback);
    };
    this.setDefaultTextCounter = function(counter, returnCallback, errorCallback) {
        /*
        Sets the default text counter in ms. This counter is decremented each
        ms by the LCD firmware. If the counter reaches 0, the default text
        (see :func:`SetDefaultText`) is shown on the LCD.
        
        This functionality can be used to show a default text if the controlling
        program crashes or the connection is interrupted.
        
        A possible approach is to call :func:`SetDefaultTextCounter` every
        minute with the parameter 1000*60*2 (2 minutes). In this case the
        default text will be shown no later than 2 minutes after the
        controlling program crashes.
        
        A negative counter turns the default text functionality off.
        
        The default is -1.
        
        .. versionadded:: 2.0.2~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_SET_DEFAULT_TEXT_COUNTER, [counter], 'i', '', returnCallback, errorCallback);
    };
    this.getDefaultTextCounter = function(returnCallback, errorCallback) {
        /*
        Returns the current value of the default text counter.
        
        .. versionadded:: 2.0.2~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_GET_DEFAULT_TEXT_COUNTER, [], '', 'i', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletLCD20x4;

},{"./Device":48}],28:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletLEDStrip.DEVICE_IDENTIFIER = 231;
BrickletLEDStrip.CALLBACK_FRAME_RENDERED = 6;
BrickletLEDStrip.FUNCTION_SET_RGB_VALUES = 1;
BrickletLEDStrip.FUNCTION_GET_RGB_VALUES = 2;
BrickletLEDStrip.FUNCTION_SET_FRAME_DURATION = 3;
BrickletLEDStrip.FUNCTION_GET_FRAME_DURATION = 4;
BrickletLEDStrip.FUNCTION_GET_SUPPLY_VOLTAGE = 5;
BrickletLEDStrip.FUNCTION_SET_CLOCK_FREQUENCY = 7;
BrickletLEDStrip.FUNCTION_GET_CLOCK_FREQUENCY = 8;
BrickletLEDStrip.FUNCTION_GET_IDENTITY = 255;

function BrickletLEDStrip(uid, ipcon) {
    //Device to control up to 320 RGB LEDs
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletLEDStrip.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 1];
    this.responseExpected[BrickletLEDStrip.FUNCTION_SET_RGB_VALUES] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLEDStrip.FUNCTION_GET_RGB_VALUES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLEDStrip.FUNCTION_SET_FRAME_DURATION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLEDStrip.FUNCTION_GET_FRAME_DURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLEDStrip.FUNCTION_GET_SUPPLY_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLEDStrip.CALLBACK_FRAME_RENDERED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletLEDStrip.FUNCTION_SET_CLOCK_FREQUENCY] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletLEDStrip.FUNCTION_GET_CLOCK_FREQUENCY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLEDStrip.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletLEDStrip.CALLBACK_FRAME_RENDERED] = 'H';

    this.setRGBValues = function(index, length, r, g, b, returnCallback, errorCallback) {
        /*
        Sets the *rgb* values for the LEDs with the given *length* starting 
        from *index*.
        
        The maximum length is 16, the index goes from 0 to 319 and the rgb values
        have 8 bits each.
        
        Example: If you set
        
        * index to 5,
        * length to 3,
        * r to [255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        * g to [0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] and
        * b to [0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        
        the LED with index 5 will be red, 6 will be green and 7 will be blue.
        
        .. note:: Depending on the LED circuitry colors can be permuted.
        
        The colors will be transfered to actual LEDs when the next
        frame duration ends, see :func:`SetFrameDuration`.
        
        Generic approach: 
        
        * Set the frame duration to a value that represents
          the number of frames per second you want to achieve. 
        * Set all of the LED colors for one frame.
        * Wait for the :func:`FrameRendered` callback.
        * Set all of the LED colors for next frame.
        * Wait for the :func:`FrameRendered` callback.
        * and so on.
        
        This approach ensures that you can change the LED colors with
        a fixed frame rate.
        
        The actual number of controllable LEDs depends on the number of free
        Bricklet ports. See :ref:`here <led_strip_bricklet_ram_constraints>` for more
        information. A call of :func:`SetRGBValues` with index + length above the
        bounds is ignored completely.
        */
        this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_RGB_VALUES, [index, length, r, g, b], 'H B B16 B16 B16', '', returnCallback, errorCallback);
    };
    this.getRGBValues = function(index, length, returnCallback, errorCallback) {
        /*
        Returns the rgb with the given *length* starting from the
        given *index*.
        
        The values are the last values that were set by :func:`SetRGBValues`.
        */
        this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_RGB_VALUES, [index, length], 'H B', 'B16 B16 B16', returnCallback, errorCallback);
    };
    this.setFrameDuration = function(duration, returnCallback, errorCallback) {
        /*
        Sets the frame duration in ms.
        
        Example: If you want to achieve 20 frames per second, you should
        set the frame duration to 50ms (50ms * 20 = 1 second). 
        
        For an explanation of the general approach see :func:`SetRGBValues`.
        
        Default value: 100ms (10 frames per second).
        */
        this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_FRAME_DURATION, [duration], 'H', '', returnCallback, errorCallback);
    };
    this.getFrameDuration = function(returnCallback, errorCallback) {
        /*
        Returns the frame duration as set by :func:`SetFrameDuration`.
        */
        this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_FRAME_DURATION, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getSupplyVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the current supply voltage of the LEDs. The voltage is given in mV.
        */
        this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_SUPPLY_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setClockFrequency = function(frequency, returnCallback, errorCallback) {
        /*
        Sets the frequency of the clock in Hz. The range is 10000Hz (10kHz) up to
        2000000Hz (2MHz).
        
        The Bricklet will choose the nearest achievable frequency, which may
        be off by a few Hz. You can get the exact frequency that is used by
        calling :func:`GetClockFrequency`.
        
        If you have problems with flickering LEDs, they may be bits flipping. You
        can fix this by either making the connection between the LEDs and the
        Bricklet shorter or by reducing the frequency.
        
        With a decreasing frequency your maximum frames per second will decrease
        too.
        
        The default value is 1.66MHz.
        
        .. note::
         The frequency in firmware version 2.0.0 is fixed at 2MHz.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_CLOCK_FREQUENCY, [frequency], 'I', '', returnCallback, errorCallback);
    };
    this.getClockFrequency = function(returnCallback, errorCallback) {
        /*
        Returns the currently used clock frequency.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_CLOCK_FREQUENCY, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletLEDStrip;

},{"./Device":48}],29:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletLine.DEVICE_IDENTIFIER = 241;
BrickletLine.CALLBACK_REFLECTIVITY = 8;
BrickletLine.CALLBACK_REFLECTIVITY_REACHED = 9;
BrickletLine.FUNCTION_GET_REFLECTIVITY = 1;
BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_PERIOD = 2;
BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_PERIOD = 3;
BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_THRESHOLD = 4;
BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_THRESHOLD = 5;
BrickletLine.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletLine.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletLine.FUNCTION_GET_IDENTITY = 255;
BrickletLine.THRESHOLD_OPTION_OFF = 'x';
BrickletLine.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletLine.THRESHOLD_OPTION_INSIDE = 'i';
BrickletLine.THRESHOLD_OPTION_SMALLER = '<';
BrickletLine.THRESHOLD_OPTION_GREATER = '>';

function BrickletLine(uid, ipcon) {
    //Device that measures reflectivity to allow following a line
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletLine.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletLine.FUNCTION_GET_REFLECTIVITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLine.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletLine.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLine.CALLBACK_REFLECTIVITY] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletLine.CALLBACK_REFLECTIVITY_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletLine.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletLine.CALLBACK_REFLECTIVITY] = 'H';
    this.callbackFormats[BrickletLine.CALLBACK_REFLECTIVITY_REACHED] = 'H';

    this.getReflectivity = function(returnCallback, errorCallback) {
        /*
        Returns the currently measured reflectivity. The reflectivity is
        a value between 0 (not reflective) and 4095 (very reflective).
        
        Usually black has a low reflectivity while white has a high
        reflectivity.
        
        If you want to get the reflectivity periodically, it is recommended 
        to use the callback :func:`Reflectivity` and set the period with 
        :func:`SetReflectivityCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_REFLECTIVITY, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setReflectivityCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Reflectivity` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Reflectivity` is only triggered if the reflectivity has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getReflectivityCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetReflectivityCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setReflectivityCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`ReflectivityReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the reflectivity is *outside* the min and max values"
         "'i'",    "Callback is triggered when the reflectivity is *inside* the min and max values"
         "'<'",    "Callback is triggered when the reflectivity is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the reflectivity is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getReflectivityCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetReflectivityCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callback
        
        * :func:`ReflectivityReached`
        
        is triggered, if the threshold
        
        * :func:`SetReflectivityCallbackThreshold`
        
        keeps being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletLine.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletLine;

},{"./Device":48}],30:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletLinearPoti.DEVICE_IDENTIFIER = 213;
BrickletLinearPoti.CALLBACK_POSITION = 13;
BrickletLinearPoti.CALLBACK_ANALOG_VALUE = 14;
BrickletLinearPoti.CALLBACK_POSITION_REACHED = 15;
BrickletLinearPoti.CALLBACK_ANALOG_VALUE_REACHED = 16;
BrickletLinearPoti.FUNCTION_GET_POSITION = 1;
BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletLinearPoti.FUNCTION_SET_POSITION_CALLBACK_PERIOD = 3;
BrickletLinearPoti.FUNCTION_GET_POSITION_CALLBACK_PERIOD = 4;
BrickletLinearPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletLinearPoti.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD = 7;
BrickletLinearPoti.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD = 8;
BrickletLinearPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletLinearPoti.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletLinearPoti.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletLinearPoti.FUNCTION_GET_IDENTITY = 255;
BrickletLinearPoti.THRESHOLD_OPTION_OFF = 'x';
BrickletLinearPoti.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletLinearPoti.THRESHOLD_OPTION_INSIDE = 'i';
BrickletLinearPoti.THRESHOLD_OPTION_SMALLER = '<';
BrickletLinearPoti.THRESHOLD_OPTION_GREATER = '>';

function BrickletLinearPoti(uid, ipcon) {
    //Device for sensing Linear Potentiometer input
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletLinearPoti.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletLinearPoti.FUNCTION_GET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLinearPoti.FUNCTION_SET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletLinearPoti.FUNCTION_GET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLinearPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLinearPoti.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletLinearPoti.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLinearPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLinearPoti.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletLinearPoti.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletLinearPoti.CALLBACK_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletLinearPoti.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletLinearPoti.CALLBACK_POSITION_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletLinearPoti.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletLinearPoti.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletLinearPoti.CALLBACK_POSITION] = 'H';
    this.callbackFormats[BrickletLinearPoti.CALLBACK_ANALOG_VALUE] = 'H';
    this.callbackFormats[BrickletLinearPoti.CALLBACK_POSITION_REACHED] = 'H';
    this.callbackFormats[BrickletLinearPoti.CALLBACK_ANALOG_VALUE_REACHED] = 'H';

    this.getPosition = function(returnCallback, errorCallback) {
        /*
        Returns the position of the Linear Potentiometer. The value is  
        between 0 (slider down) and 100 (slider up).
        
        If you want to get the position periodically, it is recommended to use the
        callback :func:`Position` and set the period with 
        :func:`SetPositionCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_POSITION, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getAnalogValue = function(returnCallback, errorCallback) {
        /*
        Returns the value as read by a 12-bit analog-to-digital converter.
        The value is between 0 and 4095.
        
        .. note::
         The value returned by :func:`GetPosition` is averaged over several samples
         to yield less noise, while :func:`GetAnalogValue` gives back raw
         unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
         if you need the full resolution of the analog-to-digital converter.
        
        If you want the analog value periodically, it is recommended to use the 
        callback :func:`AnalogValue` and set the period with 
        :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setPositionCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Position` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Position` is only triggered if the position has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_SET_POSITION_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getPositionCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetPositionCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_POSITION_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AnalogValue` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`AnalogValue` is only triggered if the analog value has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setPositionCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`PositionReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the position is *outside* the min and max values"
         "'i'",    "Callback is triggered when the position is *inside* the min and max values"
         "'<'",    "Callback is triggered when the position is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the position is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getPositionCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetPositionCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AnalogValueReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
         "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
         "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`PositionReached`,
        * :func:`AnalogValueReached`
        
        are triggered, if the thresholds
        
        * :func:`SetPositionCallbackThreshold`,
        * :func:`SetAnalogValueCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletLinearPoti;

},{"./Device":48}],31:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletMoisture.DEVICE_IDENTIFIER = 232;
BrickletMoisture.CALLBACK_MOISTURE = 8;
BrickletMoisture.CALLBACK_MOISTURE_REACHED = 9;
BrickletMoisture.FUNCTION_GET_MOISTURE_VALUE = 1;
BrickletMoisture.FUNCTION_SET_MOISTURE_CALLBACK_PERIOD = 2;
BrickletMoisture.FUNCTION_GET_MOISTURE_CALLBACK_PERIOD = 3;
BrickletMoisture.FUNCTION_SET_MOISTURE_CALLBACK_THRESHOLD = 4;
BrickletMoisture.FUNCTION_GET_MOISTURE_CALLBACK_THRESHOLD = 5;
BrickletMoisture.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletMoisture.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletMoisture.FUNCTION_SET_MOVING_AVERAGE = 10;
BrickletMoisture.FUNCTION_GET_MOVING_AVERAGE = 11;
BrickletMoisture.FUNCTION_GET_IDENTITY = 255;
BrickletMoisture.THRESHOLD_OPTION_OFF = 'x';
BrickletMoisture.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletMoisture.THRESHOLD_OPTION_INSIDE = 'i';
BrickletMoisture.THRESHOLD_OPTION_SMALLER = '<';
BrickletMoisture.THRESHOLD_OPTION_GREATER = '>';

function BrickletMoisture(uid, ipcon) {
    //Device for sensing Moisture
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletMoisture.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletMoisture.FUNCTION_GET_MOISTURE_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletMoisture.FUNCTION_SET_MOISTURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletMoisture.FUNCTION_GET_MOISTURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletMoisture.FUNCTION_SET_MOISTURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletMoisture.FUNCTION_GET_MOISTURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletMoisture.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletMoisture.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletMoisture.CALLBACK_MOISTURE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletMoisture.CALLBACK_MOISTURE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletMoisture.FUNCTION_SET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletMoisture.FUNCTION_GET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletMoisture.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletMoisture.CALLBACK_MOISTURE] = 'H';
    this.callbackFormats[BrickletMoisture.CALLBACK_MOISTURE_REACHED] = 'H';

    this.getMoistureValue = function(returnCallback, errorCallback) {
        /*
        Returns the current moisture value. The value has a range of
        0 to 4095. A small value corresponds to little moisture, a big
        value corresponds to much moisture.
        
        If you want to get the moisture value periodically, it is recommended 
        to use the callback :func:`Moisture` and set the period with 
        :func:`SetMoistureCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_GET_MOISTURE_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setMoistureCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Moisture` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Moisture` is only triggered if the moisture value has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_SET_MOISTURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getMoistureCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetMoistureCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_GET_MOISTURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setMoistureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`MoistureReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the moisture value is *outside* the min and max values"
         "'i'",    "Callback is triggered when the moisture value is *inside* the min and max values"
         "'<'",    "Callback is triggered when the moisture value is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the moisture value is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_SET_MOISTURE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getMoistureCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetMoistureCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_GET_MOISTURE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callback
        
        * :func:`MoistureReached`
        
        is triggered, if the threshold
        
        * :func:`SetMoistureCallbackThreshold`
        
        keeps being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setMovingAverage = function(average, returnCallback, errorCallback) {
        /*
        Sets the length of a `moving averaging <http://en.wikipedia.org/wiki/Moving_average>`__ 
        for the moisture value.
        
        Setting the length to 0 will turn the averaging completely off. With less
        averaging, there is more noise on the data.
        
        The range for the averaging is 0-100.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_SET_MOVING_AVERAGE, [average], 'B', '', returnCallback, errorCallback);
    };
    this.getMovingAverage = function(returnCallback, errorCallback) {
        /*
        Returns the length moving average as set by :func:`SetMovingAverage`.
        */
        this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_GET_MOVING_AVERAGE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletMoisture;

},{"./Device":48}],32:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletMotionDetector.DEVICE_IDENTIFIER = 233;
BrickletMotionDetector.CALLBACK_MOTION_DETECTED = 2;
BrickletMotionDetector.CALLBACK_DETECTION_CYCLE_ENDED = 3;
BrickletMotionDetector.FUNCTION_GET_MOTION_DETECTED = 1;
BrickletMotionDetector.FUNCTION_GET_IDENTITY = 255;
BrickletMotionDetector.MOTION_NOT_DETECTED = 0;
BrickletMotionDetector.MOTION_DETECTED = 1;

function BrickletMotionDetector(uid, ipcon) {
    //Device that reads out PIR motion detector
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletMotionDetector.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletMotionDetector.FUNCTION_GET_MOTION_DETECTED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletMotionDetector.CALLBACK_MOTION_DETECTED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletMotionDetector.CALLBACK_DETECTION_CYCLE_ENDED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletMotionDetector.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletMotionDetector.CALLBACK_MOTION_DETECTED] = '';
    this.callbackFormats[BrickletMotionDetector.CALLBACK_DETECTION_CYCLE_ENDED] = '';

    this.getMotionDetected = function(returnCallback, errorCallback) {
        /*
        Returns 1 if a motion was detected. How long this returns 1 after a motion
        was detected can be adjusted with one of the small potentiometers on the
        Motion Detector Bricklet, see :ref:`here
        <motion_detector_bricklet_sensitivity_delay_block_time>`.
        
        There is also a blue LED on the Bricklet that is on as long as the Bricklet is
        in the "motion detected" state.
        */
        this.ipcon.sendRequest(this, BrickletMotionDetector.FUNCTION_GET_MOTION_DETECTED, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletMotionDetector.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletMotionDetector;

},{"./Device":48}],33:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletMultiTouch.DEVICE_IDENTIFIER = 234;
BrickletMultiTouch.CALLBACK_TOUCH_STATE = 5;
BrickletMultiTouch.FUNCTION_GET_TOUCH_STATE = 1;
BrickletMultiTouch.FUNCTION_RECALIBRATE = 2;
BrickletMultiTouch.FUNCTION_SET_ELECTRODE_CONFIG = 3;
BrickletMultiTouch.FUNCTION_GET_ELECTRODE_CONFIG = 4;
BrickletMultiTouch.FUNCTION_SET_ELECTRODE_SENSITIVITY = 6;
BrickletMultiTouch.FUNCTION_GET_ELECTRODE_SENSITIVITY = 7;
BrickletMultiTouch.FUNCTION_GET_IDENTITY = 255;

function BrickletMultiTouch(uid, ipcon) {
    //Device with 12 touch sensors
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletMultiTouch.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletMultiTouch.FUNCTION_GET_TOUCH_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletMultiTouch.FUNCTION_RECALIBRATE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletMultiTouch.FUNCTION_SET_ELECTRODE_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletMultiTouch.FUNCTION_GET_ELECTRODE_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletMultiTouch.CALLBACK_TOUCH_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletMultiTouch.FUNCTION_SET_ELECTRODE_SENSITIVITY] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletMultiTouch.FUNCTION_GET_ELECTRODE_SENSITIVITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletMultiTouch.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletMultiTouch.CALLBACK_TOUCH_STATE] = 'H';

    this.getTouchState = function(returnCallback, errorCallback) {
        /*
        Returns the current touch state. The state is given as a bitfield.
        
        Bits 0 to 11 represent the 12 electrodes and bit 12 represents
        the proximity.
        
        If an electrode is touched, the corresponding bit is true. If
        a hand or similar is in proximity to the electrodes, bit 12 is
        *true*.
        
        Example: The state 4103 = 0x1007 = 0b1000000000111 means that
        electrodes 0, 1 and 2 are touched and that something is in the
        proximity of the electrodes.
        
        The proximity is activated with a distance of 1-2cm. An electrode
        is already counted as touched if a finger is nearly touching the
        electrode. This means that you can put a piece of paper or foil
        or similar on top of a electrode to build a touch panel with
        a professional look.
        */
        this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_GET_TOUCH_STATE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.recalibrate = function(returnCallback, errorCallback) {
        /*
        Recalibrates the electrodes. Call this function whenever you changed
        or moved you electrodes.
        */
        this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_RECALIBRATE, [], '', '', returnCallback, errorCallback);
    };   
    this.setElectrodeConfig = function(enabledElectrodes, returnCallback, errorCallback) {
        /*
        Enables/disables electrodes with a bitfield (see :func:`GetTouchState`).
        
        *True* enables the electrode, *false* disables the electrode. A
        disabled electrode will always return *false* as its state. If you
        don't need all electrodes you can disable the electrodes that are
        not needed.
        
        It is recommended that you disable the proximity bit (bit 12) if
        the proximity feature is not needed. This will reduce the amount of
        traffic that is produced by the :func:`TouchState` callback.
        
        Disabling electrodes will also reduce power consumption.
        
        Default: 8191 = 0x1FFF = 0b1111111111111 (all electrodes enabled)
        */
        this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_SET_ELECTRODE_CONFIG, [enabledElectrodes], 'H', '', returnCallback, errorCallback);
    };
    this.getElectrodeConfig = function(returnCallback, errorCallback) {
        /*
        Returns the electrode configuration, as set by :func:`SetElectrodeConfig`.
        */
        this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_GET_ELECTRODE_CONFIG, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setElectrodeSensitivity = function(sensitivity, returnCallback, errorCallback) {
        /*
        Sets the sensitivity of the electrodes. An electrode with a high sensitivity
        will register a touch earlier then an electrode with a low sensitivity.
        
        If you build a big electrode you might need to decrease the sensitivity, since
        the area that can be charged will get bigger. If you want to be able to
        activate an electrode from further away you need to increase the sensitivity.
        
        After a new sensitivity is set, you likely want to call :func:`Recalibrate`
        to calibrate the electrodes with the newly defined sensitivity.
        
        The valid sensitivity value range is 5-201.
        
        The default sensitivity value is 181.
        */
        this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_SET_ELECTRODE_SENSITIVITY, [sensitivity], 'B', '', returnCallback, errorCallback);
    };
    this.getElectrodeSensitivity = function(returnCallback, errorCallback) {
        /*
        Returns the current sensitivity, as set by :func:`SetElectrodeSensitivity`.
        */
        this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_GET_ELECTRODE_SENSITIVITY, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletMultiTouch.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletMultiTouch;

},{"./Device":48}],34:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletPTC.DEVICE_IDENTIFIER = 226;
BrickletPTC.CALLBACK_TEMPERATURE = 13;
BrickletPTC.CALLBACK_TEMPERATURE_REACHED = 14;
BrickletPTC.CALLBACK_RESISTANCE = 15;
BrickletPTC.CALLBACK_RESISTANCE_REACHED = 16;
BrickletPTC.FUNCTION_GET_TEMPERATURE = 1;
BrickletPTC.FUNCTION_GET_RESISTANCE = 2;
BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD = 3;
BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD = 4;
BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_PERIOD = 5;
BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_PERIOD = 6;
BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD = 7;
BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD = 8;
BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_THRESHOLD = 9;
BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_THRESHOLD = 10;
BrickletPTC.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletPTC.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletPTC.FUNCTION_SET_NOISE_REJECTION_FILTER = 17;
BrickletPTC.FUNCTION_GET_NOISE_REJECTION_FILTER = 18;
BrickletPTC.FUNCTION_IS_SENSOR_CONNECTED = 19;
BrickletPTC.FUNCTION_SET_WIRE_MODE = 20;
BrickletPTC.FUNCTION_GET_WIRE_MODE = 21;
BrickletPTC.FUNCTION_GET_IDENTITY = 255;
BrickletPTC.THRESHOLD_OPTION_OFF = 'x';
BrickletPTC.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletPTC.THRESHOLD_OPTION_INSIDE = 'i';
BrickletPTC.THRESHOLD_OPTION_SMALLER = '<';
BrickletPTC.THRESHOLD_OPTION_GREATER = '>';
BrickletPTC.FILTER_OPTION_50HZ = 0;
BrickletPTC.FILTER_OPTION_60HZ = 1;
BrickletPTC.WIRE_MODE_2 = 2;
BrickletPTC.WIRE_MODE_3 = 3;
BrickletPTC.WIRE_MODE_4 = 4;

function BrickletPTC(uid, ipcon) {
    //Device for reading temperatures from Pt100 or Pt1000 sensors
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletPTC.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletPTC.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_GET_RESISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletPTC.CALLBACK_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletPTC.CALLBACK_TEMPERATURE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletPTC.CALLBACK_RESISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletPTC.CALLBACK_RESISTANCE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletPTC.FUNCTION_SET_NOISE_REJECTION_FILTER] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletPTC.FUNCTION_GET_NOISE_REJECTION_FILTER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_IS_SENSOR_CONNECTED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_SET_WIRE_MODE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletPTC.FUNCTION_GET_WIRE_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletPTC.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletPTC.CALLBACK_TEMPERATURE] = 'i';
    this.callbackFormats[BrickletPTC.CALLBACK_TEMPERATURE_REACHED] = 'i';
    this.callbackFormats[BrickletPTC.CALLBACK_RESISTANCE] = 'H';
    this.callbackFormats[BrickletPTC.CALLBACK_RESISTANCE_REACHED] = 'H';

    this.getTemperature = function(returnCallback, errorCallback) {
        /*
        Returns the temperature of connected sensor. The value
        has a range of -246 to 849 °C and is given in °C/100,
        e.g. a value of 4223 means that a temperature of 42.23 °C is measured.
        
        If you want to get the temperature periodically, it is recommended 
        to use the callback :func:`Temperature` and set the period with 
        :func:`SetTemperatureCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_TEMPERATURE, [], '', 'i', returnCallback, errorCallback);
    };   
    this.getResistance = function(returnCallback, errorCallback) {
        /*
        Returns the value as measured by the MAX31865 precision delta-sigma ADC.
        
        The value can be converted with the following formulas:
        
        * Pt100:  resistance = (value * 390) / 32768
        * Pt1000: resistance = (value * 3900) / 32768
        
        If you want to get the resistance periodically, it is recommended 
        to use the callback :func:`Resistance` and set the period with 
        :func:`SetResistanceCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_RESISTANCE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Temperature` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Temperature` is only triggered if the temperature has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetTemperatureCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setResistanceCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Resistance` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Resistance` is only triggered if the resistance has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getResistanceCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetResistanceCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setTemperatureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`TemperatureReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the temperature is *outside* the min and max values"
         "'i'",    "Callback is triggered when the temperature is *inside* the min and max values"
         "'<'",    "Callback is triggered when the temperature is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the temperature is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD, [option, min, max], 'c i i', '', returnCallback, errorCallback);
    };
    this.getTemperatureCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetTemperatureCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD, [], '', 'c i i', returnCallback, errorCallback);
    };   
    this.setResistanceCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`ResistanceReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the temperature is *outside* the min and max values"
         "'i'",    "Callback is triggered when the temperature is *inside* the min and max values"
         "'<'",    "Callback is triggered when the temperature is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the temperature is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getResistanceCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetResistanceCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callback
        
        * :func:`TemperatureReached`,
        * :func:`ResistanceReached`
        
        is triggered, if the threshold
        
        * :func:`SetTemperatureCallbackThreshold`,
        * :func:`SetResistanceCallbackThreshold`
        
        keeps being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setNoiseRejectionFilter = function(filter, returnCallback, errorCallback) {
        /*
        Sets the noise rejection filter to either 50Hz (0) or 60Hz (1).
        Noise from 50Hz or 60Hz power sources (including
        harmonics of the AC power's fundamental frequency) is
        attenuated by 82dB.
        
        Default value is 0 = 50Hz.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_NOISE_REJECTION_FILTER, [filter], 'B', '', returnCallback, errorCallback);
    };
    this.getNoiseRejectionFilter = function(returnCallback, errorCallback) {
        /*
        Returns the noise rejection filter option as set by 
        :func:`SetNoiseRejectionFilter`
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_NOISE_REJECTION_FILTER, [], '', 'B', returnCallback, errorCallback);
    };   
    this.isSensorConnected = function(returnCallback, errorCallback) {
        /*
        Returns *true* if the sensor is connected correctly. 
        
        If this function
        returns *false*, there is either no Pt100 or Pt1000 sensor connected,
        the sensor is connected incorrectly or the sensor itself is faulty.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_IS_SENSOR_CONNECTED, [], '', '?', returnCallback, errorCallback);
    };   
    this.setWireMode = function(mode, returnCallback, errorCallback) {
        /*
        Sets the wire mode of the sensor. Possible values are 2, 3 and 4 which
        correspond to 2-, 3- and 4-wire sensors. The value has to match the jumper
        configuration on the Bricklet.
        
        The default value is 2 = 2-wire.
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_WIRE_MODE, [mode], 'B', '', returnCallback, errorCallback);
    };
    this.getWireMode = function(returnCallback, errorCallback) {
        /*
        Returns the wire mode as set by :func:`SetWireMode`
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_WIRE_MODE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletPTC;

},{"./Device":48}],35:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletPiezoBuzzer.DEVICE_IDENTIFIER = 214;
BrickletPiezoBuzzer.CALLBACK_BEEP_FINISHED = 3;
BrickletPiezoBuzzer.CALLBACK_MORSE_CODE_FINISHED = 4;
BrickletPiezoBuzzer.FUNCTION_BEEP = 1;
BrickletPiezoBuzzer.FUNCTION_MORSE_CODE = 2;
BrickletPiezoBuzzer.FUNCTION_GET_IDENTITY = 255;

function BrickletPiezoBuzzer(uid, ipcon) {
    //Device for controlling a piezo buzzer
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletPiezoBuzzer.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletPiezoBuzzer.FUNCTION_BEEP] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletPiezoBuzzer.FUNCTION_MORSE_CODE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletPiezoBuzzer.CALLBACK_BEEP_FINISHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletPiezoBuzzer.CALLBACK_MORSE_CODE_FINISHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletPiezoBuzzer.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletPiezoBuzzer.CALLBACK_BEEP_FINISHED] = '';
    this.callbackFormats[BrickletPiezoBuzzer.CALLBACK_MORSE_CODE_FINISHED] = '';

    this.beep = function(duration, returnCallback, errorCallback) {
        /*
        Beeps with the duration in ms. For example: If you set a value of 1000,
        the piezo buzzer will beep for one second.
        */
        this.ipcon.sendRequest(this, BrickletPiezoBuzzer.FUNCTION_BEEP, [duration], 'I', '', returnCallback, errorCallback);
    };
    this.morseCode = function(morse, returnCallback, errorCallback) {
        /*
        Sets morse code that will be played by the piezo buzzer. The morse code
        is given as a string consisting of "." (dot), "-" (minus) and " " (space)
        for *dits*, *dahs* and *pauses*. Every other character is ignored.
        
        For example: If you set the string "...---...", the piezo buzzer will beep
        nine times with the durations "short short short long long long short 
        short short".
        
        The maximum string size is 60.
        */
        this.ipcon.sendRequest(this, BrickletPiezoBuzzer.FUNCTION_MORSE_CODE, [morse], 's60', '', returnCallback, errorCallback);
    };
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletPiezoBuzzer.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletPiezoBuzzer;

},{"./Device":48}],36:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletPiezoSpeaker.DEVICE_IDENTIFIER = 242;
BrickletPiezoSpeaker.CALLBACK_BEEP_FINISHED = 4;
BrickletPiezoSpeaker.CALLBACK_MORSE_CODE_FINISHED = 5;
BrickletPiezoSpeaker.FUNCTION_BEEP = 1;
BrickletPiezoSpeaker.FUNCTION_MORSE_CODE = 2;
BrickletPiezoSpeaker.FUNCTION_CALIBRATE = 3;
BrickletPiezoSpeaker.FUNCTION_GET_IDENTITY = 255;

function BrickletPiezoSpeaker(uid, ipcon) {
    //Device for controlling a piezo buzzer with configurable frequencies
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletPiezoSpeaker.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletPiezoSpeaker.FUNCTION_BEEP] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletPiezoSpeaker.FUNCTION_MORSE_CODE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletPiezoSpeaker.FUNCTION_CALIBRATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletPiezoSpeaker.CALLBACK_BEEP_FINISHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletPiezoSpeaker.CALLBACK_MORSE_CODE_FINISHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletPiezoSpeaker.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletPiezoSpeaker.CALLBACK_BEEP_FINISHED] = '';
    this.callbackFormats[BrickletPiezoSpeaker.CALLBACK_MORSE_CODE_FINISHED] = '';

    this.beep = function(duration, frequency, returnCallback, errorCallback) {
        /*
        Beeps with the given frequency for the duration in ms. For example: 
        If you set a duration of 1000, with a frequency value of 2000
        the piezo buzzer will beep for one second with a frequency of
        approximately 2 kHz.
        
        *frequency* can be set between 585 and 7100.
        
        The Piezo Speaker Bricklet can only approximate the frequency, it will play
        the best possible match by applying the calibration (see :func:`Calibrate`).
        */
        this.ipcon.sendRequest(this, BrickletPiezoSpeaker.FUNCTION_BEEP, [duration, frequency], 'I H', '', returnCallback, errorCallback);
    };
    this.morseCode = function(morse, frequency, returnCallback, errorCallback) {
        /*
        Sets morse code that will be played by the piezo buzzer. The morse code
        is given as a string consisting of "." (dot), "-" (minus) and " " (space)
        for *dits*, *dahs* and *pauses*. Every other character is ignored.
        The second parameter is the frequency (see :func:`Beep`).
        
        For example: If you set the string "...---...", the piezo buzzer will beep
        nine times with the durations "short short short long long long short 
        short short".
        
        The maximum string size is 60.
        */
        this.ipcon.sendRequest(this, BrickletPiezoSpeaker.FUNCTION_MORSE_CODE, [morse, frequency], 's60 H', '', returnCallback, errorCallback);
    };
    this.calibrate = function(returnCallback, errorCallback) {
        /*
        The Piezo Speaker Bricklet can play 512 different tones. This function
        plays each tone and measures the exact frequency back. The result is a
        mapping between setting value and frequency. This mapping is stored
        in the EEPROM and loaded on startup.
        
        The Bricklet should come calibrated, you only need to call this
        function (once) every time you reflash the Bricklet plugin.
        
        Returns *true* after the calibration finishes.
        */
        this.ipcon.sendRequest(this, BrickletPiezoSpeaker.FUNCTION_CALIBRATE, [], '', '?', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletPiezoSpeaker.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletPiezoSpeaker;

},{"./Device":48}],37:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletRemoteSwitch.DEVICE_IDENTIFIER = 235;
BrickletRemoteSwitch.CALLBACK_SWITCHING_DONE = 3;
BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET = 1;
BrickletRemoteSwitch.FUNCTION_GET_SWITCHING_STATE = 2;
BrickletRemoteSwitch.FUNCTION_SET_REPEATS = 4;
BrickletRemoteSwitch.FUNCTION_GET_REPEATS = 5;
BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_A = 6;
BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_B = 7;
BrickletRemoteSwitch.FUNCTION_DIM_SOCKET_B = 8;
BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_C = 9;
BrickletRemoteSwitch.FUNCTION_GET_IDENTITY = 255;
BrickletRemoteSwitch.SWITCH_TO_OFF = 0;
BrickletRemoteSwitch.SWITCH_TO_ON = 1;
BrickletRemoteSwitch.SWITCHING_STATE_READY = 0;
BrickletRemoteSwitch.SWITCHING_STATE_BUSY = 1;

function BrickletRemoteSwitch(uid, ipcon) {
    //Device that controls mains switches remotely
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletRemoteSwitch.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 1];
    this.responseExpected[BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletRemoteSwitch.FUNCTION_GET_SWITCHING_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRemoteSwitch.CALLBACK_SWITCHING_DONE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletRemoteSwitch.FUNCTION_SET_REPEATS] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletRemoteSwitch.FUNCTION_GET_REPEATS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_A] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_B] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletRemoteSwitch.FUNCTION_DIM_SOCKET_B] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_C] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletRemoteSwitch.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletRemoteSwitch.CALLBACK_SWITCHING_DONE] = '';

    this.switchSocket = function(houseCode, receiverCode, switchTo, returnCallback, errorCallback) {
        /*
        This function is deprecated, use :func:`SwitchSocketA` instead.
        */
        this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET, [houseCode, receiverCode, switchTo], 'B B B', '', returnCallback, errorCallback);
    };
    this.getSwitchingState = function(returnCallback, errorCallback) {
        /*
        Returns the current switching state. If the current state is busy, the
        Bricklet is currently sending a code to switch a socket. It will not
        accept any calls of :func:`SwitchSocket` until the state changes to ready.
        
        How long the switching takes is dependent on the number of repeats, see
        :func:`SetRepeats`.
        */
        this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_GET_SWITCHING_STATE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.setRepeats = function(repeats, returnCallback, errorCallback) {
        /*
        Sets the number of times the code is send when of the :func:`SwitchSocket`
        functions is called. The repeats basically correspond to the amount of time
        that a button of the remote is pressed.
        
        Some dimmers are controlled by the length of a button pressed,
        this can be simulated by increasing the repeats.
        
        The default value is 5.
        */
        this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_SET_REPEATS, [repeats], 'B', '', returnCallback, errorCallback);
    };
    this.getRepeats = function(returnCallback, errorCallback) {
        /*
        Returns the number of repeats as set by :func:`SetRepeats`.
        */
        this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_GET_REPEATS, [], '', 'B', returnCallback, errorCallback);
    };   
    this.switchSocketA = function(houseCode, receiverCode, switchTo, returnCallback, errorCallback) {
        /*
        To switch a type A socket you have to give the house code, receiver code and the
        state (on or off) you want to switch to.
        
        The house code and receiver code have a range of 0 to 31 (5bit).
        
        A detailed description on how you can figure out the house and receiver code
        can be found :ref:`here <remote_switch_bricklet_type_a_house_and_receiver_code>`.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_A, [houseCode, receiverCode, switchTo], 'B B B', '', returnCallback, errorCallback);
    };
    this.switchSocketB = function(address, unit, switchTo, returnCallback, errorCallback) {
        /*
        To switch a type B socket you have to give the address, unit and the state
        (on or off) you want to switch to.
        
        The address has a range of 0 to 67108863 (26bit) and the unit has a range
        of 0 to 15 (4bit). To switch all devices with the same address use 255 for
        the unit.
        
        A detailed description on how you can teach a socket the address and unit can
        be found :ref:`here <remote_switch_bricklet_type_b_address_and_unit>`.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_B, [address, unit, switchTo], 'I B B', '', returnCallback, errorCallback);
    };
    this.dimSocketB = function(address, unit, dimValue, returnCallback, errorCallback) {
        /*
        To control a type B dimmer you have to give the address, unit and the
        dim value you want to set the dimmer to.
        
        The address has a range of 0 to 67108863 (26bit), the unit and the dim value
        has a range of 0 to 15 (4bit).
        
        A detailed description on how you can teach a dimmer the address and unit can
        be found :ref:`here <remote_switch_bricklet_type_b_address_and_unit>`.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_DIM_SOCKET_B, [address, unit, dimValue], 'I B B', '', returnCallback, errorCallback);
    };
    this.switchSocketC = function(systemCode, deviceCode, switchTo, returnCallback, errorCallback) {
        /*
        To switch a type C socket you have to give the system code, device code and the
        state (on or off) you want to switch to.
        
        The system code has a range of 'A' to 'P' (4bit) and the device code has a
        range of 1 to 16 (4bit).
        
        A detailed description on how you can figure out the system and device code
        can be found :ref:`here <remote_switch_bricklet_type_c_system_and_device_code>`.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_SWITCH_SOCKET_C, [systemCode, deviceCode, switchTo], 'c B B', '', returnCallback, errorCallback);
    };
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletRemoteSwitch.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletRemoteSwitch;

},{"./Device":48}],38:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletRotaryEncoder.DEVICE_IDENTIFIER = 236;
BrickletRotaryEncoder.CALLBACK_COUNT = 8;
BrickletRotaryEncoder.CALLBACK_COUNT_REACHED = 9;
BrickletRotaryEncoder.CALLBACK_PRESSED = 11;
BrickletRotaryEncoder.CALLBACK_RELEASED = 12;
BrickletRotaryEncoder.FUNCTION_GET_COUNT = 1;
BrickletRotaryEncoder.FUNCTION_SET_COUNT_CALLBACK_PERIOD = 2;
BrickletRotaryEncoder.FUNCTION_GET_COUNT_CALLBACK_PERIOD = 3;
BrickletRotaryEncoder.FUNCTION_SET_COUNT_CALLBACK_THRESHOLD = 4;
BrickletRotaryEncoder.FUNCTION_GET_COUNT_CALLBACK_THRESHOLD = 5;
BrickletRotaryEncoder.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletRotaryEncoder.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletRotaryEncoder.FUNCTION_IS_PRESSED = 10;
BrickletRotaryEncoder.FUNCTION_GET_IDENTITY = 255;
BrickletRotaryEncoder.THRESHOLD_OPTION_OFF = 'x';
BrickletRotaryEncoder.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletRotaryEncoder.THRESHOLD_OPTION_INSIDE = 'i';
BrickletRotaryEncoder.THRESHOLD_OPTION_SMALLER = '<';
BrickletRotaryEncoder.THRESHOLD_OPTION_GREATER = '>';

function BrickletRotaryEncoder(uid, ipcon) {
    //Device for sensing Rotary Encoder input
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletRotaryEncoder.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletRotaryEncoder.FUNCTION_GET_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRotaryEncoder.FUNCTION_SET_COUNT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletRotaryEncoder.FUNCTION_GET_COUNT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRotaryEncoder.FUNCTION_SET_COUNT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletRotaryEncoder.FUNCTION_GET_COUNT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRotaryEncoder.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletRotaryEncoder.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRotaryEncoder.CALLBACK_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletRotaryEncoder.CALLBACK_COUNT_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletRotaryEncoder.FUNCTION_IS_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRotaryEncoder.CALLBACK_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletRotaryEncoder.CALLBACK_RELEASED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletRotaryEncoder.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletRotaryEncoder.CALLBACK_COUNT] = 'i';
    this.callbackFormats[BrickletRotaryEncoder.CALLBACK_COUNT_REACHED] = 'i';
    this.callbackFormats[BrickletRotaryEncoder.CALLBACK_PRESSED] = '';
    this.callbackFormats[BrickletRotaryEncoder.CALLBACK_RELEASED] = '';

    this.getCount = function(reset, returnCallback, errorCallback) {
        /*
        Returns the current count of the encoder. If you set reset
        to true, the count is set back to 0 directly after the
        current count is read.
        
        The encoder has 24 steps per rotation
        
        Turning the encoder to the left decrements the counter,
        so a negative count is possible.
        */
        this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_GET_COUNT, [reset], '?', 'i', returnCallback, errorCallback);
    };
    this.setCountCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Count` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Count` is only triggered if the count has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_SET_COUNT_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getCountCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetCountCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_GET_COUNT_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setCountCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`CountReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the count is *outside* the min and max values"
         "'i'",    "Callback is triggered when the count is *inside* the min and max values"
         "'<'",    "Callback is triggered when the count is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the count is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_SET_COUNT_CALLBACK_THRESHOLD, [option, min, max], 'c i i', '', returnCallback, errorCallback);
    };
    this.getCountCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetCountCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_GET_COUNT_CALLBACK_THRESHOLD, [], '', 'c i i', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callback
        
        * :func:`CountReached`
        
        is triggered, if the thresholds
        
        * :func:`SetCountCallbackThreshold`
        
        keeps being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.isPressed = function(returnCallback, errorCallback) {
        /*
        Returns *true* if the button is pressed and *false* otherwise.
        
        It is recommended to use the :func:`Pressed` and :func:`Released` callbacks
        to handle the button.
        */
        this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_IS_PRESSED, [], '', '?', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletRotaryEncoder;

},{"./Device":48}],39:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletRotaryPoti.DEVICE_IDENTIFIER = 215;
BrickletRotaryPoti.CALLBACK_POSITION = 13;
BrickletRotaryPoti.CALLBACK_ANALOG_VALUE = 14;
BrickletRotaryPoti.CALLBACK_POSITION_REACHED = 15;
BrickletRotaryPoti.CALLBACK_ANALOG_VALUE_REACHED = 16;
BrickletRotaryPoti.FUNCTION_GET_POSITION = 1;
BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletRotaryPoti.FUNCTION_SET_POSITION_CALLBACK_PERIOD = 3;
BrickletRotaryPoti.FUNCTION_GET_POSITION_CALLBACK_PERIOD = 4;
BrickletRotaryPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletRotaryPoti.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD = 7;
BrickletRotaryPoti.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD = 8;
BrickletRotaryPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletRotaryPoti.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletRotaryPoti.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletRotaryPoti.FUNCTION_GET_IDENTITY = 255;
BrickletRotaryPoti.THRESHOLD_OPTION_OFF = 'x';
BrickletRotaryPoti.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletRotaryPoti.THRESHOLD_OPTION_INSIDE = 'i';
BrickletRotaryPoti.THRESHOLD_OPTION_SMALLER = '<';
BrickletRotaryPoti.THRESHOLD_OPTION_GREATER = '>';

function BrickletRotaryPoti(uid, ipcon) {
    //Device for sensing Rotary Potentiometer input
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletRotaryPoti.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRotaryPoti.FUNCTION_SET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRotaryPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRotaryPoti.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRotaryPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRotaryPoti.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletRotaryPoti.CALLBACK_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletRotaryPoti.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletRotaryPoti.CALLBACK_POSITION_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletRotaryPoti.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletRotaryPoti.CALLBACK_POSITION] = 'h';
    this.callbackFormats[BrickletRotaryPoti.CALLBACK_ANALOG_VALUE] = 'H';
    this.callbackFormats[BrickletRotaryPoti.CALLBACK_POSITION_REACHED] = 'h';
    this.callbackFormats[BrickletRotaryPoti.CALLBACK_ANALOG_VALUE_REACHED] = 'H';

    this.getPosition = function(returnCallback, errorCallback) {
        /*
        Returns the position of the Rotary Potentiometer. The value is in degree 
        and between -150° (turned left) and 150° (turned right).
        
        If you want to get the position periodically, it is recommended to use the
        callback :func:`Position` and set the period with 
        :func:`SetPositionCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_POSITION, [], '', 'h', returnCallback, errorCallback);
    };   
    this.getAnalogValue = function(returnCallback, errorCallback) {
        /*
        Returns the value as read by a 12-bit analog-to-digital converter.
        The value is between 0 and 4095.
        
        .. note::
         The value returned by :func:`GetPosition` is averaged over several samples
         to yield less noise, while :func:`GetAnalogValue` gives back raw
         unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
         if you need the full resolution of the analog-to-digital converter.
        
        If you want the analog value periodically, it is recommended to use the 
        callback :func:`AnalogValue` and set the period with 
        :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setPositionCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Position` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Position` is only triggered if the position has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_SET_POSITION_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getPositionCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetPositionCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_POSITION_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AnalogValue` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`AnalogValue` is only triggered if the analog value has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setPositionCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`PositionReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the position is *outside* the min and max values"
         "'i'",    "Callback is triggered when the position is *inside* the min and max values"
         "'<'",    "Callback is triggered when the position is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the position is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getPositionCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetPositionCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AnalogValueReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
         "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
         "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`PositionReached`,
        * :func:`AnalogValueReached`
        
        are triggered, if the thresholds
        
        * :func:`SetPositionCallbackThreshold`,
        * :func:`SetAnalogValueCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletRotaryPoti;

},{"./Device":48}],40:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletSegmentDisplay4x7.DEVICE_IDENTIFIER = 237;
BrickletSegmentDisplay4x7.CALLBACK_COUNTER_FINISHED = 5;
BrickletSegmentDisplay4x7.FUNCTION_SET_SEGMENTS = 1;
BrickletSegmentDisplay4x7.FUNCTION_GET_SEGMENTS = 2;
BrickletSegmentDisplay4x7.FUNCTION_START_COUNTER = 3;
BrickletSegmentDisplay4x7.FUNCTION_GET_COUNTER_VALUE = 4;
BrickletSegmentDisplay4x7.FUNCTION_GET_IDENTITY = 255;

function BrickletSegmentDisplay4x7(uid, ipcon) {
    //Device for controling four 7-segment displays
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletSegmentDisplay4x7.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletSegmentDisplay4x7.FUNCTION_SET_SEGMENTS] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletSegmentDisplay4x7.FUNCTION_GET_SEGMENTS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletSegmentDisplay4x7.FUNCTION_START_COUNTER] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletSegmentDisplay4x7.FUNCTION_GET_COUNTER_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletSegmentDisplay4x7.CALLBACK_COUNTER_FINISHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletSegmentDisplay4x7.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletSegmentDisplay4x7.CALLBACK_COUNTER_FINISHED] = '';

    this.setSegments = function(segments, brightness, colon, returnCallback, errorCallback) {
        /*
        The 7-segment display can be set with bitmaps. Every bit controls one
        segment:
        
        .. image:: /Images/Bricklets/bricklet_segment_display_4x7_bit_order.png
           :scale: 100 %
           :alt: Bit order of one segment
           :align: center
        
        For example to set a "5" you would want to activate segments 0, 2, 3, 5 and 6.
        This is represented by the number 0b01101101 = 0x6d = 109.
        
        The brightness can be set between 0 (dark) and 7 (bright). The colon
        parameter turns the colon of the display on or off.
        */
        this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7.FUNCTION_SET_SEGMENTS, [segments, brightness, colon], 'B4 B ?', '', returnCallback, errorCallback);
    };
    this.getSegments = function(returnCallback, errorCallback) {
        /*
        Returns the segment, brightness and color data as set by 
        :func:`SetSegments`.
        */
        this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7.FUNCTION_GET_SEGMENTS, [], '', 'B4 B ?', returnCallback, errorCallback);
    };   
    this.startCounter = function(valueFrom, valueTo, increment, length, returnCallback, errorCallback) {
        /*
        Starts a counter with the *from* value that counts to the *to*
        value with the each step incremented by *increment*.
        The *length* of the increment is given in ms.
        
        Example: If you set *from* to 0, *to* to 100, *increment* to 1 and
        *length* to 1000, a counter that goes from 0 to 100 with 1 second
        pause between each increment will be started.
        
        The maximum values for *from*, *to* and *increment* is 9999, 
        the minimum value is -999.
        
        You can stop the counter at every time by calling :func:`SetSegments`.
        */
        this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7.FUNCTION_START_COUNTER, [valueFrom, valueTo, increment, length], 'h h h I', '', returnCallback, errorCallback);
    };
    this.getCounterValue = function(returnCallback, errorCallback) {
        /*
        Returns the counter value that is currently shown on the display.
        
        If there is no counter running a 0 will be returned.
        */
        this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7.FUNCTION_GET_COUNTER_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletSegmentDisplay4x7;

},{"./Device":48}],41:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletSoundIntensity.DEVICE_IDENTIFIER = 238;
BrickletSoundIntensity.CALLBACK_INTENSITY = 8;
BrickletSoundIntensity.CALLBACK_INTENSITY_REACHED = 9;
BrickletSoundIntensity.FUNCTION_GET_INTENSITY = 1;
BrickletSoundIntensity.FUNCTION_SET_INTENSITY_CALLBACK_PERIOD = 2;
BrickletSoundIntensity.FUNCTION_GET_INTENSITY_CALLBACK_PERIOD = 3;
BrickletSoundIntensity.FUNCTION_SET_INTENSITY_CALLBACK_THRESHOLD = 4;
BrickletSoundIntensity.FUNCTION_GET_INTENSITY_CALLBACK_THRESHOLD = 5;
BrickletSoundIntensity.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletSoundIntensity.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletSoundIntensity.FUNCTION_GET_IDENTITY = 255;
BrickletSoundIntensity.THRESHOLD_OPTION_OFF = 'x';
BrickletSoundIntensity.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletSoundIntensity.THRESHOLD_OPTION_INSIDE = 'i';
BrickletSoundIntensity.THRESHOLD_OPTION_SMALLER = '<';
BrickletSoundIntensity.THRESHOLD_OPTION_GREATER = '>';

function BrickletSoundIntensity(uid, ipcon) {
    //Device for sensing sound intensity
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletSoundIntensity.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletSoundIntensity.FUNCTION_GET_INTENSITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletSoundIntensity.FUNCTION_SET_INTENSITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletSoundIntensity.FUNCTION_GET_INTENSITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletSoundIntensity.FUNCTION_SET_INTENSITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletSoundIntensity.FUNCTION_GET_INTENSITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletSoundIntensity.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletSoundIntensity.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletSoundIntensity.CALLBACK_INTENSITY] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletSoundIntensity.CALLBACK_INTENSITY_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletSoundIntensity.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletSoundIntensity.CALLBACK_INTENSITY] = 'H';
    this.callbackFormats[BrickletSoundIntensity.CALLBACK_INTENSITY_REACHED] = 'H';

    this.getIntensity = function(returnCallback, errorCallback) {
        /*
        Returns the current sound intensity. The value has a range of
        0 to 4095.
        
        The value corresponds to the `upper envelop <http://en.wikipedia.org/wiki/Envelope_(waves)>`__
        of the signal of the microphone capsule.
        
        If you want to get the intensity periodically, it is recommended to use the
        callback :func:`Intensity` and set the period with 
        :func:`SetIntensityCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_GET_INTENSITY, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setIntensityCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Intensity` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Intensity` is only triggered if the intensity has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_SET_INTENSITY_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getIntensityCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetIntensityCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_GET_INTENSITY_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setIntensityCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`IntensityReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the intensity is *outside* the min and max values"
         "'i'",    "Callback is triggered when the intensity is *inside* the min and max values"
         "'<'",    "Callback is triggered when the intensity is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the intensity is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_SET_INTENSITY_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getIntensityCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetIntensityCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_GET_INTENSITY_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callback
        
        * :func:`IntensityReached`
        
        is triggered, if the thresholds
        
        * :func:`SetIntensityCallbackThreshold`
        
        keeps being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletSoundIntensity.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletSoundIntensity;

},{"./Device":48}],42:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletTemperature.DEVICE_IDENTIFIER = 216;
BrickletTemperature.CALLBACK_TEMPERATURE = 8;
BrickletTemperature.CALLBACK_TEMPERATURE_REACHED = 9;
BrickletTemperature.FUNCTION_GET_TEMPERATURE = 1;
BrickletTemperature.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD = 2;
BrickletTemperature.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD = 3;
BrickletTemperature.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD = 4;
BrickletTemperature.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD = 5;
BrickletTemperature.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletTemperature.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletTemperature.FUNCTION_SET_I2C_MODE = 10;
BrickletTemperature.FUNCTION_GET_I2C_MODE = 11;
BrickletTemperature.FUNCTION_GET_IDENTITY = 255;
BrickletTemperature.THRESHOLD_OPTION_OFF = 'x';
BrickletTemperature.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletTemperature.THRESHOLD_OPTION_INSIDE = 'i';
BrickletTemperature.THRESHOLD_OPTION_SMALLER = '<';
BrickletTemperature.THRESHOLD_OPTION_GREATER = '>';
BrickletTemperature.I2C_MODE_FAST = 0;
BrickletTemperature.I2C_MODE_SLOW = 1;

function BrickletTemperature(uid, ipcon) {
    //Device for sensing Temperature
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletTemperature.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletTemperature.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperature.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletTemperature.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperature.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletTemperature.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperature.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletTemperature.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperature.CALLBACK_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletTemperature.CALLBACK_TEMPERATURE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletTemperature.FUNCTION_SET_I2C_MODE] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletTemperature.FUNCTION_GET_I2C_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperature.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletTemperature.CALLBACK_TEMPERATURE] = 'h';
    this.callbackFormats[BrickletTemperature.CALLBACK_TEMPERATURE_REACHED] = 'h';

    this.getTemperature = function(returnCallback, errorCallback) {
        /*
        Returns the temperature of the sensor. The value
        has a range of -2500 to 8500 and is given in °C/100,
        e.g. a value of 4223 means that a temperature of 42.23 °C is measured.
        
        If you want to get the temperature periodically, it is recommended 
        to use the callback :func:`Temperature` and set the period with 
        :func:`SetTemperatureCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_GET_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
    };   
    this.setTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Temperature` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Temperature` is only triggered if the temperature has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetTemperatureCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setTemperatureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`TemperatureReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the temperature is *outside* the min and max values"
         "'i'",    "Callback is triggered when the temperature is *inside* the min and max values"
         "'<'",    "Callback is triggered when the temperature is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the temperature is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getTemperatureCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetTemperatureCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callback
        
        * :func:`TemperatureReached`
        
        is triggered, if the threshold
        
        * :func:`SetTemperatureCallbackThreshold`
        
        keeps being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setI2CMode = function(mode, returnCallback, errorCallback) {
        /*
        Sets the I2C mode. Possible modes are:
        
        * 0: Fast (400kHz, default)
        * 1: Slow (100kHz)
        
        If you have problems with obvious outliers in the
        Temperature Bricklet measurements, they may be caused by EMI issues.
        In this case it may be helpful to lower the I2C speed.
        
        It is however not recommended to lower the I2C speed in applications where
        a high throughput needs to be achieved.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_SET_I2C_MODE, [mode], 'B', '', returnCallback, errorCallback);
    };
    this.getI2CMode = function(returnCallback, errorCallback) {
        /*
        Returns the I2C mode as set by :func:`SetI2CMode`.
        
        .. versionadded:: 2.0.1~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_GET_I2C_MODE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletTemperature.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletTemperature;

},{"./Device":48}],43:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletTemperatureIR.DEVICE_IDENTIFIER = 217;
BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE = 15;
BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE = 16;
BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE_REACHED = 17;
BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE_REACHED = 18;
BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE = 1;
BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE = 2;
BrickletTemperatureIR.FUNCTION_SET_EMISSIVITY = 3;
BrickletTemperatureIR.FUNCTION_GET_EMISSIVITY = 4;
BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD = 5;
BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD = 6;
BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_PERIOD = 7;
BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_PERIOD = 8;
BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD = 9;
BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD = 10;
BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD = 11;
BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD = 12;
BrickletTemperatureIR.FUNCTION_SET_DEBOUNCE_PERIOD = 13;
BrickletTemperatureIR.FUNCTION_GET_DEBOUNCE_PERIOD = 14;
BrickletTemperatureIR.FUNCTION_GET_IDENTITY = 255;
BrickletTemperatureIR.THRESHOLD_OPTION_OFF = 'x';
BrickletTemperatureIR.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletTemperatureIR.THRESHOLD_OPTION_INSIDE = 'i';
BrickletTemperatureIR.THRESHOLD_OPTION_SMALLER = '<';
BrickletTemperatureIR.THRESHOLD_OPTION_GREATER = '>';

function BrickletTemperatureIR(uid, ipcon) {
    //Device for non-contact temperature sensing
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletTemperatureIR.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_EMISSIVITY] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_EMISSIVITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE] = 'h';
    this.callbackFormats[BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE] = 'h';
    this.callbackFormats[BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE_REACHED] = 'h';
    this.callbackFormats[BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE_REACHED] = 'h';

    this.getAmbientTemperature = function(returnCallback, errorCallback) {
        /*
        Returns the ambient temperature of the sensor. The value
        has a range of -400 to 1250 and is given in °C/10,
        e.g. a value of 423 means that an ambient temperature of 42.3 °C is 
        measured.
        
        If you want to get the ambient temperature periodically, it is recommended 
        to use the callback :func:`AmbientTemperature` and set the period with 
        :func:`SetAmbientTemperatureCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
    };   
    this.getObjectTemperature = function(returnCallback, errorCallback) {
        /*
        Returns the object temperature of the sensor, i.e. the temperature
        of the surface of the object the sensor is aimed at. The value
        has a range of -700 to 3800 and is given in °C/10,
        e.g. a value of 3001 means that a temperature of 300.1 °C is measured
        on the surface of the object.
        
        The temperature of different materials is dependent on their `emissivity 
        <http://en.wikipedia.org/wiki/Emissivity>`__. The emissivity of the material
        can be set with :func:`SetEmissivity`.
        
        If you want to get the object temperature periodically, it is recommended 
        to use the callback :func:`ObjectTemperature` and set the period with 
        :func:`SetObjectTemperatureCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE, [], '', 'h', returnCallback, errorCallback);
    };   
    this.setEmissivity = function(emissivity, returnCallback, errorCallback) {
        /*
        Sets the `emissivity <http://en.wikipedia.org/wiki/Emissivity>`__ that is
        used to calculate the surface temperature as returned by 
        :func:`GetObjectTemperature`. 
        
        The emissivity is usually given as a value between 0.0 and 1.0. A list of
        emissivities of different materials can be found 
        `here <http://www.infrared-thermography.com/material.htm>`__.
        
        The parameter of :func:`SetEmissivity` has to be given with a factor of
        65535 (16-bit). For example: An emissivity of 0.1 can be set with the
        value 6553, an emissivity of 0.5 with the value 32767 and so on.
        
        .. note::
         If you need a precise measurement for the object temperature, it is
         absolutely crucial that you also provide a precise emissivity.
        
        The default emissivity is 1.0 (value of 65535) and the minimum emissivity the
        sensor can handle is 0.1 (value of 6553).
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_EMISSIVITY, [emissivity], 'H', '', returnCallback, errorCallback);
    };
    this.getEmissivity = function(returnCallback, errorCallback) {
        /*
        Returns the emissivity as set by :func:`SetEmissivity`.
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_EMISSIVITY, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setAmbientTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AmbientTemperature` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`AmbientTemperature` is only triggered if the temperature has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAmbientTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAmbientTemperatureCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setObjectTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`ObjectTemperature` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`ObjectTemperature` is only triggered if the temperature has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getObjectTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetObjectTemperatureCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAmbientTemperatureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AmbientTemperatureReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the ambient temperature is *outside* the min and max values"
         "'i'",    "Callback is triggered when the ambient temperature is *inside* the min and max values"
         "'<'",    "Callback is triggered when the ambient temperature is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the ambient temperature is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getAmbientTemperatureCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAmbientTemperatureCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setObjectTemperatureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`ObjectTemperatureReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the object temperature is *outside* the min and max values"
         "'i'",    "Callback is triggered when the object temperature is *inside* the min and max values"
         "'<'",    "Callback is triggered when the object temperature is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the object temperature is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getObjectTemperatureCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetObjectTemperatureCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`AmbientTemperatureReached`,
        * :func:`ObjectTemperatureReached`
        
        are triggered, if the thresholds
        
        * :func:`SetAmbientTemperatureCallbackThreshold`,
        * :func:`SetObjectTemperatureCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletTemperatureIR;

},{"./Device":48}],44:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletTilt.DEVICE_IDENTIFIER = 239;
BrickletTilt.CALLBACK_TILT_STATE = 5;
BrickletTilt.FUNCTION_GET_TILT_STATE = 1;
BrickletTilt.FUNCTION_ENABLE_TILT_STATE_CALLBACK = 2;
BrickletTilt.FUNCTION_DISABLE_TILT_STATE_CALLBACK = 3;
BrickletTilt.FUNCTION_IS_TILT_STATE_CALLBACK_ENABLED = 4;
BrickletTilt.FUNCTION_GET_IDENTITY = 255;
BrickletTilt.TILT_STATE_CLOSED = 0;
BrickletTilt.TILT_STATE_OPEN = 1;
BrickletTilt.TILT_STATE_CLOSED_VIBRATING = 2;

function BrickletTilt(uid, ipcon) {
    //Device for sensing tilt and vibration
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletTilt.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletTilt.FUNCTION_GET_TILT_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTilt.FUNCTION_ENABLE_TILT_STATE_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletTilt.FUNCTION_DISABLE_TILT_STATE_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletTilt.FUNCTION_IS_TILT_STATE_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletTilt.CALLBACK_TILT_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletTilt.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletTilt.CALLBACK_TILT_STATE] = 'B';

    this.getTiltState = function(returnCallback, errorCallback) {
        /*
        Returns the current tilt state. The state can either be
        
        * 0 = Closed: The ball in the tilt switch closes the circuit.
        * 1 = Open: The ball in the tilt switch does not close the circuit.
        * 2 = Closed Vibrating: The tilt switch is in motion (rapid change between open and close).
        
        .. image:: /Images/Bricklets/bricklet_tilt_mechanics.jpg
           :scale: 100 %
           :alt: Tilt states
           :align: center
           :target: ../../_images/Bricklets/bricklet_tilt_mechanics.jpg
        */
        this.ipcon.sendRequest(this, BrickletTilt.FUNCTION_GET_TILT_STATE, [], '', 'B', returnCallback, errorCallback);
    };   
    this.enableTiltStateCallback = function(returnCallback, errorCallback) {
        /*
        Enables the :func:`TiltState` callback.
        */
        this.ipcon.sendRequest(this, BrickletTilt.FUNCTION_ENABLE_TILT_STATE_CALLBACK, [], '', '', returnCallback, errorCallback);
    };   
    this.disableTiltStateCallback = function(returnCallback, errorCallback) {
        /*
        Disables the :func:`TiltState` callback.
        */
        this.ipcon.sendRequest(this, BrickletTilt.FUNCTION_DISABLE_TILT_STATE_CALLBACK, [], '', '', returnCallback, errorCallback);
    };   
    this.isTiltStateCallbackEnabled = function(returnCallback, errorCallback) {
        /*
        Returns *true* if the :func:`TiltState` callback is enabled.
        */
        this.ipcon.sendRequest(this, BrickletTilt.FUNCTION_IS_TILT_STATE_CALLBACK_ENABLED, [], '', '?', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletTilt.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletTilt;

},{"./Device":48}],45:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletVoltage.DEVICE_IDENTIFIER = 218;
BrickletVoltage.CALLBACK_VOLTAGE = 13;
BrickletVoltage.CALLBACK_ANALOG_VALUE = 14;
BrickletVoltage.CALLBACK_VOLTAGE_REACHED = 15;
BrickletVoltage.CALLBACK_ANALOG_VALUE_REACHED = 16;
BrickletVoltage.FUNCTION_GET_VOLTAGE = 1;
BrickletVoltage.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD = 3;
BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD = 4;
BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD = 7;
BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD = 8;
BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletVoltage.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletVoltage.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletVoltage.FUNCTION_GET_IDENTITY = 255;
BrickletVoltage.THRESHOLD_OPTION_OFF = 'x';
BrickletVoltage.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletVoltage.THRESHOLD_OPTION_INSIDE = 'i';
BrickletVoltage.THRESHOLD_OPTION_SMALLER = '<';
BrickletVoltage.THRESHOLD_OPTION_GREATER = '>';

function BrickletVoltage(uid, ipcon) {
    //Device for sensing Voltages between 0 and 50V
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletVoltage.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletVoltage.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltage.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltage.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletVoltage.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltage.CALLBACK_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletVoltage.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletVoltage.CALLBACK_VOLTAGE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletVoltage.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletVoltage.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletVoltage.CALLBACK_VOLTAGE] = 'H';
    this.callbackFormats[BrickletVoltage.CALLBACK_ANALOG_VALUE] = 'H';
    this.callbackFormats[BrickletVoltage.CALLBACK_VOLTAGE_REACHED] = 'H';
    this.callbackFormats[BrickletVoltage.CALLBACK_ANALOG_VALUE_REACHED] = 'H';

    this.getVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the voltage of the sensor. The value is in mV and
        between 0mV and 50000mV.
        
        If you want to get the voltage periodically, it is recommended to use the
        callback :func:`Voltage` and set the period with 
        :func:`SetVoltageCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.getAnalogValue = function(returnCallback, errorCallback) {
        /*
        Returns the value as read by a 12-bit analog-to-digital converter.
        The value is between 0 and 4095.
        
        .. note::
         The value returned by :func:`GetVoltage` is averaged over several samples
         to yield less noise, while :func:`GetAnalogValue` gives back raw
         unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
         if you need the full resolution of the analog-to-digital converter.
        
        If you want the analog value periodically, it is recommended to use the 
        callback :func:`AnalogValue` and set the period with 
        :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
    };   
    this.setVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Voltage` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Voltage` is only triggered if the voltage has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getVoltageCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetVoltageCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`AnalogValue` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`AnalogValue` is only triggered if the analog value has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setVoltageCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`VoltageReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the voltage is *outside* the min and max values"
         "'i'",    "Callback is triggered when the voltage is *inside* the min and max values"
         "'<'",    "Callback is triggered when the voltage is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the voltage is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
    };
    this.getVoltageCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetVoltageCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
    };   
    this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`AnalogValueReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
         "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
         "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
    };
    this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`VoltageReached`,
        * :func:`AnalogValueReached`
        
        are triggered, if the thresholds
        
        * :func:`SetVoltageCallbackThreshold`,
        * :func:`SetAnalogValueCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletVoltage;

},{"./Device":48}],46:[function(require,module,exports){
/* ***********************************************************
 * This file was automatically generated on 2014-03-03.      *
 *                                                           *
 * Bindings Version 2.0.0                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletVoltageCurrent.DEVICE_IDENTIFIER = 227;
BrickletVoltageCurrent.CALLBACK_CURRENT = 22;
BrickletVoltageCurrent.CALLBACK_VOLTAGE = 23;
BrickletVoltageCurrent.CALLBACK_POWER = 24;
BrickletVoltageCurrent.CALLBACK_CURRENT_REACHED = 25;
BrickletVoltageCurrent.CALLBACK_VOLTAGE_REACHED = 26;
BrickletVoltageCurrent.CALLBACK_POWER_REACHED = 27;
BrickletVoltageCurrent.FUNCTION_GET_CURRENT = 1;
BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE = 2;
BrickletVoltageCurrent.FUNCTION_GET_POWER = 3;
BrickletVoltageCurrent.FUNCTION_SET_CONFIGURATION = 4;
BrickletVoltageCurrent.FUNCTION_GET_CONFIGURATION = 5;
BrickletVoltageCurrent.FUNCTION_SET_CALIBRATION = 6;
BrickletVoltageCurrent.FUNCTION_GET_CALIBRATION = 7;
BrickletVoltageCurrent.FUNCTION_SET_CURRENT_CALLBACK_PERIOD = 8;
BrickletVoltageCurrent.FUNCTION_GET_CURRENT_CALLBACK_PERIOD = 9;
BrickletVoltageCurrent.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD = 10;
BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD = 11;
BrickletVoltageCurrent.FUNCTION_SET_POWER_CALLBACK_PERIOD = 12;
BrickletVoltageCurrent.FUNCTION_GET_POWER_CALLBACK_PERIOD = 13;
BrickletVoltageCurrent.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD = 14;
BrickletVoltageCurrent.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD = 15;
BrickletVoltageCurrent.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD = 16;
BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD = 17;
BrickletVoltageCurrent.FUNCTION_SET_POWER_CALLBACK_THRESHOLD = 18;
BrickletVoltageCurrent.FUNCTION_GET_POWER_CALLBACK_THRESHOLD = 19;
BrickletVoltageCurrent.FUNCTION_SET_DEBOUNCE_PERIOD = 20;
BrickletVoltageCurrent.FUNCTION_GET_DEBOUNCE_PERIOD = 21;
BrickletVoltageCurrent.FUNCTION_GET_IDENTITY = 255;
BrickletVoltageCurrent.AVERAGING_1 = 0;
BrickletVoltageCurrent.AVERAGING_4 = 1;
BrickletVoltageCurrent.AVERAGING_16 = 2;
BrickletVoltageCurrent.AVERAGING_64 = 3;
BrickletVoltageCurrent.AVERAGING_128 = 4;
BrickletVoltageCurrent.AVERAGING_256 = 5;
BrickletVoltageCurrent.AVERAGING_512 = 6;
BrickletVoltageCurrent.AVERAGING_1024 = 7;
BrickletVoltageCurrent.THRESHOLD_OPTION_OFF = 'x';
BrickletVoltageCurrent.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletVoltageCurrent.THRESHOLD_OPTION_INSIDE = 'i';
BrickletVoltageCurrent.THRESHOLD_OPTION_SMALLER = '<';
BrickletVoltageCurrent.THRESHOLD_OPTION_GREATER = '>';

function BrickletVoltageCurrent(uid, ipcon) {
    //Device for high precision sensing of voltage and current
    
    /*
    Creates an object with the unique device ID *uid* and adds it to
    the IP Connection *ipcon*.
    */
    Device.call(this, this, uid, ipcon);
    BrickletVoltageCurrent.prototype = Object.create(Device);
    this.responseExpected = {};
    this.callbackFormats = {};
    this.APIVersion = [2, 0, 0];
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_POWER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_CALIBRATION] = Device.RESPONSE_EXPECTED_FALSE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_POWER_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_POWER_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_POWER_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_POWER_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.responseExpected[BrickletVoltageCurrent.CALLBACK_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletVoltageCurrent.CALLBACK_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletVoltageCurrent.CALLBACK_POWER] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletVoltageCurrent.CALLBACK_CURRENT_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletVoltageCurrent.CALLBACK_VOLTAGE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletVoltageCurrent.CALLBACK_POWER_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
    this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
    this.callbackFormats[BrickletVoltageCurrent.CALLBACK_CURRENT] = 'i';
    this.callbackFormats[BrickletVoltageCurrent.CALLBACK_VOLTAGE] = 'i';
    this.callbackFormats[BrickletVoltageCurrent.CALLBACK_POWER] = 'i';
    this.callbackFormats[BrickletVoltageCurrent.CALLBACK_CURRENT_REACHED] = 'i';
    this.callbackFormats[BrickletVoltageCurrent.CALLBACK_VOLTAGE_REACHED] = 'i';
    this.callbackFormats[BrickletVoltageCurrent.CALLBACK_POWER_REACHED] = 'i';

    this.getCurrent = function(returnCallback, errorCallback) {
        /*
        Returns the current. The value is in mA
        and between -20000mA and 20000mA.
        
        If you want to get the current periodically, it is recommended to use the
        callback :func:`Current` and set the period with 
        :func:`SetCurrentCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_CURRENT, [], '', 'i', returnCallback, errorCallback);
    };   
    this.getVoltage = function(returnCallback, errorCallback) {
        /*
        Returns the voltage. The value is in mV
        and between 0mV and 36000mV.
        
        If you want to get the voltage periodically, it is recommended to use the
        callback :func:`Voltage` and set the period with 
        :func:`SetVoltageCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE, [], '', 'i', returnCallback, errorCallback);
    };   
    this.getPower = function(returnCallback, errorCallback) {
        /*
        Returns the power. The value is in mW
        and between 0mV and 720000mW.
        
        If you want to get the power periodically, it is recommended to use the
        callback :func:`Power` and set the period with 
        :func:`SetPowerCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_POWER, [], '', 'i', returnCallback, errorCallback);
    };   
    this.setConfiguration = function(averaging, voltageConversionTime, currentConversionTime, returnCallback, errorCallback) {
        /*
        Sets the configuration of the Voltage/Current Bricklet. It is
        possible to configure number of averages as well as
        voltage and current conversion time.
        
        Averaging:
        
        .. csv-table::
         :header: "Value", "Number of Averages"
         :widths: 20, 20
        
         "0",    "1"
         "1",    "4"
         "2",    "16"
         "3",    "64"
         "4",    "128"
         "5",    "256"
         "6",    "512"
         ">=7",  "1024"
        
        Voltage/Current conversion:
        
        .. csv-table::
         :header: "Value", "Conversion time"
         :widths: 20, 20
        
         "0",    "140µs"
         "1",    "204µs"
         "2",    "332µs"
         "3",    "588µs"
         "4",    "1.1ms"
         "5",    "2.116ms"
         "6",    "4.156ms"
         ">=7",  "8.244ms"
        
        The default values are 3, 4 and 4 (64, 1.1ms, 1.1ms) for averaging, voltage 
        conversion and current conversion.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_CONFIGURATION, [averaging, voltageConversionTime, currentConversionTime], 'B B B', '', returnCallback, errorCallback);
    };
    this.getConfiguration = function(returnCallback, errorCallback) {
        /*
        Returns the configuration as set by :func:`SetConfiguration`.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_CONFIGURATION, [], '', 'B B B', returnCallback, errorCallback);
    };   
    this.setCalibration = function(gainMultiplier, gainDivisor, returnCallback, errorCallback) {
        /*
        Since the shunt resistor that is used to measure the current is not
        perfectly precise, it needs to be calibrated by a multiplier and
        divisor if a very precise reading is needed.
        
        For example, if you are expecting a measurement of 1000mA and you
        are measuring 1023mA, you can calibrate the Voltage/Current Bricklet 
        by setting the multiplier to 1000 and the divisor to 1023.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_CALIBRATION, [gainMultiplier, gainDivisor], 'H H', '', returnCallback, errorCallback);
    };
    this.getCalibration = function(returnCallback, errorCallback) {
        /*
        Returns the calibration as set by :func:`SetCalibration`.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_CALIBRATION, [], '', 'H H', returnCallback, errorCallback);
    };   
    this.setCurrentCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Current` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Current` is only triggered if the current has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_CURRENT_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getCurrentCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetCurrentCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_CURRENT_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Voltage` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Voltage` is only triggered if the voltage has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getVoltageCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`SetVoltageCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setPowerCallbackPeriod = function(period, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the :func:`Power` callback is triggered
        periodically. A value of 0 turns the callback off.
        
        :func:`Power` is only triggered if the power has changed since the
        last triggering.
        
        The default value is 0.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_POWER_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
    };
    this.getPowerCallbackPeriod = function(returnCallback, errorCallback) {
        /*
        Returns the period as set by :func:`GetPowerCallbackPeriod`.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_POWER_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.setCurrentCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`CurrentReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the current is *outside* the min and max values"
         "'i'",    "Callback is triggered when the current is *inside* the min and max values"
         "'<'",    "Callback is triggered when the current is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the current is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD, [option, min, max], 'c i i', '', returnCallback, errorCallback);
    };
    this.getCurrentCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetCurrentCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD, [], '', 'c i i', returnCallback, errorCallback);
    };   
    this.setVoltageCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`VoltageReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the voltage is *outside* the min and max values"
         "'i'",    "Callback is triggered when the voltage is *inside* the min and max values"
         "'<'",    "Callback is triggered when the voltage is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the voltage is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c i i', '', returnCallback, errorCallback);
    };
    this.getVoltageCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetVoltageCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD, [], '', 'c i i', returnCallback, errorCallback);
    };   
    this.setPowerCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
        /*
        Sets the thresholds for the :func:`PowerReached` callback. 
        
        The following options are possible:
        
        .. csv-table::
         :header: "Option", "Description"
         :widths: 10, 100
        
         "'x'",    "Callback is turned off"
         "'o'",    "Callback is triggered when the power is *outside* the min and max values"
         "'i'",    "Callback is triggered when the power is *inside* the min and max values"
         "'<'",    "Callback is triggered when the power is smaller than the min value (max is ignored)"
         "'>'",    "Callback is triggered when the power is greater than the min value (max is ignored)"
        
        The default value is ('x', 0, 0).
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_POWER_CALLBACK_THRESHOLD, [option, min, max], 'c i i', '', returnCallback, errorCallback);
    };
    this.getPowerCallbackThreshold = function(returnCallback, errorCallback) {
        /*
        Returns the threshold as set by :func:`SetPowerCallbackThreshold`.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_POWER_CALLBACK_THRESHOLD, [], '', 'c i i', returnCallback, errorCallback);
    };   
    this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
        /*
        Sets the period in ms with which the threshold callbacks
        
        * :func:`CurrentReached`,
        * :func:`VoltageReached`,
        * :func:`PowerReached`
        
        are triggered, if the thresholds
        
        * :func:`SetCurrentCallbackThreshold`,
        * :func:`SetVoltageCallbackThreshold`,
        * :func:`SetPowerCallbackThreshold`
        
        keep being reached.
        
        The default value is 100.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
    };
    this.getDebouncePeriod = function(returnCallback, errorCallback) {
        /*
        Returns the debounce period as set by :func:`SetDebouncePeriod`.
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
    };   
    this.getIdentity = function(returnCallback, errorCallback) {
        /*
        Returns the UID, the UID where the Bricklet is connected to, 
        the position, the hardware and firmware version as well as the
        device identifier.
        
        The position can be 'a', 'b', 'c' or 'd'.
        
        The device identifier numbers can be found :ref:`here <device_identifier>`.
        |device_identifier_constant|
        
        .. versionadded:: 2.0.0~(Plugin)
        */
        this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
    };   
}
        
module.exports = BrickletVoltageCurrent;

},{"./Device":48}],47:[function(require,module,exports){
(function (global){function Tinkerforge() {
    this.IPConnection = require('./IPConnection');
    this.BrickDC = require('./BrickDC');
    this.BrickIMU = require('./BrickIMU');
    this.BrickMaster = require('./BrickMaster');
    this.BrickServo = require('./BrickServo');
    this.BrickStepper = require('./BrickStepper');
    this.BrickletAmbientLight = require('./BrickletAmbientLight');
    this.BrickletAnalogIn = require('./BrickletAnalogIn');
    this.BrickletAnalogOut = require('./BrickletAnalogOut');
    this.BrickletBarometer = require('./BrickletBarometer');
    this.BrickletCurrent12 = require('./BrickletCurrent12');
    this.BrickletCurrent25 = require('./BrickletCurrent25');
    this.BrickletDistanceIR = require('./BrickletDistanceIR');
    this.BrickletDistanceUS = require('./BrickletDistanceUS');
    this.BrickletDualButton = require('./BrickletDualButton');
    this.BrickletDualRelay = require('./BrickletDualRelay');
    this.BrickletGPS = require('./BrickletGPS');
    this.BrickletHallEffect = require('./BrickletHallEffect');
    this.BrickletHumidity = require('./BrickletHumidity');
    this.BrickletIndustrialDigitalIn4 = require('./BrickletIndustrialDigitalIn4');
    this.BrickletIndustrialDigitalOut4 = require('./BrickletIndustrialDigitalOut4');
    this.BrickletIndustrialDual020mA = require('./BrickletIndustrialDual020mA');
    this.BrickletIndustrialQuadRelay = require('./BrickletIndustrialQuadRelay');
    this.BrickletIO16 = require('./BrickletIO16');
    this.BrickletIO4 = require('./BrickletIO4');
    this.BrickletJoystick = require('./BrickletJoystick');
    this.BrickletLCD16x2 = require('./BrickletLCD16x2');
    this.BrickletLCD20x4 = require('./BrickletLCD20x4');
    this.BrickletLEDStrip = require('./BrickletLEDStrip');
    this.BrickletLine = require('./BrickletLine');
    this.BrickletLinearPoti = require('./BrickletLinearPoti');
    this.BrickletMoisture = require('./BrickletMoisture');
    this.BrickletMotionDetector = require('./BrickletMotionDetector');
    this.BrickletMultiTouch = require('./BrickletMultiTouch');
    this.BrickletPiezoBuzzer = require('./BrickletPiezoBuzzer');
    this.BrickletPiezoSpeaker = require('./BrickletPiezoSpeaker');
    this.BrickletPTC = require('./BrickletPTC');
    this.BrickletRemoteSwitch = require('./BrickletRemoteSwitch');
    this.BrickletRotaryEncoder = require('./BrickletRotaryEncoder');
    this.BrickletRotaryPoti = require('./BrickletRotaryPoti');
    this.BrickletSegmentDisplay4x7 = require('./BrickletSegmentDisplay4x7');
    this.BrickletSoundIntensity = require('./BrickletSoundIntensity');
    this.BrickletTemperature = require('./BrickletTemperature');
    this.BrickletTemperatureIR = require('./BrickletTemperatureIR');
    this.BrickletTilt = require('./BrickletTilt');
    this.BrickletVoltage = require('./BrickletVoltage');
    this.BrickletVoltageCurrent = require('./BrickletVoltageCurrent');
}

global.window.Tinkerforge = new Tinkerforge();}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./BrickDC":1,"./BrickIMU":2,"./BrickMaster":3,"./BrickServo":4,"./BrickStepper":5,"./BrickletAmbientLight":6,"./BrickletAnalogIn":7,"./BrickletAnalogOut":8,"./BrickletBarometer":9,"./BrickletCurrent12":10,"./BrickletCurrent25":11,"./BrickletDistanceIR":12,"./BrickletDistanceUS":13,"./BrickletDualButton":14,"./BrickletDualRelay":15,"./BrickletGPS":16,"./BrickletHallEffect":17,"./BrickletHumidity":18,"./BrickletIO16":19,"./BrickletIO4":20,"./BrickletIndustrialDigitalIn4":21,"./BrickletIndustrialDigitalOut4":22,"./BrickletIndustrialDual020mA":23,"./BrickletIndustrialQuadRelay":24,"./BrickletJoystick":25,"./BrickletLCD16x2":26,"./BrickletLCD20x4":27,"./BrickletLEDStrip":28,"./BrickletLine":29,"./BrickletLinearPoti":30,"./BrickletMoisture":31,"./BrickletMotionDetector":32,"./BrickletMultiTouch":33,"./BrickletPTC":34,"./BrickletPiezoBuzzer":35,"./BrickletPiezoSpeaker":36,"./BrickletRemoteSwitch":37,"./BrickletRotaryEncoder":38,"./BrickletRotaryPoti":39,"./BrickletSegmentDisplay4x7":40,"./BrickletSoundIntensity":41,"./BrickletTemperature":42,"./BrickletTemperatureIR":43,"./BrickletTilt":44,"./BrickletVoltage":45,"./BrickletVoltageCurrent":46,"./IPConnection":49}],48:[function(require,module,exports){
/*
Copyright (C) 2014 Ishraq Ibne Ashraf <ishraq@tinkerforge.com>

Redistribution and use in source and binary forms of this file,
with or without modification, are permitted. See the Creative
Commons Zero (CC0 1.0) License for more details.
*/

Device.RESPONSE_EXPECTED_INVALID_FUNCTION_ID = 0;
Device.RESPONSE_EXPECTED_ALWAYS_TRUE = 1; // Getter
Device.RESPONSE_EXPECTED_ALWAYS_FALSE = 2; // Callback
Device.RESPONSE_EXPECTED_TRUE = 3; // Setter
Device.RESPONSE_EXPECTED_FALSE = 4; // Setter, default
Device.ERROR_INVALID_FUNCTION_ID = 21;

function base58Decode(str) {
    var alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
    var base = alphabet.length;
    var char, char_index, index, num, i, len, ref;
    num = 0;
    ref = str.split(/(?:)/).reverse();
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
        char = ref[index];
        if ((char_index = alphabet.indexOf(char)) === -1) {
            throw new Error('Value passed is not a valid Base58 string.');
        }
        num += char_index * Math.pow(base, index);
    }
    return num;
}

function Device(deviceRegistering, uid, ipcon) {
    if (deviceRegistering !== undefined && uid !== undefined && ipcon !== undefined) {
        this.uid = base58Decode(uid);
        this.registeredCallbacks = {};
        this.ipcon = ipcon;
        this.deviceOID = 0;
        this.APIVersion = [0, 0, 0];
        this.expectedResponses = []; // Has following structured objects as elements of the array,
                                    /*
                                    {
                                        DeviceOID:,
                                        FID:,
                                        SEQ:,
                                        unpackFormat:,
                                        timeout:,
                                        returnCB:,
                                        errorCB:
                                    }
                                    */
        this.authKey = undefined;
        // Creates the device object with the unique device ID *uid* and adds
        // it to the IPConnection *ipcon*.
        this.ipcon.devices[this.uid] = deviceRegistering;
        this.getDeviceOID = function () {
            return this.deviceOID++;
        };
        this.getAPIVersion = function () {
            return this.APIVersion;
        };
        this.on = function (id, callback) {
            this.registeredCallbacks[id] = callback;
        };
        this.getResponseExpected = function (functionID, errorCallback) {
            if (this.responseExpected[functionID] === undefined) {
                if (errorCallback !== undefined) {
                    errorCallback(Device.ERROR_INVALID_FUNCTION_ID);
                }
                return;
            }
            if (this.responseExpected[functionID] === Device.RESPONSE_EXPECTED_TRUE ||
                this.responseExpected[functionID] === Device.RESPONSE_EXPECTED_ALWAYS_TRUE) {
                return true;
            } else {
                return false;
            }
        };
        this.setResponseExpected = function (functionID, responseBoolean, errorCallback) {
            if (this.responseExpected[functionID] === undefined) {
                if (errorCallback !== undefined) {
                    errorCallback(Device.ERROR_INVALID_FUNCTION_ID);
                }
                return;
            }
            if (this.responseExpected[functionID] === Device.RESPONSE_EXPECTED_TRUE ||
                this.responseExpected[functionID] === Device.RESPONSE_EXPECTED_FALSE) {
                if (responseBoolean) {
                    this.responseExpected[functionID] = Device.RESPONSE_EXPECTED_TRUE;
                } else {
                    this.responseExpected[functionID] = Device.RESPONSE_EXPECTED_FALSE;
                }
                return;
            }
            if (errorCallback !== undefined) {
                errorCallback(Device.ERROR_INVALID_FUNCTION_ID);
            }
        };
        this.setResponseExpectedAll = function (responseBoolean) {
            if (responseBoolean === true || responseBoolean === false) {
                for (var fid in this.responseExpected) {
                    if (this.responseExpected[fid] === Device.RESPONSE_EXPECTED_TRUE ||
                        this.responseExpected[fid] === Device.RESPONSE_EXPECTED_FALSE) {
                        if (responseBoolean) {
                            this.responseExpected[fid] = Device.RESPONSE_EXPECTED_TRUE;
                        }
                        else {
                            this.responseExpected[fid] = Device.RESPONSE_EXPECTED_FALSE;
                        }
                    }
                }
            }
        };
    }
}

module.exports = Device;

},{}],49:[function(require,module,exports){
(function (process,Buffer){/*
Copyright (C) 2014 Ishraq Ibne Ashraf <ishraq@tinkerforge.com>
Copyright (C) 2014 Matthias Bolte <matthias@tinkerforge.com>
Copyright (C) 2014 Olaf Lüke <olaf@tinkerforge.com>

Redistribution and use in source and binary forms of this file,
with or without modification, are permitted. See the Creative
Commons Zero (CC0 1.0) License for more details.
*/

var Device = require('./Device');

IPConnection.FUNCTION_ENUMERATE = 254;
IPConnection.FUNCTION_DISCONNECT_PROBE = 128;
IPConnection.CALLBACK_ENUMERATE = 253;
IPConnection.CALLBACK_CONNECTED = 0;
IPConnection.CALLBACK_DISCONNECTED = 1;
IPConnection.BROADCAST_UID = 0;
// Enumeration type parameter to the enumerate callback
IPConnection.ENUMERATION_TYPE_AVAILABLE = 0;
IPConnection.ENUMERATION_TYPE_CONNECTED = 1;
IPConnection.ENUMERATION_TYPE_DISCONNECTED = 2;
// Connect reason parameter to the connected callback
IPConnection.CONNECT_REASON_REQUEST = 0;
IPConnection.CONNECT_REASON_AUTO_RECONNECT = 1;
// Disconnect reason parameter to the disconnected callback
IPConnection.DISCONNECT_REASON_REQUEST = 0;
IPConnection.DISCONNECT_REASON_ERROR = 1;
IPConnection.DISCONNECT_REASON_SHUTDOWN = 2;
// Returned by getConnectionState()
IPConnection.CONNECTION_STATE_DISCONNECTED = 0;
IPConnection.CONNECTION_STATE_CONNECTED = 1;
IPConnection.CONNECTION_STATE_PENDING = 2; //auto-reconnect in process
IPConnection.DISCONNECT_PROBE_INTERVAL = 5000;
IPConnection.RETRY_CONNECTION_INTERVAL = 2000;
// Error codes
IPConnection.ERROR_ALREADY_CONNECTED = 11;
IPConnection.ERROR_NOT_CONNECTED = 12;
IPConnection.ERROR_CONNECT_FAILED = 13;
IPConnection.ERROR_INVALID_FUNCTION_ID = 21;
IPConnection.ERROR_TIMEOUT = 31;
IPConnection.ERROR_INVALID_PARAMETER = 41;
IPConnection.ERROR_FUNCTION_NOT_SUPPORTED = 42;
IPConnection.ERROR_UNKNOWN_ERROR = 43;

IPConnection.TASK_KIND_CONNECT = 0;
IPConnection.TASK_KIND_DISCONNECT = 1;
IPConnection.TASK_KIND_AUTO_RECONNECT = 2;

// Socket implementation for Node.js and Websocket.
// The API resembles the Node.js API.
function TFSocket(PORT, HOST, ipcon) {
    this.port = PORT;
    this.host = HOST;
    this.socket = null;

    if (process.browser) {
        var webSocketURL = "ws://" + this.host + ":" + this.port + "/";
        if (typeof MozWebSocket != "undefined") {
            this.socket = new MozWebSocket(webSocketURL, "tfp");
        }
        else {
            this.socket = new WebSocket(webSocketURL, "tfp");
        }
        this.socket.binaryType = 'arraybuffer';
    }
    else {
        var net = require('net');
        this.socket = new net.Socket();
    }
    this.on = function (str, func) {
        if (process.browser) {
            switch (str) {
            case "connect":
                this.socket.onopen = func;
                break;
            case "data":
                // Websockets in browsers return a MessageEvent. We just
                // expose the data from the event as a Buffer as in Node.js.
                this.socket.onmessage = function (messageEvent) {
                    var data = new Buffer(new Uint8Array(messageEvent.data));
                    func(data);
                };
                break;
            case "error":
                // There is no easy way to get errno for error in browser websockets.
                // We assume error['errno'] === 'ECONNRESET'
                this.socket.onerror = function () {
                    var error = {"errno": "ECONNRESET"};
                    func(error);
                };
                break;
            case "close":
                this.socket.onclose = func;
                break;
            }
        }
        else {
            this.socket.on(str, func);
        }
    };
    this.connect = function () {
        if (process.browser) {
            // In the browser we already connected by creating a WebSocket object
        }
        else {
            this.socket.connect(this.port, this.host, null);
        }
    };
    this.setNoDelay = function (value) {
        if (process.browser) {
            // Currently no API available in browsers
            // But Nagle algorithm seems te be turned off in most browsers by default anyway
        }
        else {
            this.socket.setNoDelay(value);
        }
    };
    this.write = function (data) {
        if (process.browser) {
            // Some browers can't send a nodejs Buffer through a websocket,
            // we copy it into an ArrayBuffer
            var arrayBuffer = new Uint8Array(data).buffer;
            this.socket.send(arrayBuffer);
            ipcon.resetDisconnectProbe();
        }
        else {
            this.socket.write(data, ipcon.resetDisconnectProbe());
        }
    };
    this.end = function () {
        if (process.browser) {
            this.socket.close();
        }
        else {
            this.socket.end();
        }
    };
    this.destroy = function () {
        if (process.browser) {
            // There is no end/destroy in browser socket, so we close in end
            // and do nothing in destroy
        }
        else {
            this.socket.destroy();
        }
    };
}

// the IPConnection class and constructor
function IPConnection() {
    // Creates an IP Connection object that can be used to enumerate the available
    // devices. It is also required for the constructor of Bricks and Bricklets.
    this.host = undefined;
    this.port = undefined;
    this.timeout = 2500;
    this.autoReconnect = true;
    this.sequenceNumber = 0;
    this.authKey = undefined;
    this.devices = {};
    this.registeredCallbacks = {};
    this.socket = undefined;
    this.disconnectProbeIID = undefined;
    this.taskQueue = [];
    this.isConnected = false;
    this.connectErrorCallback = undefined;
    this.disconnectErrorCallback = undefined;
    this.mergeBuffer = new Buffer(0);
   
    this.disconnectProbe = function () {
        if (this.socket !== undefined) {
            this.socket.write(this.createPacketHeader(undefined, 8, IPConnection.FUNCTION_DISCONNECT_PROBE), this.resetDisconnectProbe());
        }
    };
    this.pushTask = function (handler, kind) {
        this.taskQueue.push({"handler": handler, "kind": kind});

        if (this.taskQueue.length === 1) {
            this.executeTask();
        }
    };
    this.executeTask = function () {
        var task = this.taskQueue[0];

        if (task !== undefined) {
            task.handler();
        }
    };
    this.popTask = function () {
        this.taskQueue.splice(0, 1);
        this.executeTask();
    };
    this.removeNextTask = function () {
        this.taskQueue.splice(1, 1);
    };
    this.getCurrentTaskKind = function () {
        var task = this.taskQueue[0];

        if (task !== undefined) {
            return task.kind;
        }

        return undefined;
    };
    this.getNextTaskKind = function () {
        var task = this.taskQueue[1];

        if (task !== undefined) {
            return task.kind;
        }

        return undefined;
    };

    this.disconnect = function (disconnectErrorCallback) {
        this.pushTask(this.disconnectInternal.bind(this, disconnectErrorCallback), IPConnection.TASK_KIND_DISCONNECT);
    };
    this.disconnectInternal = function (disconnectErrorCallback) {
        var autoReconnectAborted = false;

        if (this.getNextTaskKind() === IPConnection.TASK_KIND_AUTO_RECONNECT) {
            // Remove auto-reconnect task, to break recursion
            this.removeNextTask();
            autoReconnectAborted = true;
        }

        if (!this.isConnected) {
            if (!autoReconnectAborted && disconnectErrorCallback !== undefined) {
                // Not using `this.` for the error callback function because
                // we want to call what user provided not the saved one
                disconnectErrorCallback(IPConnection.ERROR_NOT_CONNECTED);
            }
            this.popTask();
            return;
        }

        // Saving the user provided error callback function for future use
        this.disconnectErrorCallback = disconnectErrorCallback;
        this.socket.end();
        this.socket.destroy();
        return;
    };
    this.connect = function (host, port, connectErrorCallback) {
        this.pushTask(this.connectInternal.bind(this, host, port, connectErrorCallback), IPConnection.TASK_KIND_CONNECT);
    };
    this.connectInternal = function (host, port, connectErrorCallback) {
        if (this.isConnected) {
            if (connectErrorCallback !== undefined) {
                // Not using `this.` for the error callback function because
                // we want to call what user provided not the saved one
                connectErrorCallback(IPConnection.ERROR_ALREADY_CONNECTED);
            }

            this.popTask();
            return;
        }

        // Saving the user provided error callback function for future use
        this.connectErrorCallback = connectErrorCallback;
        clearInterval(this.disconnectProbeIID);
        this.host = host;
        this.port = port;
        this.socket = new TFSocket(this.port, this.host, this);
        this.socket.setNoDelay(true);
        this.socket.on('connect', this.handleConnect.bind(this));
        this.socket.on('data', this.handleIncomingData.bind(this));
        this.socket.on('error', this.handleConnectionError.bind(this));
        this.socket.on('close', this.handleConnectionClose.bind(this));
        this.socket.connect();
    };
    this.handleConnect = function () {
        var connectReason = IPConnection.CONNECT_REASON_REQUEST;

        if (this.getCurrentTaskKind() === IPConnection.TASK_KIND_AUTO_RECONNECT) {
            connectReason = IPConnection.CONNECT_REASON_AUTO_RECONNECT;
        }

        clearInterval(this.disconnectProbeIID);
        this.isConnected = true;

        // Check and call functions if registered for callback connected
        if (this.registeredCallbacks[IPConnection.CALLBACK_CONNECTED] !== undefined) {
            this.registeredCallbacks[IPConnection.CALLBACK_CONNECTED](connectReason);
        }

        this.disconnectProbeIID = setInterval(this.disconnectProbe.bind(this),
                                                   IPConnection.DISCONNECT_PROBE_INTERVAL);

        this.popTask();
    };
    this.handleIncomingData = function (data) {
        this.resetDisconnectProbe();
        if (data.length === 0) {
            return;
        }
        this.mergeBuffer = bufferConcat([this.mergeBuffer, data]);

        if (this.mergeBuffer.length < 8) {
            return;
        }
        if (this.mergeBuffer.length < this.mergeBuffer.readUInt8(4)) {
            return;
        }
        while (this.mergeBuffer.length >= 8) {
            var newPacket = new Buffer(this.mergeBuffer.readUInt8(4));
            this.mergeBuffer.copy(newPacket, 0, 0, this.mergeBuffer.readUInt8(4));
            this.handlePacket(newPacket);
            this.mergeBuffer = this.mergeBuffer.slice(this.mergeBuffer.readUInt8(4));
        }
    };
    this.handleConnectionError = function (error) {
        if (error.errno === 'ECONNRESET') {
            // Check and call functions if registered for callback disconnected
            if (this.registeredCallbacks[IPConnection.CALLBACK_DISCONNECTED] !== undefined) {
                this.registeredCallbacks[IPConnection.CALLBACK_DISCONNECTED](IPConnection.DISCONNECT_REASON_SHUTDOWN);
            }
        }
    };
    this.handleAutoReconnectError = function (error) {
        if (!this.isConnected && this.autoReconnect && error !== IPConnection.ERROR_ALREADY_CONNECTED) {
            this.pushTask(this.connectInternal.bind(this, this.host, this.port, this.handleAutoReconnectError), IPConnection.TASK_KIND_AUTO_RECONNECT);
        }
    };
    this.handleConnectionClose = function () {
        if (this.getCurrentTaskKind() === IPConnection.TASK_KIND_DISCONNECT) {
            // This disconnect was requested
            var uid;
            for (uid in this.devices) {
                for (var i=0;i<this.devices[uid].expectedResponses.length;i++) {
                    clearTimeout(this.devices[uid].expectedResponses[i].timeout);

                    if (this.devices[uid].expectedResponses[i].errorCB !== undefined) {
                        this.devices[uid].expectedResponses[i].errorCB(IPConnection.ERROR_TIMEOUT);
                    }
                }

                this.devices[uid].expectedResponses = [];
            }

            this.isConnected = false;
            clearInterval(this.disconnectProbeIID);

            if (this.socket !== undefined) {
                this.socket.end();
                this.socket.destroy();
                this.socket = undefined;
            }

            // Check and call functions if registered for callback disconnected
            if (this.registeredCallbacks[IPConnection.CALLBACK_DISCONNECTED] !== undefined) {
                this.registeredCallbacks[IPConnection.CALLBACK_DISCONNECTED](IPConnection.DISCONNECT_REASON_REQUEST);
            }

            this.popTask();
            return;
        }
        // Was connected, disconnected because of error and auto reconnect is enabled
        if (this.isConnected) {
            this.isConnected = false;
            clearInterval(this.disconnectProbeIID);

            if (this.socket !== undefined) {
                this.socket.end();
                this.socket.destroy();
                this.socket = undefined;
            }

            // Check and call functions if registered for callback disconnected
            if (this.registeredCallbacks[IPConnection.CALLBACK_DISCONNECTED] !== undefined) {
                this.registeredCallbacks[IPConnection.CALLBACK_DISCONNECTED](IPConnection.DISCONNECT_REASON_ERROR);
            }

            if  (this.autoReconnect) {
                this.pushTask(this.connectInternal.bind(this, this.host, this.port, this.handleAutoReconnectError), IPConnection.TASK_KIND_AUTO_RECONNECT);
            }

            return;
        }

        // Were not connected. failed at new connection attempt
        if (this.getCurrentTaskKind() === IPConnection.TASK_KIND_CONNECT || this.getCurrentTaskKind() === IPConnection.TASK_KIND_AUTO_RECONNECT) {
            if (this.connectErrorCallback !== undefined) {
                this.connectErrorCallback(IPConnection.ERROR_CONNECT_FAILED);
            }
            this.popTask();
            return;
        }
    };
    this.resetDisconnectProbe = function() {
        if(this.disconnectProbeIID === undefined) {
            return;
        }
        clearInterval(this.disconnectProbeIID);
        this.disconnectProbeIID = setInterval(this.disconnectProbe.bind(this),
                                                   IPConnection.DISCONNECT_PROBE_INTERVAL);
    };
    this.getUIDFromPacket = function (packetUID){

        return packetUID.readUInt32LE(0);
    };

    this.getLengthFromPacket = function (packetLen) {
        return packetLen.readUInt8(4);
    };

    this.getFunctionIDFromPacket = function (packetFID) {
        return packetFID.readUInt8(5);
    };

    this.getSequenceNumberFromPacket = function (packetSeq) {
        return (packetSeq.readUInt8(6) >>> 4) & 0x0F;
    };

    this.getRFromPacket = function (packetR) {
        return (packetR.readUInt8(6) >>> 3) & 0x01;
    };

    this.getAFromPacket = function (packetA) {
        return (packetA.readUInt8(6) >>> 2) & 0x01;
    };

    this.getOOFromPacket = function (packetOO) {
        return packetOO.readUInt8(6) & 0x03;
    };

    this.getEFromPacket = function (packetE) {
        // Getting Error bits(E, 2bits)
        return (packetE.readUInt8(7) >>> 6) & 0x03;
    };

    this.getFutureUseFromPacket = function (packetFutureUse) {
        // Getting Future Use(6bits)
        return (packetFutureUse.readUInt8(7) >>> 6) & 0x63;
    };

    this.getPayloadFromPacket = function (packetPayload) {
        var payloadReturn = new Buffer(packetPayload.length - 8);
        packetPayload.copy(payloadReturn, 0, 8, packetPayload.length);
        return new Buffer(payloadReturn);
    };

    function pack(data, format) {
        var formatArray = format.split(' ');
        if (formatArray.length <= 0) {
            return new Buffer(0);
        }
        var packedBuffer = new Buffer(0);
        for (var i=0; i<formatArray.length; i++){
            if (formatArray[i].split('').length === 1) {
                if (formatArray[i] === 's') {
                    var tmpPackedBuffer = new Buffer(1);
                    tmpPackedBuffer.fill(0x00);
                    tmpPackedBuffer.writeUInt8(data[i].charCodeAt(0), 0);
                    packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                    continue;
                }
                switch (formatArray[i]) {
                    case 'c':
                        var tmpPackedBuffer = new Buffer(1);
                        tmpPackedBuffer.fill(0x00);
                        tmpPackedBuffer.writeUInt8(data[i].charCodeAt(0), 0);
                        packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        continue;
                    case 'b':
                        var tmpPackedBuffer = new Buffer(1);
                        tmpPackedBuffer.fill(0x00);
                        tmpPackedBuffer.writeInt8(data[i], 0);
                        packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        continue;
                    case 'B':
                        var tmpPackedBuffer = new Buffer(1);
                        tmpPackedBuffer.fill(0x00);
                        tmpPackedBuffer.writeUInt8(data[i], 0);
                        packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        continue;
                    case 'h':
                        var tmpPackedBuffer = new Buffer(2);
                        tmpPackedBuffer.fill(0x00);
                        tmpPackedBuffer.writeInt16LE(data[i], 0);
                        packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        continue;
                    case 'H':
                        var tmpPackedBuffer = new Buffer(2);
                        tmpPackedBuffer.fill(0x00);
                        tmpPackedBuffer.writeUInt16LE(data[i], 0);
                        packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        continue;
                    case 'i':
                        var tmpPackedBuffer = new Buffer(4);
                        tmpPackedBuffer.fill(0x00);
                        tmpPackedBuffer.writeInt32LE(data[i], 0);
                        packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        continue;
                    case 'I':
                        var tmpPackedBuffer = new Buffer(4);
                        tmpPackedBuffer.fill(0x00);
                        tmpPackedBuffer.writeUInt32LE(data[i], 0);
                        packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        continue;
                    case 'q':
                        var tmpPackedBuffer = new Buffer(8);
                        tmpPackedBuffer.fill(0x00);
                        tmpPackedBuffer.writeDoubleLE(data[i], 0);
                        packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        continue;
                    case 'Q':
                        var tmpPackedBuffer = new Buffer(8);
                        tmpPackedBuffer.fill(0x00);
                        tmpPackedBuffer.writeDoubleLE(data[i], 0);
                        packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        continue;
                    case 'f':
                        var tmpPackedBuffer = new Buffer(4);
                        tmpPackedBuffer.fill(0x00);
                        tmpPackedBuffer.writeFloatLE(data[i], 0);
                        packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        continue;
                    case 'd':
                        var tmpPackedBuffer = new Buffer(8);
                        tmpPackedBuffer.fill(0x00);
                        tmpPackedBuffer.writeDoubleLE(data[i], 0);
                        packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        continue;
                    case '?':
                        var tmpPackedBuffer = new Buffer(1);
                        tmpPackedBuffer.fill(0x00);
                        if(data[i] === 0 || data[i] === false || data[i] === undefined ||
                           data[i] === null || data[i] === NaN || data[i] === -0) {
                            tmpPackedBuffer.writeUInt8(0x00, 0);
                        }
                        else {
                            tmpPackedBuffer.writeUInt8(0x01, 0);
                        }
                        packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        continue;
                }
            }
            if(formatArray[i].split('').length > 1) {
                var singleFormatArray = formatArray[i].split('');
                for(var j=0; j<parseInt(formatArray[i].match(/\d/g).join('')); j++) {
                    if(singleFormatArray[0] === 's') {
                        if(!isNaN(data[i].charCodeAt(j))) {
                            var tmpPackedBuffer = new Buffer(1);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeUInt8(data[i].charCodeAt(j), 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        }
                        else {
                            var tmpPackedBuffer = new Buffer(1);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeUInt8(0x00, 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                        }
                        continue;
                    }
                    switch(singleFormatArray[0]) {
                        case 'c':
                            var tmpPackedBuffer = new Buffer(1);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeUInt8(data[i][j].charCodeAt(0), 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                            continue;
                        case 'b':
                            var tmpPackedBuffer = new Buffer(1);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeInt8(data[i][j], 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                            continue;
                        case 'B':
                            var tmpPackedBuffer = new Buffer(1);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeUInt8(data[i][j], 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                            continue;
                        case 'h':
                            var tmpPackedBuffer = new Buffer(2);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeInt16LE(data[i][j], 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                            continue;
                        case 'H':
                            var tmpPackedBuffer = new Buffer(2);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeUInt16LE(data[i][j], 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                            continue;
                        case 'i':
                            var tmpPackedBuffer = new Buffer(4);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeInt32LE(data[i][j], 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                            continue;
                        case 'I':
                            var tmpPackedBuffer = new Buffer(4);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeUInt32LE(data[i][j], 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                            continue;
                        case 'q':
                            var tmpPackedBuffer = new Buffer(8);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeDoubleLE(data[i][j], 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                            continue;
                        case 'Q':
                            var tmpPackedBuffer = new Buffer(8);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeDoubleLE(data[i][j], 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                            continue;
                        case 'f':
                            var tmpPackedBuffer = new Buffer(4);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeFloatLE(data[i][j], 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                            continue;
                        case 'd':
                            var tmpPackedBuffer = new Buffer(8);
                            tmpPackedBuffer.fill(0x00);
                            tmpPackedBuffer.writeDoubleLE(data[i][j], 0);
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                            continue;
                        case '?':
                            var tmpPackedBuffer = new Buffer(1);
                            tmpPackedBuffer.fill(0x00);
                            if(data[i][j] === 0 || data[i][j] === false || data[i][j] === undefined ||
                               data[i][j] === null || data[i][j] === NaN || data[i][j] === -0) {
                                tmpPackedBuffer.writeUInt8(0x00, 0);
                            }
                            else {
                                tmpPackedBuffer.writeUInt8(0x01, 0);
                            }
                            packedBuffer = bufferConcat([packedBuffer,tmpPackedBuffer]);
                            continue;
                    }
                }
            }
        }
        return packedBuffer;
    }
    function unpack(unpackPayload, format) {
        var formatArray = format.split(' ');
        var returnArguments = [];
        var returnSubArray = [];
        var constructedString = '';
        var payloadReadOffset = 0;
        if (formatArray.length <= 0) {
            return returnArguments;
        }
        for (var i=0; i<formatArray.length; i++) {
            if (formatArray[i].split('').length === 1) {
                if (formatArray[i] === 's') {
                    constructedString += String.fromCharCode(unpackPayload.readUInt8(payloadReadOffset));
                    payloadReadOffset++;
                    returnArguments.push(constructedString);
                    constructedString = '';
                    continue;
                }
                switch(formatArray[i]) {
                    case 'c':
                        returnArguments.push(String.fromCharCode(unpackPayload.readUInt8(payloadReadOffset)));
                        payloadReadOffset++;
                        continue;
                    case 'b':
                        returnArguments.push(unpackPayload.readInt8(payloadReadOffset));
                        payloadReadOffset++;
                        continue;
                    case 'B':
                        returnArguments.push(unpackPayload.readUInt8(payloadReadOffset));
                        payloadReadOffset++;
                        continue;
                    case 'h':
                        returnArguments.push(unpackPayload.readInt16LE(payloadReadOffset));
                        payloadReadOffset = payloadReadOffset + 2;
                        continue;
                    case 'H':
                        returnArguments.push(unpackPayload.readUInt16LE(payloadReadOffset));
                        payloadReadOffset = payloadReadOffset + 2;
                        continue;
                    case 'i':
                        returnArguments.push(unpackPayload.readInt32LE(payloadReadOffset));
                        payloadReadOffset = payloadReadOffset + 4;
                        continue;
                    case 'I':
                        returnArguments.push(unpackPayload.readUInt32LE(payloadReadOffset));
                        payloadReadOffset = payloadReadOffset + 4;
                        continue;
                    case 'q':
                        returnArguments.push(unpackPayload.readDoubleLE(payloadReadOffset));
                        payloadReadOffset = payloadReadOffset + 8;
                        continue;
                    case 'Q':
                        returnArguments.push(unpackPayload.readDoubleLE(payloadReadOffset));
                        payloadReadOffset = payloadReadOffset + 8;
                        continue;
                    case 'f':
                        returnArguments.push(unpackPayload.readFloatLE(payloadReadOffset));
                        payloadReadOffset = payloadReadOffset + 4;
                        continue;
                    case 'd':
                        returnArguments.push(unpackPayload.readDoubleLE(payloadReadOffset));
                        payloadReadOffset = payloadReadOffset + 8;
                        continue;
                    case '?':
                        if (unpackPayload.readUInt8(payloadReadOffset) === 0x01) {
                            returnArguments.push(true);
                        }
                        if (unpackPayload.readUInt8(payloadReadOffset) === 0x00) {
                            returnArguments.push(false);
                        }
                        payloadReadOffset++;
                        continue;
                }
            }
            if (formatArray[i].split('').length > 1) {
                var singleFormatArray = formatArray[i].split('');
                if (singleFormatArray[0] === 's') {
                    constructedString = '';
					skip = false; 
                    for(var j=0; j<parseInt(formatArray[i].match(/\d/g).join('')); j++) {
						c = String.fromCharCode(unpackPayload.readUInt8(payloadReadOffset));
						if(c === '\0' || skip) {
							skip = true;
						} else {
	                        constructedString += c;                        
						}
						payloadReadOffset++;
                    }
					skip = false;
                    returnArguments.push(constructedString);
                    constructedString = '';
                    continue;
                }
                returnSubArray = [];
                for (var k=0; k<parseInt(formatArray[i].match(/\d/g).join('')); k++) {
                    switch(singleFormatArray[0]) {
                        case 'c':
                            returnSubArray.push(String.fromCharCode(unpackPayload.readUInt8(payloadReadOffset)));
                            payloadReadOffset++;
                            continue;
                        case 'b':
                            returnSubArray.push(unpackPayload.readInt8(payloadReadOffset));
                            payloadReadOffset++;
                            continue;
                        case 'B':
                            returnSubArray.push(unpackPayload.readUInt8(payloadReadOffset));
                            payloadReadOffset++;
                            continue;
                        case 'h':
                            returnSubArray.push(unpackPayload.readInt16LE(payloadReadOffset));
                            payloadReadOffset++;
                            continue;
                        case 'H':
                            returnSubArray.push(unpackPayload.readIntU16LE(payloadReadOffset));
                            payloadReadOffset++;
                            continue;
                        case 'i':
                            returnSubArray.push(unpackPayload.readInt32LE(payloadReadOffset));
                            payloadReadOffset++;
                            continue;
                        case 'I':
                            returnSubArray.push(unpackPayload.readIntU32LE(payloadReadOffset));
                            payloadReadOffset++;
                            continue;
                        case 'q':
                            returnSubArray.push(unpackPayload.readDoubleLE(payloadReadOffset));
                            payloadReadOffset++;
                            continue;
                        case 'Q':
                            returnSubArray.push(unpackPayload.readDoubleLE(payloadReadOffset));
                            payloadReadOffset++;
                            continue;
                        case 'f':
                            returnSubArray.push(unpackPayload.readFloatLE(payloadReadOffset));
                            payloadReadOffset++;
                            continue;
                        case 'd':
                            returnSubArray.push(unpackPayload.readDoubleLE(payloadReadOffset));
                            payloadReadOffset++;
                            continue;
                        case '?':
                            if (unpackPayload.readUInt8(payloadReadOffset) === 0x01) {
                                returnSubArray.push(true);
                            }
                            if (unpackPayload.readUInt8(payloadReadOffset) === 0x00) {
                                returnSubArray.push(false);
                            }
                            payloadReadOffset++;
                            continue;
                    }
                }
                if (returnSubArray.length !== 0) {
                    returnArguments.push(returnSubArray);
                    returnSubArray = [];
                    continue;
                }
            }
        }
        return returnArguments;
     }

    this.sendRequest = function (sendRequestDevice, sendRequestFID, sendRequestData,
                                 sendRequestPackFormat, sendRequestUnpackFormat,
                                 sendRequestReturnCB, sendRequestErrorCB) {
        if (this.getConnectionState() !== IPConnection.CONNECTION_STATE_CONNECTED) {
            if (sendRequestErrorCB !== undefined) {
                sendRequestErrorCB(IPConnection.ERROR_NOT_CONNECTED);
            }
            return;
        }
        // Packet creation
        var sendRequestPayload = pack(sendRequestData, sendRequestPackFormat);
        var sendRequestHeader = this.createPacketHeader(sendRequestDevice,
                                                        8+sendRequestPayload.length,
                                                        sendRequestFID, sendRequestErrorCB);
        if (sendRequestHeader === undefined) {
            return;
        }
        var sendRequestPacket = bufferConcat([sendRequestHeader, sendRequestPayload]);
        var sendRequestSEQ = this.getSequenceNumberFromPacket(sendRequestHeader);
        // Sending the created packet
        if (sendRequestDevice.getResponseExpected(sendRequestFID)) {
            // Setting the requesting current device's current request
            var sendRequestDeviceOID = sendRequestDevice.getDeviceOID();
            sendRequestDevice.expectedResponses.push({DeviceOID:sendRequestDeviceOID,
                FID:sendRequestFID,
                SEQ:sendRequestSEQ,
                unpackFormat:sendRequestUnpackFormat,
                timeout:setTimeout(this.sendRequestTimeout.bind
                        (this, sendRequestDevice, sendRequestDeviceOID, sendRequestErrorCB), this.timeout),
                returnCB:sendRequestReturnCB,
                errorCB:sendRequestErrorCB});
        }
        this.socket.write(sendRequestPacket, this.resetDisconnectProbe());
    };
    this.sendRequestTimeout = function (timeoutDevice, timeoutDeviceOID, timeoutErrorCB) {
        for (var i=0; i<timeoutDevice.expectedResponses.length; ++i) {
            if (timeoutDevice.expectedResponses[i].DeviceOID === timeoutDeviceOID) {
                clearTimeout(timeoutDevice.expectedResponses[i].timeout);
                timeoutDevice.expectedResponses.splice(i, 1);
                if (timeoutErrorCB !== undefined){
                    timeoutErrorCB(IPConnection.ERROR_TIMEOUT);
                }
                return;
            }
        }
    };
    this.handleResponse = function (packetResponse) {
        var handleResponseDevice = this.devices[this.getUIDFromPacket(packetResponse)];
        var handleResponseFID = this.getFunctionIDFromPacket(packetResponse);
        var handleResponseSEQ = this.getSequenceNumberFromPacket(packetResponse);
        for (var i=0; i < handleResponseDevice.expectedResponses.length; i++) {
            if (this.devices[this.getUIDFromPacket(packetResponse)].expectedResponses[i].returnCB === undefined) {
                clearTimeout(handleResponseDevice.expectedResponses[i].timeout);
                handleResponseDevice.expectedResponses.splice(i, 1);
                return;
            }
            if (this.devices[this.getUIDFromPacket(packetResponse)].expectedResponses[i].unpackFormat === '') {
                clearTimeout(handleResponseDevice.expectedResponses[i].timeout);
                if (handleResponseDevice.expectedResponses[i].returnCB !== undefined) {
                    eval('handleResponseDevice.expectedResponses[i].returnCB();');
                }
                handleResponseDevice.expectedResponses.splice(i, 1);
                return;
            }
            if (handleResponseDevice.expectedResponses[i].FID === handleResponseFID &&
                    handleResponseDevice.expectedResponses[i].SEQ === handleResponseSEQ) {
            	if (this.getEFromPacket(packetResponse) === 1) {
                    clearTimeout(handleResponseDevice.expectedResponses[i].timeout);
            		if (this.devices[this.getUIDFromPacket(packetResponse)].expectedResponses[i].errorCB !== undefined) {
            			eval('handleResponseDevice.expectedResponses[i].errorCB(IPConnection.ERROR_INVALID_PARAMETER);');
            		}
            		handleResponseDevice.expectedResponses.splice(i, 1);
            		return;
            	}
            	if (this.getEFromPacket(packetResponse) === 2) {
                    clearTimeout(handleResponseDevice.expectedResponses[i].timeout);
            		if (this.devices[this.getUIDFromPacket(packetResponse)].expectedResponses[i].errorCB !== undefined) {
            			eval('handleResponseDevice.expectedResponses[i].errorCB(IPConnection.ERROR_FUNCTION_NOT_SUPPORTED);');
            		}
            		handleResponseDevice.expectedResponses.splice(i, 1);
            		return;
            	}
            	if (this.getEFromPacket(packetResponse) !== 0) {
                    clearTimeout(handleResponseDevice.expectedResponses[i].timeout);
            		if (this.devices[this.getUIDFromPacket(packetResponse)].expectedResponses[i].errorCB !== undefined) {
            			eval('handleResponseDevice.expectedResponses[i].errorCB(IPConnection.ERROR_UNKNOWN_ERROR);');
            		}
            		handleResponseDevice.expectedResponses.splice(i, 1);
            		return;
            	}
                clearTimeout(handleResponseDevice.expectedResponses[i].timeout);
                if (handleResponseDevice.expectedResponses[i].returnCB !== undefined) {
                	var retArgs = unpack(this.getPayloadFromPacket(packetResponse),
                			handleResponseDevice.expectedResponses[i].unpackFormat);
                	var evalStr = 'handleResponseDevice.expectedResponses[i].returnCB(';
                	for (var j=0; j<retArgs.length;j++) {
                		eval('var retSingleArg'+j+'=retArgs['+j+'];');
                		if (j != retArgs.length-1) {
                			evalStr += 'retSingleArg'+j+',';
                		} else {
                			evalStr += 'retSingleArg'+j+');';
                		}
                	}
                	eval(evalStr);
                }
                handleResponseDevice.expectedResponses.splice(i, 1);
                return;
            }
        }
    };
    this.handleCallback = function (packetCallback) {
        if (this.getFunctionIDFromPacket(packetCallback) === IPConnection.CALLBACK_ENUMERATE) {
            if (this.registeredCallbacks[IPConnection.CALLBACK_ENUMERATE] !== undefined) {
                var args = unpack(this.getPayloadFromPacket(packetCallback), 's8 s8 c B3 B3 H B');
                var evalCBString = 'this.registeredCallbacks[IPConnection.CALLBACK_ENUMERATE](';
                for (var i=0; i<args.length;i++) {
                    eval('var cbArg'+i+'=args['+i+'];');
                    if (i != args.length-1) {
                        evalCBString += 'cbArg'+i+',';
                    } else {
                        evalCBString += 'cbArg'+i+');';
                    }
                }
                eval(evalCBString);
                return;
            }
        }
        if (this.devices[this.getUIDFromPacket(packetCallback)] === undefined) {
            return;
        }
        if (this.devices[this.getUIDFromPacket(packetCallback)].
            registeredCallbacks[this.getFunctionIDFromPacket(packetCallback)] === undefined ||
            this.devices[this.getUIDFromPacket(packetCallback)].
            callbackFormats[this.getFunctionIDFromPacket(packetCallback)] === undefined) {
            return;
        }
        var cbFunction = this.devices[this.getUIDFromPacket(packetCallback)].
                         registeredCallbacks[this.getFunctionIDFromPacket(packetCallback)];
        var cbUnpackString = this.devices[this.getUIDFromPacket(packetCallback)].
                             callbackFormats[this.getFunctionIDFromPacket(packetCallback)];
        if (cbFunction == undefined) {
            return;
        }
        if (cbUnpackString == undefined) {
            return;
        }
        if (cbUnpackString === '') {
            eval('this.devices[this.getUIDFromPacket(packetCallback)].\
                    registeredCallbacks[this.getFunctionIDFromPacket(packetCallback)]();');
            return;
        }
        var args = unpack(this.getPayloadFromPacket(packetCallback), cbUnpackString);
        var evalCBString = 'this.devices[this.getUIDFromPacket(packetCallback)].\
                            registeredCallbacks[this.getFunctionIDFromPacket(packetCallback)](';
        if (args.length <= 0) {
            eval(evalCBString+');');
            return;
        }
        for (var i=0; i<args.length;i++) {
            eval('var cbArg'+i+'=args['+i+'];');
            if (i != args.length-1) {
                evalCBString += 'cbArg'+i+',';
            } else {
                evalCBString += 'cbArg'+i+');';
            }
        }
        eval(evalCBString);
        return;
    };
    this.handlePacket = function (packet) {
        if (this.getSequenceNumberFromPacket(packet) === 0) {
            this.handleCallback(packet);
        }
        if (this.getSequenceNumberFromPacket(packet) > 0) {
            this.handleResponse(packet);
        }
    };
    this.getConnectionState = function () {
        if (this.isConnected) {
            return IPConnection.CONNECTION_STATE_CONNECTED;
        }
        if (this.getCurrentTaskKind() === IPConnection.TASK_KIND_AUTO_RECONNECT) {
            return IPConnection.CONNECTION_STATE_PENDING;
        }
        return IPConnection.CONNECTION_STATE_DISCONNECTED;
    };
    this.setAutoReconnect = function (autoReconnect) {
        this.autoReconnect = autoReconnect;
    };
    this.getAutoReconnect = function () {
        return this.autoReconnect;
    };
    this.setTimeout = function (timeout) {
        this.timeout = timeout;
    };
    this.getTimeout = function () {
        return this.timeout;
    };
    this.enumerate = function (errorCallback) {
        if (this.getConnectionState() !== IPConnection.CONNECTION_STATE_CONNECTED) {
            if (errorCallback !== undefined) {
                errorCallback(IPConnection.ERROR_NOT_CONNECTED);
            }
            return;
        }
        this.socket.write(this.createPacketHeader(undefined, 8, IPConnection.FUNCTION_ENUMERATE), this.resetDisconnectProbe());
    };
    this.on = function (FID, CBFunction) {
        this.registeredCallbacks[FID] = CBFunction;
    };
    this.getNextSequenceNumber = function () {
        if (this.sequenceNumber >= 15) {
            this.sequenceNumber = 0;
        }
        return ++this.sequenceNumber;
    };
    this.createPacketHeader = function (headerDevice, headerLength, headerFunctionID, headerErrorCB) {
        var UID = IPConnection.BROADCAST_UID;
        var len = headerLength;
        var FID = headerFunctionID;
        var seq = this.getNextSequenceNumber();
        var responseBits = 0;
        var authBits = 0;
        var EFutureUse = 0;
        var returnOnError = false;
        if (headerDevice !== undefined) {
            var responseExpected = headerDevice.getResponseExpected(headerFunctionID,
                function (errorCode) {
                    returnOnError = true;
                    if (headerErrorCB !== undefined) {
                        headerErrorCB(errorCode);
                    }
                }
            );
            if (returnOnError) {
                returnOnError = false;
                return;
            }
            UID = headerDevice.uid;
            if (responseExpected) {
                responseBits = 1;
            }
            if (headerDevice.authKey !== undefined) {
                authBits = 1;
            }
        } else if (this.authKey != undefined) {
            authBits = 1;
        }
        var seqResponseAuthOOBits = seq << 4;
        if (responseBits) {
            seqResponseAuthOOBits |= (responseBits << 3);
        }
        if (authBits) {
            seqResponseAuthOOBits |= (authBits << 2);
        }
        var returnHeader = new Buffer(8);
        returnHeader.writeUInt32LE(UID, 0);
        returnHeader.writeUInt8(len, 4);
        returnHeader.writeUInt8(FID, 5);
        returnHeader.writeUInt8(seqResponseAuthOOBits, 6);
        returnHeader.writeUInt8(EFutureUse , 7);
        return returnHeader;
    };
    function bufferConcat(arrayOfBuffers) {
        var newBufferSize = 0;
        var targetStart = 0;
        for (var i = 0; i<arrayOfBuffers.length; i++) {
            newBufferSize += arrayOfBuffers[i].length;
        }
        var returnBufferConcat = new Buffer(newBufferSize);
        for (var j=0; j<arrayOfBuffers.length; j++) {
            arrayOfBuffers[j].copy(returnBufferConcat, targetStart);
            targetStart += arrayOfBuffers[j].length;
        }
        return returnBufferConcat;
    }
}

module.exports = IPConnection;
}).call(this,require("/usr/local/lib/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),require("buffer").Buffer)
},{"./Device":48,"/usr/local/lib/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":53,"buffer":54,"net":52}],50:[function(require,module,exports){
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

//Add semicolon to prevent IIFE from being passed as argument to concated code.
;
// Module systems magic dance
(function (definition) {
    // RequireJS
    if (typeof define == "function") {
        define(definition);
    // YUI3
    } else if (typeof YUI == "function") {
        YUI.add("es5-sham", definition);
    // CommonJS and <script>
    } else {
        definition();
    }
})(function () {


var call = Function.prototype.call;
var prototypeOfObject = Object.prototype;
var owns = call.bind(prototypeOfObject.hasOwnProperty);

// If JS engine supports accessors creating shortcuts.
var defineGetter;
var defineSetter;
var lookupGetter;
var lookupSetter;
var supportsAccessors;
if ((supportsAccessors = owns(prototypeOfObject, "__defineGetter__"))) {
    defineGetter = call.bind(prototypeOfObject.__defineGetter__);
    defineSetter = call.bind(prototypeOfObject.__defineSetter__);
    lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
    lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
}

// ES5 15.2.3.2
// http://es5.github.com/#x15.2.3.2
if (!Object.getPrototypeOf) {
    // https://github.com/es-shims/es5-shim/issues#issue/2
    // http://ejohn.org/blog/objectgetprototypeof/
    // recommended by fschaefer on github
    Object.getPrototypeOf = function getPrototypeOf(object) {
        return object.__proto__ || (
            object.constructor
                ? object.constructor.prototype
                : prototypeOfObject
        );
    };
}

//ES5 15.2.3.3
//http://es5.github.com/#x15.2.3.3

function doesGetOwnPropertyDescriptorWork(object) {
    try {
        object.sentinel = 0;
        return Object.getOwnPropertyDescriptor(
                object,
                "sentinel"
        ).value === 0;
    } catch (exception) {
        // returns falsy
    }
}

//check whether getOwnPropertyDescriptor works if it's given. Otherwise,
//shim partially.
if (Object.defineProperty) {
    var getOwnPropertyDescriptorWorksOnObject = 
        doesGetOwnPropertyDescriptorWork({});
    var getOwnPropertyDescriptorWorksOnDom = typeof document == "undefined" ||
    doesGetOwnPropertyDescriptorWork(document.createElement("div"));
    if (!getOwnPropertyDescriptorWorksOnDom || 
            !getOwnPropertyDescriptorWorksOnObject
    ) {
        var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
    }
}

if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
    var ERR_NON_OBJECT = "Object.getOwnPropertyDescriptor called on a non-object: ";

    Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
        if ((typeof object != "object" && typeof object != "function") || object === null) {
            throw new TypeError(ERR_NON_OBJECT + object);
        }

        // make a valiant attempt to use the real getOwnPropertyDescriptor
        // for I8's DOM elements.
        if (getOwnPropertyDescriptorFallback) {
            try {
                return getOwnPropertyDescriptorFallback.call(Object, object, property);
            } catch (exception) {
                // try the shim if the real one doesn't work
            }
        }

        // If object does not owns property return undefined immediately.
        if (!owns(object, property)) {
            return;
        }

        // If object has a property then it's for sure both `enumerable` and
        // `configurable`.
        var descriptor =  { enumerable: true, configurable: true };

        // If JS engine supports accessor properties then property may be a
        // getter or setter.
        if (supportsAccessors) {
            // Unfortunately `__lookupGetter__` will return a getter even
            // if object has own non getter property along with a same named
            // inherited getter. To avoid misbehavior we temporary remove
            // `__proto__` so that `__lookupGetter__` will return getter only
            // if it's owned by an object.
            var prototype = object.__proto__;
            object.__proto__ = prototypeOfObject;

            var getter = lookupGetter(object, property);
            var setter = lookupSetter(object, property);

            // Once we have getter and setter we can put values back.
            object.__proto__ = prototype;

            if (getter || setter) {
                if (getter) {
                    descriptor.get = getter;
                }
                if (setter) {
                    descriptor.set = setter;
                }
                // If it was accessor property we're done and return here
                // in order to avoid adding `value` to the descriptor.
                return descriptor;
            }
        }

        // If we got this far we know that object has an own property that is
        // not an accessor so we set it as a value and return descriptor.
        descriptor.value = object[property];
        descriptor.writable = true;
        return descriptor;
    };
}

// ES5 15.2.3.4
// http://es5.github.com/#x15.2.3.4
if (!Object.getOwnPropertyNames) {
    Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
        return Object.keys(object);
    };
}

// ES5 15.2.3.5
// http://es5.github.com/#x15.2.3.5
if (!Object.create) {

    // Contributed by Brandon Benvie, October, 2012
    var createEmpty;
    var supportsProto = Object.prototype.__proto__ === null;
    if (supportsProto || typeof document == 'undefined') {
        createEmpty = function () {
            return { "__proto__": null };
        };
    } else {
        // In old IE __proto__ can't be used to manually set `null`, nor does
        // any other method exist to make an object that inherits from nothing,
        // aside from Object.prototype itself. Instead, create a new global
        // object and *steal* its Object.prototype and strip it bare. This is
        // used as the prototype to create nullary objects.
        createEmpty = function () {
            var iframe = document.createElement('iframe');
            var parent = document.body || document.documentElement;
            iframe.style.display = 'none';
            parent.appendChild(iframe);
            iframe.src = 'javascript:';
            var empty = iframe.contentWindow.Object.prototype;
            parent.removeChild(iframe);
            iframe = null;
            delete empty.constructor;
            delete empty.hasOwnProperty;
            delete empty.propertyIsEnumerable;
            delete empty.isPrototypeOf;
            delete empty.toLocaleString;
            delete empty.toString;
            delete empty.valueOf;
            empty.__proto__ = null;

            function Empty() {}
            Empty.prototype = empty;
            // short-circuit future calls
            createEmpty = function () {
                return new Empty();
            };
            return new Empty();
        };
    }

    Object.create = function create(prototype, properties) {

        var object;
        function Type() {}  // An empty constructor.

        if (prototype === null) {
            object = createEmpty();
        } else {
            if (typeof prototype !== "object" && typeof prototype !== "function") {
                // In the native implementation `parent` can be `null`
                // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
                // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
                // like they are in modern browsers. Using `Object.create` on DOM elements
                // is...err...probably inappropriate, but the native version allows for it.
                throw new TypeError("Object prototype may only be an Object or null"); // same msg as Chrome
            }
            Type.prototype = prototype;
            object = new Type();
            // IE has no built-in implementation of `Object.getPrototypeOf`
            // neither `__proto__`, but this manually setting `__proto__` will
            // guarantee that `Object.getPrototypeOf` will work as expected with
            // objects created using `Object.create`
            object.__proto__ = prototype;
        }

        if (properties !== void 0) {
            Object.defineProperties(object, properties);
        }

        return object;
    };
}

// ES5 15.2.3.6
// http://es5.github.com/#x15.2.3.6

// Patch for WebKit and IE8 standard mode
// Designed by hax <hax.github.com>
// related issue: https://github.com/es-shims/es5-shim/issues#issue/5
// IE8 Reference:
//     http://msdn.microsoft.com/en-us/library/dd282900.aspx
//     http://msdn.microsoft.com/en-us/library/dd229916.aspx
// WebKit Bugs:
//     https://bugs.webkit.org/show_bug.cgi?id=36423

function doesDefinePropertyWork(object) {
    try {
        Object.defineProperty(object, "sentinel", {});
        return "sentinel" in object;
    } catch (exception) {
        // returns falsy
    }
}

// check whether defineProperty works if it's given. Otherwise,
// shim partially.
if (Object.defineProperty) {
    var definePropertyWorksOnObject = doesDefinePropertyWork({});
    var definePropertyWorksOnDom = typeof document == "undefined" ||
        doesDefinePropertyWork(document.createElement("div"));
    if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
        var definePropertyFallback = Object.defineProperty,
            definePropertiesFallback = Object.defineProperties;
    }
}

if (!Object.defineProperty || definePropertyFallback) {
    var ERR_NON_OBJECT_DESCRIPTOR = "Property description must be an object: ";
    var ERR_NON_OBJECT_TARGET = "Object.defineProperty called on non-object: "
    var ERR_ACCESSORS_NOT_SUPPORTED = "getters & setters can not be defined " +
                                      "on this javascript engine";

    Object.defineProperty = function defineProperty(object, property, descriptor) {
        if ((typeof object != "object" && typeof object != "function") || object === null) {
            throw new TypeError(ERR_NON_OBJECT_TARGET + object);
        }
        if ((typeof descriptor != "object" && typeof descriptor != "function") || descriptor === null) {
            throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
        }
        // make a valiant attempt to use the real defineProperty
        // for I8's DOM elements.
        if (definePropertyFallback) {
            try {
                return definePropertyFallback.call(Object, object, property, descriptor);
            } catch (exception) {
                // try the shim if the real one doesn't work
            }
        }

        // If it's a data property.
        if (owns(descriptor, "value")) {
            // fail silently if "writable", "enumerable", or "configurable"
            // are requested but not supported
            /*
            // alternate approach:
            if ( // can't implement these features; allow false but not true
                !(owns(descriptor, "writable") ? descriptor.writable : true) ||
                !(owns(descriptor, "enumerable") ? descriptor.enumerable : true) ||
                !(owns(descriptor, "configurable") ? descriptor.configurable : true)
            )
                throw new RangeError(
                    "This implementation of Object.defineProperty does not " +
                    "support configurable, enumerable, or writable."
                );
            */

            if (supportsAccessors && (lookupGetter(object, property) ||
                                      lookupSetter(object, property)))
            {
                // As accessors are supported only on engines implementing
                // `__proto__` we can safely override `__proto__` while defining
                // a property to make sure that we don't hit an inherited
                // accessor.
                var prototype = object.__proto__;
                object.__proto__ = prototypeOfObject;
                // Deleting a property anyway since getter / setter may be
                // defined on object itself.
                delete object[property];
                object[property] = descriptor.value;
                // Setting original `__proto__` back now.
                object.__proto__ = prototype;
            } else {
                object[property] = descriptor.value;
            }
        } else {
            if (!supportsAccessors) {
                throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
            }
            // If we got that far then getters and setters can be defined !!
            if (owns(descriptor, "get")) {
                defineGetter(object, property, descriptor.get);
            }
            if (owns(descriptor, "set")) {
                defineSetter(object, property, descriptor.set);
            }
        }
        return object;
    };
}

// ES5 15.2.3.7
// http://es5.github.com/#x15.2.3.7
if (!Object.defineProperties || definePropertiesFallback) {
    Object.defineProperties = function defineProperties(object, properties) {
        // make a valiant attempt to use the real defineProperties
        if (definePropertiesFallback) {
            try {
                return definePropertiesFallback.call(Object, object, properties);
            } catch (exception) {
                // try the shim if the real one doesn't work
            }
        }

        for (var property in properties) {
            if (owns(properties, property) && property != "__proto__") {
                Object.defineProperty(object, property, properties[property]);
            }
        }
        return object;
    };
}

// ES5 15.2.3.8
// http://es5.github.com/#x15.2.3.8
if (!Object.seal) {
    Object.seal = function seal(object) {
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
}

// ES5 15.2.3.9
// http://es5.github.com/#x15.2.3.9
if (!Object.freeze) {
    Object.freeze = function freeze(object) {
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
}

// detect a Rhino bug and patch it
try {
    Object.freeze(function () {});
} catch (exception) {
    Object.freeze = (function freeze(freezeObject) {
        return function freeze(object) {
            if (typeof object == "function") {
                return object;
            } else {
                return freezeObject(object);
            }
        };
    })(Object.freeze);
}

// ES5 15.2.3.10
// http://es5.github.com/#x15.2.3.10
if (!Object.preventExtensions) {
    Object.preventExtensions = function preventExtensions(object) {
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
}

// ES5 15.2.3.11
// http://es5.github.com/#x15.2.3.11
if (!Object.isSealed) {
    Object.isSealed = function isSealed(object) {
        return false;
    };
}

// ES5 15.2.3.12
// http://es5.github.com/#x15.2.3.12
if (!Object.isFrozen) {
    Object.isFrozen = function isFrozen(object) {
        return false;
    };
}

// ES5 15.2.3.13
// http://es5.github.com/#x15.2.3.13
if (!Object.isExtensible) {
    Object.isExtensible = function isExtensible(object) {
        // 1. If Type(O) is not Object throw a TypeError exception.
        if (Object(object) !== object) {
            throw new TypeError(); // TODO message
        }
        // 2. Return the Boolean value of the [[Extensible]] internal property of O.
        var name = '';
        while (owns(object, name)) {
            name += '?';
        }
        object[name] = true;
        var returnValue = owns(object, name);
        delete object[name];
        return returnValue;
    };
}

});

},{}],51:[function(require,module,exports){
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

//Add semicolon to prevent IIFE from being passed as argument to concated code.
;

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(this, function () {

/**
 * Brings an environment as close to ECMAScript 5 compliance
 * as is possible with the facilities of erstwhile engines.
 *
 * Annotated ES5: http://es5.github.com/ (specific links below)
 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
 */

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

function Empty() {}

if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (typeof target != "function") {
            throw new TypeError("Function.prototype.bind called on incompatible " + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = _Array_slice_.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    args.concat(_Array_slice_.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    args.concat(_Array_slice_.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = Math.max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            boundArgs.push("$" + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only 
        // way to set the length property of a function. 
        // In environments where Content Security Policies enabled (Chrome extensions, 
        // for ex.) all use of eval or Function costructor throws an exception. 
        // However in all of these environments Function.prototype.bind exists 
        // and so this code will never be executed.
        var bound = Function("binder", "return function(" + boundArgs.join(",") + "){return binder.apply(this,arguments)}")(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    };
}

// Shortcut to an often accessed properties, in order to avoid multiple
// dereference that costs universally.
// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
// us it in defining shortcuts.
var call = Function.prototype.call;
var prototypeOfArray = Array.prototype;
var prototypeOfObject = Object.prototype;
var _Array_slice_ = prototypeOfArray.slice;
// Having a toString local variable name breaks in Opera so use _toString.
var _toString = call.bind(prototypeOfObject.toString);
var owns = call.bind(prototypeOfObject.hasOwnProperty);

// If JS engine supports accessors creating shortcuts.
var defineGetter;
var defineSetter;
var lookupGetter;
var lookupSetter;
var supportsAccessors;
if ((supportsAccessors = owns(prototypeOfObject, "__defineGetter__"))) {
    defineGetter = call.bind(prototypeOfObject.__defineGetter__);
    defineSetter = call.bind(prototypeOfObject.__defineSetter__);
    lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
    lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
}

//
// Array
// =====
//

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.12
// Default value for second param
// [bugfix, ielt9, old browsers]
// IE < 9 bug: [1,2].splice(0).join("") == "" but should be "12"
if ([1,2].splice(0).length != 2) {
    var array_splice = Array.prototype.splice;
    var array_push = Array.prototype.push;
    var array_unshift = Array.prototype.unshift;

    if (function() { // test IE < 9 to splice bug - see issue #138
        function makeArray(l) {
            var a = [];
            while (l--) {
                a.unshift(l)
            }
            return a
        }

        var array = []
            , lengthBefore
        ;

        array.splice.bind(array, 0, 0).apply(null, makeArray(20));
        array.splice.bind(array, 0, 0).apply(null, makeArray(26));

        lengthBefore = array.length; //20
        array.splice(5, 0, "XXX"); // add one element

        if (lengthBefore + 1 == array.length) {
            return true;// has right splice implementation without bugs
        }
        // else {
        //    IE8 bug
        // }
    }()) {//IE 6/7
        Array.prototype.splice = function(start, deleteCount) {
            if (!arguments.length) {
                return [];
            } else {
                return array_splice.apply(this, [
                    start === void 0 ? 0 : start,
                    deleteCount === void 0 ? (this.length - start) : deleteCount
                ].concat(_Array_slice_.call(arguments, 2)))
            }
        };
    }
    else {//IE8
        Array.prototype.splice = function(start, deleteCount) {
            var result
                , args = _Array_slice_.call(arguments, 2)
                , addElementsCount = args.length
            ;

            if (!arguments.length) {
                return [];
            }

            if (start === void 0) { // default
                start = 0;
            }
            if (deleteCount === void 0) { // default
                deleteCount = this.length - start;
            }

            if (addElementsCount > 0) {
                if (deleteCount <= 0) {
                    if (start == this.length) { // tiny optimisation #1
                        array_push.apply(this, args);
                        return [];
                    }

                    if (start == 0) { // tiny optimisation #2
                        array_unshift.apply(this, args);
                        return [];
                    }
                }

                // Array.prototype.splice implementation
                result = _Array_slice_.call(this, start, start + deleteCount);// delete part
                args.push.apply(args, _Array_slice_.call(this, start + deleteCount, this.length));// right part
                args.unshift.apply(args, _Array_slice_.call(this, 0, start));// left part

                // delete all items from this array and replace it to 'left part' + _Array_slice_.call(arguments, 2) + 'right part'
                args.unshift(0, this.length);

                array_splice.apply(this, args);

                return result;
            }

            return array_splice.call(this, start, deleteCount);
        }

    }
}

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.13
// Return len+argCount.
// [bugfix, ielt8]
// IE < 8 bug: [].unshift(0) == undefined but should be "1"
if ([].unshift(0) != 1) {
    var array_unshift = Array.prototype.unshift;
    Array.prototype.unshift = function() {
        array_unshift.apply(this, arguments);
        return this.length;
    };
}

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
if (!Array.isArray) {
    Array.isArray = function isArray(obj) {
        return _toString(obj) == "[object Array]";
    };
}

// The IsCallable() check in the Array functions
// has been replaced with a strict check on the
// internal class of the object to trap cases where
// the provided function was actually a regular
// expression literal, which in V8 and
// JavaScriptCore is a typeof "function".  Only in
// V8 are regular expression literals permitted as
// reduce parameters, so it is desirable in the
// general case for the shim to match the more
// strict and common behavior of rejecting regular
// expressions.

// ES5 15.4.4.18
// http://es5.github.com/#x15.4.4.18
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach


// Check failure of by-index access of string characters (IE < 9)
// and failure of `0 in boxedString` (Rhino)
var boxedString = Object("a");
var splitString = boxedString[0] != "a" || !(0 in boxedString);

var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxes = true;
    if (method) {
        method.call('foo', function (item, index, context) {
            if (typeof context !== 'object') { properlyBoxes = false; }
        });
    }
    return !!method && properlyBoxes;
};

if (!Array.prototype.forEach || !properlyBoxesContext(Array.prototype.forEach)) {
    Array.prototype.forEach = function forEach(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            thisp = arguments[1],
            i = -1,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(); // TODO message
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                // context
                fun.call(thisp, self[i], i, object);
            }
        }
    };
}

// ES5 15.4.4.19
// http://es5.github.com/#x15.4.4.19
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
if (!Array.prototype.map || !properlyBoxesContext(Array.prototype.map)) {
    Array.prototype.map = function map(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            result = Array(length),
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self)
                result[i] = fun.call(thisp, self[i], i, object);
        }
        return result;
    };
}

// ES5 15.4.4.20
// http://es5.github.com/#x15.4.4.20
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
if (!Array.prototype.filter || !properlyBoxesContext(Array.prototype.filter)) {
    Array.prototype.filter = function filter(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                    object,
            length = self.length >>> 0,
            result = [],
            value,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                value = self[i];
                if (fun.call(thisp, value, i, object)) {
                    result.push(value);
                }
            }
        }
        return result;
    };
}

// ES5 15.4.4.16
// http://es5.github.com/#x15.4.4.16
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
if (!Array.prototype.every || !properlyBoxesContext(Array.prototype.every)) {
    Array.prototype.every = function every(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self && !fun.call(thisp, self[i], i, object)) {
                return false;
            }
        }
        return true;
    };
}

// ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
if (!Array.prototype.some || !properlyBoxesContext(Array.prototype.some)) {
    Array.prototype.some = function some(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self && fun.call(thisp, self[i], i, object)) {
                return true;
            }
        }
        return false;
    };
}

// ES5 15.4.4.21
// http://es5.github.com/#x15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function reduce(fun /*, initial*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        // no value to return if no initial value and an empty array
        if (!length && arguments.length == 1) {
            throw new TypeError("reduce of empty array with no initial value");
        }

        var i = 0;
        var result;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i++];
                    break;
                }

                // if array contains no values, no initial value to return
                if (++i >= length) {
                    throw new TypeError("reduce of empty array with no initial value");
                }
            } while (true);
        }

        for (; i < length; i++) {
            if (i in self) {
                result = fun.call(void 0, result, self[i], i, object);
            }
        }

        return result;
    };
}

// ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
if (!Array.prototype.reduceRight) {
    Array.prototype.reduceRight = function reduceRight(fun /*, initial*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        // no value to return if no initial value, empty array
        if (!length && arguments.length == 1) {
            throw new TypeError("reduceRight of empty array with no initial value");
        }

        var result, i = length - 1;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i--];
                    break;
                }

                // if array contains no values, no initial value to return
                if (--i < 0) {
                    throw new TypeError("reduceRight of empty array with no initial value");
                }
            } while (true);
        }

        if (i < 0) {
            return result;
        }

        do {
            if (i in this) {
                result = fun.call(void 0, result, self[i], i, object);
            }
        } while (i--);

        return result;
    };
}

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf || ([0, 1].indexOf(1, 2) != -1)) {
    Array.prototype.indexOf = function indexOf(sought /*, fromIndex */ ) {
        var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = toInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : Math.max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === sought) {
                return i;
            }
        }
        return -1;
    };
}

// ES5 15.4.4.15
// http://es5.github.com/#x15.4.4.15
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
if (!Array.prototype.lastIndexOf || ([0, 1].lastIndexOf(0, -3) != -1)) {
    Array.prototype.lastIndexOf = function lastIndexOf(sought /*, fromIndex */) {
        var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }
        var i = length - 1;
        if (arguments.length > 1) {
            i = Math.min(i, toInteger(arguments[1]));
        }
        // handle negative indices
        i = i >= 0 ? i : length - Math.abs(i);
        for (; i >= 0; i--) {
            if (i in self && sought === self[i]) {
                return i;
            }
        }
        return -1;
    };
}

//
// Object
// ======
//

// ES5 15.2.3.14
// http://es5.github.com/#x15.2.3.14
if (!Object.keys) {
    // http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
    var hasDontEnumBug = true,
        hasProtoEnumBug = (function () {}).propertyIsEnumerable('prototype'),
        dontEnums = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
        ],
        dontEnumsLength = dontEnums.length;

    for (var key in {"toString": null}) {
        hasDontEnumBug = false;
    }

    Object.keys = function keys(object) {
        var isFunction = _toString(object) === '[object Function]',
            isObject = object !== null && typeof object === 'object';

        if (!isObject && !isFunction) {
            throw new TypeError("Object.keys called on a non-object");
        }

        var keys = [],
            skipProto = hasProtoEnumBug && isFunction;
        for (var name in object) {
            if (!(skipProto && name === 'prototype') && owns(object, name)) {
                keys.push(name);
            }
        }

        if (hasDontEnumBug) {
            var ctor = object.constructor,
                skipConstructor = ctor && ctor.prototype === object;
            for (var i = 0; i < dontEnumsLength; i++) {
                var dontEnum = dontEnums[i];
                if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
                    keys.push(dontEnum);
                }
            }
        }
        return keys;
    };

}

//
// Date
// ====
//

// ES5 15.9.5.43
// http://es5.github.com/#x15.9.5.43
// This function returns a String value represent the instance in time
// represented by this Date object. The format of the String is the Date Time
// string format defined in 15.9.1.15. All fields are present in the String.
// The time zone is always UTC, denoted by the suffix Z. If the time value of
// this object is not a finite Number a RangeError exception is thrown.
var negativeDate = -62198755200000,
    negativeYearString = "-000001";
if (
    !Date.prototype.toISOString ||
    (new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1)
) {
    Date.prototype.toISOString = function toISOString() {
        var result, length, value, year, month;
        if (!isFinite(this)) {
            throw new RangeError("Date.prototype.toISOString called on non-finite value.");
        }

        year = this.getUTCFullYear();

        month = this.getUTCMonth();
        // see https://github.com/es-shims/es5-shim/issues/111
        year += Math.floor(month / 12);
        month = (month % 12 + 12) % 12;

        // the date time string format is specified in 15.9.1.15.
        result = [month + 1, this.getUTCDate(),
            this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
        year = (
            (year < 0 ? "-" : (year > 9999 ? "+" : "")) +
            ("00000" + Math.abs(year))
            .slice(0 <= year && year <= 9999 ? -4 : -6)
        );

        length = result.length;
        while (length--) {
            value = result[length];
            // pad months, days, hours, minutes, and seconds to have two
            // digits.
            if (value < 10) {
                result[length] = "0" + value;
            }
        }
        // pad milliseconds to have three digits.
        return (
            year + "-" + result.slice(0, 2).join("-") +
            "T" + result.slice(2).join(":") + "." +
            ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
        );
    };
}


// ES5 15.9.5.44
// http://es5.github.com/#x15.9.5.44
// This function provides a String representation of a Date object for use by
// JSON.stringify (15.12.3).
var dateToJSONIsSupported = false;
try {
    dateToJSONIsSupported = (
        Date.prototype.toJSON &&
        new Date(NaN).toJSON() === null &&
        new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
        Date.prototype.toJSON.call({ // generic
            toISOString: function () {
                return true;
            }
        })
    );
} catch (e) {
}
if (!dateToJSONIsSupported) {
    Date.prototype.toJSON = function toJSON(key) {
        // When the toJSON method is called with argument key, the following
        // steps are taken:

        // 1.  Let O be the result of calling ToObject, giving it the this
        // value as its argument.
        // 2. Let tv be toPrimitive(O, hint Number).
        var o = Object(this),
            tv = toPrimitive(o),
            toISO;
        // 3. If tv is a Number and is not finite, return null.
        if (typeof tv === "number" && !isFinite(tv)) {
            return null;
        }
        // 4. Let toISO be the result of calling the [[Get]] internal method of
        // O with argument "toISOString".
        toISO = o.toISOString;
        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
        if (typeof toISO != "function") {
            throw new TypeError("toISOString property is not callable");
        }
        // 6. Return the result of calling the [[Call]] internal method of
        //  toISO with O as the this value and an empty argument list.
        return toISO.call(o);

        // NOTE 1 The argument is ignored.

        // NOTE 2 The toJSON function is intentionally generic; it does not
        // require that its this value be a Date object. Therefore, it can be
        // transferred to other kinds of objects for use as a method. However,
        // it does require that any such object have a toISOString method. An
        // object is free to use the argument key to filter its
        // stringification.
    };
}

// ES5 15.9.4.2
// http://es5.github.com/#x15.9.4.2
// based on work shared by Daniel Friesen (dantman)
// http://gist.github.com/303249
if (!Date.parse || isNaN(Date.parse("2000-01-01T00:00:00.000Z"))) {
    // XXX global assignment won't work in embeddings that use
    // an alternate object for the context.
    Date = (function(NativeDate) {

        // Date.length === 7
        function Date(Y, M, D, h, m, s, ms) {
            var length = arguments.length;
            if (this instanceof NativeDate) {
                var date = length == 1 && String(Y) === Y ? // isString(Y)
                    // We explicitly pass it through parse:
                    new NativeDate(Date.parse(Y)) :
                    // We have to manually make calls depending on argument
                    // length here
                    length >= 7 ? new NativeDate(Y, M, D, h, m, s, ms) :
                    length >= 6 ? new NativeDate(Y, M, D, h, m, s) :
                    length >= 5 ? new NativeDate(Y, M, D, h, m) :
                    length >= 4 ? new NativeDate(Y, M, D, h) :
                    length >= 3 ? new NativeDate(Y, M, D) :
                    length >= 2 ? new NativeDate(Y, M) :
                    length >= 1 ? new NativeDate(Y) :
                                  new NativeDate();
                // Prevent mixups with unfixed Date object
                date.constructor = Date;
                return date;
            }
            return NativeDate.apply(this, arguments);
        };

        // 15.9.1.15 Date Time String Format.
        var isoDateExpression = new RegExp("^" +
            "(\\d{4}|[\+\-]\\d{6})" + // four-digit year capture or sign +
                                      // 6-digit extended year
            "(?:-(\\d{2})" + // optional month capture
            "(?:-(\\d{2})" + // optional day capture
            "(?:" + // capture hours:minutes:seconds.milliseconds
                "T(\\d{2})" + // hours capture
                ":(\\d{2})" + // minutes capture
                "(?:" + // optional :seconds.milliseconds
                    ":(\\d{2})" + // seconds capture
                    "(?:(\\.\\d{1,}))?" + // milliseconds capture
                ")?" +
            "(" + // capture UTC offset component
                "Z|" + // UTC capture
                "(?:" + // offset specifier +/-hours:minutes
                    "([-+])" + // sign capture
                    "(\\d{2})" + // hours offset capture
                    ":(\\d{2})" + // minutes offset capture
                ")" +
            ")?)?)?)?" +
        "$");

        var months = [
            0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365
        ];

        function dayFromMonth(year, month) {
            var t = month > 1 ? 1 : 0;
            return (
                months[month] +
                Math.floor((year - 1969 + t) / 4) -
                Math.floor((year - 1901 + t) / 100) +
                Math.floor((year - 1601 + t) / 400) +
                365 * (year - 1970)
            );
        }

        function toUTC(t) {
            return Number(new NativeDate(1970, 0, 1, 0, 0, 0, t));
        }

        // Copy any custom methods a 3rd party library may have added
        for (var key in NativeDate) {
            Date[key] = NativeDate[key];
        }

        // Copy "native" methods explicitly; they may be non-enumerable
        Date.now = NativeDate.now;
        Date.UTC = NativeDate.UTC;
        Date.prototype = NativeDate.prototype;
        Date.prototype.constructor = Date;

        // Upgrade Date.parse to handle simplified ISO 8601 strings
        Date.parse = function parse(string) {
            var match = isoDateExpression.exec(string);
            if (match) {
                // parse months, days, hours, minutes, seconds, and milliseconds
                // provide default values if necessary
                // parse the UTC offset component
                var year = Number(match[1]),
                    month = Number(match[2] || 1) - 1,
                    day = Number(match[3] || 1) - 1,
                    hour = Number(match[4] || 0),
                    minute = Number(match[5] || 0),
                    second = Number(match[6] || 0),
                    millisecond = Math.floor(Number(match[7] || 0) * 1000),
                    // When time zone is missed, local offset should be used
                    // (ES 5.1 bug)
                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                    isLocalTime = Boolean(match[4] && !match[8]),
                    signOffset = match[9] === "-" ? 1 : -1,
                    hourOffset = Number(match[10] || 0),
                    minuteOffset = Number(match[11] || 0),
                    result;
                if (
                    hour < (
                        minute > 0 || second > 0 || millisecond > 0 ?
                        24 : 25
                    ) &&
                    minute < 60 && second < 60 && millisecond < 1000 &&
                    month > -1 && month < 12 && hourOffset < 24 &&
                    minuteOffset < 60 && // detect invalid offsets
                    day > -1 &&
                    day < (
                        dayFromMonth(year, month + 1) -
                        dayFromMonth(year, month)
                    )
                ) {
                    result = (
                        (dayFromMonth(year, month) + day) * 24 +
                        hour +
                        hourOffset * signOffset
                    ) * 60;
                    result = (
                        (result + minute + minuteOffset * signOffset) * 60 +
                        second
                    ) * 1000 + millisecond;
                    if (isLocalTime) {
                        result = toUTC(result);
                    }
                    if (-8.64e15 <= result && result <= 8.64e15) {
                        return result;
                    }
                }
                return NaN;
            }
            return NativeDate.parse.apply(this, arguments);
        };

        return Date;
    })(Date);
}

// ES5 15.9.4.4
// http://es5.github.com/#x15.9.4.4
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}


//
// Number
// ======
//

// ES5.1 15.7.4.5
// http://es5.github.com/#x15.7.4.5
if (!Number.prototype.toFixed || (0.00008).toFixed(3) !== '0.000' || (0.9).toFixed(0) === '0' || (1.255).toFixed(2) !== '1.25' || (1000000000000000128).toFixed(0) !== "1000000000000000128") {
    // Hide these variables and functions
    (function () {
        var base, size, data, i;

        base = 1e7;
        size = 6;
        data = [0, 0, 0, 0, 0, 0];

        function multiply(n, c) {
            var i = -1;
            while (++i < size) {
                c += n * data[i];
                data[i] = c % base;
                c = Math.floor(c / base);
            }
        }

        function divide(n) {
            var i = size, c = 0;
            while (--i >= 0) {
                c += data[i];
                data[i] = Math.floor(c / n);
                c = (c % n) * base;
            }
        }

        function toString() {
            var i = size;
            var s = '';
            while (--i >= 0) {
                if (s !== '' || i === 0 || data[i] !== 0) {
                    var t = String(data[i]);
                    if (s === '') {
                        s = t;
                    } else {
                        s += '0000000'.slice(0, 7 - t.length) + t;
                    }
                }
            }
            return s;
        }

        function pow(x, n, acc) {
            return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
        }

        function log(x) {
            var n = 0;
            while (x >= 4096) {
                n += 12;
                x /= 4096;
            }
            while (x >= 2) {
                n += 1;
                x /= 2;
            }
            return n;
        }

        Number.prototype.toFixed = function (fractionDigits) {
            var f, x, s, m, e, z, j, k;

            // Test for NaN and round fractionDigits down
            f = Number(fractionDigits);
            f = f !== f ? 0 : Math.floor(f);

            if (f < 0 || f > 20) {
                throw new RangeError("Number.toFixed called with invalid number of decimals");
            }

            x = Number(this);

            // Test for NaN
            if (x !== x) {
                return "NaN";
            }

            // If it is too big or small, return the string value of the number
            if (x <= -1e21 || x >= 1e21) {
                return String(x);
            }

            s = "";

            if (x < 0) {
                s = "-";
                x = -x;
            }

            m = "0";

            if (x > 1e-21) {
                // 1e-21 < x < 1e21
                // -70 < log2(x) < 70
                e = log(x * pow(2, 69, 1)) - 69;
                z = (e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1));
                z *= 0x10000000000000; // Math.pow(2, 52);
                e = 52 - e;

                // -18 < e < 122
                // x = z / 2 ^ e
                if (e > 0) {
                    multiply(0, z);
                    j = f;

                    while (j >= 7) {
                        multiply(1e7, 0);
                        j -= 7;
                    }

                    multiply(pow(10, j, 1), 0);
                    j = e - 1;

                    while (j >= 23) {
                        divide(1 << 23);
                        j -= 23;
                    }

                    divide(1 << j);
                    multiply(1, 1);
                    divide(2);
                    m = toString();
                } else {
                    multiply(0, z);
                    multiply(1 << (-e), 0);
                    m = toString() + '0.00000000000000000000'.slice(2, 2 + f);
                }
            }

            if (f > 0) {
                k = m.length;

                if (k <= f) {
                    m = s + '0.0000000000000000000'.slice(0, f - k + 2) + m;
                } else {
                    m = s + m.slice(0, k - f) + '.' + m.slice(k - f);
                }
            } else {
                m = s + m;
            }

            return m;
        }
    }());
}


//
// String
// ======
//


// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

var string_split = String.prototype.split;
if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === "t" ||
    ''.split(/.?/).length ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = /()??/.exec("")[1] === void 0; // NPCG: nonparticipating capturing group

        String.prototype.split = function (separator, limit) {
            var string = this;
            if (separator === void 0 && limit === 0)
                return [];

            // If `separator` is not a regex, use native split
            if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
                return string_split.apply(this, arguments);
            }

            var output = [],
                flags = (separator.ignoreCase ? "i" : "") +
                        (separator.multiline  ? "m" : "") +
                        (separator.extended   ? "x" : "") + // Proposed for ES6
                        (separator.sticky     ? "y" : ""), // Firefox 3+
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator = new RegExp(separator.source, flags + "g"),
                separator2, match, lastIndex, lastLength;
            string += ""; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            limit = limit === void 0 ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                limit >>> 0; // ToUint32(limit)
            while (match = separator.exec(string)) {
                // `separator.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === void 0) {
                                    match[i] = void 0;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < string.length) {
                        Array.prototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++; // Avoid an infinite loop
                }
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separator.test("")) {
                    output.push("");
                }
            } else {
                output.push(string.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ("0".split(void 0, 0).length) {
    String.prototype.split = function(separator, limit) {
        if (separator === void 0 && limit === 0) return [];
        return string_split.apply(this, arguments);
    }
}


// ECMA-262, 3rd B.2.3
// Note an ECMAScript standart, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
if ("".substr && "0b".substr(-1) !== "b") {
    var string_substr = String.prototype.substr;
    /**
     *  Get the substring of a string
     *  @param  {integer}  start   where to start the substring
     *  @param  {integer}  length  how many characters to return
     *  @return {string}
     */
    String.prototype.substr = function(start, length) {
        return string_substr.call(
            this,
            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
            length
        );
    }
}

// ES5 15.5.4.20
// whitespace from: http://es5.github.io/#x15.5.4.20
var ws = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
    "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" +
    "\u2029\uFEFF";
if (!String.prototype.trim || ws.trim()) {
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
    // http://perfectionkills.com/whitespace-deviations/
    ws = "[" + ws + "]";
    var trimBeginRegexp = new RegExp("^" + ws + ws + "*"),
        trimEndRegexp = new RegExp(ws + ws + "*$");
    String.prototype.trim = function trim() {
        if (this === void 0 || this === null) {
            throw new TypeError("can't convert "+this+" to object");
        }
        return String(this)
            .replace(trimBeginRegexp, "")
            .replace(trimEndRegexp, "");
    };
}

// ES-5 15.1.2.2
if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
    parseInt = (function (origParseInt) {
        var hexRegex = /^0[xX]/;
        return function parseIntES5(str, radix) {
            str = String(str).trim();
            if (!+radix) {
                radix = hexRegex.test(str) ? 16 : 10;
            }
            return origParseInt(str, radix);
        };
    }(parseInt));
}

//
// Util
// ======
//

// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer

function toInteger(n) {
    n = +n;
    if (n !== n) { // isNaN
        n = 0;
    } else if (n !== 0 && n !== (1/0) && n !== -(1/0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
    return n;
}

function isPrimitive(input) {
    var type = typeof input;
    return (
        input === null ||
        type === "undefined" ||
        type === "boolean" ||
        type === "number" ||
        type === "string"
    );
}

function toPrimitive(input) {
    var val, valueOf, toString;
    if (isPrimitive(input)) {
        return input;
    }
    valueOf = input.valueOf;
    if (typeof valueOf === "function") {
        val = valueOf.call(input);
        if (isPrimitive(val)) {
            return val;
        }
    }
    toString = input.toString;
    if (typeof toString === "function") {
        val = toString.call(input);
        if (isPrimitive(val)) {
            return val;
        }
    }
    throw new TypeError();
}

// ES5 9.9
// http://es5.github.com/#x9.9
var toObject = function (o) {
    if (o == null) { // this matches both null and undefined
        throw new TypeError("can't convert "+o+" to object");
    }
    return Object(o);
};

}));

},{}],52:[function(require,module,exports){

},{}],53:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],54:[function(require,module,exports){
var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
   // Detect if browser supports Typed Arrays. Supported browsers are IE 10+,
   // Firefox 4+, Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+.
   if (typeof Uint8Array === 'undefined' || typeof ArrayBuffer === 'undefined')
      return false

  // Does the browser support adding properties to `Uint8Array` instances? If
  // not, then that's the same as no `Uint8Array` support. We need to be able to
  // add all the node Buffer API methods.
  // Relevant Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var arr = new Uint8Array(0)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // Assume object is an array
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof Uint8Array === 'function' &&
      subject instanceof Uint8Array) {
    // Speed optimization -- use set if we're copying from a Uint8Array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  switch (encoding) {
    case 'hex':
      return _hexWrite(this, string, offset, length)
    case 'utf8':
    case 'utf-8':
    case 'ucs2': // TODO: No support for ucs2 or utf16le encodings yet
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return _utf8Write(this, string, offset, length)
    case 'ascii':
      return _asciiWrite(this, string, offset, length)
    case 'binary':
      return _binaryWrite(this, string, offset, length)
    case 'base64':
      return _base64Write(this, string, offset, length)
    default:
      throw new Error('Unknown encoding')
  }
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  switch (encoding) {
    case 'hex':
      return _hexSlice(self, start, end)
    case 'utf8':
    case 'utf-8':
    case 'ucs2': // TODO: No support for ucs2 or utf16le encodings yet
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return _utf8Slice(self, start, end)
    case 'ascii':
      return _asciiSlice(self, start, end)
    case 'binary':
      return _binarySlice(self, start, end)
    case 'base64':
      return _base64Slice(self, start, end)
    default:
      throw new Error('Unknown encoding')
  }
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  // copy!
  for (var i = 0; i < end - start; i++)
    target[i + target_start] = this[i + start]
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

// http://nodejs.org/api/buffer.html#buffer_buf_slice_start_end
Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array === 'function') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment the Uint8Array *instance* (not the class!) with Buffer methods
 */
function augment (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value == 'number', 'cannot write a non-number as a number')
  assert(value >= 0,
      'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint(value, max, min) {
  assert(typeof value == 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754(value, max, min) {
  assert(typeof value == 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

},{"base64-js":55,"ieee754":56}],55:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var ZERO   = '0'.charCodeAt(0)
	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	module.exports.toByteArray = b64ToByteArray
	module.exports.fromByteArray = uint8ToBase64
}())

},{}],56:[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}]},{},[2,18,11,36,39,23,24,41,6,31,40,8,19,5,34,25,12,43,42,50,1,17,22,49,33,13,15,10,9,14,45,26,7,35,46,48,16,20,29,28,47,32,21,3,51,27,37,4,30,38,44])