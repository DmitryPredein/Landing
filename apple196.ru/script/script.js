let arrayModel = [["Телефон","iPhone 4"],["Телефон","iPhone 4S"],["Телефон","iPhone 5"],["Телефон","iPhone 5C"],["Телефон","iPhone 5S"],["Телефон","iPhone 6"],["Телефон","iPhone 6 Plus"],["Телефон","iPhone 6S"],["Телефон","iPhone 6S Plus"],["Телефон","iPhone 7"],["Телефон","iPhone 7 Plus"],["Телефон","iPhone 8"],["Телефон","iPhone 8 Plus"],["Телефон","iPhone X"],["Телефон","iPhone Xr"],["Телефон","iPhone Xs"],["Телефон","iPhone Xs Max"],["Телефон","iPhone 11"],["Телефон","iPhone 11 Pro"],["Телефон","iPhone 11 Pro Max"],["Телефон","iPhone SE"],];

let priceService = [["Восстановление после попадания воды","iPhone 4","600","30"],["Замена аккумулятора","iPhone 4","1000","15"],["Замена датчика приближения","iPhone 4","850","40"],["Замена динамика/звонка","iPhone 4","750","35"],["Замена дисплея","iPhone 4","1350","40"],["Замена задней крышки","iPhone 4","650","15"],["Замена основной камеры","iPhone 4","900","35"],["Замена передней камеры(Себяшки)","iPhone 4","780","30"],["Замена кнопки включения","iPhone 4","820","50"],["Замена корпуса в сборе","iPhone 4","1200","60"],["Замена микрофона","iPhone 4","900","60"],["Замена разъема зарядки/гарнитуры","iPhone 4","930","40"],["Замена шлейфа","iPhone 4","850","45"],["Программный ремонт/Обновление ПО","iPhone 4","650","60"],["Ремонт кнопки Home","iPhone 4","700","30"],["Технически сложный ремонт","iPhone 4","700","60"],["Восстановление после попадания воды","iPhone 4S","600","30"],["Замена аккумулятора","iPhone 4S","1000","15"],["Замена датчика приближения","iPhone 4S","850","40"],["Замена динамика/звонка","iPhone 4S","750","35"],["Замена дисплея","iPhone 4S","1350","40"],["Замена задней крышки","iPhone 4S","650","15"],["Замена основной камеры","iPhone 4S","930","35"],["Замена передней камеры(Себяшки)","iPhone 4S","800","30"],["Замена кнопки включения","iPhone 4S","820","50"],["Замена корпуса в сборе","iPhone 4S","1200","60"],["Замена микрофона","iPhone 4S","900","60"],["Замена разъема зарядки/гарнитуры","iPhone 4S","960","40"],["Замена шлейфа","iPhone 4S","850","45"],["Программный ремонт/Обновление ПО","iPhone 4S","650","60"],["Ремонт кнопки Home","iPhone 4S","700","30"],["Технически сложный ремонт","iPhone 4S","700","60"],["Восстановление после попадания воды","iPhone 5","700","30"],["Замена аккумулятора","iPhone 5","1050","25"],["Замена датчика приближения","iPhone 5","860","30"],["Замена динамика/звонка","iPhone 5","850","35"],["Замена дисплея","iPhone 5","1500","20"],["Замена задней крышки","iPhone 5","1500","55"],["Замена основной камеры","iPhone 5","1100","40"],["Замена передней камеры(Себяшки)","iPhone 5","930","30"],["Замена кнопки включения","iPhone 5","990","50"],["Замена корпуса в сборе","iPhone 5","1500","60"],["Замена микрофона","iPhone 5","1050","60"],["Замена разъема зарядки/гарнитуры","iPhone 5","1050","40"],["Замена шлейфа","iPhone 5","950","45"],["Программный ремонт/Обновление ПО","iPhone 5","800","60"],["Ремонт кнопки Home","iPhone 5","800","30"],["Технически сложный ремонт","iPhone 5","800","60"],["Восстановление после попадания воды","iPhone 5C","700","30"],["Замена аккумулятора","iPhone 5C","1050","25"],["Замена датчика приближения","iPhone 5C","895","30"],["Замена динамика/звонка","iPhone 5C","850","35"],["Замена дисплея","iPhone 5C","1500","20"],["Замена задней крышки","iPhone 5C","1500","55"],["Замена основной камеры","iPhone 5C","1100","40"],["Замена передней камеры(Себяшки)","iPhone 5C","990","30"],["Замена кнопки включения","iPhone 5C","1020","50"],["Замена корпуса в сборе","iPhone 5C","1600","60"],["Замена микрофона","iPhone 5C","1050","60"],["Замена разъема зарядки/гарнитуры","iPhone 5C","1060","40"],["Замена шлейфа","iPhone 5C","970","45"],["Программный ремонт/Обновление ПО","iPhone 5C","800","60"],["Ремонт кнопки Home","iPhone 5C","800","30"],["Технически сложный ремонт","iPhone 5C","800","60"],["Восстановление после попадания воды","iPhone 5S","700","30"],["Замена аккумулятора","iPhone 5S","1050","25"],["Замена датчика приближения","iPhone 5S","920","30"],["Замена динамика/звонка","iPhone 5S","850","35"],["Замена дисплея","iPhone 5S","1500","20"],["Замена задней крышки","iPhone 5S","1650","55"],["Замена основной камеры","iPhone 5S","1150","40"],["Замена передней камеры(Себяшки)","iPhone 5S","1090","30"],["Замена кнопки включения","iPhone 5S","1020","50"],["Замена корпуса в сборе","iPhone 5S","1650","60"],["Замена микрофона","iPhone 5S","1120","60"],["Замена разъема зарядки/гарнитуры","iPhone 5S","1150","40"],["Замена шлейфа","iPhone 5S","1020","45"],["Программный ремонт/Обновление ПО","iPhone 5S","850","60"],["Ремонт кнопки Home","iPhone 5S","1050","30"],["Технически сложный ремонт","iPhone 5S","800","60"],["Восстановление после попадания воды","iPhone 6","750","30"],["Замена аккумулятора","iPhone 6","1150","25"],["Замена датчика приближения","iPhone 6","930","30"],["Замена динамика/звонка","iPhone 6","900","40"],["Замена дисплея","iPhone 6","1850","30"],["Замена задней крышки","iPhone 6","1950","55"],["Замена основной камеры","iPhone 6","1170","45"],["Замена передней камеры(Себяшки)","iPhone 6","1220","30"],["Замена кнопки включения","iPhone 6","1160","50"],["Замена корпуса в сборе","iPhone 6","1950","60"],["Замена микрофона","iPhone 6","1300","60"],["Замена разъема зарядки/гарнитуры","iPhone 6","1230","40"],["Замена шлейфа","iPhone 6","1200","45"],["Программный ремонт/Обновление ПО","iPhone 6","900","60"],["Ремонт кнопки Home","iPhone 6","1150","30"],["Технически сложный ремонт","iPhone 6","900","60"],["Восстановление после попадания воды","iPhone 6 Plus","750","30"],["Замена аккумулятора","iPhone 6 Plus","1300","25"],["Замена датчика приближения","iPhone 6 Plus","960","30"],["Замена динамика/звонка","iPhone 6 Plus","900","40"],["Замена дисплея","iPhone 6 Plus","2030","30"],["Замена задней крышки","iPhone 6 Plus","1990","55"],["Замена основной камеры","iPhone 6 Plus","1620","45"],["Замена передней камеры(Себяшки)","iPhone 6 Plus","1270","30"],["Замена кнопки включения","iPhone 6 Plus","1270","50"],["Замена корпуса в сборе","iPhone 6 Plus","1990","60"],["Замена микрофона","iPhone 6 Plus","1350","60"],["Замена разъема зарядки/гарнитуры","iPhone 6 Plus","1250","40"],["Замена шлейфа","iPhone 6 Plus","1300","45"],["Программный ремонт/Обновление ПО","iPhone 6 Plus","900","60"],["Ремонт кнопки Home","iPhone 6 Plus","1200","30"],["Технически сложный ремонт","iPhone 6 Plus","900","60"],["Восстановление после попадания воды","iPhone 6S","750","30"],["Замена аккумулятора","iPhone 6S","1150","25"],["Замена датчика приближения","iPhone 6S","1070","30"],["Замена динамика/звонка","iPhone 6S","1000","40"],["Замена дисплея","iPhone 6S","2100","30"],["Замена задней крышки","iPhone 6S","1990","55"],["Замена основной камеры","iPhone 6S","1850","45"],["Замена передней камеры(Себяшки)","iPhone 6S","1310","30"],["Замена кнопки включения","iPhone 6S","1220","50"],["Замена корпуса в сборе","iPhone 6S","1990","60"],["Замена микрофона","iPhone 6S","1365","60"],["Замена разъема зарядки/гарнитуры","iPhone 6S","1290","40"],["Замена шлейфа","iPhone 6S","1350","45"],["Программный ремонт/Обновление ПО","iPhone 6S","1000","60"],["Ремонт кнопки Home","iPhone 6S","1220","30"],["Технически сложный ремонт","iPhone 6S","900","60"],["Восстановление после попадания воды","iPhone 6S Plus","800","30"],["Замена аккумулятора","iPhone 6S Plus","1300","25"],["Замена датчика приближения","iPhone 6S Plus","1020","30"],["Замена динамика/звонка","iPhone 6S Plus","1000","40"],["Замена дисплея","iPhone 6S Plus","2360","30"],["Замена задней крышки","iPhone 6S Plus","2150","55"],["Замена основной камеры","iPhone 6S Plus","2120","45"],["Замена передней камеры(Себяшки)","iPhone 6S Plus","1360","30"],["Замена кнопки включения","iPhone 6S Plus","1300","50"],["Замена корпуса в сборе","iPhone 6S Plus","2150","60"],["Замена микрофона","iPhone 6S Plus","1470","60"],["Замена разъема зарядки/гарнитуры","iPhone 6S Plus","1350","40"],["Замена шлейфа","iPhone 6S Plus","1430","45"],["Программный ремонт/Обновление ПО","iPhone 6S Plus","1000","60"],["Ремонт кнопки Home","iPhone 6S Plus","1270","30"],["Технически сложный ремонт","iPhone 6S Plus","900","60"],["Восстановление после попадания воды","iPhone 7","800","30"],["Замена аккумулятора","iPhone 7","1500","25"],["Замена датчика приближения","iPhone 7","1420","30"],["Замена динамика/звонка","iPhone 7","1100","40"],["Замена дисплея","iPhone 7","2150","30"],["Замена задней крышки","iPhone 7","2050","60"],["Замена основной камеры","iPhone 7","3250","45"],["Замена передней камеры(Себяшки)","iPhone 7","1650","35"],["Замена кнопки включения","iPhone 7","1420","50"],["Замена корпуса в сборе","iPhone 7","2200","60"],["Замена микрофона","iPhone 7","1630","60"],["Замена разъема зарядки/гарнитуры","iPhone 7","1650","50"],["Замена шлейфа","iPhone 7","1500","45"],["Программный ремонт/Обновление ПО","iPhone 7","1000","60"],["Ремонт кнопки Home","iPhone 7","1700","30"],["Технически сложный ремонт","iPhone 7","1200","60"],["Восстановление после попадания воды","iPhone 7 Plus","800","30"],["Замена аккумулятора","iPhone 7 Plus","1750","25"],["Замена датчика приближения","iPhone 7 Plus","1580","30"],["Замена динамика/звонка","iPhone 7 Plus","1100","40"],["Замена дисплея","iPhone 7 Plus","2430","30"],["Замена задней крышки","iPhone 7 Plus","2100","60"],["Замена основной камеры","iPhone 7 Plus","7250","45"],["Замена передней камеры(Себяшки)","iPhone 7 Plus","1750","35"],["Замена кнопки включения","iPhone 7 Plus","1450","50"],["Замена корпуса в сборе","iPhone 7 Plus","2250","60"],["Замена микрофона","iPhone 7 Plus","1710","60"],["Замена разъема зарядки/гарнитуры","iPhone 7 Plus","1770","50"],["Замена шлейфа","iPhone 7 Plus","1550","45"],["Программный ремонт/Обновление ПО","iPhone 7 Plus","1000","75"],["Ремонт кнопки Home","iPhone 7 Plus","1700","30"],["Технически сложный ремонт","iPhone 7 Plus","1200","60"],["Восстановление после попадания воды","iPhone 8","800","30"],["Замена аккумулятора","iPhone 8","1750","25"],["Замена датчика приближения","iPhone 8","1590","30"],["Замена динамика/звонка","iPhone 8","1150","40"],["Замена дисплея","iPhone 8","2350","30"],["Замена задней крышки","iPhone 8","2200","60"],["Замена основной камеры","iPhone 8","5990","45"],["Замена передней камеры(Себяшки)","iPhone 8","1780","35"],["Замена кнопки включения","iPhone 8","1550","50"],["Замена корпуса в сборе","iPhone 8","2850","60"],["Замена микрофона","iPhone 8","1760","60"],["Замена разъема зарядки/гарнитуры","iPhone 8","1820","50"],["Замена шлейфа","iPhone 8","1600","45"],["Программный ремонт/Обновление ПО","iPhone 8","1000","75"],["Ремонт кнопки Home","iPhone 8","1700","30"],["Технически сложный ремонт","iPhone 8","1300","60"],["Восстановление после попадания воды","iPhone 8 Plus","800","30"],["Замена аккумулятора","iPhone 8 Plus","1800","25"],["Замена датчика приближения","iPhone 8 Plus","1630","30"],["Замена динамика/звонка","iPhone 8 Plus","1200","40"],["Замена дисплея","iPhone 8 Plus","2500","30"],["Замена задней крышки","iPhone 8 Plus","2450","60"],["Замена основной камеры","iPhone 8 Plus","6250","45"],["Замена передней камеры(Себяшки)","iPhone 8 Plus","1850","35"],["Замена кнопки включения","iPhone 8 Plus","1600","50"],["Замена корпуса в сборе","iPhone 8 Plus","2900","60"],["Замена микрофона","iPhone 8 Plus","1795","60"],["Замена разъема зарядки/гарнитуры","iPhone 8 Plus","1840","50"],["Замена шлейфа","iPhone 8 Plus","1650","45"],["Программный ремонт/Обновление ПО","iPhone 8 Plus","1000","75"],["Ремонт кнопки Home","iPhone 8 Plus","1700","30"],["Технически сложный ремонт","iPhone 8 Plus","1300","60"],["Восстановление после попадания воды","iPhone X","1200","30"],["Замена аккумулятора","iPhone X","2100","40"],["Замена датчика приближения","iPhone X","1700","40"],["Замена динамика/звонка","iPhone X","1250","40"],["Замена дисплея","iPhone X","7500","40"],["Замена задней крышки","iPhone X","2500","120"],["Замена основной камеры","iPhone X","5200","60"],["Замена передней камеры(Себяшки)","iPhone X","1900","50"],["Замена кнопки включения","iPhone X","2150","60"],["Замена корпуса в сборе","iPhone X","3800","90"],["Замена микрофона","iPhone X","1830","60"],["Замена разъема зарядки/гарнитуры","iPhone X","1920","70"],["Замена шлейфа","iPhone X","1750","55"],["Программный ремонт/Обновление ПО","iPhone X","1000","75"],["Технически сложный ремонт","iPhone X","1500","60"],["Восстановление после попадания воды","iPhone Xr","1200","30"],["Замена аккумулятора","iPhone Xr","2250","40"],["Замена датчика приближения","iPhone Xr","1800","40"],["Замена динамика/звонка","iPhone Xr","1300","40"],["Замена дисплея","iPhone Xr","6500","40"],["Замена задней крышки","iPhone Xr","3100","120"],["Замена основной камеры","iPhone Xr","4350","60"],["Замена передней камеры(Себяшки)","iPhone Xr","1950","50"],["Замена кнопки включения","iPhone Xr","2250","60"],["Замена корпуса в сборе","iPhone Xr","4500","90"],["Замена микрофона","iPhone Xr","1950","60"],["Замена разъема зарядки/гарнитуры","iPhone Xr","1990","70"],["Замена шлейфа","iPhone Xr","1880","55"],["Программный ремонт/Обновление ПО","iPhone Xr","1000","75"],["Технически сложный ремонт","iPhone Xr","1500","60"],["Восстановление после попадания воды","iPhone Xs","1200","30"],["Замена аккумулятора","iPhone Xs","2500","40"],["Замена датчика приближения","iPhone Xs","1850","40"],["Замена динамика/звонка","iPhone Xs","1400","40"],["Замена дисплея","iPhone Xs","8600","40"],["Замена задней крышки","iPhone Xs","3200","120"],["Замена основной камеры","iPhone Xs","5800","60"],["Замена передней камеры(Себяшки)","iPhone Xs","2100","50"],["Замена кнопки включения","iPhone Xs","2370","60"],["Замена корпуса в сборе","iPhone Xs","5000","90"],["Замена микрофона","iPhone Xs","1995","60"],["Замена разъема зарядки/гарнитуры","iPhone Xs","2100","70"],["Замена шлейфа","iPhone Xs","1990","55"],["Программный ремонт/Обновление ПО","iPhone Xs","1000","75"],["Технически сложный ремонт","iPhone Xs","1700","60"],["Восстановление после попадания воды","iPhone Xs Max","1200","30"],["Замена аккумулятора","iPhone Xs Max","2700","40"],["Замена датчика приближения","iPhone Xs Max","1860","40"],["Замена динамика/звонка","iPhone Xs Max","1450","40"],["Замена дисплея","iPhone Xs Max","18400","40"],["Замена задней крышки","iPhone Xs Max","3200","120"],["Замена основной камеры","iPhone Xs Max","6200","60"],["Замена передней камеры(Себяшки)","iPhone Xs Max","2450","50"],["Замена кнопки включения","iPhone Xs Max","2550","60"],["Замена корпуса в сборе","iPhone Xs Max","5300","90"],["Замена микрофона","iPhone Xs Max","2130","60"],["Замена разъема зарядки/гарнитуры","iPhone Xs Max","2230","70"],["Замена шлейфа","iPhone Xs Max","2020","55"],["Программный ремонт/Обновление ПО","iPhone Xs Max","1000","75"],["Технически сложный ремонт","iPhone Xs Max","1750","60"],["Восстановление после попадания воды","iPhone 11","1200","30"],["Замена аккумулятора","iPhone 11","5500","40"],["Замена датчика приближения","iPhone 11","3600","40"],["Замена динамика/звонка","iPhone 11","1800","40"],["Замена дисплея","iPhone 11","10500","45"],["Замена задней крышки","iPhone 11","3900","120"],["Замена основной камеры","iPhone 11","9000","60"],["Замена передней камеры(Себяшки)","iPhone 11","2050","60"],["Замена кнопки включения","iPhone 11","4990","60"],["Замена корпуса в сборе","iPhone 11","9000","90"],["Замена микрофона","iPhone 11","2700","60"],["Замена разъема зарядки/гарнитуры","iPhone 11","2450","70"],["Замена шлейфа","iPhone 11","2300","70"],["Программный ремонт/Обновление ПО","iPhone 11","1000","80"],["Технически сложный ремонт","iPhone 11","1800","60"],["Восстановление после попадания воды","iPhone 11 Pro","1200","30"],["Замена аккумулятора","iPhone 11 Pro","7000","40"],["Замена датчика приближения","iPhone 11 Pro","3800","40"],["Замена динамика/звонка","iPhone 11 Pro","1900","40"],["Замена дисплея","iPhone 11 Pro","31000","45"],["Замена задней крышки","iPhone 11 Pro","4500","120"],["Замена основной камеры","iPhone 11 Pro","10500","60"],["Замена передней камеры(Себяшки)","iPhone 11 Pro","2150","60"],["Замена кнопки включения","iPhone 11 Pro","5150","60"],["Замена корпуса в сборе","iPhone 11 Pro","9900","90"],["Замена микрофона","iPhone 11 Pro","3150","60"],["Замена разъема зарядки/гарнитуры","iPhone 11 Pro","2700","70"],["Замена шлейфа","iPhone 11 Pro","2550","70"],["Программный ремонт/Обновление ПО","iPhone 11 Pro","1000","80"],["Технически сложный ремонт","iPhone 11 Pro","1800","60"],["Восстановление после попадания воды","iPhone 11 Pro Max","1200","30"],["Замена аккумулятора","iPhone 11 Pro Max","7500","40"],["Замена датчика приближения","iPhone 11 Pro Max","4300","40"],["Замена динамика/звонка","iPhone 11 Pro Max","1950","40"],["Замена дисплея","iPhone 11 Pro Max","31500","45"],["Замена задней крышки","iPhone 11 Pro Max","4500","120"],["Замена основной камеры","iPhone 11 Pro Max","11500","60"],["Замена передней камеры(Себяшки)","iPhone 11 Pro Max","2700","60"],["Замена кнопки включения","iPhone 11 Pro Max","5570","60"],["Замена корпуса в сборе","iPhone 11 Pro Max","11000","90"],["Замена микрофона","iPhone 11 Pro Max","500","60"],["Замена разъема зарядки/гарнитуры","iPhone 11 Pro Max","3150","70"],["Замена шлейфа","iPhone 11 Pro Max","2800","70"],["Программный ремонт/Обновление ПО","iPhone 11 Pro Max","1000","60"],["Технически сложный ремонт","iPhone 11 Pro Max","1900","60"],["Восстановление после попадания воды","iPhone SE","700","30"],["Замена аккумулятора","iPhone SE","1100","40"],["Замена датчика приближения","iPhone SE","920","30"],["Замена динамика/звонка","iPhone SE","850","40"],["Замена дисплея","iPhone SE","1500","20"],["Замена задней крышки","iPhone SE","1500","55"],["Замена основной камеры","iPhone SE","1450","40"],["Замена передней камеры(Себяшки)","iPhone SE","1090","30"],["Замена кнопки включения","iPhone SE","1100","50"],["Замена корпуса в сборе","iPhone SE","1800","90"],["Замена микрофона","iPhone SE","1200","60"],["Замена разъема зарядки/гарнитуры","iPhone SE","1150","40"],["Замена шлейфа","iPhone SE","990","45"],["Программный ремонт/Обновление ПО","iPhone SE","1000","60"],["Ремонт кнопки Home","iPhone SE","1050","30"],["Технически сложный ремонт","iPhone SE","800","60"],];

