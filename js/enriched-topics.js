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
            title: '📖 Core Concepts / 核心概念',
            content: `<div class="bg-blue-50"><strong>Quadratic Equation (二次方程)</strong>: An equation of the form $ax^2 + bx + c = 0$ where $a \neq 0$.</div><div class="bg-green-50"><strong>Quadratic Formula (求根公式)</strong>: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$</div><div class="bg-purple-50"><strong>Discriminant (判别式)</strong>: $\Delta = b^2 - 4ac$ determines the nature of roots:<br>• $\Delta > 0$: Two distinct real roots<br>• $\Delta = 0$: One repeated real root<br>• $\Delta < 0$: No real roots (complex roots)</div><div class="bg-yellow-50"><strong>Methods of Solution (解法)</strong>:<br>1. Factorization (因式分解)<br>2. Completing the square (配方法)<br>3. Quadratic formula (公式法)</div>`
        },
        {
            title: '🔧 Methods / 解题方法',
            content: `<p><strong>Method 1: Factorization</strong></p><p>Express $ax^2 + bx + c$ as $(px + q)(rx + s) = 0$</p><p>Example: $x^2 - 5x + 6 = (x-2)(x-3) = 0$, so $x = 2$ or $x = 3$</p><p><strong>Method 2: Completing the Square</strong></p><p>Rewrite in the form $(x + p)^2 = q$</p><p>Example: $x^2 + 6x + 5 = 0$ becomes $(x+3)^2 - 4 = 0$</p><p><strong>Method 3: Quadratic Formula</strong></p><p>Direct substitution: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$</p><p>Always works for any quadratic equation.</p>`
        },
        {
            title: '⚠️ Common Mistakes / 常见错误',
            content: `<ul><li><strong>Forgetting to check discriminant</strong> before stating the nature of roots</li><li><strong>Sign errors</strong> when applying the quadratic formula (especially with negative $b$)</li><li><strong>Not simplifying</strong> final answers (e.g., leaving $\sqrt{8}$ instead of $2\sqrt{2}$)</li><li><strong>Missing solutions</strong> when factorizing (always check both factors equal zero)</li></ul>`
        },
        {
            title: '📝 Worked Examples / 典型例题',
            content: `<p><strong>Example 1:</strong> Solve $x^2 - 5x + 6 = 0$</p><p>Solution: Factorize: $(x-2)(x-3) = 0$, therefore $x = 2$ or $x = 3$</p><p><strong>Example 2:</strong> Solve $2x^2 + 4x - 3 = 0$ using formula</p><p>Solution: $a=2, b=4, c=-3$<br>$x = \frac{-4 \pm \sqrt{16 + 24}}{4} = \frac{-4 \pm \sqrt{40}}{4} = \frac{-2 \pm \sqrt{10}}{2}$</p><p><strong>Example 3:</strong> Find the discriminant of $3x^2 - 2x + 5 = 0$ and state the nature of roots</p><p>Solution: $\Delta = (-2)^2 - 4(3)(5) = 4 - 60 = -56 < 0$, so no real roots.</p>`
        },
        {
            title: '📺 Learning Resources / 学习资源',
            content: `<p><a href="https://www.youtube.com/watch?v=IKyUuvulI7E" target="_blank">YouTube - Solving Quadratic Equations</a></p><p><a href="https://www.bilibili.com/video/BV1x4411e7hV" target="_blank">Bilibili - 二次方程详解</a></p>`
        }
    ]
},'math-functions': {
    name: 'Functions 函数',
    subject: 'math',
    sections: [
        {
            title: '📖 Core Concepts / 核心概念',
            content: `<div class="bg-blue-50"><strong>Function (函数)</strong>: A relation that assigns to each element $x$ in the domain exactly one element $y$ in the range. Written as $y = f(x)$ or $f: x \mapsto y$.</div><div class="bg-green-50"><strong>Domain (定义域)</strong>: The set of all possible input values ($x$ values) for which the function is defined.</div><div class="bg-purple-50"><strong>Range (值域)</strong>: The set of all possible output values ($y$ values) that the function can produce.</div><div class="bg-yellow-50"><strong>Key Function Types (函数类型)</strong>:<br>• Linear: $f(x) = ax + b$<br>• Quadratic: $f(x) = ax^2 + bx + c$<br>• Exponential: $f(x) = a^x$<br>• Logarithmic: $f(x) = \log_a x$</div>`
        },
        {
            title: '🔧 Methods / 解题方法',
            content: `<p><strong>Finding Domain</strong></p><p>• Polynomial: All real numbers ($x \in \mathbb{R}$)</p><p>• Fraction: Denominator $\neq 0$</p><p>• Square root: Expression inside $\geq 0$</p><p>• Logarithm: Argument $> 0$</p><p><strong>Finding Range</strong></p><p>• Sketch the graph and identify $y$ values</p><p>• For quadratic: Complete the square or use vertex</p><p>• For rational: Find horizontal asymptotes</p><p><strong>Composite Functions</strong></p><p>$(f \circ g)(x) = f(g(x))$</p><p>Apply $g$ first, then $f$ to the result.</p><p><strong>Inverse Functions</strong></p><p>$f^{-1}(x)$ reverses the operation of $f(x)$</p><p>To find: Swap $x$ and $y$, then solve for $y$</p>`
        },
        {
            title: '⚠️ Common Mistakes / 常见错误',
            content: `<ul><li><strong>Confusing $f^{-1}(x)$ with $[f(x)]^{-1}$</strong> - The first is the inverse function, the second is the reciprocal</li><li><strong>Wrong order in composite functions</strong> - $f(g(x))$ means apply $g$ first, not $f$</li><li><strong>Forgetting domain restrictions</strong> - Always check what values of $x$ are allowed</li><li><strong>Assuming all functions have inverses</strong> - Only one-to-one functions have inverses (pass horizontal line test)</li></ul>`
        },
        {
            title: '📝 Worked Examples / 典型例题',
            content: `<p><strong>Example 1:</strong> Find the domain of $f(x) = \sqrt{x-3}$</p><p>Solution: Need $x - 3 \geq 0$, so $x \geq 3$. Domain: $[3, \infty)$</p><p><strong>Example 2:</strong> If $f(x) = 2x + 1$ and $g(x) = x^2$, find $f(g(2))$</p><p>Solution: $g(2) = 4$, then $f(4) = 2(4) + 1 = 9$</p><p><strong>Example 3:</strong> Find the inverse of $f(x) = 3x - 2$</p><p>Solution: Let $y = 3x - 2$. Swap: $x = 3y - 2$. Solve: $y = \frac{x+2}{3}$. So $f^{-1}(x) = \frac{x+2}{3}$</p>`
        },
        {
            title: '📺 Learning Resources / 学习资源',
            content: `<p><a href="https://www.youtube.com/watch?v=kvGsIo1TmsM" target="_blank">YouTube - Functions and Domain/Range</a></p><p><a href="https://www.bilibili.com/video/BV1ZK4y1R7fE" target="_blank">Bilibili - 函数基础教程</a></p>`
        }
    ]
},'math-coordinate': {
    name: 'Coordinate Geometry 坐标几何',
    subject: 'math',
    sections: [
        {
            title: '📖 Core Concepts / 核心概念',
            content: `<div class="bg-blue-50"><strong>Distance Formula (距离公式)</strong>: The distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$</div><div class="bg-green-50"><strong>Midpoint Formula (中点公式)</strong>: The midpoint of $(x_1, y_1)$ and $(x_2, y_2)$ is $(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2})$</div><div class="bg-purple-50"><strong>Gradient/Slope (斜率)</strong>: $m = \frac{y_2-y_1}{x_2-x_1}$ represents the steepness of a line</div><div class="bg-yellow-50"><strong>Line Equations (直线方程)</strong>:<br>• Slope-intercept: $y = mx + c$<br>• Point-slope: $y - y_1 = m(x - x_1)$<br>• General: $ax + by + c = 0$</div>`
        },
        {
            title: '🔧 Methods / 解题方法',
            content: `<p><strong>Finding Line Equation</strong></p><p>Given gradient $m$ and point $(x_1, y_1)$: Use $y - y_1 = m(x - x_1)$</p><p>Given two points: First find gradient, then use point-slope form</p><p><strong>Parallel and Perpendicular Lines</strong></p><p>• Parallel: Same gradient ($m_1 = m_2$)</p><p>• Perpendicular: Product of gradients = -1 ($m_1 \times m_2 = -1$)</p><p><strong>Finding Intersection</strong></p><p>Solve simultaneous equations of the two lines</p><p><strong>Perpendicular Bisector</strong></p><p>Passes through midpoint with negative reciprocal gradient</p>`
        },
        {
            title: '⚠️ Common Mistakes / 常见错误',
            content: `<ul><li><strong>Sign errors in distance formula</strong> - Remember $(x_2-x_1)^2 = (x_1-x_2)^2$, so order doesn't matter for distance</li><li><strong>Confusing parallel and perpendicular conditions</strong> - Parallel = same slope, Perpendicular = negative reciprocal</li><li><strong>Forgetting to simplify gradients</strong> - Always reduce fractions to lowest terms</li><li><strong>Not checking if lines are parallel before finding intersection</strong> - Parallel lines never intersect (unless coincident)</li></ul>`
        },
        {
            title: '📝 Worked Examples / 典型例题',
            content: `<p><strong>Example 1:</strong> Find the distance between $A(1, 2)$ and $B(4, 6)$</p><p>Solution: $d = \sqrt{(4-1)^2 + (6-2)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$</p><p><strong>Example 2:</strong> Find the equation of the line through $(2, 3)$ with gradient $-2$</p><p>Solution: $y - 3 = -2(x - 2)$, so $y = -2x + 7$</p><p><strong>Example 3:</strong> Show that lines $y = 2x + 1$ and $y = -\frac{1}{2}x + 3$ are perpendicular</p><p>Solution: $m_1 = 2$, $m_2 = -\frac{1}{2}$. Product: $2 \times (-\frac{1}{2}) = -1$. Therefore perpendicular.</p>`
        },
        {
            title: '📺 Learning Resources / 学习资源',
            content: `<p><a href="https://www.youtube.com/watch?v=0JjHhVM9zlI" target="_blank">YouTube - Coordinate Geometry Basics</a></p><p><a href="https://www.bilibili.com/video/BV1b4411e7hN" target="_blank">Bilibili - 坐标几何详解</a></p>`
        }
    ]
},'math-trigonometry': {
    name: 'Trigonometry 三角函数',
    subject: 'math',
    sections: [
        {
            title: '📖 Core Concepts / 核心概念',
            content: `<div class="bg-blue-50"><strong>Basic Ratios (基本比值)</strong>: For a right-angled triangle:<br>$\sin \theta = \frac{\text{opposite}}{\text{hypotenuse}}$, $\cos \theta = \frac{\text{adjacent}}{\text{hypotenuse}}$, $\tan \theta = \frac{\text{opposite}}{\text{adjacent}}$</div><div class="bg-green-50"><strong>Special Angles (特殊角)</strong>:<br>$\sin 30° = \frac{1}{2}$, $\cos 30° = \frac{\sqrt{3}}{2}$, $\tan 30° = \frac{1}{\sqrt{3}}$<br>$\sin 45° = \frac{1}{\sqrt{2}}$, $\cos 45° = \frac{1}{\sqrt{2}}$, $\tan 45° = 1$<br>$\sin 60° = \frac{\sqrt{3}}{2}$, $\cos 60° = \frac{1}{2}$, $\tan 60° = \sqrt{3}$</div><div class="bg-purple-50"><strong>Fundamental Identity (基本恒等式)</strong>: $\sin^2 \theta + \cos^2 \theta = 1$</div><div class="bg-yellow-50"><strong>Radians (弧度)</strong>: $180° = \pi$ radians, $360° = 2\pi$ radians</div>`
        },
        {
            title: '🔧 Methods / 解题方法',
            content: `<p><strong>Solving Right-Angled Triangles</strong></p><p>Use SOH CAH TOA to find missing sides or angles</p><p><strong>Sine Rule (正弦定理)</strong></p><p>$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$ (for any triangle)</p><p>Use when given: two angles and one side, or two sides and non-included angle</p><p><strong>Cosine Rule (余弦定理)</strong></p><p>$a^2 = b^2 + c^2 - 2bc \cos A$</p><p>Use when given: three sides, or two sides and included angle</p><p><strong>Area of Triangle</strong></p><p>$\text{Area} = \frac{1}{2}ab \sin C$</p>`
        },
        {
            title: '⚠️ Common Mistakes / 常见错误',
            content: `<ul><li><strong>Calculator in wrong mode</strong> - Ensure calculator is in DEGREES or RADIANS as required</li><li><strong>Sign errors with sine/cosine</strong> - Remember: sine positive in 1st and 2nd quadrants, cosine positive in 1st and 4th</li><li><strong>Using wrong formula</strong> - Sine rule needs opposite pairs, cosine rule for included angles</li><li><strong>Forgetting ambiguous case</strong> - When using sine rule with two sides and non-included angle, there may be two solutions</li></ul>`
        },
        {
            title: '📝 Worked Examples / 典型例题',
            content: `<p><strong>Example 1:</strong> Find $x$ in a right triangle where opposite = 3, hypotenuse = 5</p><p>Solution: $\sin \theta = \frac{3}{5} = 0.6$, so $\theta = \sin^{-1}(0.6) = 36.9°$</p><p><strong>Example 2:</strong> In triangle ABC, $a = 5$, $b = 7$, $A = 40°$. Find angle B.</p><p>Solution: Using sine rule: $\frac{5}{\sin 40°} = \frac{7}{\sin B}$<br>$\sin B = \frac{7 \times \sin 40°}{5} = 0.899$, so $B = 64.1°$ or $115.9°$ (ambiguous case)</p><p><strong>Example 3:</strong> Find the area of triangle with sides 6, 8 and included angle 30°</p><p>Solution: Area = $\frac{1}{2} \times 6 \times 8 \times \sin 30° = 12$</p>`
        },
        {
            title: '📺 Learning Resources / 学习资源',
            content: `<p><a href="https://www.youtube.com/watch?v=Jsiy4TxgIME" target="_blank">YouTube - Trigonometry Basics</a></p><p><a href="https://www.bilibili.com/video/BV1aZ411h7uY" target="_blank">Bilibili - 三角函数基础</a></p>`
        }
    ]
},'math-differentiation': {
    name: 'Differentiation 微分',
    subject: 'math',
    sections: [
        {
            title: '📖 Core Concepts / 核心概念',
            content: `<div class="bg-blue-50"><strong>Derivative (导数)</strong>: The rate of change of a function. $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$ represents the gradient of the tangent at point $x$.</div><div class="bg-green-50"><strong>Basic Rules (基本法则)</strong>:<br>• Power rule: $rac{d}{dx}(x^n) = nx^{n-1}$<br>• Constant: $rac{d}{dx}(c) = 0$<br>• Constant multiple: $rac{d}{dx}[cf(x)] = cf'(x)$<br>• Sum/difference: $rac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$</div><div class="bg-purple-50"><strong>Chain Rule (链式法则)</strong>: $rac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$ for composite functions</div><div class="bg-yellow-50"><strong>Product and Quotient Rules</strong>:<br>• Product: $rac{d}{dx}[uv] = u'v + uv'$<br>• Quotient: $rac{d}{dx}[\frac{u}{v}] = \frac{u'v - uv'}{v^2}$</div>`
        },
        {
            title: '🔧 Methods / 解题方法',
            content: `<p><strong>Finding the Gradient of a Curve</strong></p><p>Differentiate the function and substitute the $x$-coordinate</p><p><strong>Finding Stationary Points</strong></p><p>Solve $f'(x) = 0$ to find where gradient is zero (max, min, or points of inflection)</p><p><strong>Determining Nature of Stationary Points</strong></p><p>• Second derivative test: $f''(x) > 0$ → minimum, $f''(x) < 0$ → maximum</p><p>• First derivative test: Check sign change of $f'(x)$ around the point</p><p><strong>Equation of Tangent/Normal</strong></p><p>• Tangent: Use gradient $f'(a)$ at point $(a, f(a))$</p><p>• Normal: Gradient is $-\frac{1}{f'(a)}$ (negative reciprocal)</p>`
        },
        {
            title: '⚠️ Common Mistakes / 常见错误',
            content: `<ul><li><strong>Forgetting the chain rule</strong> - Always check if the function is composite (function of a function)</li><li><strong>Sign errors with quotient rule</strong> - Remember: $(u'v - uv')$, not $(uv' - u'v)$</li><li><strong>Confusing stationary points</strong> - $f'(x) = 0$ gives stationary points, but you need further tests to classify them</li><li><strong>Arithmetic errors with negative indices</strong> - Remember $\frac{1}{x} = x^{-1}$ and $\frac{1}{x^2} = x^{-2}$</li></ul>`
        },
        {
            title: '📝 Worked Examples / 典型例题',
            content: `<p><strong>Example 1:</strong> Differentiate $f(x) = 3x^4 - 2x^2 + 5x - 1$</p><p>Solution: $f'(x) = 12x^3 - 4x + 5$</p><p><strong>Example 2:</strong> Find the gradient of $y = (2x + 1)^3$ at $x = 1$</p><p>Solution: Using chain rule: $rac{dy}{dx} = 3(2x+1)^2 \times 2 = 6(2x+1)^2$<br>At $x = 1$: $rac{dy}{dx} = 6(3)^2 = 54$</p><p><strong>Example 3:</strong> Find and classify stationary points of $y = x^3 - 3x^2$</p><p>Solution: $rac{dy}{dx} = 3x^2 - 6x = 0$ → $x = 0$ or $x = 2$<br>$\frac{d^2y}{dx^2} = 6x - 6$<br>At $x = 0$: $\frac{d^2y}{dx^2} = -6 < 0$ → maximum<br>At $x = 2$: $\frac{d^2y}{dx^2} = 6 > 0$ → minimum</p>`
        },
        {
            title: '📺 Learning Resources / 学习资源',
            content: `<p><a href="https://www.youtube.com/watch?v=ANyVpMS3HL4" target="_blank">YouTube - Differentiation Basics</a></p><p><a href="https://www.bilibili.com/video/BV1At411d7VJ" target="_blank">Bilibili - 微分基础教程</a></p>`
        }
    ]
},'physics-kinematics': {
    name: 'Kinematics 运动学',
    subject: 'physics',
    sections: [
        {
            title: '📖 Core Concepts / 核心概念',
            content: `<div class="bg-blue-50"><strong>Definitions (定义)</strong>:<br>• Displacement ($s$): Distance in a specific direction (vector)<br>• Velocity ($v$): Rate of change of displacement ($v = \frac{ds}{dt}$)<br>• Acceleration ($a$): Rate of change of velocity ($a = \frac{dv}{dt}$)</div><div class="bg-green-50"><strong>SUVAT Equations (运动学方程)</strong> - For constant acceleration:<br>• $v = u + at$<br>• $s = ut + \frac{1}{2}at^2$<br>• $v^2 = u^2 + 2as$<br>• $s = \frac{(u+v)}{2}t$</div><div class="bg-purple-50"><strong>Graphs (图像)</strong>:<br>• Displacement-time: Gradient = velocity<br>• Velocity-time: Gradient = acceleration, Area = displacement</div><div class="bg-yellow-50"><strong>Free Fall (自由落体)</strong>: Acceleration due to gravity $g = 9.8$ m/s² (downward)</div>`
        },
        {
            title: '🔧 Methods / 解题方法',
            content: `<p><strong>Using SUVAT Equations</strong></p><p>1. Identify known quantities (usually 3 of: $s, u, v, a, t$)</p><p>2. Identify unknown quantity to find</p><p>3. Choose equation that connects knowns to unknown</p><p>4. Substitute values and solve</p><p><strong>Projectile Motion</strong></p><p>• Horizontal: Constant velocity ($a = 0$)</p><p>• Vertical: Constant acceleration ($a = g$ downward)</p><p>• Treat horizontal and vertical motions separately</p><p><strong>Graph Analysis</strong></p><p>• Gradient of s-t graph gives instantaneous velocity</p><p>• Area under v-t graph gives displacement</p><p>• Gradient of v-t graph gives acceleration</p>`
        },
        {
            title: '⚠️ Common Mistakes / 常见错误',
            content: `<ul><li><strong>Sign conventions</strong> - Always define positive direction and stick to it (usually upward or rightward positive)</li><li><strong>Confusing distance and displacement</strong> - Distance is scalar (total path), displacement is vector (change in position)</li><li><strong>Forgetting initial velocity</strong> - $u$ is velocity at $t = 0$, not necessarily zero</li><li><strong>Using SUVAT for non-constant acceleration</strong> - These equations only work when $a$ is constant</li></ul>`
        },
        {
            title: '📝 Worked Examples / 典型例题',
            content: `<p><strong>Example 1:</strong> A car accelerates from rest at $2$ m/s² for $5$ s. Find final velocity and distance traveled.</p><p>Solution: $u = 0, a = 2, t = 5$<br>$v = u + at = 0 + 2(5) = 10$ m/s<br>$s = ut + \frac{1}{2}at^2 = 0 + \frac{1}{2}(2)(25) = 25$ m</p><p><strong>Example 2:</strong> A ball is thrown upward at $20$ m/s. Find maximum height. ($g = 10$ m/s²)</p><p>Solution: At max height, $v = 0$<br>$v^2 = u^2 + 2as$<br>$0 = 400 + 2(-10)s$<br>$s = 20$ m</p><p><strong>Example 3:</strong> From a velocity-time graph, object accelerates at constant $3$ m/s² for $4$ s from rest. Find displacement.</p><p>Solution: Area under graph = $\frac{1}{2} \times 4 \times 12 = 24$ m</p>`
        },
        {
            title: '📺 Learning Resources / 学习资源',
            content: `<p><a href="https://www.youtube.com/watch?v=ZL5xFPpI8cU" target="_blank">YouTube - Kinematics Equations</a></p><p><a href="https://www.bilibili.com/video/BV1b4411e7hN" target="_blank">Bilibili - 运动学基础</a></p>`
        }
    ]
},'physics-dynamics': {
    name: 'Dynamics 动力学',
    subject: 'physics',
    sections: [
        {
            title: '📖 Core Concepts / 核心概念',
            content: `<div class="bg-blue-50"><strong>Newton's Laws (牛顿定律)</strong>:<br>• 1st Law: Object remains at rest or constant velocity unless acted upon by resultant force<br>• 2nd Law: $F = ma$ (Resultant force = mass × acceleration)<br>• 3rd Law: Action and reaction forces are equal and opposite</div><div class="bg-green-50"><strong>Mass and Weight (质量与重量)</strong>:<br>• Mass ($m$): Amount of matter (kg) - scalar, constant everywhere<br>• Weight ($W$): Force due to gravity ($W = mg$) - vector, varies with $g$</div><div class="bg-purple-50"><strong>Momentum (动量)</strong>: $p = mv$ (mass × velocity). Vector quantity in direction of velocity.</div><div class="bg-yellow-50"><strong>Conservation of Momentum (动量守恒)</strong>: Total momentum before collision = Total momentum after collision (in closed system)</div>`
        },
        {
            title: '🔧 Methods / 解题方法',
            content: `<p><strong>Using F = ma</strong></p><p>1. Draw free-body diagram showing all forces</p><p>2. Resolve forces in direction of motion (and perpendicular if needed)</p><p>3. Find resultant force: $F_{net} = \sum F_{forward} - \sum F_{backward}$</p><p>4. Apply $F_{net} = ma$ to find acceleration</p><p><strong>Connected Particles</strong></p><p>• Treat as system: Total force = Total mass × acceleration</p><p>• Or separately: Write equation for each mass and solve simultaneously</p><p><strong>Collision Problems</strong></p><p>• Apply conservation of momentum: $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$</p><p>• For elastic collisions: Kinetic energy also conserved</p><p>• For inelastic collisions: Objects stick together, common final velocity</p>`
        },
        {
            title: '⚠️ Common Mistakes / 常见错误',
            content: `<ul><li><strong>Confusing mass and weight</strong> - Mass is constant (kg), weight depends on gravity (N)</li><li><strong>Forgetting direction in momentum</strong> - Momentum is vector; assign positive direction and use signs consistently</li><li><strong>Missing forces in free-body diagrams</strong> - Always include weight, normal reaction, friction, tension as appropriate</li><li><strong>Sign errors with Newton's 3rd law pairs</strong> - Forces act on DIFFERENT bodies, so don't cancel out when analyzing one object</li></ul>`
        },
        {
            title: '📝 Worked Examples / 典型例题',
            content: `<p><strong>Example 1:</strong> A 5 kg block is pulled by 20 N force on smooth surface. Find acceleration.</p><p>Solution: $F = ma$ → $20 = 5a$ → $a = 4$ m/s²</p><p><strong>Example 2:</strong> Two balls collide: 2 kg moving at 3 m/s hits stationary 3 kg ball. They stick together. Find common velocity.</p><p>Solution: Conservation of momentum:<br>$2(3) + 3(0) = (2+3)v$<br>$6 = 5v$ → $v = 1.2$ m/s</p><p><strong>Example 3:</strong> A 10 kg object on rough surface ($\mu = 0.3$) is pulled by 50 N. Find acceleration. ($g = 10$ m/s²)</p><p>Solution: Friction $= \mu N = 0.3(100) = 30$ N<br>Resultant force $= 50 - 30 = 20$ N<br>$a = \frac{F}{m} = \frac{20}{10} = 2$ m/s²</p>`
        },
        {
            title: '📺 Learning Resources / 学习资源',
            content: `<p><a href="https://www.youtube.com/watch?v=kkfP2Qw3n4c" target="_blank">YouTube - Newton's Laws of Motion</a></p><p><a href="https://www.bilibili.com/video/BV1x4411e7hV" target="_blank">Bilibili - 牛顿运动定律</a></p>`
        }
    ]
},};
