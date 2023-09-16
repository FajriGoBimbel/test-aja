import React from 'react'
import { Eye, Listen, Touch } from '../../../../public/assets/svg'
import { Card, CardBody } from '@material-tailwind/react'

const VAKComponent = () => {
  return (
    <div>
      <div className='grid grid-cols-3 gap-4 justify-center py-12'>
        <div className='flex flex-col items-center gap-4 text-center'>
          <Eye className="w-16 h-16 md:w-24 md:h-24" />
          <Card>
            <CardBody>
              <h3 className='font-bold text-black'>5</h3>
              <p>Poin Visual</p>
            </CardBody>
          </Card>
        </div>
        <div className='flex flex-col items-center gap-4 text-center text-black'>
          <Listen className="w-16 h-16 md:w-24 md:h-24" />
          <Card>
            <CardBody>
              <h3 className='font-bold text-black'>3</h3>
              <p>Poin Auditori</p>
            </CardBody>
          </Card>
        </div>
        <div className='flex flex-col items-center gap-4 text-center text-black'>
          <Touch className="w-16 h-16 md:w-24 md:h-24" />
          <Card>
            <CardBody>
              <h3 className='font-bold text-black'>2</h3>
              <p>Poin Kinestetis</p>
            </CardBody>
          </Card>
        </div>
      </div>
      <div>
        <h3 className='text-xl font-bold text-black mb-2'>Saran Belajar</h3>
        <p className='mb-6'>
        Dari hasil tes VAKmu, MinGO menyimpulkan kalau gaya belajarmu cenderung visual, nih. Ada beberapa 
        saran bagus buat kamu yang anaknya visual banget. Simak saran dari MinGO agar proses belajarmu lebih 
        optimal, ya.
        </p>
        <h4 className='text-xl font-bold text-black mb-2'>1. Visual</h4>
        <p>
        Perhatikan tulisan/gambar yang ditampilkan guru. Perhatikan mimik/gerakan tubuh guru. Sebaiknya duduk
        di deretan kursi depan agar pemandangan terhadap guru sempurna (tidak terhalangi siswa lain). Tulis materi
        belajar/buat catatan secantik dan semenarik mungkin dengan menggunakan stabilo/spidol/ballpoin warna-
        warni. 
        <br/>
        <br/>
        Lengkapi catatanmu dengan gambar, grafik, diagaram, flowchart, dan usahakan gunakan warna yang
        menarik. Buat lingkungan belajarmu menjadi menyenangkan, indah, dan menarik.
        </p>
      </div>
    </div>
  )
}

export default VAKComponent