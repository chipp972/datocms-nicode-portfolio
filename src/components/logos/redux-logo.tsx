import React from 'react';
import clsx from 'clsx';
import css from './logos.module.sass';

export const ReduxLogo: React.FC<SvgProps> = ({ size = 25, className, style }) => (
  <svg
    style={style}
    width={size * 2.5}
    height={size * 2.5}
    viewBox="0 0 2500 2500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={clsx(className, css.redux)}>
    <circle cx="1250" cy="1250" r="1250" fill="#212126" />
    <path
      d="M1554.76 1462.55C1613.01 1456.52 1657.2 1406.31 1655.19 1346.04C1653.19 1285.78 1602.97 1237.57 1542.7 1237.57H1538.69C1476.42 1239.58 1428.21 1291.81 1430.21 1354.08C1432.22 1384.21 1444.28 1410.32 1462.35 1428.4C1394.06 1562.99 1289.6 1661.42 1132.92 1743.78C1026.46 1800.02 915.974 1820.11 805.493 1806.05C715.099 1793.99 644.793 1753.82 600.601 1687.53C536.321 1589.1 530.294 1482.64 584.531 1376.17C622.697 1299.84 682.959 1243.6 721.126 1215.47C713.091 1189.36 701.038 1145.17 695.012 1113.03C403.743 1323.95 433.874 1609.19 522.259 1743.78C588.548 1844.21 723.134 1906.48 871.782 1906.48C911.957 1906.48 952.132 1902.47 992.307 1892.42C1249.43 1842.2 1444.28 1689.54 1554.76 1462.55V1462.55Z"
      fill="#764ABC"
    />
    <path
      d="M1908.34 1213.48C1755.68 1034.7 1530.7 936.271 1273.58 936.271H1241.44C1223.36 900.113 1185.19 876.008 1143.01 876.008H1138.99C1076.72 878.017 1028.51 930.244 1030.52 992.516C1032.53 1052.78 1082.75 1100.99 1143.01 1100.99H1147.03C1191.22 1098.98 1229.39 1070.86 1245.46 1032.69H1281.61C1434.28 1032.69 1578.91 1076.88 1709.48 1163.26C1809.91 1229.55 1882.23 1315.92 1922.4 1420.38C1956.55 1504.75 1954.54 1587.11 1918.39 1657.41C1862.14 1763.88 1767.73 1822.13 1643.19 1822.13C1562.84 1822.13 1486.51 1798.02 1446.33 1779.95C1424.23 1800.03 1384.06 1832.17 1355.94 1852.26C1442.31 1892.44 1530.7 1914.53 1615.07 1914.53C1807.91 1914.53 1950.53 1808.07 2004.76 1701.6C2063.02 1585.1 2059 1384.22 1908.34 1213.48Z"
      fill="#764ABC"
    />
    <path
      d="M887.8 1496.7C889.809 1556.97 940.027 1605.18 1000.29 1605.18H1004.31C1066.58 1603.17 1114.79 1550.94 1112.78 1488.67C1110.77 1428.41 1060.55 1380.2 1000.29 1380.2H996.272C992.255 1380.2 986.228 1380.2 982.211 1382.21C899.852 1245.61 865.704 1096.96 877.756 936.265C885.791 815.74 925.966 711.285 996.272 624.909C1054.53 550.586 1167.02 514.428 1243.35 512.42C1456.28 508.402 1546.67 773.557 1552.7 880.02C1578.81 886.046 1623 900.107 1653.13 910.151C1629.03 584.735 1428.15 416 1235.31 416C1054.53 416 887.8 546.568 821.511 739.408C729.109 996.527 789.371 1243.6 901.861 1438.45C891.817 1452.51 885.791 1474.61 887.8 1496.7V1496.7Z"
      fill="#764ABC"
    />
  </svg>
);