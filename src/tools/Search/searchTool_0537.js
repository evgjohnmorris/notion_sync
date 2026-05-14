/**
 * Generated Tool: searchTool_0537
 * Domain: Search
 * ID: 0537
 */
exports.searchTool_0537 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0537:', error);
    throw error;
  }
};
