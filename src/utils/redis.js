import redisclient from "ioredis"


const RedisClient=new redisclient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
})

RedisClient.on("connect",()=>{
    console.log("Redis connected")
})

RedisClient.on("error",(e)=>{
    console.log("Redis error",e)  
})

export default RedisClient