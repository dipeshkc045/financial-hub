$(document).ready(function() {
    function formatNPR(amount) {
        return '<span class="npr">NPR ' + Number(amount).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + '</span>';
    }
    function setActive(linkId) {
        $('.sidebar nav ul li a').removeClass('active');
        $('#' + linkId).addClass('active');
    }
    $('#home-link').click(function(e) {
        e.preventDefault();
        setActive('home-link');
        $('#content').html('<div class="card"><h2>Welcome to Financial Hub</h2><p>Your one-stop platform for financial insights and account management.</p></div>');
    });

    $('#news-link').click(function(e) {
        e.preventDefault();
        setActive('news-link');
        $('#content').html(`
            <div class="card">
                <h2>Financial News</h2>
                <ul style="padding-left:0; list-style:none;">
                    <li style="margin-bottom:1rem; background:#f8fafc; padding:1rem; border-radius:8px; border-left:4px solid #ffd700;">
                        <strong>Market Update</strong>: Stocks rose 1.2% today amid positive earnings reports.
                    </li>
                    <li style="margin-bottom:1rem; background:#f8fafc; padding:1rem; border-radius:8px; border-left:4px solid #d32f2f;">
                        <strong>Interest Rates</strong>: The central bank held interest rates steady this quarter.
                    </li>
                    <li style="background:#f8fafc; padding:1rem; border-radius:8px; border-left:4px solid #1a237e;">
                        <strong>Tech Sector</strong>: Tech companies lead gains as new innovations are announced.
                    </li>
                </ul>
            </div>
        `);
    });

    $('#accounts-link').click(function(e) {
        e.preventDefault();
        setActive('accounts-link');
        $('#content').html(`
            <div class="card">
                <h2>Your Accounts</h2>
                <ul style="padding-left:0; list-style:none;">
                    <li style="margin-bottom:1rem; background:#f8fafc; padding:1rem; border-radius:8px; border-left:4px solid #ffd700;">
                        <strong>Checking:</strong> ${formatNPR(245075)}
                    </li>
                    <li style="margin-bottom:1rem; background:#f8fafc; padding:1rem; border-radius:8px; border-left:4px solid #d32f2f;">
                        <strong>Savings:</strong> ${formatNPR(1023050)}
                    </li>
                    <li style="background:#f8fafc; padding:1rem; border-radius:8px; border-left:4px solid #1a237e;">
                        <strong>Investment:</strong> ${formatNPR(1500000)}
                    </li>
                </ul>
            </div>
        `);
    });

    $('#dashboard-link').click(function(e) {
        e.preventDefault();
        setActive('dashboard-link');
        $('#content').html(`
            <div class="card">
                <h2>Dashboard</h2>
                <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                    <div style="flex:1; min-width:180px; background:#eaf6d8; border-radius:10px; padding:1rem 1.5rem; margin-bottom:1rem; border-left:4px solid #4d768a;">
                        <h3>Total Balance</h3>
                        <p style="font-size:1.5rem;">${formatNPR(1250000.50)}</p>
                    </div>
                    <div style="flex:1; min-width:180px; background:#eaf6d8; border-radius:10px; padding:1rem 1.5rem; margin-bottom:1rem; border-left:4px solid #8eb6c1;">
                        <h3>Recent Income</h3>
                        <p style="font-size:1.2rem;">${formatNPR(25000)}</p>
                    </div>
                    <div style="flex:1; min-width:180px; background:#eaf6d8; border-radius:10px; padding:1rem 1.5rem; margin-bottom:1rem; border-left:4px solid #213448;">
                        <h3>Recent Expense</h3>
                        <p style="font-size:1.2rem;">${formatNPR(12000)}</p>
                    </div>
                </div>
                <div style="margin:2rem 0;">
                    <canvas id="dashboardChart" height="100"></canvas>
                </div>
                <div style="display:flex; gap:2rem; flex-wrap:wrap;">
                    <div style="flex:1; min-width:180px; background:#fffbe6; border-radius:10px; padding:1rem 1.5rem; margin-bottom:1rem; border-left:4px solid #4d768a;">
                        <h4>Active Clients</h4>
                        <p style="font-size:1.1rem; color:#213448;">12</p>
                    </div>
                    <div style="flex:1; min-width:180px; background:#ffeaea; border-radius:10px; padding:1rem 1.5rem; margin-bottom:1rem; border-left:4px solid #8eb6c1;">
                        <h4>Pending Invoices</h4>
                        <p style="font-size:1.1rem; color:#4d768a;">3</p>
                    </div>
                    <div style="flex:1; min-width:180px; background:#eaf6d8; border-radius:10px; padding:1rem 1.5rem; margin-bottom:1rem; border-left:4px solid #213448;">
                        <h4>Inventory Items</h4>
                        <p style="font-size:1.1rem; color:#213448;">37</p>
                    </div>
                </div>
                <p style="margin-top:2rem;">Welcome back! Here is a quick overview of your financial status and recent activity. Use the sidebar to explore more features.</p>
            </div>
        `);
        // Render Chart.js bar graph
        setTimeout(function() {
            if (window.dashboardChartInstance) {
                window.dashboardChartInstance.destroy();
            }
            var ctx = document.getElementById('dashboardChart').getContext('2d');
            window.dashboardChartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [
                        {
                            label: 'Income',
                            data: [50000, 60000, 55000, 70000, 65000, 80000],
                            backgroundColor: '#f59e42', // vibrant orange
                            borderRadius: 8,
                        },
                        {
                            label: 'Expense',
                            data: [32000, 40000, 35000, 42000, 39000, 45000],
                            backgroundColor: '#6366f1', // vibrant indigo
                            borderRadius: 8,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            labels: { color: '#213448', font: { weight: 'bold' } }
                        },
                        title: {
                            display: true,
                            text: 'Income vs Expense (Last 6 Months)',
                            color: '#213448',
                            font: { size: 18, weight: 'bold' }
                        }
                    },
                    scales: {
                        x: {
                            ticks: { color: '#213448', font: { weight: 'bold' } },
                            grid: { display: false }
                        },
                        y: {
                            ticks: { color: '#213448', font: { weight: 'bold' } },
                            grid: { color: '#eaf6d8' }
                        }
                    }
                }
            });
        }, 100);
    });

    $('#transactions-link').click(function(e) {
        e.preventDefault();
        setActive('transactions-link');
        $('#content').html(`
            <div class="card">
                <h2 style="display:flex;align-items:center;gap:0.5rem;"><span style="font-size:1.5rem;">💸</span> Transactions</h2>
                <div style="margin-bottom:1.5rem; color:#1a237e;">Track all your income and expenses. <span style='color:#d32f2f;'>Tip:</span> Use filters to find specific transactions.</div>
                <div style="display:flex;gap:2rem;flex-wrap:wrap;align-items:center;margin-bottom:1.5rem;">
                    <div style="flex:1;min-width:180px;background:#e3e6f3;border-radius:10px;padding:1rem 1.5rem;border-left:4px solid #ffd700;">
                        <strong>Filter by:</strong> <br>
                        <select style="margin-top:0.5rem;padding:0.4rem 1rem;border-radius:6px;border:1px solid #ffd700;">
                            <option>All</option>
                            <option>Income</option>
                            <option>Expense</option>
                        </select>
                    </div>
                    <div style="flex:2;min-width:220px;background:#f8fafc;border-radius:10px;padding:1rem 1.5rem;border-left:4px solid #d32f2f;">
                        <strong>Quick Add:</strong> <br>
                        <input type="text" placeholder="Description" style="margin-top:0.5rem;padding:0.4rem 0.7rem;border-radius:6px;border:1px solid #d32f2f;">
                        <input type="number" placeholder="Amount (NPR)" style="margin-top:0.5rem;padding:0.4rem 0.7rem;border-radius:6px;border:1px solid #ffd700;">
                        <button style="margin-top:0.5rem;padding:0.4rem 1.2rem;border-radius:6px;background:#ffd700;color:#1a237e;font-weight:600;border:none;cursor:pointer;">Add</button>
                    </div>
                </div>
                <table style="width:100%; border-collapse:collapse;">
                    <thead>
                        <tr style="background:#e3e6f3; color:#1a237e;">
                            <th style="padding:8px; text-align:left;">Date</th>
                            <th style="padding:8px; text-align:left;">Description</th>
                            <th style="padding:8px; text-align:right;">Amount</th>
                            <th style="padding:8px; text-align:center;">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style="padding:8px;">2024-06-01</td><td style="padding:8px;">Payment received</td><td style="padding:8px; text-align:right;">${formatNPR(50000)}</td><td style="padding:8px; text-align:center;"><span style="color:#388e3c;font-weight:600;">Income</span></td></tr>
                        <tr style="background:#f8fafc;"><td style="padding:8px;">2024-06-02</td><td style="padding:8px;">Office supplies</td><td style="padding:8px; text-align:right;">${formatNPR(-7525)}</td><td style="padding:8px; text-align:center;"><span style="color:#d32f2f;font-weight:600;">Expense</span></td></tr>
                        <tr><td style="padding:8px;">2024-06-03</td><td style="padding:8px;">Subscription renewal</td><td style="padding:8px; text-align:right;">${formatNPR(-2000)}</td><td style="padding:8px; text-align:center;"><span style="color:#d32f2f;font-weight:600;">Expense</span></td></tr>
                        <tr style="background:#f8fafc;"><td style="padding:8px;">2024-06-04</td><td style="padding:8px;">Consulting income</td><td style="padding:8px; text-align:right;">${formatNPR(15000)}</td><td style="padding:8px; text-align:center;"><span style="color:#388e3c;font-weight:600;">Income</span></td></tr>
                    </tbody>
                </table>
            </div>
        `);
    });

    $('#reports-link').off('click').click(function(e) {
        e.preventDefault();
        setActive('reports-link');
        $('#content').html(`
            <div class="card">
                <h2 style="display:flex;align-items:center;gap:0.5rem;"><span style="font-size:1.5rem;">📊</span> Reports & Analytics</h2>
                <div style="margin-bottom:1.5rem; color:#1a237e;">Analyze your finances with detailed breakdowns and trends.</div>
                <div style="display:flex;gap:1.5rem;align-items:flex-start;flex-wrap:wrap;">
                    <div style="flex:1;min-width:220px;max-width:260px;">
                        <canvas id="reportsPieChart" height="140" width="140"></canvas>
                    </div>
                    <div style="flex:2;min-width:220px;">
                        <div style="background:#f8fafc;border-radius:10px;padding:1.2rem 1.5rem;margin-bottom:1rem;border-left:4px solid #ffd700;box-shadow:0 2px 8px #ffd70022;">
                            <h4 style="margin:0 0 0.5rem 0;">Summary</h4>
                            <div style="margin-bottom:0.5rem;">Total Income: <span class="npr">NPR 3,75,000.00</span></div>
                            <div style="margin-bottom:0.5rem;">Total Expense: <span class="npr">NPR 2,10,000.00</span></div>
                            <div style="margin-bottom:0.5rem;">Net Savings: <span class="npr">NPR 1,65,000.00</span></div>
                            <div style="margin-top:1rem;font-size:0.95rem;color:#1a237e;">Last updated: 2024-06-10</div>
                        </div>
                    </div>
                </div>
                <div style="margin-top:2rem;">
                    <div id="report-tabs" style="display:flex;gap:1.5rem;margin-bottom:1.2rem;">
                        <button class="report-tab-btn active" data-tab="overview" style="padding:0.5rem 1.5rem;border:none;border-radius:6px 6px 0 0;background:#ffd700;color:#1a237e;font-weight:600;cursor:pointer;">Overview</button>
                        <button class="report-tab-btn" data-tab="monthly" style="padding:0.5rem 1.5rem;border:none;border-radius:6px 6px 0 0;background:#e3e6f3;color:#1a237e;font-weight:600;cursor:pointer;">Monthly</button>
                        <button class="report-tab-btn" data-tab="category" style="padding:0.5rem 1.5rem;border:none;border-radius:6px 6px 0 0;background:#e3e6f3;color:#1a237e;font-weight:600;cursor:pointer;">Category</button>
                    </div>
                    <div id="report-tab-content">
                        <!-- Overview Tab -->
                        <div class="report-tab-pane" data-tab="overview" style="display:block;">
                            <table style="width:100%;border-collapse:collapse;">
                                <thead>
                                    <tr style="background:#e3e6f3;color:#1a237e;">
                                        <th style="padding:8px;text-align:left;">Month</th>
                                        <th style="padding:8px;text-align:right;">Income</th>
                                        <th style="padding:8px;text-align:right;">Expense</th>
                                        <th style="padding:8px;text-align:right;">Net</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td style="padding:8px;">January</td><td style="padding:8px;text-align:right;">${formatNPR(50000)}</td><td style="padding:8px;text-align:right;">${formatNPR(32000)}</td><td style="padding:8px;text-align:right;">${formatNPR(18000)}</td></tr>
                                    <tr style="background:#f8fafc;"><td style="padding:8px;">February</td><td style="padding:8px;text-align:right;">${formatNPR(60000)}</td><td style="padding:8px;text-align:right;">${formatNPR(40000)}</td><td style="padding:8px;text-align:right;">${formatNPR(20000)}</td></tr>
                                    <tr><td style="padding:8px;">March</td><td style="padding:8px;text-align:right;">${formatNPR(55000)}</td><td style="padding:8px;text-align:right;">${formatNPR(35000)}</td><td style="padding:8px;text-align:right;">${formatNPR(20000)}</td></tr>
                                    <tr style="background:#f8fafc;"><td style="padding:8px;">April</td><td style="padding:8px;text-align:right;">${formatNPR(70000)}</td><td style="padding:8px;text-align:right;">${formatNPR(42000)}</td><td style="padding:8px;text-align:right;">${formatNPR(28000)}</td></tr>
                                    <tr><td style="padding:8px;">May</td><td style="padding:8px;text-align:right;">${formatNPR(65000)}</td><td style="padding:8px;text-align:right;">${formatNPR(39000)}</td><td style="padding:8px;text-align:right;">${formatNPR(26000)}</td></tr>
                                    <tr style="background:#f8fafc;"><td style="padding:8px;">June</td><td style="padding:8px;text-align:right;">${formatNPR(80000)}</td><td style="padding:8px;text-align:right;">${formatNPR(45000)}</td><td style="padding:8px;text-align:right;">${formatNPR(35000)}</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- Monthly Tab -->
                        <div class="report-tab-pane" data-tab="monthly" style="display:none;">
                            <div style="max-width:480px;margin:0 auto 1.5rem auto;">
                                <canvas id="reportsBarChart" height="120"></canvas>
                            </div>
                            <div style="text-align:center;color:#1a237e;font-size:1rem;">Monthly Income & Expense Trend</div>
                        </div>
                        <!-- Category Tab -->
                        <div class="report-tab-pane" data-tab="category" style="display:none;">
                            <table style="width:100%;border-collapse:collapse;">
                                <thead>
                                    <tr style="background:#e3e6f3;color:#1a237e;">
                                        <th style="padding:8px;text-align:left;">Category</th>
                                        <th style="padding:8px;text-align:right;">Income</th>
                                        <th style="padding:8px;text-align:right;">Expense</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td style="padding:8px;">Salary</td><td style="padding:8px;text-align:right;">${formatNPR(200000)}</td><td style="padding:8px;text-align:right;">-</td></tr>
                                    <tr style="background:#f8fafc;"><td style="padding:8px;">Consulting</td><td style="padding:8px;text-align:right;">${formatNPR(100000)}</td><td style="padding:8px;text-align:right;">-</td></tr>
                                    <tr><td style="padding:8px;">Sales</td><td style="padding:8px;text-align:right;">${formatNPR(75000)}</td><td style="padding:8px;text-align:right;">-</td></tr>
                                    <tr style="background:#f8fafc;"><td style="padding:8px;">Office Supplies</td><td style="padding:8px;text-align:right;">-</td><td style="padding:8px;text-align:right;">${formatNPR(25000)}</td></tr>
                                    <tr><td style="padding:8px;">Utilities</td><td style="padding:8px;text-align:right;">-</td><td style="padding:8px;text-align:right;">${formatNPR(30000)}</td></tr>
                                    <tr style="background:#f8fafc;"><td style="padding:8px;">Travel</td><td style="padding:8px;text-align:right;">-</td><td style="padding:8px;text-align:right;">${formatNPR(20000)}</td></tr>
                                    <tr><td style="padding:8px;">Other</td><td style="padding:8px;text-align:right;">-</td><td style="padding:8px;text-align:right;">${formatNPR(35000)}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `);
        setTimeout(function() {
            if (window.reportsPieChartInstance) window.reportsPieChartInstance.destroy();
            var ctx = document.getElementById('reportsPieChart').getContext('2d');
            window.reportsPieChartInstance = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Income', 'Expense'],
                    datasets: [{
                        data: [375000, 210000],
                        backgroundColor: ['#a64dff', '#6a0dad'],
                        borderColor: ['#fff', '#fff'],
                        borderWidth: 2
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: true,
                            labels: { color: '#4b0082', font: { weight: 'bold' } }
                        },
                        title: {
                            display: false
                        }
                    }
                }
            });
            // Bar chart for monthly tab
            if (window.reportsBarChartInstance) window.reportsBarChartInstance.destroy();
            var barctx = document.getElementById('reportsBarChart');
            if (barctx) {
                barctx = barctx.getContext('2d');
                window.reportsBarChartInstance = new Chart(barctx, {
                    type: 'bar',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [
                            {
                                label: 'Income',
                                data: [50000, 60000, 55000, 70000, 65000, 80000],
                                backgroundColor: '#a64dff',
                                borderRadius: 8,
                            },
                            {
                                label: 'Expense',
                                data: [32000, 40000, 35000, 42000, 39000, 45000],
                                backgroundColor: '#6a0dad',
                                borderRadius: 8,
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: true,
                                labels: { color: '#4b0082', font: { weight: 'bold' } }
                            },
                            title: {
                                display: false
                            }
                        },
                        scales: {
                            x: {
                                ticks: { color: '#4b0082', font: { weight: 'bold' } },
                                grid: { display: false }
                            },
                            y: {
                                ticks: { color: '#4b0082', font: { weight: 'bold' } },
                                grid: { color: '#e6ccff' }
                            }
                        }
                    }
                });
            }
        }, 100);
        // Tab switching logic
        $('#report-tabs').on('click', '.report-tab-btn', function() {
            var tab = $(this).data('tab');
            $('.report-tab-btn').removeClass('active').css({background:'#e3e6f3',color:'#1a237e'});
            $(this).addClass('active').css({background:'#ffd700',color:'#1a237e'});
            $('.report-tab-pane').hide();
            $('.report-tab-pane[data-tab="'+tab+'"]').show();
        });
    });

    $('#invoices-link').off('click').click(function(e) {
        e.preventDefault();
        setActive('invoices-link');
        $('#content').html(`
            <div class="card">
                <h2 style="display:flex;align-items:center;gap:0.5rem;"><span style="font-size:1.5rem;">🧾</span> Invoices</h2>
                <div style="margin-bottom:1.5rem; color:#4d768a;">Manage all your invoices. <span style='color:#213448;'>Tip:</span> Click on an invoice to view details.</div>
                <table style="width:100%; border-collapse:collapse;">
                    <thead>
                        <tr style="background:#8eb6c1; color:#213448;">
                            <th style="padding:8px; text-align:left;">Invoice #</th>
                            <th style="padding:8px; text-align:left;">Client</th>
                            <th style="padding:8px; text-align:right;">Amount</th>
                            <th style="padding:8px; text-align:center;">Due Date</th>
                            <th style="padding:8px; text-align:center;">Status</th>
                            <th style="padding:8px; text-align:center;">Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style="padding:8px;">101</td><td style="padding:8px;">Alice Smith</td><td style="padding:8px; text-align:right;">${formatNPR(120000)}</td><td style="padding:8px; text-align:center;">2024-06-15</td><td style="padding:8px; text-align:center;"><span class="success" style="font-weight:600;">Paid</span></td><td style="padding:8px; text-align:center;">Bank Transfer</td></tr>
                        <tr style="background:#eaf6d8;"><td style="padding:8px;">102</td><td style="padding:8px;">Bob Johnson</td><td style="padding:8px; text-align:right;">${formatNPR(85000)}</td><td style="padding:8px; text-align:center;">2024-06-20</td><td style="padding:8px; text-align:center;"><span class="danger" style="font-weight:600;">Unpaid</span></td><td style="padding:8px; text-align:center;">Cash</td></tr>
                        <tr><td style="padding:8px;">103</td><td style="padding:8px;">Carol Lee</td><td style="padding:8px; text-align:right;">${formatNPR(43000)}</td><td style="padding:8px; text-align:center;">2024-06-10</td><td style="padding:8px; text-align:center;"><span class="warning" style="font-weight:600;">Overdue</span></td><td style="padding:8px; text-align:center;">Credit Card</td></tr>
                        <tr style="background:#eaf6d8;"><td style="padding:8px;">104</td><td style="padding:8px;">David Kim</td><td style="padding:8px; text-align:right;">${formatNPR(67000)}</td><td style="padding:8px; text-align:center;">2024-06-18</td><td style="padding:8px; text-align:center;"><span class="success" style="font-weight:600;">Paid</span></td><td style="padding:8px; text-align:center;">Bank Transfer</td></tr>
                        <tr><td style="padding:8px;">105</td><td style="padding:8px;">Emma Watson</td><td style="padding:8px; text-align:right;">${formatNPR(99000)}</td><td style="padding:8px; text-align:center;">2024-06-22</td><td style="padding:8px; text-align:center;"><span class="danger" style="font-weight:600;">Unpaid</span></td><td style="padding:8px; text-align:center;">UPI</td></tr>
                        <tr style="background:#eaf6d8;"><td style="padding:8px;">106</td><td style="padding:8px;">Fiona Green</td><td style="padding:8px; text-align:right;">${formatNPR(54000)}</td><td style="padding:8px; text-align:center;">2024-06-12</td><td style="padding:8px; text-align:center;"><span class="warning" style="font-weight:600;">Overdue</span></td><td style="padding:8px; text-align:center;">Cash</td></tr>
                    </tbody>
                </table>
                <div style="margin-top:2rem;">
                    <button style="padding:0.7rem 2rem;border-radius:6px;background:#4d768a;color:#fff;font-weight:600;border:none;cursor:pointer;">+ New Invoice</button>
                </div>
            </div>
        `);
    });

    $('#clients-link').click(function(e) {
        e.preventDefault();
        setActive('clients-link');
        $('#content').html(`
            <div class="card">
                <h2 style="display:flex;align-items:center;gap:0.5rem;"><span style="font-size:1.5rem;">👥</span> Clients</h2>
                <div style="margin-bottom:1.5rem; color:#1a237e;">Manage your clients and their contact information.</div>
                <table style="width:100%; border-collapse:collapse;">
                    <thead>
                        <tr style="background:#e3e6f3; color:#1a237e;">
                            <th style="padding:8px; text-align:left;">Name</th>
                            <th style="padding:8px; text-align:left;">Email</th>
                            <th style="padding:8px; text-align:left;">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style="padding:8px;">Alice Smith</td><td style="padding:8px;">alice@example.com</td><td style="padding:8px;">+977-9800000001</td></tr>
                        <tr style="background:#f8fafc;"><td style="padding:8px;">Bob Johnson</td><td style="padding:8px;">bob@example.com</td><td style="padding:8px;">+977-9800000002</td></tr>
                        <tr><td style="padding:8px;">Carol Lee</td><td style="padding:8px;">carol@example.com</td><td style="padding:8px;">+977-9800000003</td></tr>
                    </tbody>
                </table>
                <div style="margin-top:2rem;">
                    <button style="padding:0.7rem 2rem;border-radius:6px;background:#ffd700;color:#1a237e;font-weight:600;border:none;cursor:pointer;">+ Add Client</button>
                </div>
            </div>
        `);
    });

    $('#inventory-link').off('click').click(function(e) {
        e.preventDefault();
        setActive('inventory-link');
        $('#content').html(`
            <div class="card">
                <h2 style="display:flex;align-items:center;gap:0.5rem;"><span style="font-size:1.5rem;">📦</span> Inventory</h2>
                <div style="margin-bottom:1.5rem; color:#4d768a;">Track your inventory items, stock levels, and suppliers.</div>
                <table style="width:100%; border-collapse:collapse;">
                    <thead>
                        <tr style="background:#8eb6c1; color:#213448;">
                            <th style="padding:8px; text-align:left;">Item</th>
                            <th style="padding:8px; text-align:right;">Quantity</th>
                            <th style="padding:8px; text-align:left;">Category</th>
                            <th style="padding:8px; text-align:left;">SKU</th>
                            <th style="padding:8px; text-align:left;">Supplier</th>
                            <th style="padding:8px; text-align:center;">Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style="padding:8px;">Laptop</td><td style="padding:8px; text-align:right;">12</td><td style="padding:8px;">Electronics</td><td style="padding:8px;">LTP-001</td><td style="padding:8px;">TechNepal</td><td style="padding:8px; text-align:center;">2024-06-10</td></tr>
                        <tr style="background:#eaf6d8;"><td style="padding:8px;">Printer</td><td style="padding:8px; text-align:right;">5</td><td style="padding:8px;">Office</td><td style="padding:8px;">PRT-002</td><td style="padding:8px;">PrintWorld</td><td style="padding:8px; text-align:center;">2024-06-09</td></tr>
                        <tr><td style="padding:8px;">Desk Chair</td><td style="padding:8px; text-align:right;">20</td><td style="padding:8px;">Furniture</td><td style="padding:8px;">CHR-003</td><td style="padding:8px;">FurniMart</td><td style="padding:8px; text-align:center;">2024-06-08</td></tr>
                        <tr style="background:#eaf6d8;"><td style="padding:8px;">Monitor</td><td style="padding:8px; text-align:right;">8</td><td style="padding:8px;">Electronics</td><td style="padding:8px;">MON-004</td><td style="padding:8px;">TechNepal</td><td style="padding:8px; text-align:center;">2024-06-07</td></tr>
                        <tr><td style="padding:8px;">Whiteboard</td><td style="padding:8px; text-align:right;">3</td><td style="padding:8px;">Office</td><td style="padding:8px;">WBD-005</td><td style="padding:8px;">OfficeSupplies</td><td style="padding:8px; text-align:center;">2024-06-06</td></tr>
                        <tr style="background:#eaf6d8;"><td style="padding:8px;">Projector</td><td style="padding:8px; text-align:right;">2</td><td style="padding:8px;">Electronics</td><td style="padding:8px;">PRJ-006</td><td style="padding:8px;">AVNepal</td><td style="padding:8px; text-align:center;">2024-06-05</td></tr>
                        <tr><td style="padding:8px;">Filing Cabinet</td><td style="padding:8px; text-align:right;">6</td><td style="padding:8px;">Furniture</td><td style="padding:8px;">CAB-007</td><td style="padding:8px;">FurniMart</td><td style="padding:8px; text-align:center;">2024-06-04</td></tr>
                        <tr style="background:#eaf6d8;"><td style="padding:8px;">Router</td><td style="padding:8px; text-align:right;">10</td><td style="padding:8px;">Electronics</td><td style="padding:8px;">RTR-008</td><td style="padding:8px;">NetConnect</td><td style="padding:8px; text-align:center;">2024-06-03</td></tr>
                    </tbody>
                    <tfoot>
                        <tr style="background:#8eb6c1; color:#213448; font-weight:600;">
                            <td style="padding:8px;">Total</td>
                            <td style="padding:8px; text-align:right;">66</td>
                            <td colspan="4"></td>
                        </tr>
                    </tfoot>
                </table>
                <div style="margin-top:2rem;">
                    <button style="padding:0.7rem 2rem;border-radius:6px;background:#4d768a;color:#fff;font-weight:600;border:none;cursor:pointer;">+ Add Item</button>
                </div>
            </div>
        `);
    });

    $('#settings-link').off('click').click(function(e) {
        e.preventDefault();
        setActive('settings-link');
        $('#content').html(`
            <div class="card">
                <h2 style="display:flex;align-items:center;gap:0.5rem;"><span style="font-size:1.5rem;">⚙️</span> Settings</h2>
                <div style="margin-bottom:1.5rem; color:#4d768a;">Manage your account, preferences, and app settings.</div>
                <div style="display:flex;gap:2rem;flex-wrap:wrap;align-items:flex-start;">
                    <div style="flex:1;min-width:220px;background:#eaf6d8;border-radius:10px;padding:1.2rem 1.5rem;margin-bottom:1rem;border-left:4px solid #4d768a;box-shadow:0 2px 8px #21344811;">
                        <h4 style="margin:0 0 0.5rem 0;">Profile</h4>
                        <div style="margin-bottom:0.5rem;">Username: <span style="color:#213448;">nepaluser</span></div>
                        <div style="margin-bottom:0.5rem;">Email: <span style="color:#213448;">nepaluser@example.com</span></div>
                        <div style="margin-bottom:0.5rem;">Language: <span style="color:#213448;">English (Nepal)</span></div>
                    </div>
                    <div style="flex:1;min-width:220px;background:#8eb6c1;border-radius:10px;padding:1.2rem 1.5rem;margin-bottom:1rem;border-left:4px solid #4d768a;box-shadow:0 2px 8px #21344811;">
                        <h4 style="margin:0 0 0.5rem 0;">Preferences</h4>
                        <div style="margin-bottom:0.5rem;">Currency: <span class="npr">NPR (Nepali Rupees)</span></div>
                        <div style="margin-bottom:0.5rem;">Theme: <span style="color:#213448;">Modern Blue/Green</span></div>
                        <div style="margin-bottom:0.5rem;">Notifications: <span style="color:#12b76a;">Enabled</span></div>
                    </div>
                </div>
                <!-- Security Section -->
                <div style="margin-bottom:2rem;background:#eaf6d8;border-radius:10px;padding:1.2rem 1.5rem;border-left:4px solid #4d768a;box-shadow:0 2px 8px #21344811;">
                    <h4 style="margin:0 0 0.5rem 0;">Security</h4>
                    <div style="margin-bottom:0.5rem;">2FA: <span style="color:#12b76a;font-weight:600;">Enabled</span></div>
                    <div style="margin-bottom:0.5rem;">Password Last Changed: <span style="color:#213448;">2024-05-20</span></div>
                </div>
                <!-- Notification Preferences -->
                <div style="margin-bottom:2rem;background:#8eb6c1;border-radius:10px;padding:1.2rem 1.5rem;border-left:4px solid #4d768a;box-shadow:0 2px 8px #21344811;">
                    <h4 style="margin:0 0 0.5rem 0;">Notification Preferences</h4>
                    <div style="margin-bottom:0.5rem;">Email: <span style="color:#12b76a;">On</span></div>
                    <div style="margin-bottom:0.5rem;">SMS: <span style="color:#f79009;">Off</span></div>
                    <div style="margin-bottom:0.5rem;">Push: <span style="color:#12b76a;">On</span></div>
                </div>
                <!-- Billing Info -->
                <div style="background:#eaf6d8;border-radius:10px;padding:1.2rem 1.5rem;border-left:4px solid #4d768a;box-shadow:0 2px 8px #21344811;">
                    <h4 style="margin:0 0 0.5rem 0;">Billing Info</h4>
                    <div style="margin-bottom:0.5rem;">Plan: <span style="color:#213448;">Pro</span></div>
                    <div style="margin-bottom:0.5rem;">Renewal Date: <span style="color:#213448;">2024-12-01</span></div>
                    <div style="margin-bottom:0.5rem;">Payment Method: <span style="color:#213448;">Visa **** 1234</span></div>
                </div>
            </div>
        `);
    });

    // Default to home
    setActive('home-link');
}); 