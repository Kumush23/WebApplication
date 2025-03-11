class Location {
  constructor(data) {
    this.name = data.name;
    this.address = data.address;
    this.rating = data.rating;
    this.reviews = data.reviews;
    this.phone = data.phone;
    this.lat = data.lat;
    this.lng = data.lng;
  }

  render() {
    return `
 <div class="popup-info p-4">
            <h3 class="text-xl font-bold text-gray-800 mb-2">${this.name}</h3>
            
            <div class="flex items-center mb-3">
            <div class="flex items
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <span class="ml-1 text-gray-600">4.6</span>
                </div>
                <span class="mx-2 text-gray-400">•</span>
                
                <span class="text-gray-600">170 отзывов</span>
            </div>

            <div class="space-y-2 mb-4">
                <div class="flex items-center">
                <svg class="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-gray-600">ул. Пушкина, 5</span>
                </div>
                <div class="flex items-center">
                <svg class="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-gray-600">+992 92 654 32 10</span>
                </div>
            </div>

            <button onclick="handleApplicationClick()" class="w-full bg-[#F7BE38] hover:bg-[#F7BE38]/90 text-white font-bold py-2 px-4 rounded-full">
                Оставить заявку
            </button>
            </div>
    `;
  }
}
