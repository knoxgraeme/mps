# scrape.js

```js
const axios = require('axios');

async function getSource(search) {
    console.log(`Fetching source for search:`, search);
    console.log('API Key:', process.env.scrapingbee_api_key);

    try {
        const url = `https://www.facebook.com/marketplace/${search.city}/search/?query=${encodeURIComponent(search.query)}&maxPrice=${encodeURIComponent(search.maxPrice)}`;

        console.log('Constructed URL:', url);

        const response = await axios.get('https://app.scrapingbee.com/api/v1', {
            params: {
                'api_key': process.env.scrapingbee_api_key,
                'url': url,
                'render_js': 'true',
                'premium_proxy': 'true'
            }
        });
        console.log(`ScrapingBee API response status: ${response.status}`);
        return response;
    } catch (error) {
        console.error('Error in getSource:', error.message);
        throw error;
    }
}

module.exports = { getSource };

```

# pastItems.json

```json
{"pastItems":[{"id":"528415796235039","link":"https://www.facebook.com/marketplace/item/528415796235039","title":"bicycle /ladies /retro","price":"A$85","image":"https://scontent-mia3-1.xx.fbcdn.net/v/t45.5328-4/457089731_1299096261066467_3627014669760006237_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=tWx7q0OW3EIQ7kNvgFAnFEd&_nc_ht=scontent-mia3-1.xx&oh=00_AYDIsZwb7FMy3ox4MR1a3dV79dpZi90qFJ8jyL20oagPdQ&oe=66D70F0D"},{"id":"1544303852824977","link":"https://www.facebook.com/marketplace/item/1544303852824977","title":"Bicycle","price":"A$180","image":"https://scontent-mia3-1.xx.fbcdn.net/v/t45.5328-4/457502838_1612865572973535_2868433982739875043_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=CXs5L41YcFkQ7kNvgGdm5dH&_nc_ht=scontent-mia3-1.xx&oh=00_AYDfzCR9Oanb66pI_Dpc3SvclcB02s_TlL_F5hOJlhDKhQ&oe=66D6FD4F"},{"id":"1235655927458893","link":"https://www.facebook.com/marketplace/item/1235655927458893","title":"Women's Vintage Bicycle - White","price":"A$75","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457569055_478124495121239_1247721564595446514_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=zbk3PtBINlkQ7kNvgGLDRN0&_nc_ht=scontent-mia3-2.xx&oh=00_AYBdsx4-OIanbn4cQq-chljXHFk9QfPwmDY86ojx3tgZPQ&oe=66D70212"},{"id":"2062131214184648","link":"https://www.facebook.com/marketplace/item/2062131214184648","title":"Bicycle trailer","price":"A$79","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457087512_1252196262614936_5322047818442949659_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=hmqRuT7ukPAQ7kNvgHqsdJ0&_nc_ht=scontent-mia3-2.xx&oh=00_AYCZCde0LxxfYTB1cfenoVBJ-kijDpDbCQeNd8vZ9WlF5g&oe=66D70F0D"},{"id":"976065870940740","link":"https://www.facebook.com/marketplace/item/976065870940740","title":"Chapelli Commuter Bicycle","price":"A$100","image":"https://scontent-mia3-1.xx.fbcdn.net/v/t45.5328-4/457334943_787565616648709_1815438026931291365_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=tdeSjDXc6WQQ7kNvgFcLewG&_nc_ht=scontent-mia3-1.xx&oh=00_AYDSh3l3EsH7eoZh-D_Zrj6CBnvxxnCH2PKDd4YkRQijkg&oe=66D6F64A"},{"id":"1017382733354367","link":"https://www.facebook.com/marketplace/item/1017382733354367","title":"Good Bicycle","price":"A$60","image":"https://scontent-mia3-1.xx.fbcdn.net/v/t45.5328-4/457457803_3662672030649206_5788731270677063423_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=Wo88ZIO6bS4Q7kNvgHDX2pq&_nc_ht=scontent-mia3-1.xx&oh=00_AYBnw7bgoCypW1sSrrvzl9jp9trwypGFiCWLtH6lvxwGxg&oe=66D70130"},{"id":"1659161378213021","link":"https://www.facebook.com/marketplace/item/1659161378213021","title":"Used electric bicycle","price":"A$250","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457460798_3776846095921807_5565883585096611972_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=1I6js2Kbe6wQ7kNvgHtQN6N&_nc_ht=scontent-mia3-2.xx&oh=00_AYBlyNB1sUa-F3WimPFoz6KxKVCRjzghUjiiTU51E8vRHw&oe=66D71372"},{"id":"1229542011802142","link":"https://www.facebook.com/marketplace/item/1229542011802142","title":"Bicycle","price":"A$50","image":"https://scontent-mia3-1.xx.fbcdn.net/v/t45.5328-4/457332285_1085970439807666_6494333130549353610_n.jpg?stp=c0.159.261.261a_dst-jpg_p261x260&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=YZjzTt1VjccQ7kNvgHLAkfH&_nc_ht=scontent-mia3-1.xx&oh=00_AYCalettxMuUFUVPAEb9WYnu1-T1pvmie8FPBwz4JdLEBw&oe=66D6F89A"},{"id":"1497385101147273","link":"https://www.facebook.com/marketplace/item/1497385101147273","title":"Vintage Holland Cruiser Bike","price":"A$50","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457019139_1034868004484918_8687252812557356822_n.jpg?stp=c42.0.260.260a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=pNsGAUOg6Z4Q7kNvgHKFT0V&_nc_ht=scontent-mia3-2.xx&oh=00_AYAy1Ji0vkA2v1UDxJqe0AC9tRA68ft80C7FbjXQGLLF1A&oe=66D71179"},{"id":"1887785408397022","link":"https://www.facebook.com/marketplace/item/1887785408397022","title":"Bicycle","price":"A$30","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457409316_532298589144921_6732519351999471078_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=8I0LsM42TKUQ7kNvgFn257a&_nc_ht=scontent-mia3-2.xx&oh=00_AYCg72iPSYuGGs00_JrzyrVVmbajie1BQLHmPUxiwdMg7Q&oe=66D703DA"},{"id":"1203170197629056","link":"https://www.facebook.com/marketplace/item/1203170197629056","title":"Vintage bicycle Gazelle for project or spares","price":"A$50","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457419705_1918003268682995_3466665656538657865_n.jpg?stp=c101.0.260.260a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=py9sD_SiUHsQ7kNvgGM7aOf&_nc_ht=scontent-mia3-2.xx&oh=00_AYBys7oP9Ox3YSWoR_Q7Vr9eVAbBkGhB2cDT6j9Poxwr4Q&oe=66D7137D"},{"id":"527894826382926","link":"https://www.facebook.com/marketplace/item/527894826382926","title":"Bicycle","price":"A$30","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457096505_905748454943567_231387661312239319_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=9SWjS6zNT1sQ7kNvgHACzMC&_nc_ht=scontent-mia3-2.xx&oh=00_AYBSvnDtQQb_DSjsP27-nQNKSzLPpUauLfrxb2kNgVqA7g&oe=66D70BD8"},{"id":"429526050236627","link":"https://www.facebook.com/marketplace/item/429526050236627","title":"Women's bike XDS \ns/m size Pickup North Curl Curl","price":"A$130","image":"https://scontent-mia3-1.xx.fbcdn.net/v/t45.5328-4/457460889_2826149467541918_8304892581363095179_n.jpg?stp=c100.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=iabvxoa-IvUQ7kNvgGcs-iU&_nc_ht=scontent-mia3-1.xx&oh=00_AYAi8UU6ZRYZRwa2u8H9VbosYXoPFaGJzlUQZQLS9RCiDQ&oe=66D7075B"},{"id":"528278703212910","link":"https://www.facebook.com/marketplace/item/528278703212910","title":"Selling a GIANT Bicycle.","price":"A$100","image":"https://scontent-mia3-1.xx.fbcdn.net/v/t45.5328-4/457332227_1192528338690307_7027977086747660425_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=_PU_eQ7tI_sQ7kNvgE2k5GA&_nc_ht=scontent-mia3-1.xx&oh=00_AYCZpvbOpRZ2Hjcvuax8e2CYqoA7iDH3DbypOpjMCsEXyQ&oe=66D71165"},{"id":"831134482335023","link":"https://www.facebook.com/marketplace/item/831134482335023","title":"Bike","price":"A$70","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457370331_874037934610655_7789206141913382705_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=DarYwru0xJsQ7kNvgEoilNa&_nc_ht=scontent-mia3-2.xx&oh=00_AYDnkQVF5T2QDa42N8O8OdCKGdCzCkb6whEbok-YWBZoBg&oe=66D6EF57"},{"id":"1024817552360433","link":"https://www.facebook.com/marketplace/item/1024817552360433","title":"Repco road bike","price":"A$95","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457278448_591369663217325_504795930536183021_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=15TsoD477A0Q7kNvgFIeo4E&_nc_ht=scontent-mia3-2.xx&oh=00_AYBtyDeMcwB7xLU9fqqFYv7XJj1axCn3bR7GauH2iKq0UQ&oe=66D6F496"},{"id":"1044909997284388","link":"https://www.facebook.com/marketplace/item/1044909997284388","title":"REID cruiser bicycle with basket bike","price":"A$250","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457210947_3654144171516289_899823468156401925_n.jpg?stp=c101.0.260.260a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=h-YES0FMno0Q7kNvgGOJj-v&_nc_ht=scontent-mia3-2.xx&oh=00_AYCiFZYyGQI8FUsmO6G3SOxUowWrLJWANfCZLfCtzcnruQ&oe=66D70C81"},{"id":"1020079539660012","link":"https://www.facebook.com/marketplace/item/1020079539660012","title":"Bicycle for toddlers","price":"A$350","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457339642_523803653663135_435669763107581601_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=Q3_77QuCifMQ7kNvgH0gIF2&_nc_ht=scontent-mia3-2.xx&oh=00_AYCqPCB0yjfsVYavDTdvE744oeqgsBXVXA7N4nZxCViPFg&oe=66D71E63"},{"id":"2397275610458684","link":"https://www.facebook.com/marketplace/item/2397275610458684","title":"Zephyr Boardwalk Cruiser Bicycle in good condition - frame 17 in","price":"A$140","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457340601_816254367388120_5251448843052106312_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=-gOSINEXIqQQ7kNvgGil4B4&_nc_ht=scontent-mia3-2.xx&oh=00_AYB1mqGlzHQv687rHhVgVMxIaHJ-fe6ZRgLVzVkvEAP5Ug&oe=66D7124B"},{"id":"1241610660526494","link":"https://www.facebook.com/marketplace/item/1241610660526494","title":"XDS Hollywood Retro 8 sp Alloy Turquoise Blue Bicycle RRP$599","price":"A$150","image":"https://scontent-mia3-1.xx.fbcdn.net/v/t45.5328-4/457096622_873579584832151_2117909573059009889_n.jpg?stp=c54.0.260.260a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=j-gRd1Dya4YQ7kNvgEL0dUG&_nc_ht=scontent-mia3-1.xx&oh=00_AYCzGT-P76R4HMmXNwdFTpSl5bVyIRYk-x0IksCYIuuedQ&oe=66D6F667"},{"id":"396768989782598","link":"https://www.facebook.com/marketplace/item/396768989782598","title":"Penny Farthing Bicycle Wall Sculpture","price":"A$50","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/456938337_507376735213215_2298220530125376695_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=0p7V76M5vuAQ7kNvgGIkafY&_nc_ht=scontent-mia3-2.xx&oh=00_AYBVAQVltokFYfGJS681jWF-OVVGOv5hDAkcfvzb6O3dKg&oe=66D71060"},{"id":"1508160343399434","link":"https://www.facebook.com/marketplace/item/1508160343399434","title":"Specialized","price":"A$380","image":"https://scontent-mia3-1.xx.fbcdn.net/v/t45.5328-4/457450235_362159113494531_4908235415779333458_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=fKJOOLdwEzYQ7kNvgG2BtBG&_nc_ht=scontent-mia3-1.xx&oh=00_AYCyVP6I71HRWp5v3tAk-CyHxrkbj6ChE-YGFvmKuai6Yg&oe=66D71488"},{"id":"1162408294989242","link":"https://www.facebook.com/marketplace/item/1162408294989242","title":"Mountain bicycle","price":"A$200","image":"https://scontent-mia3-1.xx.fbcdn.net/v/t45.5328-4/456973076_8107389422682577_3993046402077088957_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=oF0xB3-twXMQ7kNvgHSX1vl&_nc_ht=scontent-mia3-1.xx&oh=00_AYDuJR0dQQ6yfCQNDaOY6id8tJE71RyH_yrZpbzl1uEr1Q&oe=66D71065"},{"id":"422027870426119","link":"https://www.facebook.com/marketplace/item/422027870426119","title":"Vintage bike","price":"A$50","image":"https://scontent-mia3-2.xx.fbcdn.net/v/t45.5328-4/457617204_427242346452916_1999345804802053291_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=i1XKfqPvm2kQ7kNvgGhNWM-&_nc_ht=scontent-mia3-2.xx&oh=00_AYCV9pknbHCQmY8ziEWcNtUZaih1ieCRQmsdR3zKUcu7SQ&oe=66D6FAEB"},{"id":"1273079280792232","link":"https://www.facebook.com/marketplace/item/1273079280792232","title":"2016 Honda Honda Accord EX-L Sedan 4D","price":"$2,900","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t45.5328-4/457357847_1705040093604240_1691140503480674246_n.jpg?stp=c45.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=YmNxxYOWKS8Q7kNvgF5oIGK&_nc_ht=scontent.fmem1-1.fna&oh=00_AYBGNET0Z-qiSg-AfO5QRzvtGLX0gbmEiiqH7jL9vkAiqg&oe=66D71F1B"},{"id":"1444687816239229","link":"https://www.facebook.com/marketplace/item/1444687816239229","title":"2018 Chevrolet Chevrolet Cruze LS Sedan 4D","price":"$0","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t45.5328-4/457703213_1082728479860474_1364390082353493031_n.jpg?stp=c0.34.261.261a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=fgCUOraXxuAQ7kNvgF4ugLx&_nc_ht=scontent.fmem1-1.fna&oh=00_AYCieRPunV2e-NrSiAzve8KUJ8pJaW9oAPqY2wJZoZ3Esg&oe=66D70119"},{"id":"1511403426146147","link":"https://www.facebook.com/marketplace/item/1511403426146147","title":"2003 Lincoln Town Car · Cartier L Sedan 4D","price":"$1,500","image":"https://scontent.fmem1-2.fna.fbcdn.net/v/t39.30808-6/457524839_522654896972079_221084747913885438_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s261x260&_nc_cat=108&ccb=1-7&_nc_sid=454cf4&_nc_ohc=g59b6nddC-cQ7kNvgFWrxLP&_nc_ht=scontent.fmem1-2.fna&oh=00_AYA66G5DNRnm36YpZ6scuikBs51xyGuzMxLWcEVCRr0wRQ&oe=66D70A85"},{"id":"485190411043414","link":"https://www.facebook.com/marketplace/item/485190411043414","title":"2006 Kia Sedona · Xle ","price":"$2,400","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/457691585_531713182572929_7952832974997011882_n.jpg?stp=c0.169.1537.1537a_dst-jpg_s261x260&_nc_cat=100&ccb=1-7&_nc_sid=946e27&_nc_ohc=1JfMGQihvPsQ7kNvgEj0ocw&_nc_ht=scontent.fmem1-1.fna&oh=00_AYD51Yn9nKrX2tgbvWqa_zD7XNkQS10DnXI6G8bf1RqA_w&oe=66D711F5"},{"id":"1211495600131826","link":"https://www.facebook.com/marketplace/item/1211495600131826","title":"2010 Honda Civic · EX Sedan 4D","price":"$5,000","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/457326071_122125919396352328_6389875007245858098_n.jpg?stp=c0.119.1079.1079a_dst-jpg_s261x260&_nc_cat=109&ccb=1-7&_nc_sid=454cf4&_nc_ohc=Ax8TZkKShqMQ7kNvgGIOx5_&_nc_ht=scontent.fmem1-1.fna&oh=00_AYApSZ48DCEl0OI8EzfykCYTDM2EQQTj3CXVpnt8UegRDQ&oe=66D6FFB2"},{"id":"492107760445468","link":"https://www.facebook.com/marketplace/item/492107760445468","title":"2010 Buick LaCrosse · CX Sedan 4D","price":"$2,550","image":"https://scontent.fmem1-2.fna.fbcdn.net/v/t39.30808-6/457624633_504233128970456_2913083280993691166_n.jpg?stp=c0.132.1200.1200a_dst-jpg_s261x260&_nc_cat=107&ccb=1-7&_nc_sid=454cf4&_nc_ohc=y2_zRgldl9QQ7kNvgFWAjgI&_nc_ht=scontent.fmem1-2.fna&oh=00_AYAWQDPRZmhU3lhdcXLyGcP8i5SVkwphxzi6izbIzNCXTg&oe=66D6FF46"},{"id":"484565481207658","link":"https://www.facebook.com/marketplace/item/484565481207658","title":"2009 Nissan Altima · 2.5 Sedan 4D","price":"$1,600","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/457520978_8540213232690037_5172788141586842747_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s261x260&_nc_cat=106&ccb=1-7&_nc_sid=454cf4&_nc_ohc=AQdrIuJ8YckQ7kNvgE99YLb&_nc_ht=scontent.fmem1-1.fna&oh=00_AYC0PVbxI_CFe9NTgGTXQoKbV1xTWCnen37-CWlfc3TIKw&oe=66D710B5"},{"id":"1929895850823665","link":"https://www.facebook.com/marketplace/item/1929895850823665","title":"2018 Toyota Mirai · Mirai","price":"$4,995","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/457440105_10226334670340568_3565084797073025597_n.jpg?stp=c253.0.1542.1542a_dst-jpg_s261x260&_nc_cat=109&ccb=1-7&_nc_sid=454cf4&_nc_ohc=pZDdIdpyRfIQ7kNvgF9XoDS&_nc_ht=scontent.fmem1-1.fna&oh=00_AYDhs9F1YwmZLvAohvRbaCnHwBE3--A4TkBqBM6xU0frKw&oe=66D6F115"},{"id":"1224455325499899","link":"https://www.facebook.com/marketplace/item/1224455325499899","title":"2000 Toyota Solara · SE Coupe 2D","price":"$1,700","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/457212144_8217663488347716_2797120728793516447_n.jpg?stp=c0.169.1537.1537a_dst-jpg_s261x260&_nc_cat=106&ccb=1-7&_nc_sid=454cf4&_nc_ohc=8oEQEpnx0FoQ7kNvgHkdkJs&_nc_ht=scontent.fmem1-1.fna&oh=00_AYBdH_U0S3CFHExWX3RGNS7pNvOk5lY_RRW8tt9D2TqCww&oe=66D6FFA9"},{"id":"1098975282235099","link":"https://www.facebook.com/marketplace/item/1098975282235099","title":"2013 Hyundai Elantra · Limited Sedan 4D","price":"$1,000","image":"https://scontent.fmem1-2.fna.fbcdn.net/v/t39.30808-6/457212517_1227503314934955_4109739611206563685_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s261x260&_nc_cat=108&ccb=1-7&_nc_sid=454cf4&_nc_ohc=pfUTr7UPddUQ7kNvgHROSAL&_nc_ht=scontent.fmem1-2.fna&oh=00_AYB5DlbFHixH5JQoDQTwv0u5gaLOLP6r3T2m644a_qZGVg&oe=66D6F01D"},{"id":"1278377103286224","link":"https://www.facebook.com/marketplace/item/1278377103286224","title":"1999 Volkswagen New Beetle · GLS Hatchback 2D","price":"$1,800","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/457363832_1353167815656852_6412278024948530219_n.jpg?stp=c0.169.1537.1537a_dst-jpg_s261x260&_nc_cat=106&ccb=1-7&_nc_sid=454cf4&_nc_ohc=O8SHfoumVI8Q7kNvgFBTNud&_nc_ht=scontent.fmem1-1.fna&oh=00_AYDzT3Bvy8XoKbzwnt2S5bKEKLJJyYi9KBJ-gL91np6cOw&oe=66D70ABA"},{"id":"885140869621107","link":"https://www.facebook.com/marketplace/item/885140869621107","title":"2006 Honda Civic · DX Sedan 4D","price":"$4,000","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/457317607_122135378264322711_544454152203311417_n.jpg?stp=c256.0.1537.1537a_dst-jpg_s261x260&_nc_cat=106&ccb=1-7&_nc_sid=454cf4&_nc_ohc=qkn_Q530UXEQ7kNvgGzt2Eb&_nc_ht=scontent.fmem1-1.fna&oh=00_AYCwjVzgkGa-YdxZaQDcRhvgVUefvNn9b4ODVWWtaAQiZw&oe=66D6F050"},{"id":"542857894852885","link":"https://www.facebook.com/marketplace/item/542857894852885","title":"2008 Mercedes-Benz C-Class · C 300 Luxury Sedan 4D","price":"$6,300","image":"https://scontent.fmem1-2.fna.fbcdn.net/v/t39.30808-6/456962481_3966275850325670_5681115794480145224_n.jpg?stp=c0.169.1537.1537a_dst-jpg_s261x260&_nc_cat=111&ccb=1-7&_nc_sid=454cf4&_nc_ohc=LKvEWxvnAdgQ7kNvgFHENPE&_nc_ht=scontent.fmem1-2.fna&oh=00_AYC-VocYMFkFASYq3Gu6whJh0rMxtGfwuhFQku3YFI9S4w&oe=66D709D8"},{"id":"966627445269173","link":"https://www.facebook.com/marketplace/item/966627445269173","title":"2000 Honda Accord · DX Sedan 4D","price":"$1,200","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/457108104_8540156526029041_45033737724771815_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s261x260&_nc_cat=109&ccb=1-7&_nc_sid=454cf4&_nc_ohc=lrTDM0EiHLMQ7kNvgHrDIg_&_nc_ht=scontent.fmem1-1.fna&oh=00_AYAbQhdt_unkNP1_WFT-lcp0rMzHnE3Y2YVk0Nl1iUMKBg&oe=66D6FE42"},{"id":"484410071237246","link":"https://www.facebook.com/marketplace/item/484410071237246","title":"2006 Audi A3 2.0T Wagon 4D","price":"$0","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t45.5328-4/457152925_880340987346240_1989378938835324953_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=a4hC8E7O0iQQ7kNvgErosV-&_nc_ht=scontent.fmem1-1.fna&oh=00_AYAC5f_TLObfhDPw8jGNdSStfKsv90Azj06NldouXZKRxQ&oe=66D6FAE2"},{"id":"7669076233197705","link":"https://www.facebook.com/marketplace/item/7669076233197705","title":"2010 Toyota Prius · III Hatchback 4D","price":"$4,800","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/457524480_8026800637396702_8873155904535411169_n.jpg?stp=c529.0.991.991a_dst-jpg_s261x260&_nc_cat=101&ccb=1-7&_nc_sid=454cf4&_nc_ohc=q_OKKgd0-TIQ7kNvgFSYOBm&_nc_ht=scontent.fmem1-1.fna&oh=00_AYDk0Eg1Jzjy1LpPU5g-Idt9ZaZnGIFB87sGwLIztHQCSQ&oe=66D6F268"},{"id":"842988658034702","link":"https://www.facebook.com/marketplace/item/842988658034702","title":"2002 Toyota Camry · XLE Sedan 4D","price":"$1,999","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/457564266_122095378898508318_652523977244605276_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s261x260&_nc_cat=101&ccb=1-7&_nc_sid=454cf4&_nc_ohc=wLq0TqNzbKEQ7kNvgG3MRYL&_nc_ht=scontent.fmem1-1.fna&oh=00_AYDbbB7w7IhZiDKPQ7XBtV93LJuxthiz_hud8VNoCw6bYA&oe=66D70AD0"},{"id":"1179626589960621","link":"https://www.facebook.com/marketplace/item/1179626589960621","title":"1999 Toyota 4Runner","price":"$3,200","image":"https://scontent.fmem1-2.fna.fbcdn.net/v/t39.30808-6/457628858_1236776891013401_350303916082897941_n.jpg?stp=c0.364.945.945a_dst-jpg_s261x260&_nc_cat=111&ccb=1-7&_nc_sid=454cf4&_nc_ohc=1v3Jgfbd-hEQ7kNvgHwXDxy&_nc_ht=scontent.fmem1-2.fna&oh=00_AYCVcKqJhr9WWdT1W3iHoo2liQtfC0EtviPTOG0eNF25CQ&oe=66D6F41B"},{"id":"2439414429595827","link":"https://www.facebook.com/marketplace/item/2439414429595827","title":"2008 Toyota Prius · Standard Hatchback 4D","price":"$4,000","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/457067078_3203564006446965_983507262083486058_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s261x260&_nc_cat=109&ccb=1-7&_nc_sid=454cf4&_nc_ohc=a2MFjW1ru0QQ7kNvgEqJIMk&_nc_ht=scontent.fmem1-1.fna&oh=00_AYCkr4A4svJUOfdoCP3AmjMr14j5lOtQOgyexLgAqPX6JQ&oe=66D719DA"},{"id":"531006946004871","link":"https://www.facebook.com/marketplace/item/531006946004871","title":"Honda accord .","price":"$2,300","image":"https://scontent.fmem1-1.fna.fbcdn.net/v/t45.5328-4/457281502_520043230577285_2387522566843170500_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=XsmCR1p9IIAQ7kNvgHJve-c&_nc_ht=scontent.fmem1-1.fna&oh=00_AYCbwat_3cRJEfbLIEke9vb-4qbCNCy_mI_hXaSc0GCVfw&oe=66D71D20"},{"id":"539356765418028","link":"https://www.facebook.com/marketplace/item/539356765418028","title":"2005 Mazda Mazda3 · i Sedan 4D","price":"$2,200","image":"https://scontent.fmem1-2.fna.fbcdn.net/v/t39.30808-6/457431938_417231458044768_1236585051089220170_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s261x260&_nc_cat=104&ccb=1-7&_nc_sid=454cf4&_nc_ohc=AlqoQXHl844Q7kNvgFq6SNj&_nc_ht=scontent.fmem1-2.fna&oh=00_AYDmS10rT8CleGU1bgkVxLoRz4It8vgzD3nSQ9MgaPh8SA&oe=66D72061"},{"id":"1179095913138669","link":"https://www.facebook.com/marketplace/item/1179095913138669","title":"2015 Nissan Altima · 2.5 S Sedan 4D","price":"$1,700","image":"https://scontent.fmem1-2.fna.fbcdn.net/v/t39.30808-6/457327878_1243108943349221_4591603418044724279_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s261x260&_nc_cat=104&ccb=1-7&_nc_sid=454cf4&_nc_ohc=epUpouaU8HgQ7kNvgGscb5K&_nc_ht=scontent.fmem1-2.fna&oh=00_AYDnY_0fWaiOcLT0BR2Sa381IcPmSljPpbdoXJt5zTp5JA&oe=66D6F8E2"},{"id":"423900327394209","link":"https://www.facebook.com/marketplace/item/423900327394209","title":"2015 Audi A3 · 1.8T Premium Plus Cabriolet 2D","price":"$6,000","image":"https://scontent.fmem1-2.fna.fbcdn.net/v/t39.30808-6/457268429_8238682429511637_2992078667449286470_n.jpg?stp=c256.0.1537.1537a_dst-jpg_s261x260&_nc_cat=107&ccb=1-7&_nc_sid=454cf4&_nc_ohc=FmxAwO7iC_UQ7kNvgFft-H1&_nc_ht=scontent.fmem1-2.fna&oh=00_AYBd47VrE6FgPeVXmoa46TlKSoWZfKzxRHqGU5q9eA27ng&oe=66D6FB95"},{"id":"1223995848948652","link":"https://www.facebook.com/marketplace/item/1223995848948652","title":"2017 Hyundai Accent · SE Sedan 4D","price":"$7,000","image":"https://scontent.fmem1-2.fna.fbcdn.net/v/t39.30808-6/457619706_463401720030642_1379179563302746655_n.jpg?stp=c0.169.1537.1537a_dst-jpg_s261x260&_nc_cat=110&ccb=1-7&_nc_sid=454cf4&_nc_ohc=wLqD6arhnV0Q7kNvgGfBGW1&_nc_ht=scontent.fmem1-2.fna&oh=00_AYDXuMYvENVuUcid8svTiQKD3MjlZvFgD9emhPvuXeRNbA&oe=66D71C9F"},{"id":"8014682018650415","link":"https://www.facebook.com/marketplace/item/8014682018650415","title":"2007 BMW 3 Series · 328i Sedan 4D","price":"$2,800","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/457333928_355771007600424_9132777703742197678_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s261x260&_nc_cat=106&ccb=1-7&_nc_sid=454cf4&_nc_ohc=S1OncscEkFEQ7kNvgHhH7M-&_nc_ht=scontent-ord5-1.xx&oh=00_AYCuHYjg7D6hN31KWV1gEZUUQ_lSJJuJpc6LnC9rEMBIoA&oe=66D72282"},{"id":"486627924084699","link":"https://www.facebook.com/marketplace/item/486627924084699","title":"2006 Lexus RX · RX 330 Sport Utility 4D","price":"$3,500","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/457450060_8210670372381380_113268741822135538_n.jpg?stp=c256.0.1537.1537a_dst-jpg_s261x260&_nc_cat=108&ccb=1-7&_nc_sid=454cf4&_nc_ohc=Yj6egNCK5zgQ7kNvgFnSLPC&_nc_ht=scontent-ord5-1.xx&oh=00_AYA-uuDgN2KYzRlAqyEMZgke8vn7gJBlivB6QSbKrqCcYQ&oe=66D70280"},{"id":"520568093788763","link":"https://www.facebook.com/marketplace/item/520568093788763","title":"2016 Kia Soul · Wagon 4D","price":"$3,800","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/457394287_1089311419194041_78621419204352903_n.jpg?stp=c198.0.1204.1204a_dst-jpg_s261x260&_nc_cat=103&ccb=1-7&_nc_sid=454cf4&_nc_ohc=P71P0IoeXI8Q7kNvgFzRLuC&_nc_ht=scontent-ord5-2.xx&oh=00_AYDDfZME3i6lFAG12SftYVFcEHoabm78Sz9fvgFYkg6VWA&oe=66D6F6D2"},{"id":"1603487293562983","link":"https://www.facebook.com/marketplace/item/1603487293562983","title":"2004 Dodge Neon · SE Sedan 4D","price":"$1,850","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/457507103_122111244800458263_3411078574010156773_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s261x260&_nc_cat=108&ccb=1-7&_nc_sid=454cf4&_nc_ohc=hQF_TiyzEYYQ7kNvgEFZyDV&_nc_ht=scontent-ord5-1.xx&oh=00_AYB1faI7jjwafmKpyLFZenozFbr-8c-JaHy_PqZI8JrJuw&oe=66D6F300"},{"id":"1934135037093731","link":"https://www.facebook.com/marketplace/item/1934135037093731","title":"Mountain bike GT 24inch","price":"A$130","image":"https://scontent.ftpa1-1.fna.fbcdn.net/v/t45.5328-4/457582061_491018173719782_7957569430561026506_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=zT2iryXlWfgQ7kNvgGyZenW&_nc_ht=scontent.ftpa1-1.fna&oh=00_AYCw4zT7T5nIU76Ira2EqReoFLCm5e33zyPit3bYbx6ppw&oe=66D6F60A"},{"id":"500104562657076","link":"https://www.facebook.com/marketplace/item/500104562657076","title":"2005 Honda Accord · EX Coupe 2D","price":"$1,900","image":"https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/457650516_1891289344717743_8319823713760950764_n.jpg?stp=c0.169.1537.1537a_dst-jpg_s261x260&_nc_cat=111&ccb=1-7&_nc_sid=454cf4&_nc_ohc=r7EWYUlYfacQ7kNvgHr6wMl&_nc_ht=scontent-hou1-1.xx&oh=00_AYB9m1SDEn82IZDxKvW-lw-Kn7AFXTdte1XSYBfLOycOaQ&oe=66D6F4E3"},{"id":"3934693946810833","link":"https://www.facebook.com/marketplace/item/3934693946810833","title":"2010 Nissan Altima · 2.5 S Sedan 4D","price":"$1,300","image":"https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/457359371_4020334068194826_1559601099481229207_n.jpg?stp=c254.0.1541.1541a_dst-jpg_s261x260&_nc_cat=107&ccb=1-7&_nc_sid=454cf4&_nc_ohc=BSbFC9BeCfMQ7kNvgEVrRJS&_nc_ht=scontent-hou1-1.xx&oh=00_AYCHI83CXEK9-zvsSPf9kt795gOstgX0CaLFVwVqQt5Ieg&oe=66D7239D"},{"id":"524284283473454","link":"https://www.facebook.com/marketplace/item/524284283473454","title":"2020 Toyota RAV4 · XLE Sport Utility 4D","price":"$18,900","image":"https://scontent-hou1-1.xx.fbcdn.net/v/t45.5328-4/457518313_8735009759852976_3212446355619484946_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=fLX8ov0PUcsQ7kNvgEHCUd8&_nc_ht=scontent-hou1-1.xx&oh=00_AYA3IjtOFEdWlMZtUyhckLJODAZJmd66Wy9UYoIZ5GZSWQ&oe=66D707D1"},{"id":"3421149488178324","link":"https://www.facebook.com/marketplace/item/3421149488178324","title":"Free couch","price":"CA$0","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/457088266_2005584216610633_633222872642485817_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=eoRxvsvt7lgQ7kNvgGM7hRZ&_nc_ht=scontent-ord5-1.xx&oh=00_AYAqA-vTjG5vajRD1odua9lSJUBXbnFY5RibGgQKrInOEg&oe=66D71684"},{"id":"8106960019341733","link":"https://www.facebook.com/marketplace/item/8106960019341733","title":"Couch/sofa","price":"CA$0","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/457251890_1260847211955813_3887086614753982714_n.jpg?stp=c101.0.260.260a_dst-jpg_p261x260&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=lkFODjVdhBwQ7kNvgE98Drc&_nc_ht=scontent-ord5-1.xx&oh=00_AYCBSrlTfoJvhmjFBntwLLlRrxePKyGxipGKK4o_EFFQUg&oe=66D6F136"},{"id":"527723186283308","link":"https://www.facebook.com/marketplace/item/527723186283308","title":"White leather couch","price":"CA$200","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/457343326_360663247101271_6699364463560886659_n.jpg?stp=c99.0.260.260a_dst-jpg_p261x260&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=Vz0t4xvFxnMQ7kNvgHVq5ef&_nc_ht=scontent-ord5-2.xx&oh=00_AYCQH7aUBB9THVj8XIajH2d7Fru_IN7wuIJesUwRg9pc2g&oe=66D7195C"},{"id":"829846215941261","link":"https://www.facebook.com/marketplace/item/829846215941261","title":"Couch Set - DELIVERY AVAILABLE","price":"CA$165","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/457411867_894561492157374_2582664519716163373_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=YbsSff8sW2sQ7kNvgHmB8vS&_nc_ht=scontent-ord5-2.xx&oh=00_AYAc05oDklIUXtPBCrciw--Nvv5f7Zyk3gm5m5_0DmlEZw&oe=66D71AA7"},{"id":"475989968668800","link":"https://www.facebook.com/marketplace/item/475989968668800","title":"Sectional couch","price":"CA$275","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/457255834_471454905861423_1268922227091826242_n.jpg?stp=c100.0.260.260a_dst-jpg_p261x260&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=UEw-ZymEw_8Q7kNvgEoTpAc&_nc_ht=scontent-ord5-1.xx&oh=00_AYC2SBWqj60lwyiJZf3-u6whYJYYdxSh8rE6oMEpOdigCQ&oe=66D72087"},{"id":"1617383968822823","link":"https://www.facebook.com/marketplace/item/1617383968822823","title":"Two Couch’s for FREE","price":"CA$0","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/457340496_2607664112772540_2061183473351431330_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=dlFtUEDFG7UQ7kNvgG1wBTn&_nc_ht=scontent-ord5-1.xx&oh=00_AYAnGWfXzcOoj54Cf2NovtzU8D1uck1QgCw_iU2ASc67uA&oe=66D6F174"},{"id":"1026708202055637","link":"https://www.facebook.com/marketplace/item/1026708202055637","title":"Couch","price":"CA$0","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/457501152_871297464466884_4108845775845436387_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=n-LpEmRmtNYQ7kNvgGnEj3G&_nc_ht=scontent-ord5-2.xx&oh=00_AYAEjvBfe0Xu6NCRQkxChGf-ukmOSHCslLjzOtqD_p4jdQ&oe=66D70F6F"},{"id":"884530636946319","link":"https://www.facebook.com/marketplace/item/884530636946319","title":"Couch","price":"CA$280","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/457577147_1641046533130504_7206681670661209791_n.jpg?stp=c44.0.260.260a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=c0U77QD0dhwQ7kNvgFEKihE&_nc_ht=scontent-ord5-2.xx&oh=00_AYCkVjafbeVLhL1Q3NQo6bNfoMbb5amI1Rry6I-j5eqOOw&oe=66D71CAB"},{"id":"1946884769083065","link":"https://www.facebook.com/marketplace/item/1946884769083065","title":"Sofa","price":"CA$0","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/457207392_352245944649228_5795310696854046404_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=IH9YLQprao8Q7kNvgGtlCML&_nc_ht=scontent-ord5-2.xx&oh=00_AYDO84fTZvS73dcU19dpBrzNTumSyAQxpgCLDsD_FekW0w&oe=66D6FD34"},{"id":"3662484720679880","link":"https://www.facebook.com/marketplace/item/3662484720679880","title":"Nice Blue/Grey Sectional in Good Condition","price":"CA$375","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/457449866_1293910401582188_1141896004019475654_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=4xE986C66lMQ7kNvgH86Wa_&_nc_ht=scontent-ord5-1.xx&oh=00_AYDTiySvFA3b9P5fVLC_Qsga2Fbv5pDo-gRiTjci9-yWFA&oe=66D71FB3"},{"id":"1072669201032712","link":"https://www.facebook.com/marketplace/item/1072669201032712","title":"MOVING SALE","price":"CA$123","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/457698041_1659229038188152_3803657554014786152_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=vVN-pg6fMa0Q7kNvgGAUwsU&_nc_ht=scontent-ord5-2.xx&oh=00_AYAh5TV6ePVe8uqky23hQvX2hny7mekgMCKzgxTIph5Klg&oe=66D719E3"},{"id":"2475480449315421","link":"https://www.facebook.com/marketplace/item/2475480449315421","title":"Light grey couch / sofa (4 seater)","price":"CA$0","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/457440059_1424349798258856_3221467506711296491_n.jpg?stp=c75.0.260.260a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=PiOdcmrixW0Q7kNvgHv-kew&_nc_ht=scontent-ord5-1.xx&oh=00_AYCejCUfBtIvP9wKggyhFQ2O9xXtTpFxelkIHFb0Xw_G3g&oe=66D7198E"},{"id":"876764221004947","link":"https://www.facebook.com/marketplace/item/876764221004947","title":"PULL OUT COUCH BED","price":"CA$125","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/457569138_500751289369489_218075437909058720_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=vWbV0IrYA6kQ7kNvgFdLhPb&_nc_ht=scontent-ord5-2.xx&oh=00_AYDynkmzh4wfYsawTfASFzGfxkOuMYP5TULfABaYWeiRTg&oe=66D71F96"},{"id":"1023815365734694","link":"https://www.facebook.com/marketplace/item/1023815365734694","title":"Sofa & Love seat","price":"CA$300","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/457251889_1182418523046806_7881846085824498594_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=KbsLooAk014Q7kNvgH3PLs_&_nc_ht=scontent-ord5-1.xx&oh=00_AYC8prvxwgyumI0_enjL5Zk-7ekR403be-aaqMkWxJoLfA&oe=66D71539"},{"id":"973678477779501","link":"https://www.facebook.com/marketplace/item/973678477779501","title":"LUXURY SOFA SET FOR SALE | SOFA SET | CASH ON DELIVERY","price":"CA$30","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/457445033_531319446125890_6188089963414695319_n.jpg?stp=c94.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=dEbXtaMqG0EQ7kNvgHtKMVo&_nc_ht=scontent-ord5-2.xx&oh=00_AYATML1XIww4beQgByKQhu9TDFF5J56WpX34Kd5WnCNKeg&oe=66D6F469"},{"id":"1067861028241678","link":"https://www.facebook.com/marketplace/item/1067861028241678","title":"Couch excellent condition - grey","price":"CA$300","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/457500934_494358963387175_3131663403188202154_n.jpg?stp=c101.0.260.260a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=5l3toL3Wk6AQ7kNvgF91N-R&_nc_ht=scontent-ord5-1.xx&oh=00_AYCq_wBPKteQuvnlGu_-_7vO391WQ8UUyZuMcSaPaNa8vA&oe=66D6F724"},{"id":"3951620745161481","link":"https://www.facebook.com/marketplace/item/3951620745161481","title":"Dark Grey Sectional Couch","price":"CA$215","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/457576295_1217147169480517_9045584770964683933_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=mThTCvRmBMUQ7kNvgFGr71R&_nc_ht=scontent-ord5-2.xx&oh=00_AYA_SDqEP1piPMNZEL38_C0b7yUM4TEXr7zOWFDtH1BySA&oe=66D71F56"},{"id":"480877678169718","link":"https://www.facebook.com/marketplace/item/480877678169718","title":"Couch","price":"CA$200","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/457368367_1207387157237148_8402930211409913063_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=_lLpL9UqsxQQ7kNvgFG9Iz7&_nc_ht=scontent-ord5-1.xx&oh=00_AYAY1nBgSLbdiPCKlxnHnB0TGxjc0N7SVo0Kp5hC-z3hdQ&oe=66D70EC5"},{"id":"1565628314053395","link":"https://www.facebook.com/marketplace/item/1565628314053395","title":"Sofabed, double sized bed","price":"CA$0","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/457207312_1878795599270818_8328248654499474933_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=K8aPwCUwUL8Q7kNvgFgrZaU&_nc_ht=scontent-ord5-1.xx&oh=00_AYAuhf7Q03eif2R6EcVe4Ds9wtzHq-pMrdT8Gq7-cGPsiA&oe=66D70534"},{"id":"2275391166136064","link":"https://www.facebook.com/marketplace/item/2275391166136064","title":"Incredible savings for 3 seator sectional Sofa!!\nWAREHOUSE DEAL>>","price":"CA$599","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/452157175_7964265460316305_6682269393423010494_n.jpg?stp=c42.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=jmR8zFmAUjAQ7kNvgEy3mgJ&_nc_ht=scontent-ord5-2.xx&oh=00_AYCrCbiPlI75fsIqxMluzrsITP-sQ1hPNRRjVrDw2ltqDw&oe=66D71545"},{"id":"1961059687692663","link":"https://www.facebook.com/marketplace/item/1961059687692663","title":"Sectional couch","price":"CA$650","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/457577135_1182468689684903_7714755078876309617_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=-DYPc89vrpEQ7kNvgEryuM3&_nc_ht=scontent-ord5-2.xx&oh=00_AYDNSaV6gAj2vJHRXUwiZ5UvGP71Mu25pY3ufE5jNbofiA&oe=66D6F929"},{"id":"1238998250455165","link":"https://www.facebook.com/marketplace/item/1238998250455165","title":"Grey L-Sectional Couch (Article Furniture)","price":"CA$500","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/457450233_418231807448269_2870657442360047426_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=1VGzF_FuzPUQ7kNvgGC3hyu&_nc_ht=scontent-ord5-1.xx&oh=00_AYDgs7CLU3zzlqkJcDzGhL76YPTwHVVklQxjUAX1RYY3eQ&oe=66D6F714"},{"id":"1039467577657892","link":"https://www.facebook.com/marketplace/item/1039467577657892","title":"Ikea Vinliden Couch (Like new - no tears)","price":"CA$0","image":"https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/457119470_494440813522890_8158261166068634730_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=5THUlzOmF10Q7kNvgGo82wC&_nc_ht=scontent-ord5-1.xx&oh=00_AYDRiuSG0QACE_sXWsE2xn5m7mEKjQcLpJEtgQyOOWdl1Q&oe=66D71BAF"},{"id":"1935434093992859","link":"https://www.facebook.com/marketplace/item/1935434093992859","title":"2+1 couch FREE","price":"CA$0","image":"https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/457261776_1477727792874951_6809611798116179339_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=JyN8QMXzzI4Q7kNvgHGHEwz&_nc_ht=scontent-ord5-2.xx&oh=00_AYAijltlHfElSfINz-Ot8mxgOCvgwoFfNcT4fnDjIAgHJA&oe=66D6F752"}]}
```

# package.json

```json
{
  "name": "marketplace-scraper-bot",
  "version": "1.0.0",
  "description": "Setup email alerts for new items on Facebook Marketplace.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ovdixon/marketplace-scraper-bot.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/ovdixon/marketplace-scraper-bot/issues"
  },
  "homepage": "https://github.com/ovdixon/marketplace-scraper-bot#readme",
  "dependencies": {
    "@sendgrid/mail": "^7.7.0",
    "axios": "^1.1.3",
    "cheerio": "^1.0.0",
    "config": "^3.3.8",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "node-cron": "^3.0.3",
    "node-persist": "^3.1.0",
    "nodemailer": "^6.9.14",
    "puppeteer": "^23.2.1"
  }
}

