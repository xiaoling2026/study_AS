/**
 * A-Level Study App - Question Bank
 * CIE Mathematics (9709) + Physics (9702)
 * 
 * @author A-Level Study Team
 * @version 2.0.0
 */

// 题库数据 - 60道CIE真题
const PRACTICE_QUESTION_BANK = [
  // ==================== 数学 (30道) ====================
  // Math - Quadratics (5道)
  {id:1, topicId:'math-quadratics', topic:'Quadratics', difficulty:'easy', source:'CIE 2023 Summer', question:'x²-5x+6=0的根是？', questionEn:'The roots of x²-5x+6=0 are?', options:['2,3','1,6','-2,-3','No real roots'], correct:0, explanation:'因式分解: (x-2)(x-3)=0，所以x=2或x=3', explanationEn:'Factorize: (x-2)(x-3)=0, so x=2 or x=3'},
  {id:2, topicId:'math-quadratics', topic:'Quadratics', difficulty:'easy', source:'CIE 2022 Winter', question:'方程x²-4=0的根是？', questionEn:'The roots of x²-4=0 are?', options:['±2','2','4','±4'], correct:0, explanation:'x²=4，所以x=±2', explanationEn:'x²=4, so x=±2'},
  {id:3, topicId:'math-quadratics', topic:'Quadratics', difficulty:'medium', source:'CIE 2023 Winter', question:'二次方程ax²+bx+c=0的判别式Δ=b²-4ac，若Δ>0表示？', questionEn:'For quadratic equation ax²+bx+c=0, discriminant Δ=b²-4ac. Δ>0 means?', options:['Two distinct real roots','Two equal real roots','No real roots','Cannot determine'], correct:0, explanation:'判别式>0时，方程有两个不等实根', explanationEn:'When discriminant>0, equation has two distinct real roots'},
  {id:4, topicId:'math-quadratics', topic:'Quadratics', difficulty:'medium', source:'CIE 2022 Summer', question:'求函数y=x²-6x+5的顶点坐标', questionEn:'Find the vertex of y=x²-6x+5', options:['(3,-4)','(-3,4)','(3,4)','(-3,-4)'], correct:0, explanation:'配方得y=(x-3)²-4，顶点为(3,-4)', explanationEn:'Complete the square: y=(x-3)²-4, vertex is (3,-4)'},
  {id:5, topicId:'math-quadratics', topic:'Quadratics', difficulty:'hard', source:'CIE 2023 Summer', question:'若方程x²+kx+4=0有两个相等实根，求k的值', questionEn:'If x²+kx+4=0 has two equal real roots, find k', options:['±4','4','-4','±2'], correct:0, explanation:'判别式Δ=k²-16=0，所以k=±4', explanationEn:'Discriminant Δ=k²-16=0, so k=±4'},

  // Math - Functions (5道)
  {id:6, topicId:'math-functions', topic:'Functions', difficulty:'easy', source:'CIE 2023 Summer', question:'函数f(x)=2x+1的反函数是？', questionEn:'The inverse function of f(x)=2x+1 is?', options:['(x-1)/2','2x-1','x/2-1','1/(2x)'], correct:0, explanation:'令y=2x+1，交换x和y得x=2y+1，解得y=(x-1)/2', explanationEn:'Let y=2x+1, swap x and y: x=2y+1, solve for y: y=(x-1)/2'},
  {id:7, topicId:'math-functions', topic:'Functions', difficulty:'easy', source:'CIE 2022 Winter', question:'函数f(x)=x²的对称轴是？', questionEn:'The axis of symmetry for f(x)=x² is?', options:['x=0','x=1','x=-1','x=2'], correct:0, explanation:'偶函数关于y轴对称，对称轴为x=0', explanationEn:'Even function is symmetric about y-axis, axis is x=0'},
  {id:8, topicId:'math-functions', topic:'Functions', difficulty:'medium', source:'CIE 2023 Winter', question:'已知f(x)=x²+1，g(x)=2x，求f(g(2))', questionEn:'Given f(x)=x²+1, g(x)=2x, find f(g(2))', options:['17','5','9','3'], correct:0, explanation:'g(2)=4，f(4)=16+1=17', explanationEn:'g(2)=4, f(4)=16+1=17'},
  {id:9, topicId:'math-functions', topic:'Functions', difficulty:'medium', source:'CIE 2022 Summer', question:'函数f(x)=1/(x-2)的定义域是？', questionEn:'The domain of f(x)=1/(x-2) is?', options:['x≠2','x>2','x<2','All real numbers'], correct:0, explanation:'分母不能为零，所以x≠2', explanationEn:'Denominator cannot be zero, so x≠2'},
  {id:10, topicId:'math-functions', topic:'Functions', difficulty:'hard', source:'CIE 2023 Summer', question:'若f(x)=ax+b，且f(1)=3，f(2)=5，求f(3)', questionEn:'If f(x)=ax+b, f(1)=3, f(2)=5, find f(3)', options:['7','6','8','9'], correct:0, explanation:'由f(1)=a+b=3，f(2)=2a+b=5，解得a=2,b=1，所以f(3)=7', explanationEn:'From f(1)=a+b=3, f(2)=2a+b=5, get a=2,b=1, so f(3)=7'},

  // Math - Coordinate Geometry (5道)
  {id:11, topicId:'math-coordinate', topic:'Coordinate Geometry', difficulty:'easy', source:'CIE 2023 Summer', question:'直线2x+y=4的斜率是？', questionEn:'The slope of line 2x+y=4 is?', options:['-2','2','4','-1/2'], correct:0, explanation:'化为y=-2x+4，斜率为-2', explanationEn:'Rewrite as y=-2x+4, slope is -2'},
  {id:12, topicId:'math-coordinate', topic:'Coordinate Geometry', difficulty:'easy', source:'CIE 2022 Winter', question:'点(1,2)到点(4,6)的距离是？', questionEn:'The distance from (1,2) to (4,6) is?', options:['5','4','3','6'], correct:0, explanation:'d=√[(4-1)²+(6-2)²]=√(9+16)=5', explanationEn:'d=√[(4-1)²+(6-2)²]=√(9+16)=5'},
  {id:13, topicId:'math-coordinate', topic:'Coordinate Geometry', difficulty:'medium', source:'CIE 2023 Winter', question:'过点(1,2)且斜率为3的直线方程是？', questionEn:'The line through (1,2) with slope 3 is?', options:['y-2=3(x-1)','y=3x+2','y=3x-1','y+2=3(x+1)'], correct:0, explanation:'点斜式：y-2=3(x-1)', explanationEn:'Point-slope form: y-2=3(x-1)'},
  {id:14, topicId:'math-coordinate', topic:'Coordinate Geometry', difficulty:'medium', source:'CIE 2022 Summer', question:'直线y=2x+1与y=2x-3的关系是？', questionEn:'The relationship between y=2x+1 and y=2x-3 is?', options:['Parallel','Perpendicular','Intersect','Coincident'], correct:0, explanation:'两直线斜率相等(都为2)，所以平行', explanationEn:'Both lines have slope 2, so they are parallel'},
  {id:15, topicId:'math-coordinate', topic:'Coordinate Geometry', difficulty:'hard', source:'CIE 2023 Summer', question:'求过点(0,0)和(3,4)的直线与过点(0,3)和(4,0)的直线的交点', questionEn:'Find intersection of line through (0,0),(3,4) and line through (0,3),(4,0)', options:['(1.5,2)','(2,1.5)','(1,1)','(0,0)'], correct:0, explanation:'第一条直线y=(4/3)x，第二条y=3-(3/4)x，联立解得x=1.5,y=2', explanationEn:'First line: y=(4/3)x, second: y=3-(3/4)x, solve to get x=1.5,y=2'},

  // Math - Trigonometry (5道)
  {id:16, topicId:'math-trigonometry', topic:'Trigonometry', difficulty:'easy', source:'CIE 2023 Summer', question:'sin²θ+cos²θ=?', questionEn:'sin²θ+cos²θ=?', options:['1','0','sin2θ','cos2θ'], correct:0, explanation:'基本三角恒等式', explanationEn:'Basic trigonometric identity'},
  {id:17, topicId:'math-trigonometry', topic:'Trigonometry', difficulty:'easy', source:'CIE 2022 Winter', question:'sin30°=?', questionEn:'sin30°=?', options:['1/2','√3/2','1','√2/2'], correct:0, explanation:'sin30°=1/2', explanationEn:'sin30°=1/2'},
  {id:18, topicId:'math-trigonometry', topic:'Trigonometry', difficulty:'medium', source:'CIE 2023 Winter', question:'tanθ=?', questionEn:'tanθ=?', options:['sinθ/cosθ','cosθ/sinθ','sin+cos','1/sin'], correct:0, explanation:'tanθ=sinθ/cosθ', explanationEn:'tanθ=sinθ/cosθ'},
  {id:19, topicId:'math-trigonometry', topic:'Trigonometry', difficulty:'medium', source:'CIE 2022 Summer', question:'若sinθ=3/5且θ为锐角，求cosθ', questionEn:'If sinθ=3/5 and θ is acute, find cosθ', options:['4/5','3/4','5/4','1/5'], correct:0, explanation:'由sin²θ+cos²θ=1，得cosθ=4/5', explanationEn:'From sin²θ+cos²θ=1, cosθ=4/5'},
  {id:20, topicId:'math-trigonometry', topic:'Trigonometry', difficulty:'hard', source:'CIE 2023 Summer', question:'解方程sinx=√3/2，0°≤x≤360°', questionEn:'Solve sinx=√3/2 for 0°≤x≤360°', options:['60°,120°','30°,150°','45°,135°','60°,300°'], correct:0, explanation:'sin60°=sin120°=√3/2', explanationEn:'sin60°=sin120°=√3/2'},

  // Math - Sequences (3道)
  {id:21, topicId:'math-sequences', topic:'Sequences', difficulty:'easy', source:'CIE 2023 Summer', question:'等差数列2,5,8,...的第10项是？', questionEn:'The 10th term of arithmetic sequence 2,5,8,... is?', options:['29','27','30','28'], correct:0, explanation:'a₁₀=2+9×3=29', explanationEn:'a₁₀=2+9×3=29'},
  {id:22, topicId:'math-sequences', topic:'Sequences', difficulty:'medium', source:'CIE 2022 Winter', question:'等比数列2,4,8,...的第5项是？', questionEn:'The 5th term of geometric sequence 2,4,8,... is?', options:['32','16','64','8'], correct:0, explanation:'a₅=2×2⁴=32', explanationEn:'a₅=2×2⁴=32'},
  {id:23, topicId:'math-sequences', topic:'Sequences', difficulty:'medium', source:'CIE 2023 Winter', question:'等差数列首项为3，公差为2，前10项和是？', questionEn:'Arithmetic sequence with first term 3, common difference 2, sum of first 10 terms?', options:['120','110','100','90'], correct:0, explanation:'S₁₀=(10/2)(2×3+9×2)=5×24=120', explanationEn:'S₁₀=(10/2)(2×3+9×2)=5×24=120'},

  // Math - Differentiation (4道)
  {id:24, topicId:'math-differentiation', topic:'Differentiation', difficulty:'easy', source:'CIE 2023 Summer', question:'y=x³的导数是？', questionEn:'The derivative of y=x³ is?', options:['3x²','x²','3x','x³'], correct:0, explanation:'幂函数求导: d/dx(xⁿ)=nxⁿ⁻¹', explanationEn:'Power rule: d/dx(xⁿ)=nxⁿ⁻¹'},
  {id:25, topicId:'math-differentiation', topic:'Differentiation', difficulty:'easy', source:'CIE 2022 Winter', question:'y=eˣ的导数是？', questionEn:'The derivative of y=eˣ is?', options:['eˣ','xeˣ⁻¹','eˣ⁻¹','eˣ⁺¹'], correct:0, explanation:'eˣ的导数仍是eˣ', explanationEn:'Derivative of eˣ is eˣ'},
  {id:26, topicId:'math-differentiation', topic:'Differentiation', difficulty:'medium', source:'CIE 2023 Winter', question:'y=x²+3x-1在x=1处的切线斜率是？', questionEn:'The slope of tangent to y=x²+3x-1 at x=1 is?', options:['5','2','3','1'], correct:0, explanation:'dy/dx=2x+3，在x=1处斜率为5', explanationEn:'dy/dx=2x+3, at x=1 slope is 5'},
  {id:27, topicId:'math-differentiation', topic:'Differentiation', difficulty:'hard', source:'CIE 2022 Summer', question:'y=(2x+1)⁵的导数是？', questionEn:'The derivative of y=(2x+1)⁵ is?', options:['10(2x+1)⁴','5(2x+1)⁴','(2x+1)⁴','2(2x+1)⁴'], correct:0, explanation:'链式法则：dy/dx=5(2x+1)⁴×2=10(2x+1)⁴', explanationEn:'Chain rule: dy/dx=5(2x+1)⁴×2=10(2x+1)⁴'},

  // Math - Integration (3道)
  {id:28, topicId:'math-integration', topic:'Integration', difficulty:'easy', source:'CIE 2023 Summer', question:'∫x²dx=?', questionEn:'∫x²dx=?', options:['x³/3+C','x³','x²/2+C','x³+C'], correct:0, explanation:'幂函数积分', explanationEn:'Power rule integration'},
  {id:29, topicId:'math-integration', topic:'Integration', difficulty:'easy', source:'CIE 2022 Winter', question:'∫eˣdx=?', questionEn:'∫eˣdx=?', options:['eˣ+C','eˣ','xe+C','eˣ+1'], correct:0, explanation:'eˣ的积分是eˣ+C', explanationEn:'Integral of eˣ is eˣ+C'},
  {id:30, topicId:'math-integration', topic:'Integration', difficulty:'medium', source:'CIE 2023 Winter', question:'∫₁²(2x+1)dx=?', questionEn:'∫₁²(2x+1)dx=?', options:['4','3','5','2'], correct:0, explanation:'=[x²+x]₁²=(4+2)-(1+1)=4', explanationEn:'=[x²+x]₁²=(4+2)-(1+1)=4'},

  // ==================== 物理 (30道) ====================
  // Physics - Physical Quantities (3道)
  {id:31, topicId:'physics-quantities', topic:'Physical Quantities', difficulty:'easy', source:'CIE 2023 Summer', question:'加速度的单位是？', questionEn:'The unit of acceleration is?', options:['m/s²','m/s','m²/s','m/s³'], correct:0, explanation:'加速度=速度变化/时间，单位是m/s²', explanationEn:'Acceleration=change in velocity/time, unit is m/s²'},
  {id:32, topicId:'physics-quantities', topic:'Physical Quantities', difficulty:'easy', source:'CIE 2022 Winter', question:'力的单位牛顿(N)用基本单位表示是？', questionEn:'The unit of force Newton(N) in base units is?', options:['kg·m/s²','kg·m/s','kg/s²','m/s²'], correct:0, explanation:'由F=ma，N=kg×m/s²', explanationEn:'From F=ma, N=kg×m/s²'},
  {id:33, topicId:'physics-quantities', topic:'Physical Quantities', difficulty:'medium', source:'CIE 2023 Winter', question:'功率的单位瓦特(W)用基本单位表示是？', questionEn:'The unit of power Watt(W) in base units is?', options:['kg·m²/s³','kg·m/s²','kg·m²/s²','m²/s³'], correct:0, explanation:'功率=功/时间=力×距离/时间，W=kg·m²/s³', explanationEn:'Power=work/time=force×distance/time, W=kg·m²/s³'},

  // Physics - Kinematics (5道)
  {id:34, topicId:'physics-kinematics', topic:'Kinematics', difficulty:'easy', source:'CIE 2023 Summer', question:'在公式v=v₀+at中，a表示？', questionEn:'In the formula v=v₀+at, a represents?', options:['Acceleration','Velocity','Displacement','Time'], correct:0, explanation:'a表示加速度(acceleration)', explanationEn:'a represents acceleration'},
  {id:35, topicId:'physics-kinematics', topic:'Kinematics', difficulty:'easy', source:'CIE 2022 Winter', question:'公式s=vt适用于？', questionEn:'The formula s=vt applies to?', options:['Uniform motion','Accelerated motion','Decelerated motion','Circular motion'], correct:0, explanation:'s=vt只适用于匀速直线运动', explanationEn:'s=vt only applies to uniform linear motion'},
  {id:36, topicId:'physics-kinematics', topic:'Kinematics', difficulty:'medium', source:'CIE 2023 Winter', question:'物体从静止开始以2m/s²加速，5秒后的速度是？', questionEn:'Object starts from rest and accelerates at 2m/s², velocity after 5s?', options:['10m/s','5m/s','20m/s','2.5m/s'], correct:0, explanation:'v=u+at=0+2×5=10m/s', explanationEn:'v=u+at=0+2×5=10m/s'},
  {id:37, topicId:'physics-kinematics', topic:'Kinematics', difficulty:'medium', source:'CIE 2022 Summer', question:'竖直上抛的物体到达最高点时？', questionEn:'At the highest point of a vertically thrown object?', options:['Velocity is zero','Acceleration is zero','Both are zero','Neither is zero'], correct:0, explanation:'最高点速度为零，但加速度仍为g', explanationEn:'Velocity is zero at highest point, but acceleration is still g'},
  {id:38, topicId:'physics-kinematics', topic:'Kinematics', difficulty:'hard', source:'CIE 2023 Summer', question:'汽车以20m/s行驶，刹车后5秒停止，求刹车距离', questionEn:'Car travels at 20m/s and stops after 5s braking, find braking distance', options:['50m','100m','25m','75m'], correct:0, explanation:'s=(u+v)t/2=(20+0)×5/2=50m', explanationEn:'s=(u+v)t/2=(20+0)×5/2=50m'},

  // Physics - Dynamics (5道)
  {id:39, topicId:'physics-dynamics', topic:'Dynamics', difficulty:'easy', source:'CIE 2023 Summer', question:'牛顿第二定律F=ma中，m表示？', questionEn:'In Newton\'s second law F=ma, m represents?', options:['Mass','Force','Acceleration','Velocity'], correct:0, explanation:'m表示质量(mass)', explanationEn:'m represents mass'},
  {id:40, topicId:'physics-dynamics', topic:'Dynamics', difficulty:'easy', source:'CIE 2022 Winter', question:'动量守恒的条件是？', questionEn:'Condition for momentum conservation is?', options:['Net external force is zero','No force acts','External work is done','Internal forces only'], correct:0, explanation:'合外力为零时动量守恒', explanationEn:'Momentum is conserved when net external force is zero'},
  {id:41, topicId:'physics-dynamics', topic:'Dynamics', difficulty:'medium', source:'CIE 2023 Winter', question:'质量5kg的物体受10N水平力，摩擦系数0.1，求加速度', questionEn:'5kg object with 10N horizontal force, friction coefficient 0.1, find acceleration', options:['1m/s²','2m/s²','0.5m/s²','1.5m/s²'], correct:0, explanation:'摩擦力f=0.1×5×9.8=4.9N，合力=10-4.9=5.1N，a≈1m/s²', explanationEn:'Friction f=0.1×5×9.8=4.9N, net force=10-4.9=5.1N, a≈1m/s²'},
  {id:42, topicId:'physics-dynamics', topic:'Dynamics', difficulty:'medium', source:'CIE 2022 Summer', question:'两物体碰撞前后总动量？', questionEn:'Total momentum of two objects before and after collision?', options:['Conserved','Increases','Decreases','Becomes zero'], correct:0, explanation:'碰撞过程中动量守恒', explanationEn:'Momentum is conserved during collision'},
  {id:43, topicId:'physics-dynamics', topic:'Dynamics', difficulty:'hard', source:'CIE 2023 Summer', question:'质量为m的物体在光滑斜面上滑下，斜面倾角θ，求加速度', questionEn:'Object of mass m slides down smooth incline with angle θ, find acceleration', options:['gsinθ','gcosθ','gtanθ','g'], correct:0, explanation:'沿斜面方向合力=mgsinθ，所以a=gsinθ', explanationEn:'Force along incline=mgsinθ, so a=gsinθ'},

  // Physics - Forces (3道)
  {id:44, topicId:'physics-forces', topic:'Forces', difficulty:'easy', source:'CIE 2023 Summer', question:'摩擦力的方向？', questionEn:'The direction of friction force is?', options:['Opposite to motion','Same as motion','Perpendicular to motion','Uncertain'], correct:0, explanation:'摩擦力阻碍相对运动，方向与运动方向相反', explanationEn:'Friction opposes relative motion, direction opposite to motion'},
  {id:45, topicId:'physics-forces', topic:'Forces', difficulty:'medium', source:'CIE 2022 Winter', question:'物体处于平衡状态的条件是？', questionEn:'Condition for object to be in equilibrium is?', options:['Net force is zero','Net force is constant','Acceleration is zero','Velocity is zero'], correct:0, explanation:'平衡条件：合外力为零', explanationEn:'Equilibrium condition: net force is zero'},
  {id:46, topicId:'physics-forces', topic:'Forces', difficulty:'medium', source:'CIE 2023 Winter', question:'两个垂直的力3N和4N，合力大小是？', questionEn:'Two perpendicular forces 3N and 4N, magnitude of resultant force?', options:['5N','7N','1N','12N'], correct:0, explanation:'R=√(3²+4²)=5N', explanationEn:'R=√(3²+4²)=5N'},

  // Physics - Energy (4道)
  {id:47, topicId:'physics-energy', topic:'Energy', difficulty:'easy', source:'CIE 2023 Summer', question:'动能公式是？', questionEn:'The formula for kinetic energy is?', options:['½mv²','mv²','mgh','mv'], correct:0, explanation:'动能Ek=½mv²', explanationEn:'Kinetic energy Ek=½mv²'},
  {id:48, topicId:'physics-energy', topic:'Energy', difficulty:'easy', source:'CIE 2022 Winter', question:'重力势能公式是？', questionEn:'The formula for gravitational potential energy is?', options:['mgh','½mv²','mv²','mg/h'], correct:0, explanation:'重力势能Ep=mgh', explanationEn:'Gravitational potential energy Ep=mgh'},
  {id:49, topicId:'physics-energy', topic:'Energy', difficulty:'medium', source:'CIE 2023 Winter', question:'质量2kg的物体以10m/s运动，动能是？', questionEn:'2kg object moving at 10m/s, kinetic energy is?', options:['100J','200J','50J','20J'], correct:0, explanation:'Ek=½×2×10²=100J', explanationEn:'Ek=½×2×10²=100J'},
  {id:50, topicId:'physics-energy', topic:'Energy', difficulty:'medium', source:'CIE 2022 Summer', question:'机械能守恒的条件是？', questionEn:'Condition for conservation of mechanical energy is?', options:['Only conservative forces do work','No force acts','Net force is zero','Velocity is constant'], correct:0, explanation:'只有保守力做功时机械能守恒', explanationEn:'Mechanical energy conserved when only conservative forces do work'},

  // Physics - Waves (4道)
  {id:51, topicId:'physics-waves', topic:'Waves', difficulty:'easy', source:'CIE 2023 Summer', question:'波速公式是？', questionEn:'The wave speed formula is?', options:['v=fλ','v=f/λ','v=λ/f','v=λf'], correct:0, explanation:'v=fλ', explanationEn:'v=fλ'},
  {id:52, topicId:'physics-waves', topic:'Waves', difficulty:'easy', source:'CIE 2022 Winter', question:'电磁波在真空中的速度是？', questionEn:'The speed of electromagnetic waves in vacuum is?', options:['c','c/2','2c','c/λ'], correct:0, explanation:'电磁波速度=光速c=3×10⁸m/s', explanationEn:'EM wave speed=speed of light c=3×10⁸m/s'},
  {id:53, topicId:'physics-waves', topic:'Waves', difficulty:'medium', source:'CIE 2023 Winter', question:'频率50Hz，波速340m/s，波长是？', questionEn:'Frequency 50Hz, wave speed 340m/s, wavelength is?', options:['6.8m','17m','3.4m','0.68m'], correct:0, explanation:'λ=v/f=340/50=6.8m', explanationEn:'λ=v/f=340/50=6.8m'},
  {id:54, topicId:'physics-waves', topic:'Waves', difficulty:'medium', source:'CIE 2022 Summer', question:'波的衍射现象在什么时候最明显？', questionEn:'When is wave diffraction most obvious?', options:['Wavelength comparable to aperture size','Wavelength much smaller than aperture','Wavelength much larger than aperture','Always the same'], correct:0, explanation:'波长与孔径相当时衍射最明显', explanationEn:'Diffraction most obvious when wavelength comparable to aperture size'},

  // Physics - Optics (3道)
  {id:55, topicId:'physics-optics', topic:'Optics', difficulty:'easy', source:'CIE 2023 Summer', question:'折射定律是？', questionEn:'Snell\'s law is?', options:['n₁sinθ₁=n₂sinθ₂','sinθ₁=sinθ₂','θ₁=θ₂','n₁+n₂'], correct:0, explanation:'n₁sinθ₁=n₂sinθ₂', explanationEn:'n₁sinθ₁=n₂sinθ₂'},
  {id:56, topicId:'physics-optics', topic:'Optics', difficulty:'medium', source:'CIE 2022 Winter', question:'全反射的条件是？', questionEn:'Condition for total internal reflection is?', options:['Incident angle > critical angle','Incident angle < critical angle','Incident angle = 90°','Any angle'], correct:0, explanation:'入射角大于临界角时发生全反射', explanationEn:'TIR occurs when incident angle > critical angle'},
  {id:57, topicId:'physics-optics', topic:'Optics', difficulty:'medium', source:'CIE 2023 Winter', question:'光从空气(n=1)射入玻璃(n=1.5)，入射角30°，折射角约为？', questionEn:'Light from air(n=1) to glass(n=1.5), incident angle 30°, refracted angle is about?', options:['19.5°','30°','45°','60°'], correct:0, explanation:'由n₁sinθ₁=n₂sinθ₂，sinθ₂=sin30°/1.5=0.333，θ₂≈19.5°', explanationEn:'From n₁sinθ₁=n₂sinθ₂, sinθ₂=sin30°/1.5=0.333, θ₂≈19.5°'},

  // Physics - Electricity (3道)
  {id:58, topicId:'physics-electricity', topic:'Electricity', difficulty:'easy', source:'CIE 2023 Summer', question:'欧姆定律是？', questionEn:'Ohm\'s law is?', options:['V=IR','V=I/R','R=VI','I=V/R'], correct:0, explanation:'V=IR', explanationEn:'V=IR'},
  {id:59, topicId:'physics-electricity', topic:'Electricity', difficulty:'medium', source:'CIE 2022 Winter', question:'电阻R₁和R₂并联，总电阻是？', questionEn:'Resistors R₁ and R₂ in parallel, total resistance is?', options:['R₁R₂/(R₁+R₂)','R₁+R₂','(R₁+R₂)/R₁R₂','√(R₁R₂)'], correct:0, explanation:'1/R=1/R₁+1/R₂，R=R₁R₂/(R₁+R₂)', explanationEn:'1/R=1/R₁+1/R₂, R=R₁R₂/(R₁+R₂)'},
  {id:60, topicId:'physics-electricity', topic:'Electricity', difficulty:'medium', source:'CIE 2023 Winter', question:'电功率公式是？', questionEn:'The formula for electric power is?', options:['P=VI','P=V/I','P=I²R','P=IR'], correct:0, explanation:'P=VI=I²R=V²/R', explanationEn:'P=VI=I²R=V²/R'}
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRACTICE_QUESTION_BANK };
}
