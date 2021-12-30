import type { NextPage } from 'next';
import Image from 'next/image';
import { Box } from '@mui/system';

const Home: NextPage = () => {
  return (
    <div
      style={{
        width: '100vw',
      }}
    >
      <Box sx={{ position: 'relative', width: '100vw', height: 550, pointerEvents: 'none' }}>
        <Image
          src="/img/banner.jpg"
          alt="hero banner"
          layout="fill"
          objectFit="cover"
          unselectable="on"
          priority
        />
        <Image
          src="/img/banner-shadow.png"
          alt="hero banner"
          layout="fill"
          objectFit="cover"
          unselectable="on"
          priority
        />
      </Box>

      <div
        style={{
          width: 500,
          maxWidth: '100vw',
          margin: '0 auto',
          textAlign: 'center',
          paddingTop: 24,
          // color: 'white',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore maiores
        officia dignissimos commodi nemo molestiae, accusantium at, vitae, ullam rem officiis
        voluptatum nulla ea nihil iste cum suscipit mollitia? Nesciunt animi doloremque explicabo,
        ipsam temporibus harum ipsa ea vero cumque nihil repellat corporis minus excepturi ducimus
        delectus, atque totam, accusamus fuga? Distinctio itaque cumque nostrum numquam suscipit,
        excepturi et. Maxime minima, delectus quae dolor cumque assumenda quaerat adipisci,
        consequatur fugiat quibusdam nam? Voluptatum nam facilis obcaecati maiores, est eius, id vel
        provident officia reiciendis eligendi. Ea accusamus debitis maxime. Fugiat minus nemo, porro
        inventore labore rem a ex quae magni nihil nam sapiente dolorem. Architecto, voluptas!
        Aperiam quidem autem id, praesentium, nostrum ut dicta, quas totam rerum adipisci fugiat.
        Quia id harum rerum, praesentium explicabo soluta laborum esse perferendis voluptatum
        molestias delectus ut magni, odio saepe accusantium iusto quaerat alias, quam beatae autem.
        Eaque error vero voluptate ex molestias! Quis repellat provident illum at sequi omnis nemo
        maxime! Id, recusandae. Id accusamus nihil ad quod facilis eos sed culpa distinctio quo
        possimus, incidunt quas aut optio? Animi, possimus labore? Qui, architecto asperiores ex
        laborum laudantium fugit excepturi. Odio quasi sunt veniam animi odit maiores quisquam quas
        placeat. At, ratione dolor! Vero necessitatibus commodi ipsa culpa repudiandae dolorum
        molestias accusamus. Reiciendis dicta sit a aliquam, possimus nostrum pariatur aspernatur
        vel optio quaerat doloribus sed fuga necessitatibus libero dignissimos error neque aut
        impedit quas velit officiis voluptas itaque minus? Ex, in. Velit fuga atque iusto vero
        blanditiis fugiat quod esse qui explicabo molestias libero dicta facilis dolore obcaecati ea
        dolorum corporis ex enim, placeat alias minima molestiae autem. Porro, assumenda
        dignissimos. Porro, animi tempore. Eius perferendis quibusdam autem est cumque, molestias
        minus et esse sint, exercitationem quisquam quis ducimus sed culpa doloremque ut. Eaque
        nulla odio id nemo facere inventore accusamus. Veritatis repudiandae temporibus, accusamus
        iure blanditiis enim deserunt ab ea! Voluptatem non fugit, iusto nihil reprehenderit
        assumenda eaque adipisci pariatur maiores tempora rerum ullam perspiciatis quo tenetur
        provident voluptates fugiat. Saepe autem obcaecati, alias inventore ipsa repellendus quod
        voluptatibus vel, reprehenderit, laborum aspernatur? Optio consequatur aliquam commodi odio
        culpa sit rem, reprehenderit cum, sapiente recusandae laboriosam maiores consequuntur vero.
        Omnis. Quos reiciendis vel deleniti itaque pariatur ullam, doloribus ex sint. Repellat
        cumque porro accusantium aut exercitationem sunt, vero ex deleniti fuga molestiae natus
        possimus quasi ipsa id placeat deserunt! Eveniet. Repellendus quos cum quam, laudantium
        facilis earum? Modi, quibusdam. Odio, maiores! Aut possimus dolor ducimus eligendi
        doloremque quos repellat velit debitis adipisci, aperiam iste provident sint ipsam,
        voluptatem enim. Rerum? Facere, magni ea voluptatum accusantium esse voluptatem dolore.
        Nulla temporibus error dignissimos voluptatem? Maiores, harum commodi fugit molestiae
        quaerat neque in temporibus animi libero at mollitia perferendis eos sapiente dolorem!
        Deserunt alias et debitis dolorem perspiciatis doloremque porro veniam quo voluptatum nemo,
        soluta voluptatem, iste tempora obcaecati? Praesentium beatae ipsam cupiditate, quas dolor
        eos ad velit sunt earum, magni eaque? Non similique nisi soluta porro iure, quam saepe
        voluptas libero doloribus vitae. Nostrum sapiente inventore labore alias blanditiis,
        perspiciatis ea similique aperiam amet facere magni quidem fuga dolorum, voluptatem vero?
        Quidem assumenda pariatur quibusdam possimus eum adipisci perferendis eaque explicabo
        tempora odit laudantium iste illum aliquid minima, voluptatibus cum consequatur quia quae
        deserunt vel, saepe, nemo ipsam laboriosam. Magni, non? Cumque sapiente accusamus, dolorum
        aspernatur recusandae temporibus autem a doloribus sed dolores minus ipsa delectus,
        consequuntur sit, optio laboriosam officiis quae! In hic illo temporibus dolores aliquam ut
        quibusdam corporis. Ut fuga maiores harum? Commodi facilis, sunt unde consequatur optio
        porro aliquam molestiae dolorem, laudantium velit non numquam, ab adipisci a consequuntur
        necessitatibus hic laborum omnis eaque neque ipsa mollitia!
      </div>
    </div>
  );
};

export default Home;