```

# index.js

```js
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const scrape = require("./controllers/scrape.js");
const parse = require("./controllers/parse.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let savedFilters = [];

async function getItems(filter) {
    console.log('getItems called with filter:', JSON.stringify(filter));
    try {
        const source = await scrape.getSource(filter);
        console.log('Source fetched successfully');
        let items = await parse.getSearchResults(source.data);
        console.log(`Parsed ${items.length} items`);
        return items;
    } catch (err) {
        console.error(`Error processing search: ${err}`);
        return [];
    }
}

// API route to get all filters
app.get('/api/filters', (req, res) => {
    res.json(savedFilters);
});

// API route to get items for a specific filter
app.get('/api/items/:filterId', (req, res) => {
    const filterId = parseInt(req.params.filterId);
    const filter = savedFilters.find(f => f.id === filterId);
    if (filter) {
        res.json(filter.items);
    } else {
        res.status(404).json({ error: 'Filter not found' });
    }
});

// API route to add a new filter
app.post('/api/filters', (req, res) => {
    console.log('Received request to add filter:', req.body);
    const { city, query, maxPrice } = req.body;
    const newFilter = {
        id: savedFilters.length + 1,
        city,
        query,
        maxPrice,
        items: []
    };

    savedFilters.push(newFilter);
    console.log('New filter added:', newFilter);
    res.json(newFilter);
});

// API route to trigger scraping for a specific filter
app.post('/api/scrape/:filterId', async (req, res) => {
    console.log('Received request to scrape for filterId:', req.params.filterId);
    const filterId = parseInt(req.params.filterId);
    const filter = savedFilters.find(f => f.id === filterId);

    if (filter) {
        try {
            const newItems = await getItems(filter);
            filter.items = newItems;
            res.json(filter);
        } catch (error) {
            console.error('Error during scraping:', error);
            res.status(500).json({ error: 'Internal server error during scraping' });
        }
    } else {
        res.status(404).json({ error: 'Filter not found' });
    }
});

// Serve the main HTML file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
```

# README.md

```md


```

# .replit

```
modules = ["nodejs-20", "web"]
run = "npm start"

[nix]
channel = "stable-24_05"

[deployment]
run = ["sh", "-c", "npm start"]

[[ports]]
localPort = 3000
externalPort = 80

```

# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

./node_modules

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1 declaration files
typings/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and *not* Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

```

# public/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marketplace Scraper</title>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        const { useState, useEffect } = React;

        const SearchForm = ({ onSubmit }) => {
            const [city, setCity] = useState('');
            const [query, setQuery] = useState('');
            const [maxPrice, setMaxPrice] = useState('');

            const handleSubmit = (e) => {
                e.preventDefault();
                onSubmit({ city, query, maxPrice });
                setCity('');
                setQuery('');
                setMaxPrice('');
            };

            return (
                <form onSubmit={handleSubmit} className="mb-4">
                    <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="mr-2 p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="mr-2 p-2 border rounded"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="mr-2 p-2 border rounded"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Add Filter & Scrape
                    </button>
                </form>
            );
        };

        const FilterList = ({ filters, onSelect, onScrape }) => (
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Saved Filters</h2>
                {filters.map((filter) => (
                    <div key={filter.id} className="flex items-center mb-2">
                        <button
                            onClick={() => onSelect(filter.id)}
                            className="bg-gray-200 p-2 rounded mr-2"
                        >
                            {filter.city} - {filter.query} (Max: ${filter.maxPrice})
                        </button>
                        <button
                            onClick={() => onScrape(filter.id)}
                            className="bg-green-500 text-white p-2 rounded"
                        >
                            Scrape
                        </button>
                    </div>
                ))}
            </div>
        );

        const ItemList = ({ items }) => (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                    <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="font-bold text-xl mb-2 truncate">{item.title}</h2>
                            <p className="text-gray-700 text-base mb-2">{item.price}</p>
                            <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block"
                            >
                                View Item
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        );

        const MarketplaceFeed = () => {
            const [filters, setFilters] = useState([]);
            const [selectedFilterId, setSelectedFilterId] = useState(null);
            const [items, setItems] = useState([]);
            const [loading, setLoading] = useState(false);
            const [error, setError] = useState(null);

            const fetchFilters = async () => {
                try {
                    const response = await fetch('/api/filters');
                    if (!response.ok) {
                        throw new Error('Failed to fetch filters');
                    }
                    const data = await response.json();
                    setFilters(data);
                } catch (err) {
                    setError(err.message);
                }
            };

            const fetchItems = async (filterId) => {
                setLoading(true);
                try {
                    const response = await fetch(`/api/items/${filterId}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch items');
                    }
                    const data = await response.json();
                    setItems(data);
                    setError(null);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            const handleAddFilter = async (filterParams) => {
                setLoading(true);
                try {
                    const response = await fetch('/api/filters', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(filterParams),
                    });
                    if (!response.ok) {
                        throw new Error('Failed to add filter and start scraping');
                    }
                    await fetchFilters();
                    setError(null);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            const handleScrape = async (filterId) => {
                setLoading(true);
                try {
                    const response = await fetch(`/api/scrape/${filterId}`, {
                        method: 'POST',
                    });
                    if (!response.ok) {
                        throw new Error('Failed to scrape for filter');
                    }
                    await fetchFilters();
                    if (selectedFilterId === filterId) {
                        await fetchItems(filterId);
                    }
                    setError(null);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            const handleSelectFilter = (filterId) => {
                setSelectedFilterId(filterId);
                fetchItems(filterId);
            };

            useEffect(() => {
                fetchFilters();
            }, []);

            if (loading) {
                return <div className="flex justify-center items-center h-screen">Loading...</div>;
            }

            if (error) {
                return <div className="text-red-500 text-center">{error}</div>;
            }

            return (
                <div className="container mx-auto px-4 py-8">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold mb-4">Marketplace Scraper</h1>
                        <SearchForm onSubmit={handleAddFilter} />
                    </div>
                    <FilterList
                        filters={filters}
                        onSelect={handleSelectFilter}
                        onScrape={handleScrape}
                    />
                    {selectedFilterId && <ItemList items={items} />}
                </div>
            );
        };

        const App = () => {
            return (
                <div className="bg-gray-100 min-h-screen">
                    <header className="bg-blue-600 text-white p-4">
                        <h1 className="text-2xl font-bold">Facebook Marketplace Scraper</h1>
                    </header>
                    <main>
                        <MarketplaceFeed />
                    </main>
                </div>
            );
        };

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>
```

# config/template.html

```html
<html>
    <head>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

        body {
            font-family: 'Space Mono', monospace;
        }

        main {
            padding: 8px 24px 32px 40px;
        }

        h2 {
            font-size: 18px;
        }

        p {
            font-size: 14px;
            color: grey;   
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            padding-top: 8px;
            padding-bottom: 8px;
            overflow: auto;
        }

        li img {
            width: 100px;
            height: auto;
            float: left;
            margin: 0 16px 0 0;
        }

        @media only screen and (max-width: 600px) {

        h1 {
            font-size: 20px
        }

        h2 {
            font-size: 14px
        }

        p {
            font-size: 10px;
        }

        li img {
            width:80px;
        }

        }

        </style>
    </head>

    <body>
        <main>
            {{#each items}}
            <div>
                <h2>{{@key}}</h2>
                <ul>
                {{#each this}}
                    <li>
                        <img src={{this.image}}>
                        <p><a href={{this.link}}>{{this.title}}</a></p>
                        <p>{{this.price}}</p>
                    </li>
                {{/each}}    
                </ul>
            </div>
            {{/each}} 
        </main>
    </body>
  </html>

```

# controllers/scrape.js

```js
const axios = require('axios');

async function getSource(search) {
    console.log(`Fetching source for search: ${JSON.stringify(search)}`);
    try {
        const response = await axios.get('https://app.scrapingbee.com/api/v1', {
            params: {
                'api_key': process.env.scrapingbee_api_key,
                'url': `https://www.facebook.com/marketplace/${search.location}/search?daysSinceListed=1&query=${search.term.replace(/ /g,'%20')}&exact=false`,
                'render_js': 'true',  // Ensure JS is rendered
                'premium_proxy': 'true' // Keep proxy settings if needed
            }
        });
        console.log(`ScrapingBee API response status: ${response.status}`);
        console.log(`ScrapingBee API response headers: ${JSON.stringify(response.headers)}`);
        return response;
    } catch (error) {
        console.error('Error in getSource:', error);
        if (error.response) {
            console.error('ScrapingBee API error response:', error.response.data);
        }
        throw error;
    }
}

