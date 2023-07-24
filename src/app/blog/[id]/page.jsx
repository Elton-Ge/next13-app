import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adi
          </h1>
          <p className={styles.desc}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className={styles.author}>
            <Image
              src={
                "https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{"EG"}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          <span>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
            mollitia odit quasi quis tenetur voluptatem? Excepturi fuga
            perspiciatis recusandae reiciendis sapiente. Dolorem est iure
            repellat rerum unde vitae. Pariatur, possimus.
          </span>
          <span>
            Atque dolore doloremque dolorum harum, omnis quos tenetur unde?
            Adipisci, culpa doloribus ducimus illo ipsa iusto maiores maxime
            minus nesciunt. Aperiam aspernatur expedita omnis possimus
            repudiandae soluta sunt ut. Culpa.
          </span>
          <span>
            Aliquid harum iste maxime mollitia quia vitae! Amet error facere
            laboriosam maiores. Commodi dolorem dolores ea facilis, hic illum
            iure odit pariatur provident vel. Corporis eveniet labore magni
            quidem tempore?
          </span>
          <span>
            Debitis enim et omnis rerum soluta voluptatem voluptates. Amet
            assumenda commodi cumque doloremque, exercitationem explicabo ipsam
            libero nemo numquam officia quae quasi qui recusandae repellendus
            repudiandae sapiente sed suscipit veniam!
          </span>
          <span>
            Adipisci, animi consectetur culpa deserunt dolorem doloremque eos
            facilis fugiat hic, illum libero nam natus odio quam quasi quis quos
            recusandae reiciendis repellat rerum saepe sed sunt suscipit tempore
            veritatis?
          </span>
          <span>
            Ab cupiditate ea enim esse excepturi expedita non officiis qui sed
            tenetur! Adipisci aliquid consectetur delectus dignissimos, dolorum
            ducimus impedit incidunt iste maxime nihil odit possimus quidem
            repellendus tempore ut.
          </span>
          <span>
            Consequuntur deserunt nam quisquam reprehenderit repudiandae! Ab
            accusantium animi distinctio dolore enim hic illum laudantium magnam
            nemo obcaecati odit provident quaerat qui quod quos saepe sequi sint
            suscipit, totam voluptate!
          </span>
          <span>
            Aliquid asperiores at blanditiis cumque harum illo magnam maxime non
            quae. A asperiores assumenda consequatur dignissimos ea eligendi
            error excepturi illo in minus mollitia, nostrum officiis,
            perspiciatis praesentium quas veritatis!
          </span>
          <span>
            A id illum ipsam labore laborum officiis possimus praesentium quis
            tempora voluptas? Hic inventore necessitatibus numquam, officia
            optio quaerat sed similique unde veritatis vitae. Atque excepturi
            exercitationem iusto praesentium velit!
          </span>
          <span>
            Aliquam aperiam, doloremque, id illum in laboriosam nostrum odio
            quam reiciendis rerum tempora voluptas! Aut corporis delectus ea
            eveniet magnam mollitia porro, quae quaerat ratione sequi ut velit
            voluptatibus voluptatum.
          </span>
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
