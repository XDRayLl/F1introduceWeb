import "../CSS/ContentCss.css";
import F1Logo from "../assets/F1Logo.png";
import F1opening from "../assets/F1opening.mp4";

function Content() {
  return (
    <div className="AllContent">
      <div className="content">
        From who the drivers and teams are through to where the races are held
        and how you can watch the action, we've rounded up everything you need
        to know about F1.
      </div>
      <div className="innerContent">
        <img
          className="img1"
          src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2025/Miscellaneous/Triple%20split%20(2).webp"
          alt=""
        />
        <div className="textArea">
          <div className="text11">
            If you’re new to Formula 1, you may have a few questions about the
            sport and how our action-packed tour of the world is staged year in,
            year out. Well, we’ve got you covered. In an all-in-one explainer,
            we take you through the basics from how the championship was formed
            to the circuits visited, the drivers behind the wheel and the teams
            involved up and down the pit lane…
          </div>
          <div className="innerTitle">What is Formula 1?</div>
          <div className="text1">
            As the highest class of international racing for single-seater
            formula racing cars, Formula 1 is the pinnacle of motorsport and the
            world’s most prestigious motor racing competition. There really is
            nothing like it.
          </div>
        </div>
        <div className="textArea">
          <div className="text1">
            It’s a team sport (it needs to be to change all four tyres on a car
            in under two seconds!), though the drivers are more like fighter
            pilots than sportspeople. Battling extreme g-forces, making daring
            decisions in the blink of an eye – and at more than 370kph (230mph).
            To be the best, F1 drivers push themselves – and their incredibly
            innovative machines – to the very limit.
          </div>
          <div className="text1">
            Drivers compete for the esteemed F1 Drivers’ Championship, while the
            teams fight for the F1 Teams’ Championship and prize money based on
            their position at the end of the season.
          </div>
          <div className="text1">
            Each race is known as a Grand Prix, and they’re held in incredible
            locations around the world. The 2025 Formula 1 calendar – a year
            that marks the 75th anniversary of the FIA Formula 1 World
            Championship – features 24 Grand Prix weekends, which include six F1
            Sprint races, taking place from March through December.
          </div>
          <div className="Video">
            <video src={F1opening} width="1374" controls></video>
          </div>
        </div>
        <div className="textArea">
          <div className="innerTitle">
            How many drivers and teams race in F1?
          </div>
          <div className="text1">
            A total of 10 teams and 20 drivers from around the world make up the
            current Formula 1 grid, with each squad fielding two cars. Driver
            experience ranges from multiple World Champions like Lewis
            Hamilton, Max Verstappen and Fernando Alonso, to rookie racers in
            their first full-time F1 seasons such as Kimi Antonelli, Oliver
            Bearman and Gabriel Bortoleto. When it comes to teams, there are
            those who have been in Formula 1 since the early years, such
            as Ferrari (competing continuously since the very first season in
            1950) and McLaren, and relative newcomers like Haas who entered the
            sport ahead of the 2016 season.
          </div>
        </div>
        <div className="textArea">
          <div className="innerTitle">Where does F1 race?</div>
          <div className="text1">
            A total of 24 races in 21 countries across five continents are
            included on the Formula 1 calendar. Classic circuits such
            as Silverstone, Spa-Francorchamps and Suzuka, combined with more
            recent additions including Las Vegas, Miami and Saudi Arabia, give
            an exciting and varied selection of tracks. Monaco, Monza,
            Silverstone and Spa are circuits that still feature on the schedule
            from the very first F1 season in 1950, although plenty of
            safety-based changes and track layout modifications have been made
            since then.
          </div>
          <div>
            <img
              className="img1"
              src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/Campaign/BGs/1020274961-LAT-20240707-GP2412_150221_67A3278%20169.webp"
              alt=""
            />
            <div className="imgComment">
              Silverstone hosted the first F1 race in 1950 and remains an
              incredibly popular venue today
            </div>
          </div>
        </div>
        <div className="textArea">
          <div className="text1">
            Formula 1’s inaugural season featured seven rounds, spread out from
            May to September, predominantly staged in Europe – the exception
            being the Indianapolis 500 in the United States, which most F1
            drivers sat out.
          </div>
          <div className="text1">
            New European events arrived as F1 developed, with the following
            decades also bringing adventures to South America, North America,
            Africa, Asia, Australia and, most recently, the Middle East – well
            and truly putting the ‘world’ in World Championship.
          </div>
          <div className="innerTitle">How does the F1 weekend work?</div>
          <div className="text1">
            The standard Formula 1 weekend sees each event take place over three
            days – typically Friday, Saturday and Sunday.
          </div>
          <div className="text1">
            Friday traditionally features two 60-minute Free Practice sessions
            (FP1 and FP2) for teams to set up and optimise their cars. These are
            typically used to make sure the car works as it should, before
            set-up changes are then made and race preparations continue.{" "}
          </div>
          <div>
            <img
              className="img1"
              src="https://media.formula1.com/image/upload/t_16by9South/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2024/F1_Grand_Prix_of_Italy/2169753761.webp"
              alt=""
            />
            <div className="imgComment">
              Millions of fans watch F1 as the sport tours the world every year
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="textArea">
          <div className="text1">
            On Saturday, after a final practice session (FP3), drivers head into
            a three-stage session called Qualifying. The slowest five drivers
            from the 18-minute Q1 phase are eliminated from the session, before
            five more go out after the 15-minute Q2 segment. That sets positions
            20-11 on the grid prior to any penalties. The final 12-minute-long
            Q3 then decides the top 10 grid slots, along with the coveted pole
            position for the fastest driver.
          </div>
          <div className="text1">
            Sunday brings the Grand Prix itself, where drivers battle it out to
            score points, grab a spot on the podium and reach the chequered flag
            first to win the race.
          </div>

          <div className="innerTitle">How long do F1 races last?</div>
          <div className="text1">
            Formula 1 races generally last between an hour-and-a-half to two
            hours, though this can be impacted by Safety Car periods that slow
            the field down or red flags that halt the action – see the 2023
            Australian Grand Prix as a prime example.
          </div>
          <div className="text1">
            Each race on the calendar has a set number of laps based on the
            length of their circuit. The distance of every race is almost always
            equal to the fewest number of laps that exceed 305 kilometres (189.5
            miles).
          </div>
          <div className="text1">
            Monaco is an exception to the rule, where the race length is equal
            to the fewest number of laps needed to exceed a distance of 260km
            (161.5 miles), given the lower speeds of its street circuit nature.{" "}
          </div>
          <div>
            <img
              className="img1"
              src="https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2024/F1_Grand_Prix_of_China___Sprint__Qualifying/2149347811.webp"
              alt=""
            />
            <div className="imgComment">
              F1 Sprint events have added even more action in recent seasons
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="textArea">
          <div className="innerTitle">Why is it called Formula 1?</div>
          <div className="text1">
            The reason why Formula 1 is called Formula 1 is two-fold.
          </div>
          <div className="text1">
            First up, the ‘Formula’ is a set of rules – covering car design,
            engine size, component usage and much, much more – that all
            competitors must abide by. Secondly, the ‘1’ simply denotes that it
            is the premier formula.
          </div>
          <div>
            <img
              className="img1"
              src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/Campaign/BGs/BGT%20F2%20F3%20Cars.webp"
              alt=""
            />
            <div className="imgComment">
              F1 support championships Formula 2 (left) and Formula 3 (right)
              are single-make championships, each with their own ‘Formula’
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="textArea">
          <div className="innerTitle">When did Formula 1 start?</div>
          <div className="text1">
            Formula 1 was formed as a World Championship competition back in
            1950, with the first-ever race held at the Silverstone Circuit – a
            former Royal Air Force station – in the United Kingdom on May 13 of
            that year.
          </div>
          <div className="text1">
            Six more events were staged in a season which saw Alfa Romeo
            driver Giuseppe ‘Nino’ Farina become the sport’s first World
            Champion – edging out team mates Juan Manuel Fangio and Luigi
            Fagioli.{" "}
          </div>
          <div className="text1">
            Six more events were staged in a season which saw Alfa Romeo
            driver Giuseppe ‘Nino’ Farina become the sport’s first World
            Champion – edging out team mates Juan Manuel Fangio and Luigi
            Fagioli.{" "}
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="textArea">
          <div className="innerTitle">
            Who are the most successful F1 drivers of all time?
          </div>
          <div className="text1">
            From F1’s all-time list of World Champions, Lewis Hamilton shares
            the overall record of seven drivers’ titles with Michael Schumacher.
            Hamilton claimed his first title with McLaren in 2008, before adding
            six more at Mercedes between 2014 and 2020, while Schumacher won the
            1994 and 1995 crowns with Benetton, adding another five (in a row)
            at Ferrari from 2000 to 2004.
          </div>
          <div className="text1">
            As it stands, Hamilton also holds the record for the most race
            victories, logging 105 ahead of the 2025 season, along with the most
            pole positions too, having taken 104.
          </div>
          <div className="text1">
            Fellow multiple champions include Juan Manuel Fangio, who racked up
            five titles in the 1950s, Alain Prost, who won four across the 1980s
            and 1990s, Sebastian Vettel, who collected a quartet of
            championships on the bounce from 2010 to 2013, and reigning
            champion Max Verstappen, who took his fourth consecutive crown in
            2024.
          </div>
          <div>
            <img
              className="img1"
              src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/hamilton-schumacher.webp"
              alt=""
            />
            <div className="imgComment">
              Lewis Hamilton and Michael Schumacher both have seven world titles
              each
            </div>
          </div>
          <div className="text1">
            Ayrton Senna was a driver who looked poised to reach even higher
            numbers in his legendary F1 career, but a tragic accident at the
            1994 San Marino Grand Prix left him with a tally of three, alongside
            several other famous names.
          </div>
          <div className="text1">
            Fernando Alonso, who won back-to-back in 2005 and 2006, joins
            Hamilton and Verstappen as the only title-winning drivers on the
            grid in 2025.
          </div>
          <div className="innerTitle">
            Who are the most successful F1 teams of all time?
          </div>
          <div className="text1">
            While the F1 drivers’ World Championship was in place from the
            inaugural 1950 season, the teams’ equivalent did not arrive until
            1958, when Vanwall triumphed over Ferrari.
          </div>
          <div className="text1">
            Since then, Ferrari have established themselves as the most
            successful team in terms of championship wins, collecting 16 Teams’
            titles over the decades. Williams and McLaren are next on the list
            with nine crowns each, followed by Mercedes on eight. Red Bull have
            six.
          </div>
          <div className="text1">
            As for drivers’ titles, Ferrari lead the way on 15, with McLaren
            their nearest challengers on 12, ahead of Mercedes (nine), Red Bull
            (eight) and Williams (seven).
          </div>
          <div className="text1">
            Ferrari have also racked up the most race victories, having claimed
            248 as of the 2025 Canadian Grand Prix, followed by McLaren (196),
            Mercedes (130), Red Bull (124) and Williams (114).
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
