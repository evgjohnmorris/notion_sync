/**
 * Generated Tool: searchTool_0424
 * Domain: Search
 * ID: 0424
 */
exports.searchTool_0424 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0424:', error);
    throw error;
  }
};
