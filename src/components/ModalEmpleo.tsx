import type { TransformacionDigitalItem } from '@/pages/servicios/components/TabsServicios';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import iconX from '@img/TrabajaConNosotros/x.png';

interface MyModalProps {
  isOpen: boolean;
  item: TransformacionDigitalItem;
  setIsOpen: (value: boolean) => void;
}

export default function ModalEmpleo({ isOpen, item, setIsOpen }: MyModalProps) {

  const handleModal = () => {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-[759px] max-h-screen overflow-y-auto transform rounded-2xl bg-white px-13 py-10 text-left align-middle shadow-lg transition-all relative">
              <DialogTitle className="text-lg font-medium text-gray-900 text-[22px] mt-3">
                Acerca del empleo:
                <div className="flex justify-center absolute top-7 right-10">
                  <button
                    onClick={handleModal}
                    className="inline-flex justify-center rounded-3xl bg-(--color-primary-red) text-white cursor-pointer"
                  >
                    <img className='w-7 h-7' src={iconX} alt="" />
                  </button>
                </div>
              </DialogTitle>
              <div className="mt-7 flex flex-col text-sm text-(--color-secondary-gray) leading-[22px] gap-y-5">
                <div>
                  <p>
                    {item.acercaDelEmpleo?.contenidoAcercaDe}
                  </p>
                </div>
                <div>
                    <p>¿Que Buscamos?</p>
                    <ol className='list-disc ps-7 mt-1'>
                      {item.acercaDelEmpleo?.queBuscamos.map((seBuscaEnPersona, index) => (
                        <li key={index}>{seBuscaEnPersona.caracteristica}</li>
                      ))}
                    </ol>
                </div>
                <div>
                    <p>Requisitos Técnicos y Experiencia:</p>
                    <ol className='list-disc ps-7 mt-1'>
                      {item.acercaDelEmpleo?.requisitos.map((esRequerido, index) => (
                        <li key={index}>{esRequerido.requisito}</li>
                      ))}
                    </ol>
                </div>
                <div>
                  <p>Habilidades Valoradas:</p>
                  <ol className='list-disc ps-7 mt-1'>
                    {item.acercaDelEmpleo?.habilidadesValoradas.map((esValorado, index) => (
                      <li key={index}>{esValorado.habilidad}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-15 flex justify-center">
                <button
                  onClick={handleModal}
                  className="inline-flex w-[138px] justify-center rounded-2xl bg-(--color-primary-red) px-4 py-2 text-sm font-medium text-white cursor-pointer"
                >
                  Quiero Postular
                </button>
              </div>
            </DialogPanel>
        </div>
      </Dialog>
  );
}
