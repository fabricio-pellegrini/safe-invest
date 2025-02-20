import { Operation } from "@/types/operation";

const operations = [
    { id:1, date: new Date("04/26/2019"), asset: 'IPCA+ 2024', category:"Tesouro", type: 'Compra', amount: 5.06, price: 2597.76 },
    { id:2, date: new Date("05/21/2019"), asset: 'IPCA+ 2024', category:"Tesouro", type: 'Compra', amount: 4.04, price: 2624.06 },
    { id:3, date: new Date("05/23/2019"), asset: 'Prefixado 2025', category:"Tesouro", type: 'Compra', amount: 9.6, price: 628.76 },
    { id:4, date: new Date("05/23/2019"), asset: 'Prefixado 2025', category:"Tesouro", type: 'Compra', amount: 5.84, price: 632.01 },
    { id:5, date: new Date("05/28/2019"), asset: 'Prefixado 2025', category:"Tesouro", type: 'Compra', amount: 14.18, price: 634.25 },
    { id:6, date: new Date("05/28/2019"), asset: 'Prefixado 2025', category:"Tesouro", type: 'Compra', amount: 3.99, price: 637.53 },
    { id:7, date: new Date("07/16/2019"), asset: 'Prefixado 2025', category:"Tesouro", type: 'Compra', amount: 28.84, price: 693.61 },
    { id:8, date: new Date("07/17/2019"), asset: 'Prefixado 2025', category:"Tesouro", type: 'Compra', amount: 15.12, price: 693.44 },
    { id:9, date: new Date("09/20/2019"), asset: 'BCFF11', category:"FII", type: 'Compra', amount: 2, price: 92.97 },
    { id:10, date: new Date("09/20/2019"), asset: 'RCRB11', category:"FII", type: 'Compra', amount: 2, price: 173.75 },
    { id:11, date: new Date("09/20/2019"), asset: 'HGCR11', category:"FII", type: 'Compra', amount: 2, price: 118.97 },
    { id:12, date: new Date("09/20/2019"), asset: 'PATC11', category:"FII", type: 'Compra', amount: 2, price: 99.50 },
    { id:13, date: new Date("09/20/2019"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 4, price: 116.95 },
    { id:14, date: new Date("09/20/2019"), asset: 'XPML11', category:"FII", type: 'Compra', amount: 4, price: 112.14 },
    { id:15, date: new Date("09/24/2019"), asset: 'BCFF11', category:"FII", type: 'Compra', amount: 1, price: 89.92 },
    { id:16, date: new Date("09/24/2019"), asset: 'RCRB11', category:"FII", type: 'Compra', amount: 2, price: 173.20 },
    { id:17, date: new Date("09/24/2019"), asset: 'HGCR11', category:"FII", type: 'Compra', amount: 2, price: 118.75 },
    { id:18, date: new Date("09/24/2019"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 2, price: 116.60 },
    { id:19, date: new Date("09/24/2019"), asset: 'XPML11', category:"FII", type: 'Compra', amount: 1, price: 111.30 },
    { id:20, date: new Date("09/24/2019"), asset: 'XPML11', category:"FII", type: 'Compra', amount: 1, price: 111.30 },
    { id:21, date: new Date("07/10/2019"), asset: 'BCFF11', category:"FII", type: 'Compra', amount: 2, price: 92.08 },
    { id:22, date: new Date("07/10/2019"), asset: 'RCRB11', category:"FII", type: 'Compra', amount: 1, price: 174.43 },
    { id:23, date: new Date("07/10/2019"), asset: 'RCRB11', category:"FII", type: 'Compra', amount: 1, price: 173.80 },
    { id:24, date: new Date("07/10/2019"), asset: 'HGCR11', category:"FII", type: 'Compra', amount: 1, price: 117.40 },
    { id:25, date: new Date("07/10/2019"), asset: 'HGCR11', category:"FII", type: 'Compra', amount: 1, price: 117.40 },
    { id:26, date: new Date("10/07/2019"), asset: 'PATC11', category:"FII", type: 'Compra', amount: 2, price: 101.89 },
    { id:27, date: new Date("10/07/2019"), asset: 'PATC11', category:"FII", type: 'Compra', amount: 2, price: 101.65 },
    { id:28, date: new Date("10/07/2019"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 3, price: 117.24 },
    { id:29, date: new Date("10/07/2019"), asset: 'XPML11', category:"FII", type: 'Compra', amount: 2, price: 113.45 },
    { id:30, date: new Date("10/07/2019"), asset: 'XPML11', category:"FII", type: 'Compra', amount: 1, price: 113.45 },
    { id:31, date: new Date("10/08/2019"), asset: 'BCFF11', category:"FII", type: 'Compra', amount: 1, price: 90.60 },
    { id:32, date: new Date("10/21/2019"), asset: 'XPML11', category:"FII", type: 'Subscrição', amount: 1, price: 109.68 },
    { id:33, date: new Date("10/30/2019"), asset: 'BCFF11', category:"FII", type: 'Compra', amount: 1, price: 98.47 },
    { id:34, date: new Date("10/30/2019"), asset: 'RCRB11', category:"FII", type: 'Compra', amount: 2, price: 178.55 },
    { id:35, date: new Date("10/30/2019"), asset: 'HGCR11', category:"FII", type: 'Compra', amount: 2, price: 122.00 },
    { id:36, date: new Date("10/30/2019"), asset: 'HGCR11', category:"FII", type: 'Compra', amount: 1, price: 122.00 },
    { id:37, date: new Date("10/30/2019"), asset: 'PATC11', category:"FII", type: 'Compra', amount: 1, price: 107.02 },
    { id:38, date: new Date("10/30/2019"), asset: 'PATC11', category:"FII", type: 'Compra', amount: 1, price: 107.02 },
    { id:39, date: new Date("10/30/2019"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 4, price: 123.43 },
    { id:40, date: new Date("10/30/2019"), asset: 'XPML11', category:"FII", type: 'Compra', amount: 4, price: 118.07 },
    { id:41, date: new Date("12/09/2019"), asset: 'BCFF11', category:"FII", type: 'Compra', amount: 4, price: 98.40 },
    { id:42, date: new Date("12/09/2019"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 10, price: 118.40 },
    { id:43, date: new Date("12/09/2019"), asset: 'VGIR11', category:"FII", type: 'Compra', amount: 8, price: 105.40 },
    { id:44, date: new Date("12/09/2019"), asset: 'XPML11', category:"FII", type: 'Compra', amount: 10, price: 127.40 },
    { id:45, date: new Date("12/18/2019"), asset: 'HGCR11', category:"FII", type: 'Subscrição', amount: 3, price: 110.05 },
    { id:46, date: new Date("12/20/2019"), asset: 'PATC11', category:"FII", type: 'Subscrição', amount: 10, price: 104.50 },
    { id:47, date: new Date("01/31/2020"), asset: 'HGRU11', category:"FII", type: 'Compra', amount: 6, price: 133.50 },
    { id:48, date: new Date("01/31/2020"), asset: 'HSML11', category:"FII", type: 'Compra', amount: 4, price: 121.98 },
    { id:49, date: new Date("01/31/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 4, price: 129.80 },
    { id:50, date: new Date("01/31/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 1, price: 120.57 },
    { id:51, date: new Date("01/31/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 2, price: 120.57 },
    { id:52, date: new Date("01/31/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 2, price: 120.57 },
    { id:53, date: new Date("01/31/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 4, price: 120.57 },
    { id:54, date: new Date("01/31/2020"), asset: 'VGIR11', category:"FII", type: 'Compra', amount: 1, price: 106.00 },
    { id:55, date: new Date("02/07/2020"), asset: 'HGCR11', category:"FII", type: 'Compra', amount: 9, price: 115.20 },
    { id:56, date: new Date("02/07/2020"), asset: 'HGRU11', category:"FII", type: 'Compra', amount: 5, price: 134.61 },
    { id:57, date: new Date("02/07/2020"), asset: 'HGRU11', category:"FII", type: 'Compra', amount: 56, price: 135.34 },
    { id:58, date: new Date("02/07/2020"), asset: 'HSML11', category:"FII", type: 'Compra', amount: 47, price: 119.91 },
    { id:59, date: new Date("02/07/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 47, price: 118.50 },
    { id:60, date: new Date("02/07/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 38, price: 116.35 },
    { id:61, date: new Date("02/13/2020"), asset: 'BCFF11', category:"FII", type: 'Subscrição', amount: 5, price: 91.39 },
    { id:62, date: new Date("02/17/2020"), asset: 'HGCR11', category:"FII", type: 'Compra', amount: 1, price: 116.83 },
    { id:63, date: new Date("02/17/2020"), asset: 'HSML11', category:"FII", type: 'Compra', amount: 3, price: 118.65 },
    { id:64, date: new Date("02/17/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 3, price: 119.50 },
    { id:65, date: new Date("02/17/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 3, price: 117.25 },
    { id:66, date: new Date("02/17/2020"), asset: 'VGIR11', category:"FII", type: 'Compra', amount: 4, price: 103.97 },
    { id:67, date: new Date("02/18/2020"), asset: 'HGRU11', category:"FII", type: 'Compra', amount: 3, price: 135.59 },
    { id:68, date: new Date("02/21/2020"), asset: 'IRDM11', category:"FII", type: 'Subscrição', amount: 2, price: 101.35 },
    { id:69, date: new Date("03/10/2020"), asset: 'HGCR11', category:"FII", type: 'Compra', amount: 1, price: 110.15 },
    { id:70, date: new Date("03/10/2020"), asset: 'HSML11', category:"FII", type: 'Compra', amount: 4, price: 114.85 },
    { id:71, date: new Date("03/10/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 1, price: 120.10 },
    { id:72, date: new Date("03/10/2020"), asset: 'MALL11', category:"FII", type: 'Compra', amount: 4, price: 109.05 },
    { id:73, date: new Date("03/10/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 2, price: 103.40 },
    { id:74, date: new Date("03/10/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 1, price: 103.40 },
    { id:75, date: new Date("03/10/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 1, price: 103.40 },
    { id:76, date: new Date("03/10/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 2, price: 103.40 },
    { id:77, date: new Date("03/10/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 1, price: 103.40 },
    { id:78, date: new Date("03/10/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 1, price: 103.40 },
    { id:79, date: new Date("03/12/2020"), asset: 'HGRU11', category:"FII", type: 'Compra', amount: 2, price: 115.41 },
    { id:80, date: new Date("03/12/2020"), asset: 'HSML11', category:"FII", type: 'Compra', amount: 2, price: 102.06 },
    { id:81, date: new Date("03/12/2020"), asset: 'HSML11', category:"FII", type: 'Compra', amount: 4, price: 102.06 },
    { id:82, date: new Date("03/12/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 1, price: 111.70 },
    { id:83, date: new Date("03/12/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 1, price: 111.70 },
    { id:84, date: new Date("03/12/2020"), asset: 'MALL11', category:"FII", type: 'Compra', amount: 1, price: 97.33 },
    { id:85, date: new Date("03/12/2020"), asset: 'MALL11', category:"FII", type: 'Compra', amount: 1, price: 97.33 },
    { id:86, date: new Date("03/12/2020"), asset: 'MALL11', category:"FII", type: 'Compra', amount: 1, price: 97.33 },
    { id:87, date: new Date("03/12/2020"), asset: 'MALL11', category:"FII", type: 'Compra', amount: 1, price: 97.33 },
    { id:88, date: new Date("03/12/2020"), asset: 'RBRP11', category:"FII", type: 'Compra', amount: 1, price: 81.95 },
    { id:89, date: new Date("03/12/2020"), asset: 'RBRP11', category:"FII", type: 'Compra', amount: 9, price: 81.95 },
    { id:90, date: new Date("03/12/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 6, price: 94.01 },
    { id:91, date: new Date("03/12/2020"), asset: 'XPML11', category:"FII", type: 'Compra', amount: 1, price: 109.53 },
    { id:92, date: new Date("03/12/2020"), asset: 'XPML11', category:"FII", type: 'Compra', amount: 1, price: 109.53 },
    { id:93, date: new Date("03/31/2020"), asset: 'HGCR11', category:"FII", type: 'Compra', amount: 2, price: 96.75 },
    { id:94, date: new Date("03/31/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 2, price: 101.07 },
    { id:95, date: new Date("03/31/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 2, price: 101.07 },
    { id:96, date: new Date("03/31/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 2, price: 101.07 },
    { id:97, date: new Date("03/31/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 2, price: 101.07 },
    { id:98, date: new Date("03/31/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 1, price: 101.07 },
    { id:99, date: new Date("03/31/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 2, price: 101.03 },
    { id:100, date: new Date("03/31/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 1, price: 101.03 },
    { id:101, date: new Date("03/31/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 2, price: 101.03 },
    { id:102, date: new Date("03/31/2020"), asset: 'RBRP11', category:"FII", type: 'Compra', amount: 9, price: 75.12 },
    { id:103, date: new Date("03/31/2020"), asset: 'RBRP11', category:"FII", type: 'Compra', amount: 3, price: 75.53 },
    { id:104, date: new Date("03/31/2020"), asset: 'VGIR11', category:"FII", type: 'Compra', amount: 1, price: 78.09 },
    { id:105, date: new Date("03/31/2020"), asset: 'VGIR11', category:"FII", type: 'Compra', amount: 1, price: 78.09 },
    { id:106, date: new Date("06/16/2020"), asset: 'RBRP11', category:"FII", type: 'Compra', amount: 6, price: 88.07 },
    { id:107, date: new Date("06/26/2020"), asset: 'HGCR11', category:"FII", type: 'Compra', amount: 1, price: 105.97 },
    { id:108, date: new Date("07/06/2020"), asset: 'HSML11', category:"FII", type: 'Compra', amount: 4, price: 90.00 },
    { id:109, date: new Date("07/06/2020"), asset: 'IRDM11', category:"FII", type: 'Compra', amount: 5, price: 119.60 },
    { id:110, date: new Date("07/14/2020"), asset: 'RBRP11', category:"FII", type: 'Compra', amount: 1, price: 88.65 },
    { id:111, date: new Date("07/17/2020"), asset: 'RBRP11', category:"FII", type: 'Compra', amount: 2, price: 85.55 },
    { id:112, date: new Date("07/28/2020"), asset: 'IRDM11', category:"FII", type: 'Subscrição', amount: 34, price: 96.79 },
    { id:113, date: new Date("09/04/2020"), asset: 'RBRP11', category:"FII", type: 'Compra', amount: 13, price: 90.88 },
    { id:114, date: new Date("09/25/2020"), asset: 'SDIL11', category:"FII", type: 'Compra', amount: 3, price: 101.65 },
    { id:115, date: new Date("09/25/2020"), asset: 'VILG11', category:"FII", type: 'Compra', amount: 4, price: 129.44 },
    { id:116, date: new Date("09/25/2020"), asset: 'XPLG11', category:"FII", type: 'Compra', amount: 1, price: 129.63 },
    { id:117, date: new Date("09/25/2020"), asset: 'XPLG11', category:"FII", type: 'Compra', amount: 3, price: 129.63 },
    { id:118, date: new Date("10/19/2020"), asset: 'VGIR11', category:"FII", type: 'Venda', amount: -15, price: 88.31 },
    { id:119, date: new Date("10/19/2020"), asset: 'HGCR11', category:"FII", type: 'Venda', amount: -26, price: 101.13 },
    { id:120, date: new Date("10/20/2020"), asset: 'HGRU11', category:"FII", type: 'Subscrição', amount: 28, price: 123.37 },
    { id:121, date: new Date("10/21/2020"), asset: 'MCCI11', category:"FII", type: 'Compra', amount: 20, price: 102.95 },
    { id:122, date: new Date("10/21/2020"), asset: 'VRTA11', category:"FII", type: 'Compra', amount: 20, price: 105.00 },
    { id:123, date: new Date("10/21/2020"), asset: 'MALL11', category:"FII", type: 'Compra', amount: 1, price: 94.37 },
    { id:124, date: new Date("11/05/2020"), asset: 'PATC11', category:"FII", type: 'Venda', amount: -18, price: 87.30 },
    { id:125, date: new Date("11/05/2020"), asset: 'RCRB11', category:"FII", type: 'Venda', amount: -8, price: 172.90 },
    { id:126, date: new Date("11/06/2020"), asset: 'MCCI11', category:"FII", type: 'Compra', amount: 5, price: 100.50 },
    { id:127, date: new Date("11/09/2020"), asset: 'RBRP11', category:"FII", type: 'Compra', amount: 1, price: 93.20 },
    { id:128, date: new Date("11/09/2020"), asset: 'VRTA11', category:"FII", type: 'Compra', amount: 5, price: 106.80 },
    { id:129, date: new Date("11/09/2020"), asset: 'MALL11', category:"FII", type: 'Compra', amount: 20, price: 96.50 },
    { id:130, date: new Date("11/10/2020"), asset: 'MCCI11', category:"FII", type: 'Subscrição', amount: 8, price: 100.00 },
    { id:131, date: new Date("11/16/2020"), asset: 'MALL11', category:"FII", type: 'Compra', amount: 1, price: 94.76 },
    { id:132, date: new Date("11/18/2020"), asset: 'MALL11', category:"FII", type: 'Compra', amount: 2, price: 98.96 },
    { id:133, date: new Date("11/24/2020"), asset: 'IRDM11', category:"FII", type: 'Venda', amount: -43, price: 120.00 },
    { id:134, date: new Date("12/02/2020"), asset: 'MALL11', category:"FII", type: 'Compra', amount: 5, price: 96.70 },
    { id:135, date: new Date("12/02/2020"), asset: 'VGIP11', category:"FII", type: 'Compra', amount: 5, price: 100.99 },
    { id:136, date: new Date("12/02/2020"), asset: 'BCFF11', category:"FII", type: 'Venda', amount: -16, price: 90.00 },
    { id:137, date: new Date("12/04/2020"), asset: 'IRDM11', category:"FII", type: 'Subscrição', amount: 43, price: 98.24 },
    { id:138, date: new Date("12/07/2020"), asset: 'HSML11', category:"FII", type: 'Compra', amount: 1, price: 94.09 },
    { id:139, date: new Date("12/07/2020"), asset: 'MALL11', category:"FII", type: 'Compra', amount: 3, price: 98.79 },
    { id:140, date: new Date("12/08/2020"), asset: 'VGIP11', category:"FII", type: 'Compra', amount: 20, price: 100.99 },
    { id:141, date: new Date("12/21/2020"), asset: 'IRDM11', category:"FII", type: 'Subscrição', amount: 11, price: 98.24 },
    { id:142, date: new Date("01/06/2021"), asset: 'VGIP11', category:"FII", type: 'Compra', amount: 1, price: 110.70 },
    { id:143, date: new Date("01/26/2021"), asset: 'VILG11', category:"FII", type: 'Subscrição', amount: 1, price: 118.00 },
    { id:144, date: new Date("03/24/2021"), asset: 'IRDM11', category:"FII", type: 'Subscrição', amount: 38, price: 102.69 },
    { id:145, date: new Date("06/25/2021"), asset: 'VGIP11', category:"FII", type: 'Subscrição', amount: 12, price: 98.96 },
    { id:146, date: new Date("08/23/2021"), asset: 'MCCI11', category:"FII", type: 'Subscrição', amount: 12, price: 100.29 },
    { id:147, date: new Date("09/17/2021"), asset: 'SDIL11', category:"FII", type: 'Venda', amount: -90, price: 89.98 },
    { id:148, date: new Date("09/17/2021"), asset: 'BTLG11', category:"FII", type: 'Compra', amount: 30, price: 104.99 },
    { id:149, date: new Date("09/17/2021"), asset: 'RECR11', category:"FII", type: 'Compra', amount: 30, price: 104.69 },
    { id:150, date: new Date("09/17/2021"), asset: 'VGIP11', category:"FII", type: 'Compra', amount: 2, price: 99.88 },
    { id:151, date: new Date("09/17/2021"), asset: 'MCCI11', category:"FII", type: 'Compra', amount: 15, price: 100.89 },
    { id:152, date: new Date("12/06/2021"), asset: 'IRDM11', category:"FII", type: 'Subscrição', amount: 28, price: 99.75 },
    { id:153, date: new Date("12/09/2021"), asset: 'VGIP11', category:"FII", type: 'Subscrição', amount: 19, price: 96.42 },
    { id:154, date: new Date("12/09/2021"), asset: 'ROXO34', category:"Ação", type: 'Compra', amount: 1196, price: 8.36 },
    { id:155, date: new Date("12/14/2021"), asset: 'IRDM11', category:"FII", type: 'Subscrição', amount: 41, price: 99.75 },
    { id:156, date: new Date("12/14/2021"), asset: 'IRDM11', category:"FII", type: 'Subscrição', amount: 10, price: 99.75 },
    { id:157, date: new Date("12/23/2021"), asset: 'BTLG11', category:"FII", type: 'Compra', amount: 5, price: 103.91 },
    { id:158, date: new Date("12/23/2021"), asset: 'MALL11', category:"FII", type: 'Compra', amount: 5, price: 93.60 },
    { id:159, date: new Date("12/23/2021"), asset: 'RBRP11', category:"FII", type: 'Compra', amount: 5, price: 74.91 },
    { id:160, date: new Date("12/23/2021"), asset: 'RECR11', category:"FII", type: 'Compra', amount: 5, price: 98.13 },
    { id:161, date: new Date("12/23/2021"), asset: 'VILG11', category:"FII", type: 'Compra', amount: 10, price: 98.10 },
    { id:162, date: new Date("12/23/2021"), asset: 'XPLG11', category:"FII", type: 'Compra', amount: 10, price: 95.50 },
    { id:163, date: new Date("12/29/2021"), asset: 'RECR11', category:"FII", type: 'Compra', amount: 2, price: 99.91 },
    { id:164, date: new Date("04/29/2022"), asset: 'RECR11', category:"FII", type: 'Subscrição', amount: 3, price: 98.00 },
    { id:165, date: new Date("09/27/2022"), asset: 'XPML11', category:"FII", type: 'Subscrição', amount: 3, price: 102.88 },
    { id:166, date: new Date("12/30/2022"), asset: 'ROXO34', category:"Ação", type: 'Compra', amount: 1, price: 0.00 },
    { id:167, date: new Date("05/06/2024"), asset: 'IPCA+ 2035', category:"Tesouro", type: 'Compra', amount: 20.34, price: 2211.92 },
    { id:168, date: new Date("05/06/2024"), asset: 'Prefixado 2031', category:"Tesouro", type: 'Compra', amount: 61.5, price: 487.73 },
    { id:169, date: new Date("07/05/2024"), asset: 'IPCA+ 2024', category:"Tesouro", type: 'Venda', amount: -0.04, price: 4259.43 },
    { id:170, date: new Date("08/15/2024"), asset: 'IPCA+ 2024', category:"Tesouro", type: 'Venda', amount: -9.06, price: 4315.50 },
    { id:171, date: new Date("01/02/2025"), asset: 'Prefixado 2025', category:"Tesouro", type: 'Venda', amount: -77.57, price: 1000.00 }
] as Operation[];

export default operations;