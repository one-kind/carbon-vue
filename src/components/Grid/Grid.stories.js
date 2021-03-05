export default {
  title: 'Extras/Grid'
}

export const Default = () => ({
  storyName: 'Default',
  template: `<div>
  <Grid class="bx--grid--demo">
    <Grid row>
      <Grid col>1 of 4</Grid>
      <Grid col>2 of 4</Grid>
      <Grid col>3 of 4</Grid>
      <Grid col>4 of 4</Grid>
    </Grid>
  </Grid></div>
  `
})

export const Responsive = () => ({
  storyName: 'Responsive',
  template: `<Grid class="bx--grid--demo">
    <Grid row>
      <Grid col :lg="16">16</Grid>
    </Grid>
    <Grid row>
      <Grid col :lg="15" :md="7" :sm="3">15</Grid>
      <Grid col :sm="1" :md="1" :lg="1">1</Grid>
    </Grid>
    <Grid row>
      <Grid col :lg="14" :md="6">14</Grid>
      <Grid col :lg="2" :md="2">2</Grid>
    </Grid>
    <Grid row>
      <Grid col :lg="13" :md="5">13</Grid>
      <Grid col :lg="3" :md="3">3</Grid>
    </Grid>
    <Grid row>
      <Grid col :lg="12">12</Grid>
      <Grid col :lg="4">4</Grid>
    </Grid>
    <Grid row>
      <Grid col :lg="11">11</Grid>
      <Grid col :lg="5">5</Grid>
    </Grid>
    <Grid row>
      <Grid col :lg="10">10</Grid>
      <Grid col :lg="6">6</Grid>
    </Grid>
    <Grid row>
      <Grid col :lg="9">9</Grid>
      <Grid col :lg="7">7</Grid>
    </Grid>
    <Grid row>
      <Grid col :lg="8" :md="4" :sm="2">8</Grid>
      <Grid col :lg="8" :md="4" :sm="2">8</Grid>
    </Grid>
    <Grid row>
      <Grid col :lg="4" :md="2" :sm="1">4</Grid>
      <Grid col :lg="4" :md="2" :sm="1">4</Grid>
      <Grid col :lg="4" :md="2" :sm="1">4</Grid>
      <Grid col :lg="4" :md="2" :sm="1">4</Grid>
    </Grid>
    <Grid row>
      <Grid col :lg="2" :md="1">2</Grid>
      <Grid col :lg="2" :md="1">2</Grid>
      <Grid col :lg="2" :md="1">2</Grid>
      <Grid col :lg="2" :md="1">2</Grid>
      <Grid col :lg="2" :md="1">2</Grid>
      <Grid col :lg="2" :md="1">2</Grid>
      <Grid col :lg="2" :md="1">2</Grid>
      <Grid col :lg="2" :md="1">2</Grid>
    </Grid>
    <Grid row>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
      <Grid col :lg="1">1</Grid>
    </Grid>
  </Grid>`
})


export const EqualWidth = () => ({
  storyName: 'Equal Width',
  template: `
    <Grid class="bx--grid--demo">
      <Grid row>
        <Grid col>1 of 8</Grid>
        <Grid col>1 of 8</Grid>
        <Grid col>1 of 8</Grid>
        <Grid col>1 of 8</Grid>
        <Grid col>1 of 8</Grid>
        <Grid col>1 of 8</Grid>
        <Grid col>1 of 8</Grid>
        <Grid col>1 of 8</Grid>
      </Grid>
      <Grid row>
        <Grid col>1 of 4</Grid>
        <Grid col>1 of 4</Grid>
        <Grid col>1 of 4</Grid>
        <Grid col>1 of 4</Grid>
      </Grid>
      <Grid row>
        <Grid col>1 of 2</Grid>
        <Grid col>1 of 2</Grid>
      </Grid>
      <Grid row>
        <Grid col>1 of 1</Grid>
      </Grid>
    </Grid>`
})

export const Wide = () => ({
  storyName: 'Wide',
  template: `
    <Grid class="bx--grid--demo bx--grid--demo--wide">
      <Grid row>
        <Grid col>
          <div class="bx--grid--demo--content" />
        </Grid>
        <Grid col>
          <div class="bx--grid--demo--content" />
        </Grid>
        <Grid col>
          <div class="bx--grid--demo--content" />
        </Grid>
        <Grid col>
          <div class="bx--grid--demo--content" />
        </Grid>
      </Grid>
    </Grid>`
})

/* export const Narrow = () => ({
  template: `
    <Grid class="bx--grid--demo" narrow>
      <Grid row>
        <Grid col>
            <div class="bx--grid--demo--content" />
        </Grid>
        <Grid col>
            <div class="bx--grid--demo--content" />
        </Grid>
        <Grid col>
            <div class="bx--grid--demo--content" />
        </Grid>
        <Grid col>
            <div class="bx--grid--demo--content" />
        </Grid>
      </Grid>
    </Grid>`
}) */

export const Condensed = () => ({
  storyName: 'Condensed',
  template: `
    <Grid class="bx--grid--demo" condensed>
      <Grid row>
        <Grid col>
          <div class="bx--grid--demo--content" />
        </Grid>
        <Grid col>
          <div class="bx--grid--demo--content" />
        </Grid>
        <Grid col>
          <div class="bx--grid--demo--content" />
        </Grid>
        <Grid col>
          <div class="bx--grid--demo--content" />
        </Grid>
      </Grid>
    </Grid>`
})
