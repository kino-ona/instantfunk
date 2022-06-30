<header class="header">
	<div class="header__container">
		<h1 class="logo">
			<a href="#" class="logo__link"><span class="a11y">INSTANTPUNK</span></a>
		</h1>
		<div class="nav">
			<div class="nav__container">
				<button type="button" class="nav__trigger">
					<i class="nav__ico"></i>
					SHOP
				</button>
				<div class="nav__layer">
					<nav class="nav__menu nav__menu--category">
						<ul class="nav__list">
							<li class="nav__item"><a href="#" class="nav__link">ALL</a></li>
							<li class="nav__item"><a href="#" class="nav__link">OUTER</a></li>
							<li class="nav__item"><a href="#" class="nav__link">TOP</a></li>
							<li class="nav__item"><a href="#" class="nav__link">BOTTOM</a></li>
							<li class="nav__item"><a href="#" class="nav__link">ACC</a></li>
							<li class="nav__item"><a href="#" class="nav__link">ETC</a></li>
						</ul>
					</nav>
					<nav class="nav__menu nav__menu--theme">
						<ul class="nav__list">
							<li class="nav__item"><a href="#" class="nav__link">MID SEASON OFF</a></li>
							<li class="nav__item"><a href="#" class="nav__link">INSTANTFUNK GOLF</a></li>
							<li class="nav__item"><a href="#" class="nav__link">22SS PART3</a></li>
							<li class="nav__item"><a href="#" class="nav__link">22SS PART2</a></li>
							<li class="nav__item"><a href="#" class="nav__link">22SS DENIM & SWEAT</a></li>
						</ul>
					</nav>
					<div class="nav__marquee nav__marquee--campaign">
						<p class="nav__text">Instant campaign <span>®</span></p>
						<div class="marquee">
							<div class="marquee__mask">
								<p class="marquee__loop">
									<span class="marquee__text">Instant campaign <span>®</span></span>
									<span class="marquee__text">Instant campaign <span>®</span></span>
									<span class="marquee__text">Instant campaign <span>®</span></span>
									<span class="marquee__text">Instant campaign <span>®</span></span>
								</p>
								<p class="marquee__loop">
									<span class="marquee__text">Instant campaign <span>®</span></span>
									<span class="marquee__text">Instant campaign <span>®</span></span>
									<span class="marquee__text">Instant campaign <span>®</span></span>
									<span class="marquee__text">Instant campaign <span>®</span></span>
								</p>
								<p class="marquee__loop">
									<span class="marquee__text">Instant campaign <span>®</span></span>
									<span class="marquee__text">Instant campaign <span>®</span></span>
									<span class="marquee__text">Instant campaign <span>®</span></span>
									<span class="marquee__text">Instant campaign <span>®</span></span>
								</p>
								<p class="marquee__loop">
									<span class="marquee__text">Instant campaign <span>®</span></span>
									<span class="marquee__text">Instant campaign <span>®</span></span>
									<span class="marquee__text">Instant campaign <span>®</span></span>
									<span class="marquee__text">Instant campaign <span>®</span></span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<button type="button" class="nav__trigger">CLOSET</button>
				<div class="nav__layer">@@if (login === 'true') {
					<nav class="nav__menu">
						<ul class="nav__list">
							<li class="nav__item"><a href="#" class="nav__link">MYPAGE</a></li>
							<li class="nav__item"><a href="#" class="nav__link nav__link--cart">CART <span>(3)</span></a></li>
							<li class="nav__item"><a href="#" class="nav__link">MEMBERSHIP</a></li>
							<li class="nav__item"><a href="#" class="nav__link">SIGN OUT</a></li>
						</ul>
					</nav>
					<div class="nav__marquee">
						<div class="marquee">
							<div class="marquee__mask">
								<p class="marquee__loop">
									<span class="marquee__text">Welcom Chan123</span>
									<span class="marquee__text">Welcom Chan123</span>
									<span class="marquee__text">Welcom Chan123</span>
									<span class="marquee__text">Welcom Chan123</span>
								</p>
								<p class="marquee__loop">
									<span class="marquee__text">Welcom Chan123</span>
									<span class="marquee__text">Welcom Chan123</span>
									<span class="marquee__text">Welcom Chan123</span>
									<span class="marquee__text">Welcom Chan123</span>
								</p>
								<p class="marquee__loop">
									<span class="marquee__text">Welcom Chan123</span>
									<span class="marquee__text">Welcom Chan123</span>
									<span class="marquee__text">Welcom Chan123</span>
									<span class="marquee__text">Welcom Chan123</span>
								</p>
								<p class="marquee__loop">
									<span class="marquee__text">Welcom Chan123</span>
									<span class="marquee__text">Welcom Chan123</span>
									<span class="marquee__text">Welcom Chan123</span>
									<span class="marquee__text">Welcom Chan123</span>
								</p>
							</div>
						</div>
					</div>}@@if (login !== 'true') {
					<nav class="nav__menu">
						<ul class="nav__list">
							<li class="nav__item"><a href="#" class="nav__link">LOGIN</a></li>
							<li class="nav__item"><a href="#" class="nav__link">JOIN</a></li>
							<li class="nav__item"><a href="#" class="nav__link">CART</a></li>
							<li class="nav__item"><a href="#" class="nav__link">MEMBERSHIP</a></li>
						</ul>
					</nav>}
				</div>
			</div>
		</div>
		<div class="header__right">
			<div class="search">
				<button type="button" class="search__trigger">
					<span class="a11y">검색</span>
				</button>@@if (search !== 'true') {
				<div class="search__layer">
					<div class="search__form">
						<form action="">
							<fieldset>
								<legend class="a11y">검색</legend>
								<div class="search__row">
									<label for="searchText" class="a11y">검색어</label>
									<input type="text" id="searchText" class="search__input" placeholder="SEARCH EVERYHING">
									<button type="button" class="search__button"><span class="a11y">검색 버튼</span></button>
								</div>
								<!-- 인기검색어 -->
								<div class="search__recommend">
									<ul class="search__list">
										<li class="search__item">
											<a href="#" class="search__link">검색어</a>
										</li>
										<li class="search__item">
											<a href="#" class="search__link">검색어</a>
										</li>
										<li class="search__item">
											<a href="#" class="search__link">검색어</a>
										</li>
										<li class="search__item">
											<a href="#" class="search__link">검색어</a>
										</li>
										<li class="search__item">
											<a href="#" class="search__link">검색어</a>
										</li>
										<li class="search__item">
											<a href="#" class="search__link">검색어</a>
										</li>
									</ul>
								</div>
								<!-- // 인기검색어 -->
							</fieldset>
						</form>
					</div>
				</div>}@@if (search === 'true') {
				<div class="search__layer search__layer--opened">
					<div class="search__form">
						<form action="">
							<fieldset>
								<legend class="a11y">검색</legend>
								<div class="search__row">
									<label for="searchText" class="a11y">검색어</label>
									<input type="text" id="searchText" class="search__input" placeholder="SEARCH EVERYHING">
									<button type="button" class="search__button"><span class="a11y">검색 버튼</span></button>
								</div>
							</fieldset>
						</form>
					</div>
					<div class="search__result">
						<p class="search__text">총 45개 의 제품이 검색되었습니다.</p>
					</div>
				</div>}
			</div>
			<button type="button" class="header__funkplay">
				<span class="a11y">FUNK PLAY 보기</span>
			</button>
		</div>
	</div>
</header>