export type TaskStatus = 'Backlog'|'Planned'|'In Progress'|'Waiting'|'Done';
export interface Task { id:string; title:string; description:string; status:TaskStatus; priority:'Low'|'Medium'|'High'; dueDate:string; category:string }
export interface Campaign { id:string; name:string; objective:string; startDate:string; endDate:string; status:string; target:string; performance:string }
export interface Event { id:string; name:string; date:string; venue:string; status:string; campaignStatus:string; notes:string }
export interface ContentItem { id:string; title:string; platform:string; contentType:string; plannedPublishDate:string; status:string; campaign:string; assetReference:string }
export interface AnalyticsSnapshot { period:string; reach:number; views:number; engagement:number; followerGrowth:number; profileVisits:number; clicks:number; conversions:number }
export interface AIJob { id:string; type:'marketing_analysis'|'content_plan'|'campaign_review'|'event_review'|'community_analysis'; status:string }
export interface Integration { id:string; name:string; description:string; status:'Not connected'|'Connected' }
