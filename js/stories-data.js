// Story页面数据配置
const storiesData = {
    '1': {
        id: '1',
        title: 'The Mercersburg Academy Chapel',
        sections: [
            {
                title: 'About This Historic Site',
                type: 'about',
                color: '#8B4513',
                content: [
                    'This magnificent American Gothic Chapel, located on the Mercersburg Academy campus, was designed by Ralph Adams Cram and built between 1924 and 1925. It features exquisite stained glass windows and oak carvings that bear thistle and mae motifs as memorials to the men who lost their lives in World War I. Carillon recitals on the forty-nine bell carillon in Barker Tower are given weekly on Sundays at 3:00 P.M. when school is in session.'
                ]
            },
            {
                title: 'Did You Know?',
                type: 'facts',
                color: '#228B22',
                items: [
                    { icon: 'building', text: 'The chapel took over two years to build and required craftsmen from all over the country.' },
                    { icon: 'bell', text: 'The bells in the tower ring every hour and can be heard throughout the town.' },
                    { icon: 'palette', text: 'The stained glass windows tell stories from the Bible and feature over 10,000 individual pieces of glass.' }
                ]
            },
            {
                title: 'Buchanan\'s Log Cabin',
                type: 'about',
                color: '#8B4513',
                content: [
                    'Near the chapel, you might spot a small log cabin. This is a replica of the birthplace of JamesBuchanan, the 15th President of the United States, who was born in a cabin near Mercersburg in1791!',
                    'lmagine living in a log cabin like this one. lt was much smaller than most houses today, with justone or two rooms. Families would cook, eat, sleep, and spend time together all in this small space.There was no electricity, no running water, and no internet-life was very different back then!'
                ]
            },
            {
                title: 'Think About It!',
                type: 'questions',
                color: '#FF8C00',
                questions: [
                    'How do you think students felt when they first saw this beautiful chapel being built in 1928?',
                    'What would be the hardest part about living in a log cabin like President Buchanan\'s?',
                    'Why do you think buildings like this chapel were made so beautiful and grand?'
                ]
            },
            {
                title: 'Architectural Details',
                type: 'about',
                color: '#8B4513',
                content: [
                    'The Gothic Revival style of the chapel features pointed arches, ribbed vaults, and flying buttresses.all architectural elements that were first used in medieval European cathedrals over 800 yearsago! Look for these details:'
                ],
                items: [
                    'The steep, pointed roof that reaches toward the sky',
                    'Gargoyles and grotesques carved into the stonework (they were originally designed to drain rainwater!)',
                    'The rose window above the main entrance',
                    'Stone carvings of leaves, flowers, and religious symbols'
                ]
            }
        ]
    },
    '2': {
        id: '2',
        title: 'The Buchanan Hotel',
        sections: [
            {
                title: 'About This Historic Site',
                type: 'about',
                color: '#FF8C00',
                content: [
                    'James Buchanan, Sr., erected this large brick house in 1796, and it is where his son, future President James Buchanan, spent his boyhood. The McAfee brothers later purchased the house, enlarged it in the Italianate style, and converted it into a hotel, which was ultimately named The James Buchanan Hotel by Jack McLaughlin'
                ]
            },
            {
                title: 'Harriet\'s Accomplishments',
                type: 'facts',
                color: '#228B22',
                items: [
                    { icon: 'star', text: 'She convinced Congress to purchase the first painting for what would become the NationalGallery of Art in Washington, D.c.' },
                    { icon: 'music', text: 'Harriet invited famous musicians to perform at the White House, making it a center for artsand culture.' },
                    { icon: 'globe', text: 'She accompanied her uncle on diplomatic trips to England and became friends with QueenVictoria!' },
                    { icon: 'heart', text: 'After leaving the White House, she devoted her life to helping orphaned children andimproving hospitals.' }
                ]
            },
            {
                title: 'The House and Its Features',
                type: 'about',
                color: '#8B4513',
                content: [
                    'Built in the Federal style of architecture, this house features elegant proportions, symmetricalwindows, and decorative details that were popular in the early 1800s. The brick construction andwhite-painted trim give it a distinguished appearance that reflects Harriet Lane\'s high socialstanding.',
                    'Inside, the home would have been furnished with fine furniture, elegant wallpaper, and the latestconveniences of the time. Harriet was known for her impeccable taste and sophisticated style,which she developed while living in this house before moving to the White House.'
                ]
            },
            {
                title: 'Fun Historical Facts',
                type: 'facts-highlight',
                color: '#FF8C00',
                items: [
                    { icon: 'flowers', title: 'Harriet\'s Fashion Influence', text: 'Harriet Lane was such a fashion icon that clothing styles and even a flower were named after her!\n' +
                            'Women across America copied her dresses and hairstyles.' },
                    { icon: 'ship', title: 'A Ship Named in Her Honor', text: 'The U.S. Revenue Cutter "Harriet Lane" was the first ship named after a woman to see combat inthe Civil War!' },
                    { icon: 'legacy', title: 'Lasting Legacy', text: 'The famous Harriet Lane Outpatient Center at Johns Hopkins Hospital in Baltimore was madepossible by her generous charitable donations.' }
                ]
            },
            {
                title: 'Life in Pre-Civil War America',
                type: 'about',
                color: '#8B4513',
                content: [
                    'Harriet Lane lived during one of the most turbulent times in American history. As first Lady from1857-1861, she witnessed the nation moving toward the Civil War. Despite the growing tensionsshe worked hard to bring people together through social events and diplomacy.',
                    'After the Civil War began, Harriet devoted herself to caring for wounded soldiers and helpingfamilies affected by the war, Her compassion and dedication to helping others made her abeloved figure long after her time in the White House ended.'
                ]
            },
            {
                title: 'Think About It!',
                type: 'questions',
                color: '#8B4513',
                questions: [
                    'What qualities do you think made Harriet Lane such a successful First Lady? How are thesequalities still important for leaders today?',
                    'Harriet Lane helped start one of America\'s greatest art collections. Why do you think art andculture are important for a nation?',
                    'lf you could ask Harriet Lane one question about her experiences at the White House, what wouldit be?'
                ]
            }
        ]
    },
    '3': {
        id: '3',
        title: 'Buchanan Hotel',
        sections: [
            {
                title: 'The Historic Buchanan Hotel',
                type: 'about',
                color: '#8B4513',
                content: [
                    'Built in the mid-1800s, the Buchanan Hotel served as a vital gathering place for travelers.businessmen, and local residents, Named after President James Buchanan (who was born nearby)this hotel welcomed guests during an exciting time in American history.',
                    'The hotel featured elegant dining rooms, comfortable guest quarters, and a bustling lobby wherepeople would gather to discuss news, politics, and local events. in its heyday, staying at theBuchanan Hotel was considered the finest accommodation in town!'
                ]
            },
            {
                title: 'Life at a 19th Century Hotel',
                type: 'facts',
                color: '#228B22',
                items: [
                    { icon: 'bed', text: 'Guest rooms were heated by fireplaces or wood stoves—imagine having to keep a fire going all night!' },
                    { icon: 'dining', text: 'Meals were served family-style at long tables where strangers would sit together and share stories.' },
                    { icon: 'horse', text: 'Horses and carriages were kept in stables behind the hotel. There were no cars yet!' },
                    { icon: 'newspaper', text: 'The hotel lobby served as a gathering place where people could read newspapers and hear the latest news.' }
                ]
            },
            {
                title: 'Historical Significance',
                type: 'about',
                color: '#8B4513',
                content: [
                    'The Buchanan Hotel played an important role during the Civil War era. Mercersburg, being closeto the Mason-Dixon Line (the border between North and South), was in a strategic location, Thehotel hosted many important figures and witnessed significant historical moments.',
                    'During the Gettysburg Campaign of 1863, Confederate soldiers actually passed throughMercersburg on their way to the famous Battle of Gettysburg. Can you imagine soldiers inuniform walking down the same streets you\'re on today?'
                ]
            },
            {
                title: 'Fascinating Facts',
                type: 'facts-highlight',
                color: '#FF8C00',
                items: [
                    { icon: 'president', title: 'Presidential Connection', text: 'James Buchanan, America\'s 15th President, practiced law in Mercersburg before his politicalcareer. He likely visited this hotel many times!' },
                    { icon: 'entertainment', title: 'Entertainment Hub', text: 'The hotel\'s ballroom hosted dances, plays, and community gatherings. it was the social center oftown!' },
                    { icon: 'architecture', title: 'Architectural Marvel', text: 'Notice the hotel\'s brick construction and large windows. These were signs of a modern, upscaleestablishment in the 1800s.' }
                ]
            },
            {
                title: 'Think About It!',
                type: 'questions',
                color: '#8B4513',
                questions: [
                    'How would staying at a hotel in the 1800s be different from hotels today? What modern conveniences would you miss most?',
                    'Why do you think hotels were such important places in small towns during the 19th century?',
                    'If you were a traveler arriving by horse and carriage in 1860, what questions would you ask the hotel clerk?'
                ]
            }
        ]
    },
    '4': {
        id: '4',
        title: 'The Post Office',
        sections: [
            {
                title: 'About This Historic Site',
                type: 'about',
                color: '#8B4513',
                content: [
                    'This Colonial Revival-style building of locally quarried limestone with granite steps was dedicated in 1937 with Postmaster General James A. Farley as the principal speaker. Above the postmaster\'s office door is a relief work titled "Good News," sculpted by Joseph Nicolai, depicting a farmer and his wife.'
                ]
            },
            {
                title: 'How the Post Office Worked',
                type: 'facts',
                color: '#228B22',
                items: [
                    { icon: 'postmail', text: 'Mail arrived by stagecoach, then later by train. The postmaster would sort letters by handinto individual mailboxes.' },
                    { icon: 'clock', text: 'Each family had a locked brass mailbox in the wal. Only you had the key to your box!' },
                    { icon: 'mail', text: 'In the 1800s, postage was expensive! A letter cost about 25 cents-equivalent to $8 today!' },
                    { icon: 'email', text: 'The postmaster was one of the most important people in town, often knowing everyone\'sbusiness!' }
                ]
            },
            {
                title: 'The Post Office in American History',
                type: 'about',
                color: '#8B4513',
                content: [
                    'Did you know that Benjamin Franklin was America\'s first Postmaster General? He establishedmany of the postal routes and systems that are still used today! The U.S. Postal Service is actuallyolder than the United States itself-it was founded in 1775, before the Declaration ofIndependence was signed!',
                    'During the Civil War, this post office played a crucial role in keeping soldiers connected to theirfamilies. Letters from the front lines would arrive here, bringing joy, sadness, and hope to thefamilies of Mercersburg. lmagine the emotions people felt waiting for news of their loved ones!'
                ]
            },
            {
                title: 'Amazing Postal Facts',
                type: 'facts-highlight',
                color: '#FF8C00',
                items: [
                    { icon: 'horse', title: 'Pony Express', text: 'Before trains were common, the Pony Express used horseback riders to deliver mail acrossAmerica in just 10 days-an incredible speed for the 1860s!' },
                    { icon: 'postmail', title: 'Mail Call Excitement', text: 'The hotel\'s ballroom hosted dances, plays,Getting mail was so exciting that people would visit the post office multiple times a day, hopingfor a letter from distant relatives or friends!' },
                    { icon: 'holiday', title: 'Holiday Rush', text: 'Even in the 1800s, the post office would be incredibly busy during the holiday season, just liketoday!' }
                ]
            },
            {
                title: 'The Postmaster\'s Job',
                type: 'about',
                color: '#8B4513',
                content: [
                    'Being a postmaster was a position of great trust and responsibility. The postmaster had to:'
                ],
                items: [
                    'Sort all incoming mail by hand (no computers or machines!)',
                    'Keep track of postage accounts and money',
                    'Know the names and addresses of everyone in town',
                    'Protect the mail-it was a federal crime to interfere with the mail!',
                    'Serve as a gathering place for community news and information'
                ]
            },
            {
                title: 'From Letters to Email',
                type: 'about',
                color: '#228B22',
                content: [
                    'Think about how different communication is today! instead of waiting days or weeks for a letterto arrive, we can send messages instantly around the world. But something special was lost toothere\'s nothing quite like receiving a handwritten letter in the mail!',
                    'Many families saved letters from ancestors, and those letters help us understand what life was likein the past. Historians study old letters to learn about daily life, important events, and how peoplethought and felt. Your text messages probably won\'t be saved for future historians-but maybethey should be!'
                ]
            },
            {
                title: 'Think About It!',
                type: 'questions',
                color: '#8B4513',
                questions: [
                    'How would your life be different if you had to wait weeks to hear back from friends and family?' +
                    ' What would you miss most about instant communication?',
                    'Why do you think people saved old letters? What makes a handwritten letter special compared toa text message?',
                    'if you were the postmaster in 1860, what would be the most interesting part of your job? Themost challenging?'
                ]
            }
        ]
    },
    '5': {
        id: '5',
        title: 'The Johnston Tavern',
        sections: [
            {
                title: 'A Historic Gathering Place',
                type: 'about',
                color: '#8B4513',
                content: [
                    'The Johnston Tavern, built in the late 1700s, was one of the most important buildings in earlyMercersburg. A tavern in colonial times wasn\'t just a place to eat and drink-it was the socialcenter of the community, serving as a meeting hall, courthouse, post office, and even a place tohold elections!',
                    'This sturdy stone building has witnessed over 200 years of American history. lts thick limestonewalls, built by skilled craftsmen, have sheltered travelers, hosted important meetings, andprovided refuge during troubled times. lmagine all the stories these walls could tell!'
                ]
            },
            {
                title: 'Life at an 18th Century Tavern',
                type: 'facts',
                color: '#228B22',
                items: [
                    { icon: 'bed', text: 'Travelers would share rooms with complete strangers, sometimes sleeping 4-6 people in onebed!' },
                    { icon: 'dining', text: 'Meals were hearty and simple: stews, bread, cheese, and meat. The tavern keeper wouldserve everyone at long communal tables.' },
                    { icon: 'fire', text: 'Huge fireplaces provided heat and light. Candles were expensive, so people would gatheraround the fire at night.' },
                    { icon: 'newspaper', text: 'News traveled slowly! Travelers would share stories and newspapers, making taverns the"internet" of the 1700s.' }
                ]
            },
            {
                title: 'Historical Significance',
                type: 'about',
                color: '#333',
                content: [
                    'During the American Revolution and the early years of the United States, taverns like this oneplayed crucial roles in shaping our nation. Here\'s why the Johnston Tavern was so important:'
                ],
                items: [
                    'lt served as a stopover on the Great Philadelphia Wagon Road, a major route for settlersheading west',
                    'Local militia would meet here to organize and train',
                    'Town meetings and court sessions were held in the main room',
                    'During elections, citizens would gather here to vote and discuss politics',
                    'It provided shelter and supplies for travelers on the dangerous frontier'
                ],
                additionalContent: [
                    'Some historians believe that James Buchanan\'s father may have visited this tavern, as he lived andworked in the area before his son (the future president) was born!'
                ]
            },
            {
                title: 'Fascinating Tavern Tales',
                type: 'facts-highlight',
                color: '#228B22',
                items: [
                    { icon: 'swords', title: 'Revolutionary War Connection', text: 'The tavern would have been a gathering place where Patriots discussed independence and planned local defense during the Revolutionary War.' },
                    { icon: 'ballot', title: 'Early Democracy', text: 'This tavern was one of the places where early Americans exercised their right to vote, helping to establish democratic traditions.' },
                    { icon: 'stone', title: 'Stone Construction', text: 'The tavern\'s thick stone walls kept it cool in summer and warm in winter, and they helped protect it from fires that were common in colonial towns.' }
                ]
            },
            {
                title: 'The Tavern Keeper\'s Life',
                type: 'about',
                color: '#333',
                content: [
                    'Running a tavern was hard work! The tavern keeper and their family had to:'
                ],
                items: [
                    'Wake up before dawn to prepare breakfast for guests',
                    'Manage the stables and care for travelers\' horses',
                    'Cook all meals from scratch over an open fire',
                    'Make candles, soap, and other supplies by hand',
                    'Maintain order when rowdy travelers got out of hand',
                    'Keep detailed accounts of what each guest owed'
                ],
                additionalContent: [
                    'Despite the hard work, tavern keepers were often respected members of the community. Theyheard all the latest news, knew everyone who passed through town, and played important roles inlocal government and social life.'
                ]
            },
            {
                title: 'Architectural Features',
                type: 'about',
                color: '#228B22',
                content: [
                    'The johnston Tavern showcases typical colonial tavern architecture:'
                ],
                items: [
                    'Thick stone walls for insulation and fire protection',
                    'Small windows (glass was expensive and heat was precious!)',
                    'Low ceilings to conserve heat',
                    'Large central chimney with multiple fireplaces',
                    'Wide-plank wooden floors made from local timber',
                    'Hand-hewn beams supporting the structure'
                ]
            },
            {
                title: 'Think About It!',
                type: 'questions',
                color: '#FF8C00',
                questions: [
                    'How would you feel about sharing a room with strangers when traveling? What modernconveniences would you miss most?',
                    'Why do you think taverns were so important in early American communities? What buildingsserve similar purposes today?',
                    'If you could travel back in time to the Johnston Tavern in 1776, what would you want to see orexperience? Who would you want to meet?'
                ]
            }
        ]
    },
    '6': {
        id: '6',
        title: 'Presbyterian Church',
        sections: [
            {
                title: 'About This Historic Site',
                type: 'about',
                color: '#333',
                content: [
                    'Built in 1794, this Romanesque Revival style church of native limestone is known today as the Presbyterian Church of the Upper West Conococheague and replaced an earlier Scotch-Irish church that was disbanded due to Indian disturbance. The Church established Sunday School in 1816 and a prayer meeting in 1818.'
                ]
            },
            {
                title: 'Church Life in the 1800s',
                type: 'facts',
                color: '#228B22',
                items: [
                    { icon: 'church', text: 'Sunday services often lasted 2-3 hours! Sermons alone could be over an hour long.' },
                    { icon: 'music', text: 'Before organs and pianos, a "precentor" would lead hymn singing by voice alone, and the congregation would follow.' },
                    { icon: 'snow', text: 'Churches weren\'t heated in winter! Families would bring foot warmers filled with hot coals to stay warm.' },
                    { icon: 'people', text: 'Men and women often sat on opposite sides of the church. Children were expected to sit perfectly still and quiet!' }
                ]
            },
            {
                title: 'The Mercersburg Theology',
                type: 'about',
                color: '#333',
                content: [
                    'This church is famous for being the birthplace of "Mercersburg Theology," an importanttheological movement in American Presbyterianism. in the 1840s-1860s, two professors fromnearby Mercersburg Seminary-John Williamson Nevin and Philip Schaff-developed new ideasabout church history, worship, and Christian unity that influenced churches across America andEurope.'
                ],
                items: [
                    'The importance of historical tradition in worship',
                    'The unity of all Christian churches',
                    'The connection between past and present in faith',
                    'The sacramental life of the church'
                ]
            },
            {
                title: 'Historical Highlights',
                type: 'facts-highlight',
                color: '#FFD700',
                items: [
                    { icon: 'bell', title: 'The Church Bell', text: 'The bell in the steeple was cast in 1836 and weighs over 1,000 pounds. It has rung for nearly two centuries of services, celebrations, and important events.' },
                    { icon: 'book', title: 'Seminary Connection', text: 'The church was closely connected to the Mercersburg Theological Seminary, which trained ministers and influenced theological thought throughout America.' },
                    { icon: 'building', title: 'Greek Revival Architecture', text: 'The church\'s design reflects the Greek Revival style popular in the 1830s, with its columns, pediment, and classical proportions.' }
                ]
            },
            {
                title: 'Community Center',
                type: 'about',
                color: '#333',
                content: [
                    'In the 19th century, churches served as much more than places of worship. The PresbyterianChurch was the heart of community life in Mercersburg:'
                ],
                items: [
                    'Social gatherings, picnics, and community dinners brought people together',
                    'The church organized schools and educational programs before public schools existed',
                    'During the Civil War, the church coordinated relief efforts for soldiers and their families',
                    'Mission societies, formed by church members, helped the poor and supported charitablecauses',
                    'The church basement served as a gathering place for town meetings and civic events'
                ]
            },
            {
                title: 'The Civil War Era',
                type: 'about',
                color: '#228B22',
                content: [
                    'During the Civil War, the Presbyterian Church played a vital role in the community. Mercersburglocated near the Mason-Dixon Line, found itself caught between North and South. The church:'
                ],
                items: [
                    'Provided comfort to families worried about loved ones in battle',
                    'Organized care packages for soldiers from Mercersburg',
                    'Served as a temporary hospital after the Battle of Gettysburg in 1863',
                    'Helped heal the community\'s divisions after the war ended'
                ],
                additionalContent: [
                    'The church\'s message of reconciliation and unity helped Mercersburg recover from the trauma ofthe war and rebuild as a community.'
                ]
            },
            {
                title: 'Architectural Details',
                type: 'about',
                color: '#333',
                content: [
                    'As you look at the church, notice these special features:'
                ],
                items: [
                    'The tall white steeple pointing heavenward-a symbol of aspiration and faith',
                    'Brick laid in Flemish bond pattern (alternating short and long bricks)-a sign of qualitycraftsmanship',
                    'Large arched windows that flood the interior with natural light',
                    'The clock in the tower that has kept time for the town for over a century',
                    'Hand-carved wooden doors at the entrance',
                    'Interior balconies providing extra seating for large congregations'
                ]
            },
            {
                title: 'Think About It!',
                type: 'questions',
                color: '#FF8C00',
                questions: [
                    'How would sitting through a 3-hour church service in an unheated building compare to going toschool today? What does this tell us about people\'s dedication in the past?',
                    'Why do you think church steeples were built so tall? What purposes did they serve beyond justlooking beautiful?',
                    'The church helped heal the community after the Civil War. How can buildings and institutionsbring people together today?'
                ]
            }
        ]
    },
    '7': {
        id: '7',
        title: 'Irwin House / General Store',
        sections: [
            {
                title: 'The Heart of Commerce and Daily Life',
                type: 'about',
                color: '#8B4513',
                content: [
                    'The lrwin House and General Store represents the commercial heart of 19th-century Mercersburg.This combination of residence and business was typical of the time-merchants would liveupstairs or in the back of their stores, making their shops truly family businesses operating fromdawn to dusk, seven days a week!.',
                    'General stores like this one were magical places for children and adults alike. lmagine walkingthrough the door to find barrels of flour and sugar, jars of penny candy, bolts of colorful fabrickerosene lamps, farming tools, patent medicines, toys, books, and thousands of other itemseverything a family might need, all in one place!'
                ]
            },
            {
                title: 'Inside a 19th Century General Store',
                type: 'facts',
                color: '#859f4d',
                items: [
                    { icon: 'scale', text: 'Everything was sold in bulk! Customers would ask the storekeeper to measure out sugar,flour, coffee, and other goods from large barrels and bins.' },
                    { icon: 'money', text: 'Most families bought on credit, paying their bills once or twice a year after harvest. Thestorekeeper kept detailed ledgers of who owed what.' },
                    { icon: 'stove', text: 'A potbelly stove in the center provided heat in winter. Men would gather around it to play checkers and discuss local news' },
                    { icon: 'candy', text: 'Penny candy jars lined the counter-licorice, peppermints, horehound drops, and lemonsticks. A child\'s dream come true!' }
                ]
            },
            {
                title: 'What You Could Buy',
                type: 'about',
                color: '#fff',
                content: [
                    'A general store truly sold everything! Here\'s a glimpse of what you might find on the shelves:'
                ],
                columns: [
                    {
                        title: 'Food & Staples',
                        items: [
                            'Flour, sugar, coffee, tea',
                            'Salt pork, dried beans',
                            'Molasses, honey, preserves',
                            'Crackers and cheese',
                            'Spices and seasonings'
                        ]
                    },
                    {
                        title: 'Farm & Tools',
                        items: [
                            'Hammers, nails, saws',
                            'Rope and twine',
                            'Seeds for planting',
                            'Horseshoes',
                            'Buckets and barrels'
                        ]
                    },
                    {
                        title: 'Household Goods',
                        items: [
                            'Lamps and kerosene',
                            'Soap and washboards',
                            'Dishes and cooking pots',
                            'Fabric and sewing supplies',
                            'Candles and matches'
                        ]
                    },
                    {
                        title: 'Personal Items',
                        items: [
                            'Shoes and boots',
                            'Hats and bonnets',
                            'Buttons and thread',
                            'Books and newspapers',
                            'Patent medicines'
                        ]
                    }
                ]
            },
            {
                title: 'The Irwin Family Legacy',
                type: 'facts-highlight',
                color: '#faf7f0',
                items: [
                    { icon: 'family', title: 'Family Business', text: 'Running a general store was truly a family affair, Children would help stock shelves, sweep floors.and deliver goods. They learned math by making change and business skills by watching theirparents.' },
                    { icon: 'handshake', title: 'Community Trust', text: 'Storekeepers like the lrwins were pillars of the community. They extended credit to families inneed, offered advice, and knew everyone\'s personal business!' },
                    { icon: 'newspaper', title: 'Information Hub', text: 'Before radio or television, the general store was where people learned the news. Newspapersfrom distant cities would arrive, and people would gather to hear the latest developments.' }
                ]
            },
            {
                title: 'A Day in the Life',
                type: 'about',
                color: '#fff',
                content: [
                    'Imagine a typical day at the lrwin General Store in the 1880s:'
                ],
                timeline: [
                    { time: '6:00 AM', text: 'The storekeeper lights the lamps and stokes the stove. Time to open for business!' },
                    { time: '7:00 AM', text: 'Farmers stop in before heading to their fields, picking up supplies and catching up onnews.' },
                    { time: '10:00 AM', text: 'Women arrive to shop for fabric and thread, discussing patterns for new dresses. Children press their noses against the candy jar.' },
                    { time: '12:00 PM', text: 'The midday rush! People grab quick lunch items-crackers, cheese, and pickles fromthe barrel.' },
                    { time: '3:00 PM', text: 'Deliveries arrive by wagon from larger cities, bringing exciting new merchandise andmail.' },
                    { time: '6:00 PM', text: 'After 14 hours, the storekeeper finally locks up, only to start doing bookkeeping bylamplight!' }
                ]
            },
            {
                title: 'The End of an Era',
                type: 'about',
                color: '#faf7f0',
                content: [
                    'By the early 1900s, general stores began to face competition from specialized shops, mail-ordercatalogs (like Sears and Montgomery Ward), and eventually chain stores. The automobile made iteasy for people to travel to larger towns for shopping.',
                    'Today, we have huge supermarkets and can buy almost anything online with a click. Butsomething was lost when the general stores disappeared-a sense of community, personalservice, and the excitement of stepping into a store where you might find anything! Modernconvenience stores try to recapture some of that magic, but they can\'t match the charm andimportance of the old general stores.'
                ]
            },
            {
                title: 'Think About It!',
                type: 'questions',
                color: '#8B4513',
                questions: [
                    'How would your family\'s shopping habits be different if you had to buy everything at one generalstore instead of specialized shops and online stores?',
                    'What would be the advantages and disadvantages of living above your family\'s business? Wouldyou like it or not?',
                    'General stores were social centers where people gathered and talked. What places serve thatpurpose in your community today?'
                ]
            }
        ]
    },
    '8': {
        id: '8',
        title: 'Mercersburg Town Square',
        sections: [
            {
                title: 'The Heart of Mercersburg',
                type: 'about',
                color: '#8B4513',
                content: [
                    'The Town Square has been the beating heart of Mercersburg for over 200 years. This centralgathering place has witnessed countless parades, celebrations, protests, markets, and communityevents. lt\'s where history happens, where people come together, and where the spirit ofMercersburg truly lives!',
                    'Originally laid out in the late 1700s, the square was designed to be the center of civic life. Thediamond-shaped or rectangular central space, typical of Pennsylvania towns, provided a place formarkets, public announcements, military drills, and social gatherings. The buildings surroundingthe square housed the most important businesses and institutions in town.'
                ]
            },
            {
                title: 'Historic Events on the Square',
                type: 'facts',
                color: '#859f4d',
                items: [
                    { icon: 'Trumpet', text: 'During the Civil War, Union soldiers mustered and drilled here before marching off to battle Families gathered to say emotional goodbyes.' },
                    { icon: 'circus', text: 'Traveling circuses would set up on the square, bringing exotic animals, acrobats, andentertainment to amazed townspeople.' },
                    { icon: 'market', text: 'Weekly farmers\' markets filled the square with vendors selling fresh produce, meats, bakedgoods, and handmade crafts.' },
                    { icon: 'congrats', text: 'Fourth of july celebrations featured bands, speeches, fireworks, and community picnics thatlasted all day and into the night.' }
                ]
            },
            {
                title: 'The Square Through the Centuries',
                type: 'about',
                color: '#8B4513',
                timeline: [
                    { period: '1700s-1800s: The Early Years', text: 'When Mercersburg was first established, the square was just a cleared area of dirt. farmers wouldbring their wagons to sell goods, and the town crier would make public announcements here. ltwas dusty in summer and muddy in spring! The surrounding buildings were simple log and framestructures.' },
                    { period: '1800s: Growth and Prosperity', text: 'As Mercersburg grew, impressive brick buildings replaced the earlier structures. The squarebecame paved, gas lamps were installed, and it became a source of civic pride. The arrival of therailroad brought even more prosperity and activity to the town center.' },
                    { period: '1900s: The Automobile Age', text: 'The 20th century brought automobiles, changing the square forever. Streets that once rang withhorse hooves now buzzed with Model T Fords. Parking became important, and some of thesquare\'s open space was lost to accommodate cars.' },
                    { period: '2000s: Modern Revival', text: 'Today, the square continues to serve as Mercersburg\'s gathering place. Community events,farmers\' markets, and festivals keep the tradition alive. The historic buildings have been preservedand renovated, connecting past and present.' }
                ]
            },
            {
                title: 'Famous Moments and Stories',
                type: 'facts-highlight',
                color: '#FFA500',
                items: [
                    { icon: 'crown', title: 'Presidential Visits', text: 'Being the hometown of President James Buchanan, the square saw visits from numerouspoliticians and dignitaries over the years, each greeted by crowds of excited citizens.' },
                    { icon: 'megaphone', title: 'Public Speeches', text: 'The square served as a platform for important speeches throughout history-from political ralliesto civil rights demonstrations to celebrations of victory in war.' },
                    { icon: 'film', title: 'Entertainment Center', text: 'Before movie theaters and television, traveling performers, medicine shows, and street musiciansentertained crowds on the square.' },
                    { icon: 'newspaper', title: 'News Central', text: 'During major events-wars, elections, disasters-crowds would gather on the square waiting fornews bulletins posted in shop windows or shouted by newsboys.' }
                ]
            },
            {
                title: 'Architecture Around the Square',
                type: 'about',
                color: '#8B4513',
                content: [
                    'As you stand in the square and look around, you\'re seeing a visual timeline of Americanarchitecture! Each building tells a story:'
                ],
                items: [
                    'Federal-style buildings from the early 1800s with their symmetrical facades and elegantproportions',
                    'Greek Revival structures from the 1830s-1850s with their impressive columns and pediments',
                    'Victorian-era buildings from the late 1800s with ornate decorations and colorful details',
                    'Early 20th-century commercial buildings with large plate glass windows for displaying goods',
                    'Art Deco touches from the 1920s-1930s with their streamlined, modern look'
                ],
                additionalContent: [
                    'Together, these buildings create a beautiful architectural history lesson, showing how Americanbuilding styles evolved over two centuries!'
                ]
            },
            {
                title: 'Why Town Squares Matter',
                type: 'about',
                color: '#859f4d',
                content: [
                    'Town squares like Mercersburg\'s are an important part of American democracy and community life. They represent:'
                ],
                items: [
                    'Public Space: A place that belongs to everyone, rich or poor, young or old',
                    'Democracy in Action: Where citizens can gather, speak freely, and participate in civic life',
                    'Community ldentity: The physical heart of the town where traditions are maintained andmemories are made',
                    'Economic Hub: Where businesses thrive and commerce brings people together',
                    'Cultural Center: Where celebrations, festivals, and community events strengthen socialbonds'
                ],
                additionalContent: [
                    'Many historians believe that strong democracies need strong public spaces where people cangather and interact. Town squares help build the sense of community and shared purpose thatmakes democracy work!'
                ]
            },
            {
                title: 'The Square Today',
                type: 'about',
                color: '#8B4513',
                content: [
                    'Today\'s Mercersburg Town Square continues many old traditions while embracing new ones'
                ],
                items: [
                    'Farmers\' markets still bring local producers and buyers together',
                    'Community festivals celebrate holidays and local culture',
                    'Small businesses around the square maintain the tradition of local commerce',
                    'Historic preservation efforts protect the square\'s architectural heritage',
                    'Public art and beautification projects enhance the space for everyone',
                    'The square serves as a backdrop for photos, proposals, and important life moments'
                ],
                additionalContent: [
                    'The square has adapted to modern life while preserving its essential character as Mercersburg\'sgathering place-proof that some traditions are worth maintaining!'
                ]
            },
            {
                title: 'Think About It!',
                type: 'questions',
                color: '#FFA500',
                questions: [
                    'If you could witness one historic event that happened on this square, what would you choose andwhy? The Civil War mustering? A presidential speech? A 19th-century market day?',
                    'How do town squares help build a sense of community? What modern spaces serve similarpurposes in your life?',
                    'If you were designing a modern town square for the future, what features would you include? How would you balance preserving history with meeting modern needs?'
                ],
                finalReflection: 'Now that you\'ve completed the tour of all eight stops, what surprised you most aboutMercersburg\'s history? How does learning about the past change how you see your owncommunity?'
            },
            {
                title: 'Congratulations!🎉',
                type: 'congratulations',
                color: '#d3d3d3',
                content: [
                    'You\'ve completed the Mercersburg History Tour! We hope you\'ve enjoyed learningabout these amazing historical sites and the stories they tell.',
                    'Want to learn more about Mercersburg\'s current activities and events? Click the button below!'
                ]
            }
        ]
    }
};


