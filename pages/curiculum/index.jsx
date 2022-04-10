import Breadcrumb from 'components/Breadcrumb';
import DownloadButton from 'components/DownloadButton';
import Link from 'next/link';

const CuriculumPage = () => {
	return (
		<div className=' page__container'>
			<Breadcrumb title={'Curiculum'} />
			<div className='container curiculum__container'>
				<h1 className='curiculum__headers'>Aims</h1>
				<p>
					The national curriculum for mathematics aims to ensure that all
					pupils:
				</p>
				<ul>
					<li>
						become fluent in the fundamentals of mathematics, including through
						varied and frequent practice with increasingly complex problems over
						time, so that pupils develop conceptual understanding and the
						ability to recall and apply knowledge rapidly and accurately
					</li>
					<li>
						reason mathematically by following a line of enquiry, conjecturing
						relationships and generalisations, and developing an argument,
						justification or proof using mathematical language
					</li>
					<li>
						can solve problems by applying their mathematics to a variety of
						routine and non-routine problems with increasing sophistication,
						including breaking down problems into a series of simpler steps and
						persevering in seeking solutions
					</li>
				</ul>
				<p>
					Mathematics is an interconnected subject in which pupils need to be
					able to move fluently between representations of mathematical ideas.
					The programmes of study are, by necessity, organised into apparently
					distinct domains, but pupils should make rich connections across
					mathematical ideas to develop fluency, mathematical reasoning and
					competence in solving increasingly sophisticated problems. They should
					also apply their mathematical knowledge to science and other subjects.
				</p>
				<p>
					The expectation is that the majority of pupils will move through the
					programmes of study at broadly the same pace. However, decisions about
					when to progress should always be based on the security of pupils’
					understanding and their readiness to progress to the next stage.
					Pupils who grasp concepts rapidly should be challenged through being
					offered rich and sophisticated problems before any acceleration
					through new content. Those who are not sufficiently fluent with
					earlier material should consolidate their understanding, including
					through additional practice, before moving on.
				</p>
				<h1 className='curiculum__headers'>
					What is expected to learn in Key Stages 1 and 2:{' '}
				</h1>
				<p>
					The principal focus of mathematics teaching in key stage 1 is to
					ensure that pupils develop confidence and mental fluency with whole
					numbers, counting and place value. This should involve working with
					numerals, words and the 4 operations, including with practical
					resources [for example, concrete objects and measuring tools].
					<span>
						At this stage, pupils should develop their ability to recognise,
						describe, draw, compare and sort different shapes and use the
						related vocabulary. Teaching should also involve using a range of
						measures to describe and compare different quantities such as
						length, mass, capacity/volume, time and money.
					</span>
					<span>
						By the end of year 2, pupils should know the number bonds to 20 and
						be precise in using and understanding place value. An emphasis on
						practice at this early stage will aid fluency.
					</span>
					<span>
						Pupils should read and spell mathematical vocabulary, at a level
						consistent with their increasing word reading and spelling knowledge
						at key stage 1.
					</span>
					<span>
						The principal focus of mathematics teaching in lower key stage 2 is
						to ensure that pupils become increasingly fluent with whole numbers
						and the 4 operations, including number facts and the concept of
						place value. This should ensure that pupils develop efficient
						written and mental methods and perform calculations accurately with
						increasingly large whole numbers.
					</span>
					<span>
						At this stage, pupils should develop their ability to solve a range
						of problems, including with simple fractions and decimal place
						value. Teaching should also ensure that pupils draw with increasing
						accuracy and develop mathematical reasoning so they can analyse
						shapes and their properties, and confidently describe the
						relationships between them. It should ensure that they can use
						measuring instruments with accuracy and make connections between
						measure and number.
					</span>
					<span>
						By the end of year 4, pupils should have memorised their
						multiplication tables up to and including the 12 multiplication
						table and show precision and fluency in their work.
					</span>
					<span>
						Pupils should read and spell mathematical vocabulary correctly and
						confidently, using their growing word-reading knowledge and their
						knowledge of spelling.
					</span>
					<span>
						The principal focus of mathematics teaching in upper key stage 2 is
						to ensure that pupils extend their understanding of the number
						system and place value to include larger integers. This should
						develop the connections that pupils make between multiplication and
						division with fractions, decimals, percentages and ratio.
					</span>
					<span>
						At this stage, pupils should develop their ability to solve a wider
						range of problems, including increasingly complex properties of
						numbers and arithmetic, and problems demanding efficient written and
						mental methods of calculation. With this foundation in arithmetic,
						pupils are introduced to the language of algebra as a means for
						solving a variety of problems. Teaching in geometry and measures
						should consolidate and extend knowledge developed in number.
						Teaching should also ensure that pupils classify shapes with
						increasingly complex geometric properties and that they learn the
						vocabulary they need to describe them.
					</span>
					<span>
						By the end of year 6, pupils should be fluent in written methods for
						all 4 operations, including long multiplication and division, and in
						working with fractions, decimals and percentages.
					</span>
					Pupils should read, spell and pronounce mathematical vocabulary
					correctly.
				</p>
				<h3 className='curiculum__headers'>Subject Content: </h3>
				<ul>
					<li>Number – number and place value</li>
					<li>Number – addition and subtraction</li>
					<li>Number – multiplication and division</li>
					<li>Number – fractions(including decimals and percentages)</li>
					<li>Ratio and proportion</li>
					<li>Algebra</li>
					<li>Measurement</li>
					<li>Geometry – properties of shapes</li>
					<li>Geometry – position and direction</li>
					<li>Statistics</li>
				</ul>
				<DownloadButton
					title=' Download Curiculum for Stages 1 and 2:'
					url='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/335158/PRIMARY_national_curriculum_-_Mathematics_220714.pdf'
				/>
				<h1 className='curiculum__headers'>
					What is expected to learn in Key Stage 3:{' '}
				</h1>
				<p>
					Mathematics is an interconnected subject in which pupils need to be
					able to move fluently between representations of mathematical ideas.
					The programme of study for key stage 3 is organised into apparently
					distinct domains, but pupils should build on key stage 2 and
					connections across mathematical ideas to develop fluency, mathematical
					reasoning and competence in solving increasingly sophisticated
					problems. They should also apply their mathematical knowledge in
					science, geography, computing and other subjects.
					<span>
						Decisions about progression should be based on the security of
						pupils’ understanding and their readiness to progress to the next
						stage. Pupils who grasp concepts rapidly should be challenged
						through being offered rich and sophisticated problems before any
						acceleration through new content in preparation for key stage 4.
						Those who are not sufficiently fluent should consolidate their
						understanding, including through additional practice, before moving
						on.
					</span>
					Through the mathematics content, pupils should be taught to:
				</p>
				<h3 className='curiculum__headers'>Develop Fluency </h3>
				<ul>
					<li>
						consolidate their numerical and mathematical capability from key
						stage 2 and extend their understanding of the number system and
						place value to include decimals, fractions, powers and roots
					</li>
					<li>
						select and use appropriate calculation strategies to solve
						increasingly complex problems
					</li>
					<li>
						use algebra to generalise the structure of arithmetic, including to
						formulate mathematical relationships
					</li>
					<li>
						substitute values in expressions, rearrange and simplify
						expressions, and solve equations
					</li>
					<li>
						move freely between different numerical, algebraic, graphical and
						diagrammatic representations [for example, equivalent fractions,
						fractions and decimals, and equations and graphs]
					</li>
					<li>
						develop algebraic and graphical fluency, including understanding
						linear and simple quadratic functions
					</li>
					<li>
						use language and properties precisely to analyse numbers, algebraic
						expressions, 2-D and 3-D shapes, probability and statistics
					</li>
				</ul>
				<h2 className='curiculum__headers'>Reason Mathematically </h2>
				<ul>
					<li>
						extend their understanding of the number system; make connections
						between number relationships, and their algebraic and graphical
						representations
					</li>
					<li>
						extend and formalise their knowledge of ratio and proportion in
						working with measures and geometry, and in formulating proportional
						relations algebraically
					</li>
					<li>
						identify variables and express relations between variables
						algebraically and graphically
					</li>
					<li>
						make and test conjectures about patterns and relationships; look for
						proofs or counter-examples
					</li>
					<li>
						begin to reason deductively in geometry, number and algebra,
						including using geometrical constructions
					</li>
					<li>
						interpret when the structure of a numerical problem requires
						additive, multiplicative or proportional reasoning
					</li>
					<li>
						explore what can and cannot be inferred in statistical and
						probabilistic settings, and begin to express their arguments
						formally
					</li>
				</ul>
				<h2 className='curiculum__headers'>Solve Problems </h2>
				<ul>
					<li>
						develop their mathematical knowledge, in part through solving
						problems and evaluating the outcomes, including multi-step problems
					</li>
					<li>
						develop their use of formal mathematical knowledge to interpret and
						solve problems, including in financial mathematics
					</li>
					<li>
						begin to model situations mathematically and express the results
						using a range of formal mathematical representations
					</li>
					<li>
						select appropriate concepts, methods and techniques to apply to
						unfamiliar and non-routine problems
					</li>
				</ul>
				<h3 className='curiculum__headers'>Subject Content: </h3>
				<ul>
					<li>Number</li>
					<li>Algebra</li>
					<li>Ratio, proportions and rates of change</li>
					<li>Geometry and measures</li>
					<li>Probability</li>
					<li>Statistics</li>
				</ul>
				<DownloadButton
					title=' Download Curiculum for Stage 3:'
					url='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/239058/SECONDARY_national_curriculum_-_Mathematics.pdf'
				/>
				<h1 className='curiculum__headers'>
					What is expected to learn in Key Stage 4:{' '}
				</h1>
				<p>
					This programme of study specifies: the mathematical content that
					should be taught to all pupils, in standard type additional
					mathematical content to be taught to more highly attaining pupils, in
					braces {}
					<span>
						Together, the mathematical content set out in the key stage 3 and
						key stage 4 programmes of study covers the full range of material
						contained in the GCSE Mathematics qualification. Wherever it is
						appropriate, given pupils’ security of understanding and readiness
						to progress, pupils should be taught the full content set out in
						this programme of study.
					</span>
					Through the mathematics content, pupils should be taught to:
				</p>
				<h2 className='curiculum__headers'>Develop Fluency </h2>
				<ul>
					<li>
						consolidate their numerical and mathematical capability from key
						stage 2 and extend their understanding of the number system and
						place value to include decimals, fractions, powers and roots{' '}
						{'{and fractional indices}'}
					</li>
					<li>
						select and use appropriate calculation strategies to solve
						increasingly complex problems, including exact calculations
						involving multiples of π {'{and surds}'}, use of standard form and
						application and interpretation of limits of accuracy
					</li>
					<li>
						consolidate their algebraic capability from key stage 3 and extend
						their understanding of algebraic simplification and manipulation to
						include quadratic expressions,{' '}
						{'{and expressions involving surds and algebraic fractions}'}
					</li>
					<li>
						extend fluency with expressions and equations from key stage 3, to
						include quadratic equations, simultaneous equations and inequalities
					</li>
					<li>
						move freely between different numerical, algebraic, graphical and
						diagrammatic representations, including of linear, quadratic,
						reciprocal, {'{exponential and trigonometric}'} functions
					</li>
					<li>use mathematical language and properties precisely</li>
				</ul>
				<h2 className='curiculum__headers'>Reason Mathematically </h2>
				<ul>
					<li>
						extend and formalise their knowledge of ratio and proportion,
						including trigonometric ratios, in working with measures and
						geometry, and in working with proportional relations algebraically
						and graphically
					</li>
					<li>
						extend their ability to identify variables and express relations
						between variables algebraically and graphically
					</li>
					<li>
						make and test conjectures about the generalisations that underlie
						patterns and relationships; look for proofs or counter-examples;
						begin to use algebra to support and construct arguments{' '}
						{'{and proofs}'}
					</li>
					<li>
						reason deductively in geometry, number and algebra, including using
						geometrical constructions
					</li>
					<li>
						interpret when the structure of a numerical problem requires
						additive, multiplicative or proportional reasoning
					</li>
					<li>
						explore what can and cannot be inferred in statistical and
						probabilistic settings, and express their arguments formally
					</li>
					<li>
						assess the validity of an argument and the accuracy of a given way
						of presenting information
					</li>
				</ul>
				<h2 className='curiculum__headers'>Solve Problems </h2>
				<ul>
					<li>
						develop their mathematical knowledge, in part through solving
						problems and evaluating the outcomes, including multi-step problems
					</li>
					<li>
						develop their use of formal mathematical knowledge to interpret and
						solve problems, including in financial mathematics
					</li>
					<li>
						make and use connections between different parts of mathematics to
						solve problems
					</li>
					<li>
						model situations mathematically and express the results using a
						range of formal mathematical representations, reflecting on how
						their solutions may have been affected by any modelling assumptions
					</li>
					<li>
						select appropriate concepts, methods and techniques to apply to
						unfamiliar and non-routine problems; interpret their solution in the
						context of the given problem
					</li>
				</ul>
				<h3 className='curiculum__headers'>Subject Content: </h3>
				<ul>
					<li>Number</li>
					<li>Algebra</li>
					<li>Ratio, proportions and rates of change</li>
					<li>Geometry and measures</li>
					<li>Probability</li>
					<li>Statistics</li>
				</ul>
				<DownloadButton
					title=' Download Curiculum for Stage 4:'
					url='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/331882/KS4_maths_PoS_FINAL_170714.pdf'
				/>
			</div>
		</div>
	);
};

export default CuriculumPage;
