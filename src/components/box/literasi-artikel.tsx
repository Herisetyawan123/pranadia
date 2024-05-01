import React from 'react'

function BoxLiterasiArtikel({ src }: { src: string }) {
  return (
    <div className="bg-blue-500 rounded-lg h-52" style={{
        'background': `url(${src})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover'
    }}>

    </div>
  )
}

export default BoxLiterasiArtikel