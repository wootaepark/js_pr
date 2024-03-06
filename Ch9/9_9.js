// 문자열 타입
+'' // 0
+'0' // 0
+'1' // 1
+'string' // NaN

// 불리언 타입
+true; // 1
+false; //0

//null 타입
+null; // 0

+undefined; // NaN

+Symbol() // TypeError

// 객체 타입
+{} // NaN
+[] // 0
+[10, 20] // NaN
+(function(){}) // NaN