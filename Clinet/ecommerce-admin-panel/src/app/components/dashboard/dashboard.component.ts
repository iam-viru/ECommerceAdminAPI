import { Component } from '@angular/core';
import { NgFor, NgIf, DatePipe, CurrencyPipe, CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgChartsModule  } from 'ng2-charts';
import { ChartOptions, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

import { DashboardLayoutComponent } from '../dashboard-layout/dashboard-layout.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
  CommonModule,
  DashboardLayoutComponent,
  NgFor,
  NgIf,
  NgClass,
  DatePipe,
  CurrencyPipe,
  NgChartsModule // ✅ Correct here
],

  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']  // Create this file or remove the line
})
export class DashboardComponent {
  statsCards = [
    { title: 'Orders', value: 150, icon: 'bi-cart' },
    { title: 'Revenue', value: '$4,300', icon: 'bi-currency-dollar' },
    { title: 'Users', value: 1200, icon: 'bi-people' },
    { title: 'Returns', value: 10, icon: 'bi-arrow-counterclockwise' }
  ];

  revenueChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [1000, 2000, 1500, 3000, 2500],
        label: 'Revenue',
        fill: true,
        tension: 0.5,
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66,165,245,0.4)'
      }
    ]
  };

  revenueChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true
  };

  salesChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Electronics', 'Clothing', 'Books', 'Furniture'],
    datasets: [
      {
        data: [1200, 1900, 800, 1400],
        label: 'Sales',
        backgroundColor: '#66BB6A'
      }
    ]
  };

  salesChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };

  recentOrders = [
    {
      orderId: 'ORD-1001',
      customer: 'Alice',
      date: new Date(),
      totalAmount: 299.99,
      status: 'Completed'
    },
    {
      orderId: 'ORD-1002',
      customer: 'Bob',
      date: new Date(),
      totalAmount: 99.5,
      status: 'Pending'
    },
    {
      orderId: 'ORD-1003',
      customer: 'Charlie',
      date: new Date(),
      totalAmount: 45.0,
      status: 'Cancelled'
    }
  ];
}
