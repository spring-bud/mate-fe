import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <div className="w-full border-b-2 border-gray-500 h-16 bg-symbol">
      <div className="container flex items-center h-full">
        <img src="#" alt="로고" />

        <Button variant="default" size={'default'}>
          로그인
        </Button>
      </div>
    </div>
  );
}
