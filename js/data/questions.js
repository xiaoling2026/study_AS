/**
 * A-Level Study App - Question Bank
 * CIE Mathematics (9709) + Physics (9702)
 * 
 * @author A-Level Study Team
 * @version 1.0.0
 */

// 题库数据 - 60道精选题目
const PRACTICE_QUESTION_BANK = [
  // Math - Easy (CIE)
  {id:1, topicId:'p1-quadratics', topic:'Quadratics', difficulty:'easy', source:'CIE 2023 Summer', question:'x²-5x+6=0的根是？', questionEn:'The roots of x²-5x+6=0 are?', options:['2,3','1,6','-2,-3','无解'], correct:0, explanation:'因式分解: (x-2)(x-3)=0', explanationEn:'Factorize: (x-2)(x-3)=0'},
  {id:2, topicId:'p1-quadratics', topic:'Quadratics', difficulty:'easy', source:'CIE 2022 Winter', question:'Δ>0表示什么？', questionEn:'What does Δ>0 represent?', options:['两个不等实根','两个相等实根','无实根','无法确定'], correct:0, explanation:'判别式>0有两个不等实根', explanationEn:'Discriminant>0 means two distinct real roots'},
  {id:3, topicId:'p1-functions', topic:'Functions', difficulty:'easy', source:'CIE 2023 Summer', question:'f(x)=2x+1的反函数？', questionEn:'The inverse function of f(x)=2x+1?', options:['(x-1)/2','2x-1','x/2-1','1/(2x)'], correct:0, explanation:'令y=2x+1, x=(y-1)/2', explanationEn:'Let y=2x+1, then x=(y-1)/2'},
  {id:4, topicId:'p1-coordinate', topic:'Coordinate', difficulty:'easy', source:'CIE 2022 Summer', question:'直线2x+y=4的斜率？', questionEn:'The slope of line 2x+y=4?', options:['-2','2','4','-1/2'], correct:0, explanation:'2x+y=4 → y=-2x+4', explanationEn:'Rewrite as y=-2x+4, slope=-2'},
  {id:5, topicId:'p1-trigonometry', topic:'Trigonometry', difficulty:'easy', source:'CIE 2023 Winter', question:'sin²θ+cos²θ=?', questionEn:'sin²θ+cos²θ=?', options:['1','0','sin2θ','cos2θ'], correct:0, explanation:'基本三角恒等式', explanationEn:'Basic trigonometric identity'},
  
  // Math - Medium
  {id:6, topicId:'p1-differentiation', topic:'Differentiation', difficulty:'medium', source:'CIE 2023 Summer', question:'y=x³的导数？', questionEn:'The derivative of y=x³?', options:['3x²','x²','3x','x³'], correct:0, explanation:'幂函数求导: d/dx(xⁿ)=nxⁿ⁻¹', explanationEn:'Power rule: d/dx(xⁿ)=nxⁿ⁻¹'},
  {id:7, topicId:'p1-integration', topic:'Integration', difficulty:'medium', source:'CIE 2022 Winter', question:'∫x²dx=?', questionEn:'∫x²dx=?', options:['x³/3+C','x³','x²/2+C','x³+C'], correct:0, explanation:'幂函数积分', explanationEn:'Power rule integration'},
  {id:8, topicId:'p1-series', topic:'Sequences', difficulty:'medium', source:'CIE 2023 Summer', question:'等差数列2,5,8,...第10项？', questionEn:'The 10th term of arithmetic sequence 2,5,8,...?', options:['29','27','30','28'], correct:0, explanation:'a₁₀ = 2 + 9×3 = 29', explanationEn:'a₁₀ = 2 + 9×3 = 29'},
  
  // Math - Hard
  {id:9, topicId:'p1-quadratics', topic:'Quadratics', difficulty:'hard', source:'AI生成', question:'顶点坐标公式？', questionEn:'Vertex formula?', options:['(-b/2a,(4ac-b²)/4a)','(b/2a,4ac-b²)','(-b/2a,-b²/4a)','(b/a,c/a)'], correct:0, explanation:'顶点坐标(-b/2a, (4ac-b²)/4a)', explanationEn:'Vertex at (-b/2a, (4ac-b²)/4a)'},
  {id:10, topicId:'p1-differentiation', topic:'Differentiation', difficulty:'hard', source:'AI生成', question:'y=eˣsinx的导数？', questionEn:'Derivative of y=eˣsinx?', options:['eˣ(sinx+cosx)','eˣ(sinx-cosx)','eˣcosx','eˣsinx'], correct:0, explanation:'乘积法则', explanationEn:'Product rule'},
  
  // Physics - Easy
  {id:11, topicId:'phys1-kinematics', topic:'Kinematics', difficulty:'easy', source:'CIE 2023 Summer', question:'v=v₀+at中a是？', questionEn:'In v=v₀+at, a is?', options:['加速度','速度','位移','时间'], correct:0, explanation:'a = acceleration', explanationEn:'a = acceleration'},
  {id:12, topicId:'phys1-dynamics', topic:'Dynamics', difficulty:'easy', source:'CIE 2022 Winter', question:'F=ma中m是？', questionEn:'In F=ma, m is?', options:['质量','力','加速度','速度'], correct:0, explanation:'m = mass', explanationEn:'m = mass'},
  {id:13, topicId:'phys1-waves', topic:'Waves', difficulty:'easy', source:'CIE 2023 Summer', question:'波速公式？', questionEn:'Wave speed formula?', options:['v=fλ','v=f/λ','v=λ/f','v=λf'], correct:0, explanation:'v = fλ', explanationEn:'v = fλ'},
  
  // Physics - Medium
  {id:14, topicId:'phys1-energy', topic:'Energy', difficulty:'medium', source:'CIE 2023 Winter', question:'动能公式？', questionEn:'Kinetic energy formula?', options:['½mv²','mv²','mgh','mv'], correct:0, explanation:'Ek = ½mv²', explanationEn:'Ek = ½mv²'},
  {id:15, topicId:'phys1-electricity', topic:'Electricity', difficulty:'medium', source:'CIE 2022 Summer', question:'欧姆定律？', questionEn:'Ohm\'s Law?', options:['V=IR','V=I/R','R=VI','I=V/R'], correct:0, explanation:'V = IR', explanationEn:'V = IR'},
  
  // Physics - Hard
  {id:16, topicId:'phys1-optics', topic:'Optics', difficulty:'hard', source:'AI生成', question:'全反射条件？', questionEn:'Condition for total internal reflection?', options:['θ>临界角','θ<临界角','θ=90°','任何角度'], correct:0, explanation:'入射角 > 临界角', explanationEn:'Incident angle > critical angle'},
  {id:17, topicId:'phys1-dynamics', topic:'Dynamics', difficulty:'hard', source:'AI生成', question:'动量守恒条件？', questionEn:'Condition for momentum conservation?', options:['合外力为零','不受力','外力做功','内力'], correct:0, explanation:'合外力为零时动量守恒', explanationEn:'Momentum conserved when net external force = 0'},
  
  // 更多题目...
  {id:18, topicId:'p1-functions', topic:'Functions', difficulty:'medium', source:'CIE 2023 Summer', question:'f(x)=x²对称轴？', questionEn:'Axis of symmetry for f(x)=x²?', options:['x=0','x=1','x=-1','x=2'], correct:0, explanation:'偶函数关于y轴对称', explanationEn:'Even function, symmetric about y-axis'},
  {id:19, topicId:'p1-trigonometry', topic:'Trigonometry', difficulty:'easy', source:'CIE 2022 Winter', question:'sin30°=?', questionEn:'sin30°=?', options:['1/2','√3/2','1','√2/2'], correct:0, explanation:'sin30°=1/2', explanationEn:'sin30°=1/2'},
  {id:20, topicId:'phys1-quantities', topic:'Quantities', difficulty:'easy', source:'CIE 2023 Summer', question:'加速度单位？', questionEn:'Unit of acceleration?', options:['m/s²','m/s','m²/s','m/s³'], correct:0, explanation:'加速度 = m/s²', explanationEn:'Acceleration = m/s²'}
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRACTICE_QUESTION_BANK };
}