module.exports = {getSource}

```

# controllers/parse.js

```js
const storage = require('node-persist');

function getSearchResults(source) {
    console.log('Starting to parse search results');
    let items = [];
    let searchResult = source.match(new RegExp('feed_units":(.*)},"marketplace_seo_page'));

    if (!searchResult || !searchResult[1]) {
        console.log('No match found in the HTML content');
        return items; // Return empty if no valid data
    }

    try {
        searchResult = JSON.parse(searchResult[1]);

        if (searchResult['edges'][0]['node']['__typename'] === 'MarketplaceSearchFeedNoResults') {
            console.log('No results found in the marketplace search feed');
            return items;
        } else {
            searchResult['edges'].forEach(element => {
                let id = element['node']['listing']['id'];
                let link = `https://www.facebook.com/marketplace/item/${id}`;
                let title = element['node']['listing']['marketplace_listing_title'];
                let price = element['node']['listing']['listing_price']['formatted_amount'];
                let img = element['node']['listing']['primary_listing_photo']['image']['uri'];

                const item = { "id": id, "link": link, "title": title, "price": price, "image": img };

                items.push(item);
            });
        }
    } catch (err) {
        console.error('Error parsing JSON from source:', err);
        console.error('Error details:', err.message);
        console.error('Partial searchResult:', searchResult ? JSON.stringify(searchResult).substring(0, 200) : 'undefined');
    }

    console.log(`Parsed ${items.length} items from the search results`);
    return items;
}


