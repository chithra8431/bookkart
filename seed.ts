import { Prisma, PrismaClient } from "@Prisma/client";

const client = new PrismaClient();
const getrating = (): Prisma.ratingsCreateInput[] => [
    {
        rating_id: "0000", 
        user_id: "1234",     
        rating_value:"5", 
        book_name:"Harry potter",    
        book_id: "0000",      
    },
  ];

  [
    {
        rating_id: "0002", 
        user_id: "1689",     
        rating_value:"4.2", 
        book_name:"The Exocist",    
        book_id: "0002",      
    },
  ];
  [
    {
        rating_id: "0003", 
        user_id: "6543",     
        rating_value:"4.8", 
        book_name:"Wings of fire",    
        book_id: "0003"      
    },
  ];
  [
    {
        rating_id: "0004", 
        user_id: "8976",     
        rating_value:"4,1", 
        book_name:"All the light We Cannot See",    
        book_id: "0004"      
    },
  ];
  [
    {
        rating_id: "0005", 
        user_id: "4567",     
        rating_value:"4.3", 
        book_name:"The Wager: A Tale of Shipwreck, Mutiny and Murder",    
        book_id: "0000"      
    },
  ];