import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import CustomImage from '@/utils/customImage/CustomImage';
import { freelancers } from '../Mock';

const PopularUserProfile = () => {
  return (
    <section className="border-t-2 py-12 px-4">
      <div className="max-w-[1920px] mx-auto">
        {/* xl breakpoint 기준으로 최대 너비 설정 */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">인기 프리랜서</h1>
          <p className="text-white">mate에서 가장 많은 의뢰를 맡은 프리랜서 입니다!</p>
        </div>
        <div className="grid grid-cols-4 gap-6 xl:gap-8">
          {/* 항상 4컬럼 유지, xl에서는 gap 증가 */}
          {freelancers.map((freelancer) => (
            <Card key={freelancer.id} className="bg-white/10 border-gray-800 transition-transform hover:scale-105">
              <CardContent className="p-6 xl:p-8">
                <div className="flex flex-col items-center">
                  <CustomImage
                    width={120}
                    height={120}
                    src={freelancer.image}
                    alt={freelancer.name}
                    className="w-32 h-32 xl:w-40 xl:h-40 rounded-lg mb-4 object-cover"
                  />
                  <h3 className="text-xl xl:text-2xl font-semibold text-white mb-1">{freelancer.name}</h3>
                  <p className="text-base xl:text-lg text-gray-400 mb-2">{freelancer.role}</p>

                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 xl:w-6 xl:h-6 ${
                          i < Math.floor(freelancer.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                        }`}
                      />
                    ))}
                    <span className="text-base xl:text-lg text-gray-400 ml-2">({freelancer.reviews}개 리뷰)</span>
                  </div>

                  <div className="w-full pt-4 mt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {freelancer.skills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 hover:bg-gray-700 text-sm xl:text-base"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularUserProfile;
