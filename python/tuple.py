# টিউপল তৈরি করা
t = (1, 2, 3, 4)
print(t[-2:-1])
# # একটিমাত্র element থাকলে শেষে কমা দিতে হবে
# t1 = (5,)

# # টিউপল অ্যাক্সেস করা (index দিয়ে)
# print(t[0])  # প্রথম element

# # টিউপল slicing
# print(t[1:3])  # 2nd থেকে 3rd পর্যন্ত element

# # টিউপলের length বের করা
# print(len(t))

# # টিউপলের মধ্যে কতবার কোনো element এসেছে
# print(t.count(2))

# # টিউপলে কোনো element এর index বের করা
# print(t.index(3))

# # টিউপলে বিভিন্ন datatype রাখা যায়
# mix = ("Mursalin", 20, 3.75)
# print(mix)
# print(mix[1:3])
# lst=list(mix)
# print(lst)

# for i,v in enumerate(mix):
#     print(f"index{i} value:{v}")
    
# mix=(2,6,2,1,7)
# new_mix=tuple(sorted(mix,reverse=False))
# print(new_mix)