let priceServicePhoneDefault = [["Диагностика","от 150","от 2 ч до 1 дня"],["Замена камеры","от 700","от 6 ч до 1 дня"],["Замена микрофона/динамика/звонка","от 700","от 2 ч до 1 дня"],["Замена аккумулятора","от 600","от 2 ч до 1 дня"],["Восстановление после попадания воды","от 550","от 2 ч до 1 дня"],["Замена кнопки включения","от 700","от 2 ч до 1 дня"],["Замена задней крышки/корпуса в сборе","от 600","от 2 ч до 1 дня"],["Замена разъема питания/гарнитуры","от 700","от 2 ч до 1 дня"],["Замена шлейфа/кнопки home","от 700","от 2 ч до 1 дня"],["Программный ремонт/Обновление ПО/Разблокировка","от 500","от 2 ч до 1 дня"],["Технически сложный ремонт","от 1200","от 2 ч до 1 дня"],["Замена стекла (touch screen)","от 700","от 2 ч до 1 дня"]];

let priceServiceLaptopDefault = [["Чистка ноутбука","от 500","от 5 ч до 2 дней"],["Замена камеры","от 700","от 6 ч до 1 дня"],["Восстановление после падения","от 1200","от 5 ч до 2 дней"],["Восстановление после воды, падения","от 1000","от 5 ч до 2 дней"],["Замена видеокарты","от 1500","от 5 ч до 2 дней"],["Ремонт видеокарты","от 1500","от 5 ч до 2 дней"],["Ремонт платы","от 1200","от 5 ч до 2 дней"],["Диагностика","от 500","5 ч до 2 дней"],["Замена матрицы ноутбука","от 700","от 5 ч до 2 дней"],["Замена разъемов","от 900","от 5 ч до 2 дней"],["Замена разъема зарядки/usb","от 950","от 5 ч до 2 дней"],["Ремонт клавиатуры","от 1200","от 5 ч до 2 дней"],["Замена клавиатуры","от 700","от 5 ч до 2 дней"]];

