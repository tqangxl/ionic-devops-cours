/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   09-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 09-04-2017
 */

 export interface INotifItem{
  id: number,
  title?: string,
  text: string,
  firstAt?: string, // monday_9_am,
  every?: string, // "week",
  sound?: string, // Default -> isAndroid? 'file://sound.mp3': 'file://beep.caf',
  icon?: string, // "http://icons.com/?cal_id=1"
  data: { secret: string }
 }
