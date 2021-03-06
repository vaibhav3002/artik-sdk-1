
/* GPIO definition */
exports.ARTIK_A5_GPIO_XEINT0 = 121;
exports.ARTIK_A5_GPIO_XEINT1 = 122;
exports.ARTIK_A5_GPIO_XEINT2 = 123;
exports.ARTIK_A5_GPIO_XEINT3 = 124;
exports.ARTIK_A5_GPIO_XEINT4 = 125;
exports.ARTIK_A5_GPIO_XEINT5 = 126;
exports.ARTIK_A5_GPIO_XEINT6 = 127;
exports.ARTIK_A5_GPIO_XEINT8 = 129;
exports.ARTIK_A5_GPIO_XEINT9 = 130;
exports.ARTIK_A5_GPIO_XEINT12 = 133;
exports.ARTIK_A5_GPIO_XEINT13 =	134;
exports.ARTIK_A5_GPIO_XEINT14 =	135;
exports.ARTIK_A5_GPIO_XEINT16 = 137;
exports.ARTIK_A5_GPIO_XEINT17 =	138;
exports.ARTIK_A5_GPIO_XEINT18 =	139;
exports.ARTIK_A5_GPIO_XEINT20 =	141;
exports.ARTIK_A5_GPIO_XEINT21 =	142;
exports.ARTIK_A5_GPIO_XEINT22 =	143;
exports.ARTIK_A5_GPIO_XEINT24 =	145;
exports.ARTIK_A5_GPIO_XEINT25 =	146;
exports.ARTIK_A5_GPIO_XEINT27 =	148;
exports.ARTIK_A5_GPIO_XEINT28 =	149;
exports.ARTIK_A5_GPIO_XGPIO2 = 42;
exports.ARTIK_A5_GPIO_XGPIO3 = 43;
exports.ARTIK_A5_GPIO_XGPIO6 = 46;
exports.ARTIK_A5_GPIO_XGPIO15 =	56;
exports.ARTIK_A5_GPIO_XGPIO17 =	132;
 
/* SERIAL definition */
exports.ARTIK_A5_SERIAL = { 'SCOM' : { 'XSCOM1' : 0,
				       'XSCOM2' : 1, 
				       'XSCOM3' : 2,
				       'XSCOM4' : 3 },
			    'BAUD' : { 'B4800' : 0,
				       'B9600' : 1,
				       'B14400' : 2,
				       'B19200' : 3,
				       'B38400' : 4,
				       'B57600' : 5,
				       'B115200' : 6 },
			    'PARITY' : { 'NONE': 7,
				         'ODD' : 8,
				         'EVEN' : 9 },
			    'DATA' : { 'BIT7' : 10,
				       'BIT8' : 11 },
			    'STOP' : { 'BIT1' : 12,
				       'BIT2' : 13 },
			    'FLOWCTRL' : { 'NONE' : 14,
					   'HARD' : 15,
					   'SOFT' : 16 }
			  };


/* PWM definition */
exports.ARTIK_A5_PWM = { 'PWMIO' : { 'XPWMIO1' : 0,
				     'XPWMIO2' : 1,
				     'XPWMIO3' : 256,
				     'XPWMIO4' : 257 },
			 'POLR' : { 'NORMAL' : 0,
				    'INVERT' : 1 }
		       };

/* SPI definition */
exports.ARTIK_A5_SPI = { 'BUS' : { 'BUS0' : 0,
								   'BUS1' : 1,
								   'BUS2' : 2,
								   'BUS3' : 3 },
						'CS' : { 'CS0' : 0,
								 'CS1' : 1 },
						'MODE' : { 'MODE0' : 0,
								   'MODE1' : 1,
								   'MODE2' : 2,
								   'MODE3' : 3,},
						'BITS' : { 'BITS8' : 8},
					   };

/* TIME definition */
exports.ARTIK_A5_TIME = { 'ZONE' : { 'UTC' : 0,
				     'GMT1' : 1,
				     'GMT2' : 2,
				     'GMT3' : 3,
				     'GMT4' : 4,
				     'GMT5' : 5,
				     'GMT6' : 6,
				     'GMT7' : 7,
				     'GMT8' : 8,
				     'GMT9' : 9,
				     'GMT10' : 10,
				     'GMT11' : 11,
				     'GMT12' : 12 },
			  'DFORMAT_DATE' : 'h:m:s:S-d-D/M/Y\0'
		       };

/* SENSOR definition */
exports.ARTIK_A5_SENSOR = { 'DEVICE' : { 'ACCELEROMETER' : 1,
					 'HUMIDITY' : 4,
					 'LIGHT' : 8,
					 'TEMPERATURE' : 16,
					 'PROXIMITY' : 32,
					 'NONE' : 0,
				       }
			  };