let priceServiceTabletDefault = [["Программный ремонт/Обновление ПО/Разблокировка","от 850","от 6 ч до 2 дней"],["Замена шлейфа/кнопки home","от 1190","от 6 ч до 2 дней"],["Замена стекла (touch screen)","от 1190","от 6 ч до 2 дней"],["Замена разъема питания/гарнитуры","от 1190","от 6 ч до 2 дней"],["Замена кнопки включения","от 1360","от 6 ч до 2 дней"],["Замена задней крышки/корпуса в сборе","от 1020","от 6 ч до 2 дней"],["Технически сложный ремонт","от 2040","от 6 ч до 2 дней"],["Диагностика","от 255","от 6 ч до 2 дней"],["Восстановление после попадания воды","от 935","от 6 ч до 2 дней"],["Замена аккумулятора","от 1020","от 6 ч до 2 дней"],["Замена микрофона/динамика/звонка","от 1190","от 6 ч до 2 дней"],["Замена камеры","от 1190","от 6 ч до 2 дней"]];



$(document).ready( function () {
  let ua = window.navigator.userAgent;
  let msie = ua.indexOf("MSIE ");
  let heightModel = '';
  let modelWindow_check = '';
  let priceDevice_check = 'Телефон';
  let priceModel_check = '';
  let price_check = '';
  let model_check = false;
  let metrika_chek = '';

  let nodeJob_status = '';

  const btnPrevNavBar = $("#carouselLeftNavBarMobile");
  const btnNextNavBar = $("#carouselRightNavBarMobile");

  let valNavBar = 1;
  btnNextNavBar.click(function(){

    valNavBar++;

    if(valNavBar <= 3){
      $(".navBar > ul > li").css({
        "display" : "none",
      });
      $(".navBar > ul > li:nth-of-type("+valNavBar+")").css({
        "display" : "grid",
      });
    }
    else{
      valNavBar--;
    }

  });
  btnPrevNavBar.click(function(){

    valNavBar--;

    if(valNavBar >= 1){
      $(".navBar > ul > li").css({
        "display" : "none",
      });
      $(".navBar > ul > li:nth-of-type("+valNavBar+")").css({
        "display" : "grid",
      });
    }
    else{
      valNavBar++;
    }

  });

  function deviceSelectedActions(typedevice){
    switch (typedevice) {
      case "Телефон":
        $('.deviceSelectedImages').removeClass('deviceSelectedImagesActive');
        $('.deviceSelectedPhone').addClass('deviceSelectedImagesActive');
        break;
      case "Ноутбук":
        $('.deviceSelectedImages').removeClass('deviceSelectedImagesActive');
        $('.deviceSelectedLaptop').addClass('deviceSelectedImagesActive');
        break;
      case "Планшет":
        $('.deviceSelectedImages').removeClass('deviceSelectedImagesActive');
        $('.deviceSelectedTablet').addClass('deviceSelectedImagesActive');
        break;
      default:
        return false;
    }
  }
  function addPriceService(array){
    $('.priceMainContent section').empty();
    if (priceDevice_check == 'Планшет' || priceDevice_check == 'Ноутбук' || (priceDevice_check == 'Телефон' && priceModel_check == '')) {
      array.forEach((item, i) => {
        $('.priceMainContent section').append('<div class="priceBox"><span class="titlePriceBox">'+item[0]+'</span>'+'<span class="dedlaine">'+item[2]+'</span>'+'<span class="price">'+item[1]+' ₽</span></div>');
      });
    }
    else{
      array.forEach((item, i) => {

        if (item[1] == priceModel_check) {
          if (item[0] == 'Восстановление после попадания воды') {
            $('.priceMainContent section').append('<div class="priceBox"><span class="titlePriceBox">'+item[0]+'</span>'+'<span class="dedlaine">'+item[3]+' минут</span>'+'<span class="price">От '+(+item[2]+500)+' ₽</span></div>');
            return;
          }
          $('.priceMainContent section').append('<div class="priceBox"><span class="titlePriceBox">'+item[0]+'</span>'+'<span class="dedlaine">'+item[3]+' минут</span>'+'<span class="price">От '+(+item[2]+500)+' ₽</span></div>');
        }
      });
    }
  }
  function sendAjaxForm(url) {
      $.ajax({
          url:     url, //url страницы (action_ajax_form.php)
          type:     "POST", //метод отправки
          dataType: "html", //формат данных
          data: "name="+$("#firstNameId").val()+" "+$("#nameId").val()+" "+$("#lastNameId").val()+"&tel="+$("#telId").val()+"&nodeJob="+nodeJob_status+"&desp="+$("#descId").val()+"&type="+priceDevice_check+"&brand=Apple&model="+priceModel_check+"&service="+$("#service_title").text()+"&priceService="+price_check,  // Сеарилизуем объект
          success: function() { //Данные отправлены успешно
            priceModel_check='';
            $('.modelCheck').text('Модель не выбрана');
            switch (metrika_chek) {
              case 'click_perezvonit':
                ym(67091065,'reachGoal','otpravka_perezvonit');
                break;
              case 'zakazat_remont':
                ym(67091065,'reachGoal','zakazat_remont_otpravlen');
                break;
              case 'zakaz_uslugi':
                ym(67091065,'reachGoal','zakaz_uslugi_otpravlen');
                break;
              case 'razbor_otpravlen':
                ym(67091065,'reachGoal','razbor_otpravlen');
                break;
              default:
                return false;
            }
            $('.popup-fade').fadeIn(200);
            $('.popup').hide();
            $('.popup_success').fadeIn(200);
        },
        error: function(response) { // Данные не отправлены
          alert("Что то пошло не так, повторите попытку позже");
        }
    });
  }
  function sendAjaxFormConsult(url, name, tel) {
      $.ajax({
          url:     url, //url страницы (action_ajax_form.php)
          type:     "POST", //метод отправки
          dataType: "html", //формат данных
          data: "name="+name+"&tel="+tel+"&brand=Apple&nodeJob="+nodeJob_status,  // Сеарилизуем объект
          success: function(data) { //Данные отправлены успешно
            priceModel_check='';
            $('.modelCheck').text('Модель не выбрана');
            switch (metrika_chek) {
              case 'zaberem_iz_doma':
                ym(67091065,'reachGoal','otpravka_perezvonit');
                break;
              case 'konsultacia':
                ym(67091065,'reachGoal','zakazat_remont_otpravlen');
                break;
              default:
                return false;
            }
            $('.popup').hide();
            $('.popup_success').fadeIn();
        		$('.popup-fade').fadeIn(100);
            $('input[name=homeOrderFormTel]').val("");
            $('input[name=homeOrderFormName]').val("");
            someFunction( data );
            return data;

        },
        error: function(response) { // Данные не отправлены
          alert("Что то пошло не так, повторите попытку позже");
        }
    });
  }
 function someFunction(data) {
   $(".menu").text(data);
 }


  arrayModel.forEach((item, i) => {
    $('.modelMainContent section').append('<div class="modelBox"><span class="titleModelBox">'+item[1]+'</span>'+'<img src="img/iphone/apple/'+item[1].trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-")+'.png" class="img_modelBox"></div>');
  });



  addPriceService(priceServicePhoneDefault);


    $(".modelBox").mouseenter(function(){
    if(!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) || !(window.matchMedia('(max-width: 860px)').matches)){
      $(this).children(".img_modelBox").animate({
  	      "margin-bottom": "10px", // высота элемента
  	   }, 200);
     }
    });
    $(".modelBox").mouseleave(function(){
      if(!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) || !(window.matchMedia('(max-width: 860px)').matches)){
      $(this).children(".img_modelBox").animate({
  	      "margin-bottom": "-30px", // высота элемента
  	   }, 200);
     }
    });

    $(window).scroll(function(){
      if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.matchMedia('(max-width: 860px)').matches){
        if($(window).scrollTop() > 200){
          $('.headerTop').css({
            "grid-template-rows" : "40px 1fr auto",
          });
        }
        else{
          $('.headerTop').css({
            "grid-template-rows" : "60px 1fr auto",
          });
        }
      }
    });


  $(window).resize(function() {
    if($(".bg_navBar").width() > 426){
      $(".navBar > ul > li").css({
        "display" : "grid",
      });
    }
    if($(".bg_navBar").width() < 426){
      $(".navBar > ul > li").css({
        "display" : "none",
      });
      $(".navBar > ul > li:nth-of-type(1)").css({
        "display" : "grid",
      });
    }
  });

  $('.collapseMenu').click(function(){
    if($('.menu').css('display') == 'grid'){
      $('.menu').hide(400);
    }
    else if($('.menu').css('display') == 'none'){

        $('.menu').show(400, function(){
          $('.menu').css({
            'display': 'grid'
          });
        });
    }
  });

  $('.collapseContact').click(function(){
    if($('.contact').css('display') == 'grid'){
      $('.contact').hide(400);
    }
    else if($('.contact').css('display') == 'none'){
        $('.contact').show({
          duration: 400,
          options: "start",
          complete: function(){
            $('.contact').css({
              'display': 'grid'
            });
          }});
    }});

    $('input[name=homeOrderFormTel]').inputmask("+7(999)999-9999");
    $('input[name=homeOrderFormSubmit]').click(
      function() {
        if ($(this).attr('id') == 'homeOrderFormSubmitId homeOrderFormSubmit1') {
          nodeJob_status = 'Забрать у клиента';
          metrika_chek = 'zaberem_iz_doma';
        }
        else if($(this).attr('id') == 'homeOrderFormSubmitId homeOrderFormSubmit2') {
          nodeJob_status = 'Консультация';
          metrika_chek = 'konsultacia';
        }
        let valtel = $(this).siblings('input[name=homeOrderFormTel]').val();
        let valName = $(this).siblings('input[name=homeOrderFormName]').val();
        let reges = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;

        if(valName.length >= 1 && reges.test(valtel)){
          sendAjaxFormConsult('obrabotchik.php', valName, valtel);
        }

        if(valName.length < 1){
          $(this).siblings('input[name=homeOrderFormName]').css({"border" : " 1px solid red",});
        }
        else{
          $(this).siblings('input[name=homeOrderFormName]').css({"border" : "none"});
        }

        if(!(reges.test(valtel))){
          $(this).siblings('input[name=homeOrderFormTel]').css({"border" : " 1px solid red",});
        }
        else{
          $(this).siblings('input[name=homeOrderFormTel]').css({"border" : "none"});
        }
      }
    );

    $('#telId').inputmask("+7(999)999-9999");
    $("#btnSend").click(
      function(){
        let valName = $('#nameId').val();
        let valFirstName = $('#firstNameId').val();
        let valtel = $('#telId').val();
        let valDataProcessing = $('#dataProcessingId').val();
        let reges = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;

        if(valName.length >= 1 && reges.test(valtel) && $('#dataProcessingId').is(":checked") && valFirstName.length >= 1){
          sendAjaxForm('obrabotchik.php');
        }

        if(valName.length < 1){
          $('#nameId').css({"border-color" : "red"});
        }
        else{
          $('#nameId').css({"border-color" : "#BDBDBD"});
        }

        if(valFirstName.length < 1){
          $('#firstNameId').css({"border-color" : "red"});
        }
        else{
          $('#firstNameId').css({"border-color" : "#BDBDBD"});
        }

        if(!(reges.test(valtel))){
          $('#telId').css({"border-color" : "red"});
        }
        else{
          $('#telId').css({"border-color" : "#BDBDBD"});
        }

        if(!($('#dataProcessingId').is(":checked"))){
          $('#dataProcessingId + label').css({"color" : "red"});
        }
        else{
          $('#dataProcessingId + label').css({"color" : "#BDBDBD"});
        }
        return false;
      }
    );

    $('.deviceSelectedImages').click(function() {
      switch($(this).attr('id')) {
        case 'deviceSelectedPhoneId':
          priceDevice_check = 'Телефон';
          deviceSelectedActions(priceDevice_check);
          if (priceModel_check != '') {
            addPriceService(priceService);
            $('.modelCheck').text(priceModel_check);
            break
          }
          addPriceService(priceServicePhoneDefault);
          $('.modelCheck').text('Модель не выбрана');
          break
        case 'deviceSelectedLaptopId':
          priceDevice_check = 'Ноутбук';
          addPriceService(priceServiceLaptopDefault);
          deviceSelectedActions(priceDevice_check);
          $('.modelCheck').text('Модель не выбрана');
          break
        case 'deviceSelectedTabletId':
          priceDevice_check = 'Планшет';
          addPriceService(priceServiceTabletDefault);
          deviceSelectedActions(priceDevice_check);
          $('.modelCheck').text('Модель не выбрана');
          break
        default:
          return false;
      }
    });

    $(".modelBox").click(function(){
      priceModel_check = $(this).children('.titleModelBox').text();
      $('.modelCheck').text(priceModel_check);

      arrayModel.forEach((item, i) => {
        if (item[1] == priceModel_check) {
          priceDevice_check = item[0];
        }
      });
      addPriceService(priceService);
      deviceSelectedActions(priceDevice_check);
      let titleModel = $(this).children(".titleModelBox").text().trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
      location.href = '#priceMainContentHref';
      location.href = '#model-'+titleModel;
    });

    $(document).on("click", ".searchModelItem", function(){
      priceModel_check = $(this).text();
      $('.modelCheck').text(priceModel_check);

      arrayModel.forEach((item) => {
          if (item[1] == priceModel_check) {
              priceDevice_check = item[0];
          }
      });

      addPriceService(priceService);

      deviceSelectedActions(priceDevice_check);

      let titleModel = $(this).text().trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");

      location.href = '#priceMainContentHref';
      location.href = '#model-'+titleModel;
      $("#js-search").val("");
      $(".searchModelItems").slideUp();
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 800){
          $('#upPage').fadeIn(200);
        }
        else if($(window).scrollTop() <= 800){
          $('#upPage').hide(200);
        }
    });

    $('#upPage').click(function() {
  		$('html, body').animate({scrollTop: 0},200);
  		return false;
  	})

    $(document).on("click", '#order, .titleInfoBoxDestroy, .priceBox, .contact', function() {
      switch($(this).attr('class')) {
        case 'orderSubmit':
          ym(67091065,'reachGoal','zakazat_remont');
          metrika_chek = 'zakazat_remont';
          nodeJob_status = 'Заявка на ремонт';
          $('.popup_form_input_desc').css({'display' : 'flex'});
          modelWindow_check = '.popup_form_input_desc';
          break;

        case 'titleInfoBoxDestroy':
          metrika_chek = 'razbor_otpravlen';
          nodeJob_status = 'Заявка на разбор телефона';
          $('.popup_form_dropdown_loyaut').css({'display' : 'grid'});
          modelWindow_check = '.popup_form_dropdown_loyaut';
          break;

        case 'priceBox':
          ym(67091065,'reachGoal','zakaz_uslugi');
          metrika_chek = 'zakaz_uslugi';
          nodeJob_status = 'Заявка на ремонт';
          $('.popup_form_service_loyaut').css({'display' : 'flex'});
          $('#service_title').append($(this).children(".titlePriceBox").text());
          if (priceModel_check == '') {
            $('#service_device_device').append(priceDevice_check+', ');
          }
          else {
            $('#service_device_device').append(priceModel_check+', ');
          }
          $('#service_device_cost').append($(this).children(".price").text());
          modelWindow_check = '.popup_form_service_loyaut';
          price_check = $(this).children('.price').text();
          break;

        case 'contact':
          ym(67091065,'reachGoal','click_perezvonit');
          metrika_chek = 'click_perezvonit';
          nodeJob_status = 'Консультация';
          break;

        default:
          return false;
      }
      $('.popup').fadeIn();
      $('.popup_success').hide();
  		$('.popup-fade').fadeIn(100);
  		return false;
    });
    // Клик по ссылке "Закрыть".
    $('.closes').click(function() {
      $(modelWindow_check).hide();
      $(this).parents('.popup-fade').fadeOut(100);
      $('#service_title').empty();
      $('#service_device_device').empty();
      $('#service_device_cost').empty();
      modelWindow_check='';
      price_check='';
      return false;
    });
    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $('.popup-fade').fadeOut(100);
        $(modelWindow_check).hide();
        $('#service_title').empty();
        $('#service_device_device').empty();
        $('#service_device_cost').empty();
        modelWindow_check='';
        price_check='';
      }

    });
    // Клик по фону, но не по окну.
    $('.popup-fade').click(function(e) {
      if ($(e.target).closest('.popup').length == 0 && $(e.target).closest('.popup_success').length == 0) {
        $(this).fadeOut(100);
        $(modelWindow_check).hide();
        $('#service_title').empty();
        $('#service_device_device').empty();
        $('#service_device_cost').empty();
        modelWindow_check='';
        price_check='';
      }
    });
    $('select[name=device]').change(function() {
      $('select[name=model]').empty();
      $('select[name=model]').append('<option selected disabled >-</option>');
      let items = $(this).val();
      arrayModel.forEach((item, i) => {
        if (item[0] == items) {
          $('select[name=model]').append('<option value="'+item[1]+'">'+item[1]+'</option>')
        }
      });
      priceDevice_check = $(this).val();
    });
    $('select[name=model]').change(function() {
      priceModel_check = $(this).val();
    });

    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            variableWidth: true
          }
        },
      ]
    });

    $('.sliderNavBar').slick({
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.trackComment').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1330,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


});
