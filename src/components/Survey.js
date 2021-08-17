import React from 'react'
import {
    Link
} from "react-router-dom"
// import survey_img from "../images/survey.svg"
export const Survey = () => {
    return (
        <div className="main">
            <h2>About Survey</h2>
           <div className="about-body">
               <div>
            <ul className='about-list'>
            This survey/questionnaire is divided into 4 parts.
                <li>Availability</li>
                <li>Confidentiality</li>
                <li>Integrity</li>
                <li>Privacy</li>
            </ul>
            </div>
            {/* <img src={survey_img} alt="survey_image" id="survey_image"/> */}
            </div>
            <Link to="/availability"><button className="test-button" onClick={()=>{ sessionStorage.clear();}}>Take ICAP-test</button></Link>
            <br />
            <h2>Score Calculation</h2>
            <div>Score tells a Firm that how much of Risk it is facing. More Score implies more risk. We are
                using two parameters to calculate score for each ‘requirement’ Question:<br/>
                1)Its impact (Severity of harm if that ‘requirement’ is not met by the firm)<br/>
                2) Probability (Probability of occurrence of the harm to the firm if that ‘requirement’ is not
                fulfilled)<br/>

               <p> Both these values are provided by us.
                So score for each requirement is impact*Probability if that requirement is not met.
                So total score will be Sum of all these scores.
                After that divide Total Score by Total Number of Question in that Category.
                Total Score will be between [0,1].</p></div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, distinctio. Obcaecati at illum molestias. Quos doloremque illo nam porro soluta labore, reprehenderit optio harum quod. Corrupti veniam porro magni incidunt.
            Ea eum quis fugit magni natus necessitatibus expedita vero! Maxime dolorem aliquam facilis! Fuga, quas! Rerum esse tenetur quo, veritatis illo sapiente cupiditate maiores tempora distinctio? Corporis at dolor maxime!
            Id cumque quos veritatis libero iure nobis dignissimos molestiae minima ducimus delectus est unde, deserunt error at labore odio quia? Est maiores quam quidem minima, facere perferendis dolorum. Tempora, sapiente?
            Deserunt aut minus dignissimos dolore perspiciatis repudiandae quo iure. Vitae minima nihil perferendis eum ipsum, assumenda tempore ex sapiente, dolores fugit vel itaque sunt in voluptates expedita quia labore officia.
            Nulla, iusto quidem. Quo veniam unde vero quaerat! Omnis laborum totam quaerat delectus nulla eius modi perferendis fugiat fuga ab, nobis atque voluptates officiis, numquam autem expedita tempora voluptatum. Explicabo?
            Eius quasi nam iure fugit delectus et possimus iusto ipsam cupiditate consequuntur, ab dolore autem laborum ipsa assumenda ducimus! Laborum est impedit repudiandae pariatur sint eaque debitis consequuntur. Aperiam, sed!
            Pariatur odio eveniet sit velit laudantium dolore in aut sequi, vel deleniti similique alias est iure cumque? Saepe porro, ipsa molestiae assumenda rem impedit doloremque, est deserunt, quae ullam dolorem?
            Eaque architecto animi laborum, vel a dicta placeat soluta rerum explicabo porro illo ad, sapiente veritatis corporis nemo? Accusantium perferendis ex omnis laborum, est reiciendis neque magnam tempore doloremque magni.
            Doloribus at esse, eos ullam modi officiis sapiente dolorum, totam alias obcaecati et perferendis sequi vel ducimus architecto veritatis doloremque deleniti eius optio hic aperiam in. Cumque voluptas dignissimos optio!
            Expedita eveniet officiis delectus aspernatur explicabo adipisci repellendus velit? Libero doloribus nobis vitae blanditiis officia nihil totam neque repellendus dolorem reiciendis labore tempora ad culpa eaque perspiciatis, dicta, vero provident?
            Perspiciatis cumque hic, nemo reprehenderit, nihil minima exercitationem expedita itaque esse unde ducimus consectetur debitis culpa vel, doloribus amet vitae labore nam! Quas debitis numquam molestiae labore incidunt architecto ut!
            Explicabo modi, necessitatibus excepturi iure deserunt repellat eum aspernatur error recusandae, possimus magni esse minima quas iusto laborum nulla tempora, suscipit quam asperiores tempore est. Nesciunt porro assumenda dolor inventore.
            Perspiciatis reiciendis cumque quaerat eum nulla laborum, maxime distinctio. Quos earum blanditiis voluptas sequi assumenda nisi nostrum qui explicabo et recusandae, ea porro libero. Tempora officia fugit quae corrupti architecto.
            Velit, reiciendis. Dolorum eveniet facilis non libero corporis sapiente quia commodi? Deleniti accusamus incidunt nesciunt expedita ipsa ducimus assumenda eveniet soluta dicta omnis quam, nihil ratione esse reiciendis. Cumque, vel.
            Debitis consectetur cum est distinctio. Minima consequatur, maiores omnis inventore modi illo laboriosam! Doloribus ipsa quos non veniam quae quod culpa recusandae, similique tempora nulla. Velit iste id laborum expedita!
            Corporis alias nesciunt inventore temporibus, ducimus maiores blanditiis fugiat. Quo atque minus voluptatum mollitia illum dolores dignissimos possimus! Laborum dolor temporibus sit corporis assumenda veritatis voluptatibus vero excepturi, totam quas!
            Eveniet, in quasi amet modi beatae nobis quae vero labore optio cumque ratione consectetur quos at odit explicabo accusantium est. Voluptatem voluptate, voluptatibus nemo provident rem architecto? Quas, nulla necessitatibus!
            Quam repellat tempore explicabo minima asperiores modi ex exercitationem iusto eligendi eos consectetur saepe pariatur officiis excepturi aspernatur in ratione cum, ipsam voluptate velit numquam ipsa perferendis non magnam. Id.
            Mollitia modi similique repellat vitae tempore quaerat! Culpa dolore perferendis modi, exercitationem blanditiis, tenetur vel magni debitis consequatur perspiciatis ipsum animi nam distinctio nulla dolorum, cumque nostrum optio similique. Similique.
            Illo aperiam velit dolorum commodi, et dolor totam magnam doloremque fugit fuga facere nam, voluptatem consequuntur repellendus maxime sed non tempore quibusdam esse pariatur exercitationem? Quasi maxime fugiat sed natus.
            Assumenda, qui iusto ipsum totam quae quisquam nulla dolorem dicta eius soluta ut quidem, excepturi iste! Modi cupiditate facilis et pariatur sapiente vitae? Sequi molestiae facilis tenetur. Tempore, quas ipsa.
            Id dolor voluptatem reiciendis impedit hic quia quod temporibus cum mollitia ratione, atque, perferendis corrupti quis. Iure omnis, in non quasi, natus totam nihil architecto aspernatur corporis eaque voluptate illum?
            Quis earum omnis ab autem optio nihil quos sint nemo quam quaerat provident quo nam voluptatibus eius, ipsa totam aliquid! Provident modi debitis reiciendis aut. Exercitationem commodi fuga neque possimus!
            Quia repellat at qui earum reprehenderit iste inventore molestiae harum esse modi ratione suscipit, in corporis porro est illo deleniti non neque minus sit repudiandae quos voluptatibus enim. Culpa, animi.
            Quia nemo nisi earum consequuntur labore, dolorum tempora architecto repellendus distinctio numquam expedita rem ipsa, obcaecati, sunt hic similique. Possimus voluptatum minima cupiditate libero fuga deserunt neque ad earum quidem.
            Necessitatibus eum dolorem aliquam quis explicabo sapiente error, harum asperiores animi officia earum corporis numquam mollitia repellendus, eligendi, voluptates quisquam cumque laboriosam! Velit dolor quod delectus quidem officiis, est culpa.
            Quia est odit dolore aspernatur aut, repellat quidem porro eum numquam minima, architecto consectetur aperiam perspiciatis, quasi voluptatibus optio assumenda omnis error fugit maxime rerum non. Accusantium odio deleniti at!
            Labore ab eum id temporibus praesentium incidunt quae ipsa voluptatum quas laboriosam, a necessitatibus, architecto provident? Quis incidunt quibusdam illo tempore eveniet ad eos alias impedit, optio nemo quidem labore?
            Provident quis illo odio asperiores cumque tempore. Accusantium dignissimos impedit magni nam ad quas debitis quam excepturi vel. Consequuntur porro error aperiam consectetur, rem quod ipsam corporis magnam ex tenetur.
            Distinctio, ex, dicta illo magni voluptatibus dolores maiores repellat numquam, ipsum impedit vel. Eum rem quia iusto eius commodi debitis dolore culpa magnam. Doloremque vero officia voluptatum odit quam consequatur.
            Voluptates nostrum fugit est nisi atque expedita minus facere libero repellendus voluptatum quos cum at inventore nesciunt earum iure dignissimos rerum eos, assumenda velit dolor tempora, perspiciatis similique veritatis. Praesentium.
            Excepturi a corrupti laboriosam omnis vel ut temporibus dicta hic repudiandae tempore quisquam placeat deserunt architecto in nobis est, nihil perspiciatis. Quasi eligendi impedit aut vero commodi atque voluptatem odio.
            Tempora illo quibusdam ratione deleniti aspernatur impedit cum delectus voluptatem eius alias! Culpa cumque consequuntur ea fugit dolores modi magni, omnis asperiores necessitatibus iusto suscipit minima quasi temporibus! Impedit, ab!
            Dignissimos debitis eaque quae numquam repudiandae praesentium pariatur! Consequuntur perferendis architecto voluptate placeat impedit quae! Delectus, ex maxime? Enim similique sapiente numquam sit eligendi ipsum tempore consequuntur recusandae autem magnam!
            Corporis debitis animi vero maxime voluptas tempore omnis fugiat totam ut ad sint quibusdam odio, itaque quidem aperiam similique obcaecati distinctio? Est molestias illum qui nostrum voluptatibus commodi ducimus ipsam.
            Accusamus autem labore at perspiciatis minus. A hic nihil consequuntur deleniti. Distinctio qui est unde iste magnam, ipsam iure veritatis assumenda quaerat culpa sapiente omnis suscipit quod doloremque optio ex?
            Numquam a est earum atque accusantium? Nulla odio dolorum minima itaque, quidem ab animi! Nemo voluptatibus dolorum magni numquam ullam? Velit facere magni consectetur, accusantium perferendis reprehenderit saepe eaque quos.
            Sequi, suscipit eveniet accusantium assumenda similique error nemo dignissimos molestias at asperiores labore facilis exercitationem, possimus culpa modi numquam vero eius! Reprehenderit aspernatur esse fugiat alias. Recusandae perferendis consectetur adipisci.
            Autem accusantium reprehenderit repellat beatae provident laboriosam corrupti quisquam id ratione odio at assumenda eligendi impedit rerum enim suscipit, eaque facilis accusamus soluta corporis adipisci cupiditate quaerat pariatur? Id, expedita.
            Architecto illo facilis eos eligendi aperiam beatae pariatur, labore ratione mollitia sequi expedita quasi repellat, optio tenetur ex ipsum et, suscipit ad fuga id doloremque error repudiandae libero. Aspernatur, laudantium.
            Eum ex, reiciendis dolores tempore veritatis exercitationem nulla accusamus necessitatibus impedit autem quas iste illum similique corrupti optio sunt hic, animi doloremque velit et facilis. Ut impedit ipsam nisi fugit.
            Dicta sit, in earum vel iusto voluptatibus corrupti doloremque at culpa explicabo ab cupiditate excepturi ex asperiores cumque cum facere natus odit fugiat! Temporibus hic accusantium quod assumenda perspiciatis. Praesentium!
            Repellendus adipisci officia sunt quo consectetur et blanditiis consequuntur magni nostrum ducimus a, suscipit perferendis magnam fuga enim fugit id sequi ad numquam sed eaque quam laudantium molestias? Assumenda, modi!
            Deserunt voluptates nihil laboriosam eveniet consequatur porro iure deleniti quisquam minima, reprehenderit a quibusdam! Expedita dicta cumque nesciunt veniam consectetur. Numquam placeat magni id, porro ipsam excepturi culpa ab blanditiis.
            In error laborum deleniti asperiores nobis adipisci laudantium explicabo laboriosam sunt neque eaque eos quo eum consectetur iste, quas reiciendis cumque minima! Provident distinctio modi aliquam ipsum, tempora harum magnam.
            Explicabo aspernatur ullam sequi fugit minus vero blanditiis expedita vel itaque sunt? Distinctio ad officiis reiciendis corporis similique obcaecati dolorum, architecto a sit nihil excepturi voluptatibus vero, provident unde? Iure!
            Aliquid ipsa pariatur a, tenetur quis nobis tempore saepe assumenda at nostrum. Similique molestias voluptas harum optio voluptates nemo incidunt esse exercitationem perferendis! Saepe, fugiat voluptatibus reprehenderit possimus nulla explicabo.
            Reprehenderit accusamus tenetur deleniti quod, nobis odit alias omnis vero soluta autem culpa consequuntur earum, ea cumque sed hic ab incidunt reiciendis, perspiciatis cupiditate nulla. Veritatis deserunt repellat quae et.
            Explicabo minus qui necessitatibus beatae possimus voluptas sapiente consequatur, eum minima quo rerum obcaecati porro quae adipisci omnis distinctio exercitationem. Natus deserunt, praesentium repellendus quae in explicabo minima blanditiis a?
            Consectetur tenetur temporibus nemo, blanditiis quis maiores, ea sapiente vero optio, dolores quibusdam quasi nihil beatae maxime molestiae neque modi ipsum similique voluptates placeat dolore soluta provident eum? Iusto, repellendus?
            Consequatur velit repudiandae natus dignissimos laboriosam illum neque quisquam a necessitatibus, perspiciatis blanditiis facilis possimus, saepe maiores doloremque, voluptates sunt. Dolore neque eveniet cumque nostrum et quis odio ut excepturi!
            Odio voluptatem quos quae libero obcaecati voluptas, nulla cumque distinctio maxime laudantium? Magnam commodi quae obcaecati in recusandae? Itaque veniam quisquam non accusantium cumque aperiam quae fugit recusandae fugiat vitae?
            Ab repellat itaque nisi perspiciatis qui quo ex sunt consequuntur numquam enim? Placeat possimus quam alias deleniti esse sed sapiente nesciunt fugiat laboriosam reprehenderit, perspiciatis voluptatem mollitia minima illo ipsa.
            Ipsam nostrum commodi, ducimus maiores quaerat officia mollitia nisi facere ad incidunt quas aliquid consectetur illum, necessitatibus laborum dolor aliquam. Voluptas, inventore. Accusamus commodi officia officiis odit explicabo est praesentium?
            Nesciunt, placeat sunt optio corrupti aperiam facere recusandae iure nisi repudiandae magni molestiae est? Vitae odit, dolorum nostrum mollitia, perferendis minima aperiam excepturi ut quos dolorem maxime rerum. Deserunt, facere.
            Dolore at qui a unde necessitatibus hic soluta quod fugit voluptatem quasi molestias velit est blanditiis in similique, assumenda ipsum explicabo sed, labore itaque suscipit possimus. Nesciunt corporis maxime velit.
            Sint autem eum quaerat quis. Quidem assumenda quasi eos fuga quos aliquam at voluptatum, vero suscipit. Ipsum eum laudantium, cumque eius assumenda nesciunt illo vel modi cupiditate. Inventore, deserunt maiores.
            Natus, saepe quos quisquam itaque voluptas iure nobis. Quas cumque commodi optio rerum doloremque veritatis voluptatibus repellat vero est facilis ipsa quia labore unde nihil natus, in temporibus harum totam!
            Magnam pariatur fuga velit eos nesciunt, blanditiis ad, ex laborum ipsum voluptates illo! Earum id labore quaerat dolor cupiditate atque tempora laboriosam? Eveniet laborum ipsam mollitia accusamus voluptates pariatur ex.
            Ut officia repellat at architecto voluptate maiores! Dolor sint eum quam commodi? Labore, esse. Similique impedit voluptate neque sit dignissimos? Sunt libero quae suscipit porro debitis incidunt totam similique dolor?
            Ratione velit ullam animi impedit consectetur suscipit, reiciendis quae non repellat nam, cumque porro dignissimos illo quo. Repellendus consequatur blanditiis, error dolorem excepturi modi voluptatem quisquam et magni, sed neque.
            Quos perferendis animi exercitationem natus repudiandae nesciunt quisquam alias labore a corporis laudantium modi ducimus ullam molestiae dolores iure architecto ipsa odit, praesentium vitae itaque explicabo quidem dolorem iusto. Et!
            Atque, quasi impedit placeat animi iure similique possimus vitae eius quisquam provident quis sed labore tenetur natus? Nihil non cupiditate labore sunt. Ea ex corrupti dolorem soluta ipsum dignissimos eligendi?
            Nulla, quia suscipit quod vel ad dolore nobis perferendis, mollitia, ratione exercitationem quam debitis corrupti repellendus soluta. Magnam ipsam earum dolore provident corporis iusto animi quaerat numquam quas. Explicabo, asperiores.
            Ex, deserunt assumenda. Sunt, alias. Ratione provident necessitatibus facere dolor laboriosam optio, consectetur fugit, ullam consequatur quas vitae soluta perferendis rerum corrupti maxime reiciendis quo ducimus enim? Eligendi, numquam. Nemo?
            Delectus omnis laboriosam rem fuga. Neque amet ducimus ut dolor, totam nihil tempore, ipsa numquam minima, culpa animi temporibus esse necessitatibus qui. Ratione sunt aperiam esse, incidunt dolorum cumque soluta.
            Perspiciatis temporibus nesciunt mollitia nobis omnis quibusdam, hic, dolor assumenda aliquam porro eum ipsa expedita, facere nisi eos illum vero non. Ipsam omnis sunt eum ea sed hic beatae libero.
            Laboriosam, velit consequatur omnis natus architecto suscipit quo amet est quis fugit et nihil accusamus dolore veritatis sapiente recusandae porro ducimus eligendi? Voluptas deserunt exercitationem veniam, alias modi accusamus! Voluptates?
            Incidunt et minima odio modi! Repellat voluptates unde facere excepturi obcaecati commodi explicabo nobis, odit fugit eius, pariatur perspiciatis ipsam voluptatibus voluptas! Quos et laboriosam praesentium molestias, eos consectetur ipsa.
            Alias dolor accusamus voluptate, eveniet dolorem iure quos perferendis nobis doloremque quis, quibusdam officiis tenetur velit nam itaque et. Odit illo aperiam nam numquam consequatur laborum asperiores in unde? Praesentium!
            Odit dignissimos non optio libero corporis nostrum sit, voluptate pariatur natus, repudiandae suscipit recusandae rerum quia vero, quo in aliquid deserunt veritatis? Cumque, et? Eveniet ex tempore assumenda reprehenderit quis!
            Minus adipisci quos doloribus laborum quas distinctio quod beatae, culpa nulla rem? Exercitationem est, dolores autem expedita soluta, quos ad qui culpa magnam perferendis eos at minima veniam, similique recusandae?
            Ipsum numquam earum similique, ea ullam quia omnis quae assumenda voluptate eligendi sint amet magnam dolorum at debitis ratione laudantium cum. Earum magnam, rerum vel non beatae odio minus excepturi.
            Aperiam accusantium iusto voluptate possimus esse aut harum, laborum ad architecto. Ipsam placeat aut voluptates delectus optio quo voluptate, porro ab accusamus saepe deserunt veniam unde facilis consequatur amet. Deserunt.
            Accusamus veritatis, quibusdam impedit repellat adipisci labore laborum, dolor provident, cumque ipsa nisi! Maxime in placeat autem facere fugit id quis voluptatem soluta. Vitae repudiandae reprehenderit qui aut rem ut.
            Laudantium doloremque earum libero repudiandae illo consequatur molestias! Unde, eum architecto! Delectus quia illum sunt ratione, id omnis et optio deleniti aspernatur odit eius vel qui voluptatibus fugit saepe nesciunt?
            Et modi, possimus accusantium iusto accusamus quos placeat incidunt. Voluptatem sint, libero, necessitatibus voluptate at deleniti voluptas nihil asperiores eum ut repellat deserunt vero saepe reprehenderit nam est dolores placeat?
            Fugit cumque quae odio quas officia. Ut consectetur libero eum illo. Alias architecto itaque culpa quod doloribus ad nesciunt reiciendis officiis distinctio asperiores ipsa dicta in quo neque, placeat facilis.
            Eveniet, quidem, cum ipsam, enim delectus a fugiat assumenda facilis voluptas adipisci aliquid laudantium eaque fugit quod eos. Veniam sequi culpa obcaecati vitae officiis ex reprehenderit minus! Quam, aperiam adipisci.
            Eaque et, qui earum itaque, in exercitationem eos maiores ullam corrupti alias voluptatibus! Obcaecati placeat dolores a repellendus deleniti quos beatae eos deserunt? Iusto culpa atque, tenetur quos incidunt officiis.
            Iusto cupiditate esse blanditiis doloremque eligendi? Eveniet, mollitia nihil earum sapiente amet ullam voluptas vitae quod dignissimos placeat! Non illum ad dicta error unde accusantium blanditiis porro quis iure odio.
            Libero, quidem voluptatem sit esse fuga veritatis odio nam fugiat aliquid est reiciendis soluta quas at in deserunt optio, quo accusamus consequatur. Veniam iste explicabo rerum commodi at fugit quaerat.
            Assumenda et molestias sunt dolore nostrum ratione totam? Amet, natus consequatur eveniet fugit quasi repellendus dolorum quam exercitationem corrupti omnis ea nisi accusamus culpa, nulla ullam voluptatibus! Ipsam, tenetur officiis?
            Aperiam iste sint praesentium eveniet. Ratione sed voluptates nam praesentium dolorum architecto. Dolorem aliquam, dolorum suscipit ratione molestiae, nemo libero itaque ad culpa cum commodi? Illo exercitationem aspernatur ratione perferendis.
            Dolores incidunt eius ipsum. Harum quasi ratione nemo sit repellat quisquam eos fugit dolorum sequi nihil adipisci doloremque facilis quod, nam voluptate, ut quas. Aperiam eos reiciendis veritatis amet unde!
            Maiores, nesciunt? Aperiam ipsum dolores dicta, molestiae impedit in delectus sequi, est enim nesciunt veniam incidunt totam repudiandae tempora maiores odio deleniti, facilis sunt expedita ea! Voluptatem suscipit dignissimos perferendis?
            Vel reiciendis quisquam sunt, asperiores unde veniam aliquid corporis quae, porro ratione in corrupti sint voluptas possimus? Quaerat non, vel et dolore beatae magni consequuntur eius harum error omnis nobis?
            Quam labore, veritatis accusantium molestias laudantium officiis repellat eligendi illo quisquam quo a ratione soluta esse cupiditate, dolorem fugiat itaque pariatur, minus culpa inventore exercitationem quod cum enim. Ipsam, cumque?
            Ratione, quia laudantium. Distinctio dicta provident mollitia quam. Officiis, inventore maxime praesentium tempore dicta fuga quaerat. Dignissimos, reiciendis, tenetur in magni fuga exercitationem cum expedita nisi, officia accusantium ratione distinctio?
            Ratione, deleniti consectetur eos consequuntur, quas nobis voluptatum temporibus labore commodi, eaque repellat! Saepe fugit illo qui, laboriosam iure nisi recusandae! Quas, quasi amet quibusdam optio nulla ea consectetur consequatur.
            Vero dicta nobis perferendis, at deleniti ex nihil. In magni porro quod. Dolore inventore hic aliquid enim, esse consectetur repellat aperiam neque! Tenetur, beatae neque expedita quos perspiciatis debitis maiores?
            Suscipit, mollitia. Perspiciatis, quia quos. Soluta maxime sapiente odio corporis corrupti ea ut molestias incidunt illo in numquam error vitae blanditiis nam, voluptas sint suscipit necessitatibus! Molestiae recusandae voluptatum in!
            Sequi totam, voluptatem blanditiis veritatis eum vero beatae atque recusandae modi hic rerum. Exercitationem, at officia deserunt repellat ab, laudantium dolore dignissimos est qui quos corrupti commodi alias dolorum cupiditate!
            Corporis deleniti qui rem sunt fugiat eum incidunt accusamus eveniet veniam, laborum aut aliquid reiciendis temporibus cum explicabo eius, sed distinctio iste culpa unde consectetur! Numquam tempora et odio earum?
            Ea debitis nobis esse dignissimos a hic blanditiis nihil. Itaque molestias deserunt soluta repudiandae eos possimus doloribus quasi corporis aut placeat, magnam eum corrupti tempora praesentium unde esse in aliquam!
            Maxime nostrum minima quaerat excepturi corporis? Pariatur officiis perferendis blanditiis quisquam consectetur. In nobis sequi labore, illo quisquam nesciunt adipisci suscipit? Facere vel quasi cupiditate quis, commodi excepturi! Id, veniam.
            Laborum, iste! Dolores, commodi harum laboriosam aliquam exercitationem illum officiis praesentium molestiae unde voluptas tenetur assumenda repudiandae quis ab voluptates molestias odit eveniet quo perspiciatis sed, perferendis tempora in distinctio.
            Esse tenetur velit similique sed impedit dignissimos itaque enim hic laudantium quibusdam, dolor, voluptate, accusamus iste pariatur deserunt laborum quasi repudiandae repellendus excepturi id atque? Perspiciatis quas at cupiditate consequatur.
            Porro delectus necessitatibus maiores ducimus repellendus, ratione tempore modi ad aspernatur in est! Illum veniam facilis nam quod, eum unde ipsa saepe quae debitis molestias recusandae ab excepturi consequatur tempore?
            Architecto iure, officia, voluptates suscipit quod corrupti ratione voluptatum itaque quo tenetur animi, natus accusantium quis doloremque asperiores repellendus. Veritatis eveniet vero est voluptatem pariatur, omnis dicta dolore provident accusantium?</p>
        </div>
    )
}