async function getNewItems(items) {
    console.log(`Checking for new items among ${items.length} parsed items`);
    let newItems = [];
    await storage.init();

    for (const item of items) {
        let duplicates = await storage.valuesWithKeyMatch(item.id);
        if (duplicates.length === 0) {
            newItems.push(item);
            await storage.setItem(item.id, item);
            console.log(`New item found: ${item.title}`);
        }
    }

    console.log(`Found ${newItems.length} new items`);
    return newItems;
}

module.exports = { getSearchResults, getNewItems };

```

# controllers/mail.js

```js
require('dotenv').config();

const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.sendgrid_api_key)

async function send(newItems){
  const msg = {
    to: process.env.recipient,
    from: process.env.sender,
    cc: process.env.sender,
    subject: 'Marketplace Magpie',
    templateId: process.env.sendgrid_template_id,
    dynamicTemplateData: newItems
  }
  await sgMail
    .send(msg)
    .then(() => {
      console.log('New email sent');
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = {send}


```

# .upm/store.json

```json
{"version":2,"languages":{"nodejs-npm":{"specfileHash":"613204116636df2664d59181a3e074a7","lockfileHash":"d9a66e2427466a93efb7146df0eabebd","guessedImports":["axios","express"],"guessedImportsHash":"b7efbdd39db48c4025d60e486d97be71"}}}

```

# .node-persist/storage/fecd971c1a3cebcf6bc601ba11a79d4d

```
{"key":"539356765418028","value":{"id":"539356765418028","link":"https://www.facebook.com/marketplace/item/539356765418028","title":"2005 Mazda Mazda3 · i Sedan 4D","price":"$2,200","image":"https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/457431938_417231458044768_1236585051089220170_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s261x260&_nc_cat=104&ccb=1-7&_nc_sid=454cf4&_nc_ohc=AlqoQXHl844Q7kNvgHNZSmT&_nc_ht=scontent-lga3-2.xx&oh=00_AYArBrJ4JHQFqv0WokAAG7CxPpmySBZ48aqq0l_WeJxTqA&oe=66D6E821"}}
```

# .node-persist/storage/feb94c61cfd2dc968ef86fedf81267b0

```
{"key":"1086142316201572","value":{"id":"1086142316201572","link":"https://www.facebook.com/marketplace/item/1086142316201572","title":"Jamis XC 1.0 mountain bike","price":"A$90","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457463431_1748600779242914_5427659277821088366_n.jpg?stp=c100.0.260.260a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=3W3-0lyybdQQ7kNvgHbpEh1&_nc_ht=scontent-iad3-1.xx&oh=00_AYCaUSOonhZdWAWNGCwwV-orqGLQMO4m5epnVQhf_9Eytw&oe=66D6EED2"}}
```

# .node-persist/storage/fb5f0ad71d4b10dcac70face5d8cba78

```
{"key":"1595186698069654","value":{"id":"1595186698069654","link":"https://www.facebook.com/marketplace/item/1595186698069654","title":"1999 Acura TL · 3.2 Sedan 4D","price":"$2,000","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/457245559_122173067738185347_5062901338968084125_n.jpg?stp=c0.169.1537.1537a_dst-jpg_s261x260&_nc_cat=110&ccb=1-7&_nc_sid=454cf4&_nc_ohc=bJD2xANOMiUQ7kNvgHVMNzt&_nc_ht=scontent-lga3-1.xx&oh=00_AYAp15J4xOINM9WQaik9MMbgUePfGpy6tHUzZfLRy5Gutg&oe=66D701FE"}}
```

# .node-persist/storage/f7d9fbec3fe27f49d5b3e37947c1ddae

```
{"key":"527894826382926","value":{"id":"527894826382926","link":"https://www.facebook.com/marketplace/item/527894826382926","title":"Bicycle","price":"A$30","image":"https://scontent.fosu2-1.fna.fbcdn.net/v/t45.5328-4/457096505_905748454943567_231387661312239319_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=9SWjS6zNT1sQ7kNvgH5xkY9&_nc_ht=scontent.fosu2-1.fna&oh=00_AYBlye_JFHfLm3alHN4rfMLfyUgMc1n_EIUTD1_gYdYbrw&oe=66D70BD8"}}
```

# .node-persist/storage/ed6af1bdb9e3f3b6125e3772525f90ef

```
{"key":"1513438532609908","value":{"id":"1513438532609908","link":"https://www.facebook.com/marketplace/item/1513438532609908","title":"Girl bike","price":"A$100","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457614833_1499245881006357_6771308229553033751_n.jpg?stp=c0.151.261.261a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=6Srr4bJbRzQQ7kNvgGp8xWx&_nc_ht=scontent-iad3-1.xx&oh=00_AYD2qp4gv8Ha-hkSDiSzx35XgovE_yNizDOvO-ejlYk3IQ&oe=66D6E206"}}
```

# .node-persist/storage/ec4bf11cc580e4168f8806a513ba894b

```
{"key":"1017382733354367","value":{"id":"1017382733354367","link":"https://www.facebook.com/marketplace/item/1017382733354367","title":"Good Bicycle","price":"A$60","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457457803_3662672030649206_5788731270677063423_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=Wo88ZIO6bS4Q7kNvgEefaW5&_nc_ht=scontent-iad3-1.xx&oh=00_AYBp4BKaY5GQueiyN0DWfUyAkDo2UubInJStnL_4-Oixbg&oe=66D70130"}}
```

# .node-persist/storage/eb6eb3aca133af971705721eb2be968a

```
{"key":"526756813355713","value":{"id":"526756813355713","link":"https://www.facebook.com/marketplace/item/526756813355713","title":"2005 Scion xA · Hatchback 4D","price":"$2,500","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/457405065_1663390347560776_9035133668653607322_n.jpg?stp=c256.0.1537.1537a_dst-jpg_s261x260&_nc_cat=108&ccb=1-7&_nc_sid=454cf4&_nc_ohc=IbWarfgX_JcQ7kNvgHitp2g&_nc_ht=scontent-lga3-1.xx&oh=00_AYCkCiHkZmCvMA487m05EkG2TAxlECtWxe-dh17ipjJpaQ&oe=66D6F054"}}
```

# .node-persist/storage/e9d235e25cd1bc1d895c9688c66019bd

```
{"key":"1162408294989242","value":{"id":"1162408294989242","link":"https://www.facebook.com/marketplace/item/1162408294989242","title":"Mountain bicycle","price":"A$200","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/456973076_8107389422682577_3993046402077088957_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=oF0xB3-twXMQ7kNvgEXACd2&_nc_ht=scontent-iad3-1.xx&oh=00_AYAhrFUOdgU7puAf1eS89zlwtjgUT2BPR4lsGDBppOsi8A&oe=66D6D825"}}
```

# .node-persist/storage/e1b89f5af4ba19517599eace338b038c

```
{"key":"528278703212910","value":{"id":"528278703212910","link":"https://www.facebook.com/marketplace/item/528278703212910","title":"Selling a GIANT Bicycle.","price":"A$100","image":"https://scontent-iad3-2.xx.fbcdn.net/v/t45.5328-4/457332227_1192528338690307_7027977086747660425_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=_PU_eQ7tI_sQ7kNvgGM3aFe&_nc_ht=scontent-iad3-2.xx&oh=00_AYB5xm0o8-ZeQSeYoKANvxYMH-iQpR6DJSQ6ZB6Ybi4gYw&oe=66D6D925"}}
```

# .node-persist/storage/df7c1a86b16347aceca31aec9296b1a1

```
{"key":"1511403426146147","value":{"id":"1511403426146147","link":"https://www.facebook.com/marketplace/item/1511403426146147","title":"2003 Lincoln Town Car · Cartier L Sedan 4D","price":"$1,500","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/457524839_522654896972079_221084747913885438_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s261x260&_nc_cat=108&ccb=1-7&_nc_sid=454cf4&_nc_ohc=g59b6nddC-cQ7kNvgGY-Ifk&_nc_ht=scontent-lga3-1.xx&oh=00_AYBbChgomNdm-WV8iUALTQLPi6ScHDbDjb5Qb_vQ5Gwvzg&oe=66D70A85"}}
```

# .node-persist/storage/ddcaa637418901c6ed21dc48568f0117

```
{"key":"885140869621107","value":{"id":"885140869621107","link":"https://www.facebook.com/marketplace/item/885140869621107","title":"2006 Honda Civic · DX Sedan 4D","price":"$4,000","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/457317607_122135378264322711_544454152203311417_n.jpg?stp=c256.0.1537.1537a_dst-jpg_s261x260&_nc_cat=106&ccb=1-7&_nc_sid=454cf4&_nc_ohc=qkn_Q530UXEQ7kNvgF1Yt8r&_nc_ht=scontent-lga3-1.xx&oh=00_AYAkkF-KgvDc8s4qwmvxO6zv8YHO5N7byz-pxP1aObr4kQ&oe=66D6F050"}}
```

# .node-persist/storage/da1b8fdd26e4d7cbc4367e2f4fe8cffa

```
{"key":"1044909997284388","value":{"id":"1044909997284388","link":"https://www.facebook.com/marketplace/item/1044909997284388","title":"REID cruiser bicycle with basket bike","price":"A$250","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457210947_3654144171516289_899823468156401925_n.jpg?stp=c101.0.260.260a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=h-YES0FMno0Q7kNvgFIYYTu&_nc_ht=scontent-iad3-1.xx&oh=00_AYDnaigHaNcqx4REExf33LkRMi79yVCb-zo9HfUQpgR7xg&oe=66D70C81"}}
```

# .node-persist/storage/d6def01f081328ed5bedbea732d658f5

```
{"key":"1899578347208182","value":{"id":"1899578347208182","link":"https://www.facebook.com/marketplace/item/1899578347208182","title":"Bikes x 2","price":"A$0","image":"https://scontent.fosu2-1.fna.fbcdn.net/v/t45.5328-4/457645872_8297539613647851_319742047526385809_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=zPLB38gR-ZoQ7kNvgHbtS5x&_nc_ht=scontent.fosu2-1.fna&oh=00_AYAd-KFf2XHNmrWMi_NH_BwrNwHqX5XnaZ7gDuWKXnrwuA&oe=66D70971"}}
```

# .node-persist/storage/cf13bea3969029ec01826f28b8832649

```
{"key":"1029543645620185","value":{"id":"1029543645620185","link":"https://www.facebook.com/marketplace/item/1029543645620185","title":"Dorel Ladies Bike for Sale- 26”","price":"A$50","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457265710_833410902248812_627797839891485525_n.jpg?stp=c151.0.260.260a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=0hBn1Ko9Tr4Q7kNvgHlRN7b&_nc_ht=scontent-iad3-1.xx&oh=00_AYDhDnJG2wTaDBodAKUKuKfKVKQQ2JEdGuoWy9PNd3YOoQ&oe=66D6E5BD"}}
```

# .node-persist/storage/c8d2d403967fbb65d772077fb7560899

```
{"key":"413327057990892","value":{"id":"413327057990892","link":"https://www.facebook.com/marketplace/item/413327057990892","title":"Cannondale Synapse Endurance Bike","price":"A$900","image":"https://scontent.fosu2-1.fna.fbcdn.net/v/t45.5328-4/456980756_1173112270649747_5618645265550114570_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=ps-DGYZ82EAQ7kNvgE-v6yy&_nc_ht=scontent.fosu2-1.fna&oh=00_AYD1bclCAu81igffN_DvdIYN5uFdwYR1PgNwoY21uB6W_g&oe=66D6E0E3"}}
```

# .node-persist/storage/c899f745022741819866b5bcb2096f94

```
{"key":"1226937331796316","value":{"id":"1226937331796316","link":"https://www.facebook.com/marketplace/item/1226937331796316","title":"2002 mercury mountaineer","price":"$1,600","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t45.5328-4/456846502_7937200633000415_4097524190915330720_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_aid=0&_nc_ohc=5SIQif4tngMQ7kNvgGDnFO1&_nc_ht=scontent-lga3-1.xx&oh=00_AYBX-M3oU6YhU-wpUj8KPYc8tLvVZGgVBzxV6J-PNmL6-g&oe=66D6DB6B"}}
```

# .node-persist/storage/c1446304eb9766c62081521bc8c75932

```
{"key":"520568093788763","value":{"id":"520568093788763","link":"https://www.facebook.com/marketplace/item/520568093788763","title":"2016 Kia Soul · Wagon 4D","price":"$3,800","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/457394287_1089311419194041_78621419204352903_n.jpg?stp=c198.0.1204.1204a_dst-jpg_s261x260&_nc_cat=103&ccb=1-7&_nc_sid=454cf4&_nc_ohc=P71P0IoeXI8Q7kNvgFukxe8&_nc_ht=scontent-lga3-1.xx&oh=00_AYChn9BNcIzEIi74J4jEjq1JI7hATpg6eV-JbpnxYW4RPw&oe=66D6F6D2"}}
```

# .node-persist/storage/b9b73f2abb75afcacb65ae1a5e06b9f9

```
{"key":"1036507204777978","value":{"id":"1036507204777978","link":"https://www.facebook.com/marketplace/item/1036507204777978","title":"2006 Mercedes-Benz CLS-Class · CLS 500 Coupe 4D","price":"$1,500","image":"https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/457321492_2782342521929175_3898738708693853824_n.jpg?stp=c256.0.1537.1537a_dst-jpg_s261x260&_nc_cat=105&ccb=1-7&_nc_sid=454cf4&_nc_ohc=OBmqRNid7PEQ7kNvgGj0W7V&_nc_ht=scontent-lga3-2.xx&oh=00_AYBLxTtQkQeiavN-KqS1T0WMITXw_QsZJtzBVdUfT_o61A&oe=66D6E437"}}
```

# .node-persist/storage/b015b1330dab741c55426d60b069341c

```
{"key":"1659161378213021","value":{"id":"1659161378213021","link":"https://www.facebook.com/marketplace/item/1659161378213021","title":"Used electric bicycle","price":"A$250","image":"https://scontent.fosu2-2.fna.fbcdn.net/v/t45.5328-4/457460798_3776846095921807_5565883585096611972_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=1I6js2Kbe6wQ7kNvgEsDxtH&_nc_ht=scontent.fosu2-2.fna&oh=00_AYA6_cQp8lhSf4cYOMIHFXNzr-lKQbxwJyfn5V-hdVnkhQ&oe=66D6DB32"}}
```

# .node-persist/storage/a4b123b2727f6580f1442deef1889a25

```
{"key":"485190411043414","value":{"id":"485190411043414","link":"https://www.facebook.com/marketplace/item/485190411043414","title":"2006 Kia Sedona · Xle ","price":"$2,400","image":"https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/457691585_531713182572929_7952832974997011882_n.jpg?stp=c0.169.1537.1537a_dst-jpg_s261x260&_nc_cat=100&ccb=1-7&_nc_sid=946e27&_nc_ohc=1JfMGQihvPsQ7kNvgG7NaIm&_nc_ht=scontent-lga3-2.xx&oh=00_AYCWpKHipHho1uerp9yX9xBG_RznCOllnHJwV4fInlmyvA&oe=66D6D9B5"}}
```

# .node-persist/storage/a48806b4b59befdeff9e2fe80b3bae9f

```
{"key":"486627924084699","value":{"id":"486627924084699","link":"https://www.facebook.com/marketplace/item/486627924084699","title":"2006 Lexus RX · RX 330 Sport Utility 4D","price":"$3,500","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/457450060_8210670372381380_113268741822135538_n.jpg?stp=c256.0.1537.1537a_dst-jpg_s261x260&_nc_cat=108&ccb=1-7&_nc_sid=454cf4&_nc_ohc=Yj6egNCK5zgQ7kNvgHb89CY&_nc_ht=scontent-lga3-1.xx&oh=00_AYD3bLcroYUzSS9m4Sjy2nHp2OTmfpXVPVWriUNhlQRkwg&oe=66D70280"}}
```

# .node-persist/storage/a3a2c3398b2226bcd27e9a2689748057

```
{"key":"1024817552360433","value":{"id":"1024817552360433","link":"https://www.facebook.com/marketplace/item/1024817552360433","title":"Repco road bike","price":"A$95","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457278448_591369663217325_504795930536183021_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=15TsoD477A0Q7kNvgGOgmks&_nc_ht=scontent-iad3-1.xx&oh=00_AYCNqrIwLo2RpZvMU0r2bMiiilzeFnRTtCOXf-LBo_QwXA&oe=66D6F496"}}
```

# .node-persist/storage/a39d83b08f3c28ff05ac83a127dedad6

```
{"key":"879632620717359","value":{"id":"879632620717359","link":"https://www.facebook.com/marketplace/item/879632620717359","title":"2003 Toyota Camry · LE Sedan 4D","price":"$2,900","image":"https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/457367955_1209706766895652_6967707108453942858_n.jpg?stp=c256.0.1537.1537a_dst-jpg_s261x260&_nc_cat=107&ccb=1-7&_nc_sid=454cf4&_nc_ohc=GuIC9cUBIwIQ7kNvgG7ABhy&_nc_ht=scontent-lga3-2.xx&oh=00_AYBWQo0cFcjhaeW7IbO8U2XUDB2HUOUNZDNSZatjLxNdiA&oe=66D6F966"}}
```

# .node-persist/storage/a2c304c68438287f28479e6e247ced55

```
{"key":"429526050236627","value":{"id":"429526050236627","link":"https://www.facebook.com/marketplace/item/429526050236627","title":"Women's bike XDS \ns/m size Pickup North Curl Curl","price":"A$130","image":"https://scontent.fosu2-1.fna.fbcdn.net/v/t45.5328-4/457460889_2826149467541918_8304892581363095179_n.jpg?stp=c100.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=iabvxoa-IvUQ7kNvgHwyBKv&_nc_ht=scontent.fosu2-1.fna&oh=00_AYDpwrF6ncN3tdIqYgvF2tbbVj4e_qzEhaIJPjq2yeTQjg&oe=66D7075B"}}
```

# .node-persist/storage/9dd09b4186a57d6c6a94e36f8c78d136

```
{"key":"873272854245851","value":{"id":"873272854245851","link":"https://www.facebook.com/marketplace/item/873272854245851","title":"Mitsubishi 2000 mirage","price":"$1,250","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t45.5328-4/457576447_525391436840198_7083144216174483393_n.jpg?stp=c0.42.261.261a_dst-jpg_p261x260&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=QM5BraDoCz8Q7kNvgFI9WeL&_nc_ht=scontent-lga3-1.xx&oh=00_AYCB8hnXva9ZG7BAzetbbx7p9FUZ6sYiy_dLhahTa_HQJA&oe=66D7025D"}}
```

# .node-persist/storage/99c61369910a3a768483823d101f872d

```
{"key":"1680855876005023","value":{"id":"1680855876005023","link":"https://www.facebook.com/marketplace/item/1680855876005023","title":"27\" inch men adult bike Reid","price":"A$100","image":"https://scontent-iad3-2.xx.fbcdn.net/v/t45.5328-4/457614661_1509715189934737_496406576302053267_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=GVpFCJfIUlsQ7kNvgElxxiT&_nc_ht=scontent-iad3-2.xx&oh=00_AYC4Nh1GHXWsaQH5iXTIcQVxqAXNrtxk6r4MRa9laD4gSw&oe=66D6F4CC"}}
```

# .node-persist/storage/97ffbcf4cbff9b172e94c055f15c8033

```
{"key":"1273079280792232","value":{"id":"1273079280792232","link":"https://www.facebook.com/marketplace/item/1273079280792232","title":"2016 Honda Honda Accord EX-L Sedan 4D","price":"$2,900","image":"https://scontent-lga3-2.xx.fbcdn.net/v/t45.5328-4/457357847_1705040093604240_1691140503480674246_n.jpg?stp=c45.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=4OqU6dqpCJYQ7kNvgH2AUUH&_nc_ht=scontent-lga3-2.xx&oh=00_AYBubrM-PHVfYOlrLE-MyJ3hW_lDGpnuNAq9x-oKVLydBA&oe=66D6E6DB"}}
```

# .node-persist/storage/95111b9bc3f8f60032757d1eb42db638

```
{"key":"1887785408397022","value":{"id":"1887785408397022","link":"https://www.facebook.com/marketplace/item/1887785408397022","title":"Bicycle","price":"A$30","image":"https://scontent-iad3-2.xx.fbcdn.net/v/t45.5328-4/457409316_532298589144921_6732519351999471078_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=8I0LsM42TKUQ7kNvgHGaOL2&_nc_ht=scontent-iad3-2.xx&oh=00_AYAhorbg54Ba5xJyyKWAAhow8h57PX5ebXPvDUm2jMXe3A&oe=66D703DA"}}
```

# .node-persist/storage/918066dcaba59fd7d43d49b4d4526803

```
{"key":"1198860584572080","value":{"id":"1198860584572080","link":"https://www.facebook.com/marketplace/item/1198860584572080","title":"REVER BICYCLE","price":"A$1,799","image":"https://scontent-iad3-2.xx.fbcdn.net/v/t45.5328-4/457569057_1042190837371132_4338959663963441508_n.jpg?stp=c0.152.261.261a_dst-jpg_p261x260&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=SoDZ90kJdHkQ7kNvgGcErNU&_nc_ht=scontent-iad3-2.xx&oh=00_AYAm4lD5SXfczohIiZB3LuuID35cZQL5ww0zKWiCblOpjw&oe=66D7002A"}}
```

# .node-persist/storage/9157a1d699031916254c2e68978c9d72

```
{"key":"2062131214184648","value":{"id":"2062131214184648","link":"https://www.facebook.com/marketplace/item/2062131214184648","title":"Bicycle trailer","price":"A$79","image":"https://scontent-iad3-2.xx.fbcdn.net/v/t45.5328-4/457087512_1252196262614936_5322047818442949659_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=hmqRuT7ukPAQ7kNvgFqSEiS&_nc_ht=scontent-iad3-2.xx&oh=00_AYCOfk-fz1TDHf-pUzXVFJHSTFQYmNf3o2bKEcGbHpkUsA&oe=66D6D6CD"}}
```

# .node-persist/storage/8dbe03be98a00639c5a08e1263ca5786

```
{"key":"533640062384654","value":{"id":"533640062384654","link":"https://www.facebook.com/marketplace/item/533640062384654","title":"Bmx","price":"A$150","image":"https://scontent-iad3-2.xx.fbcdn.net/v/t45.5328-4/456938337_332597796513979_3412765292288134889_n.jpg?stp=c100.0.260.260a_dst-jpg_p261x260&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=4cFGE_37yrYQ7kNvgFRICMl&_nc_ht=scontent-iad3-2.xx&oh=00_AYAIkHrgwn1RAEbYivk7X90iZRov-94x1Y5RB-F1lKkU1A&oe=66D6FD0E"}}
```

# .node-persist/storage/8ccb3e51003d3ac0e351cec2a05bd86c

```
{"key":"870466621332358","value":{"id":"870466621332358","link":"https://www.facebook.com/marketplace/item/870466621332358","title":"2009 Honda  Civic · Dx sedan ","price":"$4,200","image":"https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/457380744_122135384768322711_8166197401245988572_n.jpg?stp=c256.0.1537.1537a_dst-jpg_s261x260&_nc_cat=109&ccb=1-7&_nc_sid=454cf4&_nc_ohc=br88n-RPsl4Q7kNvgGRP3aC&_nc_ht=scontent-lga3-2.xx&oh=00_AYCJOQjinAM6TCh4dr2dP3uUPZkyPm3rCR8RXUBHCxSXrQ&oe=66D6ECE6"}}
```

# .node-persist/storage/7c5907dfae98dc00c94a1c20eb2ef8b4

```
{"key":"1203170197629056","value":{"id":"1203170197629056","link":"https://www.facebook.com/marketplace/item/1203170197629056","title":"Vintage bicycle Gazelle for project or spares","price":"A$50","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457419705_1918003268682995_3466665656538657865_n.jpg?stp=c101.0.260.260a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=py9sD_SiUHsQ7kNvgFHRCck&_nc_ht=scontent-iad3-1.xx&oh=00_AYBhW-hju0e9NVOhTBbIPa_AaR1k4mFkHDoV226lwGzz5g&oe=66D6DB3D"}}
```

# .node-persist/storage/7c34dcc659e14adf01672ab8770f6409

```
{"key":"1247165536697492","value":{"id":"1247165536697492","link":"https://www.facebook.com/marketplace/item/1247165536697492","title":"2011 Mazda MAZDA MAZDA2 · Sport Hatchback 4D","price":"$3,900","image":"https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/457364404_4017252011842920_6793865420930445388_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s261x260&_nc_cat=100&ccb=1-7&_nc_sid=454cf4&_nc_ohc=GR8-XBc1gaUQ7kNvgGT39eK&_nc_ht=scontent-lga3-2.xx&oh=00_AYAZlHxGHD-8gj5nb8mJEi2Fvnl5p5Wflm9o0XEnEe3xog&oe=66D70148"}}
```

# .node-persist/storage/5c4919ed438415ca614422881a500efd

```
{"key":"472152189141579","value":{"id":"472152189141579","link":"https://www.facebook.com/marketplace/item/472152189141579","title":"Electric bike bicycle","price":"A$2,000","image":"https://scontent.fosu2-1.fna.fbcdn.net/v/t45.5328-4/457297075_1078096520550374_7467582034003050141_n.jpg?stp=c231.0.260.260a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=d70P6bhtT4wQ7kNvgFTQffP&_nc_ht=scontent.fosu2-1.fna&oh=00_AYBIIXo693Fz7NQmcAGhCJn5fQjR8ynLsLp2FnPG6m_Z6g&oe=66D6E8C1"}}
```

# .node-persist/storage/5ade8e8e8fb78d8b2aa22fe29bef0797

```
{"key":"8014682018650415","value":{"id":"8014682018650415","link":"https://www.facebook.com/marketplace/item/8014682018650415","title":"2007 BMW 3 Series · 328i Sedan 4D","price":"$2,800","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/457333928_355771007600424_9132777703742197678_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s261x260&_nc_cat=106&ccb=1-7&_nc_sid=454cf4&_nc_ohc=S1OncscEkFEQ7kNvgGDogs_&_nc_ht=scontent-lga3-1.xx&oh=00_AYAlTCj6ooBr9XXgD7F1Obl3v48sC_D-9JlJJlHHZAhJNw&oe=66D6EA42"}}
```

# .node-persist/storage/5a928859f9594663c3c60f3dd1a0dd72

```
{"key":"484410071237246","value":{"id":"484410071237246","link":"https://www.facebook.com/marketplace/item/484410071237246","title":"2006 Audi A3 2.0T Wagon 4D","price":"$0","image":"https://scontent-lga3-2.xx.fbcdn.net/v/t45.5328-4/457152925_880340987346240_1989378938835324953_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=a4hC8E7O0iQQ7kNvgHAzbyh&_nc_ht=scontent-lga3-2.xx&oh=00_AYD8G9-8uvCgQelYOIL17TNdEbqz-f7e_2alDuzWru9aDw&oe=66D6FAE2"}}
```

# .node-persist/storage/597ce531acd02df24566d7dee7adfdb0

```
{"key":"1497385101147273","value":{"id":"1497385101147273","link":"https://www.facebook.com/marketplace/item/1497385101147273","title":"Vintage Holland Cruiser Bike","price":"A$50","image":"https://scontent.fosu2-1.fna.fbcdn.net/v/t45.5328-4/457019139_1034868004484918_8687252812557356822_n.jpg?stp=c42.0.260.260a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=pNsGAUOg6Z4Q7kNvgEI8lhu&_nc_ht=scontent.fosu2-1.fna&oh=00_AYCzlAQy7cC67P8ZyK0Cz0gO8NeipXvlILYbKobLllNw7w&oe=66D6D939"}}
```

# .node-persist/storage/57a1e699fe6c23b0f4abc3fe74174517

```
{"key":"867703411964738","value":{"id":"867703411964738","link":"https://www.facebook.com/marketplace/item/867703411964738","title":"Reid Explorer 20' Bicycle","price":"A$60","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/426856482_24884271561218182_8020387990590051310_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=f0TEZYlLXnoQ7kNvgE2vBE3&_nc_ht=scontent-iad3-1.xx&oh=00_AYCUM_Uv3VnusfV6EQMonnbNorpFGCnyqxg_gxhV0GvzDQ&oe=66D6F6A2"}}
```

# .node-persist/storage/55656a75cae5d96251466e65da5e2bb5

```
{"key":"1211495600131826","value":{"id":"1211495600131826","link":"https://www.facebook.com/marketplace/item/1211495600131826","title":"2010 Honda Civic · EX Sedan 4D","price":"$5,000","image":"https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/457326071_122125919396352328_6389875007245858098_n.jpg?stp=c0.119.1079.1079a_dst-jpg_s261x260&_nc_cat=109&ccb=1-7&_nc_sid=454cf4&_nc_ohc=Ax8TZkKShqMQ7kNvgGv16jM&_nc_ht=scontent-lga3-2.xx&oh=00_AYBPJVUwcRXKDGvhUQa6gi2jRurmodDcNM6romzupaG40A&oe=66D6FFB2"}}
```

# .node-persist/storage/5269710b58d0395e0d56348526b08a01

```
{"key":"422027870426119","value":{"id":"422027870426119","link":"https://www.facebook.com/marketplace/item/422027870426119","title":"Vintage bike","price":"A$50","image":"https://scontent.fosu2-2.fna.fbcdn.net/v/t45.5328-4/457617204_427242346452916_1999345804802053291_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=i1XKfqPvm2kQ7kNvgEPrSDb&_nc_ht=scontent.fosu2-2.fna&oh=00_AYARLI1vZ1FbueV85xCX7qMj0crpf1k5woQEvuGAC5MkoA&oe=66D6FAEB"}}
```

# .node-persist/storage/4b89a5d68bc9c59563614a9416106be5

```
{"key":"1181807793079111","value":{"id":"1181807793079111","link":"https://www.facebook.com/marketplace/item/1181807793079111","title":"2012 Honda Accord · EX-L Sedan 4D","price":"$2,200","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/457506805_2017636918669211_8839295285888509930_n.jpg?stp=c104.0.900.900a_dst-jpg_s261x260&_nc_cat=106&ccb=1-7&_nc_sid=454cf4&_nc_ohc=9sPUxpshC7cQ7kNvgFweqHI&_nc_ht=scontent-lga3-1.xx&oh=00_AYA1qWkArj7pyKvdH8mo9xqQDTOzczO0xxeOVibLMxOpoQ&oe=66D6E36F"}}
```

# .node-persist/storage/47f7a0e9085ad0f0af8747ae1776161e

```
{"key":"976065870940740","value":{"id":"976065870940740","link":"https://www.facebook.com/marketplace/item/976065870940740","title":"Chapelli Commuter Bicycle","price":"A$100","image":"https://scontent.fosu2-2.fna.fbcdn.net/v/t45.5328-4/457334943_787565616648709_1815438026931291365_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=tdeSjDXc6WQQ7kNvgEO-SY9&_nc_ht=scontent.fosu2-2.fna&oh=00_AYBP6g-s9z6usRzNwR_1qQhK6ERcNoLYXyjflXspO3NbIQ&oe=66D6F64A"}}
```

# .node-persist/storage/47ef472b5b4ad94a439be39bab476986

```
{"key":"1278377103286224","value":{"id":"1278377103286224","link":"https://www.facebook.com/marketplace/item/1278377103286224","title":"1999 Volkswagen New Beetle · GLS Hatchback 2D","price":"$1,800","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/457363832_1353167815656852_6412278024948530219_n.jpg?stp=c0.169.1537.1537a_dst-jpg_s261x260&_nc_cat=106&ccb=1-7&_nc_sid=454cf4&_nc_ohc=O8SHfoumVI8Q7kNvgGGdgCZ&_nc_ht=scontent-lga3-1.xx&oh=00_AYBZCgl-ur0shyJAt-PaCL_ync2KNoB5tEIrbs58yNLW8Q&oe=66D70ABA"}}
```

# .node-persist/storage/3e94c46b4f6f9d9fc9a63eca0a17c906

```
{"key":"1171365773952935","value":{"id":"1171365773952935","link":"https://www.facebook.com/marketplace/item/1171365773952935","title":"Bicycle chain tension device","price":"A$15","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/453724949_862494208642031_4209555075316002204_n.jpg?stp=c65.0.260.260a_dst-jpg_p261x260&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=NzH8_VtfcrsQ7kNvgG9Kixa&_nc_ht=scontent-iad3-1.xx&oh=00_AYBNyj9oevcz4D3Cd8dzRe8GYaRDW4u9kpoCIm09FFlPNA&oe=66D6F496"}}
```

# .node-persist/storage/38bb2b40678f45e3d9be9d33a7849a2e

```
{"key":"1229542011802142","value":{"id":"1229542011802142","link":"https://www.facebook.com/marketplace/item/1229542011802142","title":"Bicyle","price":"A$50","image":"https://scontent.fosu2-1.fna.fbcdn.net/v/t45.5328-4/457332285_1085970439807666_6494333130549353610_n.jpg?stp=c0.159.261.261a_dst-jpg_p261x260&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=ctUF-ovNmegQ7kNvgHDvMwu&_nc_ht=scontent.fosu2-1.fna&oh=00_AYDlkWQNXb59eXe7Z4sC2XhMb12AH41ODoM-O3F4RipcUA&oe=66D6F89A"}}
```

# .node-persist/storage/317aa80d7ec610d2be62b8d44df40419

```
{"key":"542857894852885","value":{"id":"542857894852885","link":"https://www.facebook.com/marketplace/item/542857894852885","title":"2008 Mercedes-Benz C-Class · C 300 Luxury Sedan 4D","price":"$6,300","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/456962481_3966275850325670_5681115794480145224_n.jpg?stp=c0.169.1537.1537a_dst-jpg_s261x260&_nc_cat=111&ccb=1-7&_nc_sid=454cf4&_nc_ohc=LKvEWxvnAdgQ7kNvgHnZ6le&_nc_ht=scontent-lga3-1.xx&oh=00_AYCDQoAYwCRqg0mxw_JOqC5oZacK-6nTVq8Ta10e3h3EsA&oe=66D709D8"}}
```

# .node-persist/storage/2f89ab91d96b35d0a0b1c461147bf281

```
{"key":"1213937433385052","value":{"id":"1213937433385052","link":"https://www.facebook.com/marketplace/item/1213937433385052","title":"B-Twin Shimano Sora Womens XS road bike","price":"A$399","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457223259_835004315441209_5826677041192825925_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=upATcut0EkgQ7kNvgGHBwiM&_nc_ht=scontent-iad3-1.xx&oh=00_AYDKcs3zrTqH2xtKp44JBWSaNVM6pyRip_BbpkHYxNxyQg&oe=66D6E76B"}}
```

# .node-persist/storage/2c8d4b178865294899805008763576d8

```
{"key":"1179095913138669","value":{"id":"1179095913138669","link":"https://www.facebook.com/marketplace/item/1179095913138669","title":"2015 Nissan Altima · 2.5 S Sedan 4D","price":"$1,700","image":"https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/457327878_1243108943349221_4591603418044724279_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s261x260&_nc_cat=104&ccb=1-7&_nc_sid=454cf4&_nc_ohc=epUpouaU8HgQ7kNvgFhz5gY&_nc_ht=scontent-lga3-2.xx&oh=00_AYCbpdHjkX2JMq4FV4PoBYzN2aH5veMufGGr-0H5HxDxLA&oe=66D6F8E2"}}
```

# .node-persist/storage/20b74948eb002aff69b34bc2e117a96a

```
{"key":"481949088033827","value":{"id":"481949088033827","link":"https://www.facebook.com/marketplace/item/481949088033827","title":"Repco Cruiser Bike 66cm","price":"A$130","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457272416_1933621040449866_7598447222897713234_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=GB2_yxkucdkQ7kNvgFllaf2&_nc_ht=scontent-iad3-1.xx&oh=00_AYBTT49uxwpzAB0ebOYxwDB8YP15DaSiKwy0zsGt5fDWeA&oe=66D6EE3F"}}
```

# .node-persist/storage/1d46a1362b19e897247460178e8f94e6

```
{"key":"1224455325499899","value":{"id":"1224455325499899","link":"https://www.facebook.com/marketplace/item/1224455325499899","title":"2000 Toyota Solara · SE Coupe 2D","price":"$1,700","image":"https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/457212144_8217663488347716_2797120728793516447_n.jpg?stp=c0.169.1537.1537a_dst-jpg_s261x260&_nc_cat=106&ccb=1-7&_nc_sid=454cf4&_nc_ohc=8oEQEpnx0FoQ7kNvgHC9pTq&_nc_ht=scontent-lga3-1.xx&oh=00_AYD-7HF3RFlQCa63tOjyyjvw1o46tS1Pde8UejA_fFt5Ow&oe=66D6FFA9"}}
```

# .node-persist/storage/136519997890473f24ce9ece1e159cc6

```
{"key":"1020079539660012","value":{"id":"1020079539660012","link":"https://www.facebook.com/marketplace/item/1020079539660012","title":"Bicycle for toddlers","price":"A$350","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457339642_523803653663135_435669763107581601_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=Q3_77QuCifMQ7kNvgFqE8E8&_nc_ht=scontent-iad3-1.xx&oh=00_AYCRRXyn6JOgnAGM0RYJPsRGCl1oXcwymdsw9dFKWXRcoA&oe=66D6E623"}}
```

# .node-persist/storage/115e30bd34304c52e4dac7ff9d3d9178

```
{"key":"1929895850823665","value":{"id":"1929895850823665","link":"https://www.facebook.com/marketplace/item/1929895850823665","title":"2018 Toyota Mirai · Mirai","price":"$4,995","image":"https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/457440105_10226334670340568_3565084797073025597_n.jpg?stp=c253.0.1542.1542a_dst-jpg_s261x260&_nc_cat=109&ccb=1-7&_nc_sid=454cf4&_nc_ohc=pZDdIdpyRfIQ7kNvgHKHCT5&_nc_ht=scontent-lga3-2.xx&oh=00_AYDP4HP6f9RgqayPv83HpqAkPWLoVq_dl-IcF6eMw1MTLw&oe=66D6F115"}}
```

# .node-persist/storage/0efe7c809fea30bfbbf7f49e04e766b1

```
{"key":"552768437238180","value":{"id":"552768437238180","link":"https://www.facebook.com/marketplace/item/552768437238180","title":"Byk e350 childrens/kids bicycle, 95-117cm, 18 inch wheels, white/blue","price":"A$140","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457412114_1167041011045550_1650751521016439173_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=9ARaXi8U2fUQ7kNvgGY-2f3&_nc_ht=scontent-iad3-1.xx&oh=00_AYByD0TPiouabZDHWI0PWS6DuhENmyGUI5CAmFGfb2-tsw&oe=66D6E43D"}}
```

# .node-persist/storage/0a0588e45a2362340e77b943f3e6fe3e

```
{"key":"526130186757219","value":{"id":"526130186757219","link":"https://www.facebook.com/marketplace/item/526130186757219","title":"Giant Roam XR2 - Hybrid Hardtail Bike","price":"A$350","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457203178_524582523395258_449637288206824861_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=9Kq-PG02qWsQ7kNvgF4zEGC&_nc_ht=scontent-iad3-1.xx&oh=00_AYAqTKRsG4QVOF9fH4FuRUsPBS0u9yvyXiRWF3RUL3d0sg&oe=66D70D5F"}}
```

# .node-persist/storage/081ff82a4c427472d6248d5fc1eca5a3

```
{"key":"1312162546855997","value":{"id":"1312162546855997","link":"https://www.facebook.com/marketplace/item/1312162546855997","title":"Fat Boy Bike","price":"A$220","image":"https://scontent-iad3-2.xx.fbcdn.net/v/t45.5328-4/457135920_727400256192198_5655529215458565088_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=E-a85eb_piUQ7kNvgHh5k_x&_nc_ht=scontent-iad3-2.xx&oh=00_AYDcMoyZxn8xMYNPjBp9QRqY5SNcEigvN7WF8zJcO6jOHw&oe=66D6F799"}}
```

# .node-persist/storage/0761ac651db6a083049c486c818b447d

```
{"key":"1011182910745836","value":{"id":"1011182910745836","link":"https://www.facebook.com/marketplace/item/1011182910745836","title":"Crest 70cm mountain bike","price":"A$79","image":"https://scontent-iad3-2.xx.fbcdn.net/v/t45.5328-4/457499160_1043268593470251_7758475515732436442_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=BwYwdpE4AC4Q7kNvgHujGpw&_nc_ht=scontent-iad3-2.xx&oh=00_AYAr7GULLIW3pKlYlQU6GZsugXGJeE7VokUpGYEq8dLIGg&oe=66D6D938"}}
```

# .node-persist/storage/04eccc4e03d2bc7e2685c34c084a3381

```
{"key":"4056643831230224","value":{"id":"4056643831230224","link":"https://www.facebook.com/marketplace/item/4056643831230224","title":"Bicycle","price":"A$30","image":"https://scontent-iad3-1.xx.fbcdn.net/v/t45.5328-4/457093382_1769359083594743_1858525889310077278_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=j5d-t5GBkRsQ7kNvgE1aPy2&_nc_ht=scontent-iad3-1.xx&oh=00_AYD4lxD_OjARY6ex4m43wRLxT4QGCKIXxklCiQYltqPAYA&oe=66D6DB32"}}
```

