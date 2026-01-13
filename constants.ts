
import { ThumbnailItem, Skill, Feature, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Gaming', 'IRL', 'Documentary', 'Finance', 'Podcast', 'Poster', 'Tech'];

export const THUMBNAILS: ThumbnailItem[] = [
  { 
    id: 'g8', 
    title: 'Pokemon Card', 
    category: 'IRL', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389340/pokemon_tqdibs.jpg', 
    ctr: '21.5% CTR'
  },
  { 
    id: 'g7', 
    title: 'SURVIVE  THE WILD!', 
    category: 'IRL', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389337/harsh_1_k4xujv.jpg', 
    ctr: '18.4% CTR'
  },
  { 
    id: 'g1', 
    title: ' RV There Yet', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389502/Rv_There_yet_rgfuns.jpg',
    ctr: '12.8% CTR'
  },
  { 
    id: 'g2', 
    title: '0.01% Rere Item', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389498/illegal_item_nwscka.jpg',
    ctr: '15.2% CTR'
  },
  { 
    id: 'g3', 
    title: 'GTA Car Race', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389496/GTA_V_RACE_lujalb.jpg',
    ctr: '11.5% CTR'
  },
  { 
    id: 'g4', 
    title: 'minecraft in antarctica', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389487/antarctica_i6cw2l.jpg',
    ctr: '14.1% CTR'
  },
  { 
    id: 'g5', 
    title: '99 Night', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389475/99_night_in_scary_forest_c75spv.jpg',
    ctr: '13.5% CTR'
  },
  { 
    id: 'g6', 
    title: 'Nirav Modi Fraud', 
    category: 'Documentary', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389575/Nirav_modi_Fraud_oi7pyp.jpg',
    ctr: '16.8% CTR'
  },
  { 
    id: 'new-1', 
    title: 'CIVIC SENSE IN INDIA', 
    category: 'Documentary', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389563/Civics_sense_um0duq.jpg',
    ctr: '19.2% CTR'
  },
  { 
    id: 'new-2', 
    title: 'Earn $95***', 
    category: 'Finance', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389663/Callum_thumbnail__3_hha3ua.jpg',
    ctr: '15.7% CTR'
  },
  { 
    id: 'new-3', 
    title: 'The Bihar Politics', 
    category: 'Podcast', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389725/Sapno_Ka_Bihar2_ojf9t9.jpg',
    ctr: '17.3% CTR'
  },
  { 
    id: 'new-4', 
    title: 'Ai Agent', 
    category: 'Tech', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389830/How_to_Build_ai_Agent_iitkqa.jpg',
    ctr: '12.9% CTR'
  },
  // 11 New Gaming Exclusive Thumbnails (Hidden from All)
  { 
    id: 'g-ex-2', 
    title: 'Roblox Steal', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389502/roblox_steal_qrt49b.jpg',
    ctr: '19.8% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-3', 
    title: 'Remove Mobs', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389501/remove_mobs_qtoawo.jpg',
    ctr: '22.1% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-4', 
    title: 'Rainbow Armour', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389500/rainbow_armour_yxfqjy.jpg',
    ctr: '16.5% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-5', 
    title: 'Kamla Horror', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389498/kamla_pf1bq0.jpg',
    ctr: '20.3% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-6', 
    title: 'Minecraft Food', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389498/minecraft_food_plobrt.jpg',
    ctr: '14.9% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-7', 
    title: 'Subscriber Accounts', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389496/I_Upgraded_SUBSCRIBERS_Accounts_In_Steal_A_Brainrot_iwb7jm.jpg',
    ctr: '18.7% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-8', 
    title: 'VR Fighting', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389495/Fighting_Dealist_Players_in_Minecraft_VR_2_kgkgak.jpg',
    ctr: '25.1% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-9', 
    title: 'Escape Evil Teacher', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389490/ESCAPE_EVIL_TEACHER_bclykp.jpg',
    ctr: '17.6% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-10', 
    title: 'Minecraft Movie Vlog', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389489/basically_Minecraft_movie_vlog_uinywu.jpg',
    ctr: '15.4% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-11', 
    title: 'Badge 99', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389489/badge_99_edoykz.jpg',
    ctr: '21.0% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-12', 
    title: 'All Advancements', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389487/All_advancement_uzahwp.jpg',
    ctr: '13.8% CTR',
    hiddenFromAll: true
  },
  // 7 New IRL Exclusive Thumbnails (Hidden from All)
  { 
    id: 'irl-ex-1', 
    title: 'MrBeast Style', 
    category: 'IRL', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389339/mr_beast_final_zphdpq.jpg', 
    ctr: '16.5% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'irl-ex-2', 
    title: 'Zero Rupee Challenge', 
    category: 'IRL', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389339/zero_ruppe_challenge_sgm6gc.jpg', 
    ctr: '19.1% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'irl-ex-3', 
    title: 'Grand Wedding Vlog', 
    category: 'IRL', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389339/weeding.jpg_1_yvbfcw.jpg', 
    ctr: '23.4% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'irl-ex-4', 
    title: 'Hated vs Loved', 
    category: 'IRL', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389338/Most_Hated_vs_Most_Loved_ip2oic.jpg', 
    ctr: '14.8% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'irl-ex-5', 
    title: 'Blind Date Special', 
    category: 'IRL', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389338/blind_date_qlmmyi.jpg', 
    ctr: '20.2% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'irl-ex-6', 
    title: 'Damac Islands Tour', 
    category: 'IRL', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389338/damac_islands_2_uaohpd.jpg', 
    ctr: '17.9% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'irl-ex-7', 
    title: '24 Hours in Jungle', 
    category: 'IRL', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1768304590/football_lgemh8.jpg', 
    ctr: '15.6% CTR',
    hiddenFromAll: true
  },
  // 19 New Documentary Exclusive Thumbnails (Hidden from All)
  {
    id: 'doc-ex-1',
    title: 'Waste 10 Billion?',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767394861/Could_you_waste_10_Billion.jpg_4_rwqvxy.jpg',
    ctr: '19.5% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-2',
    title: 'Waqf Entry in India',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389583/Waqf_entry_in_India_e8p5se.jpg',
    ctr: '22.1% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-3',
    title: 'UK Leadership Shift',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389581/UK_Leadership_Shift_uhkvbp.jpg',
    ctr: '17.8% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-4',
    title: 'Truth About Medical Students',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389580/Truth_about_Medical_student_qjgmo5.jpg',
    ctr: '20.4% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-5',
    title: 'Samay Raina',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389579/samay_shd3s7.jpg',
    ctr: '18.9% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-6',
    title: 'Russia Ukraine War',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389578/Russia_Ukraine_War_fuk5sv.jpg',
    ctr: '23.5% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-7',
    title: 'Pulwama Security Breach',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389577/Pulwama_Security_Breach_eaismq.jpg',
    ctr: '16.7% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-8',
    title: 'Pakistan Army Generals',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389576/Pakistan_Under_army_Generals_jtpdqj.jpg',
    ctr: '19.2% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-9',
    title: 'MBBS Abroad',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389574/Mbbs_Abroad_rzlgd3.jpg',
    ctr: '21.0% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-10',
    title: 'Kashmir Separatist Leader',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389573/Kashmir_Separatist_Leader_xctcaf.jpg',
    ctr: '24.1% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-11',
    title: 'Iran Conflict',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389571/iran_2_wjhjj1.jpg',
    ctr: '15.9% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-12',
    title: 'Toyota Domination',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389570/HOW_TOYOTA_DOMINATED_CAR_INDUSTRY_FOR_YEARS_i3b12c.jpg',
    ctr: '18.3% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-13',
    title: 'Spotify Music Industry',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389569/How_Spotify_took_over_the_music_industry_cjhzuo.jpg',
    ctr: '20.8% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-14',
    title: 'How Nike Became Giant',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389567/How_Nike_Became_s7q8xk.jpg',
    ctr: '17.5% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-15',
    title: 'HMPV Virus',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389567/hmpv_qeimgy.jpg',
    ctr: '19.9% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-16',
    title: '10 Billion Challenge',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389565/Could_you_waste_10_Billion.jpg_3_wzfnpw.jpg',
    ctr: '16.2% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-17',
    title: 'Spending 10 Billion',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389565/Could_you_waste_10_Billion.jpg_2_r5xphx.jpg',
    ctr: '21.5% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-18',
    title: 'Waste 10 Billion',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389564/Could_you_waste_10_Billion_bipyqo.jpg',
    ctr: '18.7% CTR',
    hiddenFromAll: true
  },
  {
    id: 'doc-ex-19',
    title: 'Bollywood Business Model',
    category: 'Documentary',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389562/Business_Model_of_Bollywood_1_uo9ibz.jpg',
    ctr: '22.8% CTR',
    hiddenFromAll: true
  },
  // 7 New Finance Exclusive Thumbnails (Hidden from All)
  {
    id: 'fin-ex-1',
    title: '$84,000 Funded',
    category: 'Finance',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389657/84_000_Funded_2_xpw9sf.jpg',
    ctr: '18.4% CTR',
    hiddenFromAll: true
  },
  {
    id: 'fin-ex-2',
    title: '1K To 5K Followers',
    category: 'Finance',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389659/1K_To_5K_Followers_qwaqjj.jpg',
    ctr: '20.2% CTR',
    hiddenFromAll: true
  },
  {
    id: 'fin-ex-3',
    title: '$5000 Profit Challenge',
    category: 'Finance',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389660/5000_PROFIT_FROM_25K_FUNDED_a0yjmn.jpg',
    ctr: '17.5% CTR',
    hiddenFromAll: true
  },
  {
    id: 'fin-ex-4',
    title: 'Best Prop Firm',
    category: 'Finance',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389661/best_propTrade_iunie2.jpg',
    ctr: '21.8% CTR',
    hiddenFromAll: true
  },
  {
    id: 'fin-ex-5',
    title: 'Broker Backed Prop Firm',
    category: 'Finance',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389662/Broker_backed_prop_Firm_v3wb2g.jpg',
    ctr: '16.9% CTR',
    hiddenFromAll: true
  },
  {
    id: 'fin-ex-6',
    title: 'Plan Your Finances',
    category: 'Finance',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389664/HOW_TO_PLAN_YOUR_FINANCES_b8klez.jpg',
    ctr: '19.4% CTR',
    hiddenFromAll: true
  },
  {
    id: 'fin-ex-7',
    title: 'Only Prop Firm',
    category: 'Finance',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389666/only_propfirm_aljbjv.jpg',
    ctr: '22.3% CTR',
    hiddenFromAll: true
  },
  // 8 New Podcast Exclusive Thumbnails (Hidden from All)
  {
    id: 'pod-ex-1',
    title: 'Edtech Exposed',
    category: 'Podcast',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389718/Edtech_exposed_zej93l.jpg',
    ctr: '15.5% CTR',
    hiddenFromAll: true
  },
  {
    id: 'pod-ex-2',
    title: 'Detective Stories',
    category: 'Podcast',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389717/detective_thumbnail.jpg_3_ihxsba.jpg',
    ctr: '18.2% CTR',
    hiddenFromAll: true
  },
  {
    id: 'pod-ex-3',
    title: 'Ex-Commissioner Truth',
    category: 'Podcast',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389719/Ex-Commissioner_Reveals_the_Truth_votqtw.jpg',
    ctr: '14.9% CTR',
    hiddenFromAll: true
  },
  {
    id: 'pod-ex-4',
    title: 'Fire Department Life',
    category: 'Podcast',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389721/Fire_Department_1_hpfvsf.jpg',
    ctr: '20.1% CTR',
    hiddenFromAll: true
  },
  {
    id: 'pod-ex-5',
    title: 'Is Your Partner Cheating?',
    category: 'Podcast',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389722/Is_your_Partner_cheating_on_you_vrp4by.jpg',
    ctr: '19.5% CTR',
    hiddenFromAll: true
  },
  {
    id: 'pod-ex-6',
    title: 'Reality of Startups',
    category: 'Podcast',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389726/realty_of_startup_1_rxa7rt.png',
    ctr: '16.8% CTR',
    hiddenFromAll: true
  },
  {
    id: 'pod-ex-7',
    title: 'The Last Lunch',
    category: 'Podcast',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389727/the_last_lunch_4.jpg_2_twl8dd.jpg',
    ctr: '13.5% CTR',
    hiddenFromAll: true
  },
  {
    id: 'pod-ex-8',
    title: 'Underworld Stories',
    category: 'Podcast',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389727/underworld_podcasts_1_wwzylq.jpg',
    ctr: '21.0% CTR',
    hiddenFromAll: true
  },
  // 8 New Tech Exclusive Thumbnails (Hidden from All)
  {
    id: 'tech-ex-1',
    title: 'Grow 0 To 1K',
    category: 'Tech',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389828/Grow_0_To_1k_followers_cwxpm2.jpg',
    ctr: '19.2% CTR',
    hiddenFromAll: true
  },
  {
    id: 'tech-ex-2',
    title: 'Big Billion Days',
    category: 'Tech',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389826/big_billion_2_rvxxty.jpg',
    ctr: '16.5% CTR',
    hiddenFromAll: true
  },
  {
    id: 'tech-ex-3',
    title: '₹2.3 Lakh PC Build',
    category: 'Tech',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389825/2.3_LAKH_PC_dv4hct.jpg',
    ctr: '21.4% CTR',
    hiddenFromAll: true
  },
  {
    id: 'tech-ex-4',
    title: 'ICT Strategy',
    category: 'Tech',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389831/ICT_xuxgjg.jpg',
    ctr: '22.1% CTR',
    hiddenFromAll: true
  },
  {
    id: 'tech-ex-5',
    title: 'iQOO 13 Unboxing',
    category: 'Tech',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389833/iqoo_13_zsbf2f.jpg',
    ctr: '15.8% CTR',
    hiddenFromAll: true
  },
  {
    id: 'tech-ex-6',
    title: 'Lava Agni 3',
    category: 'Tech',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389835/lava_agni_3_go8yvi.jpg',
    ctr: '17.3% CTR',
    hiddenFromAll: true
  },
  {
    id: 'tech-ex-7',
    title: 'Nord 4 vs CE4',
    category: 'Tech',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389837/OnePlus_Nord_4_vs_OnePlus_Nord_CE4_dd0qtg.jpg',
    ctr: '18.9% CTR',
    hiddenFromAll: true
  },
  {
    id: 'tech-ex-8',
    title: 'UC Phone 2',
    category: 'Tech',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389839/uc_phone_2_c5fxkh.jpg',
    ctr: '23.5% CTR',
    hiddenFromAll: true
  },
  // 9 New Poster Exclusive Thumbnails (Hidden from All)
  {
    id: 'poster-ex-1',
    title: 'Under Water Concept',
    category: 'Poster',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389778/under_water_1_dbwyeg.jpg',
    ctr: '18.5% CTR',
    hiddenFromAll: true
  },
  {
    id: 'poster-ex-2',
    title: 'Shubh',
    category: 'Poster',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389775/SUBH_ipijyn.jpg',
    ctr: '20.1% CTR',
    hiddenFromAll: true
  },
  {
    id: 'poster-ex-3',
    title: 'Untitled Art',
    category: 'Poster',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389780/Untitled-2_i8obfb.jpg',
    ctr: '16.9% CTR',
    hiddenFromAll: true
  },
  {
    id: 'poster-ex-4',
    title: 'T-Shirt Design',
    category: 'Poster',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389780/t_shirt_mhvlsy.jpg',
    ctr: '22.4% CTR',
    hiddenFromAll: true
  },
  {
    id: 'poster-ex-5',
    title: 'XX',
    category: 'Poster',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389781/XX_szvrhu.jpg',
    ctr: '19.8% CTR',
    hiddenFromAll: true
  },
  {
    id: 'poster-ex-6',
    title: 'Creative Poster',
    category: 'Poster',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389773/poter_ysyx33.jpg',
    ctr: '17.5% CTR',
    hiddenFromAll: true
  },
  {
    id: 'poster-ex-7',
    title: 'Graphic Poster',
    category: 'Poster',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389772/poster_fhcfcn.jpg',
    ctr: '21.2% CTR',
    hiddenFromAll: true
  },
  {
    id: 'poster-ex-8',
    title: 'Modern Poster',
    category: 'Poster',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389771/poster__2_tiftha.jpg',
    ctr: '15.9% CTR',
    hiddenFromAll: true
  },
  {
    id: 'poster-ex-9',
    title: 'Cinematic Poster',
    category: 'Poster',
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389769/poster___bvue76.jpg',
    ctr: '23.1% CTR',
    hiddenFromAll: true
  }
];

export const SKILLS: Skill[] = [
  { name: 'Thumbnail Design', percentage: 98, icon: 'Image' },
  { name: 'Color Psychology', percentage: 92, icon: 'Palette' },
  { name: 'CTR Optimization', percentage: 95, icon: 'MousePointerClick' },
  { name: 'Photoshop Mastery', percentage: 99, icon: 'Layers' },
  { name: 'Branding & Style', percentage: 88, icon: 'Sparkles' },
];

export const FEATURES: Feature[] = [
  { 
    title: 'High CTR Thumbnails', 
    description: 'Designed specifically to trigger the click and boost your video performance.', 
    icon: 'MousePointer2' 
  },
  { 
    title: '24hr Delivery', 
    description: 'Quick turnaround to keep your upload schedule on track every single time.', 
    icon: 'Zap' 
  },
  { 
    title: 'Unlimited Revisions', 
    description: 'I work until you are 100% satisfied with the final masterpiece.', 
    icon: 'RefreshCcw' 
  },
  { 
    title: '100% YouTube Ready', 
    description: 'Perfect dimensions, optimized file size, and mobile-friendly clarity.', 
    icon: 'CheckCircle2' 
  },
];

export const ABOUT_CONTENT = {
  name: "Ayush",
  role: "Visual Strategist & Thumbnail Expert",
  experience: "4+ Years",
  bio: "I am a visual strategist with over 4 years of experience crafting high-converting thumbnails for some of the biggest creators on YouTube. My passion lies in the intersection of data-driven psychology and cinematic art. I don't just make things look 'cool'; I design them to stop the scroll and force the click.",
  mission: "My mission is to help creators maximize their reach by ensuring their first impression—the thumbnail—is unmissable. I've helped channels grow from a few hundred views to millions by simply optimizing the visual 'entry point' of their content."
};
