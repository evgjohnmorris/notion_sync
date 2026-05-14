/**
 * Generated Tool: searchTool_0872
 * Domain: Search
 * ID: 0872
 */
exports.searchTool_0872 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0872:', error);
    throw error;
  }
};
