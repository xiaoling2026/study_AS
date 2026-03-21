// 丰富的知识点数据 - 由本地模型生成详细内容
var enrichedTopicData = {
    'physics-waves': {
        name: 'Waves 波',
        subject: 'physics',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<div class="bg-blue-50">Wave (波): A disturbance that transfers energy through a medium without permanent displacement of the medium.</div><div class="bg-green-50">Wave Types (波的类型):<br>• Transverse (横波): Oscillations perpendicular to direction of travel<br>• Longitudinal (纵波): Oscillations parallel to direction of travel</div><div class="bg-purple-50">Wave Parameters (波参数):<br>• Wavelength \$\lambda\$: Distance between consecutive crests<br>• Frequency \$f\$: Number of oscillations per second<br>• Amplitude \$A\$: Maximum displacement<br>• Period \$T = \frac{1}{f}\$</div><div class="bg-yellow-50">Wave Equation (波动方程): \$v = f\lambda\$ where \$v\$ is wave speed</div>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<p><strong>Wave Speed Calculations (波速计算):</strong></p><p>\$v = f\lambda = \frac{\lambda}{T}\$</p><p><strong>Progressive Wave Equation (行波方程):</strong></p><p>\$y = A \sin(\omega t - kx)\$ where \$\omega = 2\pi f\$ and \$k = \frac{2\pi}{\lambda}\$</p><p><strong>Stationary Waves (驻波):</strong></p><p>Formed by superposition of two waves traveling in opposite directions.</p><p>Nodes: Points of zero amplitude</p><p>Antinodes: Points of maximum amplitude</p>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<ul><li><strong>Mistake 1:</strong> Confusing frequency and period (\$f = \frac{1}{T}\$)</li><li><strong>Mistake 2:</strong> Using wrong units (Hz for frequency, m for wavelength)</li><li><strong>Mistake 3:</strong> Thinking waves transport matter (they transport energy)</li><li><strong>Mistake 4:</strong> Confusing nodes and antinodes in stationary waves</li></ul>`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<p><strong>Example 1:</strong> Wave has frequency 50 Hz and wavelength 2 m. Find speed.</p><p>Solution: \$v = f\lambda = 50 \times 2 = 100\$ m/s</p><p><strong>Example 2:</strong> Sound wave travels at 340 m/s with frequency 170 Hz. Find wavelength.</p><p>Solution: \$\lambda = \frac{v}{f} = \frac{340}{170} = 2\$ m</p><p><strong>Example 3:</strong> String of length 1.2 m vibrates in 3 loops. Find wavelength.</p><p>Solution: \$1.5\lambda = 1.2\$, so \$\lambda = 0.8\$ m</p>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<p><a href="https://www.youtube.com/watch?v=7Xo6L2RKLgs" target="_blank">YouTube - Introduction to Waves</a></p><p><a href="https://www.bilibili.com/video/BV1C4411e7hV" target="_blank">Bilibili - 机械波基础</a></p>`
            }
        ]
    },
    'physics-quantities': {
        name: 'Physical Quantities 物理量',
        subject: 'physics',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<div class="bg-blue-50">Physical Quantity (物理量): A property that can be measured and expressed as a number with a unit. Examples: length, mass, time, velocity.</div><div class="bg-green-50">Scalar Quantities (标量): Quantities with magnitude only. Examples: mass, temperature, energy, time.</div><div class="bg-purple-50">Vector Quantities (矢量): Quantities with both magnitude and direction. Examples: displacement, velocity, acceleration, force.</div><div class="bg-yellow-50">SI Units (国际单位): The standard system with 7 base units: meter (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd).</div>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<p><strong>Unit Conversion (单位换算):</strong></p><ol><li>Identify the conversion factor</li><li>Set up as multiplication by 1 (e.g., \$\frac{1000m}{1km}\$)</li><li>Cancel units appropriately</li></ol><p><strong>Dimensional Analysis (量纲分析):</strong></p><p>Check that equations are dimensionally consistent. For example, velocity = \$\frac{[L]}{[T]}\$ = \$[LT^{-1}]\$</p><p><strong>Significant Figures (有效数字):</strong></p><p>Results should be reported with appropriate precision based on input data.</p>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<ul><li><strong>Mistake 1:</strong> Confusing scalar and vector quantities</li><li><strong>Mistake 2:</strong> Incorrect unit conversions (especially prefixes like milli-, kilo-)</li><li><strong>Mistake 3:</strong> Forgetting to include units in final answers</li><li><strong>Mistake 4:</strong> Mixing up different unit systems (SI vs imperial)</li></ul>`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<p><strong>Example 1:</strong> Convert 50 km/h to m/s.</p><p>Solution: \$50 \times \frac{1000m}{3600s} = \frac{50000}{3600} = 13.9\$ m/s</p><p><strong>Example 2:</strong> Check dimensional consistency of \$v^2 = u^2 + 2as\$.</p><p>Solution: \$[v^2] = [L^2T^{-2}]\$, \$[u^2] = [L^2T^{-2}]\$, \$[2as] = [LT^{-2}][L] = [L^2T^{-2}]\$. Consistent!</p><p><strong>Example 3:</strong> Express 0.0056 kg in grams.</p><p>Solution: \$0.0056 \times 1000 = 5.6\$ g</p>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<p><a href="https://www.youtube.com/watch?v=m9j3jJ9y2g0" target="_blank">YouTube - Physical Quantities and Units</a></p><p><a href="https://www.bilibili.com/video/BV1b4411e7hN" target="_blank">Bilibili - 物理量与单位制</a></p>`
            }
        ]
    },
    'math-numerical-solution': {
        name: 'Numerical Solution 数值解法',
        subject: 'math',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<div class="bg-blue-50">Numerical Methods (数值方法): Techniques for finding approximate solutions to equations when exact solutions are difficult or impossible to obtain.</div><div class="bg-green-50">Sign Change Method (符号变化法): If \$f(a)\$ and \$f(b)\$ have opposite signs, there is at least one root between \$a\$ and \$b\$.</div><div class="bg-purple-50">Iteration (迭代法): Repeatedly applying a formula to get closer to the solution: \$x_{n+1} = g(x_n)\$.</div><div class="bg-yellow-50">Convergence (收敛): An iterative method converges if successive approximations get closer to the true solution.</div>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<p><strong>Bisection Method (二分法):</strong></p><ol><li>Find interval \$[a, b]\$ where \$f(a)\$ and \$f(b)\$ have opposite signs</li><li>Calculate midpoint \$c = \frac{a + b}{2}\$</li><li>Determine which subinterval contains root</li><li>Repeat until desired accuracy</li></ol><p><strong>Newton-Raphson Method (牛顿迭代法):</strong></p><p>\$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}\$</p><p>Requires initial guess and derivative.</p>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<ul><li><strong>Mistake 1:</strong> Not checking sign change before applying bisection</li><li><strong>Mistake 2:</strong> Poor initial guess causing divergence in Newton-Raphson</li><li><strong>Mistake 3:</strong> Insufficient iterations for required accuracy</li><li><strong>Mistake 4:</strong> Rounding errors accumulating in calculations</li></ul>`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<p><strong>Example 1:</strong> Show that \$x^3 - 2x - 5 = 0\$ has a root between 2 and 3.</p><p>Solution: \$f(2) = 8 - 4 - 5 = -1 < 0\$, \$f(3) = 27 - 6 - 5 = 16 > 0\$. Sign change confirms root.</p><p><strong>Example 2:</strong> Use one iteration of Newton-Raphson for \$x^2 - 5 = 0\$, starting with \$x_0 = 2\$.</p><p>Solution: \$f(x) = x^2 - 5\$, \$f'(x) = 2x\$. \$x_1 = 2 - \frac{4-5}{4} = 2 + 0.25 = 2.25\$</p><p><strong>Example 3:</strong> Find root of \$x^3 + x = 10\$ correct to 1 decimal place.</p><p>Solution: Try \$x = 2\$: \$8 + 2 = 10\$. Root is \$x = 2.0\$</p>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<p><a href="https://www.youtube.com/watch?v=OLqdJMjzib8" target="_blank">YouTube - Numerical Methods</a></p><p><a href="https://www.bilibili.com/video/BV1At411d7VJ" target="_blank">Bilibili - 数值计算方法</a></p>`
            }
        ]
    },
    'math-complex': {
        name: 'Complex Numbers 复数',
        subject: 'math',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<div class="bg-blue-50">Definition (定义): A complex number is of the form \$z = a + bi\$, where \$a\$ and \$b\$ are real numbers, and \$i\$ is the imaginary unit with \$i^2 = -1\$.</div><div class="bg-green-50">Real and Imaginary Parts (实部与虚部): For \$z = a + bi\$, \$Re(z) = a\$ (real part) and \$Im(z) = b\$ (imaginary part).</div><div class="bg-purple-50">Complex Conjugate (共轭复数): The conjugate of \$z = a + bi\$ is \$z^* = a - bi\$.</div><div class="bg-yellow-50">Modulus (模): \$|z| = \sqrt{a^2 + b^2}\$ represents the distance from origin in complex plane.</div>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<p><strong>Operations with Complex Numbers (复数运算):</strong></p><ol><li><strong>Addition:</strong> \$(a + bi) + (c + di) = (a + c) + (b + d)i\$</li><li><strong>Subtraction:</strong> \$(a + bi) - (c + di) = (a - c) + (b - d)i\$</li><li><strong>Multiplication:</strong> \$(a + bi)(c + di) = (ac - bd) + (ad + bc)i\$</li><li><strong>Division:</strong> Multiply numerator and denominator by conjugate of denominator</li></ol><p><strong>Polar Form (极坐标形式):</strong> \$z = r(cos \theta + i \sin \theta) = re^{i\theta}\$</p>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<ul><li><strong>Mistake 1:</strong> Forgetting that \$i^2 = -1\$, not \$1\$</li><li><strong>Mistake 2:</strong> Confusing \$|z|^2\$ with \$z^2\$</li><li><strong>Mistake 3:</strong> Errors in division - forgetting to multiply by conjugate</li><li><strong>Mistake 4:</strong> Mixing up real and imaginary parts when plotting</li></ul>`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<p><strong>Example 1:</strong> Simplify \$(3 + 2i) + (1 - 4i)\$</p><p>Solution: \$(3 + 1) + (2 - 4)i = 4 - 2i\$</p><p><strong>Example 2:</strong> Multiply \$(2 + i)(3 - 2i)\$</p><p>Solution: \$6 - 4i + 3i - 2i^2 = 6 - i + 2 = 8 - i\$</p><p><strong>Example 3:</strong> Find modulus of \$z = 3 + 4i\$</p><p>Solution: \$|z| = \sqrt{3^2 + 4^2} = \sqrt{25} = 5\$</p>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<p><a href="https://www.youtube.com/watch?v=5Pcpk5qG8cY" target="_blank">YouTube - Complex Numbers Explained</a></p><p><a href="https://www.bilibili.com/video/BV1E4411M7ZL" target="_blank">Bilibili - 复数基础教程</a></p>`
            }
        ]
    },
    'math-logarithms': {
        name: 'Logarithms 对数',
        subject: 'math',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<div class="bg-blue-50">Definition of Logarithm (对数的定义): If \$a^x = N\$ (where \$a > 0\$, \$a \neq 1\$), then \$x\$ is called the logarithm of \$N\$ to the base \$a\$, written as \$x = \log_a N\$.</div><div class="bg-green-50">Common Logarithm (常用对数): Logarithms with base 10 are called common logarithms, written as \$\log N\$ or \$\log_{10} N\$.</div><div class="bg-purple-50">Natural Logarithm (自然对数): Logarithms with base \$e\$ (where \$e \approx 2.718\$) are called natural logarithms, written as \$\ln N\$.</div><div class="bg-yellow-50">Key Properties (基本性质):<br>1. \$\log_a 1 = 0\$<br>2. \$\log_a a = 1\$<br>3. \$a^{\log_a N} = N\$<br>4. \$\log_a a^x = x\$</div>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<p><strong>Laws of Logarithms (对数运算法则):</strong></p><ol><li><strong>Product Rule (乘法法则):</strong> \$\log_a M + \log_a N = \log_a(MN)\$</li><li><strong>Quotient Rule (除法法则):</strong> \$\log_a M - \log_a N = \log_a(\frac{M}{N})\$</li><li><strong>Power Rule (幂法则):</strong> \$\log_a M^n = n\log_a M\$</li><li><strong>Change of Base (换底公式):</strong> \$\log_a b = \frac{\log_c b}{\log_c a}\$</li></ol><p><strong>Solving Logarithmic Equations (解对数方程):</strong></p><ol><li>Use logarithm laws to simplify</li><li>Convert to exponential form if needed</li><li>Check solutions (logarithm arguments must be positive)</li></ol>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<ul><li><strong>Mistake 1:</strong> \$\log_a(M + N) \neq \log_a M + \log_a N\$ (Logarithm of sum is not sum of logarithms)</li><li><strong>Mistake 2:</strong> Forgetting to check that arguments must be positive (\$M > 0\$, \$N > 0\$)</li><li><strong>Mistake 3:</strong> Confusing \$\log_a M^n\$ with \$(\log_a M)^n\$</li><li><strong>Mistake 4:</strong> Incorrect change of base formula application</li></ul>`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<p><strong>Example 1:</strong> Simplify \$\log_2 8 + \log_2 4\$</p><p>Solution: Using product rule: \$\log_2 8 + \log_2 4 = \log_2(8 \times 4) = \log_2 32 = 5\$</p><p><strong>Example 2:</strong> Solve \$\log_3 x = 4\$</p><p>Solution: Convert to exponential form: \$x = 3^4 = 81\$</p><p><strong>Example 3:</strong> Evaluate \$\log_2 50\$ using change of base</p><p>Solution: \$\log_2 50 = \frac{\log 50}{\log 2} = \frac{1.699}{0.301} \approx 5.644\$</p>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<p><a href="https://www.youtube.com/watch?v=Zh6YF5JkY1c" target="_blank">YouTube - Introduction to Logarithms</a></p><p><a href="https://www.bilibili.com/video/BV1x4411e7hV" target="_blank">Bilibili - 对数函数详解</a></p>`
            }
        ]
    },
    'physics-forces': {
        name: 'Forces 力',
        subject: 'physics',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<div class="bg-blue-50">A force is a push or pull acting on an object. Forces can change the motion or shape of an object.</div><br>
<div class="bg-green-50">The SI unit of force is the newton (N), where 1 N = 1 kg m/s<sup>2</sup>.</div><br>
<div class="bg-purple-50">Forces can be categorized into contact forces (e.g., friction, tension, normal force) and non-contact forces (e.g., gravity, electrostatic, magnetic).</div><br>
<div class="bg-yellow-50">The net force acting on an object is the vector sum of all forces.</div><br>
Key formulas include Newton's second law: <span class="inline-formula">F<sub>net</sub> = ma</span>, where F<sub>net</sub> is the net force, m is the mass, and a is the acceleration. <span class="inline-formula">F<sub>G</sub> = mg</span> is the formula for gravitational force, where F<sub>G</sub> is the gravitational force, m is the mass, and g is the acceleration due to gravity (9.81 m/s<sup>2</sup>).`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `Step-by-step problem solving methods:
1. Identify all forces acting on the object.
2. Draw a free-body diagram to visualize the forces.
3. Resolve forces into components if necessary.
4. Apply Newton's laws to find the unknowns.
5. Check units and significant figures.
Example: An object of mass 5 kg is on a horizontal surface with a coefficient of friction 0.2. Find the frictional force.
Solution: The normal force N = mg = 5 * 9.81 = 49.05 N. The frictional force F<sub>fr</sub> = μN = 0.2 * 49.05 = 9.81 N.`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `1. Forgetting to draw a free-body diagram can lead to missing forces.
2. Misidentifying forces (e.g., confusing friction with normal force) can cause incorrect solutions.
3. Failing to consider all possible forces in a problem can lead to incomplete analysis.
4. Misinterpreting vector directions can result in incorrect force calculations.`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<div>Example 1: A 10 kg block is pushed along a horizontal surface with a force of 50 N. The coefficient of friction is 0.1. Find the acceleration of the block.</div><br>
Solution: The normal force N = mg = 10 * 9.81 = 98.1 N. The frictional force F<sub>fr</sub> = μN = 0.1 * 98.1 = 9.81 N. The net force F<sub>net</sub> = 50 - 9.81 = 40.19 N. Using Newton's second law: a = F<sub>net</sub> / m = 40.19 / 10 = 4.019 m/s<sup>2</sup>.<br><br>
Example 2: A 2 kg object is hanging from a rope. Find the tension in the rope if the object is stationary.</div><br>
Solution: Since the object is stationary, the net force is zero. The tension in the rope balances the gravitational force. T = mg = 2 * 9.81 = 19.62 N.`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `YouTube: <a href="https://www.youtube.com/watch?v=example1">Newton's Laws Explained</a><br>
Bilibili: <a href="https://www.bilibili.com/video/avexample2">力与运动的关系</a>`
            }
        ]
    },
    'physics-electricity': {
        name: 'Electricity 电学',
        subject: 'physics',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<div class='bg-blue-50'>Electric Charge (电荷):</div> An electric charge is a fundamental property of matter that causes it to experience a force when placed in an electric field. Positive charges and negative charges are attracted to each other. Electric charge is measured in coulombs (C).<br><br><div class='bg-green-50'>Electric Current (电流):</div> Electric current is the flow of electric charge. It is measured in amperes (A) and is the rate of flow of charge through a conductor. The formula for current is \$I = rac{Q}{t}\$, where \$I\$ is current, \$Q\$ is charge, and \$t\$ is time.<br><br><div class='bg-purple-50'>Ohm's Law (欧姆定律):</div> Ohm's Law relates the current flowing through a conductor to the voltage across it and the resistance of the conductor. It is expressed as \$V = IR\$, where \$V\$ is voltage, \$I\$ is current, and \$R\$ is resistance.<br><br><div class='bg-yellow-50'>Electric Potential (电势):</div> Electric potential is the work done per unit charge to move a charge from a reference point to a point in an electric field. It is measured in volts (V).<br><br>电荷 (Electric Charge): 电荷是一种基本的物质属性，它会在电场中体验到力。正电荷和负电荷会被吸引到一起。电荷的测量单位是库仑 (C)。<br><br>电流 (Electric Current): 电流是电荷流动。它以安培 (A) 为单位测量，表示通过导体的电荷流速。电流的公式为 \$I = rac{Q}{t}\$，其中 \$I\$ 是电流，\$Q\$ 是电荷，\$t\$ 是时间。<br><br>欧姆定律 (Ohm's Law): 欧姆定律描述了导体中的电流与其电压和电阻之间的关系。它表示为 \$V = IR\$，其中 \$V\$ 是电压，\$I\$ 是电流，\$R\$ 是电阻。<br><br>电势 (Electric Potential): 电势是将一个电荷从参考点移到电场中一个点所需的功的单位电荷。它以伏特 (V) 为单位测量。`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `1. Identify the type of problem (circuit analysis, current calculation, etc.).<br>2. Draw the circuit diagram and label all components (resistors, capacitors, etc.).<br>3. Use Ohm's Law and Kirchhoff's Laws to solve for unknowns.<br>4. Double-check your calculations and ensure units are consistent.<br><br>1. 确定问题类型（电路分析、电流计算等）。<br>2. 绘制电路图并标记所有组件（电阻、电容器等）。<br>3. 使用欧姆定律和基尔霍夫定律求解未知数。<br>4. 检查计算并确保单位一致。`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `1. Forgetting to check the units of the final answer (e.g., A for current, V for voltage).<br>2. Misapplying Ohm's Law in parallel circuits (the voltage across each component is the same, not the current).<br>3. Not including the correct sign for charge (positive or negative).<br>1. 忘记检查最终答案的单位（例如安培 (A) 用于电流，伏特 (V) 用于电压）。<br>2. 在并联电路中错误应用欧姆定律（每个组件的电压相同，而不是电流）。<br>3. 忽略电荷的正确符号（正或负）。`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<div class='bg-blue-50'>Example 1:</div> Find the total resistance of a series circuit with resistors of 10Ω, 20Ω, and 30Ω.<br><br>Solution: In a series circuit, the total resistance is the sum of individual resistances.<br><br>Total Resistance = 10Ω + 20Ω + 30Ω = 60Ω<br><br>10Ω, 20Ω, 和 30Ω 的串联电路的总电阻是多少？<br><br>解答：在串联电路中，总电阻是各个电阻的和。<br><br>总电阻 = 10Ω + 20Ω + 30Ω = 60Ω<br><br><div class='bg-green-50'>Example 2:</div> A 12V battery is connected to a resistor of 4Ω. Calculate the current flowing through the resistor.<br><br>Solution: Use Ohm's Law: \$I = rac{V}{R} = rac{12V}{4Ω} = 3A\$<br><br>一个 12V 的电池连接到一个 4Ω 的电阻上。计算流过电阻的电流。<br><br>解答：使用欧姆定律：\$I = rac{V}{R} = rac{12V}{4Ω} = 3A\$`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `YouTube: <a href='https://www.youtube.com/watch?v=example1'>Understanding Electric Current</a><br>Bilibili: <a href='https://www.bilibili.com/video/BV1aL411E7v8'>欧姆定律与电路分析</a>`
            }
        ]
    },
    'physics-optics': {
        name: 'Optics 光学',
        subject: 'physics',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<div class='bg-blue-50'><p><strong>Reflection 反射</strong> - When light bounces off a surface, it reflects. The angle of incidence equals the angle of reflection, i.e., <span>\$\theta_i = \theta_r\$</span>. (反射 - 当光遇到表面时会发生反射，入射角等于反射角，即 \$\theta_i = \theta_r\$.)</p></div><div class='bg-green-50'><p><strong>Refraction 折射</strong> - Light changes speed when passing through different media. Snell's law states that <span>\$n_1 \sin(\theta_1) = n_2 \sin(\theta_2)\$</span>, where <span>\$n_1\$</span> and <span>\$n_2\$</span> are the refractive indices of the two media. (折射 - 光通过不同介质时速度会改变。斯涅尔定律表明 \$n_1 \sin(\theta_1) = n_2 \sin(\theta_2)\$，其中 \$n_1\$ 和 \$n_2\$ 分别是两种介质的折射率.)</p></div><div class='bg-purple-50'><p><strong>Lens Formula 物镜公式</strong> - For a thin lens, the lens formula is <span>\$\frac{1}{f} = \frac{1}{v} + \frac{1}{u}\$</span>, where <span>\$f\$</span> is the focal length, <span>\$u\$</span> is the object distance, and <span>\$v\$</span> is the image distance. (物镜公式 - 对于薄透镜，物镜公式为 \$\frac{1}{f} = \frac{1}{v} + \frac{1}{u}\$，其中 \$f\$ 是焦距，\$u\$ 是物距，\$v\$ 是像距.)</p></div><div class='bg-yellow-50'><p><strong>Dispersion 色散</strong> - White light is composed of different colors. When passing through a prism, each color bends by a different amount, separating the light into its constituent colors. (色散 - 白光是由不同颜色组成的。当通过棱镜时，每种颜色的折射率不同，从而将白光分解成其组成颜色.)</p></div>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<ol><li><p>Identify the type of optical problem, e.g., reflection, refraction, lens, etc.</p></li><li><p>Apply the relevant equations, such as Snell's law, lens formula, etc.</p></li><li><p>Draw a clear diagram to visualize the situation.</p></li><li><p>Solve for the unknowns step-by-step.</p></li><li><p>Check the units and make sure they cancel out appropriately.</p></li></ol>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<ul><li><p>Misapplying Snell's law - Ensure the correct indices are used and the angles are correctly measured.</p></li><li><p>Forgetting to use the lens formula - Always consider the lens formula when dealing with thin lenses.</p></li><li><p>Incorrectly interpreting diagrams - Pay attention to the orientation and scale of the diagrams.</p></li><li><p>Overlooking sign conventions - Pay attention to the sign of distances and angles.</p></li></ul>`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<div><p><strong>Example 1 - Reflection 反射</strong></p><p>A light ray strikes a mirror at an angle of 30 degrees. Calculate the angle of reflection.</p><p><strong>Solution:</strong></p><p>Using the law of reflection, the angle of reflection is equal to the angle of incidence.</p><p>Angle of reflection = 30 degrees (角度的反射 = 30 度).</p></div><div><p><strong>Example 2 - Refraction 折射</strong></p><p>A light ray enters a glass block from air at an angle of 45 degrees. The refractive index of glass is 1.5. Calculate the angle of refraction.</p><p><strong>Solution:</strong></p><p>Using Snell's law:</p><p>\$1.0 \sin(45) = 1.5 \sin(\theta)\$</p><p>\$\sin(\theta) = \frac{1.0 \sin(45)}{1.5}\$</p><p>\$\theta = \sin^{-1}\left(\frac{1.0 \sin(45)}{1.5}\right)\$</p><p>\$\theta \approx 28.1°\$</p></div><div><p><strong>Example 3 - Lens Formula 物镜公式</strong></p><p>A lens has a focal length of 20 cm. An object is placed 30 cm in front of the lens. Calculate the image distance.</p><p><strong>Solution:</strong></p><p>Using the lens formula:</p><p>\$\frac{1}{20} = \frac{1}{v} + \frac{1}{30}\$</p><p>\$\frac{1}{v} = \frac{1}{20} - \frac{1}{30}\$</p><p>\$\frac{1}{v} = \frac{3 - 2}{60}\$</p><p>\$\frac{1}{v} = \frac{1}{60}\$</p><p>\$v = 60\$ cm</p></div>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<p><a href='https://www.youtube.com/watch?v=example1'>YouTube Video - Reflection and Refraction</a></p><p><a href='https://www.bilibili.com/video/BV11n4y167kQ'>Bilibili Video - Lens Formula</a></p>`
            }
        ]
    },
    'physics-momentum': {
        name: 'Momentum 动量',
        subject: 'physics',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<p>Momentum is a vector quantity that describes the amount of motion an object has. It is defined as the product of an object's mass and its velocity:</p>

<p>\$<span class="bg-blue-50">\text{Momentum} = m \times v</span>\$</p>

<p>(动量是一个矢量量，描述物体运动的量。它定义为物体的质量和速度的乘积：
\$momentum = mass \times velocity\$)</p>

<p>Momentum can be calculated for any moving object, and it is always conserved in a closed system unless acted upon by an external force. The principle of conservation of momentum states that the total momentum of a closed system remains constant:</p>

<p>\$<span class="bg-green-50">\text{Total Momentum Before} = \text{Total Momentum After}</span>\$</p>

<p>(动量守恒定律指出，封闭系统中的总动量保持不变：
\$总动量前 = 总动量后\$)</p>

<p>For collisions, the change in momentum can be calculated using:</p>

<p>\$<span class="bg-yellow-50">\Delta p = m(v_f - v_i)</span>\$</p>

<p>(碰撞中动量的变化可以计算为：
\$\Delta p = m(v_f - v_i)\$)</p>

<p>Where \$\Delta p\$ is the change in momentum, \$m\$ is the mass of the object, \$v_f\$ is the final velocity, and \$v_i\$ is the initial velocity.</p>

<p>(其中\$\Delta p\$是动量的变化，\$m\$是物体的质量，\$v_f\$是最终速度，\$v_i\$是初始速度。)</p>

`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<p>To solve momentum problems, follow these steps:</p>

<ol>
<li><p>Identify the mass and velocity of the object(s).</p></li>
<li><p>Calculate the initial momentum of the system before the event.</p></li>
<li><p>Determine if there are any external forces acting on the system.</p></li>
<li><p>If there are no external forces, the total momentum after the event must be the same as before the event.</p></li>
<li><p>If there are external forces, calculate the change in momentum using the formula \$\Delta p = m(v_f - v_i)\$.</p></li>
<li><p>Solve for the unknown variable, typically the final velocity or the mass of another object.</p></li>
</ol>

<p><strong>Example:</strong></p>

<p>A 2 kg object is moving at 5 m/s. It collides with a 3 kg object at rest. After the collision, the 2 kg object is moving at 2 m/s in the opposite direction. Calculate the final velocity of the 3 kg object.</p>

<p>Solution:</p>

<p>Step 1: Identify the variables.
- Mass of 2 kg object: \$m_1 = 2\$ kg
- Velocity of 2 kg object: \$v_1 = 5\$ m/s
- Mass of 3 kg object: \$m_2 = 3\$ kg
- Velocity of 3 kg object: \$v_2 = 0\$ m/s (at rest)
- Final velocity of 2 kg object: \$v_1' = -2\$ m/s (opposite direction)</p>

<p>Step 2: Calculate the initial momentum.
- Initial momentum: \$p_i = m_1 v_1 + m_2 v_2 = (2 \times 5) + (3 \times 0) = 10\$ kg m/s</p>

<p>Step 3: Use the conservation of momentum to find the final velocity of the 3 kg object.
- Final momentum: \$p_f = p_i = 10\$ kg m/s</p>

<p>Step 4: Use the momentum equation to solve for \$v_2'\$.
- \$10 = (2 \times -2) + (3 \times v_2')\$
- \$10 = -4 + 3v_2'\$
- \$14 = 3v_2'\$
- \$v_2' = \frac{14}{3} = 4.67\$ m/s</p>

<p>The final velocity of the 3 kg object is 4.67 m/s in the direction of the initial motion of the 2 kg object.</p>

`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<p>1. Confusing mass with momentum: Students often confuse the mass of an object with its momentum. Momentum is the product of mass and velocity, not just mass alone.</p>

<p>2. Not considering the direction of momentum: Momentum is a vector quantity, so it has both magnitude and direction. Students sometimes only consider the magnitude and forget the direction.</p>

<p>3. Failing to apply the principle of conservation of momentum: In many problems, the principle of conservation of momentum is crucial. Students sometimes overlook this principle and try to solve problems using incorrect methods.</p>

`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<p><strong>Example 1:</strong></p>

<p>A 1 kg object is moving at 6 m/s. It collides with a 2 kg object that is initially at rest. After the collision, the 1 kg object is moving at 2 m/s in the opposite direction. Calculate the final velocity of the 2 kg object.</p>

<p>Solution:</p>

<p>Step 1: Calculate the initial momentum.
- Initial momentum: \$p_i = (1 \times 6) + (2 \times 0) = 6\$ kg m/s</p>

<p>Step 2: Use the conservation of momentum to find the final velocity of the 2 kg object.
- Final momentum: \$p_f = p_i = 6\$ kg m/s</p>

<p>Step 3: Use the momentum equation to solve for \$v_2'\$.
- \$6 = (1 \times -2) + (2 \times v_2')\$
- \$6 = -2 + 2v_2'\$
- \$8 = 2v_2'\$
- \$v_2' = 4\$ m/s</p>

<p>The final velocity of the 2 kg object is 4 m/s in the direction of the initial motion of the 1 kg object.</p>

<p><strong>Example 2:</strong></p>

<p>A 4 kg object is moving at 3 m/s. It collides with a 2 kg object that is initially at rest. After the collision, the 4 kg object is moving at 1 m/s in the same direction. Calculate the final velocity of the 2 kg object.</p>

<p>Solution:</p>

<p>Step 1: Calculate the initial momentum.
- Initial momentum: \$p_i = (4 \times 3) + (2 \times 0) = 12\$ kg m/s</p>

<p>Step 2: Use the conservation of momentum to find the final velocity of the 2 kg object.
- Final momentum: \$p_f = p_i = 12\$ kg m/s</p>

<p>Step 3: Use the momentum equation to solve for \$v_2'\$.
- \$12 = (4 \times 1) + (2 \times v_2')\$
- \$12 = 4 + 2v_2'\$
- \$8 = 2v_2'\$
- \$v_2' = 4\$ m/s</p>

<p>The final velocity of the 2 kg object is 4 m/s in the same direction as the initial motion of the 4 kg object.</p>

`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<p>1. <a href="https://www.youtube.com/watch?v=example1" target="_blank">YouTube - Momentum Conservation</a></p>

<p>2. <a href="https://www.bilibili.com/video/BVexample2" target="_blank">Bilibili - 动量守恒定律</a></p>

`
            }
        ]
    },
    'physics-energy': {
        name: 'Energy 能量',
        subject: 'physics',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<div class='bg-blue-50'>In physics, energy is defined as the ability to do work. It can be transferred from one object to another and can take different forms such as kinetic energy, potential energy, thermal energy, electrical energy, and chemical energy. The unit of energy in the International System of Units (SI) is the joule (J).</div> <div class='bg-green-50'>The work done by a force on an object is given by the formula W = F * d * cos(θ), where W is the work done, F is the force applied, d is the displacement, and θ is the angle between the force and the displacement.</div> <div class='bg-purple-50'>The kinetic energy (KE) of an object is given by the formula KE = 0.5 * m * v^2, where m is the mass of the object and v is its velocity. Potential energy (PE) is the energy stored in an object due to its position or configuration. The gravitational potential energy (GPE) is given by the formula GPE = m * g * h, where m is the mass, g is the acceleration due to gravity (9.8 m/s^2), and h is the height.</div> <div class='bg-yellow-50'>The total mechanical energy of a system is the sum of its kinetic and potential energies. It is conserved if there is no non-conservative force (like friction) acting on the system.</div> (在物理中，能量被定义为做功的能力。它可以被从一个物体转移到另一个物体，并且可以采取不同的形式，如动能、势能、热能、电能和化学能。国际单位制（SI）中能量的单位是焦耳（J）。) (工作是由力在一个物体上做的，由公式 W = F * d * cos(θ) 给出，其中 W 是工作，F 是力，d 是位移，θ 是力和位移之间的角度。) (动能（KE）的公式为 KE = 0.5 * m * v^2，其中 m 是物体的质量，v 是其速度。势能（PE）是由于物体的位置或配置而储存的能量。重力势能（GPE）的公式为 GPE = m * g * h，其中 m 是质量，g 是重力加速度（9.8 m/s^2），h 是高度。) (系统的总机械能是其动能和势能之和。如果系统中没有非保守力（如摩擦力）作用，它是守恒的。)`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `To solve energy problems, follow these steps: 1. Identify the type of energy involved (kinetic, potential, etc.). 2. Use the relevant equations to calculate the energy. 3. Consider any work done by forces on the system. 4. Use the principle of conservation of energy if applicable. (解能量问题时，遵循以下步骤：1. 确定涉及的能量类型（动能、势能等）。2. 使用相关的方程计算能量。3. 考虑系统中任何力做的功。4. 如果适用，使用能量守恒原理。)`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `1. Confusing kinetic and potential energy. Remember that kinetic energy is related to motion, while potential energy is related to position. 2. Misunderstanding the principle of conservation of energy. It applies only if there are no non-conservative forces like friction. 3. Forgetting to consider work done by forces. Always include the work done by forces when calculating energy. (常见的错误包括：1. 混淆动能和势能。记得动能与运动有关，而势能与位置有关。2. 对能量守恒原理的理解错误。它只适用于没有摩擦力等非保守力的情况。3. 忘记考虑力做的功。在计算能量时，始终包括力做的功。)`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `1. <div class='bg-green-50'>Example 1: A 2 kg ball is dropped from a height of 10 meters. Calculate its velocity just before it hits the ground. The acceleration due to gravity is 9.8 m/s^2. Solution: Use the conservation of energy principle. The initial potential energy is converted into kinetic energy just before impact. GPE = m * g * h = 2 * 9.8 * 10 = 196 J. KE = 0.5 * m * v^2. Since GPE = KE, 196 = 0.5 * 2 * v^2. Solving for v gives v = sqrt(196 / 1) = 14 m/s.</div> (例题1：一个2kg的球从10米的高度自由落下，计算它在触地前的速度。重力加速度为9.8 m/s^2。解题：使用能量守恒原理。初始的重力势能在触地前全部转化为动能。GPE = m * g * h = 2 * 9.8 * 10 = 196 J。KE = 0.5 * m * v^2。由于GPE = KE，196 = 0.5 * 2 * v^2。解v得到v = sqrt(196 / 1) = 14 m/s。) 2. <div class='bg-blue-50'>Example 2: A 5 kg block is pulled up a 20° incline by a rope. The coefficient of friction is 0.2 and the length of the incline is 10 meters. Calculate the work done by the rope. Solution: The work done by the rope is the sum of the work done against gravity and the work done against friction. W = F * d * cos(θ), where F is the force applied by the rope, d is the distance, and θ is the angle between the force and the direction of motion. The force required to pull the block up the incline is F = m * g * sin(θ) + μ * m * g * cos(θ), where μ is the coefficient of friction. Therefore, W = (m * g * sin(20°) + μ * m * g * cos(20°)) * 10 * cos(0°) = (5 * 9.8 * sin(20°) + 0.2 * 5 * 9.8 * cos(20°)) * 10. W = 183.5 J.</div> (例题2：一个5kg的块沿一个20°的斜坡被绳子拉上。摩擦系数为0.2，斜坡的长度为10米。计算绳子做的功。解题：绳子做的功是克服重力做功和克服摩擦做功的总和。W = F * d * cos(θ)，其中F是绳子施加的力，d是距离，θ是力和运动方向之间的角度。拉块上坡所需的力是 F = m * g * sin(θ) + μ * m * g * cos(θ)，其中μ是摩擦系数。因此，W = (m * g * sin(20°) + μ * m * g * cos(20°)) * 10 * cos(0°) = (5 * 9.8 * sin(20°) + 0.2 * 5 * 9.8 * cos(20°)) * 10。W = 183.5 J。)`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `Links to YouTube and Bilibili videos about this topic: <a href='https://www.youtube.com/watch?v=example'>YouTube Example Video</a> (https://www.bilibili.com/video/example) (关于此主题的YouTube和Bilibili视频链接：https://www.youtube.com/watch?v=example (https://www.bilibili.com/video/example))`
            }
        ]
    },
    'math-permutations': {
        name: 'Permutations 排列',
        subject: 'math',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<p><strong>Definition (定义):</strong> The number of ways to arrange <span class="bg-blue-50">n</span> distinct objects in a sequence is given by the factorial of <span class="bg-blue-50">n</span>, denoted as <span class="bg-blue-50">n!</span>.</p>
<p><strong>Formula (公式):</strong> <span class="bg-blue-50">n!</span> = <span class="bg-blue-50">n</span> × (<span class="bg-blue-50">n</span>-1) × ... × 2 × 1</p>
<p><strong>Example (例子):</strong> The number of ways to arrange 4 distinct books on a shelf is given by 4! = 4 × 3 × 2 × 1 = 24.</p>
<p><strong>Permutations with Repetition (排列中的重复项):</strong> If there are <span class="bg-blue-50">n</span> objects to arrange, where <span class="bg-blue-50">n<sub>1</sub></span> are of one type, <span class="bg-blue-50">n<sub>2</sub></span> are of another type, and so on, the number of distinct permutations is given by <span class="bg-blue-50">n!</span> / (<span class="bg-blue-50">n<sub>1</sub></span>! × <span class="bg-blue-50">n<sub>2</sub></span>! × ...).</p>
<p><strong>Permutations with Restrictions (排列中的限制):</strong> If certain objects must or cannot be placed in certain positions, the number of permutations is adjusted accordingly. For example, if one object must be at the start, the number of permutations is reduced by a factor of <span class="bg-blue-50">n</span>-1.</p>
<p>(排列的定义:排列n个不同的对象的方式数量由n的阶乘给出，记作n!。排列的公式:n! = n × (n-1) × ... × 2 × 1。例子:4本不同的书放在书架上的排列方式数量为4! = 4 × 3 × 2 × 1 = 24。排列中的重复项:如果有n个对象需要排列，其中n1个是同一种类型，n2个是另一种类型，等等，则不同的排列数量为n! / (n1! × n2! × ...)。排列中的限制:如果有某些对象必须或不能放在某些位置，排列的数量会相应调整。例如，如果一个对象必须放在开头，排列的数量会减少一个因子n-1。)</p>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<p><strong>Step 1 (步骤1):</strong> Identify the total number of objects to be arranged.</p>
<p><strong>Step 2 (步骤2):</strong> Determine if there are any restrictions on the arrangement.</p>
<p><strong>Step 3 (步骤3):</strong> Use the appropriate formula based on whether the objects are distinct or have repetitions. For example, if there are no repetitions, use n!; if there are repetitions, use n! / (n1! × n2! × ...).</p>
<p><strong>Step 4 (步骤4):</strong> Adjust for any restrictions by multiplying or dividing by the appropriate factor.</p>
<p><strong>Example (例子):</strong> Find the number of ways to arrange 5 books on a shelf, where 2 are identical and 1 is a specific book that must be at the start.</p>
<p><strong>Solution (解答):</strong> First, calculate the total permutations without restriction: 5! = 120. Then, adjust for the restriction of the specific book at the start: 120 / 4 = 30. Finally, account for the repetition of the 2 identical books: 30 / 2 = 15. Therefore, the number of ways is 15.</p>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<p><strong>Mistake 1 (错误1):</strong> Forgetting to account for restrictions such as certain objects must or cannot be in certain positions.</p>
<p><strong>Mistake 2 (错误2):</strong> Misapplying the formula for permutations with repetitions, forgetting to divide by the factorial of the number of repetitions.</p>
<p><strong>Mistake 3 (错误3):</strong> Misunderstanding the difference between permutations and combinations, using combinations when permutations are required.</p>`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<p><strong>Example 1 (例子1):</strong> Find the number of ways to arrange 4 different books on a shelf.</p>
<p><strong>Solution (解答):</strong> Use the formula for permutations of distinct objects: 4! = 4 × 3 × 2 × 1 = 24.</p>

<p><strong>Example 2 (例子2):</strong> Find the number of ways to arrange 5 books on a shelf, where 2 are identical.</p>
<p><strong>Solution (解答):</strong> Use the formula for permutations with repetitions: 5! / 2! = (5 × 4 × 3 × 2 × 1) / (2 × 1) = 120 / 2 = 60.</p>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<p><strong>YouTube (YouTube):</strong> <a href="https://www.youtube.com/watch?v=example1" target="_blank">https://www.youtube.com/watch?v=example1</a></p>
<p><strong>Bilibili (Bilibili):</strong> <a href="https://www.bilibili.com/video/avexample2" target="_blank">https://www.bilibili.com/video/avexample2</a></p>`
            }
        ]
    },
    'math-probability': {
        name: 'Probability 概率',
        subject: 'math',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<p><span class="bg-blue-50">Probability</span> is a measure of the likelihood of an event occurring. It is quantified as a number between 0 and 1, where 0 indicates impossibility and 1 indicates certainty. The probability of an event A is denoted as P(A).</span><br>

<span class="bg-green-50">Classical Probability</span>: If an experiment has n possible outcomes which are equally likely, then the probability of an event A is given by:<br>

\$\$P(A) = \frac{m}{n}\$\$<br>

where m is the number of favorable outcomes.<br>

<span class="bg-purple-50">Mutually Exclusive Events</span>: If two events cannot occur at the same time, they are mutually exclusive. The probability of either one of two mutually exclusive events A and B occurring is given by:<br>

\$\$P(A \cup B) = P(A) + P(B)\$\$<br>

<span class="bg-yellow-50">Independent Events</span>: If the occurrence of one event does not affect the probability of the other, they are independent. The probability of both independent events A and B occurring is given by:<br>

\$\$P(A \cap B) = P(A) \times P(B)\$\$<br>

Conditional Probability: The probability of an event A given that another event B has occurred is denoted as P(A|B) and is given by:<br>

\$\$P(A|B) = \frac{P(A \cap B)}{P(B)}\$\$<br>

Bayes' Theorem: If we have prior probabilities and new evidence, Bayes' theorem can be used to update the probabilities. It is given by:<br>

\$\$P(A|B) = \frac{P(B|A)P(A)}{P(B)}\$\$</span></p>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<p><span class="bg-blue-50">1. Identify the type of probability problem</span>: Determine whether it is classical, conditional, or involving independent events.</span><br>

<span class="bg-green-50">2. List all possible outcomes</span>: For classical probability, list all possible outcomes and identify the favorable ones.</span><br>

<span class="bg-purple-50">3. Use the appropriate formula</span>: Apply the relevant probability formula based on the problem type.</span><br>

<span class="bg-yellow-50">4. Check for independence and mutual exclusivity</span>: Ensure that events are independent or mutually exclusive as appropriate.</span><br>

<span class="bg-blue-50">5. Solve the problem</span>: Substitute the values into the appropriate formula and solve for the probability.</span></p>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<p><span class="bg-red-50">1. Misidentifying mutually exclusive events</span>: Students often confuse mutually exclusive and independent events.</span><br>

<span class="bg-red-50">2. Ignoring the condition in conditional probability</span>: For problems involving conditional probability, students often forget to consider the condition P(B) in the denominator.</span><br>

<span class="bg-red-50">3. Misusing Bayes' Theorem</span>: Students may incorrectly apply Bayes' theorem or forget to update the prior probabilities with new evidence.</span><br>

<span class="bg-red-50">4. Overlooking independence</span>: Students may assume that events are independent when they are not.</span></p>`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<p><span class="bg-blue-50">1. Classical Probability Example</span>: A fair six-sided die is rolled. What is the probability of rolling a 4?</span><br>

<span class="bg-green-50">Solution:</span><br>

- Number of possible outcomes: 6<br>

- Number of favorable outcomes: 1 (rolling a 4)<br>

- Probability: \$\$P(4) = \frac{1}{6}\$\$</span><br>

<span class="bg-blue-50">2. Conditional Probability Example</span>: A box contains 5 red and 3 blue balls. Two balls are drawn sequentially without replacement. What is the probability that the second ball is blue given the first ball is red?</span><br>

<span class="bg-green-50">Solution:</span><br>

- Probability of drawing a red ball first: \$\$P(R_1) = \frac{5}{8}\$\$<br>

- Probability of drawing a blue ball second given the first was red: \$\$P(B_2|R_1) = \frac{3}{7}\$\$<br>

- Conditional probability: \$\$P(B_2|R_1) = \frac{3}{7}\$\$</span><br>

<span class="bg-blue-50">3. Bayes' Theorem Example</span>: A test for a disease is 95% accurate. The prevalence of the disease in the population is 1%. If a person tests positive, what is the probability they actually have the disease?</span><br>

<span class="bg-green-50">Solution:</span><br>

- Let D be the event of having the disease, and T be the event of testing positive.<br>

- P(D) = 0.01, P(T|D) = 0.95, P(T|\neg D) = 0.05 (false positive rate), P(\neg D) = 0.99<br>

- Using Bayes' Theorem: \$\$P(D|T) = \frac{P(T|D)P(D)}{P(T)} = \frac{0.95 \times 0.01}{0.95 \times 0.01 + 0.05 \times 0.99} = \frac{0.0095}{0.05845} \approx 0.1627\$\$</span></p>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<p><span class="bg-blue-50">1. YouTube Videos:</span><br>

- <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Understanding Probability</a><br>

- <a href="https://www.youtube.com/watch?v=QbNpZs6n4cU">Bayes' Theorem Explained</a><br>

2. Bilibili Videos:</span><br>

- <a href="https://www.bilibili.com/video/BV1aZ411h7uY">概率论基础讲解</a><br>

- <a href="https://www.bilibili.com/video/BV1Xh4y1277Q">条件概率与贝叶斯定理</a></span></p>`
            }
        ]
    },
    'math-binomial': {
        name: 'Binomial Expansion 二项式展开',
        subject: 'math',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<div class="bg-blue-50">Definition of Binomial Expansion:</div> A binomial expansion is the result of raising a binomial (an expression with two terms) to a power. For example, \$(a+b)^n\$.<br>

<div class="bg-green-50">General Term in Binomial Expansion:</div> The general term in the expansion of \$(a+b)^n\$ is given by \${n \choose k} a^{n-k} b^k\$, where \$k\$ is the term number starting from 0. <br>

<div class="bg-purple-50">Binomial Theorem:</div> The binomial theorem states that for any positive integer \$n\$,

\$\$(a+b)^n = \sum_{k=0}^{n} {n \choose k} a^{n-k} b^k\$\$

This theorem provides a concise way to expand expressions involving binomials. <br>

<div class="bg-yellow-50">Binomial Coefficient:</div> The binomial coefficient \${n \choose k}\$ is given by

\$\${n \choose k} = \frac{n!}{k!(n-k)!}\$\$

where \$n!\$ (n factorial) is the product of all positive integers up to \$n\$. <br>

(二项式展开的定义：二项式展开是指将一个二项式（两项的表达式）提升到一个幂次的结果。例如，\$(a+b)^n\$。<br>

二项式展开的一般项：\$(a+b)^n\$的展开的一般项为\${n \choose k} a^{n-k} b^k\$，其中\$k\$是从0开始的项号。<br>

二项式定理：二项式定理表明对于任何正整数\$n\$，

\$\$(a+b)^n = \sum_{k=0}^{n} {n \choose k} a^{n-k} b^k\$\$

这个定理提供了一种简洁的方式来展开涉及二项式的表达式。<br>

二项式系数：二项式系数\${n \choose k}\$由

\$\${n \choose k} = \frac{n!}{k!(n-k)!}\$\$

给出，其中\$n!\$（\$n\$的阶乘）是所有正整数到\$n\$的乘积。)</div>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<p>Step 1: Identify the binomial and the power. For example, in \$(a+b)^4\$, the binomial is \$a+b\$ and the power is 4.</p>

<p>Step 2: List the general term \${n \choose k} a^{n-k} b^k\$ for each term in the expansion.</p>

<p>Step 3: Substitute the values of \$n\$ and \$k\$ into the general term to find each term in the expansion.</p>

<p>Step 4: Simplify the terms to get the final expansion.</p>

<p>Example: Expand \$(2x+3)^3\$.</p>

<p>Step 1: The binomial is \$2x+3\$ and the power is 3.</p>

<p>Step 2: List the general term for each term in the expansion.</p>

<p>Step 3: Substitute the values of \$n\$ and \$k\$ into the general term.</p>

<p>Step 4: Simplify the terms to get the final expansion.</p>

<p>\$(2x+3)^3 = {3 \choose 0} (2x)^3 (3)^0 + {3 \choose 1} (2x)^2 (3)^1 + {3 \choose 2} (2x)^1 (3)^2 + {3 \choose 3} (2x)^0 (3)^3\$</p>

<p>\$= 1(8x^3) + 3(4x^2)(3) + 3(2x)(9) + 1(27)\$</p>

<p>\$= 8x^3 + 36x^2 + 54x + 27\$</p>

(步骤1：识别二项式和幂次。例如，在\$(a+b)^4\$中，二项式为\$a+b\$，幂次为4。<br>

步骤2：列出展开式的每一项的一般项\${n \choose k} a^{n-k} b^k\$。<br>

步骤3：将\$n\$和\$k\$的值代入一般项，找到展开式的每一项。<br>

步骤4：简化每一项以得到最终展开式。<br>

例子：展开\$(2x+3)^3\$。<br>

步骤1：二项式为\$2x+3\$，幂次为3。<br>

步骤2：列出展开式每一项的一般项。<br>

步骤3：将\$n\$和\$k\$的值代入一般项。<br>

步骤4：简化每一项以得到最终展开式。<br>

\$(2x+3)^3 = {3 \choose 0} (2x)^3 (3)^0 + {3 \choose 1} (2x)^2 (3)^1 + {3 \choose 2} (2x)^1 (3)^2 + {3 \choose 3} (2x)^0 (3)^3\$<br>

\$= 1(8x^3) + 3(4x^2)(3) + 3(2x)(9) + 1(27)\$<br>

\$= 8x^3 + 36x^2 + 54x + 27\$)</p>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<li>Forgetting to use the binomial coefficient in the general term.</li>

<li>Miscounting the number of terms in the expansion.</li>

<li>Making errors in the calculation of the binomial coefficient.</li>

<li>Omitting the simplification of terms in the final expansion.</li>

(常见错误包括：<li>忘记在一般项中使用二项式系数。</li>

<li>错误地计算展开式的项数。</li>

<li>在计算二项式系数时出现错误。</li>

<li>在最终展开式中忽略简化项。)</p>`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<h3>Example 1</h3>

<p>Expand \$(x+2)^4\$.</p>

<p>Step 1: The binomial is \$x+2\$ and the power is 4.</p>

<p>Step 2: List the general term for each term in the expansion.</p>

<p>Step 3: Substitute the values of \$n\$ and \$k\$ into the general term.</p>

<p>Step 4: Simplify the terms to get the final expansion.</p>

<p>\$(x+2)^4 = {4 \choose 0} x^4 2^0 + {4 \choose 1} x^3 2^1 + {4 \choose 2} x^2 2^2 + {4 \choose 3} x^1 2^3 + {4 \choose 4} x^0 2^4\$</p>

<p>\$= 1x^4 + 4x^3(2) + 6x^2(4) + 4x(8) + 1(16)\$</p>

<p>\$= x^4 + 8x^3 + 24x^2 + 32x + 16\$</p>

<h3>Example 2</h3>

<p>Expand \$(3x-2)^3\$.</p>

<p>Step 1: The binomial is \$3x-2\$ and the power is 3.</p>

<p>Step 2: List the general term for each term in the expansion.</p>

<p>Step 3: Substitute the values of \$n\$ and \$k\$ into the general term.</p>

<p>Step 4: Simplify the terms to get the final expansion.</p>

<p>\$(3x-2)^3 = {3 \choose 0} (3x)^3 (-2)^0 + {3 \choose 1} (3x)^2 (-2)^1 + {3 \choose 2} (3x)^1 (-2)^2 + {3 \choose 3} (3x)^0 (-2)^3\$</p>

<p>\$= 1(27x^3) + 3(9x^2)(-2) + 3(3x)(4) + 1(1)(-8)\$</p>

<p>\$= 27x^3 - 54x^2 + 36x - 8\$</p>

(例1：展开\$(x+2)^4\$。<br>

步骤1：二项式为\$x+2\$，幂次为4。<br>

步骤2：列出展开式每一项的一般项。<br>

步骤3：将\$n\$和\$k\$的值代入一般项。<br>

步骤4：简化每一项以得到最终展开式。<br>

\$(x+2)^4 = {4 \choose 0} x^4 2^0 + {4 \choose 1} x^3 2^1 + {4 \choose 2} x^2 2^2 + {4 \choose 3} x^1 2^3 + {4 \choose 4} x^0 2^4\$<br>

\$= 1x^4 + 4x^3(2) + 6x^2(4) + 4x(8) + 1(16)\$<br>

\$= x^4 + 8x^3 + 24x^2 + 32x + 16\$<br>

例2：展开\$(3x-2)^3\$。<br>

步骤1：二项式为\$3x-2\$，幂次为3。<br>

步骤2：列出展开式每一项的一般项。<br>

步骤3：将\$n\$和\$k\$的值代入一般项。<br>

步骤4：简化每一项以得到最终展开式。<br>

\$(3x-2)^3 = {3 \choose 0} (3x)^3 (-2)^0 + {3 \choose 1} (3x)^2 (-2)^1 + {3 \choose 2} (3x)^1 (-2)^2 + {3 \choose 3} (3x)^0 (-2)^3\$<br>

\$= 1(27x^3) + 3(9x^2)(-2) + 3(3x)(4) + 1(1)(-8)\$<br>

\$= 27x^3 - 54x^2 + 36x - 8\$)</p>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">YouTube - Binomial Expansion</a></p>

<p><a href="https://www.bilibili.com/video/BV1ZK4y1R7fE" target="_blank">Bilibili - 二项式展开</a></p>

(学习资源：<p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">YouTube - 二项式展开</a></p>

<p><a href="https://www.bilibili.com/video/BV1ZK4y1R7fE" target="_blank">Bilibili - 二项式展开</a></p>)</p>`
            }
        ]
    },
    'math-circular': {
        name: 'Circular Motion 圆周运动',
        subject: 'math',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<p>The <span class="bg-blue-50">position vector</span> (位置向量) <span class="math">\(\vec{r}\)</span> is a vector from the origin to a point on the circle. The <span class="bg-green-50">velocity vector</span> (速度向量) <span class="math">\(\vec{v}\)</span> is tangential to the circle and has a magnitude given by <span class="math">\(v = \omega r\)</span>, where <span class="math">\(\omega\)</span> is the angular velocity and <span class="math">\(r\)</span> is the radius. The <span class="bg-purple-50">acceleration vector</span> (加速度向量) <span class="math">\(\vec{a}\)</span> has two components: tangential acceleration <span class="math">\(a_t = \frac{dv}{dt}\)</span> and centripetal acceleration <span class="math">\(a_c = \frac{v^2}{r}\)</span>.</p><p>圆周运动的核心概念包括位置向量（<span class="math">\(\vec{r}\)</span>），速度向量（<span class="math">\(\vec{v}\)</span>）和加速度向量（<span class="math">\(\vec{a}\)</span>）。速度向量的大小由 <span class="math">\(v = \omega r\)</span> 给出，其中 <span class="math">\(\omega\)</span> 是角速度，<span class="math">\(r\)</span> 是半径。加速度向量有两个分量：切向加速度（<span class="math">\(a_t = \frac{dv}{dt}\)</span>）和径向加速度（<span class="math">\(a_c = \frac{v^2}{r}\)</span>）。</p>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<ol><li><p>To find the position of an object on a circle at a certain time, use the parametric equations:</p><p><span class="math">\(x = r \cos(\omega t)\)</span></p><p><span class="math">\(y = r \sin(\omega t)\)</span></p><p>在给定时间找到圆周上物体的位置，使用参数方程：</p><p><span class="math">\(x = r \cos(\omega t)\)</span></p><p><span class="math">\(y = r \sin(\omega t)\)</span></p></li><li><p>To solve for velocity and acceleration, use the derivatives of the parametric equations:</p><p><span class="math">\(\vec{v} = \frac{d\vec{r}}{dt} = -r \omega \sin(\omega t) \hat{i} + r \omega \cos(\omega t) \hat{j}\)</span></p><p><span class="math">\(\vec{a} = \frac{d\vec{v}}{dt} = -r \omega^2 \cos(\omega t) \hat{i} - r \omega^2 \sin(\omega t) \hat{j}\)</span></p><p>要解决速度和加速度，使用参数方程的导数：</p><p><span class="math">\(\vec{v} = \frac{d\vec{r}}{dt} = -r \omega \sin(\omega t) \hat{i} + r \omega \cos(\omega t) \hat{j}\)</span></p><p><span class="math">\(\vec{a} = \frac{d\vec{v}}{dt} = -r \omega^2 \cos(\omega t) \hat{i} - r \omega^2 \sin(\omega t) \hat{j}\)</span></p></li></ol>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<ul><li><p>Mistaking the tangential acceleration for the centripetal acceleration: <span class="math">\(a_t = a_c\)</span> is a common error, as tangential acceleration is related to the change in speed, while centripetal acceleration is related to the change in direction.</p><p>将切向加速度误认为径向加速度：<span class="math">\(a_t = a_c\)</span> 是常见的错误，因为切向加速度与速度的变化有关，而径向加速度与方向的变化有关。</p></li><li><p>Forgetting to include the direction of the acceleration vector: The acceleration vector always points towards the center of the circle, so it is important to include the unit vector <span class="math">\(\hat{r}\)</span> in the equations.</p><p>忘记包括加速度向量的方向：加速度向量总是指向圆的中心，因此在方程中包括单位向量 <span class="math">\(\hat{r}\)</span> 是很重要的。</p></li><li><p>Incorrectly calculating the angular velocity: The angular velocity <span class="math">\(\omega\)</span> is given by <span class="math">\(\omega = \frac{2\pi}{T}\)</span>, where <span class="math">\(T\)</span> is the period. Students often confuse this with the frequency <span class="math">\(f = \frac{1}{T}\)</span>.</p><p>错误地计算角速度：角速度 <span class="math">\(\omega\)</span> 由 <span class="math">\(\omega = \frac{2\pi}{T}\)</span> 给出，其中 <span class="math">\(T\)</span> 是周期。学生往往将这个混淆为频率 <span class="math">\(f = \frac{1}{T}\)</span>。</p></li></ul>`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<ol><li><p><strong>Example 1:</strong> A particle moves in a circle of radius 5 meters with a constant angular velocity of 2 radians per second. Find the velocity and acceleration of the particle.</p><p><strong>解题1：</strong>一个质量为5米的圆环中以恒定的角速度2弧度每秒运动的粒子，求粒子的速度和加速度。</p><p><strong>Solution:</strong></p><p>Velocity:</p><p><span class="math">\(v = \omega r = 2 \times 5 = 10 \text{ m/s}\)</span></p><p>Velocity vector:</p><p><span class="math">\(\vec{v} = -5 \omega \sin(2t) \hat{i} + 5 \omega \cos(2t) \hat{j} = -10 \sin(2t) \hat{i} + 10 \cos(2t) \hat{j}\)</span></p><p>Acceleration:</p><p><span class="math">\(a = \omega^2 r = 4 \times 5 = 20 \text{ m/s}^2\)</span></p><p>Acceleration vector:</p><p><span class="math">\(\vec{a} = -10 \omega^2 \cos(2t) \hat{i} - 10 \omega^2 \sin(2t) \hat{j} = -20 \cos(2t) \hat{i} - 20 \sin(2t) \hat{j}\)</span></p></li><li><p><strong>Example 2:</strong> A car is moving in a circular path with a radius of 100 meters. The driver notices that the car's speed increases from 20 m/s to 40 m/s in 10 seconds. Calculate the tangential acceleration and the total acceleration.</p><p><strong>解题2：</strong>一辆汽车沿半径为100米的圆形路径运动。司机注意到汽车的速度在10秒内从20 m/s增加到40 m/s。计算切向加速度和总加速度。</p><p><strong>Solution:</strong></p><p>Tangential acceleration:</p><p><span class="math">\(a_t = \frac{\Delta v}{\Delta t} = \frac{40 - 20}{10} = 2 \text{ m/s}^2\)</span></p><p>Total acceleration:</p><p><span class="math">\(a = \sqrt{a_t^2 + a_c^2} = \sqrt{2^2 + \left(\frac{40^2}{100}\right)^2} = \sqrt{4 + 64} = 8.06 \text{ m/s}^2\)</span></p></li></ol>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<p><a href="https://www.youtube.com/watch?v=example1" target="_blank">YouTube - Circular Motion</a></p><p><a href="https://www.bilibili.com/video/BVexample2" target="_blank">Bilibili - 圆周运动</a></p>`
            }
        ]
    },
    'math-sequences': {
        name: 'Sequences 数列',
        subject: 'math',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<p><strong>Definition:</strong> A sequence is an ordered list of numbers that follow a certain pattern or rule. Sequences can be finite or infinite. They can be denoted as <span class="bg-blue-50">a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ...</span> or <span class="bg-blue-50">u<sub>n</sub></span>.</p>

<p><strong>Finite Sequence:</strong> A sequence that has a limited number of terms. For example, <span class="bg-green-50">1, 3, 5, 7, 9</span>.</p>

<p><strong>Infinite Sequence:</strong> A sequence that continues indefinitely. For example, <span class="bg-green-50">1, 2, 3, 4, 5, ...</span>.</p>

<p><strong>Arithmetic Sequence:</strong> A sequence where each term is obtained by adding a constant to the previous term. The general form is <span class="bg-purple-50">a<sub>n</sub> = a<sub>1</sub> + (n-1)d</span>, where <span class="bg-purple-50">d</span> is the common difference.</p>

<p><strong>Geometric Sequence:</strong> A sequence where each term is obtained by multiplying the previous term by a constant. The general form is <span class="bg-yellow-50">a<sub>n</sub> = a<sub>1</sub> &bull; r<sup>(n-1)</sup></span>, where <span class="bg-yellow-50">r</span> is the common ratio.</p>

<p><strong>Sum of Sequence:</strong> The sum of the terms in a sequence is denoted as <span class="bg-blue-50">S<sub>n</sub></span>. For an arithmetic sequence, the sum of the first n terms is <span class="bg-blue-50">S<sub>n</sub> = n/2 (2a<sub>1</sub> + (n-1)d)</span>. For a geometric sequence, the sum of the first n terms is <span class="bg-blue-50">S<sub>n</sub> = a<sub>1</sub> (1 - r<sup>n</sup>) / (1 - r)</span>, where <span class="bg-blue-50">|r| < 1</span>.</p>

<p>(数列是按一定规律或规则排列的一串数字，可以是有限的也可以是无限的。有限数列有固定数量的项，无限数列则持续不断地进行。等差数列中每个项通过向前一个项添加一个常数得到，形式为<span class="bg-purple-50">a<sub>n</sub> = a<sub>1</sub> + (n-1)d</span>，其中<span class="bg-purple-50">d</span>为公差；等比数列中每个项通过乘以前一个项的一个常数得到，形式为<span class="bg-yellow-50">a<sub>n</sub> = a<sub>1</sub> &bull; r<sup>(n-1)</sup></span>，其中<span class="bg-yellow-50">r</span>为公比。数列的和表示为<span class="bg-blue-50">S<sub>n</sub></span>。等差数列的前n项和为<span class="bg-blue-50">S<sub>n</sub> = n/2 (2a<sub>1</sub> + (n-1)d)</span>；等比数列的前n项和为<span class="bg-blue-50">S<sub>n</sub> = a<sub>1</sub> (1 - r<sup>n</sup>) / (1 - r)</span>，其中<span class="bg-blue-50">|r| < 1</span>。)</p>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<p><strong>Identify the sequence:</strong> Determine if the sequence is arithmetic, geometric, or neither. Find the common difference or common ratio.</p>

<p><strong>Find the nth term:</strong> Use the general form of the sequence to find the nth term. For example, in an arithmetic sequence, the nth term is <span class="bg-blue-50">a<sub>n</sub> = a<sub>1</sub> + (n-1)d</span>. In a geometric sequence, it is <span class="bg-blue-50">a<sub>n</sub> = a<sub>1</sub> &bull; r<sup>(n-1)</sup></span>.</p>

<p><strong>Find the sum of the first n terms:</strong> Use the appropriate sum formula for the sequence. For arithmetic sequences, use <span class="bg-blue-50">S<sub>n</sub> = n/2 (2a<sub>1</sub> + (n-1)d)</span>. For geometric sequences, use <span class="bg-blue-50">S<sub>n</sub> = a<sub>1</sub> (1 - r<sup>n</sup>) / (1 - r)</span>.</p>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<p><strong>Mistake 1:</strong> Misidentifying the sequence type. Always check the pattern to determine if it is arithmetic or geometric.</p>

<p><strong>Mistake 2:</strong> Incorrectly calculating the common difference or common ratio. Double-check the calculation to ensure accuracy.</p>

<p><strong>Mistake 3:</strong> Using the wrong sum formula. Make sure to use the correct sum formula for the type of sequence you are dealing with.</p>`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<p><strong>Example 1:</strong> Find the 10th term and the sum of the first 10 terms of the arithmetic sequence with first term 2 and common difference 3.</p>

<p><strong>Solution:</strong> The 10th term is <span class="bg-blue-50">a<sub>10</sub> = 2 + (10-1)3 = 29</span>. The sum of the first 10 terms is <span class="bg-blue-50">S<sub>10</sub> = 10/2 (2(2) + (10-1)3) = 10/2 (4 + 27) = 145</span>.</p>

<p><strong>Example 2:</strong> Find the 7th term of the geometric sequence with first term 4 and common ratio 2.</p>

<p><strong>Solution:</strong> The 7th term is <span class="bg-blue-50">a<sub>7</sub> = 4 &bull; 2<sup>(7-1)</sup> = 4 &bull; 64 = 256</span>.</p>

<p><strong>Example 3:</strong> Find the sum of the first 5 terms of the geometric sequence with first term 1 and common ratio 1/2.</p>

<p><strong>Solution:</strong> The sum of the first 5 terms is <span class="bg-blue-50">S<sub>5</sub> = 1 (1 - (1/2)<sup>5</sup>) / (1 - 1/2) = 1 (1 - 1/32) / (1/2) = 31/16</span>.</p>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<p><strong>YouTube:</strong> <a href="https://www.youtube.com/watch?v=example1" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=example1</a> - Arithmetic Sequences and Series</p>

<p><strong>Bilibili:</strong> <a href="https://www.bilibili.com/video/avexample2" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/avexample2</a> - Geometric Sequences and Series</p>`
            }
        ]
    },
    'math-vectors': {
        name: 'Vectors 向量',
        subject: 'math',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<div class="bg-blue-50">Vectors are quantities that have both magnitude and direction. They can be represented in various forms, such as column vectors, arrows, or directed line segments. In a coordinate system, a vector can be written as <span class="text-blue-700">\$\mathbf{v} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}\$</span>, where <span class="text-blue-700">\$x, y, z\$</span> are the components of the vector. Vectors can be added or subtracted using their components, and the magnitude of a vector is given by <span class="text-blue-700">\$|\mathbf{v}| = \sqrt{x^2 + y^2 + z^2}\$</span>.</div><div class="bg-green-50">A vector can also be multiplied by a scalar, changing its magnitude but not its direction (unless the scalar is negative, in which case the direction is reversed). The dot product of two vectors <span class="text-green-700">\$\mathbf{u} \cdot \mathbf{v} = u_x v_x + u_y v_y + u_z v_z\$</span> and the cross product <span class="text-green-700">\$\mathbf{u} \times \mathbf{v} = \begin{pmatrix} u_y v_z - u_z v_y \\ u_z v_x - u_x v_z \\ u_x v_y - u_y v_x \end{pmatrix}\$</span> are also important concepts.</div><div class="bg-purple-50">The angle between two vectors can be found using the dot product: <span class="text-purple-700">\$\cos \theta = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{u}| |\mathbf{v}|}\$</span>. The projection of a vector <span class="text-purple-700">\$\mathbf{v}\$</span> onto another vector <span class="text-purple-700">\$\mathbf{u}\$</span> is given by <span class="text-purple-700">\$\text{proj}_{\mathbf{u}} \mathbf{v} = \left(\frac{\mathbf{u} \cdot \mathbf{v}}{\mathbf{u} \cdot \mathbf{u}}\right) \mathbf{u}\$</span>.</div><div class="bg-yellow-50">In geometry, vectors can be used to describe and solve problems involving lines, planes, and angles. For example, to find the distance between a point and a line, you can use the vector perpendicular to the line.</div>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<ol><li><strong>Addition of Vectors</strong>: To add two vectors, add their corresponding components. For example, if <span class="text-yellow-700">\$\mathbf{a} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}\$</span> and <span class="text-yellow-700">\$\mathbf{b} = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}\$</span>, then <span class="text-yellow-700">\$\mathbf{a} + \mathbf{b} = \begin{pmatrix} 3 \\ 1 \\ 3 \end{pmatrix}\$</span>.</li><li><strong>Multiplication of Vectors by Scalars</strong>: To multiply a vector by a scalar, multiply each component of the vector by the scalar. For example, if <span class="text-yellow-700">\$\mathbf{a} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}\$</span> and <span class="text-yellow-700">\$c = 2\$</span>, then <span class="text-yellow-700">\$c \mathbf{a} = \begin{pmatrix} 2 \\ 4 \\ 6 \end{pmatrix}\$</span>.</li><li><strong>Dot Product</strong>: To find the dot product of two vectors, multiply their corresponding components and sum the results. For example, if <span class="text-yellow-700">\$\mathbf{a} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}\$</span> and <span class="text-yellow-700">\$\mathbf{b} = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}\$</span>, then <span class="text-yellow-700">\$\mathbf{a} \cdot \mathbf{b} = (1)(2) + (2)(-1) + (3)(0) = 0\$</span>.</li><li><strong>Cross Product</strong>: To find the cross product of two vectors, use the determinant formula. For example, if <span class="text-yellow-700">\$\mathbf{a} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}\$</span> and <span class="text-yellow-700">\$\mathbf{b} = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}\$</span>, then <span class="text-yellow-700">\$\mathbf{a} \times \mathbf{b} = \begin{pmatrix} 2(0) - 3(-1) \\ 3(2) - 1(0) \\ 1(-1) - 2(2) \end{pmatrix} = \begin{pmatrix} 3 \\ 6 \\ -5 \end{pmatrix}\$</span>.</li></ol>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `1. <span class="text-red-700">混淆向量和标量</span>: 学生可能会错误地将向量与标量混淆，忘记向量具有大小和方向。2. <span class="text-red-700">错误计算向量的点积或叉积</span>: 在计算点积或叉积时，学生可能会忘记将对应的分量相乘或使用错误的公式。3. <span class="text-red-700">向量的模和方向</span>: 学生可能会错误地计算向量的模，忘记使用 <span class="text-red-700">\$|\mathbf{v}| = \sqrt{x^2 + y^2 + z^2}\$</span>。4. <span class="text-red-700">向量的投影</span>: 在计算向量投影时，学生可能会忘记使用正确的公式，即 <span class="text-red-700">\$\text{proj}_{\mathbf{u}} \mathbf{v} = \left(\frac{\mathbf{u} \cdot \mathbf{v}}{\mathbf{u} \cdot \mathbf{u}}\right) \mathbf{u}\$</span>。`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<ol><li><strong>Example 1: Addition and Scalar Multiplication</strong>: Given vectors <span class="text-blue-700">\$\mathbf{a} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}\$</span> and <span class="text-blue-700">\$\mathbf{b} = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}\$</span>, calculate <span class="text-blue-700">\$\mathbf{a} + \mathbf{b}\$</span> and <span class="text-blue-700">\$2\mathbf{a} - 3\mathbf{b}\$</span>.</li><li><strong>Example 2: Dot Product and Angle Between Vectors</strong>: Find the dot product of vectors <span class="text-blue-700">\$\mathbf{u} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}\$</span> and <span class="text-blue-700">\$\mathbf{v} = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}\$</span>, and then find the angle between them using the dot product formula.</li><li><strong>Example 3: Cross Product and Projection</strong>: Calculate the cross product of vectors <span class="text-blue-700">\$\mathbf{u} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}\$</span> and <span class="text-blue-700">\$\mathbf{v} = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}\$</span>. Then, find the projection of <span class="text-blue-700">\$\mathbf{v}\$</span> onto <span class="text-blue-700">\$\mathbf{u}\$</span>.</li></ol>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `1. <a href="https://www.youtube.com/watch?v=example1" target="_blank">YouTube: Vector Basics and Operations</a><br>2. <a href="https://www.bilibili.com/video/BVexample1" target="_blank">Bilibili: 向量的基本概念和运算</a><br>3. <a href="https://www.youtube.com/watch?v=example2" target="_blank">YouTube: Advanced Vector Concepts</a><br>4. <a href="https://www.bilibili.com/video/BVexample2" target="_blank">Bilibili: 高级向量概念</a>`
            }
        ]
    },


    'math-integration': {
        name: 'Integration 积分',
        subject: 'math',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `<div class='bg-blue-50 p-4 rounded-md'><h2>What is Integration?</h2><p>Integration is the process of finding the area under a curve or the sum of infinite small parts. It is the inverse operation of differentiation and is used to calculate areas, volumes, and to solve various physical and engineering problems.</p></div>

<div class='bg-green-50 p-4 rounded-md'><h2>Types of Integrals</h2><ul>
<li><strong>Definite Integral:</strong> Gives a numerical value for the area under a curve over a specific interval.</li>
<li><strong>Indefinite Integral:</strong> Represents a family of functions whose derivatives are the original function. It does not have limits and is denoted by a constant of integration (+C).</li>
</ul></div>

<div class='bg-purple-50 p-4 rounded-md'><h2>Key Formulas</h2><p>Integration by substitution: \$\int f(g(x))g'(x)dx = \int f(u)du\$ where \$u = g(x)\$.</p>
<p>Integration by parts: \$\int u \, dv = uv - \int v \, du\$.</p>
<p>Integration of trigonometric functions: \$\int \sin x \, dx = -\cos x + C\$, \$\int \cos x \, dx = \sin x + C\$, \$\int \sec^2 x \, dx = \tan x + C\$.</p></div>

<div class='bg-yellow-50 p-4 rounded-md'><h2>Examples</h2><p>\$\int_0^1 x^2 \, dx = \left[ \frac{x^3}{3} \right]_0^1 = \frac{1}{3}\$.</p></div>`
            },            {
                title: '🔧 Methods / 解题方法',
                content: `<h2>Method 1: Integration by Substitution</h2><p>Example: Calculate \$\int (2x + 1)^3 \, dx\$.</p><div class='p-4 rounded-md bg-blue-50'>
<p>Let \$u = 2x + 1\$. Then \$du = 2 \, dx\$ or \$dx = \frac{du}{2}\$.</p>
<p>\$\int (2x + 1)^3 \, dx = \int u^3 \frac{du}{2} = \frac{1}{2} \int u^3 \, du = \frac{1}{2} \cdot \frac{u^4}{4} + C = \frac{(2x + 1)^4}{8} + C\$.</p>
</div>

<h2>Method 2: Integration by Parts</h2><p>Example: Calculate \$\int x e^x \, dx\$.</p><div class='p-4 rounded-md bg-blue-50'>
<p>Let \$u = x\$ and \$dv = e^x \, dx\$. Then \$du = dx\$ and \$v = e^x\$.</p>
<p>\$\int x e^x \, dx = xe^x - \int e^x \, dx = xe^x - e^x + C = e^x (x - 1) + C\$.</p>
</div>`
            },            {
                title: '⚠️ Common Mistakes / 常见错误',
                content: `<ul>
<li><strong>Forgetting the constant of integration (+C):</strong> Always add the constant of integration when solving indefinite integrals.</li>
<li><strong>Misapplying the chain rule:</strong> Be careful when using substitution. Ensure the substitution is correctly applied.</li>
<li><strong>Mistakes in integration by parts:</strong> The formula \$\int u \, dv = uv - \int v \, du\$ can be tricky. Ensure you correctly calculate each term.</li>
<li><strong>Incorrect limits in definite integrals:</strong> When evaluating definite integrals, ensure the limits are applied correctly. The result can be negative if the function is below the x-axis.</li>
</ul>`
            },            {
                title: '📝 Worked Examples / 典型例题',
                content: `<h2>Example 1: Calculate \$\int x^2 (x^3 + 1)^2 \, dx\$</h2><div class='p-4 rounded-md bg-blue-50'>
<p>Let \$u = x^3 + 1\$. Then \$du = 3x^2 \, dx\$ or \$\frac{du}{3} = x^2 \, dx\$.</p>
<p>\$\int x^2 (x^3 + 1)^2 \, dx = \int u^2 \frac{du}{3} = \frac{1}{3} \int u^2 \, du = \frac{1}{3} \cdot \frac{u^3}{3} + C = \frac{(x^3 + 1)^3}{9} + C\$.</p>
</div>

<h2>Example 2: Calculate \$\int_0^1 e^x \, dx\$</h2><div class='p-4 rounded-md bg-blue-50'>
<p>\$\int_0^1 e^x \, dx = \left[ e^x \right]_0^1 = e^1 - e^0 = e - 1\$.</p>
</div>`
            },            {
                title: '📺 Learning Resources / 学习资源',
                content: `<ul>
<li><a href='https://www.youtube.com/watch?v=0d6uZoB5Zo8' target='_blank'>YouTube: Integration by Substitution</a></li>
<li><a href='https://www.bilibili.com/video/BV1vW4y1x7a8' target='_blank'>Bilibili: Integration by Parts</a></li>
<li><a href='https://www.khanacademy.org/math/calculus-home/integration-calculus' target='_blank'>Khan Academy: Definite and Indefinite Integrals</a></li>
</ul>`
            }
        ]
    },
    // Mathematics (9709)
    'math-quadratics': {
        name: 'Quadratics 二次方程',
        subject: 'math',
        sections: [
            {
                title: '📖 Core Concepts 核心概念',
                content: `
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-800 mb-2">Standard Form 标准形式</h5>
                            <p class="text-lg text-center font-mono my-2">$ax^2 + bx + c = 0$ （$a \\neq 0$）</p>
                            <ul class="text-sm text-blue-700 space-y-1">
                                <li>• $a$ - coefficient of $x^2$ / 二次项系数</li>
                                <li>• $b$ - coefficient of $x$ / 一次项系数</li>
                                <li>• $c$ - constant term / 常数项</li>
                            </ul>
                        </div>
                        
                        <div class="bg-green-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-green-800 mb-2">Quadratic Formula 求根公式</h5>
                            <p class="text-lg text-center font-mono my-2">$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$</p>
                            <p class="text-sm text-green-700">Works for all quadratic equations / 适用于所有二次方程</p>
                        </div>
                        
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-purple-800 mb-2">Discriminant Δ = b² - 4ac 判别式</h5>
                            <table class="w-full text-sm mt-2">
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">Δ > 0</td>
                                    <td class="py-2">Two distinct real roots / 两个不等实根</td>
                                    <td class="py-2 text-purple-600">$x_1 \\neq x_2$</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">Δ = 0</td>
                                    <td class="py-2">One repeated real root / 两个相等实根</td>
                                    <td class="py-2 text-purple-600">$x_1 = x_2 = -\\frac{b}{2a}$</td>
                                </tr>
                                <tr>
                                    <td class="py-2 font-semibold">Δ < 0</td>
                                    <td class="py-2">No real roots / 无实根</td>
                                    <td class="py-2 text-purple-600">$x = \\frac{-b \\pm i\\sqrt{|Δ|}}{2a}$</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div class="bg-yellow-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-yellow-800 mb-2">📺 Learning Resources 学习资源</h5>
                            <div class="space-y-2">
                                <a href="https://www.youtube.com/results?search_query=cie+math+quadratics" target="_blank" class="flex items-center text-blue-600 hover:underline">
                                    <span class="mr-2">▶️</span> YouTube - CIE Math Quadratics
                                </a>
                                <a href="https://search.bilibili.com/article?keyword=Alevel+math+quadratics" target="_blank" class="flex items-center text-green-600 hover:underline">
                                    <span class="mr-2">📺</span> Bilibili - A-Level 二次方程
                                </a>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: '🔧 解题方法',
                content: `
                    <div class="space-y-4">
                        <div class="border-l-4 border-blue-500 pl-4">
                            <h5 class="font-semibold text-gray-800">方法一：因式分解法</h5>
                            <p class="text-sm text-gray-600 mt-1">适用于可以因式分解的方程</p>
                            <div class="bg-gray-50 p-3 rounded mt-2">
                                <p class="font-mono text-sm">$x^2 - 5x + 6 = 0$</p>
                                <p class="font-mono text-sm">$(x-2)(x-3) = 0$</p>
                                <p class="font-mono text-sm">$x = 2$ 或 $x = 3$</p>
                            </div>
                        </div>
                        
                        <div class="border-l-4 border-green-500 pl-4">
                            <h5 class="font-semibold text-gray-800">方法二：配方法</h5>
                            <p class="text-sm text-gray-600 mt-1">将方程化为 $(x+p)^2 = q$ 的形式</p>
                            <div class="bg-gray-50 p-3 rounded mt-2">
                                <p class="font-mono text-sm">$x^2 + 6x + 5 = 0$</p>
                                <p class="font-mono text-sm">$x^2 + 6x + 9 - 9 + 5 = 0$</p>
                                <p class="font-mono text-sm">$(x+3)^2 = 4$</p>
                                <p class="font-mono text-sm">$x = -3 \\pm 2$</p>
                            </div>
                        </div>
                        
                        <div class="border-l-4 border-purple-500 pl-4">
                            <h5 class="font-semibold text-gray-800">方法三：公式法（万能）</h5>
                            <p class="text-sm text-gray-600 mt-1">所有二次方程都适用</p>
                            <div class="bg-gray-50 p-3 rounded mt-2">
                                <p class="text-sm">直接代入求根公式，注意先计算判别式</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: '⚠️ 常见错误',
                content: `
                    <div class="space-y-3">
                        <div class="flex items-start space-x-3 bg-red-50 p-3 rounded">
                            <span class="text-red-500 font-bold">❌</span>
                            <div>
                                <p class="font-semibold text-red-800">忘记检查 a ≠ 0</p>
                                <p class="text-sm text-red-600">如果 a = 0，方程就变成一次方程了</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3 bg-red-50 p-3 rounded">
                            <span class="text-red-500 font-bold">❌</span>
                            <div>
                                <p class="font-semibold text-red-800">判别式计算错误</p>
                                <p class="text-sm text-red-600">注意是 $b^2 - 4ac$，不是 $b^2 + 4ac$</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3 bg-red-50 p-3 rounded">
                            <span class="text-red-500 font-bold">❌</span>
                            <div>
                                <p class="font-semibold text-red-800">符号错误</p>
                                <p class="text-sm text-red-600">求根公式中是 $-b$，如果 b 是负数要注意</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3 bg-red-50 p-3 rounded">
                            <span class="text-red-500 font-bold">❌</span>
                            <div>
                                <p class="font-semibold text-red-800">忘记除以 2a</p>
                                <p class="text-sm text-red-600">最后一定要除以 $2a$，不是 $2$</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: '📝 典型例题',
                content: `
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 1：基础求解</h5>
                            <p class="font-mono mb-2">解方程：$2x^2 - 7x + 3 = 0$</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>$a = 2, b = -7, c = 3$</p>
                                <p>$Δ = (-7)^2 - 4 \\times 2 \\times 3 = 49 - 24 = 25$</p>
                                <p>$x = \\frac{7 \\pm \\sqrt{25}}{4} = \\frac{7 \\pm 5}{4}$</p>
                                <p>$x_1 = \\frac{12}{4} = 3, \\quad x_2 = \\frac{2}{4} = \\frac{1}{2}$</p>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 2：判断根的情况</h5>
                            <p class="font-mono mb-2">不解方程，判断 $3x^2 - 2x + 1 = 0$ 的根的情况</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>$Δ = (-2)^2 - 4 \\times 3 \\times 1 = 4 - 12 = -8 < 0$</p>
                                <p>∴ 方程无实根（有两个共轭复数根）</p>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 3：含参数方程</h5>
                            <p class="font-mono mb-2">若 $x^2 + kx + 4 = 0$ 有两个相等实根，求 $k$</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>有两个相等实根 → $Δ = 0$</p>
                                <p>$k^2 - 4 \\times 1 \\times 4 = 0$</p>
                                <p>$k^2 = 16$</p>
                                <p>$k = \\pm 4$</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: '🎯 实战练习',
                content: `
                    <div class="space-y-4">
                        <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h5 class="font-semibold text-yellow-800 mb-3">快速检测</h5>
                            <div class="space-y-3">
                                <div class="flex justify-between items-center">
                                    <span>1. $x^2 - 5x + 6 = 0$ 的根是？</span>
                                    <button onclick="showAnswer('q1')" class="text-blue-600 text-sm hover:underline">查看答案</button>
                                </div>
                                <p id="q1" class="hidden text-green-700 text-sm">$x = 2$ 或 $x = 3$</p>
                                
                                <div class="flex justify-between items-center">
                                    <span>2. $x^2 + 4x + 4 = 0$ 有几个根？</span>
                                    <button onclick="showAnswer('q2')" class="text-blue-600 text-sm hover:underline">查看答案</button>
                                </div>
                                <p id="q2" class="hidden text-green-700 text-sm">1个（重根），$x = -2$</p>
                                
                                <div class="flex justify-between items-center">
                                    <span>3. $2x^2 - 3x + 5 = 0$ 有实根吗？</span>
                                    <button onclick="showAnswer('q3')" class="text-blue-600 text-sm hover:underline">查看答案</button>
                                </div>
                                <p id="q3" class="hidden text-green-700 text-sm">无实根（$Δ = 9 - 40 = -31 < 0$）</p>
                            </div>
                        </div>
                        
                        <div class="text-center">
                            <button onclick="practiceThisTopic('math-quadratics', 'math')" 
                                class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                                📝 进入练习页面
                            </button>
                        </div>
                    </div>
                `
            }
        ]
    },
    
    'math-functions': {
        name: 'Functions 函数',
        subject: 'math',
        sections: [
            {
                title: '📖 核心概念',
                content: `
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-800 mb-2">函数定义</h5>
                            <p class="text-gray-700">函数是一种特殊的对应关系，每个输入值对应唯一的输出值。</p>
                            <p class="text-center font-mono text-lg my-2">$f: x \\mapsto f(x)$</p>
                            <p class="text-sm text-blue-700">读作："f 把 x 映射到 f(x)"</p>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-semibold text-green-800 mb-2">定义域 Domain</h5>
                                <p class="text-sm text-gray-700">自变量 $x$ 的取值范围</p>
                                <p class="text-sm text-green-700 mt-1">例：$f(x) = \\sqrt{x}$ 的定义域是 $x \\geq 0$</p>
                            </div>
                            
                            <div class="bg-purple-50 p-4 rounded-lg">
                                <h5 class="font-semibold text-purple-800 mb-2">值域 Range</h5>
                                <p class="text-sm text-gray-700">函数值 $f(x)$ 的取值范围</p>
                                <p class="text-sm text-purple-700 mt-1">例：$f(x) = x^2$ 的值域是 $f(x) \\geq 0$</p>
                            </div>
                        </div>
                        
                        <div class="bg-yellow-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-yellow-800 mb-2">反函数 Inverse Function</h5>
                            <p class="text-sm text-gray-700 mb-2">如果 $f(a) = b$，那么 $f^{-1}(b) = a$</p>
                            <p class="text-sm text-yellow-700">求法：令 $y = f(x)$，解出 $x$，交换 $x$ 和 $y$</p>
                        </div>
                    </div>
                `
            },
            {
                title: '🔧 复合函数',
                content: `
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-800 mb-2">定义</h5>
                            <p class="text-gray-700">复合函数是将一个函数的输出作为另一个函数的输入。</p>
                            <p class="text-center font-mono text-lg my-2">$(f \\circ g)(x) = f(g(x))$</p>
                            <p class="text-sm text-blue-700">先算 $g(x)$，再把结果代入 $f$</p>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题</h5>
                            <p class="font-mono mb-2">已知 $f(x) = 2x + 1$，$g(x) = x^2$，求 $f(g(2))$</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>第一步：计算 $g(2) = 2^2 = 4$</p>
                                <p>第二步：计算 $f(4) = 2 \\times 4 + 1 = 9$</p>
                                <p>∴ $f(g(2)) = 9$</p>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    
    'math-coordinate': {
        name: 'Coordinate Geometry 坐标几何',
        subject: 'math',
        sections: [
            {
                title: '📖 核心公式',
                content: `
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-800 mb-2">两点间距离公式</h5>
                            <p class="text-center font-mono text-lg my-2">$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$</p>
                            <p class="text-sm text-blue-700">勾股定理的应用</p>
                        </div>
                        
                        <div class="bg-green-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-green-800 mb-2">中点公式</h5>
                            <p class="text-center font-mono text-lg my-2">$M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$</p>
                            <p class="text-sm text-green-700">两点坐标的平均值</p>
                        </div>
                        
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-purple-800 mb-2">直线方程</h5>
                            <table class="w-full text-sm">
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">斜截式</td>
                                    <td class="py-2 font-mono">$y = mx + c$</td>
                                    <td class="py-2">$m$为斜率，$c$为y截距</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">点斜式</td>
                                    <td class="py-2 font-mono">$y - y_1 = m(x - x_1)$</td>
                                    <td class="py-2">过点$(x_1, y_1)$，斜率为$m$</td>
                                </tr>
                                <tr>
                                    <td class="py-2 font-semibold">一般式</td>
                                    <td class="py-2 font-mono">$ax + by + c = 0$</td>
                                    <td class="py-2">斜率 $m = -\\frac{a}{b}$</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div class="bg-yellow-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-yellow-800 mb-2">斜率与位置关系</h5>
                            <ul class="text-sm space-y-2">
                                <li><strong>斜率公式：</strong>$m = \\frac{y_2-y_1}{x_2-x_1}$</li>
                                <li><strong>平行：</strong>$m_1 = m_2$</li>
                                <li><strong>垂直：</strong>$m_1 \\times m_2 = -1$</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                title: '📝 典型例题',
                content: `
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 1：求距离和中点</h5>
                            <p class="font-mono mb-2">已知 $A(1, 2)$，$B(5, 6)$，求 $AB$ 的长度和中点</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>距离：$d = \\sqrt{(5-1)^2 + (6-2)^2} = \\sqrt{16+16} = \\sqrt{32} = 4\\sqrt{2}$</p>
                                <p>中点：$M = \\left(\\frac{1+5}{2}, \\frac{2+6}{2}\\right) = (3, 4)$</p>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 2：求直线方程</h5>
                            <p class="font-mono mb-2">求过点 $(2, 3)$ 且斜率为 $2$ 的直线方程</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>使用点斜式：$y - 3 = 2(x - 2)$</p>
                                <p>化简：$y = 2x - 4 + 3 = 2x - 1$</p>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 3：判断位置关系</h5>
                            <p class="font-mono mb-2">判断直线 $y = 2x + 1$ 和 $y = -\\frac{1}{2}x + 3$ 的关系</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>$m_1 = 2$，$m_2 = -\\frac{1}{2}$</p>
                                <p>$m_1 \\times m_2 = 2 \\times (-\\frac{1}{2}) = -1$</p>
                                <p>∴ 两直线垂直</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: '⚠️ 常见错误',
                content: `
                    <div class="space-y-3">
                        <div class="flex items-start space-x-3 bg-red-50 p-3 rounded">
                            <span class="text-red-500 font-bold">❌</span>
                            <div>
                                <p class="font-semibold text-red-800">距离公式忘记开平方</p>
                                <p class="text-sm text-red-600">$d = (x_2-x_1)^2 + (y_2-y_1)^2$ 是错误的，必须开平方</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3 bg-red-50 p-3 rounded">
                            <span class="text-red-500 font-bold">❌</span>
                            <div>
                                <p class="font-semibold text-red-800">斜率计算顺序错误</p>
                                <p class="text-sm text-red-600">$m = \\frac{y_2-y_1}{x_2-x_1}$，不是 $\\frac{x_2-x_1}{y_2-y_1}$</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3 bg-red-50 p-3 rounded">
                            <span class="text-red-500 font-bold">❌</span>
                            <div>
                                <p class="font-semibold text-red-800">垂直条件记错</p>
                                <p class="text-sm text-red-600">垂直是 $m_1 \\times m_2 = -1$，不是 $m_1 = -m_2$</p>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    
    'math-trigonometry': {
        name: 'Trigonometry 三角函数',
        subject: 'math',
        sections: [
            {
                title: '📖 基本定义',
                content: `
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-800 mb-2">直角三角形定义</h5>
                            <div class="grid grid-cols-3 gap-4 text-center">
                                <div class="bg-white p-3 rounded">
                                    <p class="font-mono text-lg">$\\sin\\theta = \\frac{对边}{斜边}$</p>
                                </div>
                                <div class="bg-white p-3 rounded">
                                    <p class="font-mono text-lg">$\\cos\\theta = \\frac{邻边}{斜边}$</p>
                                </div>
                                <div class="bg-white p-3 rounded">
                                    <p class="font-mono text-lg">$\\tan\\theta = \\frac{对边}{邻边}$</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-green-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-green-800 mb-2">特殊角值（必须记住）</h5>
                            <table class="w-full text-sm text-center">
                                <tr class="border-b">
                                    <th class="py-2">角度</th>
                                    <th class="py-2">$0°$</th>
                                    <th class="py-2">$30°$</th>
                                    <th class="py-2">$45°$</th>
                                    <th class="py-2">$60°$</th>
                                    <th class="py-2">$90°$</th>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">$\\sin$</td>
                                    <td class="py-2">$0$</td>
                                    <td class="py-2">$\\frac{1}{2}$</td>
                                    <td class="py-2">$\\frac{\\sqrt{2}}{2}$</td>
                                    <td class="py-2">$\\frac{\\sqrt{3}}{2}$</td>
                                    <td class="py-2">$1$</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">$\\cos$</td>
                                    <td class="py-2">$1$</td>
                                    <td class="py-2">$\\frac{\\sqrt{3}}{2}$</td>
                                    <td class="py-2">$\\frac{\\sqrt{2}}{2}$</td>
                                    <td class="py-2">$\\frac{1}{2}$</td>
                                    <td class="py-2">$0$</td>
                                </tr>
                                <tr>
                                    <td class="py-2 font-semibold">$\\tan$</td>
                                    <td class="py-2">$0$</td>
                                    <td class="py-2">$\\frac{\\sqrt{3}}{3}$</td>
                                    <td class="py-2">$1$</td>
                                    <td class="py-2">$\\sqrt{3}$</td>
                                    <td class="py-2">无定义</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-purple-800 mb-2">基本恒等式</h5>
                            <div class="space-y-2 text-center">
                                <p class="font-mono text-lg">$\\sin^2\\theta + \\cos^2\\theta = 1$</p>
                                <p class="font-mono text-lg">$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$</p>
                                <p class="font-mono text-lg">$1 + \\tan^2\\theta = \\sec^2\\theta$</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: '📝 典型例题',
                content: `
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 1：求三角函数值</h5>
                            <p class="font-mono mb-2">已知 $\\sin\\theta = \\frac{3}{5}$，且 $\\theta$ 为锐角，求 $\\cos\\theta$ 和 $\\tan\\theta$</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>由 $\\sin^2\\theta + \\cos^2\\theta = 1$</p>
                                <p>$\\cos^2\\theta = 1 - (\\frac{3}{5})^2 = 1 - \\frac{9}{25} = \\frac{16}{25}$</p>
                                <p>$\\cos\\theta = \\frac{4}{5}$（锐角取正值）</p>
                                <p>$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{3/5}{4/5} = \\frac{3}{4}$</p>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 2：解三角方程</h5>
                            <p class="font-mono mb-2">解方程 $\\sin x = \\frac{\\sqrt{3}}{2}$，$0° \\leq x \\leq 360°$</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>参考特殊角值表，$\\sin 60° = \\frac{\\sqrt{3}}{2}$</p>
                                <p>由对称性，$\\sin(180°-60°) = \\sin 60° = \\frac{\\sqrt{3}}{2}$</p>
                                <p>∴ $x = 60°$ 或 $x = 120°$</p>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    
    'math-differentiation': {
        name: 'Differentiation 微分',
        subject: 'math',
        sections: [
            {
                title: '📖 基本公式',
                content: `
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-800 mb-2">幂函数</h5>
                            <p class="text-center font-mono text-lg my-2">$\\frac{d}{dx}(x^n) = nx^{n-1}$</p>
                            <p class="text-sm text-blue-700">例：$\\frac{d}{dx}(x^3) = 3x^2$</p>
                        </div>
                        
                        <div class="bg-green-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-green-800 mb-2">常数和系数</h5>
                            <div class="space-y-2 text-center">
                                <p class="font-mono">$\\frac{d}{dx}(c) = 0$（$c$为常数）</p>
                                <p class="font-mono">$\\frac{d}{dx}(cf(x)) = c\\frac{d}{dx}(f(x))$</p>
                            </div>
                        </div>
                        
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-purple-800 mb-2">和差积商法则</h5>
                            <table class="w-full text-sm">
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">和差法则</td>
                                    <td class="py-2 font-mono">$(f ± g)' = f' ± g'$</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">积法则</td>
                                    <td class="py-2 font-mono">$(fg)' = f'g + fg'$</td>
                                </tr>
                                <tr>
                                    <td class="py-2 font-semibold">商法则</td>
                                    <td class="py-2 font-mono">$(\\frac{f}{g})' = \\frac{f'g - fg'}{g^2}$</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div class="bg-yellow-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-yellow-800 mb-2">链式法则（复合函数）</h5>
                            <p class="text-center font-mono text-lg my-2">$\\frac{dy}{dx} = \\frac{dy}{du} \\times \\frac{du}{dx}$</p>
                            <p class="text-sm text-yellow-700">例：求 $(2x+1)^5$ 的导数</p>
                            <p class="text-sm text-yellow-700">令 $u = 2x+1$，则 $y = u^5$</p>
                            <p class="text-sm text-yellow-700">$\\frac{dy}{dx} = 5u^4 \\times 2 = 10(2x+1)^4$</p>
                        </div>
                    </div>
                `
            },
            {
                title: '📝 典型例题',
                content: `
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 1：基本求导</h5>
                            <p class="font-mono mb-2">求 $y = 3x^4 - 2x^3 + 5x - 7$ 的导数</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>$\\frac{dy}{dx} = 3 \\times 4x^3 - 2 \\times 3x^2 + 5 - 0$</p>
                                <p>$= 12x^3 - 6x^2 + 5$</p>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 2：链式法则</h5>
                            <p class="font-mono mb-2">求 $y = (3x^2 + 1)^4$ 的导数</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>令 $u = 3x^2 + 1$，则 $y = u^4$</p>
                                <p>$\\frac{du}{dx} = 6x$，$\\frac{dy}{du} = 4u^3$</p>
                                <p>$\\frac{dy}{dx} = 4u^3 \\times 6x = 24x(3x^2+1)^3$</p>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 3：求切线方程</h5>
                            <p class="font-mono mb-2">求曲线 $y = x^2$ 在点 $(2, 4)$ 处的切线方程</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>$\\frac{dy}{dx} = 2x$</p>
                                <p>在 $x = 2$ 处，斜率 $m = 2 \\times 2 = 4$</p>
                                <p>切线方程：$y - 4 = 4(x - 2)$</p>
                                <p>化简：$y = 4x - 4$</p>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    
    'physics-kinematics': {
        name: 'Kinematics 运动学',
        subject: 'physics',
        sections: [
            {
                title: '📖 核心公式',
                content: `
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-800 mb-2">匀加速直线运动公式（SUVAT）</h5>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-white p-3 rounded text-center">
                                    <p class="font-mono">$v = u + at$</p>
                                    <p class="text-xs text-gray-600">求末速度</p>
                                </div>
                                <div class="bg-white p-3 rounded text-center">
                                    <p class="font-mono">$s = \\frac{(u+v)t}{2}$</p>
                                    <p class="text-xs text-gray-600">平均速度公式</p>
                                </div>
                                <div class="bg-white p-3 rounded text-center">
                                    <p class="font-mono">$s = ut + \\frac{1}{2}at^2$</p>
                                    <p class="text-xs text-gray-600">无末速度</p>
                                </div>
                                <div class="bg-white p-3 rounded text-center">
                                    <p class="font-mono">$v^2 = u^2 + 2as$</p>
                                    <p class="text-xs text-gray-600">无时间</p>
                                </div>
                            </div>
                            <p class="text-sm text-blue-700 mt-3 text-center">$s$=位移, $u$=初速度, $v$=末速度, $a$=加速度, $t$=时间</p>
                        </div>
                        
                        <div class="bg-green-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-green-800 mb-2">自由落体（$g = 9.8 \\text{ m/s}^2$）</h5>
                            <ul class="text-sm space-y-2">
                                <li>• 初速度 $u = 0$（从静止开始）</li>
                                <li>• 加速度 $a = g$（向下）</li>
                                <li>• 上升时 $a = -g$（减速）</li>
                            </ul>
                        </div>
                        
                        <div class="bg-yellow-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-yellow-800 mb-2">图像分析</h5>
                            <table class="w-full text-sm">
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">$s-t$ 图</td>
                                    <td class="py-2">斜率 = 速度</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">$v-t$ 图</td>
                                    <td class="py-2">斜率 = 加速度，面积 = 位移</td>
                                </tr>
                                <tr>
                                    <td class="py-2 font-semibold">$a-t$ 图</td>
                                    <td class="py-2">面积 = 速度变化</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                `
            },
            {
                title: '📝 典型例题',
                content: `
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 1：基本运动计算</h5>
                            <p class="font-mono mb-2">汽车从静止开始以 $2 \\text{ m/s}^2$ 加速，求 5 秒后的速度和位移</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>已知：</strong>$u = 0$，$a = 2 \\text{ m/s}^2$，$t = 5 \\text{ s}$</p>
                                <p><strong>求速度：</strong>$v = u + at = 0 + 2 \\times 5 = 10 \\text{ m/s}$</p>
                                <p><strong>求位移：</strong>$s = ut + \\frac{1}{2}at^2 = 0 + \\frac{1}{2} \\times 2 \\times 25 = 25 \\text{ m}$</p>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 2：自由落体</h5>
                            <p class="font-mono mb-2">从 20m 高处自由落下的物体，落地时的速度是多少？</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>已知：</strong>$u = 0$，$s = 20 \\text{ m}$，$a = g = 9.8 \\text{ m/s}^2$</p>
                                <p><strong>解：</strong>使用 $v^2 = u^2 + 2as$</p>
                                <p>$v^2 = 0 + 2 \\times 9.8 \\times 20 = 392$</p>
                                <p>$v = \\sqrt{392} \\approx 19.8 \\text{ m/s}$</p>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 3：竖直上抛</h5>
                            <p class="font-mono mb-2">以 $20 \\text{ m/s}$ 初速度竖直上抛的物体，最大高度是多少？</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>已知：</strong>$u = 20 \\text{ m/s}$，$v = 0$（最高点），$a = -g = -9.8 \\text{ m/s}^2$</p>
                                <p><strong>解：</strong>使用 $v^2 = u^2 + 2as$</p>
                                <p>$0 = 400 + 2 \\times (-9.8) \\times s$</p>
                                <p>$s = \\frac{400}{19.6} \\approx 20.4 \\text{ m}$</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: '⚠️ 常见错误',
                content: `
                    <div class="space-y-3">
                        <div class="flex items-start space-x-3 bg-red-50 p-3 rounded">
                            <span class="text-red-500 font-bold">❌</span>
                            <div>
                                <p class="font-semibold text-red-800">符号错误</p>
                                <p class="text-sm text-red-600">上升时加速度为 $-g$（负值），不要忽略负号</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3 bg-red-50 p-3 rounded">
                            <span class="text-red-500 font-bold">❌</span>
                            <div>
                                <p class="font-semibold text-red-800">单位混淆</p>
                                <p class="text-sm text-red-600">速度用 m/s，时间用 s，位移用 m，确保单位统一</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3 bg-red-50 p-3 rounded">
                            <span class="text-red-500 font-bold">❌</span>
                            <div>
                                <p class="font-semibold text-red-800">自由落体初速度</p>
                                <p class="text-sm text-red-600">"自由"落下意味着 $u = 0$，不是其他值</p>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    
    'physics-dynamics': {
        name: 'Dynamics 动力学',
        subject: 'physics',
        sections: [
            {
                title: '📖 牛顿定律',
                content: `
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-800 mb-2">牛顿第一定律（惯性定律）</h5>
                            <p class="text-gray-700">物体保持静止或匀速直线运动，除非受到合外力的作用。</p>
                            <p class="text-sm text-blue-700 mt-2">惯性只与质量有关：质量越大，惯性越大</p>
                        </div>
                        
                        <div class="bg-green-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-green-800 mb-2">牛顿第二定律</h5>
                            <p class="text-center font-mono text-xl my-3">$F = ma$</p>
                            <p class="text-sm text-green-700">$F$=合外力(N)，$m$=质量(kg)，$a$=加速度(m/s²)</p>
                            <p class="text-sm text-green-700 mt-2">力的方向与加速度方向相同</p>
                        </div>
                        
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-purple-800 mb-2">牛顿第三定律</h5>
                            <p class="text-gray-700">作用力与反作用力大小相等、方向相反、作用在不同物体上。</p>
                            <p class="text-sm text-purple-700 mt-2">例：人推墙，墙也推人；人站在地面，地面支持人</p>
                        </div>
                        
                        <div class="bg-yellow-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-yellow-800 mb-2">常见力的类型</h5>
                            <table class="w-full text-sm">
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">重力 $W$</td>
                                    <td class="py-2">$W = mg$（$g = 9.8 \\text{ N/kg}$）</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">支持力 $N$</td>
                                    <td class="py-2">垂直于接触面向上</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-2 font-semibold">摩擦力 $f$</td>
                                    <td class="py-2">$f = \\mu N$，阻碍相对运动</td>
                                </tr>
                                <tr>
                                    <td class="py-2 font-semibold">张力 $T$</td>
                                    <td class="py-2">沿绳子方向，拉物体</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                `
            },
            {
                title: '📝 典型例题',
                content: `
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 1：基本受力分析</h5>
                            <p class="font-mono mb-2">质量为 5kg 的物体在光滑水平面上受到 10N 水平拉力，求加速度</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>光滑水平面 → 无摩擦力</p>
                                <p>合外力 $F = 10 \\text{ N}$</p>
                                <p>由 $F = ma$：$a = \\frac{F}{m} = \\frac{10}{5} = 2 \\text{ m/s}^2$</p>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 2：考虑摩擦力</h5>
                            <p class="font-mono mb-2">质量为 10kg 的物体在粗糙水平面上，摩擦系数为 0.3，受到 50N 水平拉力，求加速度</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>支持力 $N = mg = 10 \\times 9.8 = 98 \\text{ N}$</p>
                                <p>摩擦力 $f = \\mu N = 0.3 \\times 98 = 29.4 \\text{ N}$</p>
                                <p>合外力 $F_{net} = 50 - 29.4 = 20.6 \\text{ N}$</p>
                                <p>加速度 $a = \\frac{20.6}{10} = 2.06 \\text{ m/s}^2$</p>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h5 class="font-semibold text-gray-800 mb-2">例题 3：斜面问题</h5>
                            <p class="font-mono mb-2">质量为 2kg 的物体沿倾角为 $30°$ 的光滑斜面下滑，求加速度</p>
                            <div class="text-sm text-gray-700 space-y-1">
                                <p><strong>解：</strong></p>
                                <p>重力沿斜面向下的分量：$F = mg\\sin\\theta$</p>
                                <p>$F = 2 \\times 9.8 \\times \\sin 30° = 2 \\times 9.8 \\times 0.5 = 9.8 \\text{ N}$</p>
                                <p>由 $F = ma$：$a = \\frac{9.8}{2} = 4.9 \\text{ m/s}^2$</p>
                                <p>（注意：与质量无关！$a = g\\sin\\theta$）</p>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    }
};

// 显示答案的辅助函数
var showAnswer = function(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.toggle('hidden');
    }
}

// 获取丰富知识点内容的函数
var getEnrichedTopicContent = function(topicId) {
    const topic = enrichedTopicData[topicId];
    if (!topic) return null;
    
    let html = `<h2 class="text-2xl font-bold text-gray-800 mb-6">${topic.name}</h2>`;
    
    // 标签页导航
    html += `<div class="flex flex-wrap gap-2 mb-6 border-b">`;
    topic.sections.forEach((section, index) => {
        html += `
            <button onclick="switchTopicTab('${topicId}', ${index})" 
                id="tab-${topicId}-${index}"
                class="topic-tab px-4 py-2 text-sm font-medium transition ${index === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}">
                ${section.title}
            </button>
        `;
    });
    html += `</div>`;
    
    // 内容区域
    html += `<div class="topic-content-area">`;
    topic.sections.forEach((section, index) => {
        html += `
            <div id="content-${topicId}-${index}" class="topic-section ${index === 0 ? '' : 'hidden'}">
                ${section.content}
            </div>
        `;
    });
    html += `</div>`;
    
    // 添加 AI 问答区域
    html += `
        <div class="mt-8 pt-6 border-t">
            <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                <h3 class="text-lg font-bold text-gray-800 mb-4">🤖 AI 答疑助手</h3>
                <p class="text-sm text-gray-600 mb-4">对这个知识点有疑问？问 AI 老师！</p>
                <div class="flex gap-2">
                    <input type="text" id="ai-question-${topicId}" 
                        placeholder="例如：判别式有什么用？" 
                        class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <button onclick="askAIAboutTopic('${topicId}', '${topic.name}')" 
                        class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                        提问
                    </button>
                </div>
                <div id="ai-answer-${topicId}" class="mt-4 hidden">
                    <div class="bg-white p-4 rounded-lg border">
                        <p class="text-sm text-gray-500 mb-2">AI 老师回答：</p>
                        <div id="ai-answer-content-${topicId}" class="text-gray-800"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-6">
            <button onclick="practiceThisTopic('${topicId}', '${topic.subject}')" 
                class="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
                📝 练习此知识点
            </button>
        </div>
    `;
    
    return html;
}

// 切换标签页
var switchTopicTab = function(topicId, index) {
    // 更新标签样式
    document.querySelectorAll(`[id^="tab-${topicId}-"]`).forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('text-blue-600', 'border-b-2', 'border-blue-600');
            tab.classList.remove('text-gray-500');
        } else {
            tab.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600');
            tab.classList.add('text-gray-500');
        }
    });
    
    // 切换内容
    document.querySelectorAll(`[id^="content-${topicId}-"]`).forEach((content, i) => {
        if (i === index) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
    
    // 重新渲染数学公式
    renderMathJax();
}

// Auto-generated topics (will be populated by generate-topics.py)
// Topics will be merged here automatically
