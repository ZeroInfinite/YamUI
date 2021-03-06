/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import Block, { TextSize, TextColor } from '../Block';
import SuggestionsListItem from './SuggestionsListItem';
import Spinner from '../Spinner';
import { LayoutList, LayoutListItem } from '../LayoutList';
import { getClassNames, SuggestionsListClassNames } from './SuggestionsList.styles';
import { SuggestionItem, SuggestionsListProps, SuggestionItemGroup } from './SuggestionsList.types';

export class SuggestionsList extends React.PureComponent<SuggestionsListProps & CustomizableComponentProps> {
  public render() {
    const { className, isLoading, theme = defaultTheme } = this.props;
    const hasResults = this.hasResults();
    const classNames = getClassNames({ isLoading, hasResults, theme });

    return (
      <div className={join(['y-suggestions-list', 'y-hc-border', className, classNames.root])}>
        {this.getResults()}
        {this.getLoadingSpinner(classNames)}
        {this.getNoResults(classNames)}
      </div>
    );
  }

  private hasResults() {
    return this.props.groupedItems.length > 0;
  }

  private getLoadingSpinner(classNames: SuggestionsListClassNames) {
    const { isLoading, loadingText } = this.props;

    if (isLoading) {
      return (
        <div className={classNames.spinnerWrapper}>
          <Spinner text={loadingText} isCentered={true} />
        </div>
      );
    }

    return null;
  }

  private getNoResults(classNames: SuggestionsListClassNames) {
    const { isLoading, noResultsText } = this.props;

    if (!isLoading && !this.hasResults()) {
      return (
        <Block
          textAlign="center"
          textSize={TextSize.SMALL}
          textColor={TextColor.METADATA}
          className={classNames.noResultsWrapper}
        >
          {noResultsText}
        </Block>
      );
    }
  }

  private getResults() {
    if (this.hasResults()) {
      const { groupedItems } = this.props;

      return <LayoutList direction="vertical">{groupedItems.map(this.getGroup)}</LayoutList>;
    }

    return null;
  }

  private getGroup = (group: SuggestionItemGroup) => {
    return (
      <LayoutListItem key={group.title}>
        <LayoutList direction="vertical">{group.items.map(this.getItem)}</LayoutList>
      </LayoutListItem>
    );
  };

  private getItem = (item: SuggestionItem) => {
    const { searchText, selectedId, onItemSelected } = this.props;

    return (
      <LayoutListItem key={item.id}>
        <SuggestionsListItem
          item={item}
          searchText={searchText}
          isSelected={item.id === selectedId}
          onSelect={onItemSelected}
        />
      </LayoutListItem>
    );
  };
}

/**
 * A `SuggestionsList` displays a list of search results in a dropdown.
 */
@customizable('SuggestionsList', ['theme'])
export default class CustomizableSuggestionsList extends SuggestionsList {}
