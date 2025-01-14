export const citiesData = {
  '台北市': ['大安區', '信義區', '中山區', '松山區', '內湖區', '北投區', '士林區', '南港區', '文山區', '中正區'],
  '新北市': ['板橋區', '中和區', '新莊區', '三峽區', '樹林區', '汐止區', '土城區', '鶯歌區', '深坑區', '金山區'],
  '台中市': ['西屯區', '北屯區', '南屯區', '北區', '南區', '西區', '東區', '豐原區', '南區', '大里區'],
  '台南市': ['永康區', '安南區', '東區', '南區', '北區', '中西區', '新營區', '鹽水區', '麻豆區', '官田區'],
  '高雄市': ['三民區', '鳳山區', '左營區', '苓雅區', '鹽埕區', '鼓山區', '橋頭區', '小港區', '大寮區', '楠梓區'],
  '桃園市': ['中壢區', '桃園區', '平鎮區', '八德區', '楊梅區', '大溪區', '龜山區', '龍潭區', '大園區', '蘆竹區'],
  '新竹市': ['東區', '北區', '香山區'],
  '嘉義市': ['東區', '西區'],
  '屏東市': ['屏東市', '東港鎮', '恆春鎮'],
  '基隆市': ['中正區', '七堵區', '暖暖區', '仁愛區'],
  '宜蘭市': ['宜蘭市', '羅東鎮', '冬山鄉'],
  '花蓮市': ['花蓮市', '鳳林鎮', '玉里鎮'],
  '台東市': ['台東市', '關山鎮', '卑南鄉'],
  '苗栗市': ['苗栗市', '頭份市', '三灣鄉'],
  '彰化縣': ['彰化市', '員林市', '和美鎮', '溪湖鎮', '田中鎮'],
  '南投縣': ['南投市', '草屯鎮', '埔里鎮', '竹山鎮', '集集鎮'],
  '雲林縣': ['斗六市', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮'],
  '嘉義縣': ['太保市', '朴子市', '大林鎮', '民雄鄉', '溪口鄉'],
  '屏東縣': ['屏東市', '東港鎮', '恆春鎮', '萬丹鄉', '潮州鎮'],
  '台東縣': ['台東市', '關山鎮', '卑南鄉', '大武鄉', '池上鄉'],
  '澎湖縣': ['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉'],
  '金門縣': ['金城鎮', '金湖鎮', '金沙鎮', '烈嶼鄉', '烏坵鄉'],
  '連江縣': ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉']
}

export const getCityList = () => Object.keys(citiesData)

export const getDistricts = (city) => citiesData[city] || []
