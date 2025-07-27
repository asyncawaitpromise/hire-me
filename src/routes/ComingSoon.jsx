import { Clock, Star, Zap } from 'react-feather';

const ComingSoon = () => {
  return (
    <div className="h-svh bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-base-100 rounded-full shadow-lg animate-pulse">
              <Zap size={48} className="text-primary" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-base-100 mb-4">
            Coming Soon
          </h1>
          <p className="text-xl text-base-100/80 mb-8 max-w-md mx-auto">
            Something amazing is on the way. Stay tuned for updates!
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="p-3 bg-base-100/20 rounded-full mb-2">
              <Star size={24} className="text-base-100" />
            </div>
            <span className="text-base-100/80 text-sm">Innovative</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3 bg-base-100/20 rounded-full mb-2">
              <Clock size={24} className="text-base-100" />
            </div>
            <span className="text-base-100/80 text-sm">Soon</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3 bg-base-100/20 rounded-full mb-2">
              <Zap size={24} className="text-base-100" />
            </div>
            <span className="text-base-100/80 text-sm">Exciting</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="bg-base-100/20 backdrop-blur-sm rounded-lg p-6 max-w-sm">
              <h3 className="text-lg font-semibold text-base-100 mb-2">Get Notified</h3>
              <p className="text-base-100/80 text-sm mb-4">
                Be the first to know when we launch
              </p>
              <div className="join w-full">
                <input 
                  className="input input-bordered join-item flex-1" 
                  placeholder="Enter email" 
                  type="email"
                />
                <button className="btn btn-primary join-item">Notify Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;