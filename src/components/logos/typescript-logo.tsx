import React from 'react';
import clsx from 'clsx';
import css from './logos.module.sass';

export const TypescriptLogo: React.FC<SvgProps> = ({ size = 25, className, style }) => (
  <svg
    style={style}
    width={size * 2.5}
    height={size * 2.5}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2500 2500"
    fill="none"
    className={clsx(css.typescript, className)}>
    <circle cx="1250" cy="1250" r="1250" fill="#3178C6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M556.25 508H1943.75C1974.82 508 2000 532.901 2000 563.618V1935.53C2000 1966.24 1974.82 1991.14 1943.75 1991.14H556.25C525.184 1991.14 500 1966.24 500 1935.53V563.618C500 532.901 525.184 508 556.25 508V508ZM1333.84 1297.06V1175.42H799.999V1297.06H990.59V1838.67H1142.32V1297.06H1333.84ZM1394.33 1824.37C1418.8 1836.7 1447.73 1845.95 1481.14 1852.12C1514.55 1858.28 1549.76 1861.37 1586.77 1861.37C1622.85 1861.37 1657.11 1857.98 1689.58 1851.19C1722.05 1844.41 1750.51 1833.23 1774.98 1817.66C1799.44 1802.08 1818.82 1781.74 1833.09 1756.6C1847.36 1731.47 1854.5 1700.4 1854.5 1663.4C1854.5 1636.57 1850.42 1613.06 1842.26 1592.86C1834.11 1572.66 1822.35 1554.7 1806.97 1538.97C1791.61 1523.25 1773.18 1509.14 1751.69 1496.65C1730.2 1484.17 1705.97 1472.37 1679 1461.27C1659.23 1453.25 1641.51 1445.46 1625.83 1437.91C1610.14 1430.36 1596.81 1422.64 1585.83 1414.78C1574.85 1406.92 1566.39 1398.59 1560.42 1389.8C1554.46 1381.02 1551.49 1371.07 1551.49 1359.97C1551.49 1349.79 1554.15 1340.62 1559.48 1332.45C1564.82 1324.28 1572.34 1317.26 1582.07 1311.4C1591.79 1305.54 1603.71 1301 1617.83 1297.76C1631.94 1294.52 1647.63 1292.9 1664.88 1292.9C1677.43 1292.9 1690.68 1293.83 1704.64 1295.68C1718.6 1297.53 1732.63 1300.38 1746.75 1304.23C1760.87 1308.09 1774.59 1312.94 1787.92 1318.81C1801.25 1324.67 1813.56 1331.45 1824.86 1339.15V1200.86C1801.95 1192.22 1776.94 1185.82 1749.81 1181.66C1722.67 1177.5 1691.54 1175.42 1656.41 1175.42C1620.65 1175.42 1586.77 1179.19 1554.78 1186.75C1522.78 1194.3 1494.63 1206.1 1470.32 1222.13C1446.01 1238.17 1426.79 1258.6 1412.68 1283.42C1398.56 1308.24 1391.51 1337.92 1391.51 1372.46C1391.51 1416.56 1404.44 1454.18 1430.32 1485.32C1456.21 1516.46 1495.49 1542.83 1548.19 1564.42C1568.9 1572.74 1588.18 1580.91 1606.07 1588.93C1623.94 1596.95 1639.39 1605.28 1652.41 1613.91C1665.43 1622.54 1675.7 1631.94 1683.23 1642.12C1690.76 1652.3 1694.52 1663.86 1694.52 1676.81C1694.52 1686.38 1692.17 1695.24 1687.46 1703.41C1682.76 1711.58 1675.62 1718.67 1666.05 1724.69C1656.49 1730.7 1644.57 1735.4 1630.3 1738.79C1616.03 1742.19 1599.32 1743.88 1580.18 1743.88C1547.56 1743.88 1515.25 1738.26 1483.26 1727C1451.27 1715.75 1421.62 1698.86 1394.33 1676.35V1824.37Z"
      fill="white"
    />
  </svg>
);
