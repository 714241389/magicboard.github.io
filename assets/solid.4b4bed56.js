var d=Object.defineProperty,m=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var i=(s,e,r)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,n=(s,e)=>{for(var r in e||(e={}))f.call(e,r)&&i(s,r,e[r]);if(a)for(var r of a(e))h.call(e,r)&&i(s,r,e[r]);return s},u=(s,e)=>m(s,c(e));import{a as l}from"./getDeviceId.e8f3946a.js";import{t as p}from"./index.56433eb2.js";class w{constructor(e){this.supabase=e}async getAllRooms(){const e=this.userOrError(),r=await this.supabase.from("rooms").select("id, owner, name, created_at").eq("owner",e.id);if(r.error)throw r.error;return r.data}async findRoomById(e){const r=await this.supabase.rpc("find_room_by_id",{target_id:e});if(r.error)throw r.error;return r.data&&r.data.id?r.data:null}userOrError(){const e=this.supabase.auth.user();if(e)return e;throw new Error("login required")}async joinRoomById(e){const r=await this.findRoomById(e);if(r){const o=this.userOrError(),t=await this.supabase.from("room_joint").insert({room_id:r.id,user_id:o.id});if(t.error){if(t.error.code==="23505")return r;throw t.error}return null}else return null}async isJoinedRoomById(e){const r=this.userOrError(),o=await this.supabase.from("room_joint").select("created_at").eq("room_id",e).eq("user_id",r.id);if(o.error)throw o.error;return o.data.length>0}async sendMessageTo(e,r){const o=await this.supabase.from("room_message_queue").insert({room:e,message:r});if(o.error)throw o.error}async openRoomMessageQueueChannel(e){const r=await this.findRoomById(e);if(!r)throw Error("Room not found");return this.supabase.channel(`realtime:public:room_message_queue:room=eq.${r.id}`,{selfBroadcast:!1})}async createRoom(e){const r=this.userOrError(),{data:o,error:t}=await this.supabase.from("rooms").insert({name:e,owner:r.id});if(t)throw t;return o[0]}getUserDeviceId(){return l(this.userOrError().id)}async getParticipants(e){const{data:r,error:o}=await this.supabase.from("room_joint").select("user_id").eq("room_id",e);if(o)throw o;return r}async getRoomOpts(e){const{data:r,error:o}=await this.supabase.from("room_opts").select("size_x, size_y").eq("room_id",e).limit(1);if(o)throw o;return typeof r[0]=="object"?r[0]:{}}async setRoomOpts(e,r){const{error:o}=await this.supabase.from("room_opts").upsert(u(n({},r),{room_id:e})).eq("room_id",e);if(o)throw o}}const q=()=>{const s=p();return new w(s)};export{q as u};
//# sourceMappingURL=solid.4b4bed56.js.map