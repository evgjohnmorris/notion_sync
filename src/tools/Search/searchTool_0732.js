/**
 * Generated Tool: searchTool_0732
 * Domain: Search
 * ID: 0732
 */
exports.searchTool_0732 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0732:', error);
    throw error;
  }
};
