/* General Styles */

export default function exportCSS() {
  return `

:root {
  font-family: Verdana;Arial;
  color: #e0e0e0;
}

.stat-title {
  font-size: 14px;
  border-bottom: #222 1px solid;
  font-family: Avenir,lucida grande,tahoma,verdana,arial,sans-serif;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 4px 8px;
}

.stats {
  font-size: 11px;
  text-align: left;
  display: flex;
  width: 100%;
  flex-direction: column;
}

.mb12 {
  margin-bottom: 12px !important;
}

.mt4 {
  margin-top: 4px !important;
}

.mt8 {
  margin-top: 8px !important;
}

.mt12 {
  margin-top: 12px !important;
}

.ml8 {
  margin-left: 8px !important;
}

.clearfix {
  display: block !important;
}

.floatRightHeader {
  text-align: left;
  float: right;
  font-size: 11px;
  font-weight: 400;
  padding-right: 2px;
  color: #abc4ed;
  text-decoration: none;
}

.stat-score {
  font-size: 11px;
  text-align: left;
  width: 100%;
}

.di-t {
  display: table !important;
}

.di-tc {
  display: table-cell;
}

.al {
  text-align: left !important;
}

.w100 {
  width: 100%;
}

.h100 {
  height: 100%;
}

.fw-b {
  font-weight: 700;
}

.ar {
  text-align: right !important;
}

.fs12 {
  font-size: 12px;
}

.pl8 {
  padding-left: 8px;
}

.fn-grey2 {
  color: #a3a3a3 !important;
}

.fw-n {
  font-weight: 400 !important;
}

.pr8 {
  padding-right: 8px;
}

.pt8 {
  padding-top: 8px !important;
}

.stats-graph {
  font-size: 11px;
  text-align: left;
  background-color: #272727;
  border-radius: 4px;
  display: block;
  height: 18px;
  margin: 0 auto;
  overflow: hidden;
  width: 98%;
}

.graph {
  font-size: 11px;
  text-align: left;
  line-height: 1.5em;
  display: inline-block;
  height: 18px;
}

.progress-graph {
  background-color: #272727;
  border: #222 1px solid;
  border-radius: 2px;
  height: 10px;
  width: 100%;
  padding: 1px;
  display: flex;
  align-items: center;
}
  
.text-nowrap {
  white-space: nowrap;
}

.align-center {
    align-items: center;
}

.text-w {
  color: #e0e0e0 !important;
  }

.reading,
.watching {
  background-color: #338543 !important;
}
.f_reading,
.f_watching {
  fill: #338543 !important;
}

.completed {
  background-color: #2D4276 !important;
}

.f_completed {
  fill: #2D4276 !important;
}

.on_hold {
  background-color: #C9A31F !important;
}

.f_on_hold {
  fill: #C9A31F !important;
}

.dropped {
  background-color: #832F30 !important;
}

.f_dropped {
  fill: #832F30 !important;
}

.plan_to_read,
.plan_to_watch {
  background-color: #747474 !important;
}

.f_plan_to_read,
.f_plan_to_watch {
  fill: #747474 !important;
}

.stats-status {
  width: 50%;
  float: left;
}

.stats-status-li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fl-l {
  float: left;
}

.lh10 {
  line-height: 10px;
}

.lh10 {
  line-height: 1em !important;
}
  
.no-deco {
  text-decoration: none;
}

.container {
    padding: 0 4px 0 4px;
    display: flex;
    flex-direction: column;
}

.items-wrapper {
  padding-right: 8px;
}

.status-text {
  font-size: 11px;
  color: #abc4ed;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

.di-ib {
  display: inline-block;
}

.fl-r {
  float: right;
}

.data {
  font-size: 11px;
  text-align: left;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flex {
  display: flex;
}

.flex-d {
  display: flex;
  flex-direction: column;
}

.gap-4 {
  gap: 4px;
}

.gap-8 {
  gap: 8px;
}

.stats-data {
  font-size: 11px;
  text-align: left;
  margin: 0;
  padding: 0;
  width: 140px;
  display: flex;
  flex-direction: column;
}

.stats-status {
  font-size: 11px;
  text-align: left;
  margin: 0;
  padding: 0;
  width: 160px;
  display: flex;
  flex-direction: column;
}

.score-label {
  text-align: right !important;
  font-size: 12px !important;
  font-weight: 700 !important;
  line-height: 1.5em;
  margin: 0;
  padding: 0;
}

.updates {
  font-size: 11px;
  text-align: left;
  display: table-cell;
  padding-left: 0;
  width: 50%;
}

.statistics-updates {
  font-size: 11px;
  text-align: left;
}

.graph-inner {
  line-height: 1.5em;
  border-radius: 2px;
  display: inline-block;
  height: 10px;
}

.text {
  font-size: 11px;
  text-align: left;
  line-height: 1.5em;
  margin: 0;
  padding: 0;
  font-weight: 500;
}

.score-label{
  font-weight: 700;
}
  `;
}
