import db from '../api/db'
import MostFollowedUsersClient from './MostFollowedUsersClient'
import style from './PopularUsers.module.css'

export default async function HomeFeed(fid: any) {
  
  const getData = async function(){
    const data = await db(`
        SELECT
            ROW_NUMBER() OVER (ORDER BY COUNT(*) DESC) AS rank,
            pwa.fname AS username,
            pwa.display_name,
            COUNT(*) AS follower_count
        FROM
            links l
        JOIN
            profile_with_addresses pwa ON l.target_fid = pwa.fid
        WHERE
            l.type = 'follow'
            AND l.deleted_at IS NULL
        GROUP BY
            pwa.fname, pwa.display_name
        ORDER BY
            follower_count DESC
        LIMIT 100;

      `)
    return data
  }

  const data = await getData()
  
  return (
    <>
        <div className={style['popular-users-wrapper']}>
            <section>
                <h2>Most Followed</h2>
                <a className={style['header-subtitle']}>Top 100 users with the most followers. <i>Updated seconds ago.</i></a>
            </section>
            <MostFollowedUsersClient data={data} />
        </div>
    </>
    )
}